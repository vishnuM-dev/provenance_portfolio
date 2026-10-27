import Link from 'next/link';
import Image from 'next/image';
import { getAllAssets } from '@/lib/dynamodb';
import { SEED_SERVICES } from '@/lib/seed-data';
import AssetCard from '@/components/AssetCard';
import TechnologiesSection from '@/components/TechnologiesSection';
import HeroDevicesAnimation from '@/components/HeroDevicesAnimation';
import {
  Code2,
  Smartphone,
  Layout,
  Cpu,
  Layers,
  Database,
  LifeBuoy,
  Terminal,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Search,
  Zap,
  Globe,
  Clock,
  Laptop,
  Flame,
  Award
} from 'lucide-react';

export const revalidate = 0;

export default async function HomePage() {
  const allProjects = await getAllAssets();
  const featuredProjects = allProjects.slice(0, 3);

  // Service icon resolver
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={24} />;
      case 'Smartphone': return <Smartphone size={24} />;
      case 'Cpu': return <Cpu size={24} />;
      case 'Layers': return <Layers size={24} />;
      case 'Database': return <Database size={24} />;
      case 'LifeBuoy': return <LifeBuoy size={24} />;
      case 'Terminal': return <Terminal size={24} />;
      default: return <Code2 size={24} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5.5rem', paddingBottom: '4rem' }}>
      {/* 1. Hero Section - Simplified & Modern Two-Column Layout */}
      <section style={{
        position: 'relative',
        padding: '3.75rem 0 3.75rem',
        overflow: 'visible',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        {/* Geometric Polygonal Tech Network Background - Shifted right */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/images/hero-tech-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          opacity: 0.35,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }} />

        {/* Directional Softening Gradient: Solid Warm Ivory on Left Text Side, Clear on Right Devices Side */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #f6f1ea 0%, rgba(246, 241, 234, 0.98) 38%, rgba(246, 241, 234, 0.65) 62%, rgba(246, 241, 234, 0.2) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Subtle Top & Bottom Blending */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(246, 241, 234, 0.8) 0%, transparent 20%, transparent 80%, #f6f1ea 100%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}>
            {/* Left Column: Typography & Action Buttons */}
            <div>

              {/* Bold Headline with High Contrast */}
              <h1 className="hero-title-enter" style={{
                fontSize: 'clamp(2.5rem, 4.4vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
              }}>
                We Build Digital Experiences That <span style={{ color: 'var(--primary)' }}>Grow Your Business.</span>
              </h1>

              {/* Short Description with Rich Contrast */}
              <p className="hero-desc-enter" style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '520px',
                marginBottom: '2.25rem',
                fontWeight: 450,
              }}>
                We create modern web applications, mobile apps, and custom software solutions that help businesses work smarter and grow faster.
              </p>

              {/* Two CTA Buttons with Crisp Contrast */}
              <div className="hero-cta-enter" style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}>
                <Link
                  href="/catalog"
                  className="btn btn-primary"
                  style={{
                    padding: '0.85rem 2rem',
                    fontSize: '0.975rem',
                    fontWeight: 700,
                    borderRadius: '9999px',
                    boxShadow: '0 8px 24px rgba(197, 155, 79, 0.35)',
                  }}
                >
                  Explore Our Work
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/contact"
                  className="btn btn-secondary"
                  style={{
                    padding: '0.85rem 2rem',
                    fontSize: '0.975rem',
                    fontWeight: 600,
                    borderRadius: '9999px',
                    background: '#ffffff',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: '0 4px 14px rgba(25, 22, 18, 0.05)',
                  }}
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>

            {/* Right Column: Premium Floating Laptop & Smartphone with Surrounding Technology Icons */}
            <div className="hero-visual-enter" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              width: '100%',
              overflow: 'visible',
            }}>
              <HeroDevicesAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Services Overview */}
      <section className="container reveal-on-scroll">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--primary)',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}>
            <Sparkles size={14} />
            What We Build
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.7rem)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            color: 'var(--text-primary)',
            marginBottom: '0.85rem',
          }}>
            Services Built for High-Impact Software
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            From high-conversion web applications to responsive iOS and Android apps, our cross-functional team delivers production-ready code tailored to your exact business needs.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem',
          alignItems: 'stretch',
        }}>
          {SEED_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="glass-panel"
              style={{
                padding: '2rem',
                background: '#ffffff',
                borderRadius: '28px',
                border: '1px solid rgba(220, 195, 170, 0.45)',
                boxShadow: '0 14px 34px -8px rgba(160, 115, 75, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'var(--primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '1.25rem',
                }}>
                  {getServiceIcon(srv.icon)}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem', minHeight: '32px', lineHeight: 1.25 }}>
                  {srv.title}
                </h3>

                <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.85rem', minHeight: '20px' }}>
                  {srv.tagline}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem', minHeight: '64px' }}>
                  {srv.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(220, 195, 170, 0.35)', paddingTop: '1rem', marginTop: 'auto' }}>
                <Link
                  href="/services"
                  className="btn btn-secondary btn-sm"
                  style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  <span>Learn Capabilities</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Projects & Case Studies (Matching "Top List – Our mainstay menu") */}
      <section className="container reveal-on-scroll">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div>
            <div style={{
              fontSize: '0.8rem',
              color: 'var(--primary)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.35rem',
            }}>
              Proven Software Products
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>
              Featured Projects & Case Studies
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.25rem' }}>
              Selected web applications, mobile platforms, and enterprise software built for scale.
            </p>
          </div>

          <Link href="/catalog" className="btn btn-secondary btn-sm" style={{ fontWeight: 600 }}>
            View All {allProjects.length} Projects
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid-catalog">
          {featuredProjects.map((project) => (
            <AssetCard key={project.id} asset={project} />
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us (Practical Business Benefits) */}
      <section className="container reveal-on-scroll">
        <div className="glass-panel" style={{
          padding: '3.5rem 2.5rem',
          background: '#ffffff',
          borderRadius: '32px',
          border: '1px solid rgba(220, 195, 170, 0.45)',
          boxShadow: '0 14px 34px -8px rgba(160, 115, 75, 0.08)',
        }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
              Engineering Edge
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Why Choose ProvenanceTech?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
              We combine enterprise architectural rigor with agile delivery speed so your digital products launch faster and stay reliable.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch',
          }}>
            <div style={{ background: '#fffbf7', padding: '1.75rem', borderRadius: '22px', border: '1px solid rgba(220, 195, 170, 0.35)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                <CheckCircle2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text-primary)', minHeight: '44px', lineHeight: 1.3 }}>
                Tailored to Business Requirements
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: 'auto' }}>
                Zero generic cookie-cutter templates. Every database schema, user workflow, and API endpoint is built around your specific business model.
              </p>
            </div>

            <div style={{ background: '#fffbf7', padding: '1.75rem', borderRadius: '22px', border: '1px solid rgba(220, 195, 170, 0.35)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text-primary)', minHeight: '44px', lineHeight: 1.3 }}>
                Modern & Maintainable Stack
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: 'auto' }}>
                Built on Next.js 16 App Router, React 19, React Native, and Amazon DynamoDB for sub-10ms queries, high developer velocity, and clean code.
              </p>
            </div>

            <div style={{ background: '#fffbf7', padding: '1.75rem', borderRadius: '22px', border: '1px solid rgba(220, 195, 170, 0.35)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                <Smartphone size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text-primary)', minHeight: '44px', lineHeight: 1.3 }}>
                Responsive & User-Friendly
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: 'auto' }}>
                Engineered with touch-first accessibility, pixel-perfect fluid layouts, and seamless operation across iPhones, Androids, iPads, and desktops.
              </p>
            </div>

            <div style={{ background: '#fffbf7', padding: '1.75rem', borderRadius: '22px', border: '1px solid rgba(220, 195, 170, 0.35)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text-primary)', minHeight: '44px', lineHeight: 1.3 }}>
                Secure Database & Cloud Integration
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: 'auto' }}>
                Encrypted session tokens, least-privilege IAM roles, automated backups, and Cloudinary media pipelines safeguarding client and user data.
              </p>
            </div>

            <div style={{ background: '#fffbf7', padding: '1.75rem', borderRadius: '22px', border: '1px solid rgba(220, 195, 170, 0.35)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                <Clock size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text-primary)', minHeight: '44px', lineHeight: 1.3 }}>
                Transparent Agile Process
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: 'auto' }}>
                Bi-weekly sprint demos, shared staging environments, and direct Slack/Discord channels with senior engineers—no gatekeeping.
              </p>
            </div>

            <div style={{ background: '#fffbf7', padding: '1.75rem', borderRadius: '22px', border: '1px solid rgba(220, 195, 170, 0.35)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
                <LifeBuoy size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.45rem', color: 'var(--text-primary)', minHeight: '44px', lineHeight: 1.3 }}>
                Reliable Post-Launch Support
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginTop: 'auto' }}>
                Continuous SLA monitoring, zero-downtime security patch deployments, performance tracking, and roadmap feature upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Five-Step Development Process */}
      <section className="container reveal-on-scroll">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
            Agile Lifecycle
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Our 5-Step Development Process
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
            A disciplined, transparent engineering methodology taking your product from initial requirements to production launch.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
          alignItems: 'stretch',
        }}>
          {[
            { step: '01', title: 'Discovery & Requirements', desc: 'In-depth stakeholder interviews, technical feasibility analysis, and user journey roadmapping.' },
            { step: '02', title: 'Planning & UI/UX Design', desc: 'Wireframing, clickable high-fidelity Figma prototypes, and complete design system token setup.' },
            { step: '03', title: 'Development & API Integration', desc: 'Agile sprints building Next.js web apps, mobile clients, Route Handlers, and DynamoDB data models.' },
            { step: '04', title: 'Testing & Quality Assurance', desc: 'Automated test execution, cross-device mobile verification, security audits, and load testing.' },
            { step: '05', title: 'Deployment & Ongoing Support', desc: 'Docker containerization, automated CI/CD release, App Store publishing, and 24/7 SLA maintenance.' }
          ].map((item) => (
            <div
              key={item.step}
              className="glass-panel"
              style={{
                padding: '2rem 1.5rem',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid rgba(220, 195, 170, 0.45)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                height: '100%',
              }}
            >
              <div style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                color: 'var(--primary)',
                marginBottom: '0.75rem',
                lineHeight: 1,
              }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.3, minHeight: '44px' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginTop: 'auto' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Technologies We Use (Categorized) */}
      <TechnologiesSection id="technologies" />

      {/* 7. Horizontal Feature Ribbon (Matching Reference Design) */}
      <section className="container reveal-on-scroll">
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.25rem',
          padding: '1.4rem 2rem',
          background: 'rgba(255, 255, 255, 0.85)',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(220, 195, 170, 0.55)',
          boxShadow: '0 10px 30px rgba(180, 130, 90, 0.05)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
            <Laptop size={18} color="var(--primary)" />
            <span>Online consultation</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
            <Code2 size={18} color="var(--primary)" />
            <span>Full-cycle development</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
            <ShieldCheck size={18} color="var(--primary)" />
            <span>SLA & maintenance</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
            <Smartphone size={18} color="var(--primary)" />
            <span>App Store & Cloud release</span>
          </div>
        </div>
      </section>


      {/* 8. Final Call to Action - Featuring Brand Monogram Emblem */}
      <section className="container reveal-on-scroll">
        <div className="glass-panel" style={{
          padding: '4.5rem 2.5rem',
          textAlign: 'center',
          borderRadius: '32px',
          background: 'radial-gradient(circle at 50% 50%, #fcf7f0 0%, #f6f1ea 100%)',
          border: '1px solid var(--border-warm)',
          boxShadow: 'var(--shadow-elevated)',
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            filter: 'drop-shadow(0 6px 16px rgba(197, 155, 79, 0.28))',
          }}>
            <Image
              src="/icon.png"
              alt="ProvenanceTech Monogram Logo"
              width={64}
              height={64}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
          }}>
            Have an Idea for Your Next Digital Product?
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            maxWidth: '620px',
            margin: '0 auto 2.25rem',
            lineHeight: 1.75,
            fontSize: '1.1rem',
          }}>
            Let&apos;s turn your business requirements into a practical, scalable software solution.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                padding: '0.9rem 2.5rem',
                fontSize: '1.05rem',
                fontWeight: 600,
              }}
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/catalog"
              className="btn btn-secondary"
              style={{
                padding: '0.9rem 2.5rem',
                fontSize: '1.05rem',
                fontWeight: 600,
                background: '#ffffff',
              }}
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
