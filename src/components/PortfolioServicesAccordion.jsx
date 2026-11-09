'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Globe,
  Smartphone,
  Code2,
  Cpu,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Check,
} from 'lucide-react';
import './PortfolioServicesAccordion.css';

const SERVICES = [
  {
    id: 'web-dev',
    num: '01',
    title: 'Web Application Development',
    tag: 'Modern Web Platforms',
    desc: 'Build responsive websites, customer portals, dashboards, and modern web applications tailored to your business.',
    icon: Globe,
    link: '/services',
    highlights: ['Customer Portals', 'Responsive UI/UX', 'High Performance'],
  },
  {
    id: 'mobile-dev',
    num: '02',
    title: 'Mobile Application Development',
    tag: 'iOS & Android Solutions',
    desc: 'Create intuitive mobile experiences for Android and iOS using appropriate mobile development technologies.',
    icon: Smartphone,
    link: '/services',
    highlights: ['Cross-Platform Apps', 'Native Performance', 'Offline-First'],
  },
  {
    id: 'custom-dev',
    num: '03',
    title: 'Custom Software Development',
    tag: 'Tailored Business Systems',
    desc: 'Develop tailored software that streamlines business processes, improves productivity, and addresses specific operational challenges.',
    icon: Code2,
    link: '/services',
    highlights: ['Workflow Automation', 'Scalable Architecture', 'Custom ERP/CRM'],
  },
  {
    id: 'backend-dev',
    num: '04',
    title: 'Backend & API Development',
    tag: 'Cloud & Database Infrastructure',
    desc: 'Build reliable APIs, database-driven applications, and backend systems that connect digital products and support future growth.',
    icon: Cpu,
    link: '/services',
    highlights: ['REST & GraphQL APIs', 'Secure Auth & RBAC', 'Cloud Data Pipelines'],
  },
];

export default function PortfolioServicesAccordion() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeId, setActiveId] = useState('web-dev');
  const isManualSelectingRef = useRef(false);
  const manualTimeoutRef = useRef(null);

  // Manual card selection with cooldown
  const handleSelectCard = useCallback((id) => {
    setActiveId((prev) => (prev === id ? null : id));
    isManualSelectingRef.current = true;
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      isManualSelectingRef.current = false;
    }, 1400);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 1. Section entrance observer
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    );
    sectionObserver.observe(section);

    // 2. Scroll-driven focal card opening on mobile (< 1024px)
    let ticking = false;
    let lastSwitchTime = 0;

    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        ticking = false;
        if (isManualSelectingRef.current) return;
        if (window.innerWidth >= 1024) return;

        const cards = Array.from(section.querySelectorAll('.psa-mobile-card'));
        if (!cards.length) return;

        const now = Date.now();
        // Cooldown between auto-switches gives the slow animation time to breathe
        if (now - lastSwitchTime < 420) return;

        const focalLine = window.innerHeight * 0.42;
        let closestId = null;
        let minDistance = Infinity;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const dist = Math.abs(cardCenter - focalLine);

          // Card must be near focal area to activate
          if (rect.top <= focalLine + 120 && rect.bottom >= focalLine - 120) {
            if (dist < minDistance) {
              minDistance = dist;
              closestId = card.getAttribute('data-id');
            }
          }
        });

        if (closestId && closestId !== activeId) {
          lastSwitchTime = now;
          setActiveId(closestId);
        }
      });
      ticking = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    };
  }, [activeId]);

  return (
    <section
      ref={sectionRef}
      id="portfolio-services"
      className={`psa-section ${isInView ? 'is-in-view' : ''}`}
      aria-label="Software Solutions for Growing Businesses"
    >
      <div className="container">
        {/* Section Header */}
        <div className="psa-header">
          <div className="psa-badge-pill">
            <Sparkles size={14} className="psa-badge-icon" aria-hidden="true" />
            <span>WHAT WE BUILD</span>
          </div>

          <h2 className="psa-title">
            Software Solutions for Growing Businesses
          </h2>

          <p className="psa-subtitle">
            From modern web applications to custom business software, we help turn complex requirements into practical digital solutions.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 1. DESKTOP VIEW (>= 1024px): 4-Column Feature Grid        */}
        {/* ========================================================= */}
        <div className="psa-desktop-grid">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={`desktop-${s.id}`}
                className="psa-desktop-card"
                style={{ '--card-idx': idx }}
              >
                <div className="psa-desktop-card-top">
                  <div className="psa-icon-box" aria-hidden="true">
                    <Icon size={24} strokeWidth={2.2} />
                  </div>
                  <span className="psa-step-num">{s.num}</span>
                </div>

                <span className="psa-card-tag">{s.tag}</span>
                <h3 className="psa-card-title">{s.title}</h3>
                <p className="psa-card-desc">{s.desc}</p>

                <div className="psa-highlights-pills">
                  {s.highlights.map((h, i) => (
                    <span key={i} className="psa-pill-item">
                      <Check size={11} className="psa-pill-check" strokeWidth={3} />
                      {h}
                    </span>
                  ))}
                </div>

                <Link href={s.link} className="psa-learn-btn">
                  <span>Learn More</span>
                  <ArrowRight size={14} className="psa-btn-arrow" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 2. MOBILE VIEW (< 1024px): Slow Animated Accordion Cards   */}
        {/* ========================================================= */}
        <div className="psa-mobile-list" role="region" aria-label="Services Accordion">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const isOpen = activeId === s.id;

            return (
              <div
                key={`mobile-${s.id}`}
                data-id={s.id}
                className={`psa-mobile-card ${isOpen ? 'is-open' : 'is-closed'}`}
                style={{ '--card-idx': idx }}
              >
                {/* Clickable Header Bar */}
                <button
                  type="button"
                  className="psa-mobile-header"
                  onClick={() => handleSelectCard(s.id)}
                  aria-expanded={isOpen}
                  aria-controls={`psa-content-${s.id}`}
                >
                  <div className="psa-mobile-header-left">
                    <div className="psa-mobile-icon-box" aria-hidden="true">
                      <Icon size={20} strokeWidth={2.3} />
                    </div>
                    <div className="psa-mobile-headings">
                      <span className="psa-mobile-num">0{idx + 1}</span>
                      <h3 className="psa-mobile-title">{s.title}</h3>
                    </div>
                  </div>

                  <div className="psa-mobile-chevron-box" aria-hidden="true">
                    <ChevronRight size={18} className="psa-mobile-chevron" />
                  </div>
                </button>

                {/* Slow, Smooth Expandable Content using grid-template-rows */}
                <div
                  id={`psa-content-${s.id}`}
                  className="psa-expandable-content"
                >
                  <div className="psa-expandable-inner">
                    <span className="psa-mobile-tag">{s.tag}</span>
                    <p className="psa-mobile-desc">{s.desc}</p>

                    {/* Staggered Capability Highlights */}
                    <div className="psa-mobile-pills">
                      {s.highlights.map((h, i) => (
                        <span key={i} className="psa-mobile-pill">
                          <Check size={11} className="psa-pill-check" strokeWidth={3} />
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="psa-mobile-action-row">
                      <Link href={s.link} className="psa-mobile-learn-btn">
                        <span>Explore Capabilities</span>
                        <ArrowRight size={14} className="psa-btn-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

