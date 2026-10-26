'use client';

import { useState } from 'react';
import { Award, ShieldCheck, Copy, Check, Terminal, Printer, Globe } from 'lucide-react';

export default function CertificateBadge({ asset }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    if (asset?.certificateCode) {
      navigator.clipboard.writeText(asset.certificateCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="glass-panel"
      style={{
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        background: '#fffbf7',
        border: '1px solid var(--border-warm)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Decorative Watermark Effect */}
      <div style={{
        position: 'absolute',
        right: '-30px',
        bottom: '-30px',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        border: '8px dashed rgba(223, 122, 56, 0.12)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border-subtle)',
        paddingBottom: '1.25rem',
        marginBottom: '1.5rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 14px rgba(223, 122, 56, 0.28)',
          }}>
            <Terminal size={24} strokeWidth={2.2} />
          </div>
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>
              SOFTWARE RELEASE CERTIFICATE
            </h4>
            <div style={{ fontSize: '0.75rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              Prevenance Engineering Registry
            </div>
          </div>
        </div>

        <button
          onClick={handlePrint}
          className="btn btn-secondary btn-sm"
          style={{ fontSize: '0.8rem', padding: '0.4rem 0.9rem', fontWeight: 600 }}
          title="Print Certificate"
        >
          <Printer size={14} />
          Print
        </button>
      </div>

      {/* Certificate Details */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
            Build Serial ID
          </div>
          <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'monospace' }}>
            {asset.id}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
            Deployment Status
          </div>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: 700,
            color: 'var(--accent-verified)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            marginTop: '0.15rem',
          }}>
            <ShieldCheck size={16} />
            {asset.status || 'Live Production'}
          </div>
        </div>
      </div>

      {/* Cryptographic Code Box */}
      <div style={{
        background: '#f7eee4',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)', fontWeight: 700 }}>
            Release Verification Token
          </div>
          <div style={{
            fontSize: '1.05rem',
            fontWeight: 800,
            fontFamily: 'monospace',
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
            wordBreak: 'break-all',
            marginTop: '0.2rem',
          }}>
            {asset.certificateCode}
          </div>
        </div>

        <button
          onClick={copyCode}
          className="btn btn-secondary btn-sm"
          style={{ flexShrink: 0, padding: '0.5rem 0.85rem' }}
          title="Copy Verification Token"
        >
          {copied ? <Check size={16} color="var(--accent-verified)" /> : <Copy size={16} />}
        </button>
      </div>

      {/* Bottom Security Assurance */}
      <div style={{
        marginTop: '1.25rem',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <ShieldCheck size={14} color="var(--primary)" />
        <span>Cryptographically signed with Jose JWT & Amazon DynamoDB point-in-time timestamping.</span>
      </div>
    </div>
  );
}
