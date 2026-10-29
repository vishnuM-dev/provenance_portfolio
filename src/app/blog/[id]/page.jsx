'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getArticleById, BLOG_ARTICLES } from '@/data/blogArticles';
import '@/components/BlogPage.css';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Check,
  Sparkles,
  BookOpen,
  Home,
  ChevronRight,
  MessageSquare,
  Bookmark,
} from 'lucide-react';

function SafeBlogImage({ src, alt, fill, priority, sizes, className }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      src={currentSrc || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80'}
      alt={alt || 'Blog article image'}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => {
        setCurrentSrc('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80');
      }}
    />
  );
}

export default function ArticleDetailPage({ params }) {
  const resolvedParams = use(params);
  const article = getArticleById(resolvedParams.id);

  const [copied, setCopied] = useState(false);

  if (!article) {
    notFound();
  }

  // Related articles (same category or others, excluding current)
  const relatedArticles = BLOG_ARTICLES
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="bp-page-wrapper" style={{ padding: '4.5rem 0 2rem' }}>
      <div className="bp-container" style={{ maxWidth: '980px' }}>
        {/* Minimal Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="bp-detail-breadcrumbs">
          <Link href="/" className="bp-bc-link">
            <Home size={14} />
            <span>Home</span>
          </Link>
          <ChevronRight size={13} className="bp-bc-sep" />
          <Link href="/blog" className="bp-bc-link">
            <span>Blog</span>
          </Link>
          <ChevronRight size={13} className="bp-bc-sep" />
          <span className="bp-bc-current">{article.category}</span>
        </nav>

        {/* Article Header */}
        <header className="bp-detail-header">
          <div className="bp-badge-pill">
            <BookOpen size={13} className="bp-badge-icon" />
            <span>{article.category}</span>
          </div>

          <h1 className="bp-detail-title">
            {article.title}
          </h1>

          <p className="bp-detail-subtitle">
            {article.subtitle}
          </p>

          {/* Author & Meta Bar */}
          <div className="bp-detail-meta-bar">
            <div className="bp-detail-author">
              <div className="bp-author-avatar">
                PT
              </div>
              <div>
                <div className="bp-author-name">{article.author.name}</div>
                <div className="bp-author-role">{article.author.role}</div>
              </div>
            </div>

            <div className="bp-detail-info-row">
              <div className="bp-meta-item">
                <Calendar size={14} />
                <span>{article.date}</span>
              </div>
              <div className="bp-meta-item">
                <Clock size={14} />
                <span>{article.readTime}</span>
              </div>
              <button
                type="button"
                onClick={handleShare}
                className="bp-share-btn"
                aria-label="Share article"
              >
                {copied ? <Check size={14} color="#16a34a" /> : <Share2 size={14} />}
                <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="bp-detail-hero-img-wrap">
          <SafeBlogImage
            src={article.imageUrl}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 980px) 100vw, 980px"
            className="bp-detail-hero-img"
          />
        </div>

        {/* Article Body */}
        <article className="bp-detail-body">
          {article.content && article.content.map((sec, idx) => (
            <section key={idx} className="bp-content-section">
              <h2 className="bp-content-heading">{sec.heading}</h2>
              <p className="bp-content-p">{sec.body}</p>
            </section>
          ))}

          {/* Key Takeaways Callout Box */}
          <div className="bp-callout-box">
            <div className="bp-callout-header">
              <Sparkles size={16} color="var(--primary, #ea580c)" />
              <span>Key Architectural Takeaways</span>
            </div>
            <ul className="bp-callout-list">
              <li>Align technical architecture directly with core business throughput requirements.</li>
              <li>Favor clean component modularity and strict contract typings over ad-hoc solutions.</li>
              <li>Employ resilient cloud datastores with automated scaling to ensure predictable SLAs.</li>
            </ul>
          </div>
        </article>

        {/* Bottom Navigation & Share Bar */}
        <div className="bp-detail-bottom-nav">
          <Link href="/blog" className="bp-back-to-blog-btn">
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>

          <Link href="/contact" className="bp-btn-primary" style={{ padding: '0.75rem 1.75rem' }}>
            <span>Discuss a Project With Us</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Related Articles */}
        <section className="bp-related-section">
          <div className="bp-related-header">
            <h3 className="bp-related-title">Continue Reading</h3>
            <Link href="/blog" className="bp-view-all-link">
              <span>View All</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="bp-related-grid">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.id}`}
                className="bp-related-card"
              >
                <div className="bp-related-img-wrap">
                  <SafeBlogImage
                    src={rel.imageUrl}
                    alt={rel.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="bp-related-img"
                  />
                  <span className="bp-related-category">{rel.category}</span>
                </div>
                <div className="bp-related-card-body">
                  <h4 className="bp-related-card-title">{rel.title}</h4>
                  <div className="bp-related-meta">
                    <span>{rel.date}</span>
                    <span>•</span>
                    <span>{rel.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

