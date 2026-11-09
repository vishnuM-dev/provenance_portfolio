'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Target,
  Layers,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Check,
} from 'lucide-react';
import './PortfolioWhyWorkWithUs.css';

const WHY_US_ITEMS = [
  {
    id: 'purposeful-engineering',
    num: '01',
    title: 'Purposeful Engineering',
    tagline: 'Practical & Value-Driven',
    desc: 'We focus on solving real business problems rather than adding unnecessary technical complexity.',
    icon: Target,
    points: [
      'Pragmatic architectural choices focused on tangible business outcomes',
      'Lean, maintainable codebase with zero unnecessary framework bloat',
      'Fast iteration speed, optimized load times, and high user satisfaction',
    ],
  },
  {
    id: 'maintainable-solutions',
    num: '02',
    title: 'Maintainable Solutions',
    tagline: 'Built for Longevity & Scale',
    desc: 'We prioritize readable code, thoughtful architecture, and systems that can evolve with changing requirements.',
    icon: Layers,
    points: [
      'Modular component structure designed for clear developer collaboration',
      'Resilient API contracts, clean separation of concerns, and robust tests',
      'Smooth long-term upgrade paths with minimal maintenance overhead',
    ],
  },
  {
    id: 'transparent-collaboration',
    num: '03',
    title: 'Transparent Collaboration',
    tagline: 'Direct Communication & Trust',
    desc: 'We value clear communication, practical planning, and feedback throughout the development process.',
    icon: MessageSquare,
    points: [
      'Direct, unfiltered access to lead engineers and system architects',
      'Transparent bi-weekly sprint milestones, staging demos, and changelogs',
      'No hidden costs, scope ambiguities, or unexpected technical hurdles',
    ],
  },
  {
    id: 'ownership-documentation',
    num: '04',
    title: 'Ownership & Documentation',
    tagline: '100% IP & Complete Handoff',
    desc: 'We define source-code ownership, repository access, documentation, and handover responsibilities clearly within each project agreement.',
    icon: ShieldCheck,
    points: [
      'Complete repository ownership transfer with 100% intellectual property rights',
      'Comprehensive setup guides, architecture diagrams, and deployment runbooks',
      'Structured technical handover sessions and post-launch SLA support',
    ],
  },
];

export default function PortfolioWhyWorkWithUs({ id = 'why-work-with-us' }) {
  const sectionRef = useRef(null);
  const cardRefs = useRef(new Map());
  const [isInView, setIsInView] = useState(false);
  const [openId, setOpenId] = useState('purposeful-engineering');
  const isManualSelectingRef = useRef(false);
  const manualTimeoutRef = useRef(null);

  // Manual click/tap to toggle card dropdown
  const handleToggleCard = useCallback((itemId) => {
    setOpenId((prev) => (prev === itemId ? null : itemId));
    isManualSelectingRef.current = true;
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      isManualSelectingRef.current = false;
    }, 1500);
  }, []);

  // Scroll observer to trigger dropdown effects while scrolling
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 1. Entrance observer
    const entranceObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.08 }
    );
    entranceObserver.observe(section);

    // 2. Scroll-driven focal dropdown opening
    let rafId = null;
    let lastSwitchTime = 0;

    const handleScroll = () => {
      if (isManualSelectingRef.current) return;

      const now = Date.now();
      // Graceful cooldown between scroll-driven dropdown openings (gives slow animation time to breathe)
      if (now - lastSwitchTime < 380) return;

      const viewportHeight = window.innerHeight;
      // Focal trigger line sits at 42% of screen height
      const focalLine = viewportHeight * 0.42;

      let closestId = null;
      let minDistance = Infinity;

      cardRefs.current.forEach((el, itemId) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Check if card is in the active reading zone
        if (rect.bottom > 100 && rect.top < viewportHeight - 100) {
          const cardCenter = rect.top + rect.height * 0.5;
          const dist = Math.abs(cardCenter - focalLine);
          if (dist < minDistance) {
            minDistance = dist;
            closestId = itemId;
          }
        }
      });

      if (closestId && closestId !== openId) {
        lastSwitchTime = now;
        setOpenId(closestId);
      }
    };

    const onScrollThrottled = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScrollThrottled, { passive: true });
    // Initial evaluation
    handleScroll();

    return () => {
      entranceObserver.disconnect();
      window.removeEventListener('scroll', onScrollThrottled);
      if (rafId) cancelAnimationFrame(rafId);
      if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    };
  }, [openId]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`pwhy-section ${isInView ? 'is-in-view' : ''}`}
      style={{ scrollMarginTop: '90px' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="pwhy-header">
          <div className="pwhy-badge">
            <Sparkles size={14} className="pwhy-badge-icon" />
            <span>WHY WORK WITH US</span>
          </div>

          <h2 className="pwhy-title">
            Built Around Your Business.{' '}
            <span className="pwhy-title-accent">
              Designed for What&apos;s Next.
              <svg className="pwhy-swoosh" viewBox="0 0 220 18" fill="none" aria-hidden="true">
                <path d="M4 14C65 5 155 5 216 14" stroke="#ea580c" strokeWidth="3.4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="pwhy-subtitle">
            Our core engineering principles ensure transparent delivery, high technical standards, and software that creates long-term business value.
          </p>
        </div>

        {/* Dropdown Accordion Container */}
        <div className="pwhy-accordion-list">
          {WHY_US_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) cardRefs.current.set(item.id, el);
                  else cardRefs.current.delete(item.id);
                }}
                className={`pwhy-card ${isOpen ? 'is-open' : ''}`}
                style={{ '--stagger-delay': `${idx * 80}ms` }}
              >
                {/* Clickable Header Dropdown Trigger */}
                <button
                  type="button"
                  className="pwhy-card-header"
                  onClick={() => handleToggleCard(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`pwhy-content-${item.id}`}
                >
                  <div className="pwhy-card-header-left">
                    {/* Step Number Badge */}
                    <div className="pwhy-card-num-badge">{item.num}</div>

                    {/* Icon Tile */}
                    <div className="pwhy-card-icon-box">
                      <Icon size={22} className="pwhy-card-icon" />
                    </div>

                    {/* Title & Tagline */}
                    <div className="pwhy-card-title-group">
                      <h3 className="pwhy-card-title">{item.title}</h3>
                      <span className="pwhy-card-tagline">{item.tagline}</span>
                    </div>
                  </div>

                  {/* Dropdown Chevron Toggle Button */}
                  <div className="pwhy-card-header-right">
                    <span className="pwhy-toggle-hint">{isOpen ? 'Close' : 'Explore'}</span>
                    <div className="pwhy-chevron-box">
                      <ChevronDown size={18} className="pwhy-chevron-icon" />
                    </div>
                  </div>
                </button>

                {/* Animated Dropdown Content Drawer */}
                <div
                  id={`pwhy-content-${item.id}`}
                  className="pwhy-card-drawer"
                  role="region"
                  aria-labelledby={item.id}
                >
                  <div className="pwhy-card-drawer-inner">
                    <div className="pwhy-drawer-divider" />

                    <div className="pwhy-drawer-content">
                      <p className="pwhy-drawer-desc">{item.desc}</p>

                      <div className="pwhy-points-list">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="pwhy-point-row">
                            <div className="pwhy-point-check">
                              <Check size={14} strokeWidth={3} />
                            </div>
                            <span className="pwhy-point-text">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

