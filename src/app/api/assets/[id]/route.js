import { NextResponse } from 'next/server';
import { getAssetById, updateAsset, deleteAsset } from '@/lib/dynamodb';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const asset = await getAssetById(id);

    if (!asset) {
      return NextResponse.json(
        { error: `Asset with ID '${id}' was not found in the registry` },
        { status: 404 }
      );
    }

    return NextResponse.json(asset);
  } catch (err) {
    console.error('Failed to get asset:', err);
    return NextResponse.json(
      { error: 'Internal server error retrieving asset' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updated = await updateAsset(id, body);
    return NextResponse.json(updated);
  } catch (err) {
    console.error('Failed to update asset:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to update asset' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await deleteAsset(id);
    return NextResponse.json({ success: true, message: `Asset ${id} removed` });
  } catch (err) {
    console.error('Failed to delete asset:', err);
    return NextResponse.json(
      { error: 'Failed to delete asset' },
      { status: 500 }
    );
  }
}
