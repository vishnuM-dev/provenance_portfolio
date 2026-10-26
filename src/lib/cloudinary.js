import { v2 as cloudinary } from 'cloudinary';

const isCloudinaryConfigured = Boolean(
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
);

if (isCloudinaryConfigured) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
}

/**
 * Upload an image buffer or base64 string to Cloudinary
 * Falls back to base64 data-URL if Cloudinary credentials are not set
 */
export async function uploadImage(bufferOrBase64, filename = 'asset') {
  if (isCloudinaryConfigured) {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'prevenance/assets',
          resource_type: 'image',
          public_id: `${filename.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}`,
          transformation: [{ quality: 'auto', fetch_format: 'auto' }],
        },
        (error, result) => {
          if (error) {
            console.error('[Prevenance Cloudinary Error]:', error);
            return reject(error);
          }
          resolve({
            url: result.secure_url,
            publicId: result.public_id,
            format: result.format,
            width: result.width,
            height: result.height,
          });
        }
      );

      // Handle Buffer or base64 string
      if (Buffer.isBuffer(bufferOrBase64)) {
        uploadStream.end(bufferOrBase64);
      } else if (typeof bufferOrBase64 === 'string') {
        const base64Data = bufferOrBase64.replace(/^data:image\/\w+;base64,/, '');
        uploadStream.end(Buffer.from(base64Data, 'base64'));
      } else {
        reject(new Error('Invalid image payload type'));
      }
    });
  }

  // Graceful fallback for local development without Cloudinary credentials:
  // Convert buffer to data URI so image displays instantly in the UI
  let dataUrl = '';
  if (Buffer.isBuffer(bufferOrBase64)) {
    dataUrl = `data:image/jpeg;base64,${bufferOrBase64.toString('base64')}`;
  } else if (typeof bufferOrBase64 === 'string') {
    dataUrl = bufferOrBase64.startsWith('data:')
      ? bufferOrBase64
      : `data:image/jpeg;base64,${bufferOrBase64}`;
  }

  return {
    url: dataUrl || 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    publicId: `local_${Date.now()}`,
    isLocalFallback: true,
  };
}
