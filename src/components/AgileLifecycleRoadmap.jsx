'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Search,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
} from 'lucide-react';
import './AgileLifecycleRoadmap.css';

const STAGES = [
  {
    step: '01',
    phase: 'Phase 01',
    badge: 'Discovery & Scope',
    title: 'Discovery & Requirements',
    desc: 'In-depth stakeholder interviews, technical feasibility analysis, and user journey roadmapping.',
    icon: Search,
  },
  {
    step: '02',
    phase: 'Phase 02',
    badge: 'Design & Prototype',
    title: 'Planning & UI/UX Design',
    desc: 'Wireframing, clickable high-fidelity Figma prototypes, and complete design system token setup.',
    icon: Palette,
  },
  {
    step: '03',
    phase: 'Phase 03',
    badge: 'Core Architecture',
    title: 'Development & API Integration',
    desc: 'Agile sprints building Next.js web apps, mobile clients, Route Handlers, and DynamoDB data models.',
    icon: Code2,
  },
  {
    step: '04',
    phase: 'Phase 04',
    badge: 'Quality & Security',
    title: 'Testing & Quality Assurance',
    desc: 'Automated test execution, cross-device mobile verification, security audits, and load testing.',
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

export default function AgileLifecycleRoadmap() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeStage, setActiveStage] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

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

  return (
    <section
      ref={sectionRef}
      className={`container agile-roadmap-section ${isInView ? 'is-in-view' : ''}`}
      aria-labelledby="agile-lifecycle-heading"
    >
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

      {/* Desktop & Tablet Roadmap (Alternating 5-column layout) */}
      <div className="agile-desktop-flow">
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

      {/* Mobile Vertical Connected Timeline (< 768px) */}
      <div className="agile-mobile-flow">
        <div className="agile-mobile-line-base" aria-hidden="true" />
        <div className="agile-mobile-line-progress" aria-hidden="true" />

        {STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = activeStage === stage.step;

          return (
            <div
              key={`mob-${stage.step}`}
              className={`agile-mobile-item ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveStage(stage.step)}
              onMouseLeave={() => setActiveStage(null)}
            >
              {/* Left milestone node */}
              <div className="agile-mobile-node-wrap">
                <button
                  type="button"
                  className={`agile-milestone-node milestone-delay-${idx} ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveStage(activeStage === stage.step ? null : stage.step)}
                  aria-label={`Milestone step ${stage.step}: ${stage.title}`}
                >
                  <span className="agile-milestone-number">{stage.step}</span>
                  <div className="agile-milestone-icon">
                    <Icon size={14} strokeWidth={2.4} />
                  </div>
                </button>
              </div>

              {/* Right card */}
              <div className={`agile-card card-delay-${idx}`}>
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
          );
        })}
      </div>
    </section>
  );
}
