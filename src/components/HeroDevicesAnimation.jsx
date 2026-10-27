'use client';


export default function HeroDevicesAnimation() {
  return (
    <div
      className="hero-animation-stage"
      aria-label="Provenance Technologies - Web Applications, Mobile Platforms & Cloud Infrastructure"
    >
      {/* 1. Soft Natural Ambient Ground Light (No rectangular frame) */}
      <div className="hero-ambient-glow" aria-hidden="true" />

      {/* 2. Floating Laptop & Smartphone Composition - Completely visible, sharp and unclipped */}
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




