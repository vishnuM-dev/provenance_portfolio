import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  ScanCommand,
  UpdateCommand,
  DeleteCommand,
} from '@aws-sdk/lib-dynamodb';
import { SEED_ASSETS } from './seed-data.js';
import fs from 'fs';
import path from 'path';

const TABLE_NAME = process.env.DYNAMODB_TABLE_NAME || 'ProvenanceAssets';
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

// Detect whether AWS credentials are affirmatively configured
const hasAwsCredentials = Boolean(
  process.env.AWS_ACCESS_KEY_ID &&
  process.env.AWS_SECRET_ACCESS_KEY &&
  process.env.AWS_ACCESS_KEY_ID.trim() !== ''
);

let docClient = null;

if (hasAwsCredentials) {
  try {
    const rawClient = new DynamoDBClient({
      region: AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
    docClient = DynamoDBDocumentClient.from(rawClient);
  } catch (err) {
    console.warn('[Provenance] Failed to initialize AWS DynamoDB client, falling back to local store:', err.message);
  }
}

// Local persistent mock store for seamless development/testing without requiring active AWS account
const LOCAL_STORE_FILE = path.join(process.cwd(), '.provenance-db.json');

function readLocalStore() {
  try {
    if (fs.existsSync(LOCAL_STORE_FILE)) {
      const data = fs.readFileSync(LOCAL_STORE_FILE, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('[Provenance] Error reading local store:', err.message);
  }

  // Seed with initial high-value assets
  const initial = [...SEED_ASSETS];
  try {
    fs.writeFileSync(LOCAL_STORE_FILE, JSON.stringify(initial, null, 2), 'utf-8');
  } catch {
    // ignore
  }
  return initial;
}

function writeLocalStore(items) {
  try {
    fs.writeFileSync(LOCAL_STORE_FILE, JSON.stringify(items, null, 2), 'utf-8');
  } catch (err) {
    console.warn('[Provenance] Error writing to local store:', err.message);
  }
}

/**
 * Retrieve all assets with optional filtering
 */
export async function getAllAssets(filters = {}) {
  const { search, category, status } = filters;

  if (docClient) {
    try {
      const command = new ScanCommand({
        TableName: TABLE_NAME,
      });
      const response = await docClient.send(command);
      let items = response.Items || [];

      if (items.length === 0) {
        // Table may be newly created, fall back to local seed data
        items = readLocalStore();
      }

      return filterAssetList(items, { search, category, status });
    } catch (err) {
      console.warn('[Provenance] AWS DynamoDB Scan failed, using local store:', err.message);
    }
  }

  const items = readLocalStore();
  return filterAssetList(items, { search, category, status });
}

function filterAssetList(items, { search, category, status }) {
  let filtered = [...items];

  if (category && category !== 'All') {
    filtered = filtered.filter(item => item.category?.toLowerCase() === category.toLowerCase());
  }

  if (status && status !== 'All') {
    filtered = filtered.filter(item => item.status?.toLowerCase() === status.toLowerCase());
  }

  if (search && search.trim()) {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(item =>
      item.title?.toLowerCase().includes(q) ||
      item.creator?.toLowerCase().includes(q) ||
      item.id?.toLowerCase().includes(q) ||
      item.certificateCode?.toLowerCase().includes(q) ||
      item.currentCustodian?.toLowerCase().includes(q)
    );
  }

  return filtered;
}

/**
 * Retrieve asset by ID
 */
export async function getAssetById(id) {
  if (!id) return null;

  if (docClient) {
    try {
      const command = new GetCommand({
        TableName: TABLE_NAME,
        Key: { id },
      });
      const response = await docClient.send(command);
      if (response.Item) return response.Item;
    } catch (err) {
      console.warn('[Provenance] AWS DynamoDB GetItem failed, searching local store:', err.message);
    }
  }

  const items = readLocalStore();
  return items.find(item => item.id === id) || null;
}

/**
 * Retrieve asset by Certificate Code or Asset ID
 */
export async function getAssetByCertificateCode(code) {
  if (!code) return null;
  const cleanCode = code.trim().toUpperCase();

  const items = await getAllAssets();
  return items.find(
    item =>
      (item.certificateCode && item.certificateCode.toUpperCase() === cleanCode) ||
      (item.id && item.id.toUpperCase() === cleanCode)
  ) || null;
}

/**
 * Create a new asset in DynamoDB
 */
export async function createAsset(assetData) {
  const now = new Date().toISOString();
  const newAsset = {
    ...assetData,
    provenanceEvents: assetData.provenanceEvents || [],
    createdAt: now,
    updatedAt: now,
  };

  if (docClient) {
    try {
      const command = new PutCommand({
        TableName: TABLE_NAME,
        Item: newAsset,
      });
      await docClient.send(command);
    } catch (err) {
      console.warn('[Provenance] AWS DynamoDB PutItem failed, saving to local store:', err.message);
    }
  }

  const items = readLocalStore();
  items.unshift(newAsset);
  writeLocalStore(items);

  return newAsset;
}

/**
 * Update existing asset
 */
export async function updateAsset(id, updateData) {
  const items = readLocalStore();
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    throw new Error(`Asset with ID ${id} not found`);
  }

  const updatedAsset = {
    ...items[index],
    ...updateData,
    id, // preserve id
    updatedAt: new Date().toISOString(),
  };

  items[index] = updatedAsset;
  writeLocalStore(items);

  if (docClient) {
    try {
      const command = new PutCommand({
        TableName: TABLE_NAME,
        Item: updatedAsset,
      });
      await docClient.send(command);
    } catch (err) {
      console.warn('[Provenance] AWS DynamoDB update fallback:', err.message);
    }
  }

  return updatedAsset;
}

/**
 * Append a provenance event to the custody chain
 */
export async function addProvenanceEvent(id, eventData) {
  const asset = await getAssetById(id);
  if (!asset) {
    throw new Error(`Asset with ID ${id} not found`);
  }

  const events = asset.provenanceEvents || [];
  const newEvent = {
    id: eventData.id || `evt_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    date: eventData.date || new Date().toISOString().split('T')[0],
    eventType: eventData.eventType || 'Custody Update',
    custodian: eventData.custodian || asset.currentCustodian,
    location: eventData.location || 'Undisclosed',
    description: eventData.description || 'Chain-of-custody update logged.',
    verifiedBy: eventData.verifiedBy || 'Provenance Verification Officer',
  };

  const updatedEvents = [...events, newEvent];
  const updatedAsset = await updateAsset(id, {
    provenanceEvents: updatedEvents,
    currentCustodian: eventData.custodian || asset.currentCustodian,
  });

  return { asset: updatedAsset, event: newEvent };
}

/**
 * Delete an asset
 */
export async function deleteAsset(id) {
  const items = readLocalStore();
  const filtered = items.filter(item => item.id !== id);
  writeLocalStore(filtered);

  if (docClient) {
    try {
      const command = new DeleteCommand({
        TableName: TABLE_NAME,
        Key: { id },
      });
      await docClient.send(command);
    } catch (err) {
      console.warn('[Provenance] AWS DynamoDB DeleteItem fallback:', err.message);
    }
  }

  return { success: true, id };
}

/**
 * Get dashboard statistics
 */
export async function getDashboardMetrics() {
  const items = await getAllAssets();
  const totalAssets = items.length;
  const verifiedAssets = items.filter(i => i.status === 'Verified').length;
  const underReview = items.filter(i => i.status === 'Under Review').length;
  const totalValue = items.reduce((acc, curr) => acc + (Number(curr.estimatedValue) || 0), 0);

  const categories = {};
  items.forEach(item => {
    const cat = item.category || 'Other';
    categories[cat] = (categories[cat] || 0) + 1;
  });

  return {
    totalAssets,
    verifiedAssets,
    underReview,
    totalValue,
    categories,
    recentAssets: items.slice(0, 5),
  };
}

/**
 * Record a consultation / contact inquiry
 */
const LOCAL_INQUIRIES_FILE = path.join(process.cwd(), '.provenance-inquiries.json');

export async function createInquiry(data) {
  const inquiry = {
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    ...data,
    createdAt: new Date().toISOString(),
  };

  try {
    let list = [];
    if (fs.existsSync(LOCAL_INQUIRIES_FILE)) {
      list = JSON.parse(fs.readFileSync(LOCAL_INQUIRIES_FILE, 'utf-8'));
    }
    list.unshift(inquiry);
    fs.writeFileSync(LOCAL_INQUIRIES_FILE, JSON.stringify(list, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Error saving inquiry:', err.message);
  }

  return inquiry;
}

export async function getInquiries() {
  try {
    if (fs.existsSync(LOCAL_INQUIRIES_FILE)) {
      return JSON.parse(fs.readFileSync(LOCAL_INQUIRIES_FILE, 'utf-8'));
    }
  } catch {
    // ignore
  }
  return [];
}

