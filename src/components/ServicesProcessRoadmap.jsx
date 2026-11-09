'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Lightbulb,
  FileText,
  Code2,
  CheckCircle2,
  Rocket,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import './ServicesProcessRoadmap.css';

const PROCESS_STEPS = [
  {
    step: '01',
    badge: 'Discovery & Scope',
    title: 'Discovery & Planning',
    desc: 'Understand business goals, user requirements, technical feasibility, and project roadmap.',
    icon: Lightbulb,
    highlight: false,
  },
  {
    step: '02',
    badge: 'UI/UX & Architecture',
    title: 'Design & Architecture',
    desc: 'Define data models, system architecture, user journeys, wireframes, and design components.',
    icon: FileText,
    highlight: false,
  },
  {
    step: '03',
    badge: 'Agile Engineering',
    title: 'Development & Integration',
    desc: 'Build frontend interfaces, backend endpoints, and third-party integrations using modern engineering practices.',
    icon: Code2,
    highlight: true,
  },
  {
    step: '04',
    badge: 'Verification & QA',
    title: 'Testing & Quality Assurance',
    desc: 'Verify functional correctness, cross-device responsiveness, security considerations, and edge cases.',
    icon: CheckCircle2,
    highlight: false,
  },
  {
    step: '05',
    badge: 'Release & SLA',
    title: 'Deployment & Support',
    desc: 'Deploy the solution to production, verify configuration, document the release, and provide agreed ongoing support.',
    icon: Rocket,
    highlight: false,
  },
];

export default function ServicesProcessRoadmap() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeStep, setActiveStep] = useState('01');
  const [revealedSteps, setRevealedSteps] = useState(new Set());
  const isManualSelectingRef = useRef(false);
  const manualTimeoutRef = useRef(null);

  useEffect(() => {
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
    const items = Array.from(section.querySelectorAll('.sp-mobile-timeline-item'));
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
        threshold: 0.12,
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

          if (rect.top <= focalLine + 140 && rect.bottom >= focalLine - 140) {
            if (dist < minDistance) {
              minDistance = dist;
              closestStep = item.getAttribute('data-step');
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
      sectionObserver.disconnect();
      itemObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    };
  }, []);

  const handleStepSelect = (step) => {
    setActiveStep(step);
    isManualSelectingRef.current = true;
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      isManualSelectingRef.current = false;
    }, 1400);
  };

  const activeIndex = PROCESS_STEPS.findIndex((s) => s.step === activeStep);
  const progressPercent = activeIndex >= 0 ? (activeIndex / (PROCESS_STEPS.length - 1)) * 100 : 0;

  return (
    <section
      ref={sectionRef}
      id="how-we-deliver"
      className={`sp-delivery-section ${isInView ? 'is-in-view' : ''}`}
      aria-label="How We Deliver - 5 Step Development Process"
    >
      <div className="sp-container">
        {/* Section Header */}
        <div className="sp-section-header">
          <div className="sp-badge">
            <Rocket size={14} className="sp-badge-icon" aria-hidden="true" />
            <span>How We Deliver</span>
          </div>

          <h2 className="sp-section-title">
            A Clear Process From Idea to Launch
          </h2>

          <p className="sp-section-subtitle">
            Our structured development methodology ensures clear communication, predictable milestones, and reliable software delivery.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 1. DESKTOP VIEW (>= 1024px): 5-Card Horizontal Flow       */}
        {/* ========================================================= */}
        <div className="sp-desktop-timeline-track">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            const isHighlighted = step.highlight;

            return (
              <div
                key={`desktop-step-${step.step}`}
                className={`sp-desktop-step-card ${isHighlighted ? 'sp-step-card-highlight' : ''}`}
              >
                {/* Top card metadata row */}
                <div className="sp-desktop-step-top">
                  <div className="sp-step-icon-wrap" aria-hidden="true">
                    <Icon size={20} strokeWidth={2.3} />
                  </div>
                  <span className="sp-step-num">{step.step}</span>
                </div>

                <span className="sp-step-badge-tag">{step.badge}</span>
                <h3 className="sp-step-title">{step.title}</h3>
                <p className="sp-step-desc">{step.desc}</p>

                {/* Connecting arrow/line to next step */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="sp-desktop-connector" aria-hidden="true">
                    <div className="sp-desktop-connector-line" />
                    <ArrowRight size={14} className="sp-desktop-connector-arrow" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 2. MOBILE VIEW (< 1024px): Connected Animated Timeline    */}
        {/* ========================================================= */}
        <div className="sp-mobile-timeline-wrapper">
          {/* Continuous vertical timeline track on the left */}
          <div className="sp-mobile-timeline-track" aria-hidden="true">
            <div className="sp-mobile-track-dashed" />
            <div
              className="sp-mobile-track-progress"
              style={{ height: `${progressPercent}%` }}
            />
          </div>

          {/* 5 Vertical Step Rows */}
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === step.step;
            const isRevealed = revealedSteps.has(step.step) || isInView;

            return (
              <div
                key={`mobile-step-${step.step}`}
                data-step={step.step}
                className={`sp-mobile-timeline-item ${isRevealed ? 'is-revealed' : ''} ${
                  isActive ? 'is-active' : ''
                }`}
                style={{ '--step-idx': idx }}
                onClick={() => handleStepSelect(step.step)}
              >
                {/* Step Marker on Track: 01 to 05 */}
                <div className="sp-mobile-marker" aria-hidden="true">
                  <span>{step.step}</span>
                </div>

                {/* Neatly Aligned Card on Right */}
                <div className="sp-mobile-card">
                  <div className="sp-mobile-card-header">
                    <div className="sp-mobile-icon-box" aria-hidden="true">
                      <Icon size={18} strokeWidth={2.4} />
                    </div>
                    <div className="sp-mobile-card-headings">
                      <span className="sp-mobile-card-tag">{step.badge}</span>
                      <h3 className="sp-mobile-card-title">{step.title}</h3>
                    </div>
                  </div>

                  <p className="sp-mobile-card-desc">{step.desc}</p>

                  <div className="sp-mobile-card-footer">
                    <span className="sp-mobile-step-pill">Phase {step.step}</span>
                    <span className="sp-mobile-status-dot" aria-hidden="true" />
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

