'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  CheckCircle2,
  Zap,
  Smartphone,
  ShieldCheck,
  Clock,
  LifeBuoy,
  Rocket,
  Globe,
} from 'lucide-react';
import './WhyChooseUsSection.css';

/**
 * Interactive Bento Card Component
 * Provides GPU-accelerated 3D pointer tilt, cursor-following spotlight,
 * smooth elevation, and animated border transitions with requestAnimationFrame.
 */
function BentoCard({ className, children }) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || typeof window === 'undefined') return;

    // Respect accessibility and touch devices
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update cursor coordinates for spotlight
      card.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
      card.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
      card.style.setProperty('--spotlight-opacity', '1');
      card.style.setProperty('--border-glow-opacity', '1');

      // 3D tilt calculation (capped at 2.8 degrees)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -2.8;
      const rotateY = ((x - centerX) / centerX) * 2.8;

      card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
      card.classList.add('is-hovered');
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    const card = cardRef.current;
    if (!card) return;

    // Smooth return to resting state
    card.style.setProperty('--spotlight-opacity', '0');
    card.style.setProperty('--border-glow-opacity', '0');
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.classList.remove('is-hovered');
  };

  return (
    <div
      ref={cardRef}
      className={`bento-card ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle cursor-following radial spotlight highlight */}
      <div className="bento-card-spotlight" aria-hidden="true" />
      {/* Animated subtle orange border highlight */}
      <div className="bento-card-border-glow" aria-hidden="true" />
      {children}
    </div>
  );
}

export default function WhyChooseUsSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

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
      className={`container why-choose-section bento-scroll-init ${isInView ? 'is-in-view' : ''}`}
      aria-labelledby="why-choose-heading"
    >
      {/* Section Header with Flanking Accents */}
      <div className="why-choose-header">
        <span className="why-choose-eyebrow">Engineering Edge</span>

        <div className="why-choose-heading-wrap">
          <div className="heading-dash-accent heading-dash-left" aria-hidden="true">
            <svg width="44" height="6" viewBox="0 0 44 6" fill="none">
              <line x1="2" y1="3" x2="26" y2="3" stroke="#eb7821" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="32" y1="3" x2="42" y2="3" stroke="#eb7821" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <h2 id="why-choose-heading" className="why-choose-title">
            Why Choose <span className="why-choose-title-accent">Provenance Tech?</span>
          </h2>

          <div className="heading-dash-accent heading-dash-right" aria-hidden="true">
            <svg width="44" height="6" viewBox="0 0 44 6" fill="none">
              <line x1="2" y1="3" x2="12" y2="3" stroke="#eb7821" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18" y1="3" x2="42" y2="3" stroke="#eb7821" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <p className="why-choose-subtitle">
          We combine enterprise architectural rigor with agile delivery speed so your digital products launch faster and stay reliable.
        </p>
      </div>

      {/* Asymmetric Bento Card Grid with Enhanced Interactive Animations */}
      <div className="why-choose-bento-grid">
        {/* Card 1: Featured Card (Left - Spans 2 Rows) */}
        <BentoCard className="bento-card-1">
          <div className="bento-icon-box">
            <CheckCircle2 size={26} strokeWidth={2.4} />
          </div>

          <h3 className="bento-card-title">
            Tailored to Business Requirements
          </h3>

          <p className="bento-card-desc">
            Zero generic cookie-cutter templates. Every database schema, user workflow, and API endpoint is built around your specific business model.
          </p>

          {/* Technical Illustration: Target with concentric rings and arrow */}
          <div className="card-tech-illus target-illus" aria-hidden="true">
            <svg width="84" height="84" viewBox="0 0 84 84" fill="none">
              <circle cx="42" cy="42" r="36" stroke="#eb7821" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.32" />
              <circle cx="42" cy="42" r="27" stroke="#eb7821" strokeWidth="1.5" opacity="0.45" />
              <circle cx="42" cy="42" r="17" stroke="#eb7821" strokeWidth="1.5" opacity="0.5" />
              <circle cx="42" cy="42" r="8" stroke="#eb7821" strokeWidth="1.5" opacity="0.6" fill="rgba(235, 120, 33, 0.08)" />
              <circle cx="42" cy="42" r="2.5" fill="#eb7821" opacity="0.8" />
              <line x1="42" y1="4" x2="42" y2="16" stroke="#eb7821" strokeWidth="1.2" opacity="0.4" />
              <line x1="42" y1="68" x2="42" y2="80" stroke="#eb7821" strokeWidth="1.2" opacity="0.4" />
              <line x1="4" y1="42" x2="16" y2="42" stroke="#eb7821" strokeWidth="1.2" opacity="0.4" />
              <line x1="68" y1="42" x2="80" y2="42" stroke="#eb7821" strokeWidth="1.2" opacity="0.4" />
              <path d="M 68 16 L 46 38" stroke="#eb7821" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
              <polygon points="42,42 45,35 49,39" fill="#eb7821" opacity="0.75" />
            </svg>
          </div>
        </BentoCard>

        {/* Card 2: Modern & Maintainable Stack (Upper Middle) */}
        <BentoCard className="bento-card-2">
          <div className="bento-card-header">
            <div className="bento-icon-box">
              <Zap size={22} strokeWidth={2.4} />
            </div>
            <h3 className="bento-card-title">
              Modern &amp; Maintainable Stack
            </h3>
          </div>
          <p className="bento-card-desc">
            Built on Next.js 16 App Router, React 19, React Native, and Amazon DynamoDB for sub-10ms queries, high developer velocity, and clean code.
          </p>
        </BentoCard>

        {/* Card 3: Responsive & User-Friendly (Upper Right - Wide with Devices) */}
        <BentoCard className="bento-card-3">
          <div className="bento-card-body">
            <div className="bento-content-col">
              <div className="bento-card-header">
                <div className="bento-icon-box">
                  <Smartphone size={22} strokeWidth={2.4} />
                </div>
                <h3 className="bento-card-title">
                  Responsive &amp; User-Friendly
                </h3>
              </div>
              <p className="bento-card-desc">
                Engineered with touch-first accessibility, pixel-perfect fluid layouts, and seamless operation across iPhones, Androids, iPads, and desktops.
              </p>
            </div>

            {/* Technical Illustration: Responsive Devices (Laptop + Tablet + Phone) */}
            <div className="card-tech-illus devices-illus" aria-hidden="true">
              <svg width="104" height="68" viewBox="0 0 104 68" fill="none">
                {/* Laptop Display */}
                <rect x="4" y="14" width="52" height="34" rx="3.5" stroke="#eb7821" strokeWidth="1.4" opacity="0.5" fill="rgba(235, 120, 33, 0.02)" />
                <line x1="8" y1="42" x2="52" y2="42" stroke="#eb7821" strokeWidth="1" opacity="0.3" />
                {/* Laptop Base */}
                <path d="M 0 48 L 60 48 L 56 52 L 4 52 Z" stroke="#eb7821" strokeWidth="1.4" opacity="0.5" fill="rgba(235, 120, 33, 0.04)" />

                {/* Tablet Screen behind Laptop */}
                <rect x="44" y="4" width="42" height="54" rx="4.5" stroke="#eb7821" strokeWidth="1.4" opacity="0.45" fill="rgba(235, 120, 33, 0.02)" />
                <circle cx="65" cy="8" r="1.2" fill="#eb7821" opacity="0.5" />

                {/* Smartphone Standing in Front */}
                <rect x="74" y="20" width="26" height="44" rx="4" stroke="#eb7821" strokeWidth="1.6" opacity="0.7" fill="#ffffff" />
                <line x1="83" y1="24" x2="91" y2="24" stroke="#eb7821" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
                <line x1="84" y1="60" x2="90" y2="60" stroke="#eb7821" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Secure Database & Cloud Integration (Middle - with Cloud Illustration) */}
        <BentoCard className="bento-card-4">
          <div className="bento-card-body">
            <div className="bento-content-col">
              <div className="bento-card-header">
                <div className="bento-icon-box">
                  <ShieldCheck size={22} strokeWidth={2.4} />
                </div>
                <h3 className="bento-card-title">
                  Secure Database &amp; Cloud Integration
                </h3>
              </div>
              <p className="bento-card-desc">
                Encrypted session tokens, least-privilege IAM roles, automated backups, and Cloudinary media pipelines safeguarding client and user data.
              </p>
            </div>

            {/* Technical Illustration: Cloud with Upload Arrow */}
            <div className="card-tech-illus cloud-illus" aria-hidden="true">
              <svg width="48" height="38" viewBox="0 0 48 38" fill="none">
                <path
                  d="M 12 30 C 6.5 30 2 25.5 2 20.2 C 2 15.2 5.8 11.2 10.6 10.8 C 12.4 4.8 18 0.5 24.6 0.5 C 31.2 0.5 36.8 4.8 38.6 10.8 C 42.8 11.2 46 14.8 46 19.2 C 46 24 42.2 28 37.4 28"
                  stroke="#eb7821"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                  fill="rgba(235, 120, 33, 0.03)"
                />
                <path
                  d="M 24 34 V 18 M 24 18 L 19 23 M 24 18 L 29 23"
                  stroke="#eb7821"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.8"
                />
              </svg>
            </div>
          </div>

          {/* Organic Cream/Orange Corner Flare */}
          <div className="bento-corner-shape" aria-hidden="true">
            <svg viewBox="0 0 72 72" fill="none" width="100%" height="100%">
              <path d="M 0 72 Q 40 68 54 44 Q 64 22 72 0 L 72 72 Z" fill="#eb7821" fillOpacity="0.12" />
            </svg>
          </div>
        </BentoCard>

        {/* Card 5: Transparent Agile Process (Middle Right - with Chevrons) */}
        <BentoCard className="bento-card-5">
          <div className="bento-card-body">
            <div className="bento-content-col">
              <div className="bento-card-header">
                <div className="bento-icon-box">
                  <Clock size={22} strokeWidth={2.4} />
                </div>
                <h3 className="bento-card-title">
                  Transparent Agile Process
                </h3>
              </div>
              <p className="bento-card-desc">
                Bi-weekly sprint demos, shared staging environments, and direct Slack/Discord channels with senior engineers—no gatekeeping.
              </p>
            </div>

            {/* Technical Illustration: Agile Sprint Chevrons */}
            <div className="card-tech-illus chevrons-illus" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M 8 7 L 17 17 L 8 27" stroke="#eb7821" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
                <path d="M 17 7 L 26 17 L 17 27" stroke="#eb7821" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
              </svg>
            </div>
          </div>

          {/* Organic Corner Accent */}
          <div className="bento-corner-shape" aria-hidden="true">
            <svg viewBox="0 0 72 72" fill="none" width="100%" height="100%">
              <path d="M 0 72 Q 40 68 54 44 Q 64 22 72 0 L 72 72 Z" fill="#eb7821" fillOpacity="0.12" />
            </svg>
          </div>
        </BentoCard>

        {/* Card 6: Reliable Post-Launch Support (Bottom Left) */}
        <BentoCard className="bento-card-6">
          <div className="bento-card-header">
            <div className="bento-icon-box">
              <LifeBuoy size={22} strokeWidth={2.4} />
            </div>
            <h3 className="bento-card-title">
              Reliable Post-Launch Support
            </h3>
          </div>
          <p className="bento-card-desc">
            Continuous SLA monitoring, zero-downtime security patch deployments, performance tracking, and roadmap feature upgrades.
          </p>

          <div className="bento-corner-shape corner-left" aria-hidden="true">
            <svg viewBox="0 0 72 72" fill="none" width="100%" height="100%">
              <path d="M 0 72 Q 40 68 54 44 Q 64 22 72 0 L 72 72 Z" fill="#eb7821" fillOpacity="0.1" />
            </svg>
          </div>
        </BentoCard>

        {/* Card 7: Rapid Time-to-Market (Bottom Middle) */}
        <BentoCard className="bento-card-7">
          <div className="bento-card-header">
            <div className="bento-icon-box">
              <Rocket size={22} strokeWidth={2.4} />
            </div>
            <h3 className="bento-card-title">
              Rapid Time-to-Market
            </h3>
          </div>
          <p className="bento-card-desc">
            Streamlined CI/CD deployment automation and reusable modular systems that turn product roadmaps into production releases in record time.
          </p>

          <div className="bento-corner-shape" aria-hidden="true">
            <svg viewBox="0 0 72 72" fill="none" width="100%" height="100%">
              <path d="M 0 72 Q 40 68 54 44 Q 64 22 72 0 L 72 72 Z" fill="#eb7821" fillOpacity="0.1" />
            </svg>
          </div>
        </BentoCard>

        {/* Card 8: Global Scale & High Availability (Bottom Right) */}
        <BentoCard className="bento-card-8">
          <div className="bento-card-header">
            <div className="bento-icon-box">
              <Globe size={22} strokeWidth={2.4} />
            </div>
            <h3 className="bento-card-title">
              Global Scale &amp; High Availability
            </h3>
          </div>
          <p className="bento-card-desc">
            Edge-optimized caching, serverless elasticity, and low-latency worldwide delivery built to support rapid business growth with zero downtime.
          </p>

          <div className="bento-corner-shape" aria-hidden="true">
            <svg viewBox="0 0 72 72" fill="none" width="100%" height="100%">
              <path d="M 0 72 Q 40 68 54 44 Q 64 22 72 0 L 72 72 Z" fill="#eb7821" fillOpacity="0.1" />
            </svg>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
