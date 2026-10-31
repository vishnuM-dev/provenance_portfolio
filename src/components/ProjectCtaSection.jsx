'use client';

import React from 'react';
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
} from 'lucide-react';
import './ProjectCtaSection.css';

export default function ProjectCtaSection() {
  return (
    <section className="cta-project-section" aria-label="Project Conversion Call to Action">
      <div className="cta-project-container">
        {/* ==================================================================
            1. FLOATING SERVICE CAPABILITY BAR
            ================================================================== */}
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

        {/* ==================================================================
            2. MAIN EDITORIAL CTA PANEL
            ================================================================== */}
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
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area fill */}
                        <path
                          d="M 10 38 Q 45 32, 70 24 T 120 20 T 160 14 T 190 8 L 190 52 L 10 52 Z"
                          fill="url(#chartGradient)"
                        />
                        {/* Orange Line */}
                        <path
                          d="M 10 38 Q 45 32, 70 24 T 120 20 T 160 14 T 190 8"
                          stroke="#ea580c"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        />
                        {/* Dot on peak */}
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
    </section>
  );
}

