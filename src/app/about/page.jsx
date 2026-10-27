import Link from 'next/link';
import '@/components/AboutPage.css';
import {
  Code2,
  Globe,
  Smartphone,
  Cpu,
  Database,
  Cloud,
  Compass,
  Sparkles,
  CheckCircle2,
  HeartHandshake,
  Users,
  Zap,
  ArrowRight,
  ShieldCheck,
  Target,
  Laptop,
  TrendingUp,
  Server,
  Layers,
  Settings,
  Workflow
} from 'lucide-react';

export const metadata = {
  title: 'About ProvenanceTech | Technology Built on Trust. Innovation Built for Growth.',
  description: 'At ProvenanceTech, we are a software engineering company focused on modern web applications, mobile experiences, and scalable digital solutions built on trust and transparency.',
};

export default function AboutPage() {
  const whatWeDo = [
    {
      title: 'Web Application Development',
      desc: 'We develop modern, responsive, and high-performance web applications that deliver seamless experiences across devices.',
      icon: <Globe size={24} strokeWidth={2.2} />,
    },
    {
      title: 'Mobile Application Development',
      desc: 'We build intuitive mobile applications for Android and iOS using modern cross-platform technologies.',
      icon: <Smartphone size={24} strokeWidth={2.2} />,
    },
    {
      title: 'Custom Software Development',
      desc: 'We transform business requirements into tailored software solutions designed to improve workflows, productivity, and operational efficiency.',
      icon: <Settings size={24} strokeWidth={2.2} />,
    },
    {
      title: 'Backend & API Development',
      desc: 'We develop reliable backend systems, secure APIs, and database-driven applications that help digital products communicate and scale effectively.',
      icon: <Layers size={24} strokeWidth={2.2} />,
    },
  ];

  const techGroups = [
    {
      category: 'Frontend',
      items: [
        {
          name: 'Next.js',
          icon: (
            <svg viewBox="0 0 180 180" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="next-mask-about" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
                <circle cx="90" cy="90" r="90" fill="black" />
              </mask>
              <g mask="url(#next-mask-about)">
                <circle cx="90" cy="90" r="90" fill="#111111" />
                <path d="M149.508 157.172L69.6406 54H54V125.969H66.2578V69.5625L139.992 164.555C143.344 162.32 146.523 159.844 149.508 157.172Z" fill="url(#paint0_linear_ab)" />
                <rect x="115.125" y="54" width="12.375" height="72" fill="url(#paint1_linear_ab)" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_ab" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_ab" x1="121.312" y1="54" x2="120.781" y2="104.531" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          ),
        },
        {
          name: 'React.js',
          icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00d8ff" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="2" fill="#00d8ff" />
            </svg>
          ),
        },
      ],
    },
    {
      category: 'Mobile Development',
      items: [
        {
          name: 'React Native',
          icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="2" width="14" height="20" rx="3" stroke="#61DAFB" strokeWidth="1.8" />
              <circle cx="12" cy="18" r="1" fill="#61DAFB" />
              <ellipse cx="12" cy="10" rx="4" ry="1.6" stroke="#61DAFB" strokeWidth="1.2" />
              <ellipse cx="12" cy="10" rx="4" ry="1.6" transform="rotate(60 12 10)" stroke="#61DAFB" strokeWidth="1.2" />
              <ellipse cx="12" cy="10" rx="4" ry="1.6" transform="rotate(120 12 10)" stroke="#61DAFB" strokeWidth="1.2" />
            </svg>
          ),
        },
        {
          name: 'Flutter',
          icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2 2.5L4 12.7L7.3 16L20.8 2.5H14.2Z" fill="#47C5FB" />
              <path d="M14.2 13.5L9.6 18.1L12.9 21.4H19.5L14.2 13.5Z" fill="#02569B" />
              <path d="M11 16.8L12.9 18.7L17.5 14.1L15.6 12.2L11 16.8Z" fill="#0175C2" />
            </svg>
          ),
        },
      ],
    },
    {
      category: 'Backend',
      items: [
        {
          name: 'Node.js',
          icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" fill="#539E43" />
              <path d="M12 4.5L18.5 8.2V15.8L12 19.5L5.5 15.8V8.2L12 4.5Z" fill="#333333" />
              <path d="M12 6.5L16.5 9.1V14.3L12 16.9L7.5 14.3V9.1L12 6.5Z" fill="#68A063" />
            </svg>
          ),
        },
        {
          name: 'REST APIs',
          icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="5" width="20" height="14" rx="3" stroke="#eb7821" strokeWidth="1.8" />
              <circle cx="6" cy="12" r="1.5" fill="#eb7821" />
              <path d="M10 12H18M10 9H15M10 15H16" stroke="#2d231b" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ),
        },
      ],
    },
    {
      category: 'Database',
      items: [
        {
          name: 'Amazon DynamoDB',
          icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#2E27AD" />
              <ellipse cx="12" cy="6" rx="7" ry="2.5" fill="#4D45E5" />
              <path d="M5 6V18C5 19.38 8.13 20.5 12 20.5C15.87 20.5 19 19.38 19 18V6" stroke="#ffffff" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="7" ry="2.5" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="2 2" />
            </svg>
          ),
        },
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        {
          name: 'Docker',
          icon: (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#2496ED" />
              <rect x="5" y="8" width="3" height="3" fill="#ffffff" rx="0.5" />
              <rect x="9" y="8" width="3" height="3" fill="#ffffff" rx="0.5" />
              <rect x="13" y="8" width="3" height="3" fill="#ffffff" rx="0.5" />
              <rect x="9" y="5" width="3" height="3" fill="#ffffff" rx="0.5" />
              <path d="M4 12C5 12 7 13 9 13C12 13 14 11 17 12C18 12.5 19 13 20 14C19 16 16 18 12 18C8 18 5 16 4 14V12Z" fill="#ffffff" />
            </svg>
          ),
        },
        {
          name: 'CI/CD',
          icon: (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#0284C7" />
              <circle cx="8" cy="12" r="2.5" fill="#ffffff" />
              <circle cx="16" cy="8" r="2.5" fill="#ffffff" />
              <circle cx="16" cy="16" r="2.5" fill="#ffffff" />
              <path d="M10.5 11L13.5 9M10.5 13L13.5 15" stroke="#ffffff" strokeWidth="1.5" />
            </svg>
          ),
        },
        {
          name: 'Cloud Infrastructure',
          icon: (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#2563EB" />
              <path d="M7 16a3.5 3.5 0 0 1-.3-6.99 4.5 4.5 0 0 1 8.6-1.5 3.5 3.5 0 0 1 3.7 3.49A3.5 3.5 0 0 1 16.5 16H7z" stroke="#ffffff" strokeWidth="1.5" fill="rgba(255,255,255,0.2)" />
            </svg>
          ),
        },
      ],
    },
  ];

  const valuesBehindName = [
    {
      title: 'Trust Through Transparency',
      desc: 'We believe successful projects are built on honest communication, clear expectations, and collaborative decision-making.',
      icon: <ShieldCheck size={24} strokeWidth={2.2} />,
    },
    {
      title: 'Quality Through Engineering',
      desc: 'We prioritize clean code, thoughtful architecture, testing, and maintainability to create software that businesses can depend on.',
      icon: <Code2 size={24} strokeWidth={2.2} />,
    },
    {
      title: 'Innovation With Purpose',
      desc: 'We choose technologies and approaches based on the problems they solve, not simply because they are new.',
      icon: <Zap size={24} strokeWidth={2.2} />,
    },
    {
      title: 'Growth Through Collaboration',
      desc: 'We work closely with our clients to understand their goals, adapt to their needs, and build solutions that support their growth.',
      icon: <Users size={24} strokeWidth={2.2} />,
    },
  ];

  const whyChooseUs = [
    {
      title: 'Business-Focused Solutions',
      desc: 'We begin by understanding your business challenges and develop solutions aligned with your objectives.',
      icon: <Target size={24} strokeWidth={2.2} />,
    },
    {
      title: 'Modern Engineering',
      desc: 'We use contemporary frameworks and proven development practices to create dependable digital products.',
      icon: <Cpu size={24} strokeWidth={2.2} />,
    },
    {
      title: 'Built for the Future',
      desc: 'We design applications with maintainability, flexibility, and future enhancements in mind.',
      icon: <TrendingUp size={24} strokeWidth={2.2} />,
    },
    {
      title: 'Transparent Collaboration',
      desc: 'We value open communication, clear project expectations, and meaningful client involvement throughout development.',
      icon: <HeartHandshake size={24} strokeWidth={2.2} />,
    },
  ];

  return (
    <div className="about-page-wrapper">
      {/* Background Soft Glows */}
      <div className="about-ambient-glow-1" aria-hidden="true" />
      <div className="about-ambient-glow-2" aria-hidden="true" />

      <div className="about-container">
        {/* ==================================================================
            1. HERO SECTION
            ================================================================== */}
        <section className="about-hero-section">
          <div className="about-hero-grid">
            {/* Left Column: Heading, Subtitle & Narrative */}
            <div>
              <div className="about-badge">
                <Sparkles size={14} className="about-badge-spark" />
                ProvenanceTech Software Engineering
              </div>

              <h1 className="about-hero-title">
                About<br />ProvenanceTech
              </h1>

              <div className="about-hero-subtitle">
                Technology Built on Trust. Innovation Built for Growth.
              </div>

              <div className="about-hero-text-block">
                <p className="about-hero-p">
                  At <strong>ProvenanceTech</strong>, we believe great software starts with understanding people, businesses, and the problems that matter most.
                </p>

                <p className="about-hero-p">
                  We are a software engineering company focused on building modern web applications, mobile experiences, and scalable digital solutions that help businesses turn ideas into reality.
                </p>

                <p className="about-hero-p">
                  Our name reflects the values we believe in: transparency, reliability, and purposeful technology. From the first conversation to the final deployment, we focus on creating software that is practical, maintainable, and built with the future in mind.
                </p>
              </div>
            </div>

            {/* Right Column: 3D Laptop Showcase & Floating Feature Cards */}
            <div className="about-hero-scene">
              <div className="about-hero-scene-stage">
                <div className="about-table-surface">
                  {/* Decorative Desk Plant Top Right */}
                  <svg className="about-desk-plant-top" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <ellipse cx="25" cy="52" rx="14" ry="5" fill="rgba(0,0,0,0.12)" />
                    <path d="M14 42L16 54C16 56 19 57 25 57C31 57 34 56 34 54L36 42H14Z" fill="#eeddcc" stroke="#cfbaaa" strokeWidth="1" />
                    <path d="M25 42C23 32 16 28 14 20C12 12 18 8 22 14C24 17 25 24 25 42Z" fill="#4d7c0f" />
                    <path d="M25 42C27 32 34 28 36 20C38 12 32 8 28 14C26 17 25 24 25 42Z" fill="#65a30d" />
                    <path d="M25 42C23 30 22 22 25 6C28 22 27 30 25 42Z" fill="#84cc16" />
                  </svg>

                  {/* Laptop Mockup */}
                  <div className="about-laptop-wrap">
                    <div className="about-laptop-screen">
                      <div className="about-laptop-camera" />
                      <div className="about-laptop-display">
                        <div className="about-laptop-display-glow" />
                        <div className="about-display-text-1">ideas</div>
                        <div className="about-display-text-2">products</div>
                        <div className="about-display-text-3">Growth</div>
                      </div>
                    </div>
                    <div className="about-laptop-base">
                      <div className="about-laptop-notch" />
                    </div>
                  </div>

                  {/* Decorative Desk Plant Bottom Left */}
                  <svg className="about-desk-plant" viewBox="0 0 60 76" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <ellipse cx="30" cy="68" rx="18" ry="6" fill="rgba(0,0,0,0.15)" />
                    <path d="M18 52L20 68C20 71 24 73 30 73C36 73 40 71 40 68L42 52H18Z" fill="#e2d2c1" stroke="#cbb9a5" strokeWidth="1.2" />
                    <path d="M30 52C27 38 18 34 14 24C11 15 19 10 24 17C27 21 29 30 30 52Z" fill="#365314" />
                    <path d="M30 52C33 38 42 34 46 24C49 15 41 10 36 17C33 21 31 30 30 52Z" fill="#4d7c0f" />
                    <path d="M30 52C28 36 27 26 30 8C33 26 32 36 30 52Z" fill="#65a30d" />
                    <path d="M30 52C22 46 12 40 8 32C5 25 11 20 16 26C19 30 24 38 30 52Z" fill="#4d7c0f" />
                    <path d="M30 52C38 46 48 40 52 32C55 25 49 20 44 26C41 30 36 38 30 52Z" fill="#3f6212" />
                  </svg>
                </div>

                {/* 3 Floating Badges to Right of Laptop */}
                <div className="about-floating-cards-group">
                  <div className="about-floating-card">
                    <div className="about-card-icon-box">
                      <Users size={16} strokeWidth={2.3} />
                    </div>
                    <span className="about-floating-card-label">People First</span>
                  </div>

                  <div className="about-floating-card">
                    <div className="about-card-icon-box">
                      <ShieldCheck size={16} strokeWidth={2.3} />
                    </div>
                    <span className="about-floating-card-label">Reliable Engineering</span>
                  </div>

                  <div className="about-floating-card">
                    <div className="about-card-icon-box">
                      <TrendingUp size={16} strokeWidth={2.3} />
                    </div>
                    <span className="about-floating-card-label">Long-term Growth</span>
                  </div>
                </div>

                {/* Handwritten Script Accent with Curved Arrow */}
                <div className="about-script-accent">
                  <span className="about-script-text">Building Digital Possibilities</span>
                  <svg width="42" height="32" viewBox="0 0 52 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 32C16 36 34 30 44 14" stroke="#c25916" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 3" />
                    <path d="M34 12L46 12L44 24" stroke="#c25916" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            2. MISSION & VISION SECTION (2 CARDS)
            ================================================================== */}
        <section className="about-mission-vision-grid">
          {/* Mission Card */}
          <div className="about-mv-card">
            <div className="about-mv-content">
              <div className="about-mv-badge">
                <Compass size={14} color="#ea580c" strokeWidth={2.4} />
                Purpose &amp; Commitment
              </div>
              <h2 className="about-mv-title">Our Mission</h2>
              <p className="about-mv-desc">
                To empower businesses with reliable, innovative, and scalable software solutions that simplify complex challenges, improve digital experiences, and create lasting value.
              </p>
            </div>

            {/* Target & Bullseye Illustration */}
            <div className="about-mv-art" aria-hidden="true">
              <svg viewBox="0 0 140 140" width="130" height="130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="70" cy="70" r="62" fill="#fff4ec" stroke="#fcd9c0" strokeWidth="2" />
                <circle cx="70" cy="70" r="46" fill="#ffe2cc" stroke="#f8b688" strokeWidth="2" />
                <circle cx="70" cy="70" r="30" fill="#ffcaa3" stroke="#f4974f" strokeWidth="2" />
                <circle cx="70" cy="70" r="15" fill="#ea580c" />
                <circle cx="70" cy="70" r="6" fill="#ffffff" />
                {/* 3D Arrow Striking the Bullseye */}
                <path d="M125 15L72 68" stroke="#c2410c" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M125 15L110 21M125 15L119 30" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
                <polygon points="70,70 78,61 61,78" fill="#ea580c" />
              </svg>
            </div>
          </div>

          {/* Vision Card */}
          <div className="about-mv-card">
            <div className="about-mv-content">
              <div className="about-mv-badge">
                <Sparkles size={14} color="#ea580c" strokeWidth={2.4} />
                Future Direction
              </div>
              <h2 className="about-mv-title">Our Vision</h2>
              <p className="about-mv-desc">
                To build a future where technology is more accessible, businesses can innovate with confidence, and every digital product is created with purpose, quality, and trust.
              </p>
            </div>

            {/* Rising 3D Bar Chart & Trend Arrow */}
            <div className="about-mv-art" aria-hidden="true">
              <svg viewBox="0 0 140 140" width="130" height="130" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Stepped 3D Bars */}
                <rect x="24" y="86" width="22" height="36" rx="4" fill="url(#barGradient1)" />
                <rect x="54" y="62" width="22" height="60" rx="4" fill="url(#barGradient2)" />
                <rect x="84" y="34" width="22" height="88" rx="4" fill="url(#barGradient3)" />
                <line x1="16" y1="122" x2="118" y2="122" stroke="#ebd9c8" strokeWidth="2.5" strokeLinecap="round" />
                {/* Diagonal Upward Arrow */}
                <path d="M22 92Q60 70 106 24" stroke="#c2410c" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="3 3" />
                <path d="M88 22H112V46" stroke="#ea580c" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="barGradient1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffb076" />
                    <stop offset="100%" stopColor="#f4974f" />
                  </linearGradient>
                  <linearGradient id="barGradient2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f4974f" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                  <linearGradient id="barGradient3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ea580c" />
                    <stop offset="100%" stopColor="#c2410c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        {/* ==================================================================
            3. WHAT WE DO (CORE CAPABILITIES)
            ================================================================== */}
        <section className="about-capabilities-section">
          <div className="about-section-header">
            <div className="about-badge">Core Capabilities</div>
            <h2 className="about-section-title">What We Do</h2>
            <p className="about-section-desc">
              We combine modern engineering practices with thoughtful design to create digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="about-cards-grid-4">
            {whatWeDo.map((item, idx) => (
              <div key={idx} className="about-feature-card">
                <div className="about-feature-icon">
                  {item.icon}
                </div>
                <h3 className="about-feature-title">{item.title}</h3>
                <p className="about-feature-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            4. OUR TECHNOLOGY STACK
            ================================================================== */}
        <section className="about-tech-section">
          <div className="about-section-header" style={{ marginBottom: '2.5rem' }}>
            <div className="about-badge">Flexible &amp; Scalable</div>
            <h2 className="about-section-title">Our Technology Stack</h2>
            <p className="about-section-desc">
              We use modern technologies and development tools to build flexible, maintainable, and scalable digital products.
            </p>
          </div>

          <div className="about-tech-groups-grid">
            {techGroups.map((group, idx) => (
              <div key={idx} className="about-tech-group-card">
                <div className="about-tech-group-title">{group.category}</div>
                <div className="about-tech-items-row">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="about-tech-item-single">
                      <div className="about-tech-icon-wrap">
                        {item.icon}
                      </div>
                      <span className="about-tech-item-name">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="about-tech-footer-note">
            Our technology choices depend on the project&apos;s requirements, performance needs, and long-term goals.
          </p>
        </section>

        {/* ==================================================================
            5. THE VALUES BEHIND OUR NAME
            ================================================================== */}
        <section className="about-values-section">
          <div className="about-section-header">
            <div className="about-badge">Brand Principles</div>
            <h2 className="about-section-title">The Values Behind Our Name</h2>
            <p className="about-section-desc">
              At ProvenanceTech, our name represents more than technology. It reflects the principles that guide how we work and the relationships we build.
            </p>
          </div>

          <div className="about-cards-grid-4">
            {valuesBehindName.map((val, idx) => (
              <div key={idx} className="about-feature-card">
                <div className="about-feature-icon">
                  {val.icon}
                </div>
                <h3 className="about-feature-title">{val.title}</h3>
                <p className="about-feature-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            6. WHY CHOOSE PROVENANCETECH?
            ================================================================== */}
        <section className="about-why-section">
          <div className="about-section-header">
            <div className="about-badge">Client Partnership</div>
            <h2 className="about-section-title">Why Choose ProvenanceTech?</h2>
            <p className="about-section-desc">
              Reliable engineering, business alignment, and client-first collaboration throughout the software lifecycle.
            </p>
          </div>

          <div className="about-cards-grid-4">
            {whyChooseUs.map((reason, idx) => (
              <div key={idx} className="about-feature-card">
                <div className="about-feature-icon">
                  {reason.icon}
                </div>
                <h3 className="about-feature-title">{reason.title}</h3>
                <p className="about-feature-desc">{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            7. CALL TO ACTION BANNER (LET'S BUILD SOMETHING MEANINGFUL)
            ================================================================== */}
        <section className="about-cta-card">
          <div className="about-cta-grid">
            {/* Left Content */}
            <div>
              <div className="about-cta-dash" />
              <h2 className="about-cta-title">Let&apos;s Build Something Meaningful</h2>
              <div className="about-cta-subtitle">
                Every great digital product begins with an idea and the right team to bring it to life.
              </div>
              <p className="about-cta-desc">
                Whether you&apos;re launching a startup, modernizing an existing application, or exploring a new digital opportunity, ProvenanceTech is ready to help you take the next step.
              </p>
              <Link href="/contact" className="about-cta-button">
                Discuss Your Project
                <ArrowRight size={17} strokeWidth={2.4} />
              </Link>
            </div>

            {/* Right Desk Scene with Floating Idea Card */}
            <div className="about-cta-scene">
              <div className="about-cta-desk-visual">
                {/* Floating "Have an Idea?" Note Card */}
                <div className="about-idea-badge">
                  <div className="about-idea-badge-text">
                    <span className="about-idea-badge-small">Have an Idea?</span>
                    <span className="about-idea-badge-bold">Let&apos;s turn it</span>
                    <span className="about-idea-badge-bold">into reality.</span>
                  </div>
                  <Link href="/contact" className="about-idea-badge-btn" aria-label="Let's turn your idea into reality">
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>

                {/* Desk Workstation Graphic */}
                <svg viewBox="0 0 320 180" width="100%" height="auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  {/* Warm Table Surface */}
                  <ellipse cx="160" cy="150" rx="140" ry="24" fill="rgba(235, 120, 33, 0.08)" />
                  <rect x="40" y="142" width="240" height="12" rx="6" fill="#edd9c7" stroke="#dcbeaa" strokeWidth="1" />
                  {/* Laptop Base & Screen */}
                  <rect x="110" y="90" width="100" height="52" rx="4" fill="#1e2229" stroke="#333842" strokeWidth="1.5" />
                  <rect x="115" y="95" width="90" height="42" rx="2" fill="#121418" />
                  <ellipse cx="160" cy="116" rx="25" ry="12" fill="rgba(235, 120, 33, 0.25)" />
                  <rect x="95" y="140" width="130" height="4" rx="2" fill="#cbd5e1" />
                  {/* Mini Desk Plants */}
                  <ellipse cx="80" cy="144" rx="12" ry="4" fill="rgba(0,0,0,0.08)" />
                  <path d="M74 134L76 144C76 146 78 147 80 147C82 147 84 146 84 144L86 134H74Z" fill="#e2d2c1" />
                  <circle cx="80" cy="130" r="7" fill="#65a30d" />
                  <ellipse cx="245" cy="144" rx="12" ry="4" fill="rgba(0,0,0,0.08)" />
                  <path d="M239 134L241 144C241 146 243 147 245 147C247 147 249 146 249 144L251 134H239Z" fill="#e2d2c1" />
                  <circle cx="245" cy="130" r="7" fill="#4d7c0f" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
