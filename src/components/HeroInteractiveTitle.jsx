'use client';

import React, { useRef } from 'react';
import './HeroInteractiveTitle.css';

/**
 * HeroInteractiveTitle - Interactive Spring-Scale Flow Typography
 * 
 * Features:
 * - Fluid parabolic wave via CSS :hover, :has(), and sibling transitions
 * - Spring cubic-bezier bounce physics (elastic overshoot entry, graceful decay)
 * - Accessible aria-label for SEO and screen-reader fidelity
 * - Word boundary preservation to prevent mid-word line breaks
 * - Touch-drag support for mobile / tablet devices
 * - Native GPU composited transforms with zero layout shift / jitter
 */
export default function HeroInteractiveTitle({
  prefix = 'We Build Digital Experiences That',
  highlight = 'Grow Your Business.',
  className = '',
}) {
  const activeTouchEl = useRef(null);

  // Split sentence into words
  const prefixWords = prefix ? prefix.trim().split(/\s+/) : [];
  const highlightWords = highlight ? highlight.trim().split(/\s+/) : [];
  const fullAccessibleText = [prefix, highlight].filter(Boolean).join(' ');

  // Mobile / Tablet Touch Interaction Support
  const handleTouchMove = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const letterEl = target?.closest('.hero-flow-letter');

    if (letterEl !== activeTouchEl.current) {
      if (activeTouchEl.current) {
        activeTouchEl.current.classList.remove('is-touch-active');
      }
      if (letterEl) {
        letterEl.classList.add('is-touch-active');
        activeTouchEl.current = letterEl;
      } else {
        activeTouchEl.current = null;
      }
    }
  };

  const handleTouchEnd = () => {
    if (activeTouchEl.current) {
      activeTouchEl.current.classList.remove('is-touch-active');
      activeTouchEl.current = null;
    }
  };

  const renderWord = (word, wordIndex, isAccent = false) => {
    return (
      <span key={`word-${wordIndex}-${word}`} className="hero-flow-word">
        {word.split('').map((char, charIndex) => (
          <span
            key={`char-${charIndex}`}
            className={`hero-flow-letter ${isAccent ? 'hero-flow-letter--accent' : ''}`}
            data-letter={char}
            data-cursor-hover="true"
          >
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <h1
      className={`hero-title-main hero-title-flow-container ${className}`.trim()}
      aria-label={fullAccessibleText}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <span className="hero-flow-visual" aria-hidden="true">
        {/* Regular Prefix Words */}
        {prefixWords.map((word, idx) => (
          <React.Fragment key={`p-${idx}`}>
            {renderWord(word, idx, false)}
            {(idx < prefixWords.length - 1 || highlightWords.length > 0) && (
              <span className="hero-flow-space"> </span>
            )}
          </React.Fragment>
        ))}

        {/* Highlight Accent Words with Underline */}
        {highlightWords.length > 0 && (
          <span className="hero-title-highlight-box hero-title-flow-highlight">
            {highlightWords.map((word, idx) => (
              <React.Fragment key={`h-${idx}`}>
                {renderWord(word, idx, true)}
                {idx < highlightWords.length - 1 && (
                  <span className="hero-flow-space"> </span>
                )}
              </React.Fragment>
            ))}

            {/* Hand-Drawn Double Stroke Underline SVG */}
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
        )}
      </span>
    </h1>
  );
}

