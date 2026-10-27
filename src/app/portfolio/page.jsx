'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Globe,
  Smartphone,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Target,
  Users,
  CheckCircle2,
  Compass,
  Layout,
  ChevronDown,
  ArrowRight,
  Send,
  Loader2,
  Sparkles,
  ExternalLink,
  MessageSquare,
  FileCode,
  Check,
  Server
} from 'lucide-react';
import { TECHNOLOGY_CATEGORIES } from '@/data/technologies';

export default function PortfolioPage() {
  // Category Filter for Section 02
  const [activeCategory, setActiveCategory] = useState('All');

  // FAQ Accordion State for Section 07 (first item open by default)
  const [openFaq, setOpenFaq] = useState(0);

  // Section 08: Contact Form State
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'Web Application Development',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, msg: '', inquiryId: '' });

  // 4 Featured Demonstration Projects (transparently marked as demonstration / concept work)
  const projects = [
    {
      id: 'PRV-2026-APP01',
      title: 'ApexPay Global',
      subtitle: 'Cross-Border Payments & Digital Wallet',
      category: 'Mobile Applications',
      shortDesc: 'Biometric-authenticated cross-border payments app with multi-currency digital wallet and automated ledger settlements.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      tech: ['React Native', 'Node.js', 'Amazon DynamoDB', 'REST APIs'],
      typeLabel: 'Demonstration Project',
      caseStudyUrl: '/catalog/PRV-2026-APP01',
    },
    {
      id: 'PRV-2026-APP02',
      title: 'PulseHealth Suite',
      subtitle: 'Telemedicine & Clinical Provider Portal',
      category: 'Web Applications',
      shortDesc: 'Responsive clinical consultation portal featuring secure WebRTC video rooms, patient vitals monitoring, and diagnostic record uploads.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      tech: ['Next.js', 'React', 'WebRTC', 'Amazon DynamoDB', 'Cloudinary'],
      typeLabel: 'Demonstration Project',
      caseStudyUrl: '/catalog/PRV-2026-APP02',
    },
    {
      id: 'PRV-2026-APP03',
      title: 'OmniLogistics Engine',
      subtitle: 'Fleet Telemetry & Dispatch Console',
      category: 'Business Software',
      shortDesc: 'Real-time fleet telemetry dispatch console and driver application providing live asset positioning and route coordination.',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      tech: ['Node.js', 'Flutter', 'Amazon DynamoDB', 'WebSockets'],
      typeLabel: 'Demonstration Project',
      caseStudyUrl: '/catalog/PRV-2026-APP03',
    },
    {
      id: 'PRV-2026-APP04',
      title: 'Zenith Commerce',
      subtitle: 'Headless B2B & Retail Storefront',
      category: 'E-Commerce',
      shortDesc: 'Modular, headless e-commerce application designed for rapid catalog navigation, instantaneous cart workflows, and secure checkout.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe API'],
      typeLabel: 'Demonstration Project',
      caseStudyUrl: '/catalog/PRV-2026-APP04',
    },
  ];

  const categories = ['All', 'Web Applications', 'Mobile Applications', 'Business Software', 'E-Commerce'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  // 4 Services Overview for Section 03
  const services = [
    {
      title: 'Web Application Development',
      desc: 'Build responsive websites, customer portals, dashboards, and modern web applications tailored to your business.',
      icon: <Globe size={26} strokeWidth={2.2} />,
      link: '/services',
    },
    {
      title: 'Mobile Application Development',
      desc: 'Create intuitive mobile experiences for Android and iOS using appropriate mobile development technologies.',
      icon: <Smartphone size={26} strokeWidth={2.2} />,
      link: '/services',
    },
    {
      title: 'Custom Software Development',
      desc: 'Develop tailored software that streamlines business processes, improves productivity, and addresses specific operational challenges.',
      icon: <Code2 size={26} strokeWidth={2.2} />,
      link: '/services',
    },
    {
      title: 'Backend & API Development',
      desc: 'Build reliable APIs, database-driven applications, and backend systems that connect digital products and support future growth.',
      icon: <Cpu size={26} strokeWidth={2.2} />,
      link: '/services',
    },
  ];

  // 5 Process Steps for Section 05
  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'Understand the business goals, requirements, target users, and project scope.',
      icon: <Compass size={22} />,
    },
    {
      step: '02',
      title: 'Planning & Design',
      desc: 'Define the solution architecture, user journeys, wireframes, and interface design.',
      icon: <Layout size={22} />,
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Build the application using appropriate technologies and maintainable engineering practices.',
      icon: <Code2 size={22} />,
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      desc: 'Validate functionality, accessibility, security considerations, and performance requirements.',
      icon: <CheckCircle2 size={22} />,
    },
    {
      step: '05',
      title: 'Deployment & Support',
      desc: 'Deploy the solution, document the release, and provide agreed maintenance and support.',
      icon: <Server size={22} />,
    },
  ];

  // 4 Differentiators for Section 06
  const differentiators = [
    {
      title: 'Purposeful Engineering',
      desc: 'We focus on solving real business problems rather than adding unnecessary technical complexity.',
      icon: <Target size={24} />,
    },
    {
      title: 'Maintainable Solutions',
      desc: 'We prioritize readable code, thoughtful architecture, and systems that can evolve with changing requirements.',
      icon: <Layers size={24} />,
    },
    {
      title: 'Transparent Collaboration',
      desc: 'We value clear communication, practical planning, and feedback throughout the development process.',
      icon: <MessageSquare size={24} />,
    },
    {
      title: 'Ownership & Documentation',
      desc: 'We define source-code ownership, repository access, documentation, and handover responsibilities clearly within each project agreement.',
      icon: <ShieldCheck size={24} />,
    },
  ];

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

  // Handle Form Submission for Section 08
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});

    // Client-side validations
    const errors = {};
    if (!form.name.trim()) errors.name = 'Full name is required';
    if (!form.email.trim()) {
      errors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!form.message.trim()) errors.message = 'Please describe your project requirements';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus({ loading: true, success: false, msg: '', inquiryId: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          organization: form.organization.trim(),
          projectType: form.projectType,
          message: form.message.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit inquiry');

      setFormStatus({
        loading: false,
        success: true,
        msg: 'Thank you for reaching out! We have received your inquiry and our engineering team will get back to you shortly.',
        inquiryId: data.inquiryId || '',
      });
      setForm({
        name: '',
        email: '',
        organization: '',
        projectType: 'Web Application Development',
        message: '',
      });
    } catch (err) {
      setFormStatus({
        loading: false,
        success: false,
        msg: err.message || 'An error occurred while submitting. Please try again or email us directly.',
        inquiryId: '',
      });
    }
  };

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* ========================================================= */}
      {/* SECTION 01: PORTFOLIO HERO                                */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '4.5rem 0 4rem',
          borderBottom: '1px solid #dfd5c8',
          background: 'linear-gradient(180deg, rgba(247, 238, 228, 0.4) 0%, rgba(255, 255, 255, 0.9) 100%)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Heading, Description & Actions */}
            <div>
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
                  marginBottom: '1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.95rem',
                  borderRadius: '9999px',
                }}
              >
                <Sparkles size={14} color="var(--primary, #df7a38)" />
                OUR PORTFOLIO
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: '#1a130e',
                  lineHeight: 1.15,
                  marginBottom: '1.35rem',
                }}
              >
                Digital Experiences. Thoughtfully Engineered.
              </h1>

              <p
                style={{
                  fontSize: '1.12rem',
                  color: '#4a3d31',
                  lineHeight: 1.7,
                  marginBottom: '2.25rem',
                  maxWidth: '560px',
                  fontWeight: 450,
                }}
              >
                Explore how we approach software development, combining modern technologies, thoughtful design, and reliable engineering to create digital experiences for businesses.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="#featured-projects"
                  className="btn btn-primary"
                  style={{
                    padding: '0.8rem 1.8rem',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 16px rgba(223, 122, 56, 0.28)',
                  }}
                >
                  Explore Our Work
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#contact"
                  className="btn btn-secondary"
                  style={{
                    padding: '0.8rem 1.75rem',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    background: '#ffffff',
                    border: '1px solid #dfd5c8',
                    color: '#2d231b',
                  }}
                >
                  Discuss Your Project
                </a>
              </div>

              {/* Quick Pillars */}
              <div
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                  marginTop: '2.5rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid #e8ded4',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: '#6e6054', fontWeight: 600 }}>
                  <Check size={16} color="var(--primary)" /> Clean Code Architecture
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: '#6e6054', fontWeight: 600 }}>
                  <Check size={16} color="var(--primary)" /> Modern Web & Mobile
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: '#6e6054', fontWeight: 600 }}>
                  <Check size={16} color="var(--primary)" /> Tailored Solutions
                </div>
              </div>
            </div>

            {/* Right Column: Refined Abstract Software Interface Visual */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '100%',
                  maxWidth: '520px',
                  background: '#ffffff',
                  borderRadius: '24px',
                  border: '1px solid #dfd5c8',
                  boxShadow: '0 16px 40px rgba(45, 35, 27, 0.08)',
                  overflow: 'hidden',
                }}
              >
                {/* Interface Window Header */}
                <div
                  style={{
                    padding: '0.9rem 1.25rem',
                    background: '#fcf8f3',
                    borderBottom: '1px solid #dfd5c8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e07a5f' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#e9c46a' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2a9d8f' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#7a6b5e', marginLeft: '0.5rem' }}>
                      provenance-app-system
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      background: 'rgba(223, 122, 56, 0.12)',
                      color: 'var(--primary)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '9999px',
                    }}
                  >
                    ENGINEERED STACK
                  </span>
                </div>

                {/* Interface Canvas */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Top Status Banner */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: '#fffbf7',
                      border: '1px solid #f0e4d7',
                      borderRadius: '14px',
                      padding: '0.85rem 1rem',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9e8f82', fontWeight: 700 }}>
                        System Status
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1a130e' }}>
                        Active Production Releases
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#2e7d5a', fontSize: '0.8rem', fontWeight: 700 }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2e7d5a' }} />
                      Verified
                    </div>
                  </div>

                  {/* Architecture Grid Preview */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                    <div style={{ background: '#faf6f0', padding: '1rem', borderRadius: '14px', border: '1px solid #dfd5c8' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                        <Globe size={18} />
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1a130e' }}>Web Apps</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6e6054' }}>Next.js • React • TypeScript</div>
                    </div>

                    <div style={{ background: '#faf6f0', padding: '1rem', borderRadius: '14px', border: '1px solid #dfd5c8' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                        <Smartphone size={18} />
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1a130e' }}>Mobile Apps</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6e6054' }}>React Native • Flutter</div>
                    </div>

                    <div style={{ background: '#faf6f0', padding: '1rem', borderRadius: '14px', border: '1px solid #dfd5c8' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                        <Cpu size={18} />
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1a130e' }}>APIs & Services</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6e6054' }}>Node.js • Route Handlers</div>
                    </div>

                    <div style={{ background: '#faf6f0', padding: '1rem', borderRadius: '14px', border: '1px solid #dfd5c8' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.4rem', color: 'var(--primary)' }}>
                        <Layers size={18} />
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1a130e' }}>Cloud Datastores</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#6e6054' }}>DynamoDB • MySQL • AWS</div>
                    </div>
                  </div>

                  {/* Code Architecture Snippet */}
                  <div
                    style={{
                      background: '#231b14',
                      color: '#faf6f0',
                      borderRadius: '12px',
                      padding: '0.85rem 1rem',
                      fontFamily: 'monospace',
                      fontSize: '0.74rem',
                      lineHeight: 1.5,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.2rem',
                    }}
                  >
                    <div style={{ color: 'var(--primary, #eb7821)', fontWeight: 700 }}>{`// ProvenanceTech Service Contract`}</div>
                    <div>const solution = await buildSolution(requirements);</div>
                    <div style={{ color: '#2a9d8f' }}>return solution.deploy({'{ mode: "scalable", audit: "clean" }'});</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 02: FEATURED PROJECTS                             */}
      {/* ========================================================= */}
      <section id="featured-projects" style={{ padding: '5rem 0', scrollMarginTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
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
              SELECTED WORK
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#1a130e',
                lineHeight: 1.2,
                marginBottom: '0.85rem',
              }}
            >
              Projects Built to Solve Real Problems
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#5a4c3e', lineHeight: 1.65 }}>
              Discover digital solutions designed around business needs, user experiences, and practical engineering requirements.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '3rem',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: activeCategory === cat ? '1px solid var(--primary)' : '1px solid #dfd5c8',
                  background: activeCategory === cat ? 'var(--primary)' : '#ffffff',
                  color: activeCategory === cat ? '#ffffff' : '#4a3d31',
                  boxShadow: activeCategory === cat ? '0 4px 12px rgba(223, 122, 56, 0.25)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredProjects.map((p) => (
              <article
                key={p.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  border: '1px solid #dfd5c8',
                  boxShadow: '0 8px 24px rgba(45, 35, 27, 0.05)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
                }}
                className="portfolio-project-card"
              >
                {/* Project Image & Demo Badge */}
                <div style={{ position: 'relative', height: '210px', width: '100%', background: '#ede3d8', overflow: 'hidden' }}>
                  <Image
                    src={p.imageUrl}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(26, 19, 14, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.7rem',
                      borderRadius: '9999px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {p.typeLabel}
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--primary)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '8px',
                      border: '1px solid #dfd5c8',
                    }}
                  >
                    {p.category}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: '#1a130e',
                      letterSpacing: '-0.015em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {p.title}
                  </h3>

                  <div style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.85rem' }}>
                    {p.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#5a4c3e',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {p.shortDesc}
                  </p>

                  {/* Technologies Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem', marginTop: 'auto' }}>
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          background: '#fbf7f2',
                          color: '#4a3d31',
                          border: '1px solid #dfd5c8',
                          padding: '0.25rem 0.55rem',
                          borderRadius: '6px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <Link
                    href={p.caseStudyUrl}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.45rem',
                      background: '#faf6f0',
                      border: '1px solid #dfd5c8',
                      color: '#1a130e',
                      padding: '0.65rem 1.25rem',
                      borderRadius: '12px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    className="portfolio-btn-outline"
                  >
                    View Case Study
                    <ArrowRight size={15} color="var(--primary)" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Catalog Reference Note */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <Link
              href="/catalog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: 'var(--primary)',
                textDecoration: 'none',
              }}
            >
              Browse complete projects catalog & case studies directory
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 03: SERVICES OVERVIEW                             */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '5rem 0',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(247, 238, 228, 0.4) 100%)',
          borderTop: '1px solid #dfd5c8',
          borderBottom: '1px solid #dfd5c8',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '750px', margin: '0 auto 3rem', textAlign: 'center' }}>
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
              WHAT WE BUILD
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#1a130e',
                lineHeight: 1.2,
                marginBottom: '0.85rem',
              }}
            >
              Software Solutions for Growing Businesses
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#5a4c3e', lineHeight: 1.65 }}>
              From modern web applications to custom business software, we help turn complex requirements into practical digital solutions.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {services.map((s, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #dfd5c8',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: '0 6px 20px rgba(45, 35, 27, 0.04)',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(223, 122, 56, 0.1)',
                    color: 'var(--primary, #df7a38)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {s.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.22rem',
                    fontWeight: 800,
                    color: '#1a130e',
                    letterSpacing: '-0.015em',
                    marginBottom: '0.65rem',
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#6e6054',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {s.desc}
                </p>

                <Link
                  href={s.link}
                  style={{
                    marginTop: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    color: 'var(--primary, #df7a38)',
                    textDecoration: 'none',
                  }}
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 04: TECHNOLOGIES WE USE                           */}
      {/* ========================================================= */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 3rem', textAlign: 'center' }}>
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
              OUR TECHNOLOGY STACK
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#1a130e',
                lineHeight: 1.2,
                marginBottom: '0.85rem',
              }}
            >
              The Right Technology for Every Solution
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#5a4c3e', lineHeight: 1.65 }}>
              We use modern frameworks, reliable databases, and practical engineering tools to build maintainable digital products.
            </p>
            <p style={{ fontSize: '0.88rem', color: '#8d7d6f', marginTop: '0.5rem', fontStyle: 'italic' }}>
              Technology choices depend on specific project requirements and scaling needs.
            </p>
          </div>

          {/* 6 Concise Technology Categories */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {TECHNOLOGY_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #dfd5c8',
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 16px rgba(45, 35, 27, 0.03)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a130e' }}>{cat.title}</h3>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      background: 'rgba(223, 122, 56, 0.1)',
                      color: 'var(--primary)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cat.badge}
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {cat.technologies.map((t) => (
                    <div
                      key={t.name}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        background: '#faf6f0',
                        border: '1px solid #dfd5c8',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '10px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: '#2d231b',
                      }}
                    >
                      <span style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {t.icon}
                      </span>
                      <span>{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link
              href="/technologies"
              className="btn btn-secondary btn-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.6rem 1.4rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.86rem',
                background: '#ffffff',
                border: '1px solid #dfd5c8',
              }}
            >
              Explore Full Technology Capabilities
              <ArrowRight size={14} color="var(--primary)" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 05: OUR DEVELOPMENT PROCESS                       */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '5rem 0',
          background: 'linear-gradient(180deg, rgba(247, 238, 228, 0.4) 0%, rgba(255, 255, 255, 0.9) 100%)',
          borderTop: '1px solid #dfd5c8',
          borderBottom: '1px solid #dfd5c8',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
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
              HOW WE WORK
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#1a130e',
                lineHeight: 1.2,
                marginBottom: '0.85rem',
              }}
            >
              From Idea to Implementation
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#5a4c3e', lineHeight: 1.65 }}>
              Our structured development process helps turn business requirements into practical, well-engineered digital products.
            </p>
          </div>

          {/* 5-Step Timeline Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              position: 'relative',
            }}
          >
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #dfd5c8',
                  padding: '1.75rem 1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: '0 6px 18px rgba(45, 35, 27, 0.04)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 900,
                      color: 'var(--primary)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {step.step}
                  </span>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(223, 122, 56, 0.1)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 800,
                    color: '#1a130e',
                    marginBottom: '0.55rem',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#6e6054',
                    lineHeight: 1.55,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 06: WHY PROVENANCETECH?                           */}
      {/* ========================================================= */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
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
              WHY WORK WITH US
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#1a130e',
                lineHeight: 1.2,
                marginBottom: '0.85rem',
              }}
            >
              Built Around Your Business. Designed for What&apos;s Next.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {differentiators.map((d, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #dfd5c8',
                  padding: '2.25rem 1.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 6px 20px rgba(45, 35, 27, 0.04)',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'rgba(223, 122, 56, 0.1)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {d.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.22rem',
                    fontWeight: 800,
                    color: '#1a130e',
                    marginBottom: '0.65rem',
                    lineHeight: 1.3,
                  }}
                >
                  {d.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#6e6054',
                    lineHeight: 1.6,
                  }}
                >
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 07: FREQUENTLY ASKED QUESTIONS                    */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '5rem 0',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(247, 238, 228, 0.5) 100%)',
          borderTop: '1px solid #dfd5c8',
          borderBottom: '1px solid #dfd5c8',
        }}
      >
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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

      {/* ========================================================= */}
      {/* SECTION 08: CONTACT & PROJECT INQUIRY                     */}
      {/* ========================================================= */}
      <section id="contact" style={{ padding: '5.5rem 0 3rem', scrollMarginTop: '80px' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '28px',
              border: '1px solid #dfd5c8',
              boxShadow: '0 16px 48px rgba(45, 35, 27, 0.08)',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
            }}
          >
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div
                className="section-badge"
                style={{
                  background: 'rgba(223, 122, 56, 0.1)',
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
                HAVE A PROJECT IN MIND?
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: '#1a130e',
                  lineHeight: 1.2,
                  marginBottom: '0.85rem',
                }}
              >
                Let&apos;s Build Something Meaningful.
              </h2>

              <p style={{ fontSize: '1.05rem', color: '#5a4c3e', lineHeight: 1.65, maxWidth: '620px', margin: '0 auto' }}>
                Have an idea, a business challenge, or an application you want to develop? Tell us about your requirements, and let&apos;s explore the right solution together.
              </p>
            </div>

            {/* Form Confirmation Feedback */}
            {formStatus.success ? (
              <div
                style={{
                  padding: '2rem',
                  background: '#eaf5f0',
                  borderRadius: '16px',
                  border: '1px solid #2e7d5a',
                  textAlign: 'center',
                }}
              >
                <CheckCircle2 size={40} color="#2e7d5a" style={{ margin: '0 auto 0.75rem' }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1a4835', marginBottom: '0.5rem' }}>
                  Inquiry Transmitted Successfully
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#2a5a44', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto 1.25rem' }}>
                  {formStatus.msg}
                </p>
                {formStatus.inquiryId && (
                  <div style={{ fontSize: '0.8rem', color: '#527c67', fontWeight: 600 }}>
                    Inquiry Reference: <code>{formStatus.inquiryId}</code>
                  </div>
                )}
                <button
                  onClick={() => setFormStatus({ loading: false, success: false, msg: '', inquiryId: '' })}
                  className="btn btn-primary"
                  style={{ marginTop: '1.5rem', borderRadius: '9999px', padding: '0.6rem 1.5rem', fontSize: '0.88rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {formStatus.msg && !formStatus.success && (
                  <div
                    style={{
                      padding: '0.85rem 1.25rem',
                      background: '#fde8e8',
                      border: '1px solid #d94343',
                      borderRadius: '12px',
                      color: '#9e2525',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                    }}
                  >
                    {formStatus.msg}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  {/* Full Name */}
                  <div>
                    <label htmlFor="portfolio-name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a130e', marginBottom: '0.4rem' }}>
                      Full Name <span style={{ color: 'var(--primary)' }}>*</span>
                    </label>
                    <input
                      id="portfolio-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '12px',
                        border: formErrors.name ? '1px solid #d94343' : '1px solid #dfd5c8',
                        background: '#faf6f0',
                        fontSize: '0.92rem',
                        color: '#1a130e',
                        outline: 'none',
                      }}
                    />
                    {formErrors.name && (
                      <span style={{ fontSize: '0.78rem', color: '#d94343', marginTop: '0.3rem', display: 'block' }}>
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label htmlFor="portfolio-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a130e', marginBottom: '0.4rem' }}>
                      Work Email <span style={{ color: 'var(--primary)' }}>*</span>
                    </label>
                    <input
                      id="portfolio-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.com"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '12px',
                        border: formErrors.email ? '1px solid #d94343' : '1px solid #dfd5c8',
                        background: '#faf6f0',
                        fontSize: '0.92rem',
                        color: '#1a130e',
                        outline: 'none',
                      }}
                    />
                    {formErrors.email && (
                      <span style={{ fontSize: '0.78rem', color: '#d94343', marginTop: '0.3rem', display: 'block' }}>
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  {/* Company Name */}
                  <div>
                    <label htmlFor="portfolio-org" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a130e', marginBottom: '0.4rem' }}>
                      Company Name <span style={{ color: '#8d7d6f', fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <input
                      id="portfolio-org"
                      type="text"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      placeholder="e.g. Acme Corp"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid #dfd5c8',
                        background: '#faf6f0',
                        fontSize: '0.92rem',
                        color: '#1a130e',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="portfolio-type" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a130e', marginBottom: '0.4rem' }}>
                      Project Type
                    </label>
                    <select
                      id="portfolio-type"
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid #dfd5c8',
                        background: '#faf6f0',
                        fontSize: '0.92rem',
                        color: '#1a130e',
                        outline: 'none',
                      }}
                    >
                      <option value="Web Application Development">Web Application Development</option>
                      <option value="Mobile Application Development">Mobile Application Development</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Backend & API Development">Backend & API Development</option>
                      <option value="Other / Full Consultation">Other / Full Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Project Requirements */}
                <div>
                  <label htmlFor="portfolio-message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a130e', marginBottom: '0.4rem' }}>
                    Project Requirements <span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <textarea
                    id="portfolio-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about the business problem, expected timeline, or key technical specifications..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '12px',
                      border: formErrors.message ? '1px solid #d94343' : '1px solid #dfd5c8',
                      background: '#faf6f0',
                      fontSize: '0.92rem',
                      color: '#1a130e',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                  {formErrors.message && (
                    <span style={{ fontSize: '0.78rem', color: '#d94343', marginTop: '0.3rem', display: 'block' }}>
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginTop: '0.75rem',
                  }}
                >
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="btn btn-primary"
                    style={{
                      padding: '0.85rem 2rem',
                      borderRadius: '9999px',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      boxShadow: '0 4px 16px rgba(223, 122, 56, 0.28)',
                      cursor: formStatus.loading ? 'not-allowed' : 'pointer',
                      opacity: formStatus.loading ? 0.75 : 1,
                    }}
                  >
                    {formStatus.loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        Discuss Your Project
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <Link
                    href="/contact"
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: '#6e6054',
                      textDecoration: 'none',
                    }}
                  >
                    Contact Our Team Directly &rarr;
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
