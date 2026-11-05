'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './LoadingScreen.css';

// FallingText is only loaded on desktop to avoid initialising
// matter-js on mobile. We use a dynamic import with ssr:false.
import dynamic from 'next/dynamic';

const FallingTextDesktop = dynamic(
  () => import('../FallingText/FallingText'),
  { ssr: false }
);

const MIN_DISPLAY_MS = 1800;

export default function LoadingScreen({ onExited }) {
  const [exiting, setExiting] = useState(false);
  const isMobile = useRef(false);
  const startTimeRef = useRef(Date.now());
  const exitCalledRef = useRef(false);

  useEffect(() => {
    isMobile.current = window.innerWidth < 768;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = reduced ? 400 : MIN_DISPLAY_MS;

    const elapsed = Date.now() - startTimeRef.current;
    const remaining = Math.max(0, delay - elapsed);

    const timer = setTimeout(() => {
      if (exitCalledRef.current) return;
      exitCalledRef.current = true;
      setExiting(true);
      // Fallback: ensure onExited fires even if ls-fadeout animationEnd
      // never fires (e.g. on mobile where the animation may not run).
      setTimeout(() => onExited && onExited(), 700);
    }, remaining);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = (e) => {
    if (exiting && e.animationName === 'ls-fadeout') {
      onExited && onExited();
    }
  };

  return (
    <div
      className={'ls-root' + (exiting ? ' ls-exiting' : '')}
      role="status"
      aria-label="Loading ProvenanceTech"
      aria-live="polite"
      onAnimationEnd={handleAnimationEnd}
    >
      <span className="sr-only">Loading&hellip;</span>

      {/* Logo */}
      <div className="ls-logo-wrap">
        <Image
          src="/logo.png"
          alt="ProvenanceTech logo"
          width={88}
          height={88}
          priority
          style={{objectFit: 'contain'}}
        />
        <div className="ls-logo-shimmer" aria-hidden="true" />
      </div>

      {/* Brand name */}
      <div className="ls-brand" aria-hidden="true">
        <span className="ls-brand-provenance">Provenance</span>
        <span className="ls-brand-tech">Tech</span>
      </div>

      {/* Tagline */}
      <p className="ls-tagline" aria-hidden="true">Ideas / Code / Impact</p>

      {/* FallingText — desktop only, physics engine skipped on mobile */}
      <div className="ls-falling-wrap">
        <FallingTextDesktop
          text="Provenance Tech Ideas Code Impact Engineering Excellence"
          highlightWords={['Provenance', 'Tech', 'Ideas', 'Code', 'Impact']}
          trigger="auto"
          variant="tiles"
          split="words"
          gravity={1}
          bounciness={0.35}
          scatter={0.6}
          stagger={0.06}
          fontSize="0.9rem"
          accentColor="#eb7821"
          theme="light"
          backgroundColor="transparent"
        />
      </div>

      {/* Loading bar */}
      <div className="ls-bar-track" aria-hidden="true">
        <div className="ls-bar-fill" />
      </div>
    </div>
  );
}
