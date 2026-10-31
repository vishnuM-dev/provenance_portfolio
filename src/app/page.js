import Link from 'next/link';
import Image from 'next/image';
import { getAllAssets } from '@/lib/dynamodb';
import { SEED_SERVICES } from '@/lib/seed-data';
import AssetCard from '@/components/AssetCard';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import ProjectCtaSection from '@/components/ProjectCtaSection';
import HeroDevicesAnimation from '@/components/HeroDevicesAnimation';
import HeroInteractiveTitle from '@/components/HeroInteractiveTitle';
import WhatWeBuildSection from '@/components/WhatWeBuildSection';
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
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
              <HeroInteractiveTitle
                prefix="We Build Digital Experiences That"
                highlight="Grow Your Business."
              />

              {/* Supporting Lead Description */}
              <p className="hero-paragraph-lead">
                We create modern web applications, mobile apps, and custom software solutions that help businesses work smarter and grow faster.
              </p>

              {/* CTA Action Buttons */}
              <div className="hero-cta-buttons-row">
                <Link
                  href="/portfolio"
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

      {/* 2. Core Services Overview - Visual Feature Grid (Design 02) */}
      <WhatWeBuildSection />

      {/* 3. Featured Projects & Case Studies (Image 1 Normal & Image 2 Hover Spec) */}
      <CaseStudiesSection showViewAllBtn={false} />

      {/* 4. Why Choose Us (Practical Business Benefits) */}
      <section className="container reveal-on-scroll">
        <div style={{ padding: '1.25rem 0' }}>
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

      {/* 7. Final Call to Action & Service Capability Section */}
      <ProjectCtaSection />
    </div>
  );
}
