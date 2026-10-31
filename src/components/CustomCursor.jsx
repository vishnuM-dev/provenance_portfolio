'use client';

import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

/**
 * CustomCursor - Clean Application Font-Color (#141518) Dot + Ring Cursor
 * 
 * Design:
 * - Default: Reduced 5px charcoal dot (#141518) + 22px delicate follower ring
 * - Hover: Focuses down smoothly (scale 0.72) and accents with brand orange (#eb7821)
 * - Click: Tactile elastic compression (scale 0.60)
 * - Text fields: Fades to allow native text selection I-beam
 * - Performance: 144Hz GPU-accelerated requestAnimationFrame with O(1) hover detection
 */
const INTERACTIVE_SELECTOR = [
  'a',
  'button',
  'input[type="button"]',
  'input[type="submit"]',
  'input[type="reset"]',
  'select',
  'label[for]',
  'summary',
  '[role="button"]',
  '[role="link"]',
  '[role="tab"]',
  '[role="menuitem"]',
  '[role="switch"]',
  '[role="checkbox"]',
  '[tabindex]:not([tabindex="-1"])',
  '.btn',
  '.clickable',
  '.cursor-pointer',
  '.wwb-card',
  '.wwb-learn-more-btn',
  '.cs-card-wrapper',
  '.cs-filter-btn',
  '.cs-view-all-btn',
  '.tech-card',
  '.sp-card',
  '.about-feature-card',
  '.about-cta-button',
  '.floating-nav-link',
  '.brand-logo-link',
  '.hero-btn-explore',
  '.hero-btn-talk',
  '.feature-ribbon-item',
  '.hero-flow-letter',
  '[data-cursor-hover]',
  '[data-cursor="pointer"]',
].join(', ');

const TEXT_INPUT_SELECTOR = [
  'input[type="text"]',
  'input[type="email"]',
  'input[type="tel"]',
  'input[type="number"]',
  'input[type="password"]',
  'input[type="search"]',
  'input[type="url"]',
  'textarea',
  '[contenteditable="true"]',
].join(', ');

export default function CustomCursor({ hideSystemCursor = true }) {
  const containerRef = useRef(null);
  const dotWrapperRef = useRef(null);
  const circleWrapperRef = useRef(null);
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  // Position & state tracking
  const mousePos = useRef({ x: -100, y: -100 });
  const circlePos = useRef({ x: -100, y: -100 });
  const isHoveredRef = useRef(false);
  const isInputRef = useRef(false);
  const isVisibleRef = useRef(false);
  const hasMovedRef = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only skip on pure touch screens (e.g. mobile phones with no mouse pointer)
    const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchOnly) return;

    const container = containerRef.current;
    const dotWrapper = dotWrapperRef.current;
    const circleWrapper = circleWrapperRef.current;
    const dot = dotRef.current;
    const circle = circleRef.current;

    if (!container || !dotWrapper || !circleWrapper || !dot || !circle) return;

    // Show cursor helper
    const showCursor = () => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        container.style.opacity = '1';
        container.style.visibility = 'visible';
        container.classList.add('is-visible');
        if (hideSystemCursor) {
          document.documentElement.classList.add('has-custom-cursor');
          document.body.classList.add('has-custom-cursor');
        }
      }
    };

    // Hide cursor helper
    const hideCursor = () => {
      if (isVisibleRef.current) {
        isVisibleRef.current = false;
        container.style.opacity = '0';
        container.classList.remove('is-visible');
        if (hideSystemCursor) {
          document.documentElement.classList.remove('has-custom-cursor');
          document.body.classList.remove('has-custom-cursor');
        }
      }
    };

    // Fast hover evaluator
    const checkHover = (target, checkComputed = false) => {
      if (!target || !(target instanceof Element)) return;

      // 1. Text input detection
      const onTextInput = Boolean(target.closest(TEXT_INPUT_SELECTOR));
      if (onTextInput !== isInputRef.current) {
        isInputRef.current = onTextInput;
        if (onTextInput) {
          container.classList.add('cursor-on-input');
        } else {
          container.classList.remove('cursor-on-input');
        }
      }

      if (onTextInput) {
        if (isHoveredRef.current) {
          isHoveredRef.current = false;
          circle.classList.remove('is-hovered');
          dot.classList.remove('is-hovered');
        }
        return;
      }

      // 2. Interactive detection
      let isInteractive = Boolean(target.closest(INTERACTIVE_SELECTOR));
      if (!isInteractive && checkComputed) {
        try {
          const style = window.getComputedStyle(target);
          if (style && style.cursor === 'pointer') {
            isInteractive = true;
          }
        } catch {
          // ignore error
        }
      }

      if (isInteractive !== isHoveredRef.current) {
        isHoveredRef.current = isInteractive;
        if (isInteractive) {
          circle.classList.add('is-hovered');
          dot.classList.add('is-hovered');
        } else {
          circle.classList.remove('is-hovered');
          dot.classList.remove('is-hovered');
        }
      }
    };

    // Main pointer move listener (0ms instant dot positioning)
    const onMove = (e) => {
      if (e.pointerType === 'touch') {
        hideCursor();
        return;
      }

      const x = e.clientX;
      const y = e.clientY;

      mousePos.current.x = x;
      mousePos.current.y = y;

      // Instant hardware dot positioning (0ms latency)
      dotWrapper.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        circlePos.current.x = x;
        circlePos.current.y = y;
        circleWrapper.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      showCursor();
      checkHover(e.target, false);
    };

    // Element boundary crossing
    const onOver = (e) => {
      if (e.pointerType === 'touch') return;
      checkHover(e.target, true);
    };

    // Pointer down (Click state: tactile elastic compression)
    const onDown = (e) => {
      if (e.pointerType === 'touch') return;
      showCursor();
      circle.classList.add('is-clicking');
      dot.classList.add('is-clicking');
    };

    // Pointer up
    const onUp = () => {
      circle.classList.remove('is-clicking');
      dot.classList.remove('is-clicking');
    };

    // Window blur / Document leave
    const onLeave = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        hideCursor();
      }
    };

    const onEnter = (e) => {
      if (e && typeof e.clientX === 'number') {
        mousePos.current.x = e.clientX;
        mousePos.current.y = e.clientY;
        circlePos.current.x = e.clientX;
        circlePos.current.y = e.clientY;
      }
      showCursor();
    };

    const onBlur = () => {
      hideCursor();
    };

    // Scroll listener to update hover under static mouse
    const onScroll = () => {
      if (hasMovedRef.current) {
        const el = document.elementFromPoint(mousePos.current.x, mousePos.current.y);
        if (el) checkHover(el, true);
      }
    };

    // Smooth Physics Follower Loop (requestAnimationFrame)
    const LERP_FACTOR = 0.22; // Responsive, silky follower glide
    const animate = () => {
      if (hasMovedRef.current) {
        circlePos.current.x += (mousePos.current.x - circlePos.current.x) * LERP_FACTOR;
        circlePos.current.y += (mousePos.current.y - circlePos.current.y) * LERP_FACTOR;

        circleWrapper.style.transform = `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    // Start physics animation loop
    rafId.current = requestAnimationFrame(animate);

    // Event listeners with capture: true to ensure no event interception
    window.addEventListener('pointermove', onMove, { passive: true, capture: true });
    window.addEventListener('mousemove', onMove, { passive: true, capture: true });
    window.addEventListener('pointerover', onOver, { passive: true, capture: true });
    window.addEventListener('pointerdown', onDown, { passive: true, capture: true });
    window.addEventListener('pointerup', onUp, { passive: true, capture: true });
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    window.addEventListener('blur', onBlur);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener('pointermove', onMove, { capture: true });
      window.removeEventListener('mousemove', onMove, { capture: true });
      window.removeEventListener('pointerover', onOver, { capture: true });
      window.removeEventListener('pointerdown', onDown, { capture: true });
      window.removeEventListener('pointerup', onUp, { capture: true });
      window.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('blur', onBlur);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);

      if (hideSystemCursor) {
        document.documentElement.classList.remove('has-custom-cursor');
        document.body.classList.remove('has-custom-cursor');
      }
    };
  }, [hideSystemCursor]);

  return (
    <aside
      ref={containerRef}
      className="custom-cursor-container"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        pointerEvents: 'none',
        zIndex: 99999999,
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity 0.2s ease',
      }}
    >
      {/* Outer Follower Circle */}
      <div
        ref={circleWrapperRef}
        className="custom-cursor-circle-wrapper"
      >
        <div
          ref={circleRef}
          className="custom-cursor-circle"
        />
      </div>

      {/* Inner Precision Dot */}
      <div
        ref={dotWrapperRef}
        className="custom-cursor-dot-wrapper"
      >
        <div
          ref={dotRef}
          className="custom-cursor-dot"
        />
      </div>
    </aside>
  );
}
