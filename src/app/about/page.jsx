import Link from 'next/link';
import '@/components/AboutPage.css';
import AboutHeroSection from '@/components/AboutHeroSection';
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
  Workflow,
  Play
} from 'lucide-react';

export const metadata = {
  title: 'About ProvenanceTech | Technology Built on Trust. Innovation Built for Growth.',
  description: 'At ProvenanceTech, we are a software engineering company focused on modern web applications, mobile experiences, and scalable digital solutions built on trust and transparency.',
};

export default function AboutPage() {
  const whatWeDo = [
    {
      number: '01',
      title: 'Web Application Development',
      desc: 'We develop modern, responsive, and high-performance web applications that deliver seamless experiences across devices.',
      href: '/services',
      highlighted: true,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="26" height="20" rx="4" stroke="#ea580c" strokeWidth="2.2" />
          <line x1="3" y1="12" x2="29" y2="12" stroke="#ea580c" strokeWidth="1.8" />
          <circle cx="7" cy="9" r="1.2" fill="#ea580c" />
          <circle cx="11" cy="9" r="1.2" fill="#ea580c" />
          <circle cx="15" cy="9" r="1.2" fill="#ea580c" />
          <path d="M12.5 16L9.5 19L12.5 22" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.5 16L22.5 19L19.5 22" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="17" y1="15" x2="15" y2="23" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Mobile Application Development',
      desc: 'We build intuitive mobile applications for Android and iOS using modern cross-platform technologies.',
      href: '/services',
      highlighted: false,
      icon: (
        <svg viewBox="0 0 32 32" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="3" width="18" height="26" rx="4" stroke="#ea580c" strokeWidth="2.2" />
          <line x1="13" y1="6.5" x2="19" y2="6.5" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="24" r="1.5" fill="#ea580c" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Custom Software Development',
      desc: 'We transform business requirements into tailored software solutions designed to improve workflows, productivity, and operational efficiency.',
      href: '/services',
      highlighted: false,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L4 10L16 16L28 10L16 4Z" stroke="#ea580c" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M4 16L16 22L28 16" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 22L16 28L28 22" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Backend & API Development',
      desc: 'We develop reliable backend systems, secure APIs, and database-driven applications that help digital products communicate and scale effectively.',
      href: '/services',
      highlighted: false,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19C6.2 19 4 16.8 4 14C4 11.5 5.8 9.4 8.2 9.1C9 5.5 12.2 3 16 3C20.4 3 24 6.6 24 11C26.2 11.2 28 13 28 15.3C28 17.8 26 19.8 23.5 19.9" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
          <text x="6" y="15.5" fill="#ea580c" fontSize="6.5" fontWeight="900" fontFamily="system-ui, sans-serif">API</text>
          <circle cx="23" cy="22" r="3.2" stroke="#ea580c" strokeWidth="2" />
          <path d="M23 16.8V18.8M23 25.2V27.2M17.8 22H19.8M26.2 22H28.2" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
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
      number: '01',
      title: 'Trust Through Transparency',
      desc: 'We believe successful projects are built on honest communication, clear expectations, and collaborative decision-making.',
      highlighted: true,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3L5 7V15C5 21.8 9.7 28.1 16 29.5C22.3 28.1 27 21.8 27 15V7L16 3Z" stroke="#ea580c" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 15.5L14.5 19L21.5 12" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      watermark: (
        <svg viewBox="0 0 48 48" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 26L8 20L18 10L24 16L30 10L40 20L34 26" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 22L24 28L30 22" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 28L18 34L24 28M36 28L30 34L24 28" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 37L24 40L27 37" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Quality Through Engineering',
      desc: 'We prioritize clean code, thoughtful architecture, testing, and maintainability to create software that businesses can depend on.',
      highlighted: false,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 10L5 16L11 22" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 10L27 16L21 22" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="18.5" y1="8" x2="13.5" y2="24" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      ),
      watermark: (
        <svg viewBox="0 0 48 48" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6L6 15L24 24L42 15L24 6Z" stroke="#ea580c" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M6 24L24 33L42 24" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 33L24 42L42 33" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Innovation With Purpose',
      desc: 'We choose technologies and approaches based on the problems they solve, not simply because they are new.',
      highlighted: false,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 3L6 17H16L15 29L26 15H16L17 3Z" stroke="#ea580c" fill="#ea580c" fillOpacity="0.15" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      watermark: (
        <svg viewBox="0 0 48 48" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 36H30M20 42H28" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M24 6C16.8 6 11 11.8 11 19C11 23.5 13.5 27.5 17 30V33H31V30C34.5 27.5 37 23.5 37 19C37 11.8 31.2 6 24 6Z" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 14V20M20 17H28" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Growth Through Collaboration',
      desc: 'We work closely with our clients to understand their goals, adapt to their needs, and build solutions that support their growth.',
      highlighted: false,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="11" r="4.5" stroke="#ea580c" strokeWidth="2.2" />
          <path d="M8 26C8 21.6 11.6 18 16 18C20.4 18 24 21.6 24 26" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="7" cy="12" r="3" stroke="#ea580c" strokeWidth="1.8" />
          <path d="M2 24C2 21 4.5 18.5 7.5 18.5" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="25" cy="12" r="3" stroke="#ea580c" strokeWidth="1.8" />
          <path d="M30 24C30 21 27.5 18.5 24.5 18.5" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
      watermark: (
        <svg viewBox="0 0 48 48" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="6" y1="42" x2="42" y2="42" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" />
          <rect x="10" y="28" width="6" height="14" rx="2" stroke="#ea580c" strokeWidth="2" />
          <rect x="21" y="20" width="6" height="22" rx="2" stroke="#ea580c" strokeWidth="2" />
          <rect x="32" y="12" width="6" height="30" rx="2" stroke="#ea580c" strokeWidth="2" />
          <path d="M12 22L23 13L32 17L40 7" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 7H40V13" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const whyChooseUs = [
    {
      number: '01',
      title: 'Business-Focused Solutions',
      desc: 'We begin by understanding your business challenges and develop solutions aligned with your objectives.',
      highlighted: true,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" stroke="#ea580c" strokeWidth="2.2" />
          <circle cx="16" cy="16" r="7.5" stroke="#ea580c" strokeWidth="2" />
          <circle cx="16" cy="16" r="3" fill="#ea580c" />
          <path d="M23 9L27 5" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Modern Engineering',
      desc: 'We use contemporary frameworks and proven development practices to create dependable digital products.',
      highlighted: false,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="7" width="18" height="18" rx="4" stroke="#ea580c" strokeWidth="2.2" />
          <rect x="12" y="12" width="8" height="8" rx="2" fill="#ea580c" fillOpacity="0.2" stroke="#ea580c" strokeWidth="1.8" />
          <path d="M12 2V6M20 2V6M12 26V30M20 26V30M2 12H6M2 20H6M26 12H30M26 20H30" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Built for the Future',
      desc: 'We design applications with maintainability, flexibility, and future enhancements in mind.',
      highlighted: false,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="19" width="4.5" height="9" rx="1.5" stroke="#ea580c" strokeWidth="2" />
          <rect x="13.5" y="13" width="4.5" height="15" rx="1.5" stroke="#ea580c" strokeWidth="2" />
          <rect x="22" y="7" width="4.5" height="21" rx="1.5" stroke="#ea580c" strokeWidth="2" />
          <path d="M7 13L15 6L25 9L29 4" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 4H29V9" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Transparent Collaboration',
      desc: 'We value open communication, clear project expectations, and meaningful client involvement throughout development.',
      highlighted: false,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17L5 13L12 6L16 10L20 6L27 13L23 17" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 14L16 18L20 14" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 18L12 22L16 18M24 18L20 22L16 18" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 24L16 26L18 24" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="about-page-wrapper">
      {/* Background Soft Glows */}
      <div className="about-ambient-glow-1" aria-hidden="true" />
      <div className="about-ambient-glow-2" aria-hidden="true" />

      <div className="about-container">
        {/* ==================================================================
            1. HERO SECTION (MATCHING REFERENCE DESIGN WITH STATS & FEATURES)
            ================================================================== */}
        <AboutHeroSection />

        {/* ==================================================================
            2. OUR STORY & MISSION SECTION (SCROLL TARGET)
            ================================================================== */}
        <section id="our-story" className="about-story-section" style={{ scrollMarginTop: '100px' }}>
          <div className="about-story-banner">
            <div className="about-story-banner-inner">
              <div className="about-story-pill">
                <span className="about-story-dot" aria-hidden="true" />
                OUR ENGINEERING PHILOSOPHY
              </div>
              <h2 className="about-story-title">
                Building Software that Balances Purpose, Quality &amp; Scale
              </h2>
              <div className="about-story-paragraphs">
                <p>
                  We are a software engineering company focused on building modern web applications, mobile experiences, and scalable digital solutions that help businesses turn ideas into reality.
                </p>
                <p>
                  Our name reflects the values we believe in: transparency, reliability, and purposeful technology. From the first conversation to the final deployment, we focus on creating software that is practical, maintainable, and built with the future in mind.
                </p>
              </div>
            </div>
          </div>

          <div className="about-mission-vision-grid">
            {/* Mission Card */}
            <div className="about-mv-card about-mv-card--mission">
              <div className="about-mv-content">
                <div className="about-mv-badge">
                  <Compass size={14} color="#ea580c" strokeWidth={2.4} />
                  <span>Purpose &amp; Commitment</span>
                </div>
                <h2 className="about-mv-title">Our Mission</h2>
                <p className="about-mv-desc">
                  To empower businesses with reliable, innovative, and scalable software solutions that simplify complex challenges, improve digital experiences, and create lasting value.
                </p>
              </div>

              {/* Target & Bullseye Illustration */}
              <div className="about-mv-art about-mv-art--mission" aria-hidden="true">
                <svg viewBox="0 0 140 140" width="130" height="130" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="about-target-ring-1" cx="70" cy="70" r="62" fill="#fff4ec" stroke="#fcd9c0" strokeWidth="2" />
                  <circle className="about-target-ring-2" cx="70" cy="70" r="46" fill="#ffe2cc" stroke="#f8b688" strokeWidth="2" />
                  <circle className="about-target-ring-3" cx="70" cy="70" r="30" fill="#ffcaa3" stroke="#f4974f" strokeWidth="2" />
                  <circle className="about-target-center" cx="70" cy="70" r="15" fill="#ea580c" />
                  <circle className="about-target-dot" cx="70" cy="70" r="6" fill="#ffffff" />
                  {/* 3D Arrow Striking the Bullseye */}
                  <g className="about-target-arrow">
                    <path d="M125 15L72 68" stroke="#c2410c" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M125 15L110 21M125 15L119 30" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
                    <polygon points="70,70 78,61 61,78" fill="#ea580c" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Vision Card */}
            <div className="about-mv-card about-mv-card--vision">
              <div className="about-mv-content">
                <div className="about-mv-badge">
                  <Sparkles size={14} color="#ea580c" strokeWidth={2.4} />
                  <span>Future Direction</span>
                </div>
                <h2 className="about-mv-title">Our Vision</h2>
                <p className="about-mv-desc">
                  To build a future where technology is more accessible, businesses can innovate with confidence, and every digital product is created with purpose, quality, and trust.
                </p>
              </div>

              {/* Rising 3D Bar Chart & Trend Arrow */}
              <div className="about-mv-art about-mv-art--vision" aria-hidden="true">
                <svg viewBox="0 0 140 140" width="130" height="130" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Stepped 3D Bars */}
                  <rect className="about-chart-bar about-chart-bar-1" x="24" y="86" width="22" height="36" rx="4" fill="url(#barGradient1)" />
                  <rect className="about-chart-bar about-chart-bar-2" x="54" y="62" width="22" height="60" rx="4" fill="url(#barGradient2)" />
                  <rect className="about-chart-bar about-chart-bar-3" x="84" y="34" width="22" height="88" rx="4" fill="url(#barGradient3)" />
                  <line x1="16" y1="122" x2="118" y2="122" stroke="#ebd9c8" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Diagonal Upward Arrow */}
                  <g className="about-chart-trend-group">
                    <path className="about-chart-trend-line" d="M22 92Q60 70 106 24" stroke="#c2410c" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="5 5" />
                    <path className="about-chart-trend-head" d="M88 22H112V46" stroke="#ea580c" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
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
          </div>
        </section>

        {/* ==================================================================
            3. WHAT WE DO (CORE CAPABILITIES) - MATCHING REFERENCE DESIGN
            ================================================================== */}
        <section className="about-capabilities-section">
          {/* Subtle Ambient Silk Flow Waves in Background */}
          <div className="about-capabilities-silk-bg" aria-hidden="true">
            <svg className="about-cap-silk-left" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-60 220 C80 140, 200 200, 260 90 C300 30, 320 -10, 360 -40" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
              <path d="M-90 280 C50 190, 180 250, 280 130 C340 60, 380 20, 420 -10" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
            </svg>
            <svg className="about-cap-silk-right" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M560 160 C420 90, 300 150, 240 50 C200 -10, 180 -50, 140 -80" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
              <path d="M590 220 C450 150, 320 210, 220 90 C160 20, 120 -20, 80 -50" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          <div className="about-section-header">
            {/* Pill badge: CORE CAPABILITIES */}
            <div className="about-capabilities-badge">
              <span>CORE CAPABILITIES</span>
            </div>

            {/* Title: What in black, We Do in orange with curved underline & spark whiskers */}
            <h2 className="about-capabilities-title">
              <span className="about-cap-what">What</span>{' '}
              <span className="about-cap-wedo-wrap">
                <span className="about-cap-wedo">We Do</span>
                {/* 3 radiating whisker sparks at top-right of "Do" */}
                <svg className="about-cap-whiskers" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M8 26L2 30" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M18 16L18 8" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M26 22L34 16" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                </svg>
                {/* Curved orange underline swoosh */}
                <svg className="about-cap-swoosh" viewBox="0 0 160 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 6C45 16 115 16 158 6" stroke="#ea580c" strokeWidth="3.2" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="about-section-desc">
              We combine modern engineering practices with thoughtful design to create digital solutions tailored to your business needs.
            </p>
          </div>

          {/* 4 Premium 3D Service Cards */}
          <div className="about-what-grid">
            {whatWeDo.map((item, idx) => (
              <div
                key={idx}
                className={`about-what-card ${item.highlighted ? 'about-what-card--highlighted' : ''}`}
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                {/* Top Row: Floating 3D Icon Tile & Numbered Badge */}
                <div className="about-what-card-top">
                  <div className="about-what-icon-stage">
                    {/* Layered Orange Backdrop Plate */}
                    <div className="about-what-icon-backdrop" aria-hidden="true" />
                    {/* Elevated White Icon Tile */}
                    <div className="about-what-icon-front">
                      {item.icon}
                    </div>
                  </div>

                  {/* Numbered Badge (01 - 04) */}
                  <div className="about-what-num-badge">
                    {item.number}
                  </div>
                </div>

                {/* Card Body */}
                <h3 className="about-what-card-title">{item.title}</h3>
                <p className="about-what-card-desc">{item.desc}</p>

                {/* Bottom Row: Explore More Button */}
                <div className="about-what-card-bottom">
                  <Link
                    href={item.href}
                    className={`about-what-btn ${item.highlighted ? 'about-what-btn--primary' : 'about-what-btn--outline'}`}
                  >
                    <span>Explore More</span>
                    <span className="about-what-btn-arrow-wrap">
                      <ArrowRight size={15} strokeWidth={2.6} className="about-what-btn-arrow" />
                    </span>
                  </Link>
                </div>

                {/* Flowing Bottom-Right Orange Wave Accents */}
                <div className="about-what-card-wave" aria-hidden="true">
                  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 120 C40 80, 90 90, 160 40 L160 120 Z"
                      fill="url(#cardWaveGrad1)"
                    />
                    <path
                      d="M30 120 C70 95, 110 105, 160 65 L160 120 Z"
                      fill="url(#cardWaveGrad2)"
                    />
                    <defs>
                      <linearGradient id="cardWaveGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f4974f" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.45" />
                      </linearGradient>
                      <linearGradient id="cardWaveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.55" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
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
            5. THE VALUES BEHIND OUR NAME (BRAND PRINCIPLES) - MATCHING REFERENCE
            ================================================================== */}
        <section className="about-values-section" id="values">
          {/* Subtle Ambient Silk Flow Waves in Background */}
          <div className="about-values-silk-bg" aria-hidden="true">
            <svg className="about-val-silk-left" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-60 220 C80 140, 200 200, 260 90 C300 30, 320 -10, 360 -40" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
              <path d="M-90 280 C50 190, 180 250, 280 130 C340 60, 380 20, 420 -10" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
            </svg>
            <svg className="about-val-silk-right" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M560 160 C420 90, 300 150, 240 50 C200 -10, 180 -50, 140 -80" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
              <path d="M590 220 C450 150, 320 210, 220 90 C160 20, 120 -20, 80 -50" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          <div className="about-section-header">
            {/* Pill badge: BRAND PRINCIPLES */}
            <div className="about-values-badge">
              <span>BRAND PRINCIPLES</span>
            </div>

            {/* Title: The Values Behind in black, Our Name in orange with curved underline & spark whiskers */}
            <h2 className="about-values-title">
              <span className="about-val-title-black">The Values Behind</span>{' '}
              <span className="about-val-title-orange-wrap">
                <span className="about-val-title-orange">Our Name</span>
                {/* 3 radiating whisker sparks at top-right of "Name" */}
                <svg className="about-val-whiskers" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M8 26L2 30" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M18 16L18 8" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M26 22L34 16" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                </svg>
                {/* Curved orange underline swoosh */}
                <svg className="about-val-swoosh" viewBox="0 0 180 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 6C50 17 130 17 178 6" stroke="#ea580c" strokeWidth="3.2" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="about-section-desc">
              At ProvenanceTech, our name represents more than technology. It reflects the principles that guide how we work and the relationships we build.
            </p>
          </div>

          {/* 4 Redesigned Value Cards Matching Reference Image */}
          <div className="about-values-grid">
            {valuesBehindName.map((val, idx) => (
              <div
                key={idx}
                className={`about-val-card-item ${val.highlighted ? 'about-val-card-item--highlighted' : ''}`}
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                {/* Overlapping Floating 3D Icon Tile at Top-Left */}
                <div className="about-val-icon-cluster">
                  <div className="about-val-icon-backplate" aria-hidden="true" />
                  <div className="about-val-icon-frontplate">
                    {val.icon}
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="about-val-card-inner">
                  {/* Top-Right Curved Orange Corner with Card Number */}
                  <div className="about-val-corner-cap" aria-hidden="true">
                    <svg viewBox="0 0 100 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0 C30 0, 55 12, 100 48 L100 0 Z" fill="#ea580c" />
                    </svg>
                    <span className="about-val-corner-num">{val.number}</span>
                  </div>

                  {/* Card Content */}
                  <div className="about-val-content">
                    <h3 className="about-val-heading">{val.title}</h3>
                    <p className="about-val-description">{val.desc}</p>
                  </div>

                  {/* Card Footer: Subtle Watermark (Left), Decorative Wave, & Circular Arrow Button (Right) */}
                  <div className="about-val-footer">
                    <div className="about-val-watermark" aria-hidden="true">
                      {val.watermark}
                    </div>

                    <div
                      className={`about-val-arrow-btn ${val.highlighted ? 'about-val-arrow-btn--primary' : 'about-val-arrow-btn--outline'}`}
                      role="img"
                      aria-label={`${val.title} principle`}
                    >
                      <ArrowRight size={17} strokeWidth={2.8} className="about-val-arrow-svg" />
                    </div>
                  </div>

                  {/* Flowing Bottom-Right Orange Wave Accent */}
                  <div className="about-val-bottom-wave" aria-hidden="true">
                    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 110 C45 75, 95 85, 160 35 L160 110 Z"
                        fill="url(#valWaveGrad1)"
                      />
                      <path
                        d="M35 110 C75 88, 115 96, 160 60 L160 110 Z"
                        fill="url(#valWaveGrad2)"
                      />
                      <defs>
                        <linearGradient id="valWaveGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f4974f" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.45" />
                        </linearGradient>
                        <linearGradient id="valWaveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.55" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            6. WHY CHOOSE PROVENANCETECH? (CLIENT PARTNERSHIP) - MATCHING REFERENCE
            ================================================================== */}
        <section className="about-why-section" id="why-choose-us">
          {/* Subtle Ambient Silk Flow Waves in Background */}
          <div className="about-why-silk-bg" aria-hidden="true">
            <svg className="about-why-silk-left" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-60 220 C80 140, 200 200, 260 90 C300 30, 320 -10, 360 -40" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
              <path d="M-90 280 C50 190, 180 250, 280 130 C340 60, 380 20, 420 -10" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
            </svg>
            <svg className="about-why-silk-right" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M560 160 C420 90, 300 150, 240 50 C200 -10, 180 -50, 140 -80" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
              <path d="M590 220 C450 150, 320 210, 220 90 C160 20, 120 -20, 80 -50" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          <div className="about-section-header">
            {/* Pill badge: CLIENT PARTNERSHIP with Handshake */}
            <div className="about-why-badge">
              <HeartHandshake size={15} strokeWidth={2.4} className="about-why-badge-icon" aria-hidden="true" />
              <span>CLIENT PARTNERSHIP</span>
            </div>

            {/* Title: Why Choose in black, ProvenanceTech? in orange with curved underline & spark whiskers */}
            <h2 className="about-why-title">
              <span className="about-why-title-black">Why Choose</span>{' '}
              <span className="about-why-title-orange-wrap">
                <span className="about-why-title-orange">ProvenanceTech?</span>
                {/* 3 radiating whisker sparks at top-right of "?" */}
                <svg className="about-why-whiskers" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M8 26L2 30" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M18 16L18 8" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M26 22L34 16" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                </svg>
                {/* Curved orange underline swoosh */}
                <svg className="about-why-swoosh" viewBox="0 0 210 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 6C55 17 150 17 208 6" stroke="#ea580c" strokeWidth="3.2" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="about-section-desc">
              Reliable engineering, business alignment, and client-first collaboration throughout the software lifecycle.
            </p>
          </div>

          {/* 4 Redesigned Why Choose Cards Matching Reference Image */}
          <div className="about-why-grid">
            {whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                className={`about-why-card-item ${reason.highlighted ? 'about-why-card-item--highlighted' : ''}`}
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                {/* Overlapping Floating 3D Icon Tile at Top-Left */}
                <div className="about-why-icon-cluster">
                  <div className="about-why-icon-backplate" aria-hidden="true" />
                  <div className="about-why-icon-frontplate">
                    {reason.icon}
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="about-why-card-inner">
                  {/* Top-Right Curved Orange Corner with Card Number */}
                  <div className="about-why-corner-cap" aria-hidden="true">
                    <svg viewBox="0 0 100 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0 C30 0, 55 12, 100 48 L100 0 Z" fill="#ea580c" />
                    </svg>
                    <span className="about-why-corner-num">{reason.number}</span>
                  </div>

                  {/* Card Content */}
                  <div className="about-why-content">
                    <h3 className="about-why-card-title">{reason.title}</h3>
                    {/* Short Orange Underline */}
                    <div className="about-why-title-line" aria-hidden="true" />
                    <p className="about-why-card-desc">{reason.desc}</p>
                  </div>

                  {/* Card Footer: Circular Arrow Element */}
                  <div className="about-why-footer">
                    <div
                      className={`about-why-arrow-btn ${reason.highlighted ? 'about-why-arrow-btn--primary' : 'about-why-arrow-btn--outline'}`}
                      role="img"
                      aria-label={`${reason.title} feature`}
                    >
                      <ArrowRight size={17} strokeWidth={2.8} className="about-why-arrow-svg" />
                    </div>
                  </div>

                  {/* Flowing Bottom-Right Orange Wave Accent */}
                  <div className="about-why-bottom-wave" aria-hidden="true">
                    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 110 C45 75, 95 85, 160 35 L160 110 Z"
                        fill="url(#whyWaveGrad1)"
                      />
                      <path
                        d="M35 110 C75 88, 115 96, 160 60 L160 110 Z"
                        fill="url(#whyWaveGrad2)"
                      />
                      <defs>
                        <linearGradient id="whyWaveGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f4974f" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.45" />
                        </linearGradient>
                        <linearGradient id="whyWaveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.55" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            7. CALL TO ACTION BANNER (LET'S BUILD SOMETHING MEANINGFUL)
            ================================================================== */}
        <section className="about-cta-section" id="contact-cta">
          {/* Outer Ambient Flow Waves for seamless background blending */}
          <div className="about-cta-outer-silk" aria-hidden="true">
            <svg className="about-cta-outer-wave-left" viewBox="0 0 420 320" fill="none">
              <path
                d="M-80 260 C 60 210, 150 140, 220 50 C 260 -2, 330 -10, 420 40"
                stroke="url(#cta-outer-stroke-left)"
                strokeWidth="2.5"
                opacity="0.8"
              />
              <path
                d="M-100 290 C 40 250, 130 180, 200 100 C 250 40, 310 30, 400 80"
                fill="url(#cta-outer-fill-left)"
                opacity="0.45"
              />
              <defs>
                <linearGradient id="cta-outer-stroke-left" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="cta-outer-fill-left" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ffedd5" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <svg className="about-cta-outer-wave-right" viewBox="0 0 420 320" fill="none">
              <path
                d="M500 50 C 380 120, 290 190, 200 270 C 150 310, 80 320, -10 290"
                stroke="url(#cta-outer-stroke-right)"
                strokeWidth="2.5"
                opacity="0.8"
              />
              <path
                d="M520 20 C 400 90, 310 160, 220 240 C 170 280, 100 290, 10 260"
                fill="url(#cta-outer-fill-right)"
                opacity="0.45"
              />
              <defs>
                <linearGradient id="cta-outer-stroke-right" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="cta-outer-fill-right" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ffedd5" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="about-cta-card">
            {/* Background Corner Wave Accents */}
            <div className="about-cta-card-bg-waves" aria-hidden="true">
              <svg className="about-cta-bg-wave-tl" viewBox="0 0 280 180" fill="none">
                <path d="M-20 60 C 60 40, 140 10, 220 -20" stroke="rgba(234, 88, 12, 0.18)" strokeWidth="2" />
                <path d="M-20 90 C 70 70, 160 30, 250 -10" stroke="rgba(234, 88, 12, 0.12)" strokeWidth="1.5" />
              </svg>
              <svg className="about-cta-bg-wave-br" viewBox="0 0 360 220" fill="none">
                <path d="M40 240 C 120 180, 220 160, 380 120" stroke="rgba(234, 88, 12, 0.22)" strokeWidth="2" />
                <path d="M80 250 C 160 200, 260 180, 400 150" stroke="rgba(234, 88, 12, 0.14)" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="about-cta-grid">
              {/* Left Column: Typography and Content */}
              <div className="about-cta-content-col">
                <div className="about-cta-dash" />
                
                <h2 className="about-cta-title">
                  Let&apos;s Build Something<br />
                  <span className="about-cta-title-meaningful">
                    Meaningful
                    <svg className="about-cta-swoosh" viewBox="0 0 190 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 14C55 5 135 5 186 14" stroke="#ea580c" strokeWidth="3.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h2>

                <div className="about-cta-subtitle">
                  Every great digital product begins with an idea and the right team to bring it to life.
                </div>

                <p className="about-cta-desc">
                  Whether you&apos;re launching a startup, modernizing an existing application, or exploring a new digital opportunity, ProvenanceTech is ready to help you take the next step.
                </p>

                <div className="about-cta-buttons-row">
                  <Link href="/contact" className="about-cta-btn-primary">
                    <span>Discuss Your Project</span>
                    <ArrowRight size={17} strokeWidth={2.4} className="about-cta-btn-arrow" />
                  </Link>
                  <Link href="/services" className="about-cta-btn-secondary">
                    <span className="about-cta-btn-play-icon">
                      <Play size={12} fill="#ea580c" stroke="#ea580c" />
                    </span>
                    <span>See How We Work</span>
                  </Link>
                </div>
              </div>

              {/* Right Visual Column: 3D Workstation & Technology Stage */}
              <div className="about-cta-visual-col">
                <div className="about-cta-visual-stage">
                  {/* Glowing platform underglow */}
                  <div className="about-cta-platform-glow" aria-hidden="true" />

                  {/* 3D Illustration matching reference design */}
                  <img
                    src="/images/about-cta-3d-raw.png"
                    alt="Let's Build Something Meaningful - 3D Technology Showcase"
                    className="about-cta-3d-illustration"
                  />

                  {/* Interactive Hotspot for the Floating 'Have an Idea?' Callout */}
                  <Link
                    href="/contact"
                    className="about-cta-callout-hotspot"
                    aria-label="Have an Idea? Let's turn it into reality"
                    title="Have an Idea? Let's turn it into reality"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
