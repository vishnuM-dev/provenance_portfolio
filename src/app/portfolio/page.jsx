'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Globe,
  Smartphone,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Target,
  CheckCircle2,
  Compass,
  Layout,
  ChevronDown,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Server
} from 'lucide-react';
import { TECHNOLOGY_CATEGORIES } from '@/data/technologies';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import PortfolioHero from '@/components/PortfolioHero';
import '@/components/PortfolioTechSection.css';

// 3D Tilted Floating Icons for Technology Expertise Showcase
const TECH_CATEGORY_3D_ICONS = {
  frontend: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="7" rx="2" />
      <rect x="2" y="14" width="20" height="7" rx="2" />
      <line x1="6" y1="6.5" x2="6.01" y2="6.5" strokeWidth="3" />
      <line x1="10" y1="6.5" x2="14" y2="6.5" strokeWidth="2" />
      <line x1="6" y1="17.5" x2="6.01" y2="17.5" strokeWidth="3" />
      <line x1="10" y1="17.5" x2="14" y2="17.5" strokeWidth="2" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'cloud-devops': (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <polyline points="12 12 12 16" />
      <polyline points="9 14 12 11 15 14" />
    </svg>
  ),
  devops: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <polyline points="12 12 12 16" />
      <polyline points="9 14 12 11 15 14" />
    </svg>
  ),
  'media-integrations': (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  ),
  media: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  ),
};

export default function PortfolioPage() {
  // FAQ Accordion State for Section 07 (first item open by default)
  const [openFaq, setOpenFaq] = useState(0);

  // 4 Services Overview for Section 03
  const services = [
    {
      title: 'Web Application Development',
      desc: 'Build responsive websites, customer portals, dashboards, and modern web applications tailored to your business.',
      icon: <Globe size={26} strokeWidth={2.2} />,
      link: '/services',
    },
    {
      title: 'Mobile Application Development',
      desc: 'Create intuitive mobile experiences for Android and iOS using appropriate mobile development technologies.',
      icon: <Smartphone size={26} strokeWidth={2.2} />,
      link: '/services',
    },
    {
      title: 'Custom Software Development',
      desc: 'Develop tailored software that streamlines business processes, improves productivity, and addresses specific operational challenges.',
      icon: <Code2 size={26} strokeWidth={2.2} />,
      link: '/services',
    },
    {
      title: 'Backend & API Development',
      desc: 'Build reliable APIs, database-driven applications, and backend systems that connect digital products and support future growth.',
      icon: <Cpu size={26} strokeWidth={2.2} />,
      link: '/services',
    },
  ];

  // 5 Process Steps for Section 05
  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'Understand the business goals, requirements, target users, and project scope.',
      icon: <Compass size={22} />,
    },
    {
      step: '02',
      title: 'Planning & Design',
      desc: 'Define the solution architecture, user journeys, wireframes, and interface design.',
      icon: <Layout size={22} />,
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Build the application using appropriate technologies and maintainable engineering practices.',
      icon: <Code2 size={22} />,
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      desc: 'Validate functionality, accessibility, security considerations, and performance requirements.',
      icon: <CheckCircle2 size={22} />,
    },
    {
      step: '05',
      title: 'Deployment & Support',
      desc: 'Deploy the solution, document the release, and provide agreed maintenance and support.',
      icon: <Server size={22} />,
    },
  ];

  // 4 Differentiators for Section 06
  const differentiators = [
    {
      title: 'Purposeful Engineering',
      desc: 'We focus on solving real business problems rather than adding unnecessary technical complexity.',
      icon: <Target size={24} />,
    },
    {
      title: 'Maintainable Solutions',
      desc: 'We prioritize readable code, thoughtful architecture, and systems that can evolve with changing requirements.',
      icon: <Layers size={24} />,
    },
    {
      title: 'Transparent Collaboration',
      desc: 'We value clear communication, practical planning, and feedback throughout the development process.',
      icon: <MessageSquare size={24} />,
    },
    {
      title: 'Ownership & Documentation',
      desc: 'We define source-code ownership, repository access, documentation, and handover responsibilities clearly within each project agreement.',
      icon: <ShieldCheck size={24} />,
    },
  ];

  // 6 FAQs for Section 07
  const faqs = [
    {
      q: 'What types of software do you develop?',
      a: 'We develop web applications, mobile applications, custom business software, and backend systems according to project requirements.',
    },
    {
      q: 'Which technologies do you use?',
      a: 'We work with suitable modern technologies across frontend development, backend engineering, mobile applications, databases, and cloud infrastructure.',
    },
    {
      q: 'Can you develop a solution based on our existing requirements?',
      a: 'Yes. Project scope, architecture, functionality, and delivery expectations can be discussed and defined before development begins.',
    },
    {
      q: 'How does your development process work?',
      a: 'We typically begin with requirement discovery, followed by planning, design, development, testing, and deployment.',
    },
    {
      q: 'Can you integrate with an existing application?',
      a: 'Integration possibilities depend on the existing architecture, APIs, security requirements, and project scope.',
    },
    {
      q: 'Do you provide maintenance after launch?',
      a: "Post-launch maintenance and support can be discussed and defined according to the project's needs and agreed service arrangements.",
    },
  ];

  return (
    <div style={{ paddingBottom: '1.5rem' }}>
      {/* ========================================================= */}
      {/* SECTION 01: PORTFOLIO HERO (REDESIGNED EDITORIAL SPEC)    */}
      {/* ========================================================= */}
      <PortfolioHero />

      {/* ========================================================= */}
      {/* SECTION 02: FEATURED PROJECTS                             */}
      {/* ========================================================= */}
      <div id="featured-projects" style={{ scrollMarginTop: '80px' }}>
        <CaseStudiesSection showViewAllBtn={false} />
      </div>

      {/* ========================================================= */}
      {/* SECTION 03: SERVICES OVERVIEW                             */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '1.25rem 0',
          background: 'transparent',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '750px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
            <div
              className="section-badge"
              style={{
                background: '#ffffff',
                border: '1px solid #dfd5c8',
                color: 'var(--primary, #df7a38)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
              }}
            >
              <Sparkles size={14} color="var(--primary)" />
              WHAT WE BUILD
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#1a130e',
                lineHeight: 1.2,
                marginBottom: '0.85rem',
              }}
            >
              Software Solutions for Growing Businesses
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#5a4c3e', lineHeight: 1.65 }}>
              From modern web applications to custom business software, we help turn complex requirements into practical digital solutions.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {services.map((s, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #dfd5c8',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: '0 6px 20px rgba(45, 35, 27, 0.04)',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(223, 122, 56, 0.1)',
                    color: 'var(--primary, #df7a38)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {s.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.22rem',
                    fontWeight: 800,
                    color: '#1a130e',
                    letterSpacing: '-0.015em',
                    marginBottom: '0.65rem',
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#6e6054',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {s.desc}
                </p>

                <Link
                  href={s.link}
                  style={{
                    marginTop: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    color: 'var(--primary, #df7a38)',
                    textDecoration: 'none',
                  }}
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 04: TECHNOLOGIES WE USE (3D TECHNOLOGY SHOWCASE)   */}
      {/* ========================================================= */}
      <section className="portfolio-tech-section" id="technologies">
        {/* Global SVG defs for card bottom waves */}
        <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
          <defs>
            <linearGradient id="pt-card-wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.65" />
              <stop offset="60%" stopColor="#fb923c" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.35" />
            </linearGradient>
          </defs>
        </svg>

        <div className="container">
          {/* Section Header */}
          <div className="portfolio-tech-header">
            <div className="portfolio-tech-pill-badge">
              <Layers size={14} className="portfolio-tech-badge-icon" />
              <span>OUR TECHNOLOGY EXPERTISE</span>
            </div>

            <h2 className="portfolio-tech-title">
              The Right Technology For Every{' '}
              <span className="portfolio-tech-title-highlight">
                Solution
                <svg className="portfolio-tech-swoosh" viewBox="0 0 180 18" fill="none" aria-hidden="true">
                  <path d="M4 14C50 5 130 5 176 14" stroke="#ea580c" strokeWidth="3.6" strokeLinecap="round" />
                </svg>
              </span>
              <span className="portfolio-tech-whiskers" aria-hidden="true">
                <span className="portfolio-tech-whisker ptw-1" />
                <span className="portfolio-tech-whisker ptw-2" />
                <span className="portfolio-tech-whisker ptw-3" />
              </span>
            </h2>

            <p className="portfolio-tech-desc">
              We use modern frameworks, reliable databases, and practical engineering tools to build maintainable digital products.
            </p>
            <p className="portfolio-tech-note">
              Technology choices depend on specific project requirements and scaling needs.
            </p>
          </div>

          {/* Row 1: Four Equal-Width Cards */}
          <div className="portfolio-tech-row-1">
            {TECHNOLOGY_CATEGORIES.slice(0, 4).map((cat, idx) => {
              const isFirstCard = idx === 0;
              return (
                <div
                  key={cat.id}
                  className={`portfolio-tech-card ${isFirstCard ? 'portfolio-tech-card-primary' : ''}`}
                >
                  {/* Top-Right Number Crest */}
                  <div className="portfolio-tech-crest">{cat.number || `0${idx + 1}`}</div>

                  {/* Card Header with 3D Floating Icon Tile */}
                  <div className="portfolio-tech-card-header">
                    <div className="portfolio-tech-icon-stage">
                      <div className="portfolio-tech-icon-backplate" aria-hidden="true" />
                      <div className="portfolio-tech-icon-frontplate">
                        {TECH_CATEGORY_3D_ICONS[cat.id] || TECH_CATEGORY_3D_ICONS[cat.id.replace('-', '_')] || TECH_CATEGORY_3D_ICONS[cat.id.split('-')[0]]}
                      </div>
                    </div>
                    <div className="portfolio-tech-card-info">
                      <h3 className="portfolio-tech-card-title">{cat.title}</h3>
                      <span className="portfolio-tech-card-badge">{cat.badge}</span>
                    </div>
                  </div>

                  {/* Technology Badges Wrap */}
                  <div className="portfolio-tech-badges-wrap">
                    {cat.technologies.map((t) => (
                      <div key={t.name} className="portfolio-tech-badge-item">
                        <span className="portfolio-tech-badge-icon">{t.icon}</span>
                        <span className="portfolio-tech-badge-name">{t.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Layered Orange Wave Decoration at Bottom */}
                  <div className="portfolio-tech-bottom-wave" aria-hidden="true">
                    <svg viewBox="0 0 170 75" preserveAspectRatio="none" fill="none">
                      <path d="M0 75 C 35 55, 80 58, 170 14 L 170 75 Z" fill="url(#pt-card-wave-grad)" opacity="0.45" />
                      <path d="M18 75 C 60 65, 105 50, 170 26 L 170 75 Z" fill="url(#pt-card-wave-grad)" opacity="0.65" />
                      <path d="M0 75 C 45 56, 90 60, 170 14" stroke="rgba(234, 88, 12, 0.25)" strokeWidth="1.5" />
                    </svg>
                  </div>

                  {/* Bottom-Right Circular Arrow Button */}
                  <Link
                    href="/technologies"
                    className={`portfolio-tech-arrow-circle ${isFirstCard ? 'portfolio-tech-arrow-primary' : ''}`}
                    aria-label={`Explore ${cat.title}`}
                  >
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Row 2: Two Wide Horizontal Cards */}
          <div className="portfolio-tech-row-2">
            {TECHNOLOGY_CATEGORIES.slice(4, 6).map((cat, idx) => (
              <div key={cat.id} className="portfolio-tech-card portfolio-tech-card-wide">
                {/* Top-Right Number Crest */}
                <div className="portfolio-tech-crest">{cat.number || `0${idx + 5}`}</div>

                {/* Card Header with 3D Floating Icon Tile */}
                <div className="portfolio-tech-card-header">
                  <div className="portfolio-tech-icon-stage">
                    <div className="portfolio-tech-icon-backplate" aria-hidden="true" />
                    <div className="portfolio-tech-icon-frontplate">
                      {TECH_CATEGORY_3D_ICONS[cat.id] || TECH_CATEGORY_3D_ICONS[cat.id.replace('-', '_')] || TECH_CATEGORY_3D_ICONS[cat.id.split('-')[0]]}
                    </div>
                  </div>
                  <div className="portfolio-tech-card-info">
                    <h3 className="portfolio-tech-card-title">{cat.title}</h3>
                    <span className="portfolio-tech-card-badge">{cat.badge}</span>
                  </div>
                </div>

                {/* Technology Badges Wrap */}
                <div className="portfolio-tech-badges-wrap">
                  {cat.technologies.map((t) => (
                    <div key={t.name} className="portfolio-tech-badge-item">
                      <span className="portfolio-tech-badge-icon">{t.icon}</span>
                      <span className="portfolio-tech-badge-name">{t.name}</span>
                    </div>
                  ))}
                </div>

                {/* Layered Orange Wave Decoration at Bottom */}
                <div className="portfolio-tech-bottom-wave" aria-hidden="true">
                  <svg viewBox="0 0 220 85" preserveAspectRatio="none" fill="none">
                    <path d="M0 85 C 50 62, 110 66, 220 16 L 220 85 Z" fill="url(#pt-card-wave-grad)" opacity="0.45" />
                    <path d="M25 85 C 80 72, 140 56, 220 30 L 220 85 Z" fill="url(#pt-card-wave-grad)" opacity="0.65" />
                    <path d="M0 85 C 60 64, 120 68, 220 16" stroke="rgba(234, 88, 12, 0.25)" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Bottom-Right Circular Arrow Button */}
                <Link
                  href="/technologies"
                  className="portfolio-tech-arrow-circle"
                  aria-label={`Explore ${cat.title}`}
                >
                  <ArrowRight size={14} strokeWidth={2.4} />
                </Link>
              </div>
            ))}
          </div>

          {/* Main CTA Button */}
          <div className="portfolio-tech-cta-wrap">
            <Link href="/technologies" className="portfolio-tech-cta-btn">
              <span>Explore Full Technology Capabilities</span>
              <ArrowRight size={17} strokeWidth={2.4} className="portfolio-tech-cta-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 05: OUR DEVELOPMENT PROCESS                       */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '1.25rem 0',
          background: 'transparent',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
            <div
              className="section-badge"
              style={{
                background: '#ffffff',
                border: '1px solid #dfd5c8',
                color: 'var(--primary, #df7a38)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
              }}
            >
              <Sparkles size={14} color="var(--primary)" />
              HOW WE WORK
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#1a130e',
                lineHeight: 1.2,
                marginBottom: '0.85rem',
              }}
            >
              From Idea to Implementation
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#5a4c3e', lineHeight: 1.65 }}>
              Our structured development process helps turn business requirements into practical, well-engineered digital products.
            </p>
          </div>

          {/* 5-Step Timeline Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '1.25rem',
              position: 'relative',
            }}
          >
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #dfd5c8',
                  padding: '1.75rem 1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: '0 6px 18px rgba(45, 35, 27, 0.04)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 900,
                      color: 'var(--primary)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {step.step}
                  </span>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(223, 122, 56, 0.1)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 800,
                    color: '#1a130e',
                    marginBottom: '0.55rem',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#6e6054',
                    lineHeight: 1.55,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 06: WHY PROVENANCETECH?                           */}
      {/* ========================================================= */}
      <section style={{ padding: '1.25rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
            <div
              className="section-badge"
              style={{
                background: '#ffffff',
                border: '1px solid #dfd5c8',
                color: 'var(--primary, #df7a38)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
              }}
            >
              <Sparkles size={14} color="var(--primary)" />
              WHY WORK WITH US
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#1a130e',
                lineHeight: 1.2,
                marginBottom: '0.85rem',
              }}
            >
              Built Around Your Business. Designed for What&apos;s Next.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '1.75rem',
            }}
          >
            {differentiators.map((d, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #dfd5c8',
                  padding: '2.25rem 1.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 6px 20px rgba(45, 35, 27, 0.04)',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(223, 122, 56, 0.1)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {d.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.22rem',
                    fontWeight: 800,
                    color: '#1a130e',
                    marginBottom: '0.65rem',
                    lineHeight: 1.3,
                  }}
                >
                  {d.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#6e6054',
                    lineHeight: 1.6,
                  }}
                >
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 07: FREQUENTLY ASKED QUESTIONS                    */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '1.75rem 0 2.5rem',
          background: 'transparent',
        }}
      >
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div
              className="section-badge"
              style={{
                background: '#ffffff',
                border: '1px solid #dfd5c8',
                color: 'var(--primary, #df7a38)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
              }}
            >
              <Sparkles size={14} color="var(--primary)" />
              COMMON QUESTIONS
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#1a130e',
                lineHeight: 1.2,
              }}
            >
              Questions About Working With Us?
            </h2>
          </div>

          {/* Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #dfd5c8',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: isOpen ? 'var(--primary)' : '#1a130e',
                      gap: '1rem',
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.22s ease',
                        flexShrink: 0,
                        color: isOpen ? 'var(--primary)' : '#8d7d6f',
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.35rem',
                        fontSize: '0.92rem',
                        color: '#5a4c3e',
                        lineHeight: 1.65,
                        borderTop: '1px solid #f2e9df',
                        paddingTop: '0.85rem',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
