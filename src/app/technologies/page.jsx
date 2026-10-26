import TechnologiesSection from '@/components/TechnologiesSection';
import Link from 'next/link';
import { ArrowRight, Code2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Technologies We Use | ProvenanceTech Software Engineering Stack',
  description: 'Explore the modern technologies and verified engineering stack powering ProvenanceTech solutions across Frontend, Backend, Mobile, Cloud, DevOps, and Databases.',
};

export default function TechnologiesPage() {
  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      {/* Page Hero Header */}
      <section style={{ padding: '2.5rem 0 1rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
          <div
            className="section-badge"
            style={{
              background: '#ffffff',
              border: '1px solid #dfd5c8',
              color: '#c45318',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            <Sparkles size={14} color="var(--primary)" />
            ENGINEERED FOR EXCELLENCE
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#1a130e',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            Built With Modern, Scalable Technologies
          </h1>

          <p
            style={{
              fontSize: '1.12rem',
              color: '#382e25',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '0 auto 2rem',
              fontWeight: 450,
            }}
          >
            We choose verified, modern software frameworks and battle-tested infrastructure to ensure your web and mobile applications are secure, fast, and ready for long-term growth.
          </p>

          {/* Quick Pillars */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '1.5rem',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#ffffff',
                border: '1px solid #dfd5c8',
                borderRadius: '9999px',
                padding: '0.45rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#2d231b',
              }}
            >
              <Zap size={16} color="var(--primary)" />
              High Performance
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#ffffff',
                border: '1px solid #dfd5c8',
                borderRadius: '9999px',
                padding: '0.45rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#2d231b',
              }}
            >
              <ShieldCheck size={16} color="var(--primary)" />
              Enterprise Security
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#ffffff',
                border: '1px solid #dfd5c8',
                borderRadius: '9999px',
                padding: '0.45rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#2d231b',
              }}
            >
              <Code2 size={16} color="var(--primary)" />
              Clean Architecture
            </div>
          </div>
        </div>
      </section>

      {/* Main Technologies Section */}
      <TechnologiesSection id="technologies" />
    </div>
  );
}
