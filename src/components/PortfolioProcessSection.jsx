'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Compass,
  Layout,
  Code2,
  CheckCircle2,
  Server,
  Sparkles,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  ArrowRight,
  SlidersHorizontal,
  RotateCcw,
} from 'lucide-react';
import './PortfolioProcessSection.css';

const PROCESS_STEPS = [
  {
    step: '01',
    badge: 'Phase 01 • Discovery',
    title: 'Discovery',
    desc: 'Understand the business goals, requirements, target users, and project scope.',
    icon: Compass,
    highlights: [
      'Stakeholder alignment & core objective definition',
      'User personas, journey mapping & feature prioritisation',
      'Technical feasibility assessment & milestone roadmap',
    ],
  },
  {
    step: '02',
    badge: 'Phase 02 • Architecture & Design',
    title: 'Planning & Design',
    desc: 'Define the solution architecture, user journeys, wireframes, and interface design.',
    icon: Layout,
    highlights: [
      'Interactive wireframes & component-based UI design',
      'System architecture, data models & API specifications',
      'Design token system for seamless cross-platform consistency',
    ],
  },
  {
    step: '03',
    badge: 'Phase 03 • Agile Engineering',
    title: 'Development',
    desc: 'Build the application using appropriate technologies and maintainable engineering practices.',
    icon: Code2,
    highlights: [
      'Clean, modular Next.js/React frontend & resilient backend APIs',
      'Bi-weekly sprint demos, staging deployments & transparent progress',
      'Strict code reviews, type safety, and maintainable architectures',
    ],
  },
  {
    step: '04',
    badge: 'Phase 04 • Quality Assurance',
    title: 'Testing & Quality Assurance',
    desc: 'Validate functionality, accessibility, security considerations, and performance requirements.',
    icon: CheckCircle2,
    highlights: [
      'Automated unit, integration, and end-to-end testing suites',
      'Cross-device, cross-browser responsiveness & accessibility checks',
      'Security vulnerability audits & high-load performance profiling',
    ],
  },
  {
    step: '05',
    badge: 'Phase 05 • Launch & Longevity',
    title: 'Deployment & Support',
    desc: 'Deploy the solution, document the release, and provide agreed maintenance and support.',
    icon: Server,
    highlights: [
      'Zero-downtime production deployment with CI/CD cloud automation',
      'Continuous health monitoring, automated backups & error alerting',
      'Comprehensive codebase documentation & post-launch support',
    ],
  },
];

export default function PortfolioProcessSection({ id = 'process' }) {
  const sectionRef = useRef(null);
  const pillsRef = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeStep, setActiveStep] = useState('01');
  const [isSectionInView, setIsSectionInView] = useState(() => {
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      return true;
    }
    return false;
  });
  const [revealedSteps, setRevealedSteps] = useState(() => {
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      return new Set(PROCESS_STEPS.map((s) => s.step));
    }
    return new Set();
  });
  const isManualSelectingRef = useRef(false);
  const manualTimeoutRef = useRef(null);

  // 1. Section Entrance Observer
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionInView(true);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // 2. Individual Step Scroll-Reveal Observer
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) return;

    const cards = Array.from(section.querySelectorAll('.pfp-step-card'));
    const cardObserver = new IntersectionObserver(
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
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    cards.forEach((card) => cardObserver.observe(card));
    return () => cardObserver.disconnect();
  }, []);

  // 3. Scroll-Driven Focal Step Detection (Smooth Slow Transition as User Scrolls)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        ticking = false;
        if (isManualSelectingRef.current) return;
        if (selectedFilter !== 'all') return;

        const section = sectionRef.current;
        if (!section) return;

        const cards = Array.from(section.querySelectorAll('.pfp-step-card'));
        if (cards.length === 0) return;

        const focalLine = window.innerHeight * 0.44;
        let closestStep = null;
        let minDistance = Infinity;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const dist = Math.abs(cardCenter - focalLine);

          // Card must be within viewing range
          if (rect.top <= focalLine + 180 && rect.bottom >= focalLine - 180) {
            if (dist < minDistance) {
              minDistance = dist;
              closestStep = card.getAttribute('data-step');
            }
          }
        });

        if (closestStep) {
          setActiveStep((prev) => (prev !== closestStep ? closestStep : prev));
        }
      });
      ticking = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [selectedFilter]);

  // Auto-scroll the pill navigation on mobile to keep the active pill centered
  useEffect(() => {
    const container = pillsRef.current;
    if (!container) return;
    const activePill = container.querySelector('.pfp-pill--active');
    if (!activePill) return;

    const containerWidth = container.offsetWidth;
    const pillLeft = activePill.offsetLeft;
    const pillWidth = activePill.offsetWidth;
    const targetScroll = pillLeft - containerWidth / 2 + pillWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: 'smooth',
    });
  }, [selectedFilter, activeStep]);

  // Handle filter selection (All or specific step)
  const handleFilterSelect = useCallback((filterVal) => {
    isManualSelectingRef.current = true;
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      isManualSelectingRef.current = false;
    }, 1200);

    setSelectedFilter((prev) => {
      const next = prev === filterVal ? 'all' : filterVal;
      if (next !== 'all') {
        setActiveStep(next);
      }
      return next;
    });

    const section = sectionRef.current;
    if (!section) return;

    if (filterVal !== 'all') {
      const targetCard = section.querySelector(`.pfp-step-card[data-step="${filterVal}"]`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, []);

  // Click on a step card or pill to manually navigate
  const handleStepSelect = useCallback((step) => {
    setActiveStep(step);
    isManualSelectingRef.current = true;

    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      isManualSelectingRef.current = false;
    }, 1100);

    const section = sectionRef.current;
    if (!section) return;

    const targetCard = section.querySelector(`.pfp-step-card[data-step="${step}"]`);
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  // Calculate overall timeline progress (1 to 5 -> 0% to 100%)
  const activeIndex = PROCESS_STEPS.findIndex((s) => s.step === activeStep);
  const progressPercent = Math.max(0, (activeIndex / (PROCESS_STEPS.length - 1)) * 100);

  // Stepper calculations for filtered view
  const currentFilterIndex = PROCESS_STEPS.findIndex((s) => s.step === selectedFilter);
  const prevStep = currentFilterIndex > 0 ? PROCESS_STEPS[currentFilterIndex - 1].step : null;
  const nextStep =
    currentFilterIndex >= 0 && currentFilterIndex < PROCESS_STEPS.length - 1
      ? PROCESS_STEPS[currentFilterIndex + 1].step
      : null;

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`pfp-section ${isSectionInView ? 'pfp-section--in-view' : ''} ${
        selectedFilter !== 'all' ? `pfp-section--filtered pfp-section--filtered-${selectedFilter}` : ''
      }`}
      aria-label="Our Structured Development Process"
    >
      <div className="container pfp-container">
        {/* Section Header */}
        <div className="pfp-header">
          <div className="pfp-badge">
            <Sparkles size={13} className="pfp-badge-spark" aria-hidden="true" />
            <span>HOW WE WORK</span>
          </div>

          <h2 className="pfp-title">From Idea to Implementation</h2>

          <p className="pfp-subtitle">
            Our structured development process helps turn business requirements into practical,
            well-engineered digital products.
          </p>

          {/* Horizontally Scrollable Step Filter Pills */}
          <div
            ref={pillsRef}
            className="pfp-pills-row"
            role="tablist"
            aria-label="Process step filter navigation"
          >
            {/* "All Steps" Filter Pill */}
            <button
              type="button"
              onClick={() => handleFilterSelect('all')}
              className={`pfp-pill pfp-pill--all ${selectedFilter === 'all' ? 'pfp-pill--active' : ''}`}
              role="tab"
              aria-selected={selectedFilter === 'all'}
            >
              <SlidersHorizontal size={13} className="pfp-filter-icon" />
              <span>All Steps</span>
              <span className="pfp-pill-count">5</span>
            </button>

            {/* Individual Step Filter Pills */}
            {PROCESS_STEPS.map((s) => {
              const isPillActive =
                selectedFilter === s.step || (selectedFilter === 'all' && activeStep === s.step);
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => handleFilterSelect(s.step)}
                  className={`pfp-pill ${isPillActive ? 'pfp-pill--active' : ''}`}
                  role="tab"
                  aria-selected={isPillActive}
                >
                  <span className="pfp-pill-num">{s.step}</span>
                  <span className="pfp-pill-title">{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Filter Active Status Bar (Visible on mobile when filtered) */}
          {selectedFilter !== 'all' && (
            <div className="pfp-filter-bar">
              <div className="pfp-filter-bar-info">
                <span className="pfp-filter-pulse" aria-hidden="true" />
                <span className="pfp-filter-bar-text">
                  Filtered: <strong>Phase {selectedFilter}</strong> of 05
                </span>
              </div>
              <button
                type="button"
                className="pfp-filter-clear-chip"
                onClick={() => handleFilterSelect('all')}
                aria-label="Clear filter and view all steps"
              >
                <span>View All (5)</span>
                <RotateCcw size={12} strokeWidth={2.4} />
              </button>
            </div>
          )}
        </div>

        {/* Timeline Grid with Connecting Progress Line */}
        <div className="pfp-timeline-wrapper">
          {/* Vertical Connecting Progress Trail (Mobile / Tablet) */}
          <div className="pfp-vertical-track" aria-hidden="true">
            <div className="pfp-track-rail" />
            <div
              className="pfp-track-fill"
              style={{ height: `${progressPercent}%` }}
            />
          </div>

          {/* 5 Step Cards */}
          <div className="pfp-cards-grid">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = selectedFilter === step.step || (selectedFilter === 'all' && step.step === activeStep);
              const isRevealed = revealedSteps.has(step.step);

              return (
                <article
                  key={step.step}
                  data-step={step.step}
                  className={`pfp-step-card ${isActive ? 'pfp-card--active' : ''} ${
                    isRevealed ? 'pfp-card--revealed' : ''
                  }`}
                  onClick={() => handleStepSelect(step.step)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleStepSelect(step.step);
                    }
                  }}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {/* Step Connector Node on the timeline track */}
                  <div
                    className={`pfp-node-indicator ${
                      isActive ? 'pfp-node-indicator--active' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <span className="pfp-node-dot" />
                    {isActive && <span className="pfp-node-pulse" />}
                  </div>

                  {/* Card Header: Step Number, Phase Badge & Icon */}
                  <div className="pfp-card-header">
                    <div className="pfp-num-group">
                      <span className="pfp-step-num">{step.step}</span>
                      <span className="pfp-phase-badge">{step.badge}</span>
                    </div>

                    <div className="pfp-icon-wrap" aria-hidden="true">
                      <IconComp size={20} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Card Title & Summary */}
                  <div className="pfp-card-body">
                    <h3 className="pfp-step-title">{step.title}</h3>
                    <p className="pfp-step-desc">{step.desc}</p>
                  </div>

                  {/* Collapsible / Expandable Key Deliverables Tray (Dropdown on Scroll) */}
                  <div
                    className={`pfp-deliverables-tray ${
                      isActive ? 'pfp-tray--open' : ''
                    }`}
                  >
                    <div className="pfp-tray-inner">
                      <div className="pfp-tray-label">
                        <Check size={13} color="#ea580c" strokeWidth={2.8} />
                        <span>Key Deliverables &amp; Outcomes:</span>
                      </div>
                      <ul className="pfp-deliverables-list">
                        {step.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="pfp-deliverable-item">
                            <span className="pfp-bullet-dot" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Toggle Hint / Status */}
                  <div className="pfp-card-footer">
                    <span className="pfp-status-label">
                      {isActive ? 'Current Phase in Focus' : 'Tap to expand phase'}
                    </span>
                    <span
                      className={`pfp-chevron-icon ${
                        isActive ? 'pfp-chevron--open' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown size={16} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Phase Stepper Navigation (Visible in mobile filter mode) */}
          {selectedFilter !== 'all' && (
            <div className="pfp-filter-nav">
              <button
                type="button"
                disabled={!prevStep}
                onClick={() => prevStep && handleFilterSelect(prevStep)}
                className="pfp-filter-nav-btn pfp-filter-nav-prev"
                aria-label="Go to previous phase"
              >
                <ChevronLeft size={15} strokeWidth={2.4} />
                <span>Prev Phase</span>
              </button>

              <button
                type="button"
                onClick={() => handleFilterSelect('all')}
                className="pfp-filter-nav-all"
              >
                <span>Show All 5 Phases</span>
              </button>

              <button
                type="button"
                disabled={!nextStep}
                onClick={() => nextStep && handleFilterSelect(nextStep)}
                className="pfp-filter-nav-btn pfp-filter-nav-next"
                aria-label="Go to next phase"
              >
                <span>Next Phase</span>
                <ChevronRight size={15} strokeWidth={2.4} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

