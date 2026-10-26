'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, Mail, Key, AlertCircle, ArrowRight, Loader2, ArrowLeft, Terminal, Eye, EyeOff } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@provenance.com');
  const [password, setPassword] = useState('Admin@123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch configured env email if available
    fetch('/api/auth/login')
      .then((res) => res.json())
      .then((data) => {
        if (data?.email) {
          setEmail(data.email);
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      router.replace('/admin/dashboard');
      router.refresh();
    } catch (err) {
      setError(err.message || 'Login failed. Please verify credentials.');
      setLoading(false);
    }
  };

  const fillEnvCredentials = () => {
    setEmail('admin@provenance.com');
    setPassword('Admin@123');
    setError('');
  };

  return (
    <div className="container" style={{
      padding: '4rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '75vh',
    }}>
      <div className="glass-panel animate-fade-in" style={{
        width: '100%',
        maxWidth: '460px',
        padding: '2.5rem',
        borderRadius: '24px',
        background: '#ffffff',
        border: '1px solid #dfd5c8',
        boxShadow: '0 16px 40px rgba(45, 35, 27, 0.08)',
      }}>
        {/* Emblem & Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '16px',
            background: 'var(--primary, #df7a38)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            margin: '0 auto 1.25rem',
            boxShadow: '0 6px 20px rgba(223, 122, 56, 0.3)',
          }}>
            <Terminal size={26} strokeWidth={2.4} />
          </div>

          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--primary, #df7a38)',
            marginBottom: '0.35rem',
          }}>
            Prevenance Admin Portal
          </div>

          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
            Administrator Sign In
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.885rem' }}>
            Sign in with the credentials defined in your <code style={{ background: '#f5ece1', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--primary)' }}>.env</code> file
          </p>
        </div>

        {error && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#fde8e8',
            border: '1px solid rgba(217, 67, 67, 0.3)',
            color: '#d94343',
            padding: '0.8rem 1rem',
            borderRadius: '10px',
            fontSize: '0.85rem',
            marginBottom: '1.5rem',
          }}>
            <AlertCircle size={16} flexShrink={0} />
            <div>{error}</div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1.25rem' }}>
            <label className="form-label" style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.4rem', display: 'block' }}>
              Admin Email
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Mail size={16} color="var(--primary)" style={{ position: 'absolute', left: '1.1rem', pointerEvents: 'none' }} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@provenance.com"
                className="form-input"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.8rem',
                  borderRadius: '12px',
                  border: '1px solid #dfd5c8',
                  background: '#faf6f0',
                  fontSize: '0.9rem',
                }}
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '1.75rem' }}>
            <label className="form-label" style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.4rem', display: 'block' }}>
              Admin Password
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Key size={16} color="var(--primary)" style={{ position: 'absolute', left: '1.1rem', pointerEvents: 'none', zIndex: 5 }} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="form-input"
                style={{
                  width: '100%',
                  padding: '0.75rem 3.2rem 0.75rem 2.8rem',
                  borderRadius: '12px',
                  border: '1px solid #dfd5c8',
                  background: '#faf6f0',
                  fontSize: '0.9rem',
                }}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowPassword((prev) => !prev);
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                title={showPassword ? 'Hide password' : 'Show password'}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff size={19} color="var(--primary)" />
                ) : (
                  <Eye size={19} color="var(--text-muted)" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.85rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              borderRadius: '9999px',
              justifyContent: 'center',
            }}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Authenticating...
              </>
            ) : (
              <>
                Sign In to Dashboard
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* .env Quick-Fill Helper */}
        <div style={{
          marginTop: '1.75rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid #dfd5c8',
          textAlign: 'center',
        }}>
          <button
            type="button"
            onClick={fillEnvCredentials}
            className="btn btn-secondary btn-sm"
            style={{
              fontSize: '0.825rem',
              width: '100%',
              fontWeight: 600,
              borderRadius: '9999px',
              padding: '0.6rem',
              justifyContent: 'center',
              background: '#f7eee4',
              border: '1px solid #dfd5c8',
            }}
          >
            <ShieldCheck size={15} color="var(--primary)" />
            Fill Credentials from .env (admin@provenance.com / Admin@123)
          </button>
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <Link
            href="/"
            style={{
              fontSize: '0.825rem',
              color: 'var(--text-secondary)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            <ArrowLeft size={14} />
            Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
