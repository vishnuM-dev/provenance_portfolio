'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Layers, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { TECHNOLOGY_CATEGORIES } from '@/data/technologies';
import './TechnologiesSection.css';

/**
 * 3D-styled Visual Artworks matching the reference image (media_1793454885996_e48275a1)
 */
function CardIllustration({ categoryId }) {
  switch (categoryId) {
    case 'frontend':
      return (
        <div className="tech-visual-container">
          <div className="tech-visual--browser">
            <div className="tech-browser-mockup">
              <div className="tech-browser-header">
                <span className="tech-browser-dot red"></span>
                <span className="tech-browser-dot yellow"></span>
                <span className="tech-browser-dot green"></span>
              </div>
              <div className="tech-browser-layout">
                <div className="tech-browser-sidebar">
                  <span className="tech-sidebar-stripe active"></span>
                  <span className="tech-sidebar-stripe"></span>
                  <span className="tech-sidebar-stripe"></span>
                </div>
                <div className="tech-browser-content">
                  <div className="tech-browser-hero-box"></div>
                  <div className="tech-browser-line"></div>
                  <div className="tech-browser-line" style={{ width: '55%' }}></div>
                </div>
              </div>
            </div>
            {/* Floating 3D Orange Code Cube */}
            <div className="tech-floating-cube" aria-hidden="true">
              {'</>'}
            </div>
          </div>
        </div>
      );

    case 'backend':
      return (
        <div className="tech-visual-container">
          <div className="tech-visual--backend">
            <div className="tech-floating-backend-cube" aria-hidden="true">
              {'</>'}
            </div>
            <div className="tech-backend-slab">
              API
              <span className="tech-slab-pipe"></span>
            </div>
            <div className="tech-backend-slab">
              Services
              <span className="tech-slab-pipe" style={{ right: 'auto', left: '-12px', borderRadius: '0 0 0 6px', borderRight: 'none', borderLeft: '2px solid #60a5fa' }}></span>
            </div>
            <div className="tech-backend-slab">
              Database
            </div>
            <div className="tech-floating-gear" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
          </div>
        </div>
      );

    case 'mobile':
      return (
        <div className="tech-visual-container">
          <div className="tech-visual--mobile">
            {/* Apple Cube */}
            <div className="tech-floating-apple" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.87.96-2.84-.93.04-2.06.62-2.73 1.4-.58.67-1.1 1.77-.96 2.81 1.04.08 2.09-.59 2.73-1.37z" />
              </svg>
            </div>

            {/* Left Phone */}
            <div className="tech-phone-mockup phone-left">
              <div className="tech-phone-notch"></div>
              <div className="tech-phone-greeting">Good Morning!</div>
              <div className="tech-phone-card-mini">
                <div className="tech-phone-bar"></div>
                <div className="tech-phone-bar short"></div>
              </div>
              <div className="tech-phone-card-mini" style={{ background: '#f5f0ff' }}>
                <div className="tech-phone-bar" style={{ background: '#a78bfa' }}></div>
              </div>
            </div>

            {/* Right Phone */}
            <div className="tech-phone-mockup phone-right">
              <div className="tech-phone-notch"></div>
              <div style={{ width: '100%', height: '26px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', borderRadius: '4px', marginBottom: '4px' }}></div>
              <div className="tech-phone-card-mini">
                <div className="tech-phone-bar short"></div>
              </div>
            </div>

            {/* Android Cube */}
            <div className="tech-floating-android" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 2.23 12.95 2 12 2c-.96 0-1.86.23-2.66.63L7.85 1.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 4.26 6 6.01 6 8h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
              </svg>
            </div>
          </div>
        </div>
      );

    case 'database':
      return (
        <div className="tech-visual-container">
          <div className="tech-visual--database">
            <div className="tech-db-node-leaf" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                <path d="M12 2C11.66 2.37 7 7.74 7 13.12C7 16.96 9.39 20.76 12 21.93C14.61 20.76 17 16.96 17 13.12C17 7.74 12.34 2.37 12 2Z" fill="#13AA52" />
              </svg>
            </div>

            <div className="tech-db-cylinder-stack">
              <div className="tech-db-disk"></div>
              <div className="tech-db-disk"></div>
              <div className="tech-db-disk"></div>
            </div>

            <div className="tech-db-node-sql" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#336791">
                <path d="M12 4C8 4 6 7 6 10C6 14 8 16 10 17V20H14V17C16 16 18 14 18 10C18 7 16 4 12 4Z" />
              </svg>
            </div>
          </div>
        </div>
      );

    case 'cloud-devops':
      return (
        <div className="tech-visual-container">
          <div className="tech-visual--cloud">
            <div className="tech-cloud-cube-docker" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <rect x="5" y="8" width="3" height="3" fill="#ffffff" rx="0.5" />
                <rect x="9" y="8" width="3" height="3" fill="#ffffff" rx="0.5" />
                <rect x="13" y="8" width="3" height="3" fill="#ffffff" rx="0.5" />
                <rect x="9" y="5" width="3" height="3" fill="#ffffff" rx="0.5" />
                <path d="M4 12C5 12 7 13 9 13C12 13 14 11 17 12C18 12.5 19 13 20 14C19 16 16 18 12 18C8 18 5 16 4 14V12Z" fill="#ffffff" />
              </svg>
            </div>

            <div className="tech-cloud-shape">
              <div className="tech-cloud-logo">aws</div>
            </div>

            <div className="tech-cloud-cube-k8s" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ffffff" strokeWidth="1.8">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 7V17M7 12H17" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      );

    case 'media-integrations':
      return (
        <div className="tech-visual-container">
          <div className="tech-visual--integrations">
            <svg className="tech-integ-connector-svg" viewBox="0 0 200 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 24 Q 70 45 100 68" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              <path d="M165 24 Q 130 45 100 68" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              <path d="M30 110 Q 65 90 100 68" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              <path d="M170 110 Q 135 90 100 68" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            </svg>

            <div className="tech-integ-node node-cloudinary" title="Cloudinary">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="#ffffff">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
              </svg>
            </div>

            <div className="tech-integ-node node-stripe" title="Stripe">
              <span style={{ fontFamily: 'sans-serif', fontWeight: 800 }}>S</span>
            </div>

            <div className="tech-api-cube">
              API
            </div>

            <div className="tech-integ-node node-sockets" title="WebSockets">
              <span style={{ fontSize: '10px' }}>&lt;-&gt;</span>
            </div>

            <div className="tech-integ-node node-api" title="Integrations">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#ffffff" strokeWidth="2.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
              </svg>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

function TechnologyCard({ category, isExpanded, onToggle }) {
  const cardRef = useRef(null);
  const visibleTechs = category.technologies.slice(0, 3);
  const remainingTechs = category.technologies.slice(3);
  const overflowCount = remainingTechs.length;

  // Close expanded card when pressing Escape
  useEffect(() => {
    if (!isExpanded) return;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onToggle();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded, onToggle]);

  return (
    <article
      ref={cardRef}
      className={`tech-card tech-card--${category.colorTheme || 'peach'} ${isExpanded ? 'is-card-expanded' : ''}`}
    >
      {/* Top Row: Number Badge + Tool Count */}
      <div className="tech-card-header">
        <span className="tech-number-badge">
          {category.number || '01'}
        </span>
        <span className="tech-tool-count-badge">
          {category.technologies.length} Tools
        </span>
      </div>

      {/* Middle Row: Content Left + 3D Visual Right */}
      <div className="tech-card-body">
        <div className="tech-card-content">
          <h3 className="tech-card-title">{category.title}</h3>
          <p className="tech-card-desc">{category.description}</p>
        </div>

        <CardIllustration categoryId={category.id} />
      </div>

      {/* Bottom Row: Tech Badges with In-Card Smooth Expandable Tray */}
      <div className="tech-card-footer">
        <div className="tech-pill-list">
          {visibleTechs.map((tech) => (
            <div key={tech.name} className="tech-mini-pill" title={tech.role}>
              <span className="tech-mini-pill-icon">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}

          {overflowCount > 0 && (
            <button
              type="button"
              className={`tech-overflow-btn ${isExpanded ? 'is-expanded' : ''}`}
              onClick={onToggle}
              aria-expanded={isExpanded}
              aria-controls={`tech-expand-panel-${category.id}`}
              aria-label={
                isExpanded
                  ? `Show less technologies in ${category.title}`
                  : `View ${overflowCount} more technologies in ${category.title}`
              }
              title={isExpanded ? 'Click to show less' : `Click to view all ${overflowCount} additional technologies`}
            >
              <span>{isExpanded ? 'Show Less' : `+${overflowCount} more`}</span>
              <ChevronDown
                size={13}
                strokeWidth={2.6}
                className={`tech-overflow-arrow ${isExpanded ? 'is-rotated' : ''}`}
                aria-hidden="true"
              />
            </button>
          )}
        </div>

        {/* In-Card Expandable Tray for Remaining Technologies */}
        {overflowCount > 0 && (
          <div
            id={`tech-expand-panel-${category.id}`}
            className={`tech-card-drawer ${isExpanded ? 'is-open' : ''}`}
            aria-hidden={!isExpanded}
          >
            <div className="tech-card-drawer-inner">
              <div className="tech-drawer-surface">
                <div className="tech-drawer-surface-header">
                  <div className="tech-drawer-title-group">
                    <span className="tech-drawer-dot" aria-hidden="true"></span>
                    <span className="tech-drawer-label">More {category.title} Tools</span>
                  </div>
                  <span className="tech-drawer-count-badge">
                    +{overflowCount} Tools
                  </span>
                </div>
                <div className="tech-drawer-pills">
                  {remainingTechs.map((tech, idx) => (
                    <div
                      key={tech.name}
                      className="tech-mini-pill tech-drawer-pill"
                      style={{ '--pill-idx': idx }}
                      title={tech.role}
                    >
                      <span className="tech-mini-pill-icon">{tech.icon}</span>
                      <span className="tech-mini-pill-name">{tech.name}</span>
                      {tech.tag && (
                        <span className="tech-mini-pill-tag">{tech.tag}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function TechnologiesSection({ id = 'technologies' }) {
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  return (
    <section id={id} className="tech-showcase-section" style={{ scrollMarginTop: '90px' }}>
      <div className="tech-showcase-container">
        {/* Section Header */}
        <div className="tech-showcase-header">
          <div className="tech-badge-pill">
            <span className="tech-badge-dot"></span>
            OUR TECHNOLOGY STACK
          </div>

          <h2 className="tech-showcase-title">
            Technologies That Power <span className="tech-highlight">Innovation</span>
          </h2>

          <p className="tech-showcase-desc">
            We combine modern technologies and proven engineering practices to build reliable, scalable, and high-performance digital solutions tailored to your business needs.
          </p>

          {/* 3 Value Pillars */}
          <div className="tech-pillars-row">
            <div className="tech-pillar-item">
              <div className="tech-pillar-icon-box">
                <Zap size={18} />
              </div>
              <div className="tech-pillar-text">
                <div className="tech-pillar-title">Modern &amp; Updated</div>
                <div className="tech-pillar-sub">Using the latest stable technologies</div>
              </div>
            </div>

            <div className="tech-pillar-item">
              <div className="tech-pillar-icon-box">
                <Layers size={18} />
              </div>
              <div className="tech-pillar-text">
                <div className="tech-pillar-title">Scalable Solutions</div>
                <div className="tech-pillar-sub">Built for growth and performance</div>
              </div>
            </div>

            <div className="tech-pillar-item">
              <div className="tech-pillar-icon-box">
                <ShieldCheck size={18} />
              </div>
              <div className="tech-pillar-text">
                <div className="tech-pillar-title">Secure &amp; Reliable</div>
                <div className="tech-pillar-sub">Best practices in development</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column x 3-Row Grid */}
        <div className="tech-showcase-grid">
          {TECHNOLOGY_CATEGORIES.map((category) => (
            <TechnologyCard
              key={category.id}
              category={category}
              isExpanded={expandedCategoryId === category.id}
              onToggle={() =>
                setExpandedCategoryId(
                  expandedCategoryId === category.id ? null : category.id
                )
              }
            />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="tech-cta-banner">
          <div className="tech-cta-banner-left">
            <span className="tech-cta-label">LET&apos;S BUILD TOGETHER</span>
            <h3 className="tech-cta-title">
              Looking for a custom software or mobile architecture?
            </h3>
            <p className="tech-cta-desc">
              We tailor our technology selection to your system performance &amp; scaling needs.
            </p>
          </div>

          <div className="tech-cta-banner-right">
            <Link href="/contact" className="tech-cta-btn">
              Discuss Tech Stack
              <ArrowRight size={16} />
            </Link>

            <div className="tech-cta-blocks-visual" aria-hidden="true">
              <div className="tech-cta-cube">
                {'</>'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
