import { NextResponse } from 'next/server';
import { getAllAssets, createAsset, getDashboardMetrics } from '@/lib/dynamodb';
import { getSession } from '@/lib/auth';
import { generateAssetId, generateCertificateCode } from '@/lib/utils';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const status = searchParams.get('status') || '';
    const metricsOnly = searchParams.get('metrics') === 'true';

    if (metricsOnly) {
      const metrics = await getDashboardMetrics();
      return NextResponse.json(metrics);
    }

    const assets = await getAllAssets({ search, category, status });
    return NextResponse.json({
      count: assets.length,
      assets,
    });
  } catch (err) {
    console.error('Failed to fetch assets:', err);
    return NextResponse.json(
      { error: 'Failed to retrieve asset catalog' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // Server-side authorization check
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized: Admin privileges required' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const {
      title,
      creator,
      creationYear,
      category,
      status,
      estimatedValue,
      medium,
      dimensions,
      originLocation,
      currentCustodian,
      imageUrl,
      description,
      conditionReport,
      provenanceEvents,
    } = body;

    if (!title || !creator) {
      return NextResponse.json(
        { error: 'Title and creator/maker are required fields' },
        { status: 400 }
      );
    }

    const assetId = body.id || generateAssetId();
    const certificateCode = body.certificateCode || generateCertificateCode();

    const assetData = {
      id: assetId,
      title: title.trim(),
      creator: creator.trim(),
      creationYear: creationYear ? Number(creationYear) : null,
      category: category || 'Fine Art',
      status: status || 'Verified',
      estimatedValue: estimatedValue ? Number(estimatedValue) : null,
      medium: medium || '',
      dimensions: dimensions || '',
      originLocation: originLocation || '',
      currentCustodian: currentCustodian || 'Prevenance Custody Reserve',
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      certificateCode,
      description: description || '',
      conditionReport: conditionReport || '',
      provenanceEvents: Array.isArray(provenanceEvents) ? provenanceEvents : [
        {
          id: `evt_init_${Date.now()}`,
          date: new Date().toISOString().split('T')[0],
          eventType: 'Initial Registration & Authenticity Audit',
          custodian: currentCustodian || 'Prevenance Custody Reserve',
          location: originLocation || 'Institutional Vault',
          description: 'Asset cataloged and cryptographic certificate issued by Prevenance registrar.',
          verifiedBy: session.name || 'Prevenance Curator',
        }
      ],
    };

    const created = await createAsset(assetData);
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error('Failed to create asset:', err);
    return NextResponse.json(
      { error: 'Failed to record asset in DynamoDB registry' },
      { status: 500 }
    );
  }
}
