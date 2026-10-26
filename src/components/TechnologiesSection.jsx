import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { TECHNOLOGY_CATEGORIES } from '@/data/technologies';

export default function TechnologiesSection({ id = 'technologies' }) {
  return (
    <section id={id} style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '820px', margin: '0 auto 3.25rem' }}>
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
            }}
          >
            <Sparkles size={14} color="var(--primary)" />
            OUR TECHNOLOGY STACK
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#1a130e',
              lineHeight: 1.18,
              marginBottom: '0.85rem',
            }}
          >
            Technologies That Power Innovation
          </h2>

          <p
            style={{
              fontSize: '1.08rem',
              color: '#382e25',
              lineHeight: 1.7,
              maxWidth: '680px',
              margin: '0 auto',
              fontWeight: 450,
            }}
          >
            We combine modern technologies and proven engineering practices to build reliable, scalable, and high-performance digital solutions tailored to your business needs.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="tech-grid-3">
          {TECHNOLOGY_CATEGORIES.map((category) => (
            <article
              key={category.id}
              className="glass-panel tech-card"
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #dfd5c8',
                padding: '2rem 1.75rem',
                boxShadow: '0 8px 24px rgba(45, 35, 27, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Category Header */}
              <div style={{ marginBottom: '1.35rem', paddingBottom: '1rem', borderBottom: '1px solid #f0e6dc' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--primary, #df7a38)',
                      background: 'rgba(223, 122, 56, 0.1)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {category.badge}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#9e8f82', fontWeight: 600 }}>
                    {category.technologies.length} Tools
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.28rem',
                    fontWeight: 800,
                    color: '#1a130e',
                    letterSpacing: '-0.015em',
                    marginTop: '0.4rem',
                    lineHeight: 1.3,
                  }}
                >
                  {category.title}
                </h3>

                <p style={{ fontSize: '0.865rem', color: '#6e6054', lineHeight: 1.55, marginTop: '0.35rem' }}>
                  {category.description}
                </p>
              </div>

              {/* Technologies List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: 'auto' }}>
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="tech-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      background: '#faf6f0',
                      border: '1px solid #dfd5c8',
                      padding: '0.75rem 0.95rem',
                      borderRadius: '14px',
                    }}
                  >
                    {/* Official Vector Logo */}
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                      aria-label={`${tech.name} logo`}
                    >
                      {tech.icon}
                    </div>

                    {/* Name & Role */}
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: '#1a130e',
                          letterSpacing: '-0.01em',
                          lineHeight: 1.2,
                        }}
                      >
                        {tech.name}
                      </div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          color: '#6e6054',
                          lineHeight: 1.35,
                          marginTop: '2px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                        title={tech.role}
                      >
                        {tech.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Context Pill */}
        <div
          style={{
            marginTop: '3rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(247, 238, 228, 0.7) 100%)',
            border: '1px solid #dfd5c8',
            borderRadius: '20px',
            padding: '1.25rem 2rem',
            maxWidth: '720px',
            marginInline: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1a130e' }}>
              Looking for a custom software or mobile architecture?
            </div>
            <div style={{ fontSize: '0.8rem', color: '#6e6054' }}>
              We tailor our technology selection to your system performance & scaling needs.
            </div>
          </div>

          <Link
            href="/contact"
            className="btn btn-primary btn-sm"
            style={{
              padding: '0.55rem 1.25rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              whiteSpace: 'nowrap',
            }}
          >
            Discuss Tech Stack
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
