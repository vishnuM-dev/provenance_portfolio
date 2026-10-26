import { NextResponse } from 'next/server';
import { createInquiry, getInquiries } from '@/lib/dynamodb';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const inquiries = await getInquiries();
    return NextResponse.json({ inquiries });
  } catch (err) {
    console.error('Fetch inquiries error:', err);
    return NextResponse.json({ error: 'Failed to fetch inquiries' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, organization, assetCategory, projectType, budget, timeline, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and project message are required.' },
        { status: 400 }
      );
    }

    const inquiry = await createInquiry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      organization: (organization || 'Independent Enterprise').trim(),
      assetCategory: projectType || assetCategory || 'Web & Mobile Development',
      projectType: projectType || assetCategory || 'Web & Mobile Development',
      budget: budget || 'Flexible',
      timeline: timeline || 'Standard',
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      inquiryId: inquiry.id,
      message: 'Your project inquiry has been received! Our engineering team will review your specifications and contact you within 24 hours.',
    }, { status: 201 });
  } catch (err) {
    console.error('Contact error:', err);
    return NextResponse.json(
      { error: 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}
