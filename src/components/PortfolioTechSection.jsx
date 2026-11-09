'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, ChevronDown, Sparkles } from 'lucide-react';
import { TECHNOLOGY_CATEGORIES } from '@/data/technologies';
import '@/components/PortfolioTechSection.css';

// 3D Tilted Floating Icons for Technology Expertise Showcase
const TECH_CATEGORY_3D_ICONS = {
  frontend: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="7" rx="2" />
      <rect x="2" y="14" width="20" height="7" rx="2" />
      <line x1="6" y1="6.5" x2="6.01" y2="6.5" strokeWidth="3" />
      <line x1="10" y1="6.5" x2="14" y2="6.5" strokeWidth="2" />
      <line x1="6" y1="17.5" x2="6.01" y2="17.5" strokeWidth="3" />
      <line x1="10" y1="17.5" x2="14" y2="17.5" strokeWidth="2" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'cloud-devops': (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <polyline points="12 12 12 16" />
      <polyline points="9 14 12 11 15 14" />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <polyline points="12 12 12 16" />
      <polyline points="9 14 12 11 15 14" />
    </svg>
  ),
  'media-integrations': (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  ),
  media: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  ),
};

export default function PortfolioTechSection({ id = 'technology-expertise' }) {
  const sectionRef = useRef(null);
  const mobilePillsRef = useRef(null);
  const cardRefs = useRef(new Map());
  const [activeCardId, setActiveCardId] = useState('frontend');
  const [isInView, setIsInView] = useState(false);
  const manualLockRef = useRef(false);
  const lockTimerRef = useRef(null);

  // Toggle card dropdown manually (tap to open/close or switch)
  const handleToggleCard = useCallback((catId) => {
    manualLockRef.current = true;
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      manualLockRef.current = false;
    }, 1300);

    setActiveCardId((prev) => (prev === catId ? null : catId));
  }, []);

  // Topic pill click (opens card and scrolls into view)
  const handleTopicPillClick = useCallback((catId) => {
    setActiveCardId(catId);
    manualLockRef.current = true;
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      manualLockRef.current = false;
    }, 1400);

    const el = cardRefs.current.get(catId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  // Auto-scroll the mobile topic pill navigation to keep the active pill centered
  useEffect(() => {
    const container = mobilePillsRef.current;
    if (!container || !activeCardId) return;
    const activePill = container.querySelector(`.portfolio-tech-topic-pill[data-id="${activeCardId}"]`);
    if (!activePill) return;

    const containerWidth = container.offsetWidth;
    const pillLeft = activePill.offsetLeft;
    const pillWidth = activePill.offsetWidth;
    const targetScroll = pillLeft - containerWidth / 2 + pillWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: 'smooth',
    });
  }, [activeCardId]);

  // Set up intersection observer for entrance and scroll-driven card focus
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 1. Entrance observer for the whole section
    const entranceObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.08 }
    );
    entranceObserver.observe(section);

    // 2. Scroll listener with requestAnimationFrame to highlight & dropdown active card based on viewport focus
    let rafId = null;

    const handleScroll = () => {
      if (manualLockRef.current) return;

      const viewportHeight = window.innerHeight;
      // Focal point sits slightly above middle (44% from top of viewport)
      const focalLine = viewportHeight * 0.44;

      let closestId = null;
      let minDistance = Infinity;

      cardRefs.current.forEach((el, catId) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Check if card is visible within viewport
        if (rect.bottom > 70 && rect.top < viewportHeight - 70) {
          const cardCenter = rect.top + rect.height * 0.48;
          const dist = Math.abs(cardCenter - focalLine);
          if (dist < minDistance) {
            minDistance = dist;
            closestId = catId;
          }
        }
      });

      if (closestId && closestId !== activeCardId) {
        setActiveCardId(closestId);
      }
    };

    const onScrollThrottled = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScrollThrottled, { passive: true });
    window.addEventListener('resize', onScrollThrottled, { passive: true });
    // Initial evaluation
    handleScroll();

    return () => {
      entranceObserver.disconnect();
      window.removeEventListener('scroll', onScrollThrottled);
      window.removeEventListener('resize', onScrollThrottled);
      if (rafId) cancelAnimationFrame(rafId);
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    };
  }, [activeCardId]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`portfolio-tech-section ${isInView ? 'is-in-view' : ''}`}
      style={{ scrollMarginTop: '90px' }}
    >
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="pt-card-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">
        {/* Section Header */}
        <div className="portfolio-tech-header">
          <div className="portfolio-tech-pill-badge">
            <Layers size={14} className="portfolio-tech-badge-icon" />
            <span>OUR TECHNOLOGY EXPERTISE</span>
          </div>

          <h2 className="portfolio-tech-title">
            The Right Technology For Every{' '}
            <span className="portfolio-tech-title-highlight">
              Solution
              <svg className="portfolio-tech-swoosh" viewBox="0 0 180 18" fill="none" aria-hidden="true">
                <path d="M4 14C50 5 130 5 176 14" stroke="#ea580c" strokeWidth="3.6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="portfolio-tech-whiskers" aria-hidden="true">
              <span className="portfolio-tech-whisker ptw-1" />
              <span className="portfolio-tech-whisker ptw-2" />
              <span className="portfolio-tech-whisker ptw-3" />
            </span>
          </h2>

          <p className="portfolio-tech-desc">
            We use modern frameworks, reliable databases, and practical engineering tools to build maintainable digital products.
          </p>
          <p className="portfolio-tech-note">
            Technology choices depend on specific project requirements and scaling needs.
          </p>

          {/* Quick Interactive Mobile Topic Pills */}
          <div
            ref={mobilePillsRef}
            className="portfolio-tech-mobile-pills"
            aria-label="Technology Topics"
          >
            {TECHNOLOGY_CATEGORIES.slice(0, 6).map((cat, idx) => (
              <button
                key={cat.id}
                type="button"
                data-id={cat.id}
                className={`portfolio-tech-topic-pill ${activeCardId === cat.id ? 'is-active' : ''}`}
                onClick={() => handleTopicPillClick(cat.id)}
              >
                <span className="topic-pill-num">{cat.number || `0${idx + 1}`}</span>
                <span className="topic-pill-name">{cat.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Row 1: Four Equal-Width Cards */}
        <div className="portfolio-tech-row-1">
          {TECHNOLOGY_CATEGORIES.slice(0, 4).map((cat, idx) => {
            const isActive = activeCardId === cat.id;
            return (
              <div
                key={cat.id}
                ref={(el) => {
                  if (el) cardRefs.current.set(cat.id, el);
                  else cardRefs.current.delete(cat.id);
                }}
                className={`portfolio-tech-card ${isActive ? 'is-scrolled-active portfolio-tech-card-primary is-open' : ''}`}
                style={{ '--stagger-delay': `${idx * 90}ms` }}
                onClick={() => handleToggleCard(cat.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleToggleCard(cat.id);
                  }
                }}
              >
                {/* Top-Right Number Crest */}
                <div className="portfolio-tech-crest">{cat.number || `0${idx + 1}`}</div>

                {/* Card Header with 3D Floating Icon Tile */}
                <div className="portfolio-tech-card-header">
                  <div className="portfolio-tech-icon-stage">
                    <div className="portfolio-tech-icon-backplate" aria-hidden="true" />
                    <div className="portfolio-tech-icon-frontplate">
                      {TECH_CATEGORY_3D_ICONS[cat.id] ||
                        TECH_CATEGORY_3D_ICONS[cat.id.replace('-', '_')] ||
                        TECH_CATEGORY_3D_ICONS[cat.id.split('-')[0]]}
                    </div>
                  </div>
                  <div className="portfolio-tech-card-info">
                    <h3 className="portfolio-tech-card-title">{cat.title}</h3>
                    <div className="portfolio-tech-meta-row">
                      <span className="portfolio-tech-card-badge">{cat.badge}</span>
                      <span className="portfolio-tech-count-chip">
                        {cat.technologies.length} Tech
                      </span>
                    </div>
                  </div>
                  <div
                    className={`portfolio-tech-chevron-btn ${isActive ? 'is-open' : ''}`}
                    aria-hidden="true"
                  >
                    <ChevronDown size={16} strokeWidth={2.4} className="portfolio-tech-chevron-icon" />
                  </div>
                </div>

                {/* Dropdown Tray with Slow, Smooth Entrance Animation */}
                <div className={`portfolio-tech-dropdown-tray ${isActive ? 'is-open' : ''}`}>
                  <div className="portfolio-tech-dropdown-inner">
                    <div className="portfolio-tech-tray-label">
                      <Sparkles size={12} strokeWidth={2.4} />
                      <span>Core Stack &amp; Libraries:</span>
                    </div>

                    {/* Technology Badges Wrap */}
                    <div className="portfolio-tech-badges-wrap">
                      {cat.technologies.map((t, bIdx) => (
                        <div
                          key={t.name}
                          className="portfolio-tech-badge-item"
                          style={{ '--badge-stagger': `${bIdx * 25}ms` }}
                        >
                          <span className="portfolio-tech-badge-icon">{t.icon}</span>
                          <span className="portfolio-tech-badge-name">{t.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tray Footer for Mobile */}
                    <div className="portfolio-tech-tray-footer">
                      <span className="portfolio-tech-status-hint">
                        {isActive ? 'In Focal View' : 'Tap to expand'}
                      </span>
                      <span className="portfolio-tech-tray-count">
                        {cat.technologies.length} Technologies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Layered Orange Wave Decoration at Bottom */}
                <div className="portfolio-tech-bottom-wave" aria-hidden="true">
                  <svg viewBox="0 0 170 75" preserveAspectRatio="none" fill="none">
                    <path d="M0 75 C 35 55, 80 58, 170 14 L 170 75 Z" fill="url(#pt-card-wave-grad)" opacity="0.45" />
                    <path d="M18 75 C 60 65, 105 50, 170 26 L 170 75 Z" fill="url(#pt-card-wave-grad)" opacity="0.65" />
                    <path d="M0 75 C 45 56, 90 60, 170 14" stroke="rgba(234, 88, 12, 0.25)" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Bottom-Right Circular Arrow Button */}
                <Link
                  href="/technologies"
                  className={`portfolio-tech-arrow-circle ${isActive ? 'portfolio-tech-arrow-primary' : ''}`}
                  aria-label={`Explore ${cat.title}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowRight size={14} strokeWidth={2.4} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Row 2: Two Wide Horizontal Cards */}
        <div className="portfolio-tech-row-2">
          {TECHNOLOGY_CATEGORIES.slice(4, 6).map((cat, idx) => {
            const isActive = activeCardId === cat.id;
            return (
              <div
                key={cat.id}
                ref={(el) => {
                  if (el) cardRefs.current.set(cat.id, el);
                  else cardRefs.current.delete(cat.id);
                }}
                className={`portfolio-tech-card portfolio-tech-card-wide ${isActive ? 'is-scrolled-active portfolio-tech-card-primary is-open' : ''}`}
                style={{ '--stagger-delay': `${(idx + 4) * 90}ms` }}
                onClick={() => handleToggleCard(cat.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleToggleCard(cat.id);
                  }
                }}
              >
                {/* Top-Right Number Crest */}
                <div className="portfolio-tech-crest">{cat.number || `0${idx + 5}`}</div>

                {/* Card Header with 3D Floating Icon Tile */}
                <div className="portfolio-tech-card-header">
                  <div className="portfolio-tech-icon-stage">
                    <div className="portfolio-tech-icon-backplate" aria-hidden="true" />
                    <div className="portfolio-tech-icon-frontplate">
                      {TECH_CATEGORY_3D_ICONS[cat.id] ||
                        TECH_CATEGORY_3D_ICONS[cat.id.replace('-', '_')] ||
                        TECH_CATEGORY_3D_ICONS[cat.id.split('-')[0]]}
                    </div>
                  </div>
                  <div className="portfolio-tech-card-info">
                    <h3 className="portfolio-tech-card-title">{cat.title}</h3>
                    <div className="portfolio-tech-meta-row">
                      <span className="portfolio-tech-card-badge">{cat.badge}</span>
                      <span className="portfolio-tech-count-chip">
                        {cat.technologies.length} Tech
                      </span>
                    </div>
                  </div>
                  <div
                    className={`portfolio-tech-chevron-btn ${isActive ? 'is-open' : ''}`}
                    aria-hidden="true"
                  >
                    <ChevronDown size={16} strokeWidth={2.4} className="portfolio-tech-chevron-icon" />
                  </div>
                </div>

                {/* Dropdown Tray with Slow, Smooth Entrance Animation */}
                <div className={`portfolio-tech-dropdown-tray ${isActive ? 'is-open' : ''}`}>
                  <div className="portfolio-tech-dropdown-inner">
                    <div className="portfolio-tech-tray-label">
                      <Sparkles size={12} strokeWidth={2.4} />
                      <span>Core Stack &amp; Libraries:</span>
                    </div>

                    {/* Technology Badges Wrap */}
                    <div className="portfolio-tech-badges-wrap">
                      {cat.technologies.map((t, bIdx) => (
                        <div
                          key={t.name}
                          className="portfolio-tech-badge-item"
                          style={{ '--badge-stagger': `${bIdx * 25}ms` }}
                        >
                          <span className="portfolio-tech-badge-icon">{t.icon}</span>
                          <span className="portfolio-tech-badge-name">{t.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tray Footer for Mobile */}
                    <div className="portfolio-tech-tray-footer">
                      <span className="portfolio-tech-status-hint">
                        {isActive ? 'In Focal View' : 'Tap to expand'}
                      </span>
                      <span className="portfolio-tech-tray-count">
                        {cat.technologies.length} Technologies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Layered Orange Wave Decoration at Bottom */}
                <div className="portfolio-tech-bottom-wave" aria-hidden="true">
                  <svg viewBox="0 0 220 85" preserveAspectRatio="none" fill="none">
                    <path d="M0 85 C 50 62, 110 66, 220 16 L 220 85 Z" fill="url(#pt-card-wave-grad)" opacity="0.45" />
                    <path d="M25 85 C 80 72, 140 56, 220 30 L 220 85 Z" fill="url(#pt-card-wave-grad)" opacity="0.65" />
                    <path d="M0 85 C 60 64, 120 68, 220 16" stroke="rgba(234, 88, 12, 0.25)" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Bottom-Right Circular Arrow Button */}
                <Link
                  href="/technologies"
                  className={`portfolio-tech-arrow-circle ${isActive ? 'portfolio-tech-arrow-primary' : ''}`}
                  aria-label={`Explore ${cat.title}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowRight size={14} strokeWidth={2.4} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Main CTA Button */}
        <div className="portfolio-tech-cta-wrap">
          <Link href="/technologies" className="portfolio-tech-cta-btn">
            <span>Explore Full Technology Capabilities</span>
            <ArrowRight size={17} strokeWidth={2.4} className="portfolio-tech-cta-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}

