import Link from 'next/link';
import '@/components/BlogPage.css';
import {
  ArrowRight,
  Code2,
  Cloud,
  BarChart2,
  Target,
  Shield,
  Users,
  FileText,
  PenTool,
  Rocket,
  Calendar,
  Clock,
  Sparkles,
  Check,
  CheckCircle2,
  TrendingUp,
  Server,
  Layers,
  Terminal,
  Activity,
  Cpu
} from 'lucide-react';

export const metadata = {
  title: 'Blog & Engineering Insights | ProvenanceTech',
  description: 'Inside ProvenanceTech: Perspectives on building reliable software, Next.js web performance, AWS cloud architecture, CI/CD, and quality-driven engineering.',
};

export default function BlogPage() {
  const articles = [
    {
      id: 'web-performance-impact',
      category: 'Next.js & Performance',
      readTime: '6 min read',
      date: 'Oct 24, 2026',
      title: 'How We Improve Web Performance for Real Business Impact',
      summary: 'Practical techniques we use to optimize Next.js applications and deliver faster, more reliable web experiences.',
      type: 'performance',
    },
    {
      id: 'reliable-cloud-infrastructure',
      category: 'AWS & Infrastructure',
      readTime: '8 min read',
      date: 'Oct 18, 2026',
      title: 'Building Reliable Cloud Infrastructure for Growing Products',
      summary: 'How we design scalable, secure, and cost-effective cloud infrastructure using AWS best practices.',
      type: 'cloud',
    },
    {
      id: 'practical-devops-delivery',
      category: 'DevOps & CI/CD',
      readTime: '7 min read',
      date: 'Oct 12, 2026',
      title: 'Practical DevOps for Faster, Safer Software Delivery',
      summary: 'A real-world look at how we use automated testing, CI/CD pipelines, and monitoring to deliver software with confidence.',
      type: 'devops',
    },
    {
      id: 'cross-platform-react-native',
      category: 'Mobile Engineering',
      readTime: '5 min read',
      date: 'Oct 05, 2026',
      title: 'Native-Grade Fluidity in Mobile Apps: Cross-Platform Performance',
      summary: 'Eliminating bridge bottlenecks and rendering delays with modern cross-platform mobile architecture and micro-animations.',
      type: 'mobile',
    },
    {
      id: 'security-zero-trust',
      category: 'Security & Cloud',
      readTime: '6 min read',
      date: 'Sep 22, 2026',
      title: 'Security-First Software Architecture: Zero Trust & Compliance',
      summary: 'Implementing cryptographic verification, end-to-end data encryption, and role-based access control for enterprise workloads.',
      type: 'security',
    },
    {
      id: 'luxury-ui-ux-design-systems',
      category: 'UI/UX & Products',
      readTime: '5 min read',
      date: 'Sep 10, 2026',
      title: 'Designing Intuitive Digital Experiences: UI/UX & Design Systems',
      summary: 'Why coherent typographic rhythm, purposeful micro-interactions, and design systems elevate brand trust and accelerate conversion.',
      type: 'design',
    },
  ];

  return (
    <div className="bp-page-wrapper">
      {/* ========================================================= */}
      {/* SECTION A: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="bp-hero-section">
        <div className="bp-container">
          <div className="bp-hero-grid">
            {/* Left Content */}
            <div className="bp-hero-content">
              <div className="bp-badge">
                <Code2 size={14} className="bp-badge-icon" />
                <span>Inside ProvenanceTech</span>
              </div>

              <h1 className="bp-hero-title">
                Engineering <span className="bp-hero-title-accent">Better</span><br />
                <span className="bp-hero-title-accent">Digital Experiences.</span>
              </h1>

              <p className="bp-hero-desc">
                We share insights from our engineering team, real-world experiences, and practical knowledge on building reliable software with thoughtful design and dependable cloud delivery.
              </p>

              <div className="bp-hero-actions">
                <a href="#insights" className="bp-btn-primary">
                  <span>Explore Our Work</span>
                  <ArrowRight size={15} />
                </a>

                <a href="#our-perspective" className="bp-btn-secondary">
                  <span>Meet Our Approach</span>
                </a>
              </div>
            </div>

            {/* Right Showcase Graphic */}
            <div className="bp-hero-showcase">
              <div className="bp-showcase-stage">
                {/* Floating Badges */}
                <div className="bp-float-badge bp-float-badge-cloud" aria-hidden="true">
                  <Cloud size={20} />
                </div>
                <div className="bp-float-badge bp-float-badge-chart" aria-hidden="true">
                  <TrendingUp size={18} />
                </div>

                {/* Main Window Mockup */}
                <div className="bp-hero-window">
                  {/* Header Bar */}
                  <div className="bp-window-header">
                    <div className="bp-window-dots">
                      <span className="bp-dot bp-dot-orange" />
                      <span className="bp-dot" />
                      <span className="bp-dot" />
                    </div>
                    <div style={{ width: '40px', height: '6px', background: '#ebd9c8', borderRadius: '3px' }} />
                  </div>

                  {/* Window Layout */}
                  <div className="bp-window-inner">
                    {/* Dark Sidebar */}
                    <div className="bp-window-sidebar">
                      <div className="bp-sidebar-icon">
                        <Code2 size={16} />
                      </div>
                      <div className="bp-sidebar-nav-bars">
                        <div className="bp-sidebar-bar active" />
                        <div className="bp-sidebar-bar" />
                        <div className="bp-sidebar-bar" />
                        <div className="bp-sidebar-bar" />
                      </div>
                    </div>

                    {/* Window Main Area */}
                    <div className="bp-window-body">
                      {/* Featured Editorial Banner */}
                      <div className="bp-hero-feature-card">
                        <div>
                          <div className="bp-hfc-title">Ideas. Architecture.<br />Real Solutions.</div>
                          <div className="bp-hfc-sub">Engineering insights, tutorials, and stories from our team.</div>
                          <div className="bp-hfc-btn">
                            <ArrowRight size={12} />
                          </div>
                        </div>
                        <div className="bp-hfc-illustration">
                          <div className="bp-hfc-geom-block" />
                        </div>
                      </div>

                      {/* Mini cards row */}
                      <div className="bp-mini-cards-row">
                        <div className="bp-mini-card">
                          <span className="bp-mini-tag" />
                          <div className="bp-mini-line" style={{ width: '85%' }} />
                          <div className="bp-mini-line" style={{ width: '60%' }} />
                        </div>
                        <div className="bp-mini-card">
                          <span className="bp-mini-tag" style={{ background: '#f59e0b' }} />
                          <div className="bp-mini-line" style={{ width: '75%' }} />
                          <div className="bp-mini-line" style={{ width: '50%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlapping Floating Code Card (bottom-left) */}
                <div className="bp-float-code-card">
                  <div className="bp-code-dots">
                    <div className="bp-code-dot" style={{ background: '#ef4444' }} />
                    <div className="bp-code-dot" style={{ background: '#f59e0b' }} />
                    <div className="bp-code-dot" style={{ background: '#10b981' }} />
                  </div>
                  <pre className="bp-code-text">
                    <code>
                      <span className="bp-code-keyword">export async function</span> <span className="bp-code-func">getPosts</span>() &#123;<br />
                      &nbsp;&nbsp;<span className="bp-code-keyword">return</span> <span className="bp-code-func">fetch</span>(<span className="bp-code-string">&apos;/api/blog&apos;</span>)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;.<span className="bp-code-func">then</span>(res =&gt; res.<span className="bp-code-func">json</span>())<br />
                      &#125;
                    </code>
                  </pre>
                </div>

                {/* Overlapping Floating Card (bottom-right) */}
                <div className="bp-float-together-card">
                  <div className="bp-together-title">Engineering Better Products Together</div>
                  <div className="bp-together-skeleton">
                    <div className="bp-together-bar" style={{ width: '90%' }} />
                    <div className="bp-together-bar" style={{ width: '70%' }} />
                    <div className="bp-together-bar" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION B: WHAT WE BELIEVE IN                             */}
      {/* ========================================================= */}
      <section id="our-perspective" className="bp-believe-section">
        <div className="bp-container">
          <div className="bp-section-header">
            <div className="bp-badge">
              <Sparkles size={14} className="bp-badge-icon" />
              <span>Our Perspective</span>
            </div>

            <h2 className="bp-section-title">
              What We Believe In
            </h2>

            <p className="bp-section-subtitle">
              These principles guide how we build products, work with clients, and share knowledge across our engineering team.
            </p>
          </div>

          <div className="bp-believe-grid">
            {/* Card 1 */}
            <div className="bp-believe-card">
              <div className="bp-believe-icon-wrap">
                <Target size={24} strokeWidth={2.2} />
              </div>
              <h3 className="bp-believe-title">Build With Purpose</h3>
              <p className="bp-believe-desc">
                We focus on solving real business problems with software that creates meaningful and measurable impact.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bp-believe-card">
              <div className="bp-believe-icon-wrap">
                <Shield size={24} strokeWidth={2.2} />
              </div>
              <h3 className="bp-believe-title">Reliability By Design</h3>
              <p className="bp-believe-desc">
                We design and build with performance, security, and scalability in mind from day one.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bp-believe-card">
              <div className="bp-believe-icon-wrap">
                <Users size={24} strokeWidth={2.2} />
              </div>
              <h3 className="bp-believe-title">Partnership That Lasts</h3>
              <p className="bp-believe-desc">
                We believe in transparent communication, long-term relationships, and shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION C: ENGINEERING SPOTLIGHT                          */}
      {/* ========================================================= */}
      <section className="bp-spotlight-section">
        <div className="bp-container">
          <div className="bp-spotlight-grid">
            {/* Left Project Overview Mockup */}
            <div className="bp-project-window-wrap">
              <div className="bp-project-window">
                <div className="bp-project-inner">
                  {/* Sidebar */}
                  <div className="bp-project-sidebar">
                    <div className="bp-project-logo">
                      <Code2 size={13} />
                      <span>Provenance</span>
                    </div>
                    <div className="bp-project-nav-item active">Overview</div>
                    <div className="bp-project-nav-item">Projects</div>
                    <div className="bp-project-nav-item">Analytics</div>
                    <div className="bp-project-nav-item">Team</div>
                    <div className="bp-project-nav-item">Settings</div>
                  </div>

                  {/* Main Dashboard Area */}
                  <div className="bp-project-main">
                    <div className="bp-project-header">
                      <span className="bp-project-heading">Project Overview</span>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <div style={{ width: '32px', height: '6px', background: '#ebd9c8', borderRadius: '3px' }} />
                        <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ea580c' }} />
                      </div>
                    </div>

                    {/* KPI Stats */}
                    <div className="bp-project-stats-grid">
                      <div className="bp-project-stat-box">
                        <div className="bp-ps-label">Total Projects</div>
                        <div className="bp-ps-val">12</div>
                      </div>
                      <div className="bp-project-stat-box">
                        <div className="bp-ps-label">Active</div>
                        <div className="bp-ps-val" style={{ color: '#ea580c' }}>8</div>
                      </div>
                      <div className="bp-project-stat-box">
                        <div className="bp-ps-label">Completed</div>
                        <div className="bp-ps-val">24</div>
                      </div>
                      <div className="bp-project-stat-box">
                        <div className="bp-ps-label">Success Rate</div>
                        <div className="bp-ps-val" style={{ color: '#16a34a' }}>98%</div>
                      </div>
                    </div>

                    {/* Bar Chart Visualization */}
                    <div className="bp-project-chart-box">
                      <div className="bp-chart-bars-wrap">
                        <div className="bp-chart-bar-col" style={{ height: '35%' }} />
                        <div className="bp-chart-bar-col" style={{ height: '60%' }} />
                        <div className="bp-chart-bar-col" style={{ height: '45%' }} />
                        <div className="bp-chart-bar-col" style={{ height: '85%' }} />
                        <div className="bp-chart-bar-col" style={{ height: '70%' }} />
                        <div className="bp-chart-bar-col" style={{ height: '55%' }} />
                        <div className="bp-chart-bar-col" style={{ height: '95%' }} />
                        <div className="bp-chart-bar-col" style={{ height: '75%' }} />
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div style={{ fontSize: '0.68rem', fontWeight: 750, color: '#141518', marginBottom: '0.35rem' }}>
                      Recent Activity
                    </div>
                    <div className="bp-pa-item">
                      <div>
                        <span className="bp-pa-dot" />
                        <span>New project initiated</span>
                      </div>
                      <span style={{ color: '#9c8e80' }}>2h ago</span>
                    </div>
                    <div className="bp-pa-item">
                      <div>
                        <span className="bp-pa-dot" />
                        <span>Development in progress</span>
                      </div>
                      <span style={{ color: '#9c8e80' }}>5h ago</span>
                    </div>
                    <div className="bp-pa-item">
                      <div>
                        <span className="bp-pa-dot" />
                        <span>Deployment completed</span>
                      </div>
                      <span style={{ color: '#9c8e80' }}>1d ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge on Bottom-Left */}
              <div className="bp-float-impact-badge">
                <div className="bp-fib-text">From idea<br />to impact.</div>
                <BarChart2 size={24} color="#ea580c" />
              </div>
            </div>

            {/* Right Editorial Content */}
            <div className="bp-spotlight-content">
              <div className="bp-badge">
                <Sparkles size={14} className="bp-badge-icon" />
                <span>Engineering Spotlight</span>
              </div>

              <h2 className="bp-spotlight-title">
                Turning Complex Requirements Into Clear, Reliable Software
              </h2>

              <p className="bp-spotlight-desc">
                A look at how our engineering team approaches complex business requirements, breaks them into practical solutions, and delivers scalable, maintainable software that creates long-term value.
              </p>

              <Link href="/contact" className="bp-spotlight-link">
                <span>Read the Story</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION D: HOW WE CREATE VALUE                            */}
      {/* ========================================================= */}
      <section className="bp-value-section">
        <div className="bp-container">
          <div className="bp-section-header">
            <div className="bp-badge">
              <Rocket size={14} className="bp-badge-icon" />
              <span>How We Create Value</span>
            </div>

            <h2 className="bp-section-title">
              From Ideas to Real-World Impact
            </h2>

            <p className="bp-section-subtitle">
              Our approach combines technical expertise, thoughtful design, and a deep understanding of business goals.
            </p>
          </div>

          <div className="bp-timeline-grid">
            {/* Step 01 */}
            <div className="bp-step-card">
              <div className="bp-step-icon-wrap">
                <FileText size={22} />
              </div>
              <div className="bp-step-num">01</div>
              <h3 className="bp-step-title">Understand the Problem</h3>
              <p className="bp-step-desc">
                We take time to understand your business goals, user needs, and technical challenges.
              </p>
              <div className="bp-step-connector" aria-hidden="true" />
            </div>

            {/* Step 02 */}
            <div className="bp-step-card">
              <div className="bp-step-icon-wrap">
                <PenTool size={20} />
              </div>
              <div className="bp-step-num">02</div>
              <h3 className="bp-step-title">Design Thoughtfully</h3>
              <p className="bp-step-desc">
                We create clear architectures, intuitive user experiences, and scalable technical plans.
              </p>
              <div className="bp-step-connector" aria-hidden="true" />
            </div>

            {/* Step 03 */}
            <div className="bp-step-card">
              <div className="bp-step-icon-wrap">
                <Code2 size={22} />
              </div>
              <div className="bp-step-num">03</div>
              <h3 className="bp-step-title">Build With Quality</h3>
              <p className="bp-step-desc">
                We develop clean, maintainable code with testing, security, and performance in mind.
              </p>
              <div className="bp-step-connector" aria-hidden="true" />
            </div>

            {/* Step 04 */}
            <div className="bp-step-card">
              <div className="bp-step-icon-wrap">
                <Rocket size={20} />
              </div>
              <div className="bp-step-num">04</div>
              <h3 className="bp-step-title">Support What We Ship</h3>
              <p className="bp-step-desc">
                We stay involved after launch with ongoing support, optimizations, and new features as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION E: LATEST INSIGHTS (ARTICLES)                     */}
      {/* ========================================================= */}
      <section id="insights" className="bp-insights-section">
        <div className="bp-container">
          <div className="bp-insights-header-row">
            <div className="bp-insights-header-left">
              <div className="bp-badge">
                <Sparkles size={14} className="bp-badge-icon" />
                <span>Latest Insights</span>
              </div>
              <h2 className="bp-insights-title">
                Ideas From Our Engineering Team
              </h2>
            </div>

            <Link href="/contact" className="bp-view-all-btn">
              <span>View All Articles</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="bp-articles-grid">
            {articles.map((article) => (
              <article key={article.id} className="bp-article-card">
                {/* Visual Thumbnail */}
                <div className="bp-thumb-stage">
                  {article.type === 'performance' && (
                    <div className="bp-thumb-perf">
                      <div className="bp-perf-mock-dash">
                        <div style={{ display: 'flex', gap: '3px' }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ea580c' }} />
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ebd9c8' }} />
                        </div>
                        <div style={{ height: '4px', background: '#ebd9c8', borderRadius: '2px', width: '70%' }} />
                        <div style={{ height: '4px', background: '#ebd9c8', borderRadius: '2px', width: '90%' }} />
                      </div>
                      <div className="bp-gauge-wrap">
                        <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#f2dfcc"
                            strokeWidth="3.2"
                            strokeDasharray="75, 100"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#ea580c"
                            strokeWidth="3.2"
                            strokeDasharray="60, 100"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          fontSize: '0.62rem',
                          fontWeight: 800,
                          color: '#141518'
                        }}>
                          99+
                        </div>
                      </div>
                    </div>
                  )}

                  {article.type === 'cloud' && (
                    <div className="bp-thumb-cloud">
                      <Cloud size={46} color="#ea580c" strokeWidth={1.5} />
                      <div className="bp-server-stack">
                        <div className="bp-server-unit">
                          <span className="bp-server-led" />
                        </div>
                        <div className="bp-server-unit">
                          <span className="bp-server-led" />
                        </div>
                        <div className="bp-server-unit">
                          <span className="bp-server-led" />
                        </div>
                      </div>
                    </div>
                  )}

                  {article.type === 'devops' && (
                    <div className="bp-thumb-devops">
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: '#17181c',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Code2 size={20} />
                      </div>
                      <div className="bp-pipeline-badges">
                        <div className="bp-pipeline-item">
                          <span className="bp-green-dot" />
                          <span>Build</span>
                        </div>
                        <div className="bp-pipeline-item">
                          <span className="bp-green-dot" />
                          <span>Test</span>
                        </div>
                        <div className="bp-pipeline-item">
                          <span className="bp-green-dot" />
                          <span>Deploy</span>
                        </div>
                        <div className="bp-pipeline-item">
                          <span className="bp-green-dot" />
                          <span>Success</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {article.type === 'mobile' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '32px',
                        height: '56px',
                        border: '3px solid #232228',
                        borderRadius: '8px',
                        background: '#ffffff',
                        padding: '3px'
                      }}>
                        <div style={{ width: '100%', height: '6px', background: '#ea580c', borderRadius: '2px', marginBottom: '3px' }} />
                        <div style={{ width: '80%', height: '3px', background: '#ebd9c8', borderRadius: '1px' }} />
                      </div>
                      <Activity size={28} color="#ea580c" />
                    </div>
                  )}

                  {article.type === 'security' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <Shield size={38} color="#ea580c" />
                      <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#141518', background: '#ffffff', padding: '4px 8px', borderRadius: '6px', border: '1px solid #ebd9c8' }}>
                        Zero Trust
                      </div>
                    </div>
                  )}

                  {article.type === 'design' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <Layers size={36} color="#ea580c" />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ width: '40px', height: '6px', background: '#ea580c', borderRadius: '3px' }} />
                        <div style={{ width: '55px', height: '6px', background: '#ebd9c8', borderRadius: '3px' }} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="bp-card-body">
                  <div className="bp-card-meta-top">
                    <span className="bp-card-pill">{article.category}</span>
                    <span className="bp-card-read-time">
                      <Clock size={13} />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="bp-card-title">{article.title}</h3>
                  <p className="bp-card-summary">{article.summary}</p>

                  <div className="bp-card-bottom">
                    <div className="bp-card-date">
                      <Calendar size={13} />
                      <span>{article.date}</span>
                    </div>

                    <Link href="/contact" className="bp-card-link">
                      <span>Read Article</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION F: FINAL CALL TO ACTION (BEFORE FOOTER)           */}
      {/* ========================================================= */}
      <section className="bp-final-cta-section">
        <div className="bp-container">
          <div className="bp-final-cta-card">
            {/* Ambient Rings */}
            <div className="bp-cta-rings" aria-hidden="true" />
            <div className="bp-cta-rings-inner" aria-hidden="true" />

            {/* Left Content */}
            <div className="bp-cta-content">
              <div className="bp-badge" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                <Sparkles size={14} className="bp-badge-icon" />
                <span>Start A Conversation</span>
              </div>

              <h2 className="bp-cta-title">
                Have an idea worth building?
              </h2>

              <p className="bp-cta-desc">
                Tell us about your project, technical challenges, or product ideas. Our engineering team is ready to help you turn them into reliable, scalable solutions.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="bp-cta-btn-wrap">
              <Link href="/contact" className="bp-cta-large-btn">
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
