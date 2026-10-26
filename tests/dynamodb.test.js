import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getAllAssets,
  getAssetById,
  getAssetByCertificateCode,
  createAsset,
  updateAsset,
  addProvenanceEvent,
  deleteAsset,
} from '../src/lib/dynamodb.js';

test('getAllAssets returns seed projects and respects category filters', async () => {
  const all = await getAllAssets();
  assert.ok(Array.isArray(all));
  assert.ok(all.length >= 5);

  const mobileApps = await getAllAssets({ category: 'Mobile Apps' });
  assert.ok(mobileApps.length >= 1);
  assert.ok(mobileApps.every(w => w.category === 'Mobile Apps'));
});

test('getAssetById returns the requested project or null', async () => {
  const project = await getAssetById('PRV-2026-APP01');
  assert.ok(project);
  assert.equal(project.title, 'ApexPay Global – Cross-Border Payments App');

  const missing = await getAssetById('NON-EXISTENT-ID');
  assert.equal(missing, null);
});

test('getAssetByCertificateCode retrieves project via release token', async () => {
  const project = await getAssetByCertificateCode('CERT-APEXPAY-2026-A109');
  assert.ok(project);
  assert.equal(project.id, 'PRV-2026-APP01');
});

test('Project CRUD lifecycle and release milestone chain appending', async () => {
  const testId = `PRV-TEST-${Date.now()}`;
  const testCert = `CERT-TEST-${Date.now()}`;

  // 1. Create
  const created = await createAsset({
    id: testId,
    title: 'Enterprise ERP Cloud Dashboard',
    creator: 'Global Supply Corp',
    creationYear: 2026,
    category: 'Web Applications',
    status: 'Live Production',
    estimatedValue: 450000,
    certificateCode: testCert,
    currentCustodian: 'Enterprise Cloud Operations',
  });

  assert.equal(created.id, testId);

  // 2. Read
  const fetched = await getAssetById(testId);
  assert.ok(fetched);
  assert.equal(fetched.title, 'Enterprise ERP Cloud Dashboard');

  // 3. Update
  const updated = await updateAsset(testId, {
    estimatedValue: 500000,
  });
  assert.equal(updated.estimatedValue, 500000);

  // 4. Append milestone event
  const withEvent = await addProvenanceEvent(testId, {
    eventType: 'Security & Penetration Audit',
    description: 'Passed automated OWASP Top 10 automated test suites with 0 critical findings.',
    location: 'Cloud Security Lab',
    verifiedBy: 'Lead DevOps Architect',
  });
  assert.ok(withEvent.asset.provenanceEvents.length >= 1);
  assert.equal(withEvent.event.eventType, 'Security & Penetration Audit');

  // 5. Delete
  const deleted = await deleteAsset(testId);
  assert.equal(deleted.success, true);

  const checkDeleted = await getAssetById(testId);
  assert.equal(checkDeleted, null);
});
