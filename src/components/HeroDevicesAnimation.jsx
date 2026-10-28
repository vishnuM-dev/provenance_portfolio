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

      {/* 3. Minimalist Organic Potted Plant Behind Laptop */}
      <div className="hero-plant-element" aria-hidden="true">
        <svg
          width="120"
          height="150"
          viewBox="0 0 120 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5ea742" />
              <stop offset="60%" stopColor="#377d24" />
              <stop offset="100%" stopColor="#255916" />
            </linearGradient>
            <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ebc4e" />
              <stop offset="70%" stopColor="#438f2c" />
              <stop offset="100%" stopColor="#285f18" />
            </linearGradient>
            <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#f3ede3" />
              <stop offset="100%" stopColor="#dfd5c8" />
            </linearGradient>
            <filter id="plantShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#2a221b" floodOpacity="0.14" />
            </filter>
          </defs>

          {/* Stems */}
          <path d="M60 100 Q40 70 28 50" stroke="#377d24" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M60 100 Q58 55 58 34" stroke="#377d24" strokeWidth="3" strokeLinecap="round" />
          <path d="M60 100 Q76 65 92 54" stroke="#377d24" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M60 100 Q46 80 34 76" stroke="#377d24" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M60 100 Q72 82 85 78" stroke="#377d24" strokeWidth="2.5" strokeLinecap="round" />

          {/* Leaves */}
          <ellipse cx="28" cy="48" rx="17" ry="15" fill="url(#leafGrad1)" filter="url(#plantShadow)" />
          <ellipse cx="58" cy="32" rx="19" ry="17" fill="url(#leafGrad2)" filter="url(#plantShadow)" />
          <ellipse cx="92" cy="52" rx="17" ry="15" fill="url(#leafGrad1)" filter="url(#plantShadow)" />
          <ellipse cx="34" cy="74" rx="14" ry="12" fill="url(#leafGrad2)" filter="url(#plantShadow)" />
          <ellipse cx="85" cy="76" rx="14" ry="12" fill="url(#leafGrad1)" filter="url(#plantShadow)" />
          <ellipse cx="52" cy="62" rx="15" ry="13" fill="url(#leafGrad2)" filter="url(#plantShadow)" />

          {/* Ceramic Pot */}
          <rect x="36" y="94" width="48" height="48" rx="7" fill="url(#potGrad)" stroke="#dfd5c8" strokeWidth="1.5" />
          <ellipse cx="60" cy="94" rx="24" ry="4" fill="#3a2e24" />
        </svg>
      </div>

      {/* 4. Floating Growth Pill (Lower-Left Near Laptop Edge) */}
      <div className="hero-growth-pill">
        <div className="growth-pill-icon">
          <TrendingUp size={16} strokeWidth={2.5} />
        </div>
        <div className="growth-pill-text">
          <span className="growth-pill-title">Better Tools.</span>
          <span className="growth-pill-sub">Bigger Growth.</span>
        </div>
      </div>

      {/* 5. Floating Laptop & Smartphone Composition - With Orbit Icons and Dashboard */}
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




