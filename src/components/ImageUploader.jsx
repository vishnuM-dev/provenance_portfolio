'use client';

import { useState, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, AlertCircle, Loader2 } from 'lucide-react';

export default function ImageUploader({ initialUrl = '', onUploadComplete }) {
  const [preview, setPreview] = useState(initialUrl);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [directUrl, setDirectUrl] = useState(initialUrl);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select an image file (PNG, JPG, WEBP)');
      return;
    }

    setError('');
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      setPreview(data.url);
      setDirectUrl(data.url);
      if (onUploadComplete) {
        onUploadComplete(data.url);
      }
    } catch (err) {
      console.error('Upload error:', err);
      setError(err.message || 'Image upload failed. Ensure you are signed in as Admin.');
    } finally {
      setUploading(false);
    }
  };

  const handleDirectUrlChange = (e) => {
    const val = e.target.value;
    setDirectUrl(val);
    setPreview(val);
    if (onUploadComplete) {
      onUploadComplete(val);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div
        onClick={() => fileInputRef.current?.click()}
        style={{
          border: '2px dashed var(--border-warm)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 1rem',
          textAlign: 'center',
          cursor: 'pointer',
          background: '#fffbf7',
          transition: 'all 0.25s ease',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-soft)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--primary)';
          e.currentTarget.style.background = '#fef6ee';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-warm)';
          e.currentTarget.style.background = '#fffbf7';
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />

        {uploading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <Loader2 className="animate-spin" size={32} color="var(--primary)" />
            <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
              Uploading to Cloudinary Media Vault...
            </span>
          </div>
        ) : preview ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview}
              alt="Asset preview"
              style={{
                maxWidth: '100%',
                maxHeight: '200px',
                objectFit: 'contain',
                borderRadius: '16px',
                border: '1px solid var(--border-subtle)',
              }}
            />
            <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Click to replace image
            </span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'var(--primary-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
            }}>
              <UploadCloud size={26} />
            </div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Drag and drop or click to upload
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Supports PNG, JPG, WEBP (stored securely on Cloudinary)
              </div>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--accent-danger)',
          fontSize: '0.85rem',
          background: 'var(--accent-danger-bg)',
          padding: '0.65rem 0.9rem',
          borderRadius: 'var(--radius-sm)',
        }}>
          <AlertCircle size={15} />
          {error}
        </div>
      )}

      {/* Direct URL input fallback */}
      <div className="form-group" style={{ marginBottom: 0 }}>
        <label className="form-label">
          Or paste direct Image CDN / Cloudinary URL:
        </label>
        <input
          type="url"
          className="form-input"
          placeholder="https://images.unsplash.com/..."
          value={directUrl}
          onChange={handleDirectUrlChange}
        />
      </div>
    </div>
  );
}
