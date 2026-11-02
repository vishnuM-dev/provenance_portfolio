'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  CheckCircle2,
  Check,
  Zap,
  Smartphone,
  ShieldCheck,
  Clock,
  LifeBuoy,
  Rocket,
  Globe,
  ArrowRight,
  LayoutGrid,
  Monitor,
  Layers,
} from 'lucide-react';
import './WhyChooseUsSection.css';

/**
 * 3D Isometric Laptop Illustration with </> code and floating orange cubes
 */
function HeroLaptopIllustration() {
  return (
    <div className="why-choose-hero-illus-box" aria-hidden="true">
      <svg viewBox="0 0 170 145" fill="none" className="why-choose-laptop-svg">
        {/* Soft radial glow */}
        <ellipse cx="85" cy="80" rx="60" ry="40" fill="url(#hero-laptop-glow)" opacity="0.65" />

        {/* Floating Orange 3D Cube 1 (Top Left) */}
        <g transform="translate(18, 22)">
          <path d="M11 0 L22 5.5 L11 11 L0 5.5 Z" fill="#fb923c" />
          <path d="M0 5.5 L11 11 L11 22 L0 16.5 Z" fill="#ea580c" />
          <path d="M11 11 L22 5.5 L22 16.5 L11 22 Z" fill="#c2410c" />
        </g>

        {/* Floating Orange 3D Cube 2 (Top Right) */}
        <g transform="translate(138, 28)">
          <path d="M9 0 L18 4.5 L9 9 L0 4.5 Z" fill="#fb923c" />
          <path d="M0 4.5 L9 9 L9 18 L0 13.5 Z" fill="#ea580c" />
          <path d="M9 9 L18 4.5 L18 13.5 L9 18 Z" fill="#c2410c" />
        </g>

        {/* Floating Orange 3D Cube 3 (Bottom Right) */}
        <g transform="translate(144, 90)">
          <path d="M8 0 L16 4 L8 8 L0 4 Z" fill="#fb923c" />
          <path d="M0 4 L8 8 L8 16 L0 12 Z" fill="#ea580c" />
          <path d="M8 8 L16 4 L16 12 L8 16 Z" fill="#c2410c" />
        </g>

        {/* Floating Tile (Left Middle) */}
        <rect x="8" y="65" width="14" height="14" rx="3" fill="#ea580c" opacity="0.85" transform="rotate(-12 15 72)" />

        {/* Laptop Shadow */}
        <ellipse cx="85" cy="120" rx="58" ry="12" fill="#ea580c" fillOpacity="0.12" filter="blur(4px)" />

        {/* Laptop Base (Metallic) */}
        <polygon points="26,104 144,104 154,118 16,118" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
        <polygon points="16,118 154,118 152,123 18,123" fill="#94a3b8" />
        {/* Trackpad */}
        <polygon points="70,109 100,109 102,116 68,116" fill="#cbd5e1" />

        {/* Laptop Screen Back & Bezel */}
        <polygon points="36,25 134,25 144,104 26,104" fill="#1e293b" />
        {/* Screen Display Area */}
        <polygon points="40,30 130,30 140,99 30,99" fill="#0f172a" />

        {/* Code Symbol </> on Display */}
        <text
          x="85"
          y="72"
          fill="#ffffff"
          fontSize="24"
          fontWeight="800"
          textAnchor="middle"
          fontFamily="monospace"
          letterSpacing="1"
        >
          &lt;/&gt;
        </text>

        <defs>
          <radialGradient id="hero-laptop-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * 3D Target Illustration with Concentric Rings and Arrow Bullseye
 */
function Target3DIllustration() {
  return (
    <svg viewBox="0 0 86 86" fill="none" className="why-choose-card-3d-svg">
      <defs>
        <radialGradient id="target-orange-grad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#c2410c" />
        </radialGradient>
        <radialGradient id="target-depth" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Drop Shadow */}
      <ellipse cx="43" cy="50" rx="34" ry="26" fill="#ea580c" fillOpacity="0.14" filter="blur(4px)" />
      {/* 3D Ring Depth Layer */}
      <ellipse cx="43" cy="45" rx="32" ry="24" fill="#c2410c" opacity="0.6" />
      {/* Outer Orange Ring */}
      <ellipse cx="43" cy="43" rx="31" ry="23" fill="url(#target-orange-grad)" />
      {/* Outer White Band */}
      <ellipse cx="43" cy="43" rx="24" ry="17.5" fill="#ffffff" />
      {/* Middle Orange Ring */}
      <ellipse cx="43" cy="43" rx="17" ry="12.5" fill="url(#target-orange-grad)" />
      {/* Inner White Ring */}
      <ellipse cx="43" cy="43" rx="11" ry="8" fill="#ffffff" />
      {/* Bullseye Center */}
      <ellipse cx="43" cy="43" rx="5.5" ry="4" fill="url(#target-orange-grad)" />
      {/* Arrow Shaft & Head */}
      <line x1="64" y1="18" x2="45" y2="41" stroke="#1e293b" strokeWidth="2.8" strokeLinecap="round" />
      <polygon points="42,44 49,40 46,37" fill="#0f172a" />
      {/* Arrow Fletching */}
      <path d="M64 18 L72 15 L68 23 Z" fill="#ea580c" />
      <path d="M64 18 L61 10 L55 13 Z" fill="#fb923c" />
    </svg>
  );
}

/**
 * 3D Cloud + Database Server Rack Illustration
 */
function CloudServer3DIllustration() {
  return (
    <svg viewBox="0 0 86 86" fill="none" className="why-choose-card-3d-svg">
      <defs>
        <linearGradient id="cloud-grad-soft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="server-metal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      {/* Soft shadow */}
      <ellipse cx="43" cy="62" rx="28" ry="10" fill="#ea580c" fillOpacity="0.12" filter="blur(3px)" />

      {/* Puffy 3D Cloud Background */}
      <path
        d="M26 44 C20 44 15 38 17 31 C19 25 26 23 30 24 C34 16 45 15 50 21 C54 18 63 20 64 26 C70 28 71 35 67 40 C63 44 56 44 53 44 Z"
        fill="url(#cloud-grad-soft)"
        filter="drop-shadow(0 3px 6px rgba(0,0,0,0.06))"
      />

      {/* 3-Tier Server Rack */}
      {/* Tier 1 (Bottom) */}
      <rect x="29" y="52" width="28" height="9" rx="3" fill="url(#server-metal-grad)" />
      <circle cx="34" cy="56.5" r="1.4" fill="#ea580c" />
      <circle cx="38" cy="56.5" r="1.4" fill="#ea580c" />
      <rect x="44" y="55.5" width="9" height="2" rx="1" fill="#64748b" />

      {/* Tier 2 (Middle) */}
      <rect x="29" y="41" width="28" height="9" rx="3" fill="url(#server-metal-grad)" />
      <circle cx="34" cy="45.5" r="1.4" fill="#ea580c" />
      <circle cx="38" cy="45.5" r="1.4" fill="#ea580c" />
      <rect x="44" y="44.5" width="9" height="2" rx="1" fill="#64748b" />

      {/* Tier 3 (Top) */}
      <rect x="29" y="30" width="28" height="9" rx="3" fill="url(#server-metal-grad)" />
      <circle cx="34" cy="34.5" r="1.4" fill="#ea580c" />
      <circle cx="38" cy="34.5" r="1.4" fill="#ea580c" />
      <rect x="44" y="33.5" width="9" height="2" rx="1" fill="#64748b" />
    </svg>
  );
}

/**
 * 3D Smartphone Devices Illustration
 */
function Devices3DIllustration() {
  return (
    <svg viewBox="0 0 86 86" fill="none" className="why-choose-card-3d-svg">
      {/* Base shadow */}
      <ellipse cx="43" cy="65" rx="26" ry="8" fill="#ea580c" fillOpacity="0.12" filter="blur(3px)" />

      {/* Left / Back Phone (Larger) */}
      <rect x="18" y="20" width="28" height="44" rx="5" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
      <rect x="20" y="24" width="24" height="36" rx="3" fill="#ffffff" />
      <path d="M27 22 L37 22" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="22" y="26" width="20" height="13" rx="2" fill="#fff7ed" />
      <line x1="24" y1="43" x2="39" y2="43" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="48" x2="35" y2="48" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />

      {/* Right / Front Phone (Smaller, overlapping) */}
      <rect x="38" y="28" width="25" height="38" rx="4.5" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
      <rect x="40" y="31" width="21" height="32" rx="3" fill="#f8fafc" />
      <path d="M46 29.5 L55 29.5" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="50" cy="43" r="5" fill="#ea580c" fillOpacity="0.15" />
      <circle cx="50" cy="43" r="2.5" fill="#ea580c" />
      <line x1="43" y1="53" x2="58" y2="53" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Technical Bento Card Component for Desktop View
 */
function BentoCard({ className, children }) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
      card.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
      card.style.setProperty('--spotlight-opacity', '1');
      card.style.setProperty('--border-glow-opacity', '1');

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -2.8;
      const rotateY = ((x - centerX) / centerX) * 2.8;

      card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
      card.classList.add('is-hovered');
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty('--spotlight-opacity', '0');
    card.style.setProperty('--border-glow-opacity', '0');
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.classList.remove('is-hovered');
  };

  return (
    <div
      ref={cardRef}
      className={`bento-card ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bento-card-spotlight" aria-hidden="true" />
      <div className="bento-card-border-glow" aria-hidden="true" />
      {children}
    </div>
  );
}

const CATEGORY_TABS = [
  { id: 'All Projects', label: 'All Projects', icon: LayoutGrid },
  { id: 'Web Applications', label: 'Web Applications', icon: Monitor },
  { id: 'Business Software', label: 'Business Software', icon: Layers },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [showAllReasons, setShowAllReasons] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Primary reasons showcased in reference image
  const primaryReasons = [
    {
      id: 'reason-1',
      title: 'Tailored to Business Requirements',
      desc: 'Zero generic cookie-cutter templates. Every database schema, user workflow, and API endpoint is built around your specific business model.',
      illustration: <Target3DIllustration />,
      category: 'All Projects',
    },
    {
      id: 'reason-2',
      title: 'Modern & Maintainable Stack',
      desc: 'Built on Next.js 16 App Router, React 19, React Native, and Amazon DynamoDB for sub-10ms queries, high developer velocity, and clean code.',
      illustration: <CloudServer3DIllustration />,
      category: 'Web Applications',
    },
    {
      id: 'reason-3',
      title: 'Responsive & User-Friendly',
      desc: 'Engineered with touch-first accessibility, pixel-perfect fluid layouts, and seamless operation across iPhones, Androids, iPads.',
      illustration: <Devices3DIllustration />,
      category: 'Business Software',
    },
  ];

  // Additional reasons for "Explore More Reasons"
  const additionalReasons = [
    {
      id: 'reason-4',
      title: 'Security & Compliance Built-In',
      desc: 'Bank-grade security protocols, end-to-end encryption, automated OWASP checks, and compliant data residency from day one.',
      illustration: (
        <div className="why-choose-icon-fallback" aria-hidden="true">
          <ShieldCheck size={36} color="#ea580c" strokeWidth={1.8} />
        </div>
      ),
      category: 'Business Software',
    },
    {
      id: 'reason-5',
      title: 'Transparent Agile Collaboration',
      desc: 'Bi-weekly sprint demos, shared staging environments, async Slack channels, and crystal-clear milestone tracking.',
      illustration: (
        <div className="why-choose-icon-fallback" aria-hidden="true">
          <Clock size={36} color="#ea580c" strokeWidth={1.8} />
        </div>
      ),
      category: 'Web Applications',
    },
    {
      id: 'reason-6',
      title: 'Scalable Cloud Architecture',
      desc: 'Microservices, serverless compute, and container orchestration designed to scale effortlessly to millions of active users.',
      illustration: (
        <div className="why-choose-icon-fallback" aria-hidden="true">
          <LifeBuoy size={36} color="#ea580c" strokeWidth={1.8} />
        </div>
      ),
      category: 'Business Software',
    },
    {
      id: 'reason-7',
      title: 'Rapid Time-to-Market',
      desc: 'Streamlined CI/CD deployment automation and reusable modular systems that turn product roadmaps into production releases in record time.',
      illustration: (
        <div className="why-choose-icon-fallback" aria-hidden="true">
          <Rocket size={36} color="#ea580c" strokeWidth={1.8} />
        </div>
      ),
      category: 'Web Applications',
    },
    {
      id: 'reason-8',
      title: 'Global Scale & High Availability',
      desc: 'Edge-optimized caching, serverless elasticity, and low-latency worldwide delivery built to support rapid business growth with zero downtime.',
      illustration: (
        <div className="why-choose-icon-fallback" aria-hidden="true">
          <Globe size={36} color="#ea580c" strokeWidth={1.8} />
        </div>
      ),
      category: 'All Projects',
    },
  ];

  const visibleReasons = showAllReasons
    ? [...primaryReasons, ...additionalReasons]
    : primaryReasons;

  return (
    <section
      ref={sectionRef}
      className={`container why-choose-section bento-scroll-init ${isInView ? 'is-in-view' : ''}`}
      aria-labelledby="why-choose-heading"
    >
      {/* Background Soft Orange Atmospheric Gradients */}
      <div className="why-choose-bg-decorations" aria-hidden="true">
        <div className="why-choose-bg-radial-top" />
        <div className="why-choose-bg-arc-ring" />
        <div className="why-choose-bg-radial-bottom" />
      </div>

      {/* ========================================================= */}
      {/* 1. MOBILE & TABLET VIEW (< 1024px) - Matched to Reference  */}
      {/* ========================================================= */}
      <div className="why-choose-mobile-view">
        {/* Mobile Badge: ( [Layers] ENGINEERING EDGE ) */}
        <div className="why-choose-mobile-badge-wrap">
          <div className="why-choose-mobile-badge">
            <Layers size={14} className="why-choose-badge-icon" aria-hidden="true" />
            <span>ENGINEERING EDGE</span>
          </div>
        </div>

        {/* Mobile Header Row: Heading on Left + 3D Laptop on Right */}
        <div className="why-choose-mobile-hero-row">
          <div className="why-choose-mobile-title-col">
            <h2 id="why-choose-heading-mobile" className="why-choose-mobile-title">
              Why Choose<br />
              Provenance<br />
              <span className="why-choose-mobile-accent-wrap">
                <span className="why-choose-mobile-accent-word">Tech?</span>
                {/* 3 Radiating Sparks above Tech? */}
                <span className="why-choose-sparks-burst" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <line x1="12" y1="2" x2="12" y2="7" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="20" y1="6" x2="16" y2="9.5" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="22" y1="15" x2="17" y2="15" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
                {/* Curved Underline below Tech? */}
                <svg
                  viewBox="0 0 120 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="why-choose-underline-svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 12C32 17 88 16 117 5"
                    stroke="#ea580c"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* 3D Laptop with </> and floating cubes */}
          <div className="why-choose-mobile-illus-col">
            <HeroLaptopIllustration />
          </div>
        </div>

        {/* Subtitle / Descriptive Paragraph */}
        <p className="why-choose-mobile-desc">
          We combine enterprise architectural rigor with agile delivery speed so your digital products launch faster and stay reliable.
        </p>

        {/* Horizontal Category Filters */}
        <div className="why-choose-filter-row" role="tablist" aria-label="Filter engineering edge reasons">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`why-choose-filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                <Icon size={15} strokeWidth={2.2} className="why-choose-filter-icon" aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Horizontal Card List */}
        <div className="why-choose-mobile-cards-list">
          {visibleReasons.map((card, idx) => (
            <div
              key={card.id}
              className="why-choose-mobile-card"
              style={{ '--card-idx': idx }}
            >
              {/* Left Column: 3D Illustration inside warm rounded container */}
              <div className="why-choose-card-media-box">
                {card.illustration}
                {/* Subtle organic corner accent */}
                <div className="why-choose-media-corner-accent" aria-hidden="true" />
              </div>

              {/* Right Column: Title with checkmark, description & arrow */}
              <div className="why-choose-card-content-box">
                <div className="why-choose-card-title-row">
                  <span className="why-choose-check-circle" aria-hidden="true">
                    <Check size={12} strokeWidth={3.5} />
                  </span>
                  <h3 className="why-choose-card-heading">{card.title}</h3>
                </div>

                <p className="why-choose-card-description">{card.desc}</p>
              </div>

              {/* Circular Action Arrow Button */}
              <div className="why-choose-card-arrow-btn" aria-hidden="true">
                <ArrowRight size={16} strokeWidth={2.4} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA: Explore More Reasons */}
        <div className="why-choose-cta-wrap">
          <button
            type="button"
            className="why-choose-cta-btn"
            onClick={() => setShowAllReasons((prev) => !prev)}
            aria-expanded={showAllReasons}
          >
            <span className="why-choose-cta-icon-box" aria-hidden="true">
              <Zap size={16} strokeWidth={2.4} />
            </span>
            <span className="why-choose-cta-text">
              {showAllReasons ? 'Show Fewer Reasons' : 'Explore More Reasons'}
            </span>
            <span className="why-choose-cta-arrow-box" aria-hidden="true">
              <ArrowRight size={15} strokeWidth={2.4} />
            </span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP VIEW (>= 1024px) - Preserved Original Bento Grid*/}
      {/* ========================================================= */}
      <div className="why-choose-desktop-view">
        {/* Section Header with Flanking Accents */}
        <div className="why-choose-header">
          <span className="why-choose-eyebrow">Engineering Edge</span>

          <div className="why-choose-heading-wrap">
            <div className="heading-dash-accent heading-dash-left" aria-hidden="true">
              <svg width="44" height="6" viewBox="0 0 44 6" fill="none">
                <line x1="2" y1="3" x2="26" y2="3" stroke="#eb7821" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="32" y1="3" x2="42" y2="3" stroke="#eb7821" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <h2 id="why-choose-heading" className="why-choose-title">
              Why Choose <span className="why-choose-title-accent">Provenance Tech?</span>
            </h2>

            <div className="heading-dash-accent heading-dash-right" aria-hidden="true">
              <svg width="44" height="6" viewBox="0 0 44 6" fill="none">
                <line x1="2" y1="3" x2="12" y2="3" stroke="#eb7821" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="18" y1="3" x2="42" y2="3" stroke="#eb7821" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <p className="why-choose-subtitle">
            We combine enterprise architectural rigor with agile delivery speed so your digital products launch faster and stay reliable.
          </p>
        </div>

        {/* Asymmetric Bento Card Grid with Enhanced Interactive Animations */}
        <div className="why-choose-bento-grid">
          {/* Card 1: Featured Card (Left - Spans 2 Rows) */}
          <BentoCard className="bento-card-1">
            <div className="bento-icon-box">
              <CheckCircle2 size={26} strokeWidth={2.4} />
            </div>

            <h3 className="bento-card-title">
              Tailored to Business Requirements
            </h3>

            <p className="bento-card-desc">
              Zero generic cookie-cutter templates. Every database schema, user workflow, and API endpoint is built around your specific business model.
            </p>

            <div className="card-tech-illus target-illus" aria-hidden="true">
              <svg width="84" height="84" viewBox="0 0 84 84" fill="none">
                <circle cx="42" cy="42" r="36" stroke="#eb7821" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.32" />
                <circle cx="42" cy="42" r="27" stroke="#eb7821" strokeWidth="1.5" opacity="0.45" />
                <circle cx="42" cy="42" r="17" stroke="#eb7821" strokeWidth="1.5" opacity="0.5" />
                <circle cx="42" cy="42" r="8" stroke="#eb7821" strokeWidth="1.5" opacity="0.6" fill="rgba(235, 120, 33, 0.08)" />
                <circle cx="42" cy="42" r="2.5" fill="#eb7821" opacity="0.8" />
                <line x1="42" y1="4" x2="42" y2="16" stroke="#eb7821" strokeWidth="1.2" opacity="0.4" />
                <line x1="42" y1="68" x2="42" y2="80" stroke="#eb7821" strokeWidth="1.2" opacity="0.4" />
                <line x1="4" y1="42" x2="16" y2="42" stroke="#eb7821" strokeWidth="1.2" opacity="0.4" />
                <line x1="68" y1="42" x2="80" y2="42" stroke="#eb7821" strokeWidth="1.2" opacity="0.4" />
                <path d="M 68 16 L 46 38" stroke="#eb7821" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
                <polygon points="42,42 45,35 49,39" fill="#eb7821" opacity="0.75" />
              </svg>
            </div>
          </BentoCard>

          {/* Card 2: Modern & Maintainable Stack (Upper Middle) */}
          <BentoCard className="bento-card-2">
            <div className="bento-card-header">
              <div className="bento-icon-box">
                <Zap size={22} strokeWidth={2.4} />
              </div>
              <h3 className="bento-card-title">
                Modern &amp; Maintainable Stack
              </h3>
            </div>
            <p className="bento-card-desc">
              Built on Next.js 16 App Router, React 19, React Native, and Amazon DynamoDB for sub-10ms queries, high developer velocity, and clean code.
            </p>
          </BentoCard>

          {/* Card 3: Responsive & User-Friendly (Upper Right - Wide with Devices) */}
          <BentoCard className="bento-card-3">
            <div className="bento-card-body">
              <div className="bento-content-col">
                <div className="bento-card-header">
                  <div className="bento-icon-box">
                    <Smartphone size={22} strokeWidth={2.4} />
                  </div>
                  <h3 className="bento-card-title">
                    Responsive &amp; User-Friendly
                  </h3>
                </div>
                <p className="bento-card-desc">
                  Engineered with touch-first accessibility, pixel-perfect fluid layouts, and seamless operation across iPhones, Androids, iPads.
                </p>
              </div>

              <div className="card-tech-illus devices-illus" aria-hidden="true">
                <svg width="105" height="72" viewBox="0 0 105 72" fill="none">
                  <rect x="2" y="10" width="62" height="42" rx="4" stroke="#eb7821" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <line x1="2" y1="18" x2="64" y2="18" stroke="#eb7821" strokeWidth="1" opacity="0.4" />
                  <line x1="22" y1="52" x2="44" y2="52" stroke="#eb7821" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                  <rect x="52" y="4" width="28" height="52" rx="5" stroke="#eb7821" strokeWidth="1.8" fill="#ffffff" />
                  <line x1="62" y1="8" x2="70" y2="8" stroke="#eb7821" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
                  <circle cx="66" cy="51" r="2" fill="#eb7821" opacity="0.75" />
                  <rect x="76" y="22" width="26" height="46" rx="4.5" stroke="#eb7821" strokeWidth="1.6" fill="#ffffff" />
                  <line x1="84" y1="26" x2="94" y2="26" stroke="#eb7821" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
                  <circle cx="89" cy="63" r="1.8" fill="#eb7821" opacity="0.75" />
                </svg>
              </div>
            </div>
          </BentoCard>

          {/* Card 4: Security & Compliance Built-In */}
          <BentoCard className="bento-card-4">
            <div className="bento-card-header">
              <div className="bento-icon-box">
                <ShieldCheck size={22} strokeWidth={2.4} />
              </div>
              <h3 className="bento-card-title">
                Security &amp; Compliance Built-In
              </h3>
            </div>
            <p className="bento-card-desc">
              Bank-grade security protocols, end-to-end encryption, automated OWASP checks, and compliant data residency from day one.
            </p>
          </BentoCard>

          {/* Card 5: Transparent Agile Collaboration */}
          <BentoCard className="bento-card-5">
            <div className="bento-card-header">
              <div className="bento-icon-box">
                <Clock size={22} strokeWidth={2.4} />
              </div>
              <h3 className="bento-card-title">
                Transparent Agile Collaboration
              </h3>
            </div>
            <p className="bento-card-desc">
              Bi-weekly sprint demos, shared staging environments, async Slack channels, and crystal-clear milestone tracking.
            </p>
          </BentoCard>

          {/* Card 6: Scalable Cloud Architecture */}
          <BentoCard className="bento-card-6">
            <div className="bento-card-header">
              <div className="bento-icon-box">
                <LifeBuoy size={22} strokeWidth={2.4} />
              </div>
              <h3 className="bento-card-title">
                Scalable Cloud Architecture
              </h3>
            </div>
            <p className="bento-card-desc">
              Microservices, serverless compute, and container orchestration designed to scale effortlessly to millions of active users.
            </p>
            <div className="bento-corner-shape" aria-hidden="true">
              <svg viewBox="0 0 72 72" fill="none" width="100%" height="100%">
                <path d="M 0 72 Q 40 68 54 44 Q 64 22 72 0 L 72 72 Z" fill="#eb7821" fillOpacity="0.1" />
              </svg>
            </div>
          </BentoCard>

          {/* Card 7: Rapid Time-to-Market */}
          <BentoCard className="bento-card-7">
            <div className="bento-card-header">
              <div className="bento-icon-box">
                <Rocket size={22} strokeWidth={2.4} />
              </div>
              <h3 className="bento-card-title">
                Rapid Time-to-Market
              </h3>
            </div>
            <p className="bento-card-desc">
              Streamlined CI/CD deployment automation and reusable modular systems that turn product roadmaps into production releases in record time.
            </p>
            <div className="bento-corner-shape" aria-hidden="true">
              <svg viewBox="0 0 72 72" fill="none" width="100%" height="100%">
                <path d="M 0 72 Q 40 68 54 44 Q 64 22 72 0 L 72 72 Z" fill="#eb7821" fillOpacity="0.1" />
              </svg>
            </div>
          </BentoCard>

          {/* Card 8: Global Scale & High Availability */}
          <BentoCard className="bento-card-8">
            <div className="bento-card-header">
              <div className="bento-icon-box">
                <Globe size={22} strokeWidth={2.4} />
              </div>
              <h3 className="bento-card-title">
                Global Scale &amp; High Availability
              </h3>
            </div>
            <p className="bento-card-desc">
              Edge-optimized caching, serverless elasticity, and low-latency worldwide delivery built to support rapid business growth with zero downtime.
            </p>
            <div className="bento-corner-shape" aria-hidden="true">
              <svg viewBox="0 0 72 72" fill="none" width="100%" height="100%">
                <path d="M 0 72 Q 40 68 54 44 Q 64 22 72 0 L 72 72 Z" fill="#eb7821" fillOpacity="0.1" />
              </svg>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
