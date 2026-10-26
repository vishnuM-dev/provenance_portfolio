import { NextResponse } from 'next/server';
import { getAssetByCertificateCode } from '@/lib/dynamodb';

export async function GET(request, { params }) {
  try {
    const { code } = await params;
    if (!code) {
      return NextResponse.json(
        { verified: false, error: 'Verification code or Asset ID is required' },
        { status: 400 }
      );
    }

    const asset = await getAssetByCertificateCode(code);

    if (!asset) {
      return NextResponse.json({
        verified: false,
        code,
        message: 'No registered authenticity certificate or asset found matching this identifier.',
      }, { status: 404 });
    }

    return NextResponse.json({
      verified: true,
      timestamp: new Date().toISOString(),
      certificateCode: asset.certificateCode,
      assetId: asset.id,
      title: asset.title,
      creator: asset.creator,
      creationYear: asset.creationYear,
      category: asset.category,
      status: asset.status,
      currentCustodian: asset.currentCustodian,
      totalRecordedEvents: asset.provenanceEvents?.length || 0,
      provenanceEvents: asset.provenanceEvents || [],
      imageUrl: asset.imageUrl,
      verificationAuthority: 'Prevenance Global Asset Registry',
    });
  } catch (err) {
    console.error('Verification query failed:', err);
    return NextResponse.json(
      { verified: false, error: 'Verification server error' },
      { status: 500 }
    );
  }
}
