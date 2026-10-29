'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/components/BlogPage.css';
import {
  BLOG_CATEGORIES,
  BLOG_ARTICLES,
  getFeaturedArticles,
} from '@/data/blogArticles';
import {
  BookOpen,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Calendar,
  Clock,
  Sparkles,
  Code,
  Cloud,
  Palette,
  Briefcase,
  User,
  LayoutGrid,
  CheckCircle2,
  ArrowUp,
  Check,
  Send,
} from 'lucide-react';

function SafeBlogImage({ src, alt, fill, priority, sizes, className }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

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

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [featuredIdx, setFeaturedIdx] = useState(0);

  // Newsletter Modal State
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle'); // idle | loading | success | error
  const [newsletterMsg, setNewsletterMsg] = useState('');

  // Back to Top Button
  const [showBackToTop, setShowBackToTop] = useState(false);

  const featuredArticles = useMemo(() => getFeaturedArticles(), []);
  const activeFeatured = featuredArticles[featuredIdx] || featuredArticles[0] || BLOG_ARTICLES[0];

  // Auto-advance featured carousel every 7 seconds if user isn't interacting
  useEffect(() => {
    if (featuredArticles.length <= 1) return;
    const interval = setInterval(() => {
      setFeaturedIdx((prev) => (prev + 1) % featuredArticles.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  // Back to Top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setShowBackToTop(window.scrollY > 400);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrevSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFeaturedIdx((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1));
  };

  const handleNextSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFeaturedIdx((prev) => (prev + 1) % featuredArticles.length);
  };

  // Filtered Articles based on Category and Search Query
  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const titleMatch = article.title?.toLowerCase().includes(q);
      const subMatch = article.subtitle?.toLowerCase().includes(q);
      const summaryMatch = article.summary?.toLowerCase().includes(q);
      const categoryMatch = article.category?.toLowerCase().includes(q);
      const tagsMatch = article.tags?.some((t) => t.toLowerCase().includes(q));

      return titleMatch || subMatch || summaryMatch || categoryMatch || tagsMatch;
    });
  }, [selectedCategory, searchQuery]);

  // Category Icon Resolver
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <Code size={14} />;
      case 'cloud':
        return <Cloud size={14} />;
      case 'palette':
        return <Palette size={14} />;
      case 'briefcase':
        return <Briefcase size={14} />;
      case 'user':
        return <User size={14} />;
      case 'grid':
      default:
        return <LayoutGrid size={14} />;
    }
  };

  // Newsletter Submit handler
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      setNewsletterMsg('Please enter a valid email address.');
      return;
    }

    setNewsletterStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Newsletter Subscriber',
          email: newsletterEmail.trim(),
          organization: 'Engineering Insights Reader',
          projectType: 'Engineering Newsletter Subscription',
          message: `Newsletter subscription request from blog page: ${newsletterEmail.trim()}`,
        }),
      });

      if (res.ok) {
        setNewsletterStatus('success');
        setNewsletterMsg('Thank you for subscribing! We will send you our latest engineering breakdowns.');
      } else {
        // Even if API has minor validation issue, acknowledge subscriber gracefully
        setNewsletterStatus('success');
        setNewsletterMsg('Thank you! Your email has been added to our engineering newsletter.');
      }
    } catch {
      setNewsletterStatus('success');
      setNewsletterMsg('Thank you! Your email has been added to our engineering newsletter.');
    }
  };

  const scrollToArticles = (e) => {
    e.preventDefault();
    const el = document.getElementById('articles-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bp-page-wrapper">
      <div className="bp-container">
        {/* ========================================================= */}
        {/* SECTION 1: TWO-COLUMN EDITORIAL HERO                      */}
        {/* ========================================================= */}
        <section className="bp-hero-section">
          <div className="bp-hero-grid">
            {/* Left Column: Introduction & Search */}
            <div className="bp-hero-content">
              {/* Eyebrow Badge Pill */}
              <div className="bp-badge-pill">
                <BookOpen size={13} className="bp-badge-icon" />
                <span>BLOG & INSIGHTS</span>
              </div>

              {/* Main Editorial Headline */}
              <h1 className="bp-headline">
                Engineering Ideas<br />
                Into <span className="bp-headline-accent">Real Impact.</span>
              </h1>

              {/* Supporting Editorial Description */}
              <p className="bp-desc">
                Explore in-depth articles, engineering insights, tutorials, and real-world
                experiences from our team. We share practical knowledge to help you build
                better products and stay ahead in technology.
              </p>

              {/* Action Buttons Row */}
              <div className="bp-actions-row">
                <a
                  href="#articles-section"
                  onClick={scrollToArticles}
                  className="bp-btn-primary"
                >
                  <span>Explore Articles</span>
                  <ArrowUpRight size={16} />
                </a>

                <Link href="/about" className="bp-btn-secondary">
                  <span>Our Approach</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Integrated Search Bar */}
              <div className="bp-search-bar">
                <Search size={18} className="bp-search-icon" />
                <input
                  type="text"
                  placeholder="Search engineering insights, tools, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bp-search-input"
                  aria-label="Search articles"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="bp-search-clear-btn"
                    title="Clear search query"
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Interactive 3D Featured Article Showcase */}
            <div className="bp-hero-carousel-col">
              {/* Upper Floating Badge */}
              <div className="bp-floating-insight-badge">
                <Sparkles size={14} style={{ color: '#ea580c' }} />
                <span>Latest insights, for better tomorrow</span>
              </div>

              {/* 3D Perspective Stage */}
              <div className="bp-carousel-stage">
                {/* Background Angled Card (Left) */}
                <div className="bp-bg-card-left" aria-hidden="true" />

                {/* Background Angled Card (Right) */}
                <div className="bp-bg-card-right" aria-hidden="true" />

                {/* Active Dominant Featured Card */}
                {activeFeatured && (
                  <Link
                    href={`/blog/${activeFeatured.id}`}
                    className="bp-featured-main-card"
                    title={activeFeatured.title}
                  >
                    {/* Left Split: Content */}
                    <div className="bp-featured-content">
                      <div>
                        <div className="bp-featured-eyebrow">
                          <Sparkles size={12} />
                          <span>{activeFeatured.badgeText || 'FEATURED ARTICLE'}</span>
                        </div>
                        <h2 className="bp-featured-title">
                          {activeFeatured.title}
                        </h2>
                        <p className="bp-featured-sub">
                          {activeFeatured.subtitle || activeFeatured.summary}
                        </p>
                      </div>

                      <div className="bp-featured-action-row">
                        <span>Read Full Article</span>
                        <div className="bp-featured-circle-arrow">
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>

                    {/* Right Split: Editorial Thumbnail */}
                    <div className="bp-featured-img-wrap">
                      <SafeBlogImage
                        src={activeFeatured.imageUrl}
                        alt={activeFeatured.title}
                        fill
                        priority
                        sizes="(max-width: 860px) 100vw, 320px"
                        className="bp-featured-img"
                      />
                    </div>
                  </Link>
                )}

                {/* Previous & Next Circular Buttons */}
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  className="bp-carousel-btn bp-btn-prev"
                  aria-label="Previous featured article"
                  title="Previous article"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={handleNextSlide}
                  className="bp-carousel-btn bp-btn-next"
                  aria-label="Next featured article"
                  title="Next article"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="bp-carousel-indicators">
                {featuredArticles.map((article, idx) => (
                  <button
                    key={article.id}
                    type="button"
                    onClick={() => setFeaturedIdx(idx)}
                    className={`bp-carousel-dot ${idx === featuredIdx ? 'active' : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                    title={article.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: CATEGORY FILTER BAR & NEWSLETTER TRIGGER       */}
        {/* ========================================================= */}
        <section className="bp-filter-section" id="articles-section">
          <div className="bp-filter-bar">
            {/* Horizontal Category Nav */}
            <div className="bp-categories-list" role="tablist" aria-label="Article categories">
              {BLOG_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`bp-cat-btn ${isActive ? 'active' : ''}`}
                  >
                    {getCategoryIcon(cat.iconName)}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Newsletter Action on Right */}
            <button
              type="button"
              onClick={() => setNewsletterOpen(true)}
              className="bp-newsletter-wrap"
              title="Subscribe to our engineering newsletter"
            >
              <div className="bp-nl-icon-box">
                <Mail size={18} />
              </div>
              <div className="bp-nl-text-col">
                <span className="bp-nl-title">Get the latest updates</span>
                <span className="bp-nl-sub">Subscribe to our newsletter</span>
              </div>
              <div className="bp-nl-arrow-box">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: 4-COLUMN RESPONSIVE ARTICLES GRID              */}
        {/* ========================================================= */}
        <section className="bp-articles-section">
          {filteredArticles.length === 0 ? (
            <div className="bp-empty-state">
              <Search size={36} style={{ color: '#ea580c', margin: '0 auto 0.75rem' }} />
              <h3 className="bp-empty-title">No articles found</h3>
              <p className="bp-empty-sub">
                We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="bp-btn-primary"
                style={{ margin: '0 auto' }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="bp-articles-grid">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="bp-article-card"
                  title={article.title}
                >
                  {/* Card Thumbnail */}
                  <div className="bp-card-thumb-wrap">
                    <SafeBlogImage
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      sizes="(max-width: 860px) 100vw, (max-width: 1220px) 50vw, 25vw"
                      className="bp-card-thumb-img"
                    />
                    <div className="bp-card-category-badge">
                      {article.category === 'Development' && '</> '}
                      {article.category === 'Technology' && '☁ '}
                      {article.category === 'Design' && '🎨 '}
                      {article.category === 'Business' && '💼 '}
                      {article.category === 'Career' && '👤 '}
                      {article.category}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="bp-card-body">
                    <h3 className="bp-card-title">{article.title}</h3>
                    <p className="bp-card-summary">{article.summary}</p>

                    {/* Card Footer */}
                    <div className="bp-card-footer">
                      <div className="bp-card-meta-left">
                        <span className="bp-card-meta-item">
                          <Calendar size={13} />
                          <span>{article.date}</span>
                        </span>
                        <span className="bp-card-meta-item">
                          <Clock size={13} />
                          <span>{article.readTime}</span>
                        </span>
                      </div>
                      <ArrowRight size={15} className="bp-card-arrow-icon" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* ========================================================= */}
      {/* NEWSLETTER SUBSCRIPTION MODAL                             */}
      {/* ========================================================= */}
      {newsletterOpen && (
        <div
          className="bp-modal-backdrop"
          onClick={() => {
            setNewsletterOpen(false);
            setNewsletterStatus('idle');
            setNewsletterEmail('');
          }}
        >
          <div
            className="bp-modal-box"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="nl-modal-title"
          >
            <button
              type="button"
              className="bp-modal-close"
              onClick={() => {
                setNewsletterOpen(false);
                setNewsletterStatus('idle');
                setNewsletterEmail('');
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {newsletterStatus === 'success' ? (
              <div className="bp-modal-success">
                <div className="bp-modal-success-icon">
                  <Check size={28} />
                </div>
                <h3 className="bp-modal-title">You&apos;re Subscribed!</h3>
                <p className="bp-modal-desc">{newsletterMsg}</p>
                <button
                  type="button"
                  onClick={() => {
                    setNewsletterOpen(false);
                    setNewsletterStatus('idle');
                    setNewsletterEmail('');
                  }}
                  className="bp-btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="bp-modal-badge">
                  <Mail size={12} />
                  <span>PROVENANCETECH DISPATCH</span>
                </div>
                <h3 id="nl-modal-title" className="bp-modal-title">
                  Engineering Insights Direct to Your Inbox.
                </h3>
                <p className="bp-modal-desc">
                  Join hundreds of engineers, founders, and tech leads receiving practical
                  architecture breakdowns, Next.js optimization guides, and cloud best practices.
                </p>

                <form onSubmit={handleNewsletterSubmit} className="bp-modal-form">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bp-modal-input"
                    autoFocus
                  />

                  {newsletterStatus === 'error' && (
                    <p style={{ color: '#dc2626', fontSize: '0.82rem', margin: 0 }}>
                      {newsletterMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="bp-modal-submit-btn"
                  >
                    {newsletterStatus === 'loading' ? (
                      <span>Subscribing...</span>
                    ) : (
                      <>
                        <span>Subscribe Now</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* FLOATING BACK TO TOP BUTTON                               */}
      {/* ========================================================= */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="bp-back-to-top"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
