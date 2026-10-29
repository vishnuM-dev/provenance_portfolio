'use client';

import { TrendingUp } from 'lucide-react';

export default function HeroDevicesAnimation() {
  return (
    <div
      className="hero-animation-stage"
      aria-label="Provenance Technologies - Web Applications, Mobile Platforms & Cloud Infrastructure"
    >
      {/* 1. Soft Warm Ambient Radial Light */}
      <div className="hero-ambient-glow" aria-hidden="true" />

      {/* 2. Handwritten Editorial Note with Curved Arrow pointing to Dashboard */}
      <div className="hero-handwritten-badge" aria-hidden="true">
        <span className="hero-handwritten-text">
          Custom Solutions<br />for Real Businesses
        </span>
        <svg
          className="hero-handwritten-arrow"
          width="46"
          height="38"
          viewBox="0 0 46 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6C15 4 33 10 37 28"
            stroke="#4a3e35"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M29 23L37 28L42 19"
            stroke="#4a3e35"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 3. Floating Growth Pill (Lower-Left Near Laptop Edge) */}
      <div className="hero-growth-pill">
        <div className="growth-pill-icon">
          <TrendingUp size={16} strokeWidth={2.5} />
        </div>
        <div className="growth-pill-text">
          <span className="growth-pill-title">Better Tools.</span>
          <span className="growth-pill-sub">Bigger Growth.</span>
        </div>
      </div>

      {/* 4. Floating Laptop & Smartphone Composition - With Orbit Icons and Dashboard */}
      <div className="hero-devices-float-group">
        <picture>
          <source srcSet="/images/hero-devices-raw.png" type="image/png" />
          <img
            src="/images/hero-devices-raw.png"
            alt="Provenance Web and Mobile Application Engineering Showcase - Complete Laptop Dashboard and Smartphone Application"
            className="hero-devices-img"
            width={1000}
            height={635}
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  );
}
