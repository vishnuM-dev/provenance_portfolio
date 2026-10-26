'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageUploader from '@/components/ImageUploader';
import {
  ArrowLeft,
  ShieldCheck,
  Save,
  Sparkles,
  AlertCircle,
  FileText,
  Loader2
} from 'lucide-react';
import { generateAssetId, generateCertificateCode } from '@/lib/utils';

const CATEGORIES = ['Mobile Apps', 'Web Applications', 'Custom Software', 'Cloud Solutions', 'Full-Stack Platforms'];

export default function NewAssetPage() {
  const router = useRouter();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    creator: '',
    creationYear: new Date().getFullYear().toString(),
    category: 'Mobile Apps',
    status: 'Live Production',
    estimatedValue: '',
    medium: 'Next.js, React Native, DynamoDB',
    dimensions: 'iOS, Android, Responsive Web',
    originLocation: 'San Francisco, CA',
    currentCustodian: 'Prevenance Managed Cloud SLA',
    imageUrl: '',
    description: '',
    conditionReport: '99.99% SLA Uptime. Sub-10ms DynamoDB query latency.',
  });

  useEffect(() => {
    async function verifyAuth() {
      try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();
        if (!res.ok || !data.authenticated) {
          router.push('/admin/login');
        }
      } catch {
        router.push('/admin/login');
      } finally {
        setLoadingAuth(false);
      }
    }
    verifyAuth();
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUploaded = (url) => {
    setFormData((prev) => ({ ...prev, imageUrl: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.title || !formData.creator) {
      setError('Title and Creator are required.');
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        ...formData,
        id: generateAssetId(),
        certificateCode: generateCertificateCode(),
        creationYear: formData.creationYear ? Number(formData.creationYear) : null,
        estimatedValue: formData.estimatedValue ? Number(formData.estimatedValue) : null,
      };

      const res = await fetch('/api/assets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to register asset');
      }

      router.push(`/catalog/${data.id}`);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error recording asset in DynamoDB');
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingAuth) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <Loader2 className="animate-spin" size={32} color="var(--gold-primary)" style={{ margin: '0 auto 1rem' }} />
        <div>Verifying curator session...</div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '880px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/admin/dashboard" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--text-secondary)',
          fontSize: '0.875rem',
        }}>
          <ArrowLeft size={16} />
          Return to Dashboard
        </Link>
      </div>

      <div className="glass-panel" style={{ padding: '2.5rem' }}>
        <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-gold)', paddingBottom: '1.25rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--gold-primary)',
            fontSize: '0.8rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.35rem',
          }}>
            <Sparkles size={14} />
            Registry Intake Protocol
          </div>
          <h1 className="font-serif" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Register New Provenance Asset
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Mint a certified chain-of-custody ledger record with Amazon DynamoDB and Cloudinary media vault.
          </p>
        </div>

        {error && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#f87171',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.85rem',
            marginBottom: '1.5rem',
          }}>
            <AlertCircle size={16} />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Section 1: Identification */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '1rem',
          }}>
            <div className="form-group">
              <label className="form-label">Asset Title *</label>
              <input
                type="text"
                name="title"
                required
                placeholder="e.g. The Celestial Astrolabe of Andalusia"
                value={formData.title}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Creator / Artist / Maker *</label>
              <input
                type="text"
                name="creator"
                required
                placeholder="e.g. Ahmad ibn Muhammad al-Naqqash"
                value={formData.creator}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            marginBottom: '1rem',
          }}>
            <div className="form-group">
              <label className="form-label">Creation Epoch / Year</label>
              <input
                type="number"
                name="creationYear"
                placeholder="e.g. 1324"
                value={formData.creationYear}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-select"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Certification Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Verified">Verified (Certified)</option>
                <option value="Under Review">Under Review</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Estimated Valuation (USD)</label>
              <input
                type="number"
                name="estimatedValue"
                placeholder="e.g. 4500000"
                value={formData.estimatedValue}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          {/* Section 2: Physical Attributes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '1rem',
          }}>
            <div className="form-group">
              <label className="form-label">Medium & Materials</label>
              <input
                type="text"
                name="medium"
                placeholder="e.g. Engraved gilded brass with silver inlay"
                value={formData.medium}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Physical Dimensions</label>
              <input
                type="text"
                name="dimensions"
                placeholder="e.g. 19.4 cm diameter, 1.8 kg"
                value={formData.dimensions}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '1.5rem',
          }}>
            <div className="form-group">
              <label className="form-label">Geographic Origin</label>
              <input
                type="text"
                name="originLocation"
                placeholder="e.g. Cordoba, Andalusia"
                value={formData.originLocation}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Current Custodian Vault / Museum</label>
              <input
                type="text"
                name="currentCustodian"
                placeholder="e.g. British Museum Antiquities Wing"
                value={formData.currentCustodian}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          {/* Section 3: Cloudinary Image Upload */}
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">
              Asset Media (Uploaded to Cloudinary CDN)
            </label>
            <ImageUploader
              initialUrl={formData.imageUrl}
              onUploadComplete={handleImageUploaded}
            />
          </div>

          {/* Section 4: Descriptions */}
          <div className="form-group">
            <label className="form-label">Curatorial Description</label>
            <textarea
              name="description"
              rows={3}
              placeholder="Comprehensive historical context, provenance notes, and artistic significance..."
              value={formData.description}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>

          <div className="form-group" style={{ marginBottom: '2.5rem' }}>
            <label className="form-label">Condition Report & Forensic Spectrometry</label>
            <textarea
              name="conditionReport"
              rows={3}
              placeholder="XRF spectrometry results, micro-laser serial inspection, preservation state..."
              value={formData.conditionReport}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <Link href="/admin/dashboard" className="btn btn-secondary">
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary"
              style={{ padding: '0.85rem 2rem' }}
            >
              {submitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Registering Asset...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Record in DynamoDB
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
