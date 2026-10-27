import Link from 'next/link';
import { ArrowRight, Clock, Calendar, Sparkles, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Blog & Engineering Insights | ProvenanceTech',
  description: 'In-depth perspectives on custom web application development, AWS cloud infrastructure, mobile engineering, and modern DevOps.',
};

const BLOG_POSTS = [
  {
    id: 'scalable-web-applications-with-nextjs',
    title: 'Architecting Enterprise Web Applications for Sub-Second Performance',
    excerpt: 'How we leverage Next.js App Router, edge rendering, and granular state caching to achieve 99+ Lighthouse performance scores across millions of monthly sessions.',
    category: 'Web Architecture',
    readTime: '6 min read',
    date: 'Oct 24, 2026',
    author: 'ProvenanceTech Engineering',
    tag: 'Next.js & Performance',
  },
  {
    id: 'amazon-dynamodb-single-table-design',
    title: 'Mastering Single-Table DynamoDB Design for High-Throughput Workloads',
    excerpt: 'Key strategies for modeling composite primary keys, secondary indexes (GSIs), and transactional atomicity to achieve predictable single-digit millisecond latency at scale.',
    category: 'Cloud & Database',
    readTime: '8 min read',
    date: 'Oct 18, 2026',
    author: 'Cloud Systems Team',
    tag: 'AWS & DynamoDB',
  },
  {
    id: 'cross-platform-react-native-excellence',
    title: 'Native-Grade Fluidity in React Native: A 60fps Architecture Guide',
    excerpt: 'Eliminating bridge bottlenecks and rendering delays with the new React Native architecture, TurboModules, and hardware-accelerated micro-animations.',
    category: 'Mobile Engineering',
    readTime: '5 min read',
    date: 'Oct 12, 2026',
    author: 'Mobile Development Team',
    tag: 'React Native & iOS/Android',
  },
  {
    id: 'zero-downtime-continuous-deployment',
    title: 'Zero-Downtime CI/CD Pipelines with Automated Rollbacks on AWS',
    excerpt: 'A practical breakdown of blue/green deployments, automated canary testing, and health-checked rollbacks that allow engineering teams to ship to production safely 20+ times per day.',
    category: 'DevOps & Automation',
    readTime: '7 min read',
    date: 'Sep 29, 2026',
    author: 'DevOps & SRE Group',
    tag: 'DevOps & CI/CD',
  },
  {
    id: 'security-first-software-architecture',
    title: 'Security-First Software Architecture: Zero Trust & Compliance',
    excerpt: 'Implementing cryptographic verification, end-to-end data encryption, and role-based access control (RBAC) to pass enterprise SOC 2 and ISO 27001 audits seamlessly.',
    category: 'Security & Compliance',
    readTime: '6 min read',
    date: 'Sep 15, 2026',
    author: 'Security Architecture Team',
    tag: 'Cybersecurity & Auditing',
  },
  {
    id: 'luxury-ui-ux-design-systems',
    title: 'Designing High-Conversion Digital Luxury Experiences in 2026',
    excerpt: 'Why micro-interactions, typographic rhythm, and champagne-and-obsidian color psychology elevate brand trust and accelerate enterprise conversion rates.',
    category: 'UI/UX Design',
    readTime: '5 min read',
    date: 'Sep 04, 2026',
    author: 'Design & Experience Lab',
    tag: 'UI/UX Design Systems',
  },
];

export default function BlogPage() {
  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* 1. Hero Section */}
      <section style={{
        position: 'relative',
        padding: '4.5rem 0 3.5rem',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'radial-gradient(ellipse at 30% 20%, rgba(197, 155, 79, 0.08) 0%, transparent 60%)',
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.45rem 1.25rem',
            borderRadius: 'var(--radius-full, 9999px)',
            background: '#ffffff',
            border: '1px solid var(--border-subtle)',
            color: 'var(--primary, #eb7821)',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '1.25rem',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
          }}>
            <BookOpen size={16} />
            <span>Engineering Insights & Technology Perspectives</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary, #141518)',
            marginBottom: '1.25rem',
          }}>
            Insights, Architecture & <span style={{ color: 'var(--primary, #eb7821)' }}>Tech Perspectives.</span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-secondary, #636773)',
            lineHeight: 1.7,
            maxWidth: '680px',
            margin: '0 auto',
            fontWeight: 450,
          }}>
            Deep dives into modern web engineering, cloud infrastructure, cross-platform mobile apps, and enterprise DevOps from the ProvenanceTech engineering team.
          </p>
        </div>
      </section>

      {/* 2. Blog Posts Grid */}
      <section className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2.25rem',
        }}>
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '1px solid var(--border-subtle)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 18px rgba(20, 18, 15, 0.04)',
              }}
              className="blog-card"
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted, #8a8e9b)',
                }}>
                  <span style={{
                    background: 'rgba(235, 120, 33, 0.1)',
                    color: 'var(--primary, #eb7821)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                  }}>
                    {post.tag}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 style={{
                  fontSize: '1.35rem',
                  fontWeight: 750,
                  lineHeight: 1.35,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary, #141518)',
                  marginBottom: '1rem',
                }}>
                  {post.title}
                </h2>

                <p style={{
                  fontSize: '0.975rem',
                  color: 'var(--text-secondary, #636773)',
                  lineHeight: 1.65,
                  marginBottom: '1.5rem',
                }}>
                  {post.excerpt}
                </p>
              </div>

              <div style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.825rem', color: 'var(--text-muted, #8a8e9b)' }}>
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>

                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--primary, #eb7821)',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'gap 0.2s ease',
                  }}
                  className="read-more-link"
                >
                  Discuss Topic
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
