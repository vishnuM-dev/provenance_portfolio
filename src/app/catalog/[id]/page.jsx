import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAssetById } from '@/lib/dynamodb';
import ProvenanceTimeline from '@/components/ProvenanceTimeline';
import CertificateBadge from '@/components/CertificateBadge';
import {
  ArrowLeft,
  Calendar,
  User,
  Building,
  FileSearch,
  Sparkles,
  Smartphone,
  Globe,
  Cpu,
  Layers,
  CheckCircle2,
  Zap,
  ArrowRight
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = await getAssetById(id);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested software project could not be found.',
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description || `Case study and technical architecture overview for ${project.title}.`,
    openGraph: {
      title: `${project.title} | ProvenanceTech Case Study`,
      description: project.description || `Technical specifications, architecture, and deployment timeline for ${project.title}.`,
      images: project.imageUrl ? [{ url: project.imageUrl }] : [],
    },
  };
}

export default async function AssetDetailPage({ params }) {
  const { id } = await params;
  const project = await getAssetById(id);

  if (!project) {
    return (
      <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Project Not Found
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          No registered software project was found with identifier: {id}
        </p>
        <Link href="/catalog" className="btn btn-primary">
          <ArrowLeft size={16} /> Return to Projects
        </Link>
      </div>
    );
  }

  const isLive = project.status === 'Live Production';

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem 5rem' }}>
      {/* Navigation Breadcrumb */}
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/catalog" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          fontWeight: 600,
        }}>
          <ArrowLeft size={16} />
          Back to Projects & Case Studies
        </Link>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '3rem',
        alignItems: 'start',
      }}>
        {/* Left Column: Mockup & Release Certificate */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Main Showcase Image */}
          <div className="glass-panel" style={{
            overflow: 'hidden',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(220, 195, 170, 0.45)',
            background: '#ffffff',
            position: 'relative',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'}
              alt={project.title}
              style={{
                width: '100%',
                maxHeight: '440px',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span className="badge" style={{ background: '#ffffff', color: 'var(--text-primary)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', fontWeight: 600 }}>
                {project.category}
              </span>
              <span className={`badge ${isLive ? 'badge-verified' : 'badge-review'}`} style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                {isLive ? 'Live Production' : 'Sample Project'}
              </span>
            </div>
          </div>

          {/* Certificate Badge */}
          <CertificateBadge asset={project} />

          {/* Technical Specifications */}
          <div className="glass-panel" style={{ padding: '2rem', background: '#ffffff', borderRadius: '28px', border: '1px solid rgba(220, 195, 170, 0.45)' }}>
            <h3 style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              borderBottom: '1px solid rgba(220, 195, 170, 0.35)',
              paddingBottom: '0.85rem',
              marginBottom: '1.25rem',
            }}>
              Architecture & System Specs
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem', fontSize: '0.9rem' }}>
              {project.techStack && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Technology Stack</span>
                  <span style={{ color: 'var(--text-primary)', textAlign: 'right', maxWidth: '60%', fontWeight: 600 }}>{project.techStack}</span>
                </div>
              )}

              {project.platform && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Target Platforms</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{project.platform}</span>
                </div>
              )}

              {project.dimensions && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Supported Devices</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{project.dimensions}</span>
                </div>
              )}

              {project.creationYear && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Release Year</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{project.creationYear}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(220, 195, 170, 0.35)', paddingTop: '0.85rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Project Scale / Valuation</span>
                <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.1rem' }}>
                  {formatCurrency(project.estimatedValue)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Case Study Narrative, Benchmarks, Milestones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--primary)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.5rem',
            }}>
              <Sparkles size={14} />
              Project ID: {project.id}
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 3.5vw, 2.9rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: '0.75rem',
            }}>
              {project.title}
            </h1>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              marginBottom: '1.75rem',
              flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <User size={16} color="var(--primary)" />
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Client: {project.creator || project.client}</span>
              </div>

              {project.creationYear && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={16} color="var(--primary)" />
                  <span style={{ fontWeight: 500 }}>Launched: {project.creationYear}</span>
                </div>
              )}
            </div>

            {/* Business Problem & Solution Cards */}
            {project.problem && project.solution && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{
                  padding: '1.4rem',
                  borderRadius: '20px',
                  background: '#fffbf7',
                  border: '1px solid rgba(220, 195, 170, 0.45)',
                  borderLeft: '4px solid #d94343',
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#d94343', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Business Problem
                  </div>
                  <p style={{ color: 'var(--text-primary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
                    {project.problem}
                  </p>
                </div>

                <div style={{
                  padding: '1.4rem',
                  borderRadius: '20px',
                  background: '#f4f9f6',
                  border: '1px solid rgba(46, 125, 90, 0.25)',
                  borderLeft: '4px solid var(--accent-verified)',
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-verified)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Engineered Solution
                  </div>
                  <p style={{ color: 'var(--text-primary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
                    {project.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Overview Narrative */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Project Overview & Scope
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.975rem' }}>
                {project.description}
              </p>
            </div>

            {/* Production Performance & SLA Report */}
            {project.conditionReport && (
              <div className="glass-panel" style={{
                padding: '1.75rem',
                border: '1px solid rgba(46, 125, 90, 0.25)',
                background: '#f4f9f6',
                borderRadius: '24px',
                marginBottom: '2.5rem',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: 'var(--accent-verified)',
                  marginBottom: '0.65rem',
                }}>
                  <Zap size={19} />
                  Production Metrics & Cloud SLA Report
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {project.conditionReport}
                </p>
              </div>
            )}
          </div>

          {/* Development Milestones Timeline */}
          <ProvenanceTimeline
            events={project.provenanceEvents}
            currentCustodian={project.currentCustodian}
          />

          {/* CTA to start similar project */}
          <div style={{
            padding: '2rem',
            borderRadius: '24px',
            background: 'radial-gradient(circle, #fffbf7 0%, #f7eee4 100%)',
            border: '1px solid rgba(220, 195, 170, 0.45)',
            textAlign: 'center',
          }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Need a Similar Digital Product Built?
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Our engineering team can architect and deliver your custom web or mobile application.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '0.75rem 1.8rem', fontWeight: 600 }}>
              Discuss Your Project
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
