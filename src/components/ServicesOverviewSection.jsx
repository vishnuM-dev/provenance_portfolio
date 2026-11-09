'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Layers,
  Palette,
  Database,
  Shield,
  ArrowRight,
  Check,
  ChevronDown,
} from 'lucide-react';

const SERVICES = [
  {
    id: 'web-dev',
    num: '01',
    title: 'Web Application Development',
    tagline: 'Modern Web Platforms & Dashboards',
    description: 'Build responsive websites, customer portals, dashboards, and modern web applications tailored to your business needs.',
    isPrimary: true,
    capabilities: ['Modern Web Platforms', 'Customer Portals', 'Responsive Dashboards', 'API Integrations'],
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="5" width="26" height="22" rx="4" stroke="#ea580c" strokeWidth="2.2" />
        <line x1="3" y1="11" x2="29" y2="11" stroke="#ea580c" strokeWidth="1.8" />
        <circle cx="7" cy="8" r="1.2" fill="#ea580c" />
        <circle cx="11" cy="8" r="1.2" fill="#ea580c" />
        <path d="M12 17L9.5 19.5L12 22M20 17L22.5 19.5L20 22M17 16L15 23" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'mobile-dev',
    num: '02',
    title: 'Mobile Application Development',
    tagline: 'Cross-Platform iOS & Android Solutions',
    description: 'Create intuitive mobile experiences for Android and iOS using modern cross-platform development technologies.',
    isPrimary: false,
    capabilities: ['Cross-Platform Apps', 'Native Performance', 'Offline-First Storage', 'App Store Deployments'],
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="4" width="16" height="24" rx="4" stroke="#ea580c" strokeWidth="2.2" />
        <circle cx="16" cy="23" r="1.5" fill="#ea580c" />
        <line x1="13" y1="7" x2="19" y2="7" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'custom-software',
    num: '03',
    title: 'Custom Software Development',
    tagline: 'Tailored Business & Operational Systems',
    description: 'Develop tailored software that streamlines business processes, improves productivity, and addresses specific operational challenges.',
    isPrimary: false,
    capabilities: ['Workflow Automation', 'Scalable Architecture', 'Custom ERP & CRM', 'Data Integration'],
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M11 9L4 16L11 23M21 9L28 16L21 23M19 7L13 25" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'fullstack-dev',
    num: '04',
    title: 'Full-Stack Development',
    tagline: 'End-to-End Application Architecture',
    description: 'Connect intuitive user interfaces with secure backend architectures, efficient route handlers, and scalable databases.',
    isPrimary: false,
    capabilities: ['Next.js & React Frontend', 'Secure API Backends', 'Relational Schemas', 'Full-Stack Security'],
    icon: <Layers size={22} strokeWidth={2.3} color="#ea580c" />,
  },
  {
    id: 'ui-ux',
    num: '05',
    title: 'UI/UX Design',
    tagline: 'User-Centered Interfaces & Design Systems',
    description: 'Design clear, intuitive user experiences through research, wireframing, high-fidelity prototypes, and cohesive design systems.',
    isPrimary: false,
    capabilities: ['User Research & Wireframes', 'Figma Design Systems', 'Interactive Prototypes', 'Accessible Design'],
    icon: <Palette size={22} strokeWidth={2.3} color="#ea580c" />,
  },
  {
    id: 'cloud-db',
    num: '06',
    title: 'Database & Cloud Solutions',
    tagline: 'Structured Data Storage & Cloud Delivery',
    description: 'Model data schemas and implement cloud storage architectures that keep business information reliable, secure, and accessible.',
    isPrimary: false,
    capabilities: ['PostgreSQL & MongoDB', 'Cloud Storage Architectures', 'Serverless Functions', 'CDN Caching Strategy'],
    icon: <Database size={22} strokeWidth={2.3} color="#ea580c" />,
  },
  {
    id: 'support-maintenance',
    num: '07',
    title: 'Maintenance & Support',
    tagline: 'Ongoing Reliability & Technical Iteration',
    description: 'Ensure ongoing software stability, security updates, dependency maintenance, and feature enhancements after launch.',
    isPrimary: false,
    capabilities: ['Proactive Monitoring', 'Security Patches', 'Performance Tuning', 'Feature Enhancements'],
    icon: <Shield size={22} strokeWidth={2.3} color="#ea580c" />,
  },
  {
    id: 'devops-deploy',
    num: '08',
    title: 'Deployment & DevOps',
    tagline: 'Predictable Builds & Release Pipelines',
    description: 'Establish automated build pipelines, containerized environments, and cloud infrastructure for predictable releases.',
    isPrimary: false,
    capabilities: ['CI/CD Automated Pipelines', 'Docker & Kubernetes', 'Automated Testing', 'Cloud Provisioning'],
    icon: (
      <svg viewBox="0 0 32 32" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M7 11L13 16L7 21M16 21H25" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ServicesOverviewSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  // Default to the first card open on mobile so user immediately sees the capability format
  const [activeId, setActiveId] = useState('web-dev');
  const isManualSelectingRef = useRef(false);
  const manualTimeoutRef = useRef(null);

  // Manual card selection with cooldown to prioritize user taps
  const handleToggleCard = useCallback((id) => {
    setActiveId((prev) => (prev === id ? null : id));
    isManualSelectingRef.current = true;
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      isManualSelectingRef.current = false;
    }, 1500);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 1. Entrance IntersectionObserver for scroll-reveal animations
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

    // 2. Scroll-driven focal card highlight and drop-down on mobile (< 1024px)
    let ticking = false;
    let lastSwitchTime = 0;

    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        ticking = false;
        if (isManualSelectingRef.current) return;
        if (window.innerWidth >= 1024) return;

        const cards = Array.from(section.querySelectorAll('.sp-service-card'));
        if (!cards.length) return;

        const now = Date.now();
        // Cooldown between scroll-triggered switches ensures smooth, readable transitions
        if (now - lastSwitchTime < 380) return;

        const focalLine = window.innerHeight * 0.44;
        let closestId = null;
        let minDistance = Infinity;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const dist = Math.abs(cardCenter - focalLine);

          // Card must intersect the focal zone to activate
          if (rect.top <= focalLine + 150 && rect.bottom >= focalLine - 150) {
            if (dist < minDistance) {
              minDistance = dist;
              closestId = card.getAttribute('data-id');
            }
          }
        });

        if (closestId && closestId !== activeId) {
          lastSwitchTime = now;
          setActiveId(closestId);
        }
      });
      ticking = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    };
  }, [activeId]);

  const renderCard = (srv, isWide = false) => {
    const isOpen = activeId === srv.id;

    return (
      <div
        key={srv.id}
        data-id={srv.id}
        className={`sp-service-card ${isWide ? 'sp-service-card-wide' : 'sp-service-card-compact'} ${srv.isPrimary ? 'sp-service-card-primary' : ''} ${isOpen ? 'is-open' : 'is-closed'}`}
      >
        {/* Top-Right Number Crest */}
        <div className="sp-card-corner-crest">{srv.num}</div>

        {/* Clickable Header Bar (acts as dropdown trigger on mobile) */}
        <button
          type="button"
          className="sp-card-toggle-header"
          onClick={() => handleToggleCard(srv.id)}
          aria-expanded={isOpen}
          aria-controls={`sp-card-content-${srv.id}`}
        >
          {/* Top Left Icon Stage */}
          <div className="sp-card-icon-stage">
            <div className="sp-card-icon-backplate" aria-hidden="true" />
            <div className="sp-card-icon-frontplate">
              {srv.icon}
            </div>
          </div>

          {/* Heading & Tagline */}
          <div className="sp-card-header-info">
            <h3 className="sp-card-title">{srv.title}</h3>
            <div className="sp-card-tagline">{srv.tagline}</div>
          </div>

          {/* Mobile Dropdown Indicator (Rotates on expansion) */}
          <div className="sp-card-dropdown-indicator" aria-hidden="true">
            <ChevronDown size={18} className="sp-card-chevron-icon" />
          </div>
        </button>

        {/* Expandable Dropdown Content (Animated via grid-template-rows on mobile) */}
        <div
          id={`sp-card-content-${srv.id}`}
          className="sp-card-expandable-content"
        >
          <div className="sp-card-expandable-inner">
            {/* Description */}
            <p className="sp-card-desc">{srv.description}</p>

            {/* Key Capabilities Pills */}
            <div className="sp-card-capabilities">
              {srv.capabilities.map((cap, cIdx) => (
                <span key={cIdx} className="sp-card-cap-pill">
                  <Check size={11} className="sp-cap-check" strokeWidth={3} />
                  {cap}
                </span>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="sp-card-footer-action">
              <Link
                href="/contact"
                className="sp-card-discuss-btn"
                aria-label={`Discuss ${srv.title}`}
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={13} strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave Accent */}
        <div className="sp-card-bottom-wave" aria-hidden="true">
          <svg viewBox="0 0 180 80" preserveAspectRatio="none" fill="none">
            <path d="M0 80 C 40 60, 90 65, 180 15 L 180 80 Z" fill="url(#sp-wave-grad)" opacity="0.45" />
            <path d="M20 80 C 70 70, 120 55, 180 30 L 180 80 Z" fill="url(#sp-wave-grad)" opacity="0.65" />
            <path d="M0 80 C 50 62, 100 66, 180 15" stroke="rgba(234, 88, 12, 0.25)" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Desktop Circular Arrow Link (direct navigation on desktop >= 1024px) */}
        <Link
          href="/contact"
          className={`sp-card-arrow-circle ${srv.isPrimary ? 'sp-card-arrow-primary' : ''}`}
          aria-label={`Discuss ${srv.title}`}
        >
          <ArrowRight size={14} strokeWidth={2.4} />
        </Link>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="services-overview"
      className={`sp-services-section ${isInView ? 'is-in-view' : ''}`}
    >
      {/* Background Ambient Flow Curves */}
      <div className="sp-services-silk-bg" aria-hidden="true">
        <svg className="sp-services-silk-left" viewBox="0 0 460 360" fill="none">
          <path
            d="M-80 300 C 60 250, 160 160, 240 60 C 280 5, 360 -5, 460 40"
            stroke="url(#sp-silk-grad-left)"
            strokeWidth="2.5"
            opacity="0.8"
          />
          <path
            d="M-100 330 C 40 280, 140 200, 220 110 C 270 45, 340 35, 440 85"
            fill="url(#sp-silk-fill-left)"
            opacity="0.45"
          />
          <defs>
            <linearGradient id="sp-silk-grad-left" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="sp-silk-fill-left" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffedd5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg className="sp-services-silk-right" viewBox="0 0 460 360" fill="none">
          <path
            d="M540 60 C 400 140, 310 210, 210 300 C 160 340, 80 350, -20 320"
            stroke="url(#sp-silk-grad-right)"
            strokeWidth="2.5"
            opacity="0.8"
          />
          <path
            d="M560 30 C 420 110, 330 180, 230 270 C 180 310, 100 320, 0 290"
            fill="url(#sp-silk-fill-right)"
            opacity="0.45"
          />
          <defs>
            <linearGradient id="sp-silk-grad-right" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="sp-silk-fill-right" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffedd5" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Global linear gradient for bottom card waves */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id="sp-wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>

      <div className="sp-container">
        {/* Section Header */}
        <div className="sp-section-header">
          <div className="sp-badge">
            <Layers size={14} className="sp-badge-icon" />
            <span>CAPABILITIES &amp; EXPERTISE</span>
          </div>

          <h2 className="sp-section-title">
            Comprehensive Software<br />
            <span className="sp-title-highlight">
              Engineering
              <svg className="sp-title-swoosh" viewBox="0 0 210 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 14C60 5 150 5 206 14" stroke="#ea580c" strokeWidth="3.6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="sp-title-whiskers" aria-hidden="true">
              <span className="sp-whisker sp-w1" />
              <span className="sp-whisker sp-w2" />
              <span className="sp-whisker sp-w3" />
            </span>
          </h2>

          <p className="sp-section-subtitle">
            From initial user experience design to production release, we deliver focused engineering services tailored to your technical requirements.
          </p>
        </div>

        {/* Top Row: 3 Wide Horizontal Flagship Cards (Web Dev, Mobile, Custom Software) */}
        <div className="sp-services-top-row">
          {SERVICES.slice(0, 3).map((srv) => renderCard(srv, true))}
        </div>

        {/* Bottom Row: 5 Specialized Vertical Compact Cards */}
        <div className="sp-services-bottom-row">
          {SERVICES.slice(3, 8).map((srv) => renderCard(srv, false))}
        </div>
      </div>
    </section>
  );
}

