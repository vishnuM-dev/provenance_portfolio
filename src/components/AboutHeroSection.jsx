'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Play,
  Users,
  Layers,
  HeartHandshake,
  Box,
  Code2,
  Zap,
  Headphones,
  X
} from 'lucide-react';
import AboutHero3DShowcase from './AboutHero3DShowcase';

/**
 * Animated number counter component for company statistics
 */
function CountUpNumber({ target, suffix = '+' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId = null;
    const duration = 1500;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    animationFrameId = requestAnimationFrame(step);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutHeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Smooth scroll to the existing company story/mission section
  const handleScrollToStory = (e) => {
    e.preventDefault();
    const storySection = document.getElementById('our-story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Keyboard accessibility: ESC closes video modal
  useEffect(() => {
    if (!isVideoModalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsVideoModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoModalOpen]);

  return (
    <section className="about-hero-section">
      {/* Decorative Silk Ribbon Curves (Top Right & Bottom Left) */}
      <div className="about-hero-silk-bg" aria-hidden="true">
        {/* Top-Right Warm Golden Silk Wave */}
        <svg
          className="about-silk-curve-top"
          viewBox="0 0 600 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="silkWaveTop" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#df7a38" stopOpacity="0.22" />
              <stop offset="45%" stopColor="#f4974f" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="silkRibbonEdge" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.28" />
              <stop offset="50%" stopColor="#f4974f" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M600 0 C450 60, 380 180, 420 310 C440 380, 520 420, 600 450 Z"
            fill="url(#silkWaveTop)"
          />
          <path
            d="M590 10 C460 70, 395 190, 435 320 C455 390, 530 430, 595 460"
            stroke="url(#silkRibbonEdge)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* Bottom-Left Warm Golden Silk Ribbon - Subtle Stroke Only, No Opaque Fill Behind Stats */}
        <svg
          className="about-silk-curve-bottom"
          viewBox="0 0 550 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="silkWaveBottomStroke" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.18" />
              <stop offset="60%" stopColor="#f4974f" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M10 390 C130 340, 190 250, 150 135 C120 50, 50 15, 10 0"
            stroke="url(#silkWaveBottomStroke)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* Soft Radial Ambient Orange Glow */}
        <div className="about-hero-ambient-glow" />
      </div>

      <div className="about-hero-inner">
        {/* Main 2-Column Hero Grid */}
        <div className="about-hero-grid">
          {/* Left Column: Company Introduction */}
          <div className="about-hero-editorial-col">
            {/* Small Rounded Orange Outline Badge */}
            <div className="about-hero-badge">
              <Code2 size={13} className="about-hero-badge-spark" aria-hidden="true" />
              <span>PROVENANCETECH SOFTWARE ENGINEERING</span>
            </div>

            {/* Large Bold Heading */}
            <h1 className="about-hero-title">
              <span className="about-title-line1">About</span>
              <span className="about-title-line2">
                Provenance
                <span className="about-title-tech">
                  Tech
                  {/* Subtle curved underline beneath Tech */}
                  <svg
                    className="about-tech-curve"
                    viewBox="0 0 110 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M 4 12 C 35 22, 75 18, 106 6"
                      stroke="#ea580c"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Subheading */}
            <div className="about-hero-subtitle">
              Technology Built on Trust. Innovation Built for Growth.
            </div>

            {/* Primary Paragraph */}
            <p className="about-hero-p">
              At <strong>ProvenanceTech</strong>, we believe great software starts with
              understanding people, businesses, and the problems that matter most.
            </p>

            {/* CTA Buttons */}
            <div className="about-hero-actions">
              <a
                href="#our-story"
                onClick={handleScrollToStory}
                className="about-hero-btn-primary"
              >
                <span>Our Story</span>
                <ArrowRight size={16} className="about-btn-arrow" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="about-hero-btn-secondary"
                aria-label="Watch ProvenanceTech company overview video"
              >
                <span className="about-play-icon-box" aria-hidden="true">
                  <Play size={11} fill="#ea580c" color="#ea580c" style={{ marginLeft: '1px' }} />
                </span>
                <span>Watch Overview</span>
              </button>
            </div>

            {/* Company Statistics Row (Desktop Only) */}
            <div className="about-hero-stats-row about-stats-desktop">
              <div className="about-hero-stat-item">
                <div className="about-stat-icon-wrap" aria-hidden="true">
                  <Users size={22} color="#ea580c" strokeWidth={2.4} />
                </div>
                <div className="about-stat-details">
                  <div className="about-stat-number">
                    <CountUpNumber target={5} suffix="+" />
                  </div>
                  <div className="about-stat-label">Years of Experience</div>
                </div>
              </div>

              <div className="about-stat-separator" aria-hidden="true" />

              <div className="about-hero-stat-item">
                <div className="about-stat-icon-wrap" aria-hidden="true">
                  <Layers size={22} color="#ea580c" strokeWidth={2.4} />
                </div>
                <div className="about-stat-details">
                  <div className="about-stat-number">
                    <CountUpNumber target={100} suffix="+" />
                  </div>
                  <div className="about-stat-label">Projects Delivered</div>
                </div>
              </div>

              <div className="about-stat-separator" aria-hidden="true" />

              <div className="about-hero-stat-item">
                <div className="about-stat-icon-wrap" aria-hidden="true">
                  <HeartHandshake size={22} color="#ea580c" strokeWidth={2.4} />
                </div>
                <div className="about-stat-details">
                  <div className="about-stat-number">
                    <CountUpNumber target={50} suffix="+" />
                  </div>
                  <div className="about-stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium 3D Technology Illustration */}
          <div className="about-hero-showcase-col">
            <AboutHero3DShowcase />

            {/* Mobile Company Statistics Card (Matching Reference Image) */}
            <div className="about-mobile-stats-wrapper">
              <div className="about-mobile-stats-card">
                <div className="about-mobile-stat-col">
                  <div className="about-stat-icon-wrap" aria-hidden="true">
                    <Users size={17} color="#ea580c" strokeWidth={2.4} />
                  </div>
                  <div className="about-stat-details">
                    <div className="about-stat-number">
                      <CountUpNumber target={5} suffix="+" />
                    </div>
                    <div className="about-stat-label">Years of<br />Experience</div>
                  </div>
                </div>

                <div className="about-mobile-stat-divider" aria-hidden="true" />

                <div className="about-mobile-stat-col">
                  <div className="about-stat-icon-wrap" aria-hidden="true">
                    <Layers size={17} color="#ea580c" strokeWidth={2.4} />
                  </div>
                  <div className="about-stat-details">
                    <div className="about-stat-number">
                      <CountUpNumber target={100} suffix="+" />
                    </div>
                    <div className="about-stat-label">Projects<br />Delivered</div>
                  </div>
                </div>

                <div className="about-mobile-stat-divider" aria-hidden="true" />

                <div className="about-mobile-stat-col">
                  <div className="about-stat-icon-wrap" aria-hidden="true">
                    <HeartHandshake size={17} color="#ea580c" strokeWidth={2.4} />
                  </div>
                  <div className="about-stat-details">
                    <div className="about-stat-number">
                      <CountUpNumber target={50} suffix="+" />
                    </div>
                    <div className="about-stat-label">Happy<br />Clients</div>
                  </div>
                </div>
              </div>

              {/* 3 Mobile Carousel Indicators */}
              <div className="about-mobile-dots" aria-hidden="true">
                <span className="about-mobile-dot" />
                <span className="about-mobile-dot about-mobile-dot--active" />
                <span className="about-mobile-dot" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Strip: 4 Premium Capability Pillars */}
        <div className="about-feature-strip">
          <div className="about-strip-card">
            <div className="about-strip-icon-box" aria-hidden="true">
              <Box size={22} strokeWidth={2.2} />
            </div>
            <div className="about-strip-text">
              <h3 className="about-strip-title">Custom Solutions</h3>
              <p className="about-strip-desc">Tailored to your business</p>
            </div>
          </div>

          <div className="about-strip-separator" aria-hidden="true" />

          <div className="about-strip-card">
            <div className="about-strip-icon-box" aria-hidden="true">
              <Code2 size={22} strokeWidth={2.2} />
            </div>
            <div className="about-strip-text">
              <h3 className="about-strip-title">Modern Technologies</h3>
              <p className="about-strip-desc">Scalable &amp; future-ready</p>
            </div>
          </div>

          <div className="about-strip-separator" aria-hidden="true" />

          <div className="about-strip-card">
            <div className="about-strip-icon-box" aria-hidden="true">
              <Zap size={22} strokeWidth={2.2} />
            </div>
            <div className="about-strip-text">
              <h3 className="about-strip-title">Agile Delivery</h3>
              <p className="about-strip-desc">Fast, flexible &amp; reliable</p>
            </div>
          </div>

          <div className="about-strip-separator" aria-hidden="true" />

          <div className="about-strip-card">
            <div className="about-strip-icon-box" aria-hidden="true">
              <Headphones size={22} strokeWidth={2.2} />
            </div>
            <div className="about-strip-text">
              <h3 className="about-strip-title">End-to-End Support</h3>
              <p className="about-strip-desc">Build, deploy &amp; grow together</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Video Modal */}
      {isVideoModalOpen && (
        <div
          className="about-video-modal-backdrop"
          onClick={() => setIsVideoModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-video-title"
        >
          <div
            className="about-video-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="about-video-modal-header">
              <div className="about-video-modal-title-group">
                <span className="about-video-modal-dot" aria-hidden="true" />
                <h3 id="about-video-title" className="about-video-modal-title">
                  ProvenanceTech Overview
                </h3>
              </div>
              <button
                type="button"
                className="about-video-close-btn"
                onClick={() => setIsVideoModalOpen(false)}
                aria-label="Close overview modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="about-video-player-container">
              <div className="about-video-screen">
                <div className="about-video-ambient-glow" aria-hidden="true" />
                <div className="about-video-inner-content">
                  <div className="about-video-badge">
                    <Sparkles size={13} aria-hidden="true" />
                    <span>Full-Cycle Engineering</span>
                  </div>
                  <h4 className="about-video-hero-text">
                    Transforming Complex Problems into High-Performance Products
                  </h4>
                  <p className="about-video-hero-sub">
                    Modern Web Platforms • Native &amp; Cross-Platform Mobile • Scalable Cloud &amp; DevOps
                  </p>
                  <div className="about-video-play-pulse" aria-hidden="true">
                    <Play
                      size={26}
                      fill="#ffffff"
                      color="#ffffff"
                      style={{ marginLeft: '3px' }}
                    />
                  </div>
                </div>
              </div>

              <div className="about-video-pillars">
                <div className="about-video-pillar">
                  <span className="about-pillar-num">01</span>
                  <div>
                    <div className="about-pillar-title">Modern Full-Stack</div>
                    <div className="about-pillar-desc">
                      Next.js, React, Node.js &amp; TypeScript architectures
                    </div>
                  </div>
                </div>
                <div className="about-video-pillar">
                  <span className="about-pillar-num">02</span>
                  <div>
                    <div className="about-pillar-title">Agile Delivery</div>
                    <div className="about-pillar-desc">
                      Transparent sprints with zero guesswork
                    </div>
                  </div>
                </div>
                <div className="about-video-pillar">
                  <span className="about-pillar-num">03</span>
                  <div>
                    <div className="about-pillar-title">Enterprise Scale</div>
                    <div className="about-pillar-desc">
                      AWS, Docker, and resilient cloud deployments
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
