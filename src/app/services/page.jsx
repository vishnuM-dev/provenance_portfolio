import Link from 'next/link';
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
  Sparkles,
  CheckCircle2,
  Compass,
  Layout,
  Server,
  ShieldCheck
} from 'lucide-react';

export const metadata = {
  title: 'Our Software Development Services | ProvenanceTech',
  description: 'Explore ProvenanceTech software engineering services: Web Application Development, Mobile Applications, Custom Software, Full-Stack Engineering, UI/UX Design, Cloud Solutions, Maintenance, and DevOps.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'web-dev',
      title: 'Web Application Development',
      tagline: 'Modern Web Platforms & Dashboards',
      description: 'Build responsive websites, customer portals, dashboards, and modern web applications tailored to your business needs.',
      icon: <Globe size={26} strokeWidth={2.2} />,
      offerings: [
        'Responsive single-page and multi-page web applications',
        'Customer self-service portals and administrative dashboards',
        'Next.js and React component architectures',
        'Secure authentication, session management, and role-based access',
      ],
    },
    {
      id: 'mobile-dev',
      title: 'Mobile Application Development',
      tagline: 'Cross-Platform iOS & Android Solutions',
      description: 'Create intuitive mobile experiences for Android and iOS using modern cross-platform development technologies.',
      icon: <Smartphone size={26} strokeWidth={2.2} />,
      offerings: [
        'Cross-platform mobile applications using React Native and Flutter',
        'Intuitive mobile user interfaces and touch-friendly workflows',
        'Offline data synchronization and local storage handling',
        'Push notifications, device capabilities, and hardware integration',
      ],
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      tagline: 'Tailored Business & Operational Systems',
      description: 'Develop tailored software that streamlines business processes, improves productivity, and addresses specific operational challenges.',
      icon: <Code2 size={26} strokeWidth={2.2} />,
      offerings: [
        'Bespoke business workflow automation and rule engines',
        'Legacy application modernization and feature refactoring',
        'Departmental operational management tools and utilities',
        'Tailored third-party service and payment integrations',
      ],
    },
    {
      id: 'fullstack-dev',
      title: 'Full-Stack Development',
      tagline: 'End-to-End Application Architecture',
      description: 'Connect intuitive user interfaces with secure backend architectures, efficient route handlers, and scalable databases.',
      icon: <Layers size={26} strokeWidth={2.2} />,
      offerings: [
        'Complete frontend, backend, and data tier integration',
        'RESTful API design and Next.js Route Handler endpoints',
        'Structured request validation, error handling, and security',
        'Webhook ingestion and asynchronous event processing',
      ],
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      tagline: 'User-Centered Interfaces & Design Systems',
      description: 'Design clear, intuitive user experiences through research, wireframing, high-fidelity prototypes, and cohesive design systems.',
      icon: <Palette size={26} strokeWidth={2.2} />,
      offerings: [
        'User journey mapping, information architecture, and wireframes',
        'Interactive Figma prototypes and usability validation',
        'Reusable design system tokens and component guidelines',
        'Responsive layouts optimized for desktop, tablet, and mobile',
      ],
    },
    {
      id: 'cloud-db',
      title: 'Database & Cloud Solutions',
      tagline: 'Structured Data Storage & Cloud Delivery',
      description: 'Model data schemas and implement cloud storage architectures that keep business information reliable, secure, and accessible.',
      icon: <Database size={26} strokeWidth={2.2} />,
      offerings: [
        'Relational (MySQL, PostgreSQL) and NoSQL (Amazon DynamoDB) modeling',
        'Cloud media storage and CDN optimization (Cloudinary, AWS S3)',
        'Data access control policies and automated backup strategies',
        'Database query tuning, indexing, and indexing optimization',
      ],
    },
    {
      id: 'support-maintenance',
      title: 'Maintenance & Support',
      tagline: 'Ongoing Reliability & Technical Iteration',
      description: 'Ensure ongoing software stability, security updates, dependency maintenance, and feature enhancements after launch.',
      icon: <LifeBuoy size={26} strokeWidth={2.2} />,
      offerings: [
        'Scheduled dependency updates and framework security patching',
        'Bug triage, resolution, and functional troubleshooting',
        'Application health reviews and performance auditing',
        'Agreed post-launch support and feature iteration cycles',
      ],
    },
    {
      id: 'devops-deploy',
      title: 'Deployment & DevOps',
      tagline: 'Predictable Builds & Release Pipelines',
      description: 'Establish automated build pipelines, containerized environments, and cloud infrastructure for predictable releases.',
      icon: <Terminal size={26} strokeWidth={2.2} />,
      offerings: [
        'Docker containerization for consistent local and production environments',
        'Automated CI/CD workflows using GitHub Actions',
        'Environment variable configuration and secret management',
        'Domain setup, SSL certificate provisioning, and release documentation',
      ],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      desc: 'Understand business goals, user requirements, technical feasibility, and project roadmap.',
      icon: <Compass size={22} />,
    },
    {
      step: '02',
      title: 'Design & Architecture',
      desc: 'Define data models, system architecture, user journeys, wireframes, and design components.',
      icon: <Layout size={22} />,
    },
    {
      step: '03',
      title: 'Development & Integration',
      desc: 'Build frontend interfaces, backend endpoints, and third-party integrations using modern engineering practices.',
      icon: <Code2 size={22} />,
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      desc: 'Verify functional correctness, cross-device responsiveness, security considerations, and edge cases.',
      icon: <CheckCircle2 size={22} />,
    },
    {
      step: '05',
      title: 'Deployment & Support',
      desc: 'Deploy the solution to production, verify configuration, document the release, and provide agreed ongoing support.',
      icon: <Server size={22} />,
    },
  ];

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* ========================================================= */}
      {/* 1. SERVICES PAGE HERO                                     */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '4.5rem 0 3.5rem',
          borderBottom: '1px solid #dfd5c8',
          background: 'linear-gradient(180deg, rgba(247, 238, 228, 0.4) 0%, rgba(255, 255, 255, 0.85) 100%)',
        }}
      >
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
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
            OUR SERVICES
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
            Technology Solutions Designed Around Your Business
          </h1>

          <p
            style={{
              fontSize: '1.14rem',
              color: '#4a3d31',
              lineHeight: 1.7,
              marginBottom: '2.25rem',
              maxWidth: '680px',
              marginInline: 'auto',
              fontWeight: 450,
            }}
          >
            We help businesses turn ideas into reliable digital products through modern web development, mobile applications, and custom software solutions.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                padding: '0.85rem 2rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.96rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 16px rgba(223, 122, 56, 0.28)',
              }}
            >
              Discuss Your Project
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/portfolio"
              className="btn btn-secondary"
              style={{
                padding: '0.85rem 1.85rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.96rem',
                background: '#ffffff',
                border: '1px solid #dfd5c8',
                color: '#2d231b',
              }}
            >
              View Featured Work
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. EIGHT CORE SERVICES                                    */}
      {/* ========================================================= */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto 3.25rem', textAlign: 'center' }}>
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
              CAPABILITIES & EXPERTISE
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
              Comprehensive Software Engineering
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#5a4c3e', lineHeight: 1.65 }}>
              From initial user experience design to production release, we deliver focused engineering services tailored to your technical requirements.
            </p>
          </div>

          {/* 8 Service Cards Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
          <div className="services-grid-3">
            {services.map((srv) => (
              <article
                key={srv.id}
                className="service-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  border: '1px solid #dfd5c8',
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  boxShadow: '0 6px 20px rgba(45, 35, 27, 0.04)',
                }}
              >
                <div>
                  {/* Icon */}
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '16px',
                      background: 'rgba(223, 122, 56, 0.1)',
                      color: 'var(--primary, #df7a38)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {srv.icon}
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    style={{
                      fontSize: '1.28rem',
                      fontWeight: 800,
                      color: '#1a130e',
                      letterSpacing: '-0.015em',
                      marginBottom: '0.3rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {srv.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--primary, #df7a38)',
                      fontWeight: 700,
                      marginBottom: '0.85rem',
                    }}
                  >
                    {srv.tagline}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: '#5a4c3e',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      marginBottom: '1.4rem',
                    }}
                  >
                    {srv.description}
                  </p>

                  {/* Key Offerings Bullet Points */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                      marginBottom: '1.75rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid #f2e8dc',
                    }}
                  >
                    {srv.offerings.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.55rem',
                          fontSize: '0.84rem',
                          color: '#2d231b',
                          lineHeight: 1.45,
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          color="var(--primary)"
                          style={{ flexShrink: 0, marginTop: '2px' }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button: Consistent Discuss Your Project */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid #f2e8dc' }}>
                  <Link
                    href="/contact"
                    className="service-card-btn"
                    style={{
                      width: '100%',
                      padding: '0.65rem 1.25rem',
                      borderRadius: '12px',
                      background: '#faf6f0',
                      border: '1px solid #dfd5c8',
                      color: '#1a130e',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight size={15} color="var(--primary)" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. DEVELOPMENT PROCESS SECTION                            */}
      {/* ========================================================= */}
      <section
        style={{
          padding: '5rem 0',
          background: 'linear-gradient(180deg, rgba(247, 238, 228, 0.4) 0%, rgba(255, 255, 255, 0.95) 100%)',
          borderTop: '1px solid #dfd5c8',
          borderBottom: '1px solid #dfd5c8',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
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
              HOW WE DELIVER
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
              A Clear Process From Idea to Launch
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#5a4c3e', lineHeight: 1.65 }}>
              Our structured development methodology ensures clear communication, predictable milestones, and reliable software delivery.
            </p>
          </div>

          {/* 5-Step Timeline Grid (Horizontal on desktop, stacked on mobile) */}
          <div className="process-grid-5">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="process-step-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #dfd5c8',
                  padding: '1.75rem 1.35rem',
                  display: 'flex',
                  flexDirection: 'column',
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
                      fontSize: '1.65rem',
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
                    marginTop: 'auto',
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
      {/* 4. BOTTOM CONSULTATION CALL TO ACTION                     */}
      {/* ========================================================= */}
      <section style={{ padding: '5rem 0 2rem' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div
            style={{
              textAlign: 'center',
              padding: 'clamp(2.5rem, 5vw, 3.5rem) 2rem',
              borderRadius: '28px',
              background: '#ffffff',
              border: '1px solid #dfd5c8',
              boxShadow: '0 16px 44px rgba(45, 35, 27, 0.06)',
            }}
          >
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
                marginBottom: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
              }}
            >
              <ShieldCheck size={14} color="var(--primary)" />
              START THE CONVERSATION
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)',
                fontWeight: 800,
                color: '#1a130e',
                marginBottom: '0.85rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
              }}
            >
              Ready to Build Your Next Software Solution?
            </h2>

            <p
              style={{
                color: '#5a4c3e',
                fontSize: '1.02rem',
                maxWidth: '600px',
                margin: '0 auto 2rem',
                lineHeight: 1.65,
              }}
            >
              Tell us about your requirements, project scope, or technical challenges. Our engineering team is ready to help you plan the right digital solution.
            </p>

            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                padding: '0.85rem 2.25rem',
                fontSize: '0.96rem',
                fontWeight: 600,
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                boxShadow: '0 4px 16px rgba(223, 122, 56, 0.28)',
              }}
            >
              Discuss Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
