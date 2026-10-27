'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect user's motion preference
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Elements to automatically reveal on scroll
    const selectors = [
      '.reveal-on-scroll',
      '.asset-card',
      '.tech-card',
      '.service-card',
      '.process-step',
      '.stats-card',
      '.testimonial-card',
      '.pricing-card',
      '.faq-item',
      '[data-reveal]',
    ];

    const elements = document.querySelectorAll(selectors.join(', '));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    );

    elements.forEach((el, index) => {
      if (!el.classList.contains('is-revealed')) {
        el.classList.add('reveal-init');
        // Add subtle natural staggered timing for grid sibling items
        if (!el.style.transitionDelay) {
          const stagger = (index % 3) * 0.08;
          el.style.transitionDelay = `${stagger}s`;
        }
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
