import Link from 'next/link';
import '@/components/ServicesPage.css';
import {
  Globe,
  Smartphone,
  Code2,
  Layers,
  Palette,
  Database,
  LifeBuoy,
  Terminal,
  ArrowRight,
  ArrowDown,
  Sparkles,
  CheckCircle2,
  Cloud,
  Server,
  Check,
  Compass,
  FileText,
  Lightbulb,
  Rocket,
  Shield,
  Bell,
  Search,
  Plus,
  FolderGit2,
  Users,
  Box,
  HardDrive,
  Layout
} from 'lucide-react';

export const metadata = {
  title: 'Our Software Development Services | ProvenanceTech',
  description: 'Explore ProvenanceTech software engineering services: Web Application Development, Mobile Applications, Custom Software, Full-Stack Engineering, UI/UX Design, Cloud Solutions, Maintenance, and DevOps.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'web-dev',
      num: '01',
      title: 'Web Application Development',
      tagline: 'Modern Web Platforms & Dashboards',
      description: 'Build responsive websites, customer portals, dashboards, and modern web applications tailored to your business needs.',
      isPrimary: true,
      icon: (
        <svg viewBox="0 0 32 32" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="5" width="26" height="22" rx="4" stroke="#ea580c" strokeWidth="2.2" />
          <line x1="3" y1="11" x2="29" y2="11" stroke="#ea580c" strokeWidth="1.8" />
          <circle cx="7" cy="8" r="1.2" fill="#ea580c" />
          <circle cx="11" cy="8" r="1.2" fill="#ea580c" />
          <path d="M12 17L9.5 19.5L12 22M20 17L22.5 19.5L20 22M17 16L15 23" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'mobile-dev',
      num: '02',
      title: 'Mobile Application Development',
      tagline: 'Cross-Platform iOS & Android Solutions',
      description: 'Create intuitive mobile experiences for Android and iOS using modern cross-platform development technologies.',
      icon: (
        <svg viewBox="0 0 32 32" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="8" y="4" width="16" height="24" rx="4" stroke="#ea580c" strokeWidth="2.2" />
          <circle cx="16" cy="23" r="1.5" fill="#ea580c" />
          <line x1="13" y1="7" x2="19" y2="7" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'custom-software',
      num: '03',
      title: 'Custom Software Development',
      tagline: 'Tailored Business & Operational Systems',
      description: 'Develop tailored software that streamlines business processes, improves productivity, and addresses specific operational challenges.',
      icon: (
        <svg viewBox="0 0 32 32" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M11 9L4 16L11 23M21 9L28 16L21 23M19 7L13 25" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'fullstack-dev',
      num: '04',
      title: 'Full-Stack Development',
      tagline: 'End-to-End Application Architecture',
      description: 'Connect intuitive user interfaces with secure backend architectures, efficient route handlers, and scalable databases.',
      icon: <Layers size={22} strokeWidth={2.3} />,
    },
    {
      id: 'ui-ux',
      num: '05',
      title: 'UI/UX Design',
      tagline: 'User-Centered Interfaces & Design Systems',
      description: 'Design clear, intuitive user experiences through research, wireframing, high-fidelity prototypes, and cohesive design systems.',
      icon: <Palette size={22} strokeWidth={2.3} />,
    },
    {
      id: 'cloud-db',
      num: '06',
      title: 'Database & Cloud Solutions',
      tagline: 'Structured Data Storage & Cloud Delivery',
      description: 'Model data schemas and implement cloud storage architectures that keep business information reliable, secure, and accessible.',
      icon: <Database size={22} strokeWidth={2.3} />,
    },
    {
      id: 'support-maintenance',
      num: '07',
      title: 'Maintenance & Support',
      tagline: 'Ongoing Reliability & Technical Iteration',
      description: 'Ensure ongoing software stability, security updates, dependency maintenance, and feature enhancements after launch.',
      icon: <Shield size={22} strokeWidth={2.3} />,
    },
    {
      id: 'devops-deploy',
      num: '08',
      title: 'Deployment & DevOps',
      tagline: 'Predictable Builds & Release Pipelines',
      description: 'Establish automated build pipelines, containerized environments, and cloud infrastructure for predictable releases.',
      icon: (
        <svg viewBox="0 0 32 32" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M7 11L13 16L7 21M16 21H25" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      desc: 'Understand business goals, user requirements, technical feasibility, and project roadmap.',
      icon: <Lightbulb size={20} />,
      highlight: false,
    },
    {
      step: '02',
      title: 'Design & Architecture',
      desc: 'Define data models, system architecture, user journeys, wireframes, and design components.',
      icon: <FileText size={20} />,
      highlight: false,
    },
    {
      step: '03',
      title: 'Development & Integration',
      desc: 'Build frontend interfaces, backend endpoints, and third-party integrations using modern engineering practices.',
      icon: <Code2 size={20} />,
      highlight: true,
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      desc: 'Verify functional correctness, cross-device responsiveness, security considerations, and edge cases.',
      icon: <CheckCircle2 size={20} />,
      highlight: false,
    },
    {
      step: '05',
      title: 'Deployment & Support',
      desc: 'Deploy the solution to production, verify configuration, document the release, and provide agreed ongoing support.',
      icon: <Rocket size={20} />,
      highlight: false,
    },
  ];

  return (
    <div className="sp-page-wrapper">
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="sp-hero-section">
        <div className="sp-container">
          <div className="sp-hero-grid">
            {/* Left Content */}
            <div className="sp-hero-content">
              <div className="sp-badge">
                <Sparkles size={14} className="sp-badge-icon" />
                <span>Our Services</span>
              </div>

              <h1 className="sp-hero-title">
                We Build Digital<br />
                Solutions That Move<br />
                Businesses Forward.
              </h1>

              <p className="sp-hero-desc">
                From modern web applications to mobile solutions and custom software, we help businesses turn ideas into reliable, scalable digital products.
              </p>

              <div className="sp-hero-actions">
                <Link href="/contact" className="sp-btn-primary">
                  <span>Discuss Your Project</span>
                  <ArrowRight size={15} />
                </Link>

                <a href="#services-overview" className="sp-btn-secondary">
                  <span>Explore Our Services</span>
                  <ArrowDown size={14} />
                </a>
              </div>
            </div>

            {/* Right Showcase Dashboard Graphic */}
            <div className="sp-hero-showcase">
              <div className="sp-showcase-stage">
                {/* Floating Badges */}
                <div className="sp-float-badge sp-float-badge-top-left" aria-hidden="true">
                  <Code2 size={20} />
                </div>
                <div className="sp-float-badge sp-float-badge-top-right" aria-hidden="true">
                  <Cloud size={20} />
                </div>
                <div className="sp-float-badge sp-float-badge-bottom" aria-hidden="true">
                  <Database size={20} />
                </div>

                {/* Main Dashboard Window */}
                <div className="sp-main-dashboard">
                  {/* Dashboard Header Bar */}
                  <div className="sp-dash-header">
                    <span className="sp-dash-title">Dashboard</span>
                    <div className="sp-dash-controls">
                      <div className="sp-dash-pill" />
                      <div className="sp-dash-avatar" />
                    </div>
                  </div>

                  {/* Dashboard Metrics */}
                  <div className="sp-dash-body">
                    <div className="sp-dash-stats-row">
                      <div className="sp-dash-stat-box">
                        <div className="sp-dash-stat-label">Total Users</div>
                        <div className="sp-dash-stat-val">
                          <span>2,548</span>
                          <span className="sp-dash-stat-growth">▲ +12%</span>
                        </div>
                      </div>

                      <div className="sp-dash-stat-box">
                        <div className="sp-dash-stat-label">Active Projects</div>
                        <div className="sp-dash-stat-val">
                          <span>12</span>
                          <span className="sp-dash-stat-growth">▲ +23</span>
                        </div>
                      </div>

                      <div className="sp-dash-stat-box">
                        <div className="sp-dash-stat-label">Revenue</div>
                        <div className="sp-dash-stat-val">
                          <span>$24,780</span>
                          <span className="sp-dash-stat-growth">▲ +18%</span>
                        </div>
                      </div>
                    </div>

                    {/* Analytics Chart SVG Graphic */}
                    <div className="sp-dash-chart-card">
                      <svg className="sp-dash-chart-svg" viewBox="0 0 320 60" fill="none" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Dashed Grid Lines */}
                        <line x1="0" y1="15" x2="320" y2="15" stroke="#f0e6dc" strokeDasharray="3 3" />
                        <line x1="0" y1="35" x2="320" y2="35" stroke="#f0e6dc" strokeDasharray="3 3" />
                        <line x1="0" y1="55" x2="320" y2="55" stroke="#f0e6dc" strokeDasharray="3 3" />
                        {/* Area Fill */}
                        <path
                          d="M 0 45 Q 40 48, 80 32 T 160 22 T 240 38 T 320 18 L 320 60 L 0 60 Z"
                          fill="url(#chartGrad)"
                        />
                        {/* Curve Stroke */}
                        <path
                          d="M 0 45 Q 40 48, 80 32 T 160 22 T 240 38 T 320 18"
                          fill="none"
                          stroke="#ea580c"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* Activity Log */}
                    <div className="sp-dash-activity-title">Recent Activity</div>
                    <div className="sp-dash-activity-item">
                      <div>
                        <span className="sp-dash-dot" />
                        <span>New user registered</span>
                      </div>
                      <span style={{ color: '#9c8e80' }}>2m ago</span>
                    </div>
                    <div className="sp-dash-activity-item">
                      <div>
                        <span className="sp-dash-dot" />
                        <span>Project updated</span>
                      </div>
                      <span style={{ color: '#9c8e80' }}>12m ago</span>
                    </div>
                    <div className="sp-dash-activity-item">
                      <div>
                        <span className="sp-dash-dot" />
                        <span>Deployment successful</span>
                      </div>
                      <span style={{ color: '#9c8e80' }}>1h ago</span>
                    </div>
                  </div>
                </div>

                {/* Overlapping Floating Code Card (bottom-left) */}
                <div className="sp-float-code-card">
                  <div className="sp-code-dots">
                    <div className="sp-code-dot" style={{ background: '#ef4444' }} />
                    <div className="sp-code-dot" style={{ background: '#f59e0b' }} />
                    <div className="sp-code-dot" style={{ background: '#10b981' }} />
                  </div>
                  <pre className="sp-code-text">
                    <code>
                      <span className="sp-code-keyword">import</span> &#123; NextResponse &#125; <span className="sp-code-keyword">from</span> <span className="sp-code-string">&apos;next/server&apos;</span>;<br /><br />
                      <span className="sp-code-keyword">export async function</span> <span className="sp-code-func">GET</span>() &#123;<br />
                      &nbsp;&nbsp;<span className="sp-code-keyword">return</span> NextResponse.<span className="sp-code-func">json</span>(&#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;message: <span className="sp-code-string">&quot;Build, Scale, Grow&quot;</span><br />
                      &nbsp;&nbsp;&#125;);<br />
                      &#125;
                    </code>
                  </pre>
                </div>

                {/* Overlapping Floating Mobile Phone Preview (right) */}
                <div className="sp-float-phone-card">
                  <div className="sp-phone-notch" />
                  <div className="sp-phone-title">Let&apos;s build something great.</div>
                  <div className="sp-phone-widget">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <FolderGit2 size={11} color="#ea580c" />
                      <span>Projects</span>
                    </span>
                    <span style={{ color: '#ea580c', fontWeight: 700 }}>12 active</span>
                  </div>
                  <div className="sp-phone-widget">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <CheckCircle2 size={11} color="#2563eb" />
                      <span>Tasks</span>
                    </span>
                    <span>24 pending</span>
                  </div>
                  <div className="sp-phone-widget">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Users size={11} color="#8b5cf6" />
                      <span>Team</span>
                    </span>
                    <span>8 members</span>
                  </div>
                  <div className="sp-phone-fab">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SERVICES OVERVIEW (ASYMMETRICAL 8-SERVICES GRID)       */}
      {/* ========================================================= */}
      <section id="services-overview" className="sp-services-section">
        {/* Background Ambient Flow Curves */}
        <div className="sp-services-silk-bg" aria-hidden="true">
          <svg className="sp-services-silk-left" viewBox="0 0 460 360" fill="none">
            <path
              d="M-80 300 C 60 250, 160 160, 240 60 C 280 5, 360 -5, 460 40"
              stroke="url(#sp-silk-grad-left)"
              strokeWidth="2.5"
              opacity="0.8"
            />
            <path
              d="M-100 330 C 40 280, 140 200, 220 110 C 270 45, 340 35, 440 85"
              fill="url(#sp-silk-fill-left)"
              opacity="0.45"
            />
            <defs>
              <linearGradient id="sp-silk-grad-left" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="sp-silk-fill-left" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ffedd5" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <svg className="sp-services-silk-right" viewBox="0 0 460 360" fill="none">
            <path
              d="M540 60 C 400 140, 310 210, 210 300 C 160 340, 80 350, -20 320"
              stroke="url(#sp-silk-grad-right)"
              strokeWidth="2.5"
              opacity="0.8"
            />
            <path
              d="M560 30 C 420 110, 330 180, 230 270 C 180 310, 100 320, 0 290"
              fill="url(#sp-silk-fill-right)"
              opacity="0.45"
            />
            <defs>
              <linearGradient id="sp-silk-grad-right" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="sp-silk-fill-right" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ffedd5" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Global linear gradient for bottom card waves */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            <linearGradient id="sp-wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.35" />
            </linearGradient>
          </defs>
        </svg>

        <div className="sp-container">
          {/* Section Header */}
          <div className="sp-section-header">
            <div className="sp-badge">
              <Layers size={14} className="sp-badge-icon" />
              <span>CAPABILITIES &amp; EXPERTISE</span>
            </div>

            <h2 className="sp-section-title">
              Comprehensive Software<br />
              <span className="sp-title-highlight">
                Engineering
                <svg className="sp-title-swoosh" viewBox="0 0 210 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4 14C60 5 150 5 206 14" stroke="#ea580c" strokeWidth="3.6" strokeLinecap="round" />
                </svg>
              </span>
              <span className="sp-title-whiskers" aria-hidden="true">
                <span className="sp-whisker sp-w1" />
                <span className="sp-whisker sp-w2" />
                <span className="sp-whisker sp-w3" />
              </span>
            </h2>

            <p className="sp-section-subtitle">
              From initial user experience design to production release, we deliver focused engineering services tailored to your technical requirements.
            </p>
          </div>

          {/* Top Row: 3 Wide Horizontal Flagship Cards */}
          <div className="sp-services-top-row">
            {services.slice(0, 3).map((srv) => (
              <div
                key={srv.id}
                className={`sp-service-card sp-service-card-wide ${srv.isPrimary ? 'sp-service-card-primary' : ''}`}
              >
                {/* Top-Right Number Crest */}
                <div className="sp-card-corner-crest">{srv.num}</div>

                {/* Top Row: Icon Stage + Title/Tagline */}
                <div className="sp-card-wide-header">
                  <div className="sp-card-icon-stage">
                    <div className="sp-card-icon-backplate" aria-hidden="true" />
                    <div className="sp-card-icon-frontplate">
                      {srv.icon}
                    </div>
                  </div>
                  <div className="sp-card-wide-info">
                    <h3 className="sp-card-title">{srv.title}</h3>
                    <div className="sp-card-tagline">{srv.tagline}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="sp-card-desc">{srv.description}</p>

                {/* Decorative Bottom Wave Accent */}
                <div className="sp-card-bottom-wave" aria-hidden="true">
                  <svg viewBox="0 0 180 80" preserveAspectRatio="none" fill="none">
                    <path d="M0 80 C 40 60, 90 65, 180 15 L 180 80 Z" fill="url(#sp-wave-grad)" opacity="0.45" />
                    <path d="M20 80 C 70 70, 120 55, 180 30 L 180 80 Z" fill="url(#sp-wave-grad)" opacity="0.65" />
                    <path d="M0 80 C 50 62, 100 66, 180 15" stroke="rgba(234, 88, 12, 0.25)" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Bottom-Right Circular Arrow Button */}
                <Link
                  href="/contact"
                  className={`sp-card-arrow-circle ${srv.isPrimary ? 'sp-card-arrow-primary' : ''}`}
                  aria-label={`Discuss ${srv.title}`}
                >
                  <ArrowRight size={14} strokeWidth={2.4} />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Row: 5 Specialized Vertical Compact Cards */}
          <div className="sp-services-bottom-row">
            {services.slice(3, 8).map((srv) => (
              <div key={srv.id} className="sp-service-card sp-service-card-compact">
                {/* Top-Right Number Crest */}
                <div className="sp-card-corner-crest">{srv.num}</div>

                {/* Top Icon Stage */}
                <div className="sp-card-compact-icon-wrap">
                  <div className="sp-card-icon-stage sp-card-icon-stage-compact">
                    <div className="sp-card-icon-backplate" aria-hidden="true" />
                    <div className="sp-card-icon-frontplate">
                      {srv.icon}
                    </div>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="sp-card-title sp-card-title-compact">{srv.title}</h3>
                <div className="sp-card-tagline sp-card-tagline-compact">{srv.tagline}</div>

                {/* Description */}
                <p className="sp-card-desc sp-card-desc-compact">{srv.description}</p>

                {/* Decorative Bottom Wave Accent */}
                <div className="sp-card-bottom-wave" aria-hidden="true">
                  <svg viewBox="0 0 140 70" preserveAspectRatio="none" fill="none">
                    <path d="M0 70 C 30 52, 70 56, 140 12 L 140 70 Z" fill="url(#sp-wave-grad)" opacity="0.45" />
                    <path d="M15 70 C 50 62, 90 48, 140 24 L 140 70 Z" fill="url(#sp-wave-grad)" opacity="0.65" />
                    <path d="M0 70 C 35 53, 75 58, 140 12" stroke="rgba(234, 88, 12, 0.25)" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Bottom-Right Circular Arrow Button */}
                <Link
                  href="/contact"
                  className="sp-card-arrow-circle"
                  aria-label={`Discuss ${srv.title}`}
                >
                  <ArrowRight size={13} strokeWidth={2.4} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. END-TO-END DEVELOPMENT ARCHITECTURE                    */}
      {/* ========================================================= */}
      <section className="sp-e2e-section">
        <div className="sp-container">
          <div className="sp-e2e-grid">
            {/* Left Content */}
            <div className="sp-e2e-content">
              <div className="sp-badge">
                <Code2 size={14} className="sp-badge-icon" />
                <span>End-to-End Development</span>
              </div>

              <h2 className="sp-e2e-title">
                From Frontend to Deployment<br />
                Everything Connected
              </h2>

              <p className="sp-e2e-desc">
                We build complete software solutions by connecting intuitive user interfaces with robust backend systems, secure databases, and reliable deployment pipelines.
              </p>

              <div className="sp-e2e-checklist">
                <div className="sp-e2e-check-item">
                  <span className="sp-check-circle"><Check size={12} strokeWidth={3} /></span>
                  <span>Seamless frontend and backend integration</span>
                </div>
                <div className="sp-e2e-check-item">
                  <span className="sp-check-circle"><Check size={12} strokeWidth={3} /></span>
                  <span>Secure API design and third-party service connections</span>
                </div>
                <div className="sp-e2e-check-item">
                  <span className="sp-check-circle"><Check size={12} strokeWidth={3} /></span>
                  <span>Scalable databases and cloud infrastructure</span>
                </div>
                <div className="sp-e2e-check-item">
                  <span className="sp-check-circle"><Check size={12} strokeWidth={3} /></span>
                  <span>Automated deployment and monitoring</span>
                </div>
              </div>

              <Link href="/contact" className="sp-btn-primary">
                <span>Discuss Your Project</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right Connected Architecture Diagram */}
            <div className="sp-arch-card">
              <div className="sp-arch-diagram">
                {/* Top Tier: Frontend <---> API <---> Backend */}
                <div className="sp-arch-top-tier">
                  {/* Frontend Node */}
                  <div className="sp-node-box">
                    <div className="sp-node-header">
                      <Layout size={16} color="#ea580c" />
                      <div>
                        <div className="sp-node-title">Frontend</div>
                        <div className="sp-node-sub">Next.js / React</div>
                      </div>
                    </div>
                    <div className="sp-ui-wireframe">
                      <div className="sp-wire-bar" />
                      <div className="sp-wire-row">
                        <div className="sp-wire-block" />
                        <div className="sp-wire-block" />
                      </div>
                    </div>
                  </div>

                  {/* Central API Hub */}
                  <div className="sp-api-hub">
                    API
                  </div>

                  {/* Backend Node */}
                  <div className="sp-node-box">
                    <div className="sp-node-header">
                      <Server size={16} color="#ea580c" />
                      <div>
                        <div className="sp-node-title">Backend</div>
                        <div className="sp-node-sub">API &amp; Server Logic</div>
                      </div>
                    </div>
                    <div className="sp-backend-code">
                      <span style={{ color: '#f472b6' }}>export async function</span> POST() &#123;<br />
                      &nbsp;&nbsp;<span style={{ color: '#6b7280' }}>&#47;&#47; validate request</span><br />
                      &nbsp;&nbsp;<span style={{ color: '#6b7280' }}>&#47;&#47; process data</span><br />
                      &nbsp;&nbsp;<span style={{ color: '#6b7280' }}>&#47;&#47; return response</span><br />
                      &#125;
                    </div>
                  </div>
                </div>

                {/* Bottom Tier: Database | Cloud Storage | Deployment */}
                <div className="sp-arch-bottom-tier">
                  {/* Database Node */}
                  <div className="sp-node-box">
                    <div className="sp-node-header">
                      <Database size={16} color="#ea580c" />
                      <div>
                        <div className="sp-node-title">Database</div>
                        <div className="sp-node-sub">MySQL / PostgreSQL / DynamoDB</div>
                      </div>
                    </div>
                    <div className="sp-db-visual">
                      <div className="sp-db-cylinders">
                        <div className="sp-cylinder" />
                        <div className="sp-cylinder" />
                        <div className="sp-cylinder" />
                      </div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ height: '6px', background: '#ebd9c8', borderRadius: '2px', width: '85%' }} />
                        <div style={{ height: '6px', background: '#ebd9c8', borderRadius: '2px', width: '60%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Cloud Storage Node */}
                  <div className="sp-node-box">
                    <div className="sp-node-header">
                      <Cloud size={16} color="#ea580c" />
                      <div>
                        <div className="sp-node-title">Cloud Storage</div>
                        <div className="sp-node-sub">AWS S3 / Cloudinary</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '36px', background: '#faf7f2', borderRadius: '6px' }}>
                      <Box size={22} color="#ea580c" />
                    </div>
                  </div>

                  {/* Deployment Node */}
                  <div className="sp-node-box">
                    <div className="sp-node-header">
                      <Terminal size={16} color="#ea580c" />
                      <div>
                        <div className="sp-node-title">Deployment</div>
                        <div className="sp-node-sub">Docker / CI-CD</div>
                      </div>
                    </div>
                    <div className="sp-deploy-list">
                      <div className="sp-deploy-item">
                        <Check size={11} className="sp-green-check" strokeWidth={3} />
                        <span>Build</span>
                      </div>
                      <div className="sp-deploy-item">
                        <Check size={11} className="sp-green-check" strokeWidth={3} />
                        <span>Test</span>
                      </div>
                      <div className="sp-deploy-item">
                        <Check size={11} className="sp-green-check" strokeWidth={3} />
                        <span>Deploy</span>
                      </div>
                      <div className="sp-deploy-item">
                        <Check size={11} className="sp-green-check" strokeWidth={3} />
                        <span>Monitor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. HOW WE DELIVER (5-STEP PROCESS TIMELINE)               */}
      {/* ========================================================= */}
      <section className="sp-delivery-section">
        <div className="sp-container">
          {/* Section Header */}
          <div className="sp-section-header">
            <div className="sp-badge">
              <Rocket size={14} className="sp-badge-icon" />
              <span>How We Deliver</span>
            </div>

            <h2 className="sp-section-title">
              A Clear Process From Idea to Launch
            </h2>

            <p className="sp-section-subtitle">
              Our structured development methodology ensures clear communication, predictable milestones, and reliable software delivery.
            </p>
          </div>

          {/* 5-Step Horizontal Timeline Track */}
          <div className="sp-timeline-track">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`sp-step-card ${step.highlight ? 'sp-step-card-highlight' : ''}`}
              >
                <div className="sp-step-icon-wrap">
                  {step.icon}
                </div>

                <div className="sp-step-num">{step.step}</div>
                <h3 className="sp-step-title">{step.title}</h3>
                <p className="sp-step-desc">{step.desc}</p>

                {/* Connecting arrow line on desktop (except for the last item) */}
                {index < processSteps.length - 1 && (
                  <div className="sp-step-connector" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FINAL CALL TO ACTION (BEFORE FOOTER)                   */}
      {/* ========================================================= */}
      <section className="sp-final-cta-section">
        <div className="sp-container">
          <div className="sp-final-cta-card">
            {/* Decorative Ambient Rings */}
            <div className="sp-cta-rings" aria-hidden="true" />
            <div className="sp-cta-rings-inner" aria-hidden="true" />

            {/* Left Content */}
            <div className="sp-cta-content">
              <div className="sp-badge" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                <Sparkles size={14} className="sp-badge-icon" />
                <span>Start The Conversation</span>
              </div>

              <h2 className="sp-cta-title">
                Ready to Build Your Next Software Solution?
              </h2>

              <p className="sp-cta-desc">
                Tell us about your requirements, project scope, or technical challenges. Our engineering team is ready to help you plan the right digital solution.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="sp-cta-btn-wrap">
              <Link href="/contact" className="sp-cta-large-btn">
                <span>Discuss Your Project</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
