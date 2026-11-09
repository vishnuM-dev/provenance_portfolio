'use client';

import React, { useEffect, useRef } from 'react';
import {
  Check,
  Server,
  Database,
  Cloud,
  Rocket,
} from 'lucide-react';

export default function TechStackMobileSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      cardsRef.current.forEach((card) => {
        if (card) card.classList.add('sp-tech-card-in-view');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sp-tech-card-in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sp-tech-mobile-container">
      {/* Section Header */}
      <div className="sp-tech-mobile-header">
        <div className="sp-tech-pill-badge">
          <span>Our Tech Stack</span>
        </div>

        <h2 className="sp-tech-mobile-title">
          How We Build &amp; <span className="sp-tech-highlight">Deploy</span>
        </h2>

        <p className="sp-tech-mobile-desc">
          A modern, scalable and reliable development stack from frontend to production.
        </p>
      </div>

      {/* 5 Stacked Technology Cards */}
      <div className="sp-tech-cards-list">
        {/* Card 1: Frontend */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="sp-tech-card"
        >
          <div className="sp-tech-card-main">
            <div className="sp-tech-icon-squircle" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <path d="M10 8.5L7.5 10L10 11.5M14 8.5L16.5 10L14 11.5" strokeWidth="1.8" />
              </svg>
            </div>
            <div className="sp-tech-card-text">
              <h3 className="sp-tech-card-heading">Frontend</h3>
              <p className="sp-tech-card-desc">
                Builds responsive and modern user interfaces.
              </p>
              <div className="sp-tech-labels-wrap">
                <span className="sp-tech-badge">Next.js / React</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Backend */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="sp-tech-card"
        >
          <div className="sp-tech-card-main">
            <div className="sp-tech-icon-squircle" aria-hidden="true">
              <Server size={22} color="#ea580c" strokeWidth={2.2} />
            </div>
            <div className="sp-tech-card-text">
              <h3 className="sp-tech-card-heading">Backend</h3>
              <p className="sp-tech-card-desc">
                Handles business logic, APIs, and core services.
              </p>
              <div className="sp-tech-labels-wrap">
                <span className="sp-tech-badge">API &amp; Service Logic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Database */}
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="sp-tech-card"
        >
          <div className="sp-tech-card-main">
            <div className="sp-tech-icon-squircle" aria-hidden="true">
              <Database size={22} color="#ea580c" strokeWidth={2.2} />
            </div>
            <div className="sp-tech-card-text">
              <h3 className="sp-tech-card-heading">Database</h3>
              <p className="sp-tech-card-desc">
                Stores and manages application data securely.
              </p>
              <div className="sp-tech-labels-wrap">
                <span className="sp-tech-badge">MySQL / PostgreSQL / DynamoDB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Cloud Storage */}
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="sp-tech-card"
        >
          <div className="sp-tech-card-main">
            <div className="sp-tech-icon-squircle" aria-hidden="true">
              <Cloud size={22} color="#ea580c" strokeWidth={2.2} />
            </div>
            <div className="sp-tech-card-text">
              <h3 className="sp-tech-card-heading">Cloud Storage</h3>
              <p className="sp-tech-card-desc">
                Secure, scalable storage for files and application assets.
              </p>
              <div className="sp-tech-labels-wrap">
                <span className="sp-tech-badge">S3 Buckets</span>
                <span className="sp-tech-badge">Global CDN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Deployment */}
        <div
          ref={(el) => (cardsRef.current[4] = el)}
          className="sp-tech-card"
        >
          <div className="sp-tech-card-main">
            <div className="sp-tech-icon-squircle" aria-hidden="true">
              <Rocket size={22} color="#ea580c" strokeWidth={2.2} />
            </div>
            <div className="sp-tech-card-text">
              <h3 className="sp-tech-card-heading">Deployment</h3>
              <p className="sp-tech-card-desc">
                Package, release, and run the application reliably.
              </p>
            </div>
          </div>
          {/* Deployment 4 checkmark badges */}
          <div className="sp-tech-deploy-grid">
            <span className="sp-tech-badge sp-tech-badge-deploy">
              <Check size={11} strokeWidth={3} className="sp-tech-check" />
              <span>Build</span>
            </span>
            <span className="sp-tech-badge sp-tech-badge-deploy">
              <Check size={11} strokeWidth={3} className="sp-tech-check" />
              <span>Test</span>
            </span>
            <span className="sp-tech-badge sp-tech-badge-deploy">
              <Check size={11} strokeWidth={3} className="sp-tech-check" />
              <span>Deploy</span>
            </span>
            <span className="sp-tech-badge sp-tech-badge-deploy">
              <Check size={11} strokeWidth={3} className="sp-tech-check" />
              <span>Monitor</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
