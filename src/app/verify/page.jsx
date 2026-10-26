'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Loader2,
  Code2,
  Terminal,
  Calendar,
  User,
  Zap
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

function VerifyContent() {
  const searchParams = useSearchParams();
  const initialCode = searchParams.get('code') || '';

  const [inputCode, setInputCode] = useState(initialCode);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleVerify = async (codeToVerify) => {
    const code = (codeToVerify || inputCode).trim();
    if (!code) return;

    setLoading(true);
    setSearched(true);
    setResult(null);

    try {
      const res = await fetch(`/api/verify/${encodeURIComponent(code)}`);
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({
        verified: false,
        error: 'Communication error with Prevenance engineering registry nodes.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!initialCode) return;
    let ignore = false;

    async function checkCode() {
      try {
        const res = await fetch(`/api/verify/${encodeURIComponent(initialCode.trim())}`);
        const data = await res.json();
        if (!ignore) {
          setResult(data);
          setSearched(true);
          setLoading(false);
        }
      } catch {
        if (!ignore) {
          setResult({ verified: false });
          setSearched(true);
          setLoading(false);
        }
      }
    }

    checkCode();
    return () => { ignore = true; };
  }, [initialCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerify();
  };

  return (
    <div className="container-narrow" style={{ padding: '3.5rem 1.5rem 5rem' }}>
      {/* Header */}
      <div className="section-header">
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '18px',
          background: 'var(--primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          margin: '0 auto 1.25rem',
          boxShadow: '0 6px 20px rgba(223, 122, 56, 0.3)',
        }}>
          <Terminal size={30} strokeWidth={2.2} />
        </div>

        <h1 className="section-title">
          Software Release & License Verification
        </h1>
        <p className="section-desc">
          Input any Prevenance Release Token or Project ID to confirm production release authenticity, SLA uptime, and verified deployment milestones.
        </p>
      </div>

      {/* Input Form */}
      <div className="glass-panel" style={{
        padding: '2rem',
        marginBottom: '2.5rem',
        background: '#ffffff',
        borderRadius: '28px',
        border: '1px solid rgba(220, 195, 170, 0.45)',
        boxShadow: '0 14px 34px -8px rgba(160, 115, 75, 0.08)',
      }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px', position: 'relative' }}>
            <input
              type="text"
              placeholder="e.g. CERT-APEXPAY-2026-A109 or PRV-2026-APP01"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="form-input"
              style={{
                fontFamily: 'monospace',
                fontSize: '0.95rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                height: '48px',
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{ padding: '0 2rem', height: '48px', fontSize: '0.95rem', fontWeight: 600 }}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Verifying...
              </>
            ) : (
              <>
                <Search size={18} />
                Verify Release
              </>
            )}
          </button>
        </form>

        {/* Sample tokens */}
        <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
          <span>Try sample tokens:</span>
          <button
            type="button"
            onClick={() => {
              setInputCode('CERT-APEXPAY-2026-A109');
              handleVerify('CERT-APEXPAY-2026-A109');
            }}
            style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', textDecoration: 'underline', fontWeight: 600 }}
          >
            ApexPay (CERT-APEXPAY-2026-A109)
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => {
              setInputCode('CERT-PULSE-2025-H882');
              handleVerify('CERT-PULSE-2025-H882');
            }}
            style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', textDecoration: 'underline', fontWeight: 600 }}
          >
            PulseHealth (CERT-PULSE-2025-H882)
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => {
              setInputCode('CERT-OMNI-2024-F771');
              handleVerify('CERT-OMNI-2024-F771');
            }}
            style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', textDecoration: 'underline', fontWeight: 600 }}
          >
            OmniLogistics (CERT-OMNI-2024-F771)
          </button>
        </div>
      </div>

      {/* Results View */}
      {searched && (
        <div>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <Loader2 className="animate-spin" size={32} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              <p style={{ color: 'var(--text-muted)' }}>Querying Amazon DynamoDB registry index...</p>
            </div>
          ) : result?.verified ? (
            <div className="glass-panel" style={{
              padding: '2.5rem',
              borderRadius: '28px',
              border: '1px solid rgba(46, 125, 90, 0.35)',
              background: '#ffffff',
              boxShadow: '0 14px 34px -8px rgba(46, 125, 90, 0.1)',
            }}>
              {/* Success Banner */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--accent-verified)',
                marginBottom: '1.5rem',
                borderBottom: '1px solid rgba(46, 125, 90, 0.2)',
                paddingBottom: '1rem',
              }}>
                <CheckCircle2 size={28} />
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                    Official Software Release Verified
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    Record confirmed on Amazon DynamoDB ledger timestamp index.
                  </div>
                </div>
              </div>

              {/* Project Summary */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Project Title
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {result.asset.title}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Client / Partner
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {result.asset.creator}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Platform & Category
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginTop: '0.2rem' }}>
                    {result.asset.category}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Release Year
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {result.asset.creationYear}
                  </div>
                </div>
              </div>

              {/* SLA Benchmark */}
              {result.asset.conditionReport && (
                <div style={{
                  padding: '1.25rem',
                  background: '#f4f9f6',
                  borderRadius: '18px',
                  border: '1px solid rgba(46, 125, 90, 0.25)',
                  marginBottom: '2rem',
                }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-verified)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    SLA & Production Performance
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {result.asset.conditionReport}
                  </p>
                </div>
              )}

              <Link
                href={`/catalog/${result.asset.id}`}
                className="btn btn-primary"
                style={{ padding: '0.8rem 1.8rem', fontWeight: 600 }}
              >
                Inspect Complete Case Study
                <ExternalLink size={16} />
              </Link>
            </div>
          ) : (
            <div className="glass-panel" style={{
              padding: '2.5rem',
              borderRadius: '28px',
              border: '1px solid rgba(217, 67, 67, 0.35)',
              background: '#ffffff',
              textAlign: 'center',
            }}>
              <XCircle size={44} color="var(--accent-danger)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Release Token Not Found
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                No active release record matched &quot;{inputCode}&quot;. Please verify the token format or contact our engineering operations desk.
              </p>
              <Link href="/contact" className="btn btn-secondary btn-sm" style={{ fontWeight: 600 }}>
                Inquire with Engineering Team
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <Loader2 className="animate-spin" size={32} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
        <p style={{ color: 'var(--text-muted)' }}>Loading Release Verification Hub...</p>
      </div>
    }>
      <VerifyContent />
    </Suspense>
  );
}
