import Link from 'next/link';
import Image from 'next/image';
import { getAllAssets } from '@/lib/dynamodb';
import { SEED_SERVICES } from '@/lib/seed-data';
import AssetCard from '@/components/AssetCard';
import TechnologiesSection from '@/components/TechnologiesSection';
import HeroDevicesAnimation from '@/components/HeroDevicesAnimation';
import '@/components/ServicesCards.css';
import {
  Code2,
  Smartphone,
  Layout,
  Cpu,
  Layers,
  Database,
  LifeBuoy,
  Terminal,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Search,
  Zap,
  Globe,
  Clock,
  Laptop,
  Flame,
  Award,
  Palette,
  Star,
  Rocket,
  Heart,
  MessageSquare,
} from 'lucide-react';

export const revalidate = 0;

const SERVICE_THEMES = {
  'srv-web': {
    themeClass: 'service-theme-orange',
    accentColor: '#ea580c',
    cardBg: '#fff4ec',
    borderColor: '#fcd9c0',
    iconBg: '#ffe2cc',
    ctaBg: '#ffffff',
    ctaText: '#c2410c',
    popular: true,
  },
  'srv-mobile': {
    themeClass: 'service-theme-purple',
    accentColor: '#8b5cf6',
    cardBg: '#f6f0fd',
    borderColor: '#e4d0fa',
    iconBg: '#ebd8fb',
    ctaBg: '#ffffff',
    ctaText: '#6d28d9',
    popular: false,
  },
  'srv-custom': {
    themeClass: 'service-theme-blue',
    accentColor: '#2563eb',
    cardBg: '#edf4fe',
    borderColor: '#cbe0fc',
    iconBg: '#d2e5fc',
    ctaBg: '#ffffff',
    ctaText: '#1d4ed8',
    popular: false,
  },
  'srv-fullstack': {
    themeClass: 'service-theme-green',
    accentColor: '#059669',
    cardBg: '#eaf8f0',
    borderColor: '#c4eed6',
    iconBg: '#ccf0db',
    ctaBg: '#ffffff',
    ctaText: '#047857',
    popular: false,
  },
  'srv-uiux': {
    themeClass: 'service-theme-pink',
    accentColor: '#e11d48',
    cardBg: '#fdf0f2',
    borderColor: '#f9cbce',
    iconBg: '#f8d1d6',
    ctaBg: '#ffffff',
    ctaText: '#be123c',
    popular: false,
  },
  'srv-cloud': {
    themeClass: 'service-theme-amber',
    accentColor: '#d97706',
    cardBg: '#fdf6e6',
    borderColor: '#f6dfaa',
    iconBg: '#fae7bc',
    ctaBg: '#ffffff',
    ctaText: '#92400e',
    popular: false,
  },
};

export default async function HomePage() {
  const allProjects = await getAllAssets();
  const featuredProjects = allProjects.slice(0, 3);

  // Service icon resolver
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={26} strokeWidth={2.2} />;
      case 'Smartphone': return <Smartphone size={26} strokeWidth={2.2} />;
      case 'Cpu': return <Cpu size={26} strokeWidth={2.2} />;
      case 'Layers': return <Layers size={26} strokeWidth={2.2} />;
      case 'Palette': return <Palette size={26} strokeWidth={2.2} />;
      case 'Database': return <Database size={26} strokeWidth={2.2} />;
      case 'LifeBuoy': return <LifeBuoy size={26} strokeWidth={2.2} />;
      case 'Terminal': return <Terminal size={26} strokeWidth={2.2} />;
      default: return <Code2 size={26} strokeWidth={2.2} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem', paddingBottom: '4rem' }}>
      {/* 1. Hero Section - Premium Asymmetric Two-Column Landing Architecture */}
      <section className="hero-section-new" aria-label="Provenance Technologies Studio Introduction">
        <div className="hero-ambient-mesh-new" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-split-grid">
            {/* Left Column: Eyebrow Badge, Headline with Brush Underline, Paragraph, CTAs, and Benefits */}
            <div className="hero-content-col">
              {/* Eyebrow Badge */}
              <div className="hero-badge-pill">
                <Sparkles size={14} className="hero-badge-sparkle" />
                <span>Web &amp; Mobile Software Engineering Studio</span>
              </div>

              {/* Bold Headline with Hand-Drawn Brush Underline Accent */}
              <h1 className="hero-title-main">
                We Build Digital Experiences That{' '}
                <span className="hero-title-highlight-box">
                  Grow Your Business.
                  <svg
                    className="hero-title-underline-svg"
                    viewBox="0 0 280 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 14C55 5 125 15 185 8C225 3 260 12 276 9"
                      stroke="#ea580c"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 17C65 10 135 18 195 12C230 8 262 14 274 13"
                      stroke="#f97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeOpacity="0.6"
                    />
                  </svg>
                </span>
              </h1>

              {/* Supporting Lead Description */}
              <p className="hero-paragraph-lead">
                We create modern web applications, mobile apps, and custom software solutions that help businesses work smarter and grow faster.
              </p>

              {/* CTA Action Buttons */}
              <div className="hero-cta-buttons-row">
                <Link
                  href="/catalog"
                  className="hero-btn-explore"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight size={17} className="hero-btn-arrow" />
                </Link>

                <Link
                  href="/contact"
                  className="hero-btn-talk"
                >
                  <span>Let&apos;s Talk</span>
                  <MessageSquare size={16} className="hero-btn-chat-icon" />
                </Link>
              </div>

              {/* Row of Three Distinct Key Benefits */}
              <div className="hero-benefits-strip">
                <div className="hero-benefit-item">
                  <div className="hero-benefit-icon-box">
                    <Rocket size={18} strokeWidth={2.2} />
                  </div>
                  <div className="hero-benefit-text">
                    <span className="hero-benefit-title">Modern</span>
                    <span className="hero-benefit-sub">Tech Stack</span>
                  </div>
                </div>

                <div className="hero-benefit-divider" aria-hidden="true" />

                <div className="hero-benefit-item">
                  <div className="hero-benefit-icon-box">
                    <ShieldCheck size={18} strokeWidth={2.2} />
                  </div>
                  <div className="hero-benefit-text">
                    <span className="hero-benefit-title">Clean &amp;</span>
                    <span className="hero-benefit-sub">Scalable Code</span>
                  </div>
                </div>

                <div className="hero-benefit-divider" aria-hidden="true" />

                <div className="hero-benefit-item">
                  <div className="hero-benefit-icon-box">
                    <Heart size={18} strokeWidth={2.2} />
                  </div>
                  <div className="hero-benefit-text">
                    <span className="hero-benefit-title">On-Time</span>
                    <span className="hero-benefit-sub">Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Laptop, Smartphone, Floating Icons, Growth Pill, Plant & Handwritten Note */}
            <div className="hero-visual-col">
              <HeroDevicesAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Services Overview - Modern Coordinated Pastel Cards Redesign */}
      <section className="services-section-wrapper reveal-on-scroll" id="services">
        {/* Soft abstract ambient background decorative shapes */}
        <div className="services-ambient-glow-1" aria-hidden="true" />
        <div className="services-ambient-glow-2" aria-hidden="true" />
        <div className="services-ambient-glow-3" aria-hidden="true" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Section Header */}
          <div className="services-header-box">
            <div className="section-badge-pill">
              <Sparkles size={14} className="badge-sparkle-icon" />
              <span>What We Build</span>
            </div>
            <h2 className="services-section-title">
              Services Built for High-Impact Software
            </h2>
            <p className="services-section-subtitle">
              From high-conversion web applications to responsive iOS and Android apps, our cross-functional team delivers production-ready code tailored to your exact business needs.
            </p>
          </div>

          {/* 3-Column Modern Service Cards Grid - 6 Core Services */}
          <div className="services-modern-grid">
            {SEED_SERVICES.slice(0, 6).map((srv, index) => {
              const theme = SERVICE_THEMES[srv.id] || {
                themeClass: 'service-theme-orange',
                accentColor: '#ea580c',
                cardBg: '#fff4ec',
                borderColor: '#fcd9c0',
                iconBg: '#ffe2cc',
                ctaBg: '#ffffff',
                ctaText: '#c2410c',
                popular: index === 0,
              };
              const isPopular = srv.id === 'srv-web' || theme.popular;
              const displayTitle = srv.title === 'UI/UX Design & Design Systems' 
                ? 'UI/UX Design & Development' 
                : srv.title;

              return (
                <article
                  key={srv.id}
                  className={`modern-service-card ${theme.themeClass}`}
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: theme.borderColor,
                  }}
                >
                  {/* Card Header: Rounded-Square Icon Box & Optional Popular Pill */}
                  <div className="service-card-top">
                    <div
                      className="service-icon-box"
                      style={{
                        backgroundColor: theme.iconBg,
                        borderColor: theme.borderColor,
                        color: theme.accentColor,
                      }}
                    >
                      {getServiceIcon(srv.icon)}
                    </div>

                    {isPopular && (
                      <span className="service-popular-pill">
                        <Star size={12} className="popular-star-icon" fill="currentColor" />
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Card Body: Title, Accent Subtitle, Description */}
                  <div className="service-card-content">
                    <h3 className="service-card-title">
                      {displayTitle}
                    </h3>

                    <div
                      className="service-card-tagline"
                      style={{ color: theme.accentColor }}
                    >
                      {srv.tagline}
                    </div>

                    <p className="service-card-description">
                      {srv.description}
                    </p>
                  </div>

                  {/* Card Footer: Pill-shaped "Learn Capabilities" CTA with Circular Arrow */}
                  <div className="service-card-footer">
                    <Link
                      href="/services"
                      className="service-cta-pill"
                      aria-label={`Learn Capabilities of ${displayTitle}`}
                      style={{
                        backgroundColor: theme.ctaBg,
                        borderColor: theme.borderColor,
                        color: theme.ctaText,
                      }}
                    >
                      <span className="cta-label">Learn Capabilities</span>
                      <span
                        className="cta-arrow-circle"
                        style={{
                          backgroundColor: theme.accentColor,
                          color: '#ffffff',
                        }}
                      >
                        <ArrowRight size={15} />
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Featured Projects & Case Studies (Matching "Top List – Our mainstay menu") */}
      <section className="container reveal-on-scroll">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div>
            <div style={{
              fontSize: '0.8rem',
              color: 'var(--primary)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.35rem',
            }}>
              Proven Software Products
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>
              Featured Projects & Case Studies
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.25rem' }}>
              Selected web applications, mobile platforms, and enterprise software built for scale.
            </p>
          </div>

          <Link href="/catalog" className="btn btn-secondary btn-sm" style={{ fontWeight: 600 }}>
            View All {allProjects.length} Projects
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid-catalog">
          {featuredProjects.map((project) => (
            <AssetCard key={project.id} asset={project} />
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us (Practical Business Benefits) */}
      <section className="container reveal-on-scroll">
        <div className="glass-panel" style={{
          padding: '3.5rem 2.5rem',
          background: '#ffffff',
          borderRadius: '32px',
          border: '1px solid rgba(220, 195, 170, 0.45)',
          boxShadow: '0 14px 34px -8px rgba(160, 115, 75, 0.08)',
        }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
              Engineering Edge
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Why Choose ProvenanceTech?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
              We combine enterprise architectural rigor with agile delivery speed so your digital products launch faster and stay reliable.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch',
          }}>
            <div style={{ background: '#fffbf7', padding: '1.75rem', borderRadius: '22px', border: '1px solid rgba(220, 195, 170, 0.35)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                <CheckCircle2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text-primary)', minHeight: '44px', lineHeight: 1.3 }}>
                Tailored to Business Requirements
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: 'auto' }}>
                Zero generic cookie-cutter templates. Every database schema, user workflow, and API endpoint is built around your specific business model.
              </p>
            </div>

            <div style={{ background: '#fffbf7', padding: '1.75rem', borderRadius: '22px', border: '1px solid rgba(220, 195, 170, 0.35)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text-primary)', minHeight: '44px', lineHeight: 1.3 }}>
                Modern & Maintainable Stack
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: 'auto' }}>
                Built on Next.js 16 App Router, React 19, React Native, and Amazon DynamoDB for sub-10ms queries, high developer velocity, and clean code.
              </p>
            </div>

            <div style={{ background: '#fffbf7', padding: '1.75rem', borderRadius: '22px', border: '1px solid rgba(220, 195, 170, 0.35)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                <Smartphone size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text-primary)', minHeight: '44px', lineHeight: 1.3 }}>
                Responsive & User-Friendly
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: 'auto' }}>
                Engineered with touch-first accessibility, pixel-perfect fluid layouts, and seamless operation across iPhones, Androids, iPads, and desktops.
              </p>
            </div>

            <div style={{ background: '#fffbf7', padding: '1.75rem', borderRadius: '22px', border: '1px solid rgba(220, 195, 170, 0.35)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text-primary)', minHeight: '44px', lineHeight: 1.3 }}>
                Secure Database & Cloud Integration
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: 'auto' }}>
                Encrypted session tokens, least-privilege IAM roles, automated backups, and Cloudinary media pipelines safeguarding client and user data.
              </p>
            </div>

            <div style={{ background: '#fffbf7', padding: '1.75rem', borderRadius: '22px', border: '1px solid rgba(220, 195, 170, 0.35)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                <Clock size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text-primary)', minHeight: '44px', lineHeight: 1.3 }}>
                Transparent Agile Process
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: 'auto' }}>
                Bi-weekly sprint demos, shared staging environments, and direct Slack/Discord channels with senior engineers—no gatekeeping.
              </p>
            </div>

            <div style={{ background: '#fffbf7', padding: '1.75rem', borderRadius: '22px', border: '1px solid rgba(220, 195, 170, 0.35)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                <LifeBuoy size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text-primary)', minHeight: '44px', lineHeight: 1.3 }}>
                Reliable Post-Launch Support
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: 'auto' }}>
                Continuous SLA monitoring, zero-downtime security patch deployments, performance tracking, and roadmap feature upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Five-Step Development Process */}
      <section className="container reveal-on-scroll">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
            Agile Lifecycle
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Our 5-Step Development Process
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
            A disciplined, transparent engineering methodology taking your product from initial requirements to production launch.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: '1.25rem',
          alignItems: 'stretch',
        }}>
          {[
            { step: '01', title: 'Discovery & Requirements', desc: 'In-depth stakeholder interviews, technical feasibility analysis, and user journey roadmapping.' },
            { step: '02', title: 'Planning & UI/UX Design', desc: 'Wireframing, clickable high-fidelity Figma prototypes, and complete design system token setup.' },
            { step: '03', title: 'Development & API Integration', desc: 'Agile sprints building Next.js web apps, mobile clients, Route Handlers, and DynamoDB data models.' },
            { step: '04', title: 'Testing & Quality Assurance', desc: 'Automated test execution, cross-device mobile verification, security audits, and load testing.' },
            { step: '05', title: 'Deployment & Ongoing Support', desc: 'Docker containerization, automated CI/CD release, App Store publishing, and 24/7 SLA maintenance.' }
          ].map((item) => (
            <div
              key={item.step}
              className="glass-panel"
              style={{
                padding: '2rem 1.5rem',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(220, 195, 170, 0.45)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                height: '100%',
              }}
            >
              <div style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                color: 'var(--primary)',
                marginBottom: '0.75rem',
                lineHeight: 1,
              }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.3, minHeight: '44px' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginTop: 'auto' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Technologies We Use (Categorized) */}
      <TechnologiesSection id="technologies" />

      {/* 7. Horizontal Feature Ribbon (Clean Spacing) */}
      <section className="container reveal-on-scroll" style={{ marginTop: '-2.5rem', marginBottom: '-1.75rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem',
          padding: '1.25rem 2rem',
          background: 'rgba(255, 255, 255, 0.92)',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(220, 195, 170, 0.55)',
          boxShadow: '0 8px 24px rgba(180, 130, 90, 0.05)',
        }}>
          <div className="feature-ribbon-item" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
            <Laptop size={18} color="var(--primary)" />
            <span>Online consultation</span>
          </div>

          <div className="feature-ribbon-item" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
            <Code2 size={18} color="var(--primary)" />
            <span>Full-cycle development</span>
          </div>

          <div className="feature-ribbon-item" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
            <ShieldCheck size={18} color="var(--primary)" />
            <span>SLA & maintenance</span>
          </div>

          <div className="feature-ribbon-item" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
            <Smartphone size={18} color="var(--primary)" />
            <span>App Store & Cloud release</span>
          </div>
        </div>
      </section>


      {/* 8. Final Call to Action - Featuring Brand Monogram Emblem */}
      <section className="container reveal-on-scroll">
        <div className="glass-panel cta-banner-glow" style={{
          padding: '3.5rem 2.25rem',
          textAlign: 'center',
          borderRadius: '32px',
          background: 'radial-gradient(circle at 50% 50%, #fcf7f0 0%, #f6f1ea 100%)',
          border: '1px solid var(--border-warm)',
          boxShadow: 'var(--shadow-elevated)',
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            filter: 'drop-shadow(0 6px 16px rgba(197, 155, 79, 0.28))',
          }}>
            <Image
              src="/icon.png"
              alt="ProvenanceTech Monogram Logo"
              width={64}
              height={64}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
          }}>
            Have an Idea for Your Next Digital Product?
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            maxWidth: '620px',
            margin: '0 auto 2.25rem',
            lineHeight: 1.75,
            fontSize: '1.1rem',
          }}>
            Let&apos;s turn your business requirements into a practical, scalable software solution.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                padding: '0.9rem 2.5rem',
                fontSize: '1.05rem',
                fontWeight: 600,
              }}
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/catalog"
              className="btn btn-secondary"
              style={{
                padding: '0.9rem 2.5rem',
                fontSize: '1.05rem',
                fontWeight: 600,
                background: '#ffffff',
              }}
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
