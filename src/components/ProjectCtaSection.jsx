'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Laptop,
  Code2,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Check,
  Send,
  Cloud,
  Users,
  Infinity as InfinityIcon,
} from 'lucide-react';
import './ProjectCtaSection.css';

/**
 * 4 Service Highlights (Matching Top Row in Mobile Reference)
 */
const SERVICE_HIGHLIGHTS = [
  {
    id: 'consultation',
    slug: 'online-consultation',
    line1: 'Online',
    line2: 'Consultation',
    icon: Laptop,
  },
  {
    id: 'development',
    slug: 'full-cycle-development',
    line1: 'Full-cycle',
    line2: 'Development',
    icon: Code2,
  },
  {
    id: 'maintenance',
    slug: 'sla-maintenance',
    line1: 'SLA &',
    line2: 'Maintenance',
    icon: ShieldCheck,
  },
  {
    id: 'release',
    slug: 'app-store-cloud-release',
    line1: 'App Store &',
    line2: 'Cloud Release',
    icon: Smartphone,
  },
];

/**
 * 3D Laptop + Propped Phone + Floating Satellite Composition Illustration (Mobile Reference)
 */
function CtaMobileIllustration() {
  return (
    <div className="cta-mobile-illus-wrap" aria-hidden="true">
      {/* Background Soft Atmospheric Warm Glow */}
      <div className="cta-mobile-illus-aura" />

      <svg viewBox="0 0 320 200" fill="none" className="cta-mobile-illus-svg">
        <defs>
          <linearGradient id="ctaLapChartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* 1. Laptop Base Shadow */}
        <ellipse cx="145" cy="184" rx="120" ry="14" fill="#ea580c" fillOpacity="0.1" filter="blur(6px)" />

        {/* 2. Laptop Metallic Chassis Base */}
        <polygon points="30,166 248,166 260,182 16,182" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
        <polygon points="16,182 260,182 258,186 18,186" fill="#94a3b8" />
        <rect x="115" y="169" width="46" height="8" rx="2" fill="#cbd5e1" />

        {/* 3. Laptop Screen Outer Shell & Bezel */}
        <polygon points="44,40 236,40 248,166 30,166" fill="#1e293b" />
        <polygon points="48,44 232,44 243,162 36,162" fill="#ffffff" />

        {/* Screen Header / Browser Bar */}
        <polygon points="48,44 232,44 234,60 46,60" fill="#f8fafc" />
        <line x1="46" y1="60" x2="234" y2="60" stroke="#e2e8f0" strokeWidth="0.8" />

        {/* Traffic dots */}
        <circle cx="56" cy="52" r="2.2" fill="#ef4444" />
        <circle cx="63" cy="52" r="2.2" fill="#f59e0b" />
        <circle cx="70" cy="52" r="2.2" fill="#10b981" />

        {/* Brand Text in Header */}
        <g transform="translate(86, 48)">
          <polygon points="2,1 7,1 5,7 0,7" fill="#141518" />
          <polygon points="4,2 8,2 6,6 2,6" fill="#ea580c" />
          <text x="11" y="6.5" fill="#141518" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">
            Provenance<tspan fill="#ea580c">Tech</tspan>
          </text>
        </g>

        {/* Screen Left Sidebar */}
        <polygon points="46,60 76,60 74,162 36,162" fill="#0f172a" />
        {/* Active Pill on Sidebar */}
        <rect x="42" y="68" width="28" height="6.5" rx="2.5" fill="#ea580c" />
        {/* Inactive Sidebar Lines */}
        <rect x="42" y="80" width="22" height="3" rx="1.5" fill="#334155" />
        <rect x="42" y="88" width="25" height="3" rx="1.5" fill="#334155" />
        <rect x="42" y="96" width="18" height="3" rx="1.5" fill="#334155" />
        <rect x="42" y="104" width="20" height="3" rx="1.5" fill="#334155" />

        {/* Main Dashboard Canvas Area */}
        <line x1="82" y1="84" x2="228" y2="84" stroke="#f1f5f9" strokeWidth="0.8" />
        <line x1="82" y1="104" x2="228" y2="104" stroke="#f1f5f9" strokeWidth="0.8" />
        <line x1="82" y1="124" x2="228" y2="124" stroke="#f1f5f9" strokeWidth="0.8" />

        {/* Orange Trending Upward Curve */}
        <path
          d="M 84 122 Q 105 118, 122 104 T 156 98 T 188 84 T 224 76 L 224 128 L 84 128 Z"
          fill="url(#ctaLapChartGrad)"
        />
        <path
          d="M 84 122 Q 105 118, 122 104 T 156 98 T 188 84 T 224 76"
          stroke="#ea580c"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Glowing Orange Nodes on Vertices */}
        <circle cx="122" cy="104" r="2.8" fill="#ffffff" stroke="#ea580c" strokeWidth="1.8" />
        <circle cx="156" cy="98" r="2.8" fill="#ffffff" stroke="#ea580c" strokeWidth="1.8" />
        <circle cx="188" cy="84" r="2.8" fill="#ffffff" stroke="#ea580c" strokeWidth="1.8" />
        <circle cx="224" cy="76" r="2.8" fill="#ffffff" stroke="#ea580c" strokeWidth="1.8" />

        {/* 3 Dashboard Metric Cards */}
        <g transform="translate(82, 134)">
          {/* Stat 1 */}
          <rect x="0" y="0" width="44" height="22" rx="4" fill="#fff7f0" stroke="#fed7aa" strokeWidth="0.8" />
          <rect x="5" y="4.5" width="20" height="2.5" rx="1.2" fill="#ea580c" />
          <rect x="5" y="11" width="32" height="5" rx="2" fill="#fdba74" />

          {/* Stat 2 */}
          <rect x="49" y="0" width="44" height="22" rx="4" fill="#fff7f0" stroke="#fed7aa" strokeWidth="0.8" />
          <rect x="54" y="4.5" width="20" height="2.5" rx="1.2" fill="#ea580c" />
          <rect x="54" y="11" width="32" height="5" rx="2" fill="#fdba74" />

          {/* Stat 3 */}
          <rect x="98" y="0" width="44" height="22" rx="4" fill="#fff7f0" stroke="#fed7aa" strokeWidth="0.8" />
          <rect x="103" y="4.5" width="20" height="2.5" rx="1.2" fill="#ea580c" />
          <rect x="103" y="11" width="32" height="5" rx="2" fill="#fdba74" />
        </g>

        {/* 4. Propped 3D Smartphone (Right Front) */}
        <g transform="translate(216, 94)">
          {/* Phone Drop Shadow */}
          <rect x="2" y="4" width="58" height="96" rx="11" fill="rgba(0,0,0,0.16)" filter="blur(4px)" />
          {/* Outer Bezel */}
          <rect x="0" y="0" width="58" height="96" rx="10" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" />
          {/* Inner Screen */}
          <rect x="3" y="3" width="52" height="90" rx="8" fill="#ffffff" />
          {/* Dynamic Island / Notch */}
          <rect x="20" y="5" width="18" height="3.5" rx="1.75" fill="#0f172a" />

          {/* Top Banner Card */}
          <rect x="7" y="13" width="44" height="18" rx="4" fill="#ffedd5" />
          <rect x="11" y="18" width="22" height="3" rx="1.5" fill="#ea580c" />
          <rect x="11" y="24" width="30" height="2" rx="1" fill="#fb923c" />

          {/* 2x2 App Grid */}
          <rect x="7" y="36" width="20" height="20" rx="5" fill="#fed7aa" />
          <rect x="31" y="36" width="20" height="20" rx="5" fill="#ffedd5" />
          <rect x="7" y="60" width="20" height="20" rx="5" fill="#ffedd5" />
          <rect x="31" y="60" width="20" height="20" rx="5" fill="#fed7aa" />
        </g>

        {/* 5. Floating Satellite Cube with </> (Left) */}
        <g transform="translate(14, 88)" className="cta-anim-float-cube">
          <rect
            x="0"
            y="0"
            width="38"
            height="38"
            rx="9"
            fill="#ffffff"
            filter="drop-shadow(0 6px 14px rgba(0,0,0,0.12))"
            stroke="rgba(234, 88, 12, 0.22)"
            strokeWidth="1.2"
          />
          <text x="19" y="25" fill="#ea580c" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="monospace">
            &lt;/&gt;
          </text>
        </g>

        {/* 6. Floating Top Right Cloud Badge */}
        <g transform="translate(236, 24)" className="cta-anim-float-cloud">
          <rect
            x="0"
            y="0"
            width="38"
            height="32"
            rx="9"
            fill="#ffffff"
            filter="drop-shadow(0 6px 14px rgba(0,0,0,0.1))"
            stroke="rgba(234, 88, 12, 0.22)"
            strokeWidth="1.2"
          />
          <path
            d="M12 22 H26 A4.5 4.5 0 0 0 26 13 A5.5 5.5 0 0 0 14 14 A4 4 0 0 0 12 22 Z"
            fill="none"
            stroke="#ea580c"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>

        {/* 7. Floating Launch Status Pill (Bottom Center) */}
        <g transform="translate(122, 168)" className="cta-anim-float-badge">
          <rect
            x="0"
            y="0"
            width="94"
            height="23"
            rx="11.5"
            fill="#ffffff"
            filter="drop-shadow(0 4px 10px rgba(0,0,0,0.12))"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
          />
          <circle cx="11.5" cy="11.5" r="6.5" fill="#10b981" />
          <path d="M8.5 11.5 L10.5 13.5 L14.5 9.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="24" y="15" fill="#141518" fontSize="8" fontWeight="750" fontFamily="sans-serif">
            Ready to Launch
          </text>
        </g>
      </svg>
    </div>
  );
}

export default function ProjectCtaSection() {
  const [selectedService, setSelectedService] = useState('consultation');

  return (
    <section className="cta-project-section" aria-label="Project Conversion Call to Action">
      <div className="cta-project-container">
        {/* ==================================================================
            1. DEDICATED MOBILE & TABLET VIEW (< 1024px)
            Matches Reference Image Spec
            ================================================================== */}
        <div className="cta-mobile-flow">
          {/* Top 4 Service Highlight Cards */}
          <div className="cta-mobile-services-grid" role="tablist" aria-label="Service Capabilities">
            {SERVICE_HIGHLIGHTS.map((service) => {
              const IconComp = service.icon;
              const isSelected = selectedService === service.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`cta-mobile-service-card ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => setSelectedService(service.id)}
                  title={`Select ${service.line1} ${service.line2}`}
                >
                  <div className="cta-mobile-service-icon-box" aria-hidden="true">
                    <IconComp size={18} strokeWidth={2.2} />
                  </div>
                  <span className="cta-mobile-service-label">
                    {service.line1}
                    <br />
                    {service.line2}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main Rounded CTA Container */}
          <div className="cta-mobile-main-card">
            {/* Eyebrow */}
            <div className="cta-mobile-eyebrow">
              <span className="cta-mobile-eyebrow-dot" aria-hidden="true" />
              <span>LET&apos;S BUILD SOMETHING GREAT</span>
            </div>

            {/* Heading with Orange Accent & Underline */}
            <h2 className="cta-mobile-heading">
              Have an Idea for Your<br />
              Next{' '}
              <span className="cta-mobile-heading-accent">
                Digital Product?
                <svg
                  viewBox="0 0 170 14"
                  fill="none"
                  className="cta-mobile-heading-underline"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10C50 15 120 14 167 4"
                    stroke="#ea580c"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="cta-mobile-desc">
              Let&apos;s turn your business requirements into a practical, scalable software solution.
            </p>

            {/* Central 3D Illustration */}
            <CtaMobileIllustration />

            {/* Dual Action Buttons */}
            <div className="cta-mobile-btn-group">
              <Link
                href={`/contact?service=${selectedService}`}
                className="cta-mobile-btn-primary"
              >
                <span>Start Your Project</span>
                <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
              </Link>

              <Link href="/portfolio" className="cta-mobile-btn-secondary">
                <span>Explore Projects</span>
              </Link>
            </div>

            {/* Bottom 3 Trust / Value Props */}
            <div className="cta-mobile-trust-bar">
              <div className="cta-mobile-trust-item">
                <div className="cta-mobile-trust-icon-box" aria-hidden="true">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="cta-mobile-trust-label">
                  Tailored<br />Solutions
                </span>
              </div>

              <div className="cta-mobile-trust-divider" aria-hidden="true" />

              <div className="cta-mobile-trust-item">
                <div className="cta-mobile-trust-icon-box" aria-hidden="true">
                  <Users size={14} strokeWidth={2.4} />
                </div>
                <span className="cta-mobile-trust-label">
                  Transparent<br />Communication
                </span>
              </div>

              <div className="cta-mobile-trust-divider" aria-hidden="true" />

              <div className="cta-mobile-trust-item">
                <div className="cta-mobile-trust-icon-box" aria-hidden="true">
                  <InfinityIcon size={15} strokeWidth={2.4} />
                </div>
                <span className="cta-mobile-trust-label">
                  Long-term<br />Partnership
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================
            2. DESKTOP VIEW (>= 1024px) - 100% PRESERVED
            ================================================================== */}
        <div className="cta-desktop-flow">
          {/* FLOATING SERVICE CAPABILITY BAR */}
          <div className="cta-capability-bar" role="list">
            {/* Item 1: Online consultation */}
            <div className="cta-cap-item" role="listitem">
              <div className="cta-cap-icon-box" aria-hidden="true">
                <Laptop size={18} strokeWidth={2.2} />
              </div>
              <div className="cta-cap-text">
                <div className="cta-cap-title">Online consultation</div>
                <div className="cta-cap-sub">Discuss your ideas with our experts</div>
              </div>
            </div>

            <div className="cta-cap-divider" aria-hidden="true"></div>

            {/* Item 2: Full-cycle development */}
            <div className="cta-cap-item" role="listitem">
              <div className="cta-cap-icon-box" aria-hidden="true">
                <Code2 size={18} strokeWidth={2.2} />
              </div>
              <div className="cta-cap-text">
                <div className="cta-cap-title">Full-cycle development</div>
                <div className="cta-cap-sub">From concept to production</div>
              </div>
            </div>

            <div className="cta-cap-divider" aria-hidden="true"></div>

            {/* Item 3: SLA & maintenance */}
            <div className="cta-cap-item" role="listitem">
              <div className="cta-cap-icon-box" aria-hidden="true">
                <ShieldCheck size={18} strokeWidth={2.2} />
              </div>
              <div className="cta-cap-text">
                <div className="cta-cap-title">SLA & maintenance</div>
                <div className="cta-cap-sub">Reliable support and updates</div>
              </div>
            </div>

            <div className="cta-cap-divider" aria-hidden="true"></div>

            {/* Item 4: App Store & Cloud release */}
            <div className="cta-cap-item" role="listitem">
              <div className="cta-cap-icon-box" aria-hidden="true">
                <Smartphone size={18} strokeWidth={2.2} />
              </div>
              <div className="cta-cap-text">
                <div className="cta-cap-title">App Store & Cloud release</div>
                <div className="cta-cap-sub">Launch and scale with confidence</div>
              </div>
            </div>
          </div>

          {/* MAIN EDITORIAL CTA PANEL */}
          <div className="cta-main-panel">
            <div className="cta-panel-ambient-aura" aria-hidden="true"></div>

            {/* LEFT SIDE: Copy & Actions */}
            <div className="cta-content-col">
              <div className="cta-eyebrow-badge">
                <span className="cta-eyebrow-dot" aria-hidden="true"></span>
                LET&apos;S BUILD SOMETHING GREAT
              </div>

              <h2 className="cta-headline">
                <span className="cta-headline-line">Have an Idea for Your</span>
                <span className="cta-headline-line">
                  Next <span className="cta-highlight-orange">Digital Product?</span>
                </span>
              </h2>

              <p className="cta-subtext">
                Let&apos;s turn your business requirements into a practical, scalable software solution.
              </p>

              <div className="cta-actions-row">
                <Link href="/contact" className="cta-btn-primary">
                  Start Your Project
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>

                <Link href="/portfolio" className="cta-btn-secondary">
                  Explore Projects
                </Link>
              </div>

              {/* Bottom Trust Highlights */}
              <div className="cta-trust-row">
                <div className="cta-trust-item">
                  <span className="cta-trust-icon" aria-hidden="true">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span>Tailored Solutions</span>
                </div>

                <div className="cta-trust-item">
                  <span className="cta-trust-icon" aria-hidden="true">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span>Transparent Communication</span>
                </div>

                <div className="cta-trust-item">
                  <span className="cta-trust-icon" aria-hidden="true">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span>Long-term Partnership</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Interactive Visual Composition */}
            <div className="cta-visual-col" aria-hidden="true">
              <div className="cta-visual-wrapper">
                {/* Background Connecting Dotted Curves */}
                <svg className="cta-connector-svg" viewBox="0 0 490 360" fill="none">
                  <path
                    d="M90 280 C 120 220, 160 170, 200 170 C 270 170, 310 100, 360 60"
                    stroke="#ea580c"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.35"
                  />
                  <path
                    d="M260 270 C 310 280, 350 250, 400 230"
                    stroke="#ea580c"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.3"
                  />
                </svg>

                {/* 1. Central Floating Browser / Dashboard */}
                <div className="cta-mock-browser">
                  <div className="cta-browser-header">
                    <div className="cta-browser-dots">
                      <span className="cta-browser-dot red"></span>
                      <span className="cta-browser-dot yellow"></span>
                      <span className="cta-browser-dot green"></span>
                    </div>

                    <div className="cta-browser-brand">
                      <Image
                        src="/icon.png"
                        alt="ProvenanceTech Logo"
                        width={14}
                        height={14}
                        className="cta-browser-brand-logo"
                      />
                      <span>ProvenanceTech</span>
                    </div>
                  </div>

                  <div className="cta-browser-body">
                    {/* Sidebar */}
                    <div className="cta-browser-sidebar">
                      <span className="cta-sidebar-pill active">Dashboard</span>
                      <span className="cta-sidebar-pill muted">Projects</span>
                      <span className="cta-sidebar-pill muted">Analytics</span>
                      <span className="cta-sidebar-pill muted">Team</span>
                      <span className="cta-sidebar-pill muted">Settings</span>
                    </div>

                    {/* Main Dashboard Canvas */}
                    <div className="cta-browser-main">
                      <div className="cta-dashboard-heading-row">
                        <span className="cta-dashboard-title">Your Product</span>
                        <span className="cta-dashboard-badge">Live</span>
                      </div>

                      {/* Chart Area */}
                      <div className="cta-dashboard-chart-box">
                        <svg className="cta-chart-svg" viewBox="0 0 200 52" fill="none">
                          <defs>
                            <linearGradient id="chartGradientDesktop" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 10 38 Q 45 32, 70 24 T 120 20 T 160 14 T 190 8 L 190 52 L 10 52 Z"
                            fill="url(#chartGradientDesktop)"
                          />
                          <path
                            d="M 10 38 Q 45 32, 70 24 T 120 20 T 160 14 T 190 8"
                            stroke="#ea580c"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                          />
                          <circle cx="160" cy="14" r="3.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
                        </svg>
                      </div>

                      {/* 3 Metric Stats */}
                      <div className="cta-dashboard-stats-row">
                        <div className="cta-mini-stat-card">
                          <span className="cta-stat-label">Users</span>
                          <div className="cta-stat-value">
                            2.4K <span className="cta-stat-arrow">↗</span>
                          </div>
                        </div>

                        <div className="cta-mini-stat-card">
                          <span className="cta-stat-label">Revenue</span>
                          <div className="cta-stat-value">
                            12.5K <span className="cta-stat-arrow">↗</span>
                          </div>
                        </div>

                        <div className="cta-mini-stat-card">
                          <span className="cta-stat-label">Growth</span>
                          <div className="cta-stat-value">
                            +18% <span className="cta-stat-arrow">↗</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Top-right: Cloud Deploy Card */}
                <div className="cta-satellite-cloud">
                  <div className="cta-cloud-icon-box">
                    <Cloud size={14} />
                  </div>
                  <div className="cta-cloud-label">Deploy to Cloud</div>
                  <div className="cta-cloud-arrow">→</div>
                </div>

                {/* 3. Right: Floating Smartphone Mockup */}
                <div className="cta-satellite-phone">
                  <div className="cta-phone-notch"></div>
                  <div className="cta-phone-title">Your App</div>
                  <div className="cta-phone-icons-grid">
                    <div className="cta-phone-icon-pill">●</div>
                    <div className="cta-phone-icon-pill">▲</div>
                    <div className="cta-phone-icon-pill">■</div>
                    <div className="cta-phone-icon-pill">★</div>
                    <div className="cta-phone-icon-pill">◆</div>
                    <div className="cta-phone-icon-pill">♥</div>
                  </div>
                  <div className="cta-phone-chart-box">
                    <svg className="cta-phone-chart-svg" viewBox="0 0 60 24" fill="none">
                      <path
                        d="M 2 20 Q 15 16, 25 12 T 45 8 T 58 4"
                        stroke="#ea580c"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* 4. Bottom-right: Launch Status Pill */}
                <div className="cta-satellite-launch">
                  <div className="cta-launch-check">
                    <Check size={10} strokeWidth={3.5} />
                  </div>
                  <div className="cta-launch-text">Ready to Launch</div>
                  <div className="cta-launch-bar"></div>
                </div>

                {/* 5. Bottom-left: Floating Code Panel */}
                <div className="cta-satellite-code">
                  <div className="cta-code-dots">
                    <span className="cta-browser-dot red"></span>
                    <span className="cta-browser-dot yellow"></span>
                    <span className="cta-browser-dot green"></span>
                  </div>
                  <div className="cta-code-line orange"></div>
                  <div className="cta-code-line cyan"></div>
                  <div className="cta-code-line green"></div>
                  <div className="cta-code-line cyan" style={{ width: '60%' }}></div>
                  <div className="cta-code-badge">&lt;/&gt;</div>
                </div>

                {/* 6. Floating Paper Plane Badge */}
                <div className="cta-satellite-plane">
                  <Send size={13} style={{ transform: 'rotate(-15deg)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
