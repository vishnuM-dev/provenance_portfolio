import { NextResponse } from 'next/server';
import { addProvenanceEvent } from '@/lib/dynamodb';

export async function POST(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const { date, eventType, custodian, location, description, verifiedBy } = body;

    if (!eventType || !custodian) {
      return NextResponse.json(
        { error: 'Event type and custodian are required' },
        { status: 400 }
      );
    }

    const result = await addProvenanceEvent(id, {
      date: date || new Date().toISOString().split('T')[0],
      eventType,
      custodian,
      location: location || 'Undisclosed',
      description: description || 'Custody transfer or inspection logged.',
      verifiedBy: verifiedBy || 'Provenance Authenticator',
    });

    return NextResponse.json(result, { status: 201 });
  } catch (err) {
    console.error('Failed to log provenance event:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to record provenance event' },
      { status: 500 }
    );
  }
}
