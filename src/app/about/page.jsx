import Link from 'next/link';
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
  MessageSquare
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
      icon: <Globe size={26} />,
    },
    {
      title: 'Mobile Application Development',
      desc: 'We build intuitive mobile applications for Android and iOS using modern cross-platform technologies.',
      icon: <Smartphone size={26} />,
    },
    {
      title: 'Custom Software Development',
      desc: 'We transform business requirements into tailored software solutions designed to improve workflows, productivity, and operational efficiency.',
      icon: <Code2 size={26} />,
    },
    {
      title: 'Backend & API Development',
      desc: 'We develop reliable backend systems, secure APIs, and database-driven applications that help digital products communicate and scale effectively.',
      icon: <Cpu size={26} />,
    },
  ];

  const techStack = [
    {
      category: 'Frontend',
      icon: <Globe size={18} />,
      skills: ['Next.js', 'React.js'],
    },
    {
      category: 'Mobile Development',
      icon: <Smartphone size={18} />,
      skills: ['React Native', 'Flutter'],
    },
    {
      category: 'Backend',
      icon: <Cpu size={18} />,
      skills: ['Node.js', 'REST APIs'],
    },
    {
      category: 'Database',
      icon: <Database size={18} />,
      skills: ['Amazon DynamoDB'],
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud size={18} />,
      skills: ['Docker', 'CI/CD', 'Cloud Infrastructure'],
    },
  ];

  const valuesBehindName = [
    {
      title: 'Trust Through Transparency',
      desc: 'We believe successful projects are built on honest communication, clear expectations, and collaborative decision-making.',
      icon: <ShieldCheck size={24} />,
    },
    {
      title: 'Quality Through Engineering',
      desc: 'We prioritize clean code, thoughtful architecture, testing, and maintainability to create software that businesses can depend on.',
      icon: <CheckCircle2 size={24} />,
    },
    {
      title: 'Innovation With Purpose',
      desc: 'We choose technologies and approaches based on the problems they solve, not simply because they are new.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Growth Through Collaboration',
      desc: 'We work closely with our clients to understand their goals, adapt to their needs, and build solutions that support their growth.',
      icon: <HeartHandshake size={24} />,
    },
  ];

  const whyChooseUs = [
    {
      title: 'Business-Focused Solutions',
      desc: 'We begin by understanding your business challenges and develop solutions aligned with your objectives.',
      icon: <Target size={24} />,
    },
    {
      title: 'Modern Engineering',
      desc: 'We use contemporary frameworks and proven development practices to create dependable digital products.',
      icon: <Laptop size={24} />,
    },
    {
      title: 'Built for the Future',
      desc: 'We design applications with maintainability, flexibility, and future enhancements in mind.',
      icon: <TrendingUp size={24} />,
    },
    {
      title: 'Transparent Collaboration',
      desc: 'We value open communication, clear project expectations, and meaningful client involvement throughout development.',
      icon: <Users size={24} />,
    },
  ];

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem 5.5rem' }}>
      {/* 1. Header / Hero Intro */}
      <div className="section-header" style={{ maxWidth: '840px', margin: '0 auto 3.75rem' }}>
        <div className="section-badge" style={{ background: '#ffffff', border: '1px solid #dfd5c8', color: '#c45318' }}>
          <Sparkles size={14} color="var(--primary)" />
          ProvenanceTech Software Engineering
        </div>

        <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', color: '#1a130e', marginBottom: '0.65rem' }}>
          About ProvenanceTech
        </h1>

        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--primary, #df7a38)',
          marginBottom: '1.35rem',
          letterSpacing: '-0.01em',
        }}>
          Technology Built on Trust. Innovation Built for Growth.
        </h2>

        <p className="section-desc" style={{ fontSize: '1.08rem', color: '#382e25', lineHeight: 1.75, maxWidth: '740px', fontWeight: 450 }}>
          At <strong style={{ color: '#1a130e' }}>ProvenanceTech</strong>, we believe great software starts with understanding people, businesses, and the problems that matter most.
        </p>

        <p style={{ fontSize: '0.985rem', color: '#6e6054', lineHeight: 1.72, maxWidth: '720px', margin: '0.85rem auto 0' }}>
          We are a software engineering company focused on building modern web applications, mobile experiences, and scalable digital solutions that help businesses turn ideas into reality.
        </p>

        <p style={{ fontSize: '0.95rem', color: '#6e6054', lineHeight: 1.72, maxWidth: '720px', margin: '0.85rem auto 0' }}>
          Our name reflects the values we believe in: transparency, reliability, and purposeful technology. From the first conversation to the final deployment, we focus on creating software that is practical, maintainable, and built with the future in mind.
        </p>
      </div>

      {/* 2. Mission & Vision Dual Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.75rem',
        marginBottom: '4.75rem',
      }}>
        {/* Mission Card */}
        <div className="glass-panel" style={{
          padding: '2.5rem',
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #dfd5c8',
          boxShadow: '0 10px 30px rgba(45, 35, 27, 0.04)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '16px',
            background: 'rgba(223, 122, 56, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
            marginBottom: '1.25rem',
          }}>
            <Compass size={26} strokeWidth={2.4} />
          </div>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--primary)',
            marginBottom: '0.35rem',
          }}>
            Purpose & Commitment
          </div>
          <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1a130e', marginBottom: '0.85rem', letterSpacing: '-0.02em' }}>
            Our Mission
          </h3>
          <p style={{ color: '#382e25', fontSize: '1.025rem', lineHeight: 1.7, fontWeight: 450 }}>
            To empower businesses with reliable, innovative, and scalable software solutions that simplify complex challenges, improve digital experiences, and create lasting value.
          </p>
        </div>

        {/* Vision Card */}
        <div className="glass-panel" style={{
          padding: '2.5rem',
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #dfd5c8',
          boxShadow: '0 10px 30px rgba(45, 35, 27, 0.04)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '16px',
            background: 'rgba(223, 122, 56, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
            marginBottom: '1.25rem',
          }}>
            <Sparkles size={26} strokeWidth={2.4} />
          </div>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--primary)',
            marginBottom: '0.35rem',
          }}>
            Future Direction
          </div>
          <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1a130e', marginBottom: '0.85rem', letterSpacing: '-0.02em' }}>
            Our Vision
          </h3>
          <p style={{ color: '#382e25', fontSize: '1.025rem', lineHeight: 1.7, fontWeight: 450 }}>
            To build a future where technology is more accessible, businesses can innovate with confidence, and every digital product is created with purpose, quality, and trust.
          </p>
        </div>
      </div>

      {/* 3. What We Do */}
      <div style={{ marginBottom: '4.75rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
            Core Capabilities
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.025em', color: '#1a130e', marginBottom: '0.65rem' }}>
            What We Do
          </h2>
          <p style={{ color: '#6e6054', fontSize: '1rem', lineHeight: 1.6 }}>
            We combine modern engineering practices with thoughtful design to create digital solutions tailored to your business needs.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
          {whatWeDo.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.25rem 1.75rem',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #dfd5c8',
                boxShadow: '0 8px 24px rgba(45, 35, 27, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'rgba(223, 122, 56, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.25rem',
              }}>
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a130e', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
                {item.title}
              </h3>

              <p style={{ color: '#55473a', fontSize: '0.925rem', lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Our Technology Stack */}
      <div className="glass-panel" style={{
        padding: '3.25rem 2.5rem',
        marginBottom: '4.75rem',
        background: '#ffffff',
        borderRadius: '30px',
        border: '1px solid #dfd5c8',
        boxShadow: '0 12px 36px rgba(45, 35, 27, 0.04)',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
            Flexible & Scalable
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.025em', color: '#1a130e', marginBottom: '0.65rem' }}>
            Our Technology Stack
          </h2>
          <p style={{ color: '#6e6054', fontSize: '1rem', lineHeight: 1.6 }}>
            We use modern technologies and development tools to build flexible, maintainable, and scalable digital products.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.25rem',
          alignItems: 'stretch',
          marginBottom: '2rem',
        }}>
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              style={{
                background: '#faf6f0',
                padding: '1.75rem 1.35rem',
                borderRadius: '20px',
                border: '1px solid #dfd5c8',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '1rem',
              }}>
                {tech.icon}
                {tech.category}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {tech.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      display: 'inline-block',
                      background: '#ffffff',
                      color: '#1a130e',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '10px',
                      border: '1px solid #dfd5c8',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: '#6e6054', fontSize: '0.925rem', margin: 0 }}>
          Our technology choices depend on the project&apos;s requirements, performance needs, and long-term goals.
        </p>
      </div>

      {/* 5. The Values Behind Our Name */}
      <div style={{ marginBottom: '4.75rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
            Brand Principles
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.025em', color: '#1a130e', marginBottom: '0.65rem' }}>
            The Values Behind Our Name
          </h2>
          <p style={{ color: '#6e6054', fontSize: '1rem', lineHeight: 1.6 }}>
            At ProvenanceTech, our name represents more than technology. It reflects the principles that guide how we work and the relationships we build.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
          {valuesBehindName.map((val, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.25rem 1.75rem',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #dfd5c8',
                boxShadow: '0 8px 24px rgba(45, 35, 27, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(223, 122, 56, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.25rem',
              }}>
                {val.icon}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1a130e', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                {val.title}
              </h3>

              <p style={{ color: '#55473a', fontSize: '0.925rem', lineHeight: 1.65 }}>
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Why Choose ProvenanceTech? */}
      <div style={{ marginBottom: '4.75rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
            Client Partnership
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.025em', color: '#1a130e', marginBottom: '0.65rem' }}>
            Why Choose ProvenanceTech?
          </h2>
          <p style={{ color: '#6e6054', fontSize: '1rem', lineHeight: 1.6 }}>
            Reliable engineering, business alignment, and client-first collaboration throughout the software lifecycle.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
          {whyChooseUs.map((reason, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.25rem 1.75rem',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #dfd5c8',
                boxShadow: '0 8px 24px rgba(45, 35, 27, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(223, 122, 56, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.25rem',
              }}>
                {reason.icon}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1a130e', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                {reason.title}
              </h3>

              <p style={{ color: '#55473a', fontSize: '0.925rem', lineHeight: 1.65 }}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Call To Action (Let's Build Something Meaningful) */}
      <div style={{
        textAlign: 'center',
        padding: '3.75rem 2rem',
        borderRadius: '30px',
        background: 'linear-gradient(135deg, #fffbf7 0%, #f7eee4 50%, #f2e3d3 100%)',
        border: '1px solid #dfd5c8',
        boxShadow: '0 16px 40px rgba(45, 35, 27, 0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '18px',
          background: 'var(--primary, #df7a38)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          margin: '0 auto 1.5rem',
          boxShadow: '0 6px 18px rgba(223, 122, 56, 0.3)',
        }}>
          <MessageSquare size={28} />
        </div>

        <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#1a130e', marginBottom: '0.85rem', letterSpacing: '-0.02em' }}>
          Let&apos;s Build Something Meaningful
        </h2>

        <p style={{ color: '#382e25', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto 0.5rem', lineHeight: 1.65, fontWeight: 500 }}>
          Every great digital product begins with an idea and the right team to bring it to life.
        </p>

        <p style={{ color: '#6e6054', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto 0.75rem', lineHeight: 1.6 }}>
          Whether you&apos;re launching a startup, modernizing an existing application, or exploring a new digital opportunity, ProvenanceTech is ready to help you take the next step.
        </p>

        <p style={{ color: '#1a130e', fontSize: '1.025rem', fontWeight: 700, marginBottom: '2rem' }}>
          Have an idea? Let&apos;s turn it into reality.
        </p>

        <Link
          href="/contact"
          className="btn btn-primary"
          style={{
            padding: '0.85rem 2.25rem',
            fontSize: '1rem',
            fontWeight: 700,
            borderRadius: '9999px',
            boxShadow: '0 8px 24px rgba(223, 122, 56, 0.35)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          Discuss Your Project
          <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
}
