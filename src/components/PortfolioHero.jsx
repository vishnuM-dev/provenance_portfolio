'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Home,
  ChevronRight,
  ChevronLeft,
  Layers,
} from 'lucide-react';
import './PortfolioHero.css';

const HERO_PROJECTS = [
  {
    id: 'mk-delivery',
    title: 'MK Delivery',
    imgUrl: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=1000&q=80',
    alt: 'Courier delivery application preview',
    badgeTextLine1: 'Web & Mobile',
    badgeTextLine2: 'Applications',
    badgeIcon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="13" height="9" x="2" y="4" rx="2" />
        <path d="M6 19h6" />
        <path d="M9 16v3" />
        <rect width="5" height="9" x="17" y="11" rx="1.5" />
      </svg>
    ),
  },
  {
    id: 'sitebox',
    title: 'SiteBox',
    imgUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    alt: 'Interior design procurement platform preview',
    badgeTextLine1: 'Custom',
    badgeTextLine2: 'Solutions',
    badgeIcon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    id: 'mr-cargo',
    title: 'MR Cargo',
    imgUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    alt: 'Cargo Logistics operations preview',
    badgeTextLine1: 'Business',
    badgeTextLine2: 'Software',
    badgeIcon: <Layers size={14} />,
  },
];

export default function PortfolioHero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const total = HERO_PROJECTS.length;

  const handlePrev = (e) => {
    e?.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + total) % total);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    setTouchStartX(0);
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > 30) {
      if (e.deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Determine card position classes dynamically based on activeIdx
  const getCardPositionClass = (index) => {
    const offset = (index - activeIdx + total) % total;
    if (offset === 0) return 'pfh-card-center';
    if (offset === 1) return 'pfh-card-right';
    return 'pfh-card-left';
  };

  const getPillPositionClass = (index) => {
    const offset = (index - activeIdx + total) % total;
    if (offset === 0) return 'pfh-pill-center';
    if (offset === 1) return 'pfh-pill-right';
    return 'pfh-pill-left';
  };

  return (
    <section className="pfh-hero-section" aria-label="ProvenanceTech Portfolio Overview">
      <div className="pfh-container">
        {/* Top Minimal Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pfh-breadcrumb">
          <Link href="/" className="pfh-bc-link">
            <Home size={14} className="pfh-bc-home-icon" />
            <span>Home</span>
          </Link>
          <ChevronRight size={13} className="pfh-bc-sep" />
          <span className="pfh-bc-current">Portfolio</span>
        </nav>

        {/* Two-Column Hero Split */}
        <div className="pfh-hero-grid">
          {/* Left Column: Eyebrow, Editorial Headline, Paragraph, CTAs */}
          <div className="pfh-content-col">
            {/* Eyebrow Label */}
            <div className="pfh-badge-pill">
              <span className="pfh-badge-grid-icon" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="1" y="1" width="5" height="5" rx="1.5" />
                  <rect x="10" y="1" width="5" height="5" rx="1.5" />
                  <rect x="1" y="10" width="5" height="5" rx="1.5" />
                  <rect x="10" y="10" width="5" height="5" rx="1.5" />
                </svg>
              </span>
              <span>OUR PORTFOLIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="pfh-headline">
              Software Solutions<br />
              for Real <span className="pfh-headline-accent">Businesses.</span>
            </h1>

            {/* Supporting Description */}
            <p className="pfh-paragraph">
              Explore our portfolio of custom web and mobile applications built to solve real business challenges. Each project reflects our focus on quality, performance, and long-term value.
            </p>

            {/* Call To Action Buttons */}
            <div className="pfh-actions-row">
              <a href="#featured-projects" className="pfh-btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>

              <Link href="/contact" className="pfh-btn-secondary">
                <span>Discuss Your Project</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Side-Scrollable 3D Angled Perspective Composition */}
          <div
            className="pfh-visual-col"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
            aria-label="Interactive project images preview"
          >
            {/* Ambient Background Decorative Arc */}
            <svg
              className="pfh-bg-arc-svg"
              viewBox="0 0 480 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M 40,240 C 90,80 320,40 450,150"
                stroke="#fcd9c0"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <path
                d="M 120,300 C 260,200 390,160 460,200"
                stroke="#ea580c"
                strokeWidth="1.5"
                strokeOpacity="0.45"
              />
            </svg>
            <div className="pfh-ambient-dot" aria-hidden="true" />

            {/* Side-Scroll Left Arrow Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="pfh-side-scroll-btn pfh-scroll-prev"
              aria-label="Scroll to previous image"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Side-Scroll Right Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              className="pfh-side-scroll-btn pfh-scroll-next"
              aria-label="Scroll to next image"
            >
              <ChevronRight size={20} />
            </button>

            {/* 3D Perspective Cards Stage */}
            <div className="pfh-cards-composition">
              {HERO_PROJECTS.map((proj, idx) => {
                const posClass = getCardPositionClass(idx);
                const pillPosClass = getPillPositionClass(idx);
                const isCenter = posClass === 'pfh-card-center';

                return (
                  <div
                    key={proj.id}
                    className={`pfh-card ${posClass}`}
                    onClick={() => setActiveIdx(idx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${proj.title} preview`}
                    aria-current={isCenter ? 'true' : 'false'}
                  >
                    <div className="pfh-card-img-wrap">
                      <Image
                        src={proj.imgUrl}
                        alt={proj.alt}
                        fill
                        priority={isCenter}
                        sizes="(max-width: 768px) 240px, 340px"
                        className="pfh-card-img"
                      />
                    </div>

                    {/* Floating Pill Badge (2 Lines Matching Spec) */}
                    <div className={`pfh-floating-pill ${pillPosClass}`}>
                      <div className="pfh-pill-icon-box">
                        {proj.badgeIcon}
                      </div>
                      <div className="pfh-pill-text-col">
                        <span className="pfh-pill-line">{proj.badgeTextLine1}</span>
                        <span className="pfh-pill-line">{proj.badgeTextLine2}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Side-Scroll Horizontal Slide Indicators */}
            <div className="pfh-scroll-indicators" role="tablist" aria-label="Image slide selector">
              {HERO_PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`pfh-scroll-dot ${activeIdx === idx ? 'active' : ''}`}
                  aria-label={`Scroll to ${proj.title}`}
                  aria-selected={activeIdx === idx}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Statistics & Supporting Details Row */}
        <div className="pfh-stats-section">
          <div className="pfh-stats-grid">
            {/* Stat 1 */}
            <div className="pfh-stat-item">
              <div className="pfh-stat-value">3+</div>
              <div className="pfh-stat-label">Products Delivered</div>
            </div>

            <div className="pfh-stat-divider" aria-hidden="true" />

            {/* Stat 2 */}
            <div className="pfh-stat-item">
              <div className="pfh-stat-value">5+</div>
              <div className="pfh-stat-label">Industries Served</div>
            </div>

            <div className="pfh-stat-divider" aria-hidden="true" />

            {/* Stat 3 */}
            <div className="pfh-stat-item">
              <div className="pfh-stat-value">100%</div>
              <div className="pfh-stat-label">Client Focused</div>
            </div>

            <div className="pfh-stat-divider" aria-hidden="true" />

            {/* Stat 4 */}
            <div className="pfh-stat-item">
              <div className="pfh-stat-value pfh-stat-infinity">&infin;</div>
              <div className="pfh-stat-label">Long-Term Partnerships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
