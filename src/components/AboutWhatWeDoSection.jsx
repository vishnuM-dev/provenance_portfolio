'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Layers, ArrowRight } from 'lucide-react';

/* ==========================================================================
   3D Service Icons Matching Mobile Reference Image
   ========================================================================== */
function WebApp3DIllustration() {
  return (
    <svg viewBox="0 0 76 76" fill="none" className="about-what-3d-svg">
      <defs>
        <radialGradient id="webappGlowWhat" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="laptopScreenGradWhat" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
      </defs>
      {/* Ambient shadow */}
      <ellipse cx="38" cy="58" rx="28" ry="7" fill="#ea580c" fillOpacity="0.16" filter="blur(3px)" />
      {/* Glowing screen backdrop */}
      <ellipse cx="38" cy="38" rx="26" ry="20" fill="url(#webappGlowWhat)" />
      {/* Base / Keyboard chassis */}
      <polygon points="12,50 64,50 68,57 8,57" fill="#ea580c" opacity="0.9" />
      <polygon points="8,57 68,57 66,60 10,60" fill="#9a3412" />
      {/* Trackpad */}
      <polygon points="32,52 44,52 45,55 31,55" fill="#fed7aa" opacity="0.6" />
      {/* Display Lid Back */}
      <polygon points="17,17 59,17 64,50 12,50" fill="#7c2d12" />
      {/* Display Screen */}
      <polygon points="19,19 57,19 62,48 14,48" fill="url(#laptopScreenGradWhat)" />
      {/* Code </> Symbol on Screen */}
      <text
        x="38"
        y="37"
        fill="#ffffff"
        fontSize="14"
        fontWeight="850"
        textAnchor="middle"
        fontFamily="monospace"
        letterSpacing="0.5"
      >
        &lt;/&gt;
      </text>
    </svg>
  );
}

function MobileApp3DIllustration() {
  return (
    <svg viewBox="0 0 76 76" fill="none" className="about-what-3d-svg">
      {/* Ambient shadow */}
      <ellipse cx="38" cy="62" rx="22" ry="6" fill="#ea580c" fillOpacity="0.16" filter="blur(3px)" />
      {/* Smartphone Body */}
      <rect x="23" y="14" width="30" height="48" rx="6" fill="#ffffff" stroke="#ea580c" strokeWidth="2.4" />
      {/* Screen Outline */}
      <rect x="26" y="20" width="24" height="36" rx="3.5" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1" />
      {/* Speaker Bar */}
      <rect x="33" y="17" width="10" height="1.6" rx="0.8" fill="#ea580c" />
      {/* Home Indicator / Dot */}
      <circle cx="38" cy="58" r="1.5" fill="#ea580c" />
    </svg>
  );
}

function CustomSoftware3DIllustration() {
  return (
    <svg viewBox="0 0 76 76" fill="none" className="about-what-3d-svg">
      <defs>
        <linearGradient id="layerGradWhat1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffb076" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="layerGradWhat2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="layerGradWhat3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#9a3412" />
        </linearGradient>
      </defs>
      {/* Ambient shadow */}
      <ellipse cx="38" cy="64" rx="26" ry="6" fill="#ea580c" fillOpacity="0.16" filter="blur(3px)" />
      {/* Bottom Layer 1 */}
      <g transform="translate(0, 16)">
        <polygon points="38,20 62,31 38,42 14,31" fill="#ffffff" stroke="#ea580c" strokeWidth="2.2" strokeLinejoin="round" />
        <polygon points="14,31 38,42 38,46 14,35" fill="url(#layerGradWhat3)" />
        <polygon points="38,42 62,31 62,35 38,46" fill="url(#layerGradWhat3)" />
      </g>
      {/* Middle Layer 2 */}
      <g transform="translate(0, 8)">
        <polygon points="38,20 62,31 38,42 14,31" fill="#ffffff" stroke="#ea580c" strokeWidth="2.2" strokeLinejoin="round" />
        <polygon points="14,31 38,42 38,46 14,35" fill="url(#layerGradWhat2)" />
        <polygon points="38,42 62,31 62,35 38,46" fill="url(#layerGradWhat2)" />
      </g>
      {/* Top Layer 3 */}
      <g transform="translate(0, 0)">
        <polygon points="38,20 62,31 38,42 14,31" fill="#ffffff" stroke="#ea580c" strokeWidth="2.2" strokeLinejoin="round" />
        <polygon points="14,31 38,42 38,46 14,35" fill="url(#layerGradWhat1)" />
        <polygon points="38,42 62,31 62,35 38,46" fill="url(#layerGradWhat1)" />
      </g>
    </svg>
  );
}

function BackendApi3DIllustration() {
  return (
    <svg viewBox="0 0 76 76" fill="none" className="about-what-3d-svg">
      <defs>
        <linearGradient id="cloudGradWhat" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fff3ea" />
        </linearGradient>
      </defs>
      {/* Ambient shadow */}
      <ellipse cx="38" cy="60" rx="25" ry="6" fill="#ea580c" fillOpacity="0.16" filter="blur(3px)" />
      {/* 3D Cloud */}
      <path
        d="M23 44 C17 44 12 39 14 32 C16 26 23 24 27 25 C31 17 42 16 47 22 C51 19 60 21 61 27 C67 29 68 36 64 41 C60 45 53 45 50 45 Z"
        fill="url(#cloudGradWhat)"
        stroke="#ea580c"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Gear in bottom right of cloud */}
      <g transform="translate(42, 36)">
        <circle cx="12" cy="12" r="7.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="#ffffff" />
        {/* Gear Teeth */}
        <path d="M12 2.5 V5 M12 19 V21.5 M2.5 12 H5 M19 12 H21.5 M5.3 5.3 L7.1 7.1 M16.9 16.9 L18.7 18.7 M5.3 18.7 L7.1 16.9 M16.9 7.1 L18.7 5.3" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

const WHAT_WE_DO_DATA = [
  {
    number: '01',
    title: 'Web Application Development',
    desc: 'We develop modern, responsive, and high-performance web applications that deliver seamless experiences.',
    href: '/services',
    highlighted: true,
    mobile3d: <WebApp3DIllustration />,
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="26" height="20" rx="4" stroke="#ea580c" strokeWidth="2.2" />
        <line x1="3" y1="12" x2="29" y2="12" stroke="#ea580c" strokeWidth="1.8" />
        <circle cx="7" cy="9" r="1.2" fill="#ea580c" />
        <circle cx="11" cy="9" r="1.2" fill="#ea580c" />
        <circle cx="15" cy="9" r="1.2" fill="#ea580c" />
        <path d="M12.5 16L9.5 19L12.5 22" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 16L22.5 19L19.5 22" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="17" y1="15" x2="15" y2="23" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Mobile Application Development',
    desc: 'We build intuitive mobile applications for Android and iOS using modern cross-platform technologies.',
    href: '/services',
    highlighted: false,
    mobile3d: <MobileApp3DIllustration />,
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="3" width="18" height="26" rx="4" stroke="#ea580c" strokeWidth="2.2" />
        <line x1="13" y1="6.5" x2="19" y2="6.5" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="24" r="1.5" fill="#ea580c" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Custom Software Development',
    desc: 'We transform business requirements into tailored software solutions designed to improve workflows and efficiency.',
    href: '/services',
    highlighted: false,
    mobile3d: <CustomSoftware3DIllustration />,
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L4 10L16 16L28 10L16 4Z" stroke="#ea580c" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M4 16L16 22L28 16" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 22L16 28L28 22" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Backend & API Development',
    desc: 'We develop reliable backend systems, secure APIs, and database-driven applications that scale effectively.',
    href: '/services',
    highlighted: false,
    mobile3d: <BackendApi3DIllustration />,
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 19C6.2 19 4 16.8 4 14C4 11.5 5.8 9.4 8.2 9.1C9 5.5 12.2 3 16 3C20.4 3 24 6.6 24 11C26.2 11.2 28 13 28 15.3C28 17.8 26 19.8 23.5 19.9" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
        <text x="6" y="15.5" fill="#ea580c" fontSize="6.5" fontWeight="900" fontFamily="system-ui, sans-serif">API</text>
        <circle cx="23" cy="22" r="3.2" stroke="#ea580c" strokeWidth="2" />
        <path d="M23 16.8V18.8M23 25.2V27.2M17.8 22H19.8M26.2 22H28.2" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AboutWhatWeDoSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [isInView, setIsInView] = useState(false);
  const [revealedCards, setRevealedCards] = useState(new Set());
  const [activeCardIdx, setActiveCardIdx] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = (e) => {
      const matches = e.matches;
      setPrefersReducedMotion(matches);
      if (matches) {
        setRevealedCards(new Set([0, 1, 2, 3]));
        setIsInView(true);
      }
    };
    updateMotion(mediaQuery);
    mediaQuery.addEventListener('change', updateMotion);

    const section = sectionRef.current;
    if (!section) return;

    // 1. Section Header entrance observer
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    );
    sectionObserver.observe(section);

    // 2. Individual card scroll-reveal observer
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idxStr = entry.target.getAttribute('data-card-index');
            if (idxStr !== null) {
              const idx = parseInt(idxStr, 10);
              setRevealedCards((prev) => {
                if (prev.has(idx)) return prev;
                const next = new Set(prev);
                next.add(idx);
                return next;
              });
            }
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    cardRefs.current.forEach((cardEl) => {
      if (cardEl) cardObserver.observe(cardEl);
    });

    // 3. Real-time scroll focal tracking for mobile cards
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        ticking = false;
        if (window.innerWidth > 960) return;

        // Focal point is slightly above viewport center for natural reading position
        const focalLine = window.innerHeight * 0.44;
        let closestIdx = 0;
        let minDistance = Infinity;

        cardRefs.current.forEach((cardEl, idx) => {
          if (!cardEl) return;
          const rect = cardEl.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(cardCenter - focalLine);

          // Only consider cards that are partially in the viewport
          if (rect.bottom > 100 && rect.top < window.innerHeight - 100) {
            if (distance < minDistance) {
              minDistance = distance;
              closestIdx = idx;
            }
          }
        });

        if (minDistance < window.innerHeight * 0.45) {
          setActiveCardIdx(closestIdx);
        }
      });
      ticking = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial focal card
    handleScroll();

    return () => {
      mediaQuery.removeEventListener('change', updateMotion);
      sectionObserver.disconnect();
      cardObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-capabilities-section" id="capabilities">
      {/* Subtle Ambient Silk Flow Waves in Background */}
      <div className="about-capabilities-silk-bg" aria-hidden="true">
        <svg className="about-cap-silk-left" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-60 220 C80 140, 200 200, 260 90 C300 30, 320 -10, 360 -40" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
          <path d="M-90 280 C50 190, 180 250, 280 130 C340 60, 380 20, 420 -10" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
        </svg>
        <svg className="about-cap-silk-right" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M560 160 C420 90, 300 150, 240 50 C200 -10, 180 -50, 140 -80" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
          <path d="M590 220 C450 150, 320 210, 220 90 C160 20, 120 -20, 80 -50" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className={`about-section-header ${isInView ? 'is-in-view' : ''}`}>
        {/* Pill badge: CORE CAPABILITIES */}
        <div className="about-capabilities-badge">
          <Layers size={13} color="#ea580c" strokeWidth={2.4} />
          <span>CORE CAPABILITIES</span>
        </div>

        {/* Title: What in black, We Do in orange with curved underline & spark whiskers */}
        <h2 className="about-capabilities-title">
          <span className="about-cap-what">What</span>{' '}
          <span className="about-cap-wedo-wrap">
            <span className="about-cap-wedo">We Do</span>
            {/* 3 radiating whisker sparks at top-right of "Do" */}
            <svg className="about-cap-whiskers" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8 26L2 30" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
              <path d="M18 16L18 8" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
              <path d="M26 22L34 16" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
            </svg>
            {/* Curved orange underline swoosh */}
            <svg className="about-cap-swoosh" viewBox="0 0 160 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2 6C45 16 115 16 158 6" stroke="#ea580c" strokeWidth="3.2" strokeLinecap="round" />
            </svg>
          </span>
        </h2>

        <p className="about-section-desc">
          We combine modern engineering practices with thoughtful design to create digital solutions tailored to your business needs.
        </p>
      </div>

      {/* 4 Premium 3D Service Cards */}
      <div className="about-what-grid">
        {WHAT_WE_DO_DATA.map((item, idx) => {
          const isRevealed = revealedCards.has(idx) || prefersReducedMotion;
          const isActive = activeCardIdx === idx;

          return (
            <div
              key={item.number}
              ref={(el) => (cardRefs.current[idx] = el)}
              data-card-index={idx}
              className={`about-what-card ${item.highlighted ? 'about-what-card--highlighted' : ''} ${
                isRevealed ? 'is-revealed' : ''
              } ${isActive ? 'is-scrolled-active' : ''}`}
              style={{
                transitionDelay: prefersReducedMotion ? '0s' : `${(idx % 4) * 0.09}s`,
              }}
              onMouseEnter={() => setActiveCardIdx(idx)}
              onTouchStart={() => setActiveCardIdx(idx)}
            >
              {/* Desktop Content (Rendered on desktop >= 769px) */}
              <div className="about-what-desktop-content">
                {/* Top Row: Floating 3D Icon Tile & Numbered Badge */}
                <div className="about-what-card-top">
                  <div className="about-what-icon-stage">
                    {/* Layered Orange Backdrop Plate */}
                    <div className="about-what-icon-backdrop" aria-hidden="true" />
                    {/* Elevated White Icon Tile */}
                    <div className="about-what-icon-front">
                      {item.icon}
                    </div>
                  </div>

                  {/* Numbered Badge (01 - 04) */}
                  <div className="about-what-num-badge">
                    {item.number}
                  </div>
                </div>

                {/* Card Body */}
                <h3 className="about-what-card-title">{item.title}</h3>
                <p className="about-what-card-desc">{item.desc}</p>

                {/* Bottom Row: Explore More Button */}
                <div className="about-what-card-bottom">
                  <Link
                    href={item.href}
                    className={`about-what-btn ${item.highlighted ? 'about-what-btn--primary' : 'about-what-btn--outline'}`}
                  >
                    <span>Explore More</span>
                    <span className="about-what-btn-arrow-wrap">
                      <ArrowRight size={15} strokeWidth={2.6} className="about-what-btn-arrow" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Mobile View: Exact match to Reference Image */}
              <Link href={item.href} className="about-what-mobile-card">
                {/* Left: 3D Squircle Icon Tile */}
                <div className="about-what-mobile-icon-box">
                  {item.mobile3d}
                </div>

                {/* Center: Title & Description */}
                <div className="about-what-mobile-info">
                  <h3 className="about-what-mobile-title">{item.title}</h3>
                  <p className="about-what-mobile-desc">{item.desc}</p>
                </div>

                {/* Right: Number Badge & Circular Arrow Button */}
                <div className="about-what-mobile-right">
                  <span className="about-what-mobile-num">{item.number}</span>
                  <span className="about-what-mobile-arrow-btn" aria-hidden="true">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </span>
                </div>
              </Link>

              {/* Flowing Bottom-Right Orange Wave Accents (Desktop only) */}
              <div className="about-what-card-wave" aria-hidden="true">
                <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 120 C40 80, 90 90, 160 40 L160 120 Z"
                    fill="url(#cardWaveGrad1What)"
                  />
                  <path
                    d="M30 120 C70 95, 110 105, 160 65 L160 120 Z"
                    fill="url(#cardWaveGrad2What)"
                  />
                  <defs>
                    <linearGradient id="cardWaveGrad1What" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f4974f" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0.45" />
                    </linearGradient>
                    <linearGradient id="cardWaveGrad2What" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0.55" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Ambient Dune Waves Matching Reference Image */}
      <div className="about-what-mobile-bottom-waves" aria-hidden="true">
        <svg viewBox="0 0 390 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 54 C60 28, 160 46, 390 14 L390 54 Z" fill="rgba(251, 146, 60, 0.16)" />
          <path d="M0 54 C100 36, 220 44, 390 28 L390 54 Z" fill="rgba(234, 88, 12, 0.22)" />
        </svg>
      </div>
    </section>
  );
}

