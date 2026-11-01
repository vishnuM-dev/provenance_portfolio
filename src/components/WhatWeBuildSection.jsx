'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Layout,
  Smartphone,
  Code2,
  Layers,
  Palette,
  Database,
  ArrowRight,
  BarChart3,
  Users,
  Server,
  Cloud,
  Terminal,
  Cpu,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import './WhatWeBuildSection.css';

/**
 * Service Stages Metadata (Design 03: Step Journey)
 */
const STAGES_DATA = [
  {
    id: 'stage-01',
    num: '01',
    title: 'Web Application Development',
    category: 'Modern Web Platforms & Dashboards',
    description: 'High-performance web platforms, SaaS products, customer portals, and enterprise dashboards built for speed, security, and long-term business growth.',
    capabilities: ['Next.js & React', 'Enterprise Portals', 'Real-time Dashboards'],
    accentClass: 'wwb-stage--orange',
    icon: Layout,
    iconBg: '#FFF0E8',
    iconColor: '#eb7821',
    slug: 'web-development',
  },
  {
    id: 'stage-02',
    num: '02',
    title: 'Mobile Application Development',
    category: 'Cross-Platform iOS & Android',
    description: 'Engaging, touch-first mobile experiences for iOS and Android engineered with modern cross-platform technologies and native device performance.',
    capabilities: ['React Native & iOS', 'Android Ecosystem', 'Offline-First Architecture'],
    accentClass: 'wwb-stage--lavender',
    icon: Smartphone,
    iconBg: '#F2EFFB',
    iconColor: '#7c3aed',
    slug: 'mobile-development',
  },
  {
    id: 'stage-03',
    num: '03',
    title: 'Custom Software Development',
    category: 'Tailored Business & Operational Systems',
    description: 'Tailored software systems, internal business tools, and automated operational workflows engineered from the ground up to solve complex enterprise challenges.',
    capabilities: ['Custom Business Logic', 'Automated Workflows', 'Legacy Migration'],
    accentClass: 'wwb-stage--blue',
    icon: Code2,
    iconBg: '#EDF4FC',
    iconColor: '#2563eb',
    slug: 'custom-software',
  },
  {
    id: 'stage-04',
    num: '04',
    title: 'Full-Stack Development',
    category: 'End-to-End Application Architecture',
    description: 'Seamless integration uniting intuitive frontend user interfaces with secure backend architectures, robust API route handlers, and high-velocity data layers.',
    capabilities: ['API Gateway & Microservices', 'Server Actions', 'Database Schemas'],
    accentClass: 'wwb-stage--mint',
    icon: Layers,
    iconBg: '#ECFDF5',
    iconColor: '#059669',
    slug: 'full-stack',
  },
  {
    id: 'stage-05',
    num: '05',
    title: 'UI/UX Design & Development',
    category: 'User-Centered Design Systems',
    description: 'Clear, intuitive user experiences built through stakeholder research, interactive wireframing, high-fidelity prototypes, and comprehensive design systems.',
    capabilities: ['Figma Prototypes', 'Design Tokens', 'Accessibility (WCAG 2.1)'],
    accentClass: 'wwb-stage--rose',
    icon: Palette,
    iconBg: '#FFF1F2',
    iconColor: '#e11d48',
    slug: 'ui-ux-design',
  },
  {
    id: 'stage-06',
    num: '06',
    title: 'Database & Cloud Solutions',
    category: 'Scalable Cloud Infrastructure',
    description: 'Scalable cloud infrastructure, automated CI/CD pipelines, and high-availability database architectures safeguarding enterprise data with sub-10ms queries.',
    capabilities: ['Amazon DynamoDB & SQL', 'AWS Cloud Infrastructure', 'Zero-Downtime Releases'],
    accentClass: 'wwb-stage--amber',
    icon: Database,
    iconBg: '#FEF3C7',
    iconColor: '#d97706',
    slug: 'cloud-database',
  },
];

/**
 * 3D Light-Themed Visual Renderers for each of the 6 stages
 */
function renderStageVisual(stageIndex) {
  switch (stageIndex) {
    // 01: Refined Light Laptop with Business Analytics Dashboard
    case 0:
      return (
        <div className="wwb-stage-visual-wrap wwb-laptop-stage">
          <div className="wwb-laptop-screen">
            <div className="wwb-laptop-camera" />
            <div className="wwb-laptop-inner-display">
              {/* Light Topbar */}
              <div className="wwb-laptop-topbar">
                <span className="wwb-laptop-brand">
                  Provenance<span>Tech</span>
                </span>
                <span className="wwb-laptop-version-tag">Analytics v2.6</span>
              </div>

              {/* Display Content */}
              <div className="wwb-laptop-body">
                {/* Mini Sidebar */}
                <div className="wwb-laptop-nav">
                  <div className="wwb-laptop-nav-pill active" />
                  <div className="wwb-laptop-nav-pill" />
                  <div className="wwb-laptop-nav-pill" />
                  <div className="wwb-laptop-nav-pill" />
                </div>

                {/* Dashboard Cards Grid */}
                <div className="wwb-laptop-content">
                  <div className="wwb-laptop-stat-pill">
                    <div className="wwb-laptop-val">$24,850</div>
                    <div className="wwb-laptop-sub">+12% ARR</div>
                  </div>

                  {/* 3D Wave Sparkline */}
                  <svg className="wwb-laptop-chart-svg" viewBox="0 0 100 36" fill="none">
                    <defs>
                      <linearGradient id="wwbChartGradLight" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ea580c" stopOpacity="0.32" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.01" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 28 Q15 10 32 20 T65 12 T100 8 L100 36 L0 36 Z"
                      fill="url(#wwbChartGradLight)"
                    />
                    <path
                      d="M0 28 Q15 10 32 20 T65 12 T100 8"
                      stroke="#ea580c"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Mini User Metric Bar */}
                  <div className="wwb-laptop-metric-row">
                    <span className="wwb-metric-dot" />
                    <span>Active Users: 1,420</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Laptop Base */}
          <div className="wwb-laptop-base">
            <div className="wwb-laptop-notch" />
          </div>
          {/* Floating Chart Metric Pill */}
          <div className="wwb-floating-pill wwb-pill--orange" title="Real-time Performance">
            <BarChart3 size={15} strokeWidth={2.4} />
            <span>99.4% SLA</span>
          </div>
        </div>
      );

    // 02: Dual Floating Smartphones with Mobile Interfaces
    case 1:
      return (
        <div className="wwb-stage-visual-wrap wwb-phones-stage">
          {/* Back Phone (Angled soft lavender interface) */}
          <div className="wwb-phone-back">
            <div className="wwb-phone-back-topbar" />
            <div className="wwb-phone-back-logo">
              <Smartphone size={13} strokeWidth={2.5} />
            </div>
            <div className="wwb-phone-back-chart" />
          </div>

          {/* Front Phone (Crisp light iOS Interface) */}
          <div className="wwb-phone-front">
            <div className="wwb-phone-island" />
            <div className="wwb-phone-greeting">
              Good morning<br />
              <strong>Let&apos;s build.</strong>
            </div>
            <div className="wwb-phone-tasks-grid">
              <div className="wwb-phone-task-box">
                <span className="wwb-task-sub">Tasks</span>
                <span className="wwb-task-val">12 Active</span>
              </div>
              <div className="wwb-phone-task-box">
                <span className="wwb-task-sub">Sprints</span>
                <span className="wwb-task-val">04 Next</span>
              </div>
            </div>
            <div className="wwb-phone-row" style={{ borderLeftColor: '#7c3aed' }}>
              <div className="wwb-phone-row-title">Sprint Review</div>
              <span className="wwb-phone-row-time">10:30 AM · Figma</span>
            </div>
            <div className="wwb-phone-row" style={{ borderLeftColor: '#ea580c' }}>
              <div className="wwb-phone-row-title">API Integration</div>
              <span className="wwb-phone-row-time">02:00 PM · Sync</span>
            </div>
          </div>

          {/* Floating Mobile Badge */}
          <div className="wwb-floating-pill wwb-pill--purple" title="Cross-Platform Ready">
            <CheckCircle2 size={13} strokeWidth={2.6} />
            <span>iOS &amp; Android</span>
          </div>
        </div>
      );

    // 03: Floating Code Editor on PURE WHITE Surface (Light Syntax Theme)
    case 2:
      return (
        <div className="wwb-stage-visual-wrap wwb-code-stage">
          <div className="wwb-ide-window-light">
            {/* Light Topbar */}
            <div className="wwb-ide-topbar-light">
              <span className="wwb-ide-dot red" />
              <span className="wwb-ide-dot yellow" />
              <span className="wwb-ide-dot green" />
              <span className="wwb-ide-filename-light">ProductService.ts</span>
            </div>

            {/* Light-theme syntax highlighted code */}
            <div className="wwb-ide-code-light">
              <span className="wwb-code-comm">{'// ProductService.ts'}</span>{'\n'}
              <span className="wwb-code-kw">export class</span> ProductService {'{\n'}
              {'  '}<span className="wwb-code-kw">async</span> <span className="wwb-code-fn">getProducts</span>() {'{\n'}
              {'    '}<span className="wwb-code-kw">return await</span> db.products{'\n'}
              {'      '}.<span className="wwb-code-fn">findMany</span>({'{'}{'\n'}
              {'        '}where: {'{'}{' '}
              <span className="wwb-code-prop">active</span>:{' '}
              <span className="wwb-code-str">true</span>
              {' '}{'}'},{'\n'}
              {'        '}orderBy: {'{'} created: <span className="wwb-code-str">&apos;desc&apos;</span> {'}'}{'\n'}
              {'      '}{'}'});{'\n'}
              {'  '}{'}'}{'\n'}
              {'}'}
            </div>
          </div>

          {/* Floating Code Badge */}
          <div className="wwb-floating-pill wwb-pill--blue" title="TypeScript & Clean Architecture">
            <Code2 size={14} strokeWidth={2.4} />
            <span>Clean Code</span>
          </div>
        </div>
      );

    // 04: Layered 3D Architecture Components (Frontend, Backend, API, Database)
    case 3:
      return (
        <div className="wwb-stage-visual-wrap wwb-stack-stage">
          {/* Layer 1: Frontend UI */}
          <div className="wwb-stack-layer layer-1">
            <div className="wwb-stack-layer-icon" style={{ background: '#eff6ff', color: '#2563eb' }}>
              <Layout size={11} strokeWidth={2.4} />
            </div>
            <span>Frontend UI (Next.js)</span>
          </div>

          {/* Layer 2: Backend Core */}
          <div className="wwb-stack-layer layer-2">
            <div className="wwb-stack-layer-icon" style={{ background: '#fff4ec', color: '#ea580c' }}>
              <Cpu size={11} strokeWidth={2.4} />
            </div>
            <span>Backend Logic (Node/Go)</span>
          </div>

          {/* Layer 3: API Gateway */}
          <div className="wwb-stack-layer layer-3">
            <div className="wwb-stack-layer-icon" style={{ background: '#f5f0ff', color: '#7c3aed' }}>
              <Terminal size={11} strokeWidth={2.4} />
            </div>
            <span>API Gateway (GraphQL)</span>
          </div>

          {/* Layer 4: Database Tier */}
          <div className="wwb-stack-layer layer-4">
            <div className="wwb-stack-layer-icon" style={{ background: '#ecfdf5', color: '#059669' }}>
              <Database size={11} strokeWidth={2.4} />
            </div>
            <span>DynamoDB / PostgreSQL</span>
          </div>

          {/* Floating Full-Stack Badge */}
          <div className="wwb-floating-pill wwb-pill--mint" title="End-to-End Delivery">
            <Layers size={14} strokeWidth={2.4} />
            <span>End-to-End</span>
          </div>
        </div>
      );

    // 05: Modern Design-System Composition
    case 4:
      return (
        <div className="wwb-stage-visual-wrap wwb-figma-stage">
          <div className="wwb-figma-board-light">
            <div className="wwb-figma-sidebar-light">
              <div className="wwb-figma-tool-dot" style={{ background: '#ea580c' }} />
              <div className="wwb-figma-tool-dot" />
              <div className="wwb-figma-tool-dot" />
              <div className="wwb-figma-tool-dot" />
            </div>
            <div className="wwb-figma-content-light">
              <div className="wwb-figma-artboard-title">Design System v2</div>
              {/* Color Palette Swatches */}
              <div className="wwb-figma-swatches-row">
                <div className="wwb-figma-swatch wwb-swatch-coral" title="Primary Accent" />
                <div className="wwb-figma-swatch wwb-swatch-blue" title="Secondary Blue" />
                <div className="wwb-figma-swatch wwb-swatch-purple" title="Lavender Tint" />
                <div className="wwb-figma-swatch wwb-swatch-mint" title="Emerald Status" />
              </div>
              {/* Typography Specimen */}
              <div className="wwb-figma-type-spec">
                <div className="wwb-figma-type-aa">Aa</div>
                <div className="wwb-figma-type-lines">
                  <div className="wwb-figma-type-line" style={{ width: '85%' }} />
                  <div className="wwb-figma-type-line" style={{ width: '65%' }} />
                  <div className="wwb-figma-type-line" style={{ width: '45%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Figma Icon Badge */}
          <div className="wwb-floating-figma-badge" title="Figma Design Tokens">
            <svg width="15" height="15" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
              <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
              <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
              <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
              <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
            </svg>
          </div>

          {/* Floating Vector Cursor */}
          <div className="wwb-floating-figma-cursor" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#ea580c">
              <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" />
            </svg>
          </div>
        </div>
      );

    // 06: Clean Cloud Infrastructure with Server Blades & DB Cylinders
    case 5:
      return (
        <div className="wwb-stage-visual-wrap wwb-cloud-stage">
          {/* 3D Luminous Cloud Vector */}
          <div className="wwb-3d-cloud-graphic-light">
            <svg viewBox="0 0 120 70" width="100%" height="100%" fill="none">
              <defs>
                <linearGradient id="wwbCloudGradLight3" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#fffaf2" />
                  <stop offset="100%" stopColor="#fed7aa" />
                </linearGradient>
                <filter id="wwbCloudShadowLight3" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#f59e0b" floodOpacity="0.2" />
                </filter>
              </defs>
              <path
                d="M35 56 C22 56 12 46 12 34 C12 23 20 15 31 14 C36 6 45 1 56 1 C70 1 81 10 84 22 C94 22 104 30 104 40 C104 50 95 56 85 56 Z"
                fill="url(#wwbCloudGradLight3)"
                stroke="#f59e0b"
                strokeWidth="1.6"
                filter="url(#wwbCloudShadowLight3)"
              />
              <path
                d="M50 36 C44 36 39 31 39 25 C39 19.5 43 15.5 48.5 15 C51 11 55.5 8.5 61 8.5 C68 8.5 73.5 13 75 19 C80 19 85 23 85 28 C85 33 80.5 36 75.5 36 Z"
                stroke="#ea580c"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Stacked Light-Themed Server Blades */}
          <div className="wwb-server-disk-stack-light">
            <div className="wwb-server-blade-light">
              <div className="wwb-server-vents-light">
                <span className="wwb-server-vent-slot-light" />
                <span className="wwb-server-vent-slot-light" />
                <span className="wwb-server-vent-slot-light" />
              </div>
              <div className="wwb-server-leds">
                <span className="wwb-server-led green" />
                <span className="wwb-server-led orange" />
              </div>
            </div>
            <div className="wwb-server-blade-light">
              <div className="wwb-server-vents-light">
                <span className="wwb-server-vent-slot-light" />
                <span className="wwb-server-vent-slot-light" />
                <span className="wwb-server-vent-slot-light" />
              </div>
              <div className="wwb-server-leds">
                <span className="wwb-server-led orange" />
                <span className="wwb-server-led green" />
              </div>
            </div>
          </div>

          {/* Floating Cloud Uptime Badge */}
          <div className="wwb-floating-pill wwb-pill--amber" title="Cloud High Availability">
            <Cloud size={14} strokeWidth={2.4} />
            <span>99.99% Uptime</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

/**
 * Individual Interactive Service Stage Card
 */
function JourneyStageCard({
  stage,
  index,
  isActive,
  onActivate,
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glowStyle, setGlowStyle] = useState({});

  const handleMouseMove = useCallback((e) => {
    if (!isActive || !cardRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5.0; // max ±5deg
    const rotateY = ((x - centerX) / centerX) * 6.0;  // max ±6deg

    setTransformStyle(`perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`);
    setGlowStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(235, 120, 33, 0.10) 0%, rgba(255, 255, 255, 0) 65%)`,
      opacity: 1,
    });
  }, [isActive]);

  const handleMouseLeave = useCallback(() => {
    setTransformStyle('');
    setGlowStyle({ opacity: 0 });
  }, []);

  const Icon = stage.icon;

  return (
    <div
      id={stage.id}
      className={`wwb-stage-item ${isActive ? 'is-active' : ''}`}
    >
      {/* Node Marker along the vertical Journey Line */}
      <div className="wwb-stage-node-col">
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById(stage.id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            onActivate(index);
          }}
          className={`wwb-stage-badge ${isActive ? 'is-active' : ''}`}
          aria-label={`Jump to stage ${stage.num}: ${stage.title}`}
        >
          <span>{stage.num}</span>
        </button>
        <div className="wwb-stage-connector-arm" aria-hidden="true" />
      </div>

      {/* Main Pure White Interactive Card Surface */}
      <article
        ref={cardRef}
        className={`wwb-stage-card ${stage.accentClass} ${isActive ? 'is-highlighted' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
      >
        {/* Soft interactive cursor glow */}
        <div className="wwb-card-glow" style={glowStyle} aria-hidden="true" />

        {/* Card Content & Details (Left inside card) */}
        <div className="wwb-stage-card-body">
          {/* Header row: category pill + icon */}
          <div className="wwb-stage-meta-row">
            <span className="wwb-stage-step-tag">STAGE {stage.num}</span>
            <div
              className="wwb-stage-icon-wrap"
              style={{ backgroundColor: stage.iconBg, color: stage.iconColor }}
            >
              <Icon size={16} strokeWidth={2.4} />
            </div>
            <span className="wwb-stage-category-label">{stage.category}</span>
          </div>

          <h3 className="wwb-stage-title">{stage.title}</h3>
          <p className="wwb-stage-desc">{stage.description}</p>

          {/* Capability checklist pills */}
          <div className="wwb-stage-capabilities-row">
            {stage.capabilities.map((cap, cIdx) => (
              <span key={cIdx} className="wwb-capability-pill">
                <span className="wwb-capability-check">✓</span>
                <span>{cap}</span>
              </span>
            ))}
          </div>

          {/* Action Link */}
          <div className="wwb-stage-action-row">
            <Link
              href="/services"
              className="wwb-stage-learn-btn"
              aria-label={`Learn more about ${stage.title}`}
            >
              <span>Explore Capability</span>
              <span className="wwb-stage-arrow-circle" aria-hidden="true">
                <ArrowRight size={13} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>

        {/* 3D Visual Illustration Stage (Right inside card) */}
        <div className="wwb-stage-visual-container" aria-hidden="true">
          {renderStageVisual(index)}
        </div>
      </article>
    </div>
  );
}

/**
 * Main "What We Build" Component
 * Design 03: Premium Light Interactive Step Journey
 */
export default function WhatWeBuildSection() {
  const [activeStage, setActiveStage] = useState(0);
  const activeStageRef = useRef(0);
  const sectionRef = useRef(null);
  const journeyRef = useRef(null);

  // Keep ref synchronized to prevent stale closures without forcing re-renders
  useEffect(() => {
    activeStageRef.current = activeStage;
  }, [activeStage]);

  // Robust, responsive scroll-based stage synchronization (supports forward & backward scrolling)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;

    const evaluateActiveStage = () => {
      const section = sectionRef.current;
      if (!section) return;

      const stageItems = Array.from(section.querySelectorAll('.wwb-stage-item'));
      if (!stageItems.length) return;

      const secRect = section.getBoundingClientRect();
      const winHeight = window.innerHeight;
      const focalLine = winHeight * 0.45;

      // 1. Initial State / Top Boundary: If at or above the top of the section, Stage 01 is active
      const firstRect = stageItems[0].getBoundingClientRect();
      if (secRect.top >= winHeight * 0.6 || firstRect.top > focalLine) {
        if (activeStageRef.current !== 0) {
          activeStageRef.current = 0;
          setActiveStage(0);
        }
        return;
      }

      // 2. Final State / Bottom Boundary: If at the bottom of the section or page, Stage 06 is active
      const lastIndex = stageItems.length - 1;
      const lastRect = stageItems[lastIndex].getBoundingClientRect();
      const isWindowAtBottom =
        window.innerHeight + window.scrollY >= (document.documentElement.scrollHeight - 60);
      const isSectionEnd = lastRect.top <= winHeight * 0.45 || secRect.bottom <= winHeight * 0.85;

      if (isWindowAtBottom || isSectionEnd) {
        if (activeStageRef.current !== lastIndex) {
          activeStageRef.current = lastIndex;
          setActiveStage(lastIndex);
        }
        return;
      }

      // 3. Sequential Stage Progression: Find the highest stage whose top has crossed the focal reading line
      let currentActive = 0;
      for (let i = 0; i < stageItems.length; i++) {
        const itemRect = stageItems[i].getBoundingClientRect();
        if (itemRect.top <= focalLine) {
          currentActive = i;
        }
      }

      // Only call state setter if the active stage actually changed (prevents re-renders)
      if (activeStageRef.current !== currentActive) {
        activeStageRef.current = currentActive;
        setActiveStage(currentActive);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          evaluateActiveStage();
          ticking = false;
        });
        ticking = true;
      }
    };

    // IntersectionObserver multi-threshold triggers for instant responsive boundary recognition
    const stageItems = sectionRef.current
      ? Array.from(sectionRef.current.querySelectorAll('.wwb-stage-item'))
      : [];

    const observer = new IntersectionObserver(
      () => {
        handleScroll();
      },
      {
        root: null,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 0.9, 1],
      }
    );

    stageItems.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial check on mount
    evaluateActiveStage();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Compute percentage for vertical journey fill
  const progressPercent = Math.min(100, Math.max(0, (activeStage / (STAGES_DATA.length - 1)) * 100));

  return (
    <section ref={sectionRef} className="container" id="services" style={{ padding: '0.5rem 0 1rem' }}>
      <div className="wwb-journey-container">
        {/* Soft background ambient lighting meshes (Warm ivory / amber only) */}
        <div className="wwb-ambient-mesh-warm" aria-hidden="true" />
        <div className="wwb-ambient-mesh-subtle" aria-hidden="true" />

        <div className="wwb-editorial-grid">
          {/* =================================================================
              LEFT COLUMN: Sticky Introduction & Verified Highlights
              ================================================================= */}
          <aside className="wwb-intro-sticky-col">
            <div className="wwb-sticky-inner">
              {/* Eyebrow Label */}
              <div className="wwb-eyebrow-pill">
                <span className="wwb-eyebrow-dot" />
                <span>WHAT WE BUILD</span>
              </div>

              {/* Large Headline */}
              <h2 className="wwb-editorial-headline">
                End-to-end software solutions.{' '}
                <span className="wwb-headline-accent">Built for what comes next.</span>
              </h2>

              {/* Supporting Lead Description */}
              <p className="wwb-editorial-lead">
                From strategy, user-centered design, and high-velocity development to cloud deployment, we engineer modern digital products designed to help businesses move faster, scale smoothly, and succeed.
              </p>

              {/* Live Active Journey Tracker Card */}
              <div className="wwb-active-tracker-card">
                <div className="wwb-tracker-header">
                  <div className="wwb-tracker-pulse-dot" />
                  <span className="wwb-tracker-label">ACTIVE STAGE</span>
                  <span className="wwb-tracker-count">
                    0{activeStage + 1} / 0{STAGES_DATA.length}
                  </span>
                </div>
                <div className="wwb-tracker-title">{STAGES_DATA[activeStage].title}</div>
                <p className="wwb-tracker-desc">{STAGES_DATA[activeStage].category}</p>
                <div className="wwb-tracker-progress-track">
                  <div
                    className="wwb-tracker-progress-bar"
                    style={{ width: `${((activeStage + 1) / STAGES_DATA.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* 3 Compact Verified Statistics / Highlights */}
              <div className="wwb-stats-stack">
                <div className="wwb-stat-item">
                  <div className="wwb-stat-icon-wrap" style={{ background: '#FFF0E8', color: '#ea580c' }}>
                    <Layers size={17} strokeWidth={2.4} />
                  </div>
                  <div>
                    <div className="wwb-stat-number">06</div>
                    <div className="wwb-stat-label">Core Services</div>
                  </div>
                </div>

                <div className="wwb-stat-item">
                  <div className="wwb-stat-icon-wrap" style={{ background: '#EDF4FC', color: '#2563eb' }}>
                    <BarChart3 size={17} strokeWidth={2.4} />
                  </div>
                  <div>
                    <div className="wwb-stat-number">100+</div>
                    <div className="wwb-stat-label">Projects Delivered</div>
                  </div>
                </div>

                <div className="wwb-stat-item">
                  <div className="wwb-stat-icon-wrap" style={{ background: '#ECFDF5', color: '#059669' }}>
                    <Users size={17} strokeWidth={2.4} />
                  </div>
                  <div>
                    <div className="wwb-stat-number">98%</div>
                    <div className="wwb-stat-label">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* =================================================================
              RIGHT COLUMN: Connected 6-Stage Service Journey
              ================================================================= */}
          <div ref={journeyRef} className="wwb-journey-stages-col">
            {/* Continuous Vertical Journey Spine Line */}
            <div className="wwb-journey-spine-track" aria-hidden="true">
              <div
                className="wwb-journey-spine-fill"
                style={{ height: `${progressPercent}%` }}
              />
            </div>

            {/* Render 6 Service Stages */}
            <div className="wwb-stages-list">
              {STAGES_DATA.map((stage, index) => (
                <JourneyStageCard
                  key={stage.id}
                  stage={stage}
                  index={index}
                  isActive={activeStage === index}
                  onActivate={setActiveStage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
