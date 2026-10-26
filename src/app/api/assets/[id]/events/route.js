import { NextResponse } from 'next/server';
import { addProvenanceEvent } from '@/lib/dynamodb';
import { getSession } from '@/lib/auth';

export async function POST(request, { params }) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized: Admin privileges required' },
        { status: 403 }
      );
    }

    const { id } = await params;
    const body = await request.json();

    const { date, eventType, custodian, location, description } = body;

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
      verifiedBy: session.name || 'Prevenance Authenticator',
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
