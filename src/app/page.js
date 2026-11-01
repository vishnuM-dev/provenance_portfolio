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
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AgileLifecycleRoadmap from '@/components/AgileLifecycleRoadmap';
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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

      {/* 4. Why Choose Us (Asymmetric Bento Grid) */}
      <WhyChooseUsSection />

      {/* 5. Five-Step Development Process (Agile Lifecycle Roadmap) */}
      <AgileLifecycleRoadmap />

      {/* 6. Technologies We Use (Categorized) */}
      <TechnologiesSection id="technologies" />

      {/* 7. Final Call to Action & Service Capability Section */}
      <ProjectCtaSection />
    </div>
  );
}
