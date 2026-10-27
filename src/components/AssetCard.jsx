import Link from 'next/link';
import { ArrowRight, Star, Smartphone, Globe, Cpu, CheckCircle2 } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function AssetCard({ asset }) {
  const isLive = asset.status === 'Live Production';
  const score = asset.score || (9.2 + ((asset.title.length * 2) % 8) / 10).toFixed(1);

  // Platform icon helper
  const getPlatformIcon = (category) => {
    if (category?.toLowerCase().includes('mobile')) return <Smartphone size={13} />;
    if (category?.toLowerCase().includes('cloud')) return <Cpu size={13} />;
    return <Globe size={13} />;
  };

  return (
    <div
      className="glass-panel asset-card"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: '#ffffff',
        border: '1px solid var(--border-subtle)',
        borderRadius: '28px',
        boxShadow: 'var(--shadow-card)',
        padding: '1.25rem',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Media Mockup Container with Soft Champagne Aesthetic */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '220px',
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'radial-gradient(circle, #fcf8f0 0%, #f4ece0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.1rem',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'}
          alt={asset.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.45s ease',
          }}
          className="asset-image-hover"
        />

        {/* Top Badges */}
        <div style={{
          position: 'absolute',
          top: '0.85rem',
          left: '0.85rem',
          right: '0.85rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <span
            className="badge"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              color: 'var(--text-primary)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              fontSize: '0.725rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            {getPlatformIcon(asset.category)}
            {asset.category}
          </span>

          <span
            className="badge"
            style={{
              background: isLive ? 'var(--accent-verified-bg)' : 'var(--accent-review-bg)',
              color: isLive ? 'var(--accent-verified)' : 'var(--accent-review)',
              border: `1px solid ${isLive ? 'rgba(46, 125, 90, 0.25)' : 'rgba(197, 155, 79, 0.35)'}`,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              backdropFilter: 'blur(8px)',
              fontSize: '0.725rem',
            }}
          >
            <CheckCircle2 size={12} />
            {isLive ? 'Live Production' : 'Sample Project'}
          </span>
        </div>

        {/* Platform tag bottom left */}
        {asset.platform && (
          <div style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '0.85rem',
            fontSize: '0.725rem',
            color: '#2d231b',
            fontWeight: 600,
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '0.2rem 0.65rem',
            borderRadius: 'var(--radius-full)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
          }}>
            {asset.platform}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        gap: '0.85rem',
      }}>
        {/* Title and Rating Score Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '0.5rem',
          minHeight: '46px',
        }}>
          <div>
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.25,
                marginBottom: '0.2rem',
              }}
            >
              {asset.title}
            </h3>
            <p style={{
              fontSize: '0.825rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
            }}>
              Client: {asset.creator || asset.client}
            </p>
          </div>

          {/* Terracotta score rating */}
          <div style={{
            color: 'var(--primary)',
            fontWeight: 800,
            fontSize: '1.35rem',
            lineHeight: 1,
            paddingTop: '0.15rem',
            flexShrink: 0,
          }}>
            {score}
          </div>
        </div>

        {/* Problem & Solution Snippet */}
        <p style={{
          fontSize: '0.825rem',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
          minHeight: '2.5rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          <strong style={{ color: 'var(--text-secondary)' }}>Solution: </strong>
          {asset.solution || 'Engineered high-performance production architecture tailored for enterprise scale.'}
        </p>

        {/* Tech Stack Pills & Budget */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.2rem',
          gap: '0.5rem',
        }}>
          {/* Terracotta Stars */}
          <div style={{ display: 'flex', gap: '2px', color: 'var(--primary)', flexShrink: 0 }}>
            <Star size={14} fill="var(--primary)" stroke="none" />
            <Star size={14} fill="var(--primary)" stroke="none" />
            <Star size={14} fill="var(--primary)" stroke="none" />
          </div>

          {/* Project Budget / Valuation */}
          <div style={{
            fontWeight: 800,
            fontSize: '1.05rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
            textAlign: 'right',
          }}>
            {formatCurrency(asset.estimatedValue)}
          </div>
        </div>

        {/* Tech Stack tags */}
        <div style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          background: '#fffbf7',
          padding: '0.35rem 0.65rem',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid rgba(220, 195, 170, 0.3)',
          height: '28px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <span style={{ fontWeight: 600, color: 'var(--primary)', marginRight: '0.35rem' }}>Tech:</span>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{asset.techStack || 'Next.js, Node.js, DynamoDB'}</span>
        </div>

        {/* Footer Pill Action Button */}
        <div style={{
          borderTop: '1px solid rgba(220, 195, 170, 0.35)',
          paddingTop: '0.85rem',
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Release: <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{asset.creationYear}</span>
          </div>

          <Link
            href={`/catalog/${asset.id}`}
            className="btn btn-secondary btn-sm"
            style={{
              padding: '0.4rem 1rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              borderRadius: 'var(--radius-full)',
              background: 'var(--secondary-bg)',
              color: 'var(--secondary-text)',
            }}
          >
            Case Study
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
