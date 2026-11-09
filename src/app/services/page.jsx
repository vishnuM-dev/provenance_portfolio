import Link from 'next/link';
import '@/components/ServicesPage.css';
import ServicesOverviewSection from '@/components/ServicesOverviewSection';
import TechStackMobileSection from '@/components/TechStackMobileSection';
import ServicesProcessRoadmap from '@/components/ServicesProcessRoadmap';
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
      {/* 2. SERVICES OVERVIEW (INTERACTIVE ACCORDION & SCROLL GRID)*/}
      {/* ========================================================= */}
      <ServicesOverviewSection />

      {/* ========================================================= */}
      {/* 3. END-TO-END DEVELOPMENT ARCHITECTURE / TECH STACK       */}
      {/* ========================================================= */}
      <section className="sp-e2e-section">
        {/* Desktop & Tablet Layout (>= 768px) */}
        <div className="sp-e2e-desktop-view">
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
                    <div className="sp-storage-visual">
                      <div className="sp-storage-icon-box">
                        <Box size={16} color="#ea580c" />
                      </div>
                      <div className="sp-storage-pills">
                        <span className="sp-storage-tag">S3 Buckets</span>
                        <span className="sp-storage-tag">Global CDN</span>
                      </div>
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
      </div>

        {/* Mobile View Only (320px - 767px): Redesigned Tech Stack Cards */}
        <div className="sp-e2e-mobile-view">
          <div className="sp-container">
            <TechStackMobileSection />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. HOW WE DELIVER (INTERACTIVE ANIMATED TIMELINE ROADMAP) */}
      {/* ========================================================= */}
      <ServicesProcessRoadmap />

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
