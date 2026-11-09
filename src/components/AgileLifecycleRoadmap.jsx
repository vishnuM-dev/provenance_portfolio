'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Lightbulb,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  Layers,
  ArrowRight,
} from 'lucide-react';
import './AgileLifecycleRoadmap.css';

const STAGES = [
  {
    step: '01',
    phase: 'Phase 01',
    badge: 'Discovery & Scope',
    title: 'Discovery & Requirements',
    desc: 'In-depth stakeholder interviews, feasibility analysis, and user journey roadmapping.',
    icon: Lightbulb,
  },
  {
    step: '02',
    phase: 'Phase 02',
    badge: 'Design & Prototype',
    title: 'Planning & UI/UX Design',
    desc: 'Wireframing, clickable prototypes, and complete design system token setup.',
    icon: PenTool,
  },
  {
    step: '03',
    phase: 'Phase 03',
    badge: 'Core Architecture',
    title: 'Development & API Integration',
    desc: 'Agile sprints building web & mobile apps, route handlers, and data models.',
    icon: Code2,
  },
  {
    step: '04',
    phase: 'Phase 04',
    badge: 'Quality & Security',
    title: 'Testing & Quality Assurance',
    desc: 'Automated test execution, cross-device verification, security audits, and load testing.',
    icon: ShieldCheck,
  },
  {
    step: '05',
    phase: 'Phase 05',
    badge: 'Release & Maintenance',
    title: 'Deployment & Ongoing Support',
    desc: 'Docker containerization, automated CI/CD release, App Store publishing, and 24/7 SLA maintenance.',
    icon: Rocket,
  },
];

/**
 * 3D Rocket Illustration for Bottom CTA Banner
 */
function CtaRocketIllustration() {
  return (
    <svg viewBox="0 0 76 76" fill="none" className="agile-cta-rocket-svg" aria-hidden="true">
      {/* Fluffy smoke clouds at bottom */}
      <ellipse cx="26" cy="62" rx="14" ry="8" fill="#ffffff" fillOpacity="0.85" />
      <ellipse cx="40" cy="60" rx="13" ry="7" fill="#ffffff" fillOpacity="0.95" />
      <ellipse cx="16" cy="56" rx="10" ry="6" fill="#ffffff" fillOpacity="0.75" />
      <circle cx="28" cy="54" r="7" fill="#ffffff" fillOpacity="0.9" />

      {/* Thruster Flame */}
      <polygon points="28,54 40,43 23,45" fill="#fde047" />
      <polygon points="29,52 37,44 25,46" fill="#ef4444" />

      {/* Fins */}
      <path d="M19 44 L25 39 L23 50 Z" fill="#ffffff" fillOpacity="0.95" />
      <path d="M40 28 L45 35 L36 37 Z" fill="#ffffff" fillOpacity="0.95" />

      {/* Main Rocket Body */}
      <path
        d="M23 45 C25 36 34 20 48 16 C45 30 34 39 25 45 Z"
        fill="#ffffff"
        filter="drop-shadow(0 2px 5px rgba(0,0,0,0.18))"
      />
      {/* Orange Nose Cone Tip */}
      <path d="M43 19 C45 17 47 16 48 16 C48 17 47 19 45 21 Z" fill="#ea580c" />

      {/* Porthole Outer & Inner Rings */}
      <circle cx="36" cy="28" r="4.5" fill="#ea580c" />
      <circle cx="36" cy="28" r="2.8" fill="#fed7aa" />
    </svg>
  );
}

export default function AgileLifecycleRoadmap() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeStage, setActiveStage] = useState('01');
  const [revealedSteps, setRevealedSteps] = useState(new Set());
  const isManualSelectingRef = useRef(false);
  const manualTimeoutRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    if (!section) return;

    // 1. Overall section entrance observer
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

    // 2. Individual mobile timeline item scroll-reveal observer
    const items = Array.from(section.querySelectorAll('.agile-mobile-timeline-item'));
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = entry.target.getAttribute('data-step');
            if (step) {
              setRevealedSteps((prev) => {
                if (prev.has(step)) return prev;
                const next = new Set(prev);
                next.add(step);
                return next;
              });
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    items.forEach((item) => itemObserver.observe(item));

    // 3. Scroll tracking for active step on mobile
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        ticking = false;
        if (isManualSelectingRef.current) return;
        if (window.innerWidth >= 1024) return;

        const focalLine = window.innerHeight * 0.44;
        let closestStep = null;
        let minDistance = Infinity;

        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const dist = Math.abs(itemCenter - focalLine);

          if (rect.top <= focalLine + 120 && rect.bottom >= focalLine - 120) {
            if (dist < minDistance) {
              minDistance = dist;
              closestStep = item.getAttribute('data-step');
            }
          }
        });

        if (closestStep) {
          setActiveStage((prev) => (prev !== closestStep ? closestStep : prev));
        }
      });
      ticking = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      sectionObserver.disconnect();
      itemObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    };
  }, []);

  const handleStepSelect = (step) => {
    setActiveStage(step);
    isManualSelectingRef.current = true;
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      isManualSelectingRef.current = false;
    }, 1400);
  };

  const activeIndex = STAGES.findIndex((s) => s.step === activeStage);
  const progressPercent = activeIndex >= 0 ? (activeIndex / (STAGES.length - 1)) * 100 : 0;

  return (
    <section
      ref={sectionRef}
      className={`container agile-roadmap-section ${isInView ? 'is-in-view' : ''}`}
      aria-labelledby="agile-lifecycle-heading"
    >
      {/* Atmospheric Background Decorations matching reference */}
      <div className="agile-bg-decorations" aria-hidden="true">
        <div className="agile-bg-radial-top" />
        <div className="agile-bg-arc-ring" />
        <div className="agile-bg-radial-bottom" />
      </div>

      {/* ========================================================= */}
      {/* 1. MOBILE & TABLET VIEW (< 1024px) - Matched to Reference  */}
      {/* ========================================================= */}
      <div className="agile-mobile-roadmap-wrap">
        {/* Mobile Badge: ( [Layers] AGILE LIFECYCLE ) */}
        <div className="agile-mobile-badge-wrap">
          <div className="agile-mobile-badge">
            <Layers size={14} className="agile-badge-icon" aria-hidden="true" />
            <span>AGILE LIFECYCLE</span>
          </div>
        </div>

        {/* Mobile Heading */}
        <h2 id="agile-lifecycle-heading-mobile" className="agile-mobile-heading">
          Our 5-Step<br />
          <span className="agile-mobile-heading-accent">
            Development<br />
            Process
            {/* Small diagonal decorative strokes beside Process */}
            <span className="agile-heading-accents" aria-hidden="true">
              <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
                <line x1="4" y1="12" x2="10" y2="4" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="14" y1="12" x2="20" y2="4" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </span>
        </h2>

        {/* Descriptive Paragraph */}
        <p className="agile-mobile-desc">
          A disciplined, transparent engineering methodology taking your product from initial requirements to production launch.
        </p>

        {/* Vertical 5-Step Connected Timeline */}
        <div className="agile-mobile-timeline">
          {/* Vertical connected track with dashed base and solid progress beam */}
          <div className="agile-mobile-timeline-track" aria-hidden="true">
            <div className="agile-mobile-timeline-dashed-line" />
            <div
              className="agile-mobile-timeline-progress-line"
              style={{ height: `${progressPercent}%` }}
            />
          </div>

          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.step;
            const isRevealed = revealedSteps.has(stage.step) || isInView;

            return (
              <div
                key={`mob-step-${stage.step}`}
                data-step={stage.step}
                className={`agile-mobile-timeline-item ${isRevealed ? 'is-revealed' : ''} ${isActive ? 'is-active' : ''}`}
                style={{ '--step-idx': idx }}
                onClick={() => handleStepSelect(stage.step)}
              >
                {/* Numbered Orange Marker: 01 - 05 */}
                <div className="agile-mobile-marker" aria-hidden="true">
                  <span>{stage.step}</span>
                </div>

                {/* Step Card */}
                <div className="agile-mobile-card">
                  {/* Rounded Light-Orange Icon Container */}
                  <div className="agile-mobile-icon-box" aria-hidden="true">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  {/* Content Column */}
                  <div className="agile-mobile-card-content">
                    <h3 className="agile-mobile-card-title">{stage.title}</h3>
                    <p className="agile-mobile-card-desc">{stage.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner: Ready to Build Your Next Solution? */}
        <div className="agile-cta-banner-wrap">
          <Link
            href="/contact"
            className="agile-cta-banner"
            aria-label="Ready to Build Your Next Solution? Contact ProvenanceTech"
          >
            {/* Left: 3D Rocket Illustration */}
            <div className="agile-cta-rocket-box">
              <CtaRocketIllustration />
            </div>

            {/* Subtle Vertical Divider */}
            <div className="agile-cta-divider" aria-hidden="true" />

            {/* Center: Heading */}
            <div className="agile-cta-text-box">
              <span className="agile-cta-heading-line">Ready to Build</span>
              <span className="agile-cta-heading-line">Your Next Solution?</span>
            </div>

            {/* Right: Circular White Arrow Button */}
            <div className="agile-cta-arrow-circle" aria-hidden="true">
              <ArrowRight size={17} strokeWidth={2.4} />
            </div>
          </Link>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP VIEW (>= 1024px) - Preserved Alternating Grid   */}
      {/* ========================================================= */}
      <div className="agile-desktop-flow">
        {/* Section Header */}
        <div className="agile-roadmap-header">
          <span className="agile-roadmap-eyebrow">Agile Lifecycle</span>

          <div className="agile-roadmap-title-wrap">
            <div className="agile-dash-accent" aria-hidden="true">
              <svg width="44" height="6" viewBox="0 0 44 6" fill="none">
                <line x1="2" y1="3" x2="26" y2="3" stroke="#eb7821" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="32" y1="3" x2="42" y2="3" stroke="#eb7821" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            <h2 id="agile-lifecycle-heading" className="agile-roadmap-title">
              Our 5-Step <span className="agile-roadmap-title-accent">Development Process</span>
            </h2>

            <div className="agile-dash-accent" aria-hidden="true">
              <svg width="44" height="6" viewBox="0 0 44 6" fill="none">
                <line x1="2" y1="3" x2="12" y2="3" stroke="#eb7821" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="18" y1="3" x2="42" y2="3" stroke="#eb7821" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <p className="agile-roadmap-subtitle">
            A disciplined, transparent engineering methodology taking your product from initial requirements to production launch.
          </p>
        </div>

        {/* Row 1: Top Cards Row (Steps 01, 03, 05 have cards; Steps 02, 04 have phase tags) */}
        <div className="agile-grid-row agile-row-top">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isTop = idx % 2 === 0;
            const isActive = activeStage === stage.step;

            return (
              <div
                key={`top-${stage.step}`}
                className={`agile-col-slot ${isTop ? 'has-card' : 'has-tag'} ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveStage(stage.step)}
                onMouseLeave={() => setActiveStage(null)}
              >
                {isTop ? (
                  <div className="agile-card-top-wrap">
                    <div
                      className={`agile-card card-delay-${idx}`}
                      tabIndex={0}
                      onFocus={() => setActiveStage(stage.step)}
                      onBlur={() => setActiveStage(null)}
                    >
                      <div className="agile-card-header">
                        <span className="agile-step-badge">{stage.step}</span>
                        <div className="agile-card-icon-box">
                          <Icon size={18} strokeWidth={2.2} />
                        </div>
                      </div>
                      <h3 className="agile-card-title">{stage.title}</h3>
                      <p className="agile-card-desc">{stage.desc}</p>
                      <div className="agile-card-glow" aria-hidden="true" />
                    </div>
                    <div className="agile-stem stem-down" aria-hidden="true" />
                  </div>
                ) : (
                  <div className="agile-phase-pill-slot">
                    <span className="agile-phase-pill">{stage.badge}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Row 2: Central Timeline Track with Connecting Line and Milestones */}
        <div className="agile-timeline-track">
          <div className="agile-timeline-line-base" aria-hidden="true" />
          <div className="agile-timeline-line-progress" aria-hidden="true" />

          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.step;

            return (
              <div key={`node-${stage.step}`} className="agile-node-col">
                <button
                  type="button"
                  tabIndex={0}
                  className={`agile-milestone-node milestone-delay-${idx} ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveStage(stage.step)}
                  onMouseLeave={() => setActiveStage(null)}
                  onFocus={() => setActiveStage(stage.step)}
                  onBlur={() => setActiveStage(null)}
                  aria-label={`Milestone step ${stage.step}: ${stage.title}`}
                >
                  <span className="agile-milestone-number">{stage.step}</span>
                  <div className="agile-milestone-icon">
                    <Icon size={15} strokeWidth={2.4} />
                  </div>
                  <div className="agile-milestone-pulse" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Row 3: Bottom Cards Row (Steps 02, 04 have cards; Steps 01, 03, 05 have phase tags) */}
        <div className="agile-grid-row agile-row-bottom">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isBottom = idx % 2 === 1;
            const isActive = activeStage === stage.step;

            return (
              <div
                key={`bot-${stage.step}`}
                className={`agile-col-slot ${isBottom ? 'has-card' : 'has-tag'} ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveStage(stage.step)}
                onMouseLeave={() => setActiveStage(null)}
              >
                {isBottom ? (
                  <div className="agile-card-bottom-wrap">
                    <div className="agile-stem stem-up" aria-hidden="true" />
                    <div
                      className={`agile-card card-delay-${idx}`}
                      tabIndex={0}
                      onFocus={() => setActiveStage(stage.step)}
                      onBlur={() => setActiveStage(null)}
                    >
                      <div className="agile-card-header">
                        <span className="agile-step-badge">{stage.step}</span>
                        <div className="agile-card-icon-box">
                          <Icon size={18} strokeWidth={2.2} />
                        </div>
                      </div>
                      <h3 className="agile-card-title">{stage.title}</h3>
                      <p className="agile-card-desc">{stage.desc}</p>
                      <div className="agile-card-glow" aria-hidden="true" />
                    </div>
                  </div>
                ) : (
                  <div className="agile-phase-pill-slot">
                    <span className="agile-phase-pill">{stage.badge}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
