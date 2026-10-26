import Link from 'next/link';
import { Code2, Database, Cloud, Terminal, ShieldCheck, Smartphone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(220, 195, 170, 0.45)',
      background: 'linear-gradient(to bottom, #fcf7f1 0%, #f4eae0 100%)',
      padding: '4.5rem 0 2.5rem',
      marginTop: '5rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(223, 122, 56, 0.25)',
              }}>
                <Code2 size={22} strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                PREVENANCE
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Engineering high-performance web applications, iOS and Android mobile apps, and scalable cloud solutions that help ambitious businesses grow.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span className="badge" style={{ background: '#ffffff', color: 'var(--text-primary)', border: '1px solid rgba(220, 195, 170, 0.5)' }}>
                <Globe size={12} color="var(--primary)" /> Next.js App Router
              </span>
              <span className="badge" style={{ background: '#ffffff', color: 'var(--text-primary)', border: '1px solid rgba(220, 195, 170, 0.5)' }}>
                <Smartphone size={12} color="var(--primary)" /> React Native & Flutter
              </span>
              <span className="badge" style={{ background: '#ffffff', color: 'var(--text-primary)', border: '1px solid rgba(220, 195, 170, 0.5)' }}>
                <Database size={12} color="var(--primary)" /> Amazon DynamoDB
              </span>
            </div>
          </div>

          {/* Software Services */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', fontWeight: 700, marginBottom: '1.25rem' }}>
              Core Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li><Link href="/services" style={{ transition: 'color 0.2s' }}>Web Application Development</Link></li>
              <li><Link href="/services" style={{ transition: 'color 0.2s' }}>iOS & Android Mobile Apps</Link></li>
              <li><Link href="/services" style={{ transition: 'color 0.2s' }}>Custom Enterprise Software</Link></li>
              <li><Link href="/services" style={{ transition: 'color 0.2s' }}>Full-Stack API Engineering</Link></li>
              <li><Link href="/services" style={{ transition: 'color 0.2s' }}>UI/UX & Design Systems</Link></li>
              <li><Link href="/services" style={{ transition: 'color 0.2s' }}>Amazon DynamoDB & Cloud</Link></li>
              <li><Link href="/services" style={{ transition: 'color 0.2s' }}>DevOps & CI/CD Release</Link></li>
            </ul>
          </div>

          {/* Agency Navigation */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', fontWeight: 700, marginBottom: '1.25rem' }}>
              Company & Portfolio
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li><Link href="/catalog" style={{ transition: 'color 0.2s' }}>Featured Projects & Case Studies</Link></li>
              <li><Link href="/portfolio" style={{ transition: 'color 0.2s' }}>Master 20-Section Portfolio</Link></li>
              <li><Link href="/technologies" style={{ transition: 'color 0.2s' }}>Technologies We Use</Link></li>
              <li><Link href="/about" style={{ transition: 'color 0.2s' }}>About Our Engineering Team</Link></li>
              <li><Link href="/verify" style={{ transition: 'color 0.2s' }}>Release & License Verification</Link></li>
              <li><Link href="/contact" style={{ transition: 'color 0.2s' }}>Start a Project / Inquiry</Link></li>
              <li><Link href="/admin/login" style={{ transition: 'color 0.2s' }}>Admin CMS Portal</Link></li>
            </ul>
          </div>

          {/* Engineering Standards */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', fontWeight: 700, marginBottom: '1.25rem' }}>
              Engineering Standards
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={16} color="var(--primary)" /> 100% Client Code Ownership
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Terminal size={16} color="var(--accent-verified)" /> Automated Unit & Integration Tests
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={16} color="var(--primary)" /> Sub-10ms DynamoDB Query SLA
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cloud size={16} color="var(--accent-verified)" /> Cloudinary CDN Media Delivery
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(220, 195, 170, 0.45)',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.825rem',
          color: 'var(--text-muted)',
        }}>
          <div>
            &copy; {new Date().getFullYear()} Prevenance Technologies Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Next.js 16 App Router</span>
            <span>Amazon DynamoDB</span>
            <span>Cloudinary</span>
            <span>Vanilla CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
