'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Layers,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import PortfolioHero from '@/components/PortfolioHero';
import PortfolioServicesAccordion from '@/components/PortfolioServicesAccordion';
import PortfolioTechSection from '@/components/PortfolioTechSection';
import PortfolioProcessSection from '@/components/PortfolioProcessSection';
import PortfolioWhyWorkWithUs from '@/components/PortfolioWhyWorkWithUs';
import '@/components/PortfolioTechSection.css';

export default function PortfolioPage() {
  // FAQ Accordion State for Section 07 (first item open by default)
  const [openFaq, setOpenFaq] = useState(0);

  // 6 FAQs for Section 07
  const faqs = [
    {
      q: 'What types of software do you develop?',
      a: 'We develop web applications, mobile applications, custom business software, and backend systems according to project requirements.',
    },
    {
      q: 'Which technologies do you use?',
      a: 'We work with suitable modern technologies across frontend development, backend engineering, mobile applications, databases, and cloud infrastructure.',
    },
    {
      q: 'Can you develop a solution based on our existing requirements?',
      a: 'Yes. Project scope, architecture, functionality, and delivery expectations can be discussed and defined before development begins.',
    },
    {
      q: 'How does your development process work?',
      a: 'We typically begin with requirement discovery, followed by planning, design, development, testing, and deployment.',
    },
    {
      q: 'Can you integrate with an existing application?',
      a: 'Integration possibilities depend on the existing architecture, APIs, security requirements, and project scope.',
    },
    {
      q: 'Do you provide maintenance after launch?',
      a: "Post-launch maintenance and support can be discussed and defined according to the project's needs and agreed service arrangements.",
    },
  ];

  return (
    <div style={{ paddingBottom: '1.5rem' }}>
      {/* ========================================================= */}
      {/* SECTION 01: PORTFOLIO HERO (REDESIGNED EDITORIAL SPEC)    */}
      {/* ========================================================= */}
      <PortfolioHero />

      {/* ========================================================= */}
      {/* SECTION 02: FEATURED PROJECTS                             */}
      {/* ========================================================= */}
      <div id="featured-projects" style={{ scrollMarginTop: '80px' }}>
        <CaseStudiesSection showViewAllBtn={false} />
      </div>

      {/* ========================================================= */}
      {/* SECTION 03: SERVICES OVERVIEW (SLOW ANIMATED ACCORDION)   */}
      {/* ========================================================= */}
      <PortfolioServicesAccordion />

      {/* ========================================================= */}
      {/* SECTION 04: TECHNOLOGIES WE USE (SCROLL-DRIVEN SHOWCASE)   */}
      {/* ========================================================= */}
      <PortfolioTechSection id="technologies" />

      {/* ========================================================= */}
      {/* SECTION 05: OUR DEVELOPMENT PROCESS (SCROLL-DRIVEN EFFECTS) */}
      {/* ========================================================= */}
      <PortfolioProcessSection id="how-we-work" />

      {/* ========================================================= */}
      {/* SECTION 06: WHY PROVENANCETECH? (SCROLL DROPDOWN)         */}
      {/* ========================================================= */}
      <PortfolioWhyWorkWithUs id="why-work-with-us" />

      {/* ========================================================= */}
      {/* SECTION 07: FREQUENTLY ASKED QUESTIONS                    */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '1.75rem 0 2.5rem',
          background: 'transparent',
        }}
      >
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div
              className="section-badge"
              style={{
                background: '#ffffff',
                border: '1px solid #dfd5c8',
                color: 'var(--primary, #df7a38)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
              }}
            >
              <Sparkles size={14} color="var(--primary)" />
              COMMON QUESTIONS
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#1a130e',
                lineHeight: 1.2,
              }}
            >
              Questions About Working With Us?
            </h2>
          </div>

          {/* Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #dfd5c8',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: isOpen ? 'var(--primary)' : '#1a130e',
                      gap: '1rem',
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.22s ease',
                        flexShrink: 0,
                        color: isOpen ? 'var(--primary)' : '#8d7d6f',
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.35rem',
                        fontSize: '0.92rem',
                        color: '#5a4c3e',
                        lineHeight: 1.65,
                        borderTop: '1px solid #f2e9df',
                        paddingTop: '0.85rem',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
