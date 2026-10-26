import { NextResponse } from 'next/server';
import { uploadImage } from '@/lib/cloudinary';
import { getSession } from '@/lib/auth';

export async function POST(request) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized: Admin privileges required for media upload' },
        { status: 403 }
      );
    }

    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const file = formData.get('file');

      if (!file || typeof file === 'string') {
        return NextResponse.json(
          { error: 'No valid image file uploaded' },
          { status: 400 }
        );
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filename = file.name || 'asset_media';

      const result = await uploadImage(buffer, filename);
      return NextResponse.json(result);
    } else {
      // JSON body with base64 dataUrl
      const body = await request.json();
      const { image, filename } = body;

      if (!image) {
        return NextResponse.json(
          { error: 'No image payload provided' },
          { status: 400 }
        );
      }

      const result = await uploadImage(image, filename || 'asset_media');
      return NextResponse.json(result);
    }
  } catch (err) {
    console.error('Image upload failed:', err);
    return NextResponse.json(
      { error: err.message || 'Image upload processing failed' },
      { status: 500 }
    );
  }
}
