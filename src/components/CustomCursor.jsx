'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import './CustomCursor.css';

/**
 * CustomCursor - Premium Dot + Circle Combo Cursor
 * 
 * Features:
 * - Rest: 8px glowing neon pink dot & 36px smooth thin purple follower ring.
 * - Hover: Contracts down to a focused reticle (scale 0.68) and switches to ProvenanceTech brand amber/orange-gold (#eb7821 / #f4974f).
 * - Tactile Elastic Click: Crisp compression and shockwave ripple in brand amber.
 * - Native Text Cursor Protection: Dims cursor and preserves native I-beam on inputs/textareas.
 * - High-Precision 144Hz Physics: requestAnimationFrame lerp loop with zero lag or stutter.
 * - Mobile & Touch Isolation: Completely disabled on pure touchscreens and mobile devices.
 * - Reduced Motion Compliant: Pauses ambient pulsing while preserving responsive pointer tracking.
 */
export default function CustomCursor({
  hideSystemCursor = true,
  lerp = 0.16,
  className = '',
}) {
  const containerRef = useRef(null);
  const dotWrapperRef = useRef(null);
  const circleWrapperRef = useRef(null);
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const rippleRef = useRef(null);

  const rafId = useRef(null);
  const mousePos = useRef({ x: -200, y: -200 });
  const circlePos = useRef({ x: -200, y: -200 });
  const hasMoved = useRef(false);
  const isTouchActive = useRef(false);

  // Synchronized React state so Next.js reconciliation preserves visibility
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check prefers-reduced-motion
    try {
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(reducedMotionQuery.matches);

      const handleMotionChange = (e) => setIsReducedMotion(e.matches);
      reducedMotionQuery.addEventListener?.('change', handleMotionChange);
    } catch {
      // Ignore older browser errors
    }

    // Helper: Activate custom cursor & hide native cursor
    const showCursor = () => {
      if (isTouchActive.current) return;

      setIsVisible(true);
      if (containerRef.current) {
        containerRef.current.style.opacity = '1';
        containerRef.current.style.visibility = 'visible';
        containerRef.current.classList.add('is-visible');
      }

      if (hideSystemCursor) {
        document.documentElement.classList.add('has-custom-cursor');
        document.body.classList.add('has-custom-cursor');
      }
    };

    // Helper: Deactivate custom cursor & restore native cursor
    const hideCursor = () => {
      setIsVisible(false);
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
        containerRef.current.classList.remove('is-visible');
      }

      if (hideSystemCursor) {
        document.documentElement.classList.remove('has-custom-cursor');
        document.body.classList.remove('has-custom-cursor');
      }
    };

    // Hover detection evaluator: contracts cursor and applies brand amber
    const updateHoverState = (target) => {
      if (isTouchActive.current || !target || !(target instanceof Element)) return;

      // Dim over text inputs to let native I-beam shine
      const isTextInput = Boolean(
        target.closest(
          'input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="password"], input[type="search"], textarea, [contenteditable="true"]'
        )
      );

      if (isTextInput) {
        containerRef.current?.classList.add('cursor-on-input');
      } else {
        containerRef.current?.classList.remove('cursor-on-input');
      }

      // Check interactive elements (buttons, links, nav tabs, cards, tags, clickable items)
      const isInteractive = Boolean(
        target.closest(
          'a, button, input, select, textarea, label, summary, [role="button"], [role="link"], [role="menuitem"], [role="tab"], [data-cursor-hover], [data-cursor="pointer"], .clickable, .cursor-pointer, .btn, .asset-card, .service-card, .modern-service-card, .service-cta-pill, .tech-card, .portfolio-project-card, .process-step-card, .floating-nav-link, .brand-logo-link, .footer-link-item, .feature-ribbon-item, .orbit-icon'
        )
      );

      if (isInteractive) {
        circleRef.current?.classList.add('is-hovered');
        dotRef.current?.classList.add('is-hovered');
        return;
      }

      // Fallback: check CSS computed cursor: pointer on custom parent containers
      try {
        let el = target;
        let hasPointer = false;
        let depth = 0;
        while (el && el !== document.body && depth < 4) {
          if (window.getComputedStyle(el).cursor === 'pointer') {
            hasPointer = true;
            break;
          }
          el = el.parentElement;
          depth++;
        }

        if (hasPointer) {
          circleRef.current?.classList.add('is-hovered');
          dotRef.current?.classList.add('is-hovered');
          return;
        }
      } catch {
        // Cross-origin styles safe fallback
      }

      circleRef.current?.classList.remove('is-hovered');
      dotRef.current?.classList.remove('is-hovered');
    };

    // 1. Pointer & Mouse Movement Handler
    const handlePointerMove = (e) => {
      if (e.pointerType === 'touch') {
        isTouchActive.current = true;
        hideCursor();
        return;
      }

      isTouchActive.current = false;
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!hasMoved.current) {
        hasMoved.current = true;
        circlePos.current.x = e.clientX;
        circlePos.current.y = e.clientY;
      }

      showCursor();
      updateHoverState(e.target);
    };

    // 2. Touch Detection
    const handleTouchStart = () => {
      isTouchActive.current = true;
      hideCursor();
    };

    // 3. Viewport Window Enter / Leave
    const handleWindowLeave = () => {
      hideCursor();
    };

    const handleWindowEnter = (e) => {
      isTouchActive.current = false;
      if (e && e.clientX && e.clientY) {
        mousePos.current.x = e.clientX;
        mousePos.current.y = e.clientY;
      }
      showCursor();
    };

    // 4. Click & Ripple Shockwave Handlers
    const handlePointerDown = (e) => {
      if (e.pointerType === 'touch' || isTouchActive.current) return;
      showCursor();

      circleRef.current?.classList.add('is-clicking');
      dotRef.current?.classList.add('is-clicking');

      if (rippleRef.current) {
        const x = e.clientX || mousePos.current.x;
        const y = e.clientY || mousePos.current.y;
        rippleRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        rippleRef.current.classList.remove('is-active');
        void rippleRef.current.offsetWidth; // Force CSS reflow
        rippleRef.current.classList.add('is-active');
      }
    };

    const handlePointerUp = () => {
      circleRef.current?.classList.remove('is-clicking');
      dotRef.current?.classList.remove('is-clicking');
    };

    // 5. Hover Detection via Mouseover
    const handlePointerOver = (e) => {
      updateHoverState(e.target);
    };

    // 6. Physics Animation Loop: Smooth Lerp Translation (GPU accelerated)
    const animate = () => {
      circlePos.current.x += (mousePos.current.x - circlePos.current.x) * lerp;
      circlePos.current.y += (mousePos.current.y - circlePos.current.y) * lerp;

      if (circleWrapperRef.current) {
        circleWrapperRef.current.style.transform = `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0)`;
      }

      if (dotWrapperRef.current) {
        dotWrapperRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    // 7. Register Global Listeners
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('mouseover', handlePointerOver, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('mousedown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('mouseup', handlePointerUp, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('mouseleave', handleWindowLeave);
    document.addEventListener('mouseenter', handleWindowEnter);
    window.addEventListener('blur', handleWindowLeave);
    window.addEventListener('focus', handleWindowEnter);

    // 8. Cleanup Listeners on Unmount
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseover', handlePointerOver);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('mouseleave', handleWindowLeave);
      document.removeEventListener('mouseenter', handleWindowEnter);
      window.removeEventListener('blur', handleWindowLeave);
      window.removeEventListener('focus', handleWindowEnter);

      if (hideSystemCursor) {
        document.documentElement.classList.remove('has-custom-cursor');
        document.body.classList.remove('has-custom-cursor');
      }
    };
  }, [hideSystemCursor, lerp]);

  return (
    <aside
      ref={containerRef}
      aria-hidden="true"
      className={`custom-cursor-container ${isVisible ? 'is-visible' : ''} ${
        isReducedMotion ? 'reduced-motion' : ''
      } ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        pointerEvents: 'none',
        zIndex: 9999999,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.2s ease',
      }}
    >
      {/* Click Neon Ripple Shockwave */}
      <div
        ref={rippleRef}
        className="custom-cursor-ripple"
      />

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
