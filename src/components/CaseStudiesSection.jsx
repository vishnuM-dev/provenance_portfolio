'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Truck,
  Building2,
  ShoppingCart,
} from 'lucide-react';
import './CaseStudiesSection.css';

const PROJECTS_DATA = [
  {
    id: 'PRV-2026-APP01',
    num: '01',
    title: 'MK Delivery',
    subtitle: 'On-Demand Courier & Parcel Platform',
    category: 'Web Applications',
    displayCategory: 'Web Applications',
    imageUrl: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=1200&q=80',
    caseStudyUrl: '/catalog/PRV-2026-APP01',
    floatingIcon: <Truck size={24} strokeWidth={2.2} />,
  },
  {
    id: 'PRV-2026-APP02',
    num: '02',
    title: 'MR Cargo',
    subtitle: 'Freight Logistics & Cargo Management System',
    category: 'Business Software',
    displayCategory: 'Business Software',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    caseStudyUrl: '/catalog/PRV-2026-APP02',
    floatingIcon: <Building2 size={24} strokeWidth={2.2} />,
  },
  {
    id: 'PRV-2026-APP03',
    num: '03',
    title: 'SiteBox',
    subtitle: 'Interior Design Procurement & Buying Platform (Web & Mobile)',
    category: 'Web & Mobile Applications',
    displayCategory: 'Web Applications',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    caseStudyUrl: '/catalog/PRV-2026-APP03',
    floatingIcon: <ShoppingCart size={24} strokeWidth={2.2} />,
  },
];

const CATEGORIES = ['All Projects', 'Web Applications', 'Business Software'];

export default function CaseStudiesSection({ showViewAllBtn = true }) {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects = activeCategory === 'All Projects'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => {
        if (activeCategory === 'Web Applications' && p.category.includes('Web')) return true;
        if (activeCategory === 'Business Software' && p.category.includes('Business')) return true;
        return p.category === activeCategory;
      });

  return (
    <section className="cs-section">
      <div className="cs-container">
        {/* Header Matching Image 1 Spec */}
        <div className="cs-header">
          {/* Left Column */}
          <div className="cs-header-left">
            <div className="cs-badge">
              <span>CASE STUDIES</span>
              <span className="cs-badge-line" aria-hidden="true" />
            </div>

            <h2 className="cs-heading">
              From Ideas to<br />
              Real-World <span className="cs-heading-accent">Solutions</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="cs-header-right">
            {showViewAllBtn && (
              <div className="cs-header-top-row">
                <Link href="/portfolio" className="cs-view-all-btn">
                  <span>View All Projects</span>
                  <ArrowRight size={15} className="cs-view-all-arrow" />
                </Link>
              </div>
            )}

            <p className="cs-header-desc">
              Explore how we design and build custom web and software solutions that solve real business challenges and create measurable impact.
            </p>

            {/* Filter Tabs Matching Image 1 */}
            <div className="cs-filter-row">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cs-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid Matching Image 1 (Normal) & Image 2 (Hover) */}
        <div
          className={`cs-grid ${hoveredId !== null ? 'has-hovered' : ''}`}
          onMouseLeave={() => setHoveredId(null)}
        >
          {filteredProjects.map((p) => {
            const isHovered = hoveredId === p.id;
            const isRemaining = hoveredId !== null && !isHovered;

            return (
              <Link
                key={p.id}
                href={p.caseStudyUrl}
                className={`cs-card-wrapper ${isHovered ? 'is-hovered' : ''} ${isRemaining ? 'is-remaining-smaller' : ''}`}
                onMouseEnter={() => setHoveredId(p.id)}
                onFocus={() => setHoveredId(p.id)}
                onBlur={() => setHoveredId(null)}
                aria-label={`View case study for ${p.title}`}
              >
              {/* Tilted Orange Card Backdrop Layer (Image 2) */}
              <div className="cs-card-backdrop" aria-hidden="true" />

              {/* Floating Circular Icon Badge on Upper Left (Image 2) */}
              <div className="cs-floating-icon-badge" aria-hidden="true">
                {p.floatingIcon}
              </div>

              {/* Main Card Content */}
              <div className="cs-card-main">
                {/* Thumbnail Container */}
                <div className="cs-thumbnail-container">
                  <Image
                    src={p.imageUrl}
                    alt={`${p.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="cs-thumbnail-img"
                  />

                  {/* Overlay Number: 01 — (Image 1) */}
                  <div className="cs-overlay-num">
                    <span>{p.num}</span>
                    <span className="cs-overlay-num-line" aria-hidden="true" />
                  </div>

                  {/* Overlay Pill Badge: Category • (Image 1) */}
                  <div className="cs-overlay-pill">
                    <span>{p.displayCategory}</span>
                    <span className="cs-overlay-dot" aria-hidden="true" />
                  </div>

                  {/* Organic Wave Divider Cutout (Image 2 Hover Spec) */}
                  <div className="cs-card-wave-wrap" aria-hidden="true">
                    <svg
                      viewBox="0 0 500 40"
                      preserveAspectRatio="none"
                      className="cs-card-wave-svg"
                    >
                      <path
                        d="M 0,40 L 0,14 C 65,0 130,4 190,22 C 255,42 320,40 390,20 C 435,7 475,10 500,16 L 500,40 Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </div>
                </div>

                {/* Card Body */}
                <div className="cs-card-body">
                  {/* Title & Subtitle */}
                  <h3 className="cs-title">{p.title}</h3>
                  <div className="cs-subtitle">{p.subtitle}</div>

                  {/* Card Bottom Action Bar */}
                  <div className="cs-action-row">
                    <span className="cs-action-link">
                      View Case Study
                    </span>

                    {/* Concentric Ripple Circular Arrow Button (Image 2) */}
                    <div className="cs-action-circle-btn" aria-hidden="true">
                      <ArrowRight size={18} strokeWidth={2.4} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        </div>
      </div>
    </section>
  );
}
