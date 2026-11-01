'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Users, ShieldCheck, TrendingUp } from 'lucide-react';

export default function AboutHero3DShowcase() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalized coordinates (-1 to 1)
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Subtle 3D tilt: max 2.5 degrees
    const rotX = -normY * 2.5;
    const rotY = normX * 2.5;

    setTilt({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const transformStyle = prefersReducedMotion
    ? {}
    : {
        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${
          isHovered ? 'scale3d(1.015, 1.015, 1.015)' : 'scale3d(1, 1, 1)'
        }`,
        transition: isHovered
          ? 'transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)'
          : 'transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)',
      };

  return (
    <div
      className="about-3d-showcase-wrapper"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient Radial Halo Backdrop */}
      <div className="about-3d-ambient-halo" aria-hidden="true" />

      {/* Decorative Orbital Rings with Glowing Satellite Beads */}
      <svg
        className="about-3d-orbital-arc"
        viewBox="0 0 600 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer Orbit */}
        <ellipse
          cx="300"
          cy="240"
          rx="270"
          ry="150"
          stroke="#ea580c"
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />
        <circle cx="530" cy="190" r="4.5" fill="#ea580c" filter="drop-shadow(0 0 4px #ea580c)" />
        <circle cx="70" cy="280" r="3.5" fill="#f97316" filter="drop-shadow(0 0 3px #f97316)" />

        {/* Inner Dashed Orbit */}
        <ellipse
          cx="300"
          cy="240"
          rx="240"
          ry="125"
          stroke="#c59b4f"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.25"
        />
        <circle cx="450" cy="330" r="4" fill="#ea580c" filter="drop-shadow(0 0 4px #ea580c)" />
        <circle cx="160" cy="140" r="3" fill="#ea580c" filter="drop-shadow(0 0 3px #ea580c)" />
      </svg>

      {/* Main 3D Stage with Tilt */}
      <div className="about-3d-stage" style={transformStyle}>
        {/* Rendered 3D Technology Platform & Laptop Visual */}
        <div className="about-3d-model-wrap">
          <Image
            src="/images/about-3d-showcase.png"
            alt="ProvenanceTech 3D Technology Platform with Laptop"
            width={640}
            height={640}
            priority
            className="about-3d-image"
          />
        </div>

        {/* Floating Value Card 1: People First (Top Right) */}
        <div
          className="about-val-card about-val-card--people"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="about-val-icon-box">
            <Users size={18} strokeWidth={2.4} />
          </div>
          <span className="about-val-text">People First</span>
        </div>

        {/* Floating Value Card 2: Reliable Engineering (Left Side) */}
        <div
          className="about-val-card about-val-card--engineering"
          style={{ animationDelay: '0.25s' }}
        >
          <div className="about-val-icon-box">
            <ShieldCheck size={18} strokeWidth={2.4} />
          </div>
          <span className="about-val-text">Reliable Engineering</span>
        </div>

        {/* Floating Value Card 3: Long-term Growth (Right Side) */}
        <div
          className="about-val-card about-val-card--growth"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="about-val-icon-box">
            <TrendingUp size={18} strokeWidth={2.4} />
          </div>
          <span className="about-val-text">Long-term Growth</span>
        </div>
      </div>
    </div>
  );
}
