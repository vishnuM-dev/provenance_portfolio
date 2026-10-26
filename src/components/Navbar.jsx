'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Code2,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
  ArrowRight
} from 'lucide-react';

export default function Navbar() {
  const [session, setSession] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setSession(data.user);
          } else {
            setSession(null);
          }
        }
      } catch {
        setSession(null);
      }
    }
    checkAuth();
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setSession(null);
      router.push('/');
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(247, 238, 228, 0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid #dfd5c8',
      transition: 'background-color 0.2s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px',
      }}>
        {/* Brand Logo & Tagline */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0, textDecoration: 'none' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '14px',
            background: 'var(--primary, #df7a38)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 14px rgba(223, 122, 56, 0.28)',
            color: '#ffffff',
            flexShrink: 0,
          }}>
            <Code2 size={24} strokeWidth={2.5} />
          </div>
          <div style={{ whiteSpace: 'nowrap' }}>
            <span style={{
              fontSize: '1.35rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary, #2d231b)',
              display: 'block',
              lineHeight: 1,
            }}>
              PREVENANCE
            </span>
            <span style={{
              fontSize: '0.625rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--primary, #df7a38)',
              fontWeight: 700,
              display: 'block',
              marginTop: '4px',
            }}>
              WEB APPLICATION & MOBILE APPLICATION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Exact 5 Items in Required Order */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '1.85rem',
        }} className="desktop-nav">
          <Link
            href="/services"
            className={`nav-link-item ${pathname === '/services' ? 'active' : ''}`}
          >
            Services
          </Link>

          <Link
            href="/portfolio"
            className={`nav-link-item ${pathname === '/portfolio' ? 'active' : ''}`}
          >
            Portfolio
          </Link>

          <Link
            href="/technologies"
            className={`nav-link-item ${pathname === '/technologies' ? 'active' : ''}`}
          >
            Technologies
          </Link>

          <Link
            href="/about"
            className={`nav-link-item ${pathname === '/about' ? 'active' : ''}`}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className={`nav-link-item ${pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>

          {/* Primary Pill-Shaped CTA Button: Discuss Project */}
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{
              padding: '0.6rem 1.45rem',
              borderRadius: 'var(--radius-full, 9999px)',
              fontWeight: 600,
              fontSize: '0.9rem',
              marginLeft: '0.4rem',
              boxShadow: '0 4px 16px rgba(223, 122, 56, 0.28)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              whiteSpace: 'nowrap',
            }}
          >
            Discuss Project
            <ArrowRight size={15} />
          </Link>

          {/* Authenticated Admin Controls (Only visible when logged in) */}
          {session && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.4rem' }}>
              <Link
                href="/admin/dashboard"
                className="btn btn-secondary btn-sm"
                style={{ padding: '0.45rem 0.9rem', fontWeight: 600, fontSize: '0.8rem' }}
              >
                <LayoutDashboard size={13} />
                CMS
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-sm"
                style={{
                  background: 'transparent',
                  color: 'var(--text-muted)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.4rem',
                }}
                title="Sign out of CMS"
              >
                <LogOut size={16} />
              </button>
            </div>
          )}
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          padding: '1.25rem 1.5rem 1.75rem',
          background: '#f7eee4',
          borderBottom: '1px solid #dfd5c8',
          boxShadow: '0 12px 28px rgba(45, 35, 27, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          animation: 'fadeIn 0.2s ease-out',
        }}>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={`mobile-nav-link-item ${pathname === '/services' ? 'active' : ''}`}
          >
            Services
          </Link>

          <Link
            href="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className={`mobile-nav-link-item ${pathname === '/portfolio' ? 'active' : ''}`}
          >
            Portfolio
          </Link>

          <Link
            href="/technologies"
            onClick={() => setMobileMenuOpen(false)}
            className={`mobile-nav-link-item ${pathname === '/technologies' ? 'active' : ''}`}
          >
            Technologies
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`mobile-nav-link-item ${pathname === '/about' ? 'active' : ''}`}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`mobile-nav-link-item ${pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.8rem',
              marginTop: '0.75rem',
              justifyContent: 'center',
              fontWeight: 600,
              borderRadius: 'var(--radius-full, 9999px)',
            }}
          >
            Discuss Project
            <ArrowRight size={15} />
          </Link>

          {session && (
            <Link
              href="/admin/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary"
              style={{ width: '100%', marginTop: '0.25rem' }}
            >
              Admin CMS Dashboard
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
