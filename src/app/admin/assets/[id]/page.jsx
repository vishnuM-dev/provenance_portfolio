'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageUploader from '@/components/ImageUploader';
import ProvenanceTimeline from '@/components/ProvenanceTimeline';
import {
  ArrowLeft,
  Save,
  PlusCircle,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Loader2
} from 'lucide-react';

const EVENT_TYPES = [
  'Discovery & System Architecture',
  'UI/UX Wireframing & Design System',
  'Core API & Sprint Development',
  'Security & Penetration Audit',
  'Automated QA & Load Testing',
  'App Store & Cloud Release',
  'SLA & Performance Milestone',
];

export default function EditAssetPage({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const router = useRouter();

  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [eventSaving, setEventSaving] = useState(false);
  const [msg, setMsg] = useState({ text: '', type: '' });

  // New Provenance Event State
  const [newEvent, setNewEvent] = useState({
    date: new Date().toISOString().split('T')[0],
    eventType: 'Discovery & System Architecture',
    custodian: '',
    location: '',
    description: '',
  });

  const fetchAsset = async () => {
    try {
      const res = await fetch(`/api/assets/${id}`);
      if (!res.ok) throw new Error('Asset not found');
      const data = await res.json();
      setAsset(data);
      setNewEvent(prev => ({
        ...prev,
        custodian: data.currentCustodian || '',
      }));
    } catch (err) {
      console.error(err);
      setMsg({ text: 'Failed to load asset details', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    async function checkAuthAndLoad() {
      try {
        const authRes = await fetch('/api/auth/me');
        const authData = await authRes.json();
        if (!authRes.ok || !authData.authenticated) {
          router.push('/admin/login');
          return;
        }

        const res = await fetch(`/api/assets/${id}`);
        if (!res.ok) throw new Error('Asset not found');
        const data = await res.json();

        if (!ignore) {
          setAsset(data);
          setNewEvent(prev => ({
            ...prev,
            custodian: data.currentCustodian || '',
          }));
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        if (!ignore) {
          setMsg({ text: 'Failed to load asset details', type: 'error' });
          setLoading(false);
        }
      }
    }

    checkAuthAndLoad();
    return () => { ignore = true; };
  }, [id, router]);

  const handleAssetFieldChange = (e) => {
    const { name, value } = e.target;
    setAsset(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUploaded = (url) => {
    setAsset(prev => ({ ...prev, imageUrl: url }));
  };

  const handleSaveAsset = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMsg({ text: '', type: '' });

    try {
      const res = await fetch(`/api/assets/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(asset),
      });

      if (!res.ok) throw new Error('Failed to update asset');
      setMsg({ text: 'Asset record updated successfully in DynamoDB!', type: 'success' });
    } catch (err) {
      setMsg({ text: err.message || 'Error updating asset', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    setEventSaving(true);
    setMsg({ text: '', type: '' });

    try {
      const res = await fetch(`/api/assets/${id}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvent),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to add event');
      }

      setMsg({ text: 'New provenance event appended to immutable custody chain!', type: 'success' });
      setNewEvent(prev => ({ ...prev, description: '' }));
      await fetchAsset();
    } catch (err) {
      setMsg({ text: err.message || 'Error appending event', type: 'error' });
    } finally {
      setEventSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <RefreshCw className="animate-spin" size={32} color="var(--gold-primary)" style={{ margin: '0 auto 1rem' }} />
        <div>Loading asset records...</div>
      </div>
    );
  }

  if (!asset) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2>Asset not found in registry</h2>
        <Link href="/admin/dashboard" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Return to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '980px' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/admin/dashboard" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--text-secondary)',
          fontSize: '0.875rem',
        }}>
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <Link href={`/catalog/${asset.id}`} className="btn btn-secondary btn-sm" target="_blank">
          View Public Page
        </Link>
      </div>

      {msg.text && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: msg.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          border: `1px solid ${msg.type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
          color: msg.type === 'success' ? 'var(--accent-verified)' : '#f87171',
          padding: '0.85rem 1rem',
          borderRadius: 'var(--radius-md)',
          fontSize: '0.9rem',
          marginBottom: '1.5rem',
        }}>
          {msg.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          {msg.text}
        </div>
      )}

      {/* Primary Edit Details */}
      <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-gold)', paddingBottom: '1rem' }}>
          <div>
            <h1 className="font-serif" style={{ fontSize: '1.85rem', fontWeight: 700 }}>
              Edit Asset Dossier
            </h1>
            <div style={{ fontSize: '0.85rem', color: 'var(--gold-light)', fontFamily: 'monospace' }}>
              Registry ID: {asset.id} • Certificate: {asset.certificateCode}
            </div>
          </div>

          <span className={`badge ${asset.status === 'Verified' ? 'badge-verified' : 'badge-review'}`}>
            {asset.status}
          </span>
        </div>

        <form onSubmit={handleSaveAsset}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Asset Title</label>
              <input
                type="text"
                name="title"
                value={asset.title || ''}
                onChange={handleAssetFieldChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Creator / Maker</label>
              <input
                type="text"
                name="creator"
                value={asset.creator || ''}
                onChange={handleAssetFieldChange}
                className="form-input"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Creation Year</label>
              <input
                type="number"
                name="creationYear"
                value={asset.creationYear || ''}
                onChange={handleAssetFieldChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Status</label>
              <select
                name="status"
                value={asset.status || 'Verified'}
                onChange={handleAssetFieldChange}
                className="form-select"
              >
                <option value="Verified">Verified</option>
                <option value="Under Review">Under Review</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Estimated Valuation ($)</label>
              <input
                type="number"
                name="estimatedValue"
                value={asset.estimatedValue || ''}
                onChange={handleAssetFieldChange}
                className="form-input"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label">Current Custodian Vault</label>
              <input
                type="text"
                name="currentCustodian"
                value={asset.currentCustodian || ''}
                onChange={handleAssetFieldChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Origin Location</label>
              <input
                type="text"
                name="originLocation"
                value={asset.originLocation || ''}
                onChange={handleAssetFieldChange}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Image (Stored on Cloudinary)</label>
            <ImageUploader
              initialUrl={asset.imageUrl}
              onUploadComplete={handleImageUploaded}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Curatorial Description</label>
            <textarea
              name="description"
              rows={3}
              value={asset.description || ''}
              onChange={handleAssetFieldChange}
              className="form-textarea"
            />
          </div>

          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label">Forensic Condition Report</label>
            <textarea
              name="conditionReport"
              rows={3}
              value={asset.conditionReport || ''}
              onChange={handleAssetFieldChange}
              className="form-textarea"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="submit"
              disabled={saving}
              className="btn btn-primary"
              style={{ padding: '0.85rem 2rem' }}
            >
              {saving ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Saving in DynamoDB...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Append Provenance Event Form */}
      <div className="glass-panel-gold" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
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
            <ShieldCheck size={14} />
            Cryptographic Custody Protocol
          </div>
          <h2 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 700 }}>
            Append Provenance Event to Custody Chain
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Log a new historical transfer, scientific audit, exhibition loan, or conservation record.
          </p>
        </div>

        <form onSubmit={handleAddEvent}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Event Date</label>
              <input
                type="date"
                required
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Event Classification</label>
              <select
                value={newEvent.eventType}
                onChange={(e) => setNewEvent({ ...newEvent, eventType: e.target.value })}
                className="form-select"
              >
                {EVENT_TYPES.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1rem' }}>
            <div className="form-group">
              <label className="form-label">New Custodian / Institution *</label>
              <input
                type="text"
                required
                placeholder="e.g. Louvre Conservation Center"
                value={newEvent.custodian}
                onChange={(e) => setNewEvent({ ...newEvent, custodian: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Geographic Location</label>
              <input
                type="text"
                placeholder="e.g. Paris, France"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '1.75rem' }}>
            <label className="form-label">Event Description & Documentation Proof *</label>
            <textarea
              required
              rows={3}
              placeholder="Detailed description of auction lot, deed transfer, or laboratory spectrometry audit..."
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="form-textarea"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="submit"
              disabled={eventSaving}
              className="btn btn-primary"
              style={{ padding: '0.85rem 2rem' }}
            >
              {eventSaving ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Writing to Ledger...
                </>
              ) : (
                <>
                  <PlusCircle size={18} />
                  Append to Provenance Timeline
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Current Chain of Custody Timeline Display */}
      <div className="glass-panel" style={{ padding: '2.5rem' }}>
        <h3 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 600, marginBottom: '1.5rem' }}>
          Current Registered Timeline ({asset.provenanceEvents?.length || 0} Events)
        </h3>
        <ProvenanceTimeline
          events={asset.provenanceEvents}
          currentCustodian={asset.currentCustodian}
        />
      </div>
    </div>
  );
}
