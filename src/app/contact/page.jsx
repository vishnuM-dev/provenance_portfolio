'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Send,
  Building,
  CheckCheck,
  AlertCircle,
  Loader2,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  Code2,
  Smartphone,
  Calendar
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'Web Application Development',
    budget: '$25,000 - $50,000',
    timeline: '1 - 3 Months',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, msg: '', success: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: '', success: false });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit inquiry');

      setStatus({
        loading: false,
        msg: 'Project inquiry successfully transmitted! Our lead solutions architect will reach out within 24 hours.',
        success: true,
      });
      setFormData({
        name: '',
        email: '',
        organization: '',
        projectType: 'Web Application Development',
        budget: '$25,000 - $50,000',
        timeline: '1 - 3 Months',
        message: ''
      });
    } catch (err) {
      setStatus({ loading: false, msg: err.message, success: false });
    }
  };

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem 5rem' }}>
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Sparkles size={14} color="var(--primary)" />
          Technical Consultation & Project Intake
        </div>
        <h1 className="section-title">
          Let&apos;s Build Your Next Digital Product
        </h1>
        <p className="section-desc">
          Schedule a discovery consultation with our senior engineers to review technical requirements, architectural feasibility, and sprint milestones.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
        {/* Contact Info Sidebar */}
        <div className="glass-panel" style={{
          padding: '2.5rem',
          background: '#ffffff',
          borderRadius: '28px',
          border: '1px solid rgba(220, 195, 170, 0.45)',
          boxShadow: '0 14px 34px -8px rgba(160, 115, 75, 0.08)',
          height: '100%',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            Engineering Studio Hubs
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem', fontSize: '0.925rem' }}>
            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                flexShrink: 0,
              }}>
                <MapPin size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>San Francisco Hub</div>
                <div style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', fontSize: '0.875rem' }}>
                  548 Market Street, Suite 8920, San Francisco, CA 94104
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                flexShrink: 0,
              }}>
                <Building size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>London Technical Office</div>
                <div style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', fontSize: '0.875rem' }}>
                  25 Bank Street, Canary Wharf, London E14 5JP, UK
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                flexShrink: 0,
              }}>
                <Mail size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Direct Technical Dispatch</div>
                <div style={{ color: 'var(--primary)', fontWeight: 600, marginTop: '0.2rem', fontSize: '0.875rem' }}>
                  engineering@prevenance.io
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                flexShrink: 0,
              }}>
                <Clock size={18} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Discovery Call Hours</div>
                <div style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', fontSize: '0.875rem' }}>
                  Monday – Friday, 09:00 – 18:00 PST / GMT
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(220, 195, 170, 0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--accent-verified)', fontWeight: 600 }}>
              <ShieldCheck size={16} /> Encrypted inquiry transport & DynamoDB storage
            </div>
          </div>
        </div>

        {/* Project Intake Form */}
        <div className="glass-panel" style={{
          padding: '2.5rem',
          background: '#ffffff',
          borderRadius: '28px',
          border: '1px solid rgba(220, 195, 170, 0.45)',
          boxShadow: '0 14px 34px -8px rgba(160, 115, 75, 0.08)',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            Submit Project Specifications
          </h2>

          {status.msg && (
            <div style={{
              padding: '0.85rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              background: status.success ? 'var(--accent-verified-bg)' : 'var(--accent-danger-bg)',
              border: `1px solid ${status.success ? 'rgba(46, 125, 90, 0.3)' : 'rgba(217, 67, 67, 0.3)'}`,
              color: status.success ? 'var(--accent-verified)' : 'var(--accent-danger)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              {status.success ? <CheckCheck size={18} /> : <AlertCircle size={18} />}
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Mitchell"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="alexander@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Company / Organization</label>
                <input
                  type="text"
                  placeholder="e.g. Horizon Labs Inc."
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Service Focus</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="form-select"
                >
                  <option value="Web Application Development">Web Application Development</option>
                  <option value="Mobile App (iOS & Android)">Mobile App (iOS & Android)</option>
                  <option value="Custom Enterprise Software">Custom Enterprise Software</option>
                  <option value="Full-Stack Engineering">Full-Stack Engineering</option>
                  <option value="UI/UX & Design Systems">UI/UX & Design Systems</option>
                  <option value="Cloud & DynamoDB Architecture">Cloud & DynamoDB Architecture</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Estimated Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="form-select"
                >
                  <option value="Under $25,000">&lt; $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000+">$100,000+</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Target Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="form-select"
                >
                  <option value="1 - 3 Months">1 - 3 Months</option>
                  <option value="3 - 6 Months">3 - 6 Months</option>
                  <option value="6 - 12 Months">6 - 12 Months</option>
                  <option value="Ongoing Retainer">Ongoing Retainer</option>
                </select>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '1.75rem' }}>
              <label className="form-label">Project Requirements & Goals *</label>
              <textarea
                required
                rows={4}
                placeholder="Describe what your web or mobile app needs to do, existing tech stack if any, and target launch timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.9rem',
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              {status.loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Transmitting to Engineering Queue...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Submit Project Inquiry
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
