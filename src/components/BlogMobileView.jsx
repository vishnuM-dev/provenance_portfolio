'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  X,
  SlidersHorizontal,
  Bookmark,
  Star,
  Calendar,
  Clock,
  ArrowRight,
  LayoutGrid,
  Code,
  Layers,
  Cpu,
  Palette,
  Briefcase,
  User,
} from 'lucide-react';
import './BlogMobileView.css';

// 3D Mail envelope vector illustration matching reference
function Mail3DIllustration() {
  return (
    <svg viewBox="0 0 54 48" fill="none" className="bmv-mail-svg" aria-hidden="true">
      {/* Radiant orange/gold notification rays */}
      <line x1="27" y1="2" x2="27" y2="7" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="16" y1="5" x2="19" y2="9" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="5" x2="35" y2="9" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />

      {/* Ambient shadow */}
      <ellipse cx="27" cy="44" rx="20" ry="3.5" fill="#ea580c" fillOpacity="0.16" />

      {/* Letter sheet sliding out */}
      <rect x="13" y="10" width="28" height="22" rx="3" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.2" />
      <line x1="18" y1="15" x2="30" y2="15" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="18" y1="20" x2="36" y2="20" stroke="#cbd5e1" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="18" y1="25" x2="29" y2="25" stroke="#cbd5e1" strokeWidth="1.6" strokeLinecap="round" />

      {/* Back flap */}
      <polygon points="6,23 27,36 48,23 48,42 6,42" fill="#ea580c" opacity="0.88" />

      {/* Front envelope body */}
      <polygon points="6,23 27,36 48,23 48,42 6,42" fill="url(#bmv-env-grad)" />
      {/* Left fold */}
      <polygon points="6,23 23,34 6,42" fill="#f97316" opacity="0.95" />
      {/* Right fold */}
      <polygon points="48,23 31,34 48,42" fill="#ea580c" opacity="0.95" />
      {/* Bottom fold */}
      <polygon points="6,42 27,33 48,42" fill="#c2410c" opacity="0.9" />

      <defs>
        <linearGradient id="bmv-env-grad" x1="6" y1="23" x2="48" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Category filter icon resolver
function getCategoryIcon(catId) {
  switch (catId) {
    case 'Development':
      return <Code size={14} strokeWidth={2.4} />;
    case 'Technology':
      return <Cpu size={14} strokeWidth={2.2} />;
    case 'Architecture':
      return <Layers size={14} strokeWidth={2.2} />;
    case 'Design':
      return <Palette size={14} strokeWidth={2.2} />;
    case 'Business':
      return <Briefcase size={14} strokeWidth={2.2} />;
    case 'Career':
      return <User size={14} strokeWidth={2.2} />;
    case 'All':
    default:
      return <LayoutGrid size={14} strokeWidth={2.2} />;
  }
}

export default function BlogMobileView({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  featuredIdx,
  setFeaturedIdx,
  featuredArticles = [],
  activeFeatured,
  filteredArticles = [],
  onOpenNewsletter,
  SafeBlogImage,
}) {
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem('provenance_blog_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const articlesListRef = useRef(null);
  const newsletterRef = useRef(null);
  const [focalCardId, setFocalCardId] = useState(null);
  const [revealedCardIds, setRevealedCardIds] = useState(() => {
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      return new Set(filteredArticles.map((a) => a.id));
    }
    return new Set();
  });
  const [isNewsletterInView, setIsNewsletterInView] = useState(() => {
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      return true;
    }
    return false;
  });

  // 1. Scroll-triggered entrance reveal for article cards
  useEffect(() => {
    const listElem = articlesListRef.current;
    if (!listElem) return;
    if (!('IntersectionObserver' in window)) return;

    const cards = Array.from(listElem.querySelectorAll('.bmv-article-card'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const articleId = entry.target.getAttribute('data-article-id');
            if (articleId) {
              setRevealedCardIds((prev) => {
                if (prev.has(articleId)) return prev;
                const next = new Set(prev);
                next.add(articleId);
                return next;
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -25px 0px',
      }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [filteredArticles]);

  // 2. Scroll-triggered entrance reveal for newsletter card
  useEffect(() => {
    const nlElem = newsletterRef.current;
    if (!nlElem) return;
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsNewsletterInView(true);
          observer.unobserve(nlElem);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(nlElem);
    return () => observer.disconnect();
  }, []);

  // 3. Scroll-linked focal spotlight: softly highlights the article card closest to eye level
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        ticking = false;
        const listElem = articlesListRef.current;
        if (!listElem) return;

        const cards = Array.from(listElem.querySelectorAll('.bmv-article-card'));
        if (cards.length === 0) return;

        const focalLine = window.innerHeight * 0.44;
        let closestId = null;
        let minDistance = Infinity;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const dist = Math.abs(cardCenter - focalLine);

          if (rect.top <= focalLine + 130 && rect.bottom >= focalLine - 130) {
            if (dist < minDistance) {
              minDistance = dist;
              closestId = card.getAttribute('data-article-id');
            }
          }
        });

        setFocalCardId(closestId);
      });
      ticking = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [filteredArticles]);

  const handleToggleBookmark = useCallback((e, articleId) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedIds((prev) => {
      const next = prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId];
      try {
        localStorage.setItem('provenance_blog_bookmarks', JSON.stringify(next));
      } catch {
        // Storage failover
      }
      return next;
    });
  }, []);

  // Touch swipe handling for featured card carousel
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const threshold = 40; // minimum swipe distance

    if (diff > threshold) {
      // Swiped Left -> Next Slide
      if (featuredArticles.length > 1) {
        setFeaturedIdx((prev) => (prev + 1) % featuredArticles.length);
      }
    } else if (diff < -threshold) {
      // Swiped Right -> Prev Slide
      if (featuredArticles.length > 1) {
        setFeaturedIdx((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1));
      }
    }

    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
  };

  // Categories list including 'Architecture' as shown in reference
  const CATEGORIES = [
    { id: 'All', label: 'All' },
    { id: 'Development', label: 'Development' },
    { id: 'Architecture', label: 'Architecture' },
    { id: 'Technology', label: 'Technology' },
    { id: 'Design', label: 'Design' },
    { id: 'Business', label: 'Business' },
    { id: 'Career', label: 'Career' },
  ];

  return (
    <div className="bmv-container">
      {/* SVG ClipPath for the Featured Card Wave Arch Mask */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <clipPath id="bmv-curve-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.22,0 C 0.06,0.18 -0.06,0.46 0.10,0.68 C 0.25,0.85 0.12,0.96 0,1 L 1,1 L 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ========================================================= */}
      {/* 1. HERO HEADER                                            */}
      {/* ========================================================= */}
      <header className="bmv-hero-header">
        <h1 className="bmv-hero-title">
          Blog &amp; <span className="bmv-title-accent">Insights</span>
        </h1>
        <p className="bmv-hero-desc">
          Engineering ideas, product stories and technology perspectives.
        </p>
      </header>

      {/* ========================================================= */}
      {/* 2. SEARCH & FILTER BAR                                    */}
      {/* ========================================================= */}
      <section className="bmv-search-section">
        <div className="bmv-search-bar">
          <Search size={18} className="bmv-search-icon" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search articles, topics, or insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bmv-search-input"
            aria-label="Search articles, topics, or insights"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="bmv-search-clear"
              aria-label="Clear search query"
            >
              <X size={15} />
            </button>
          ) : (
            <div className="bmv-search-filter-icon" aria-hidden="true">
              <SlidersHorizontal size={17} strokeWidth={2.2} />
            </div>
          )}
        </div>

        {/* Horizontal Category Chips */}
        <div className="bmv-categories-scroll" role="tablist" aria-label="Article categories">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.id)}
                className={`bmv-cat-chip ${isActive ? 'is-active' : ''}`}
              >
                <span className="bmv-chip-icon">{getCategoryIcon(cat.id)}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FEATURED ARTICLE SECTION (TOUCH SWIPE CAROUSEL)        */}
      {/* ========================================================= */}
      {activeFeatured && (
        <section
          className="bmv-featured-section"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bmv-featured-card">
            {/* Left Content Column */}
            <div className="bmv-featured-content">
              <div className="bmv-featured-badge">
                <Star size={12} fill="#ea580c" color="#ea580c" />
                <span>Featured Article</span>
              </div>

              <h2 className="bmv-featured-title">
                {activeFeatured.title}
              </h2>

              <p className="bmv-featured-desc">
                {activeFeatured.subtitle || activeFeatured.summary}
              </p>

              <Link
                href={`/blog/${activeFeatured.id}`}
                className="bmv-featured-btn"
                aria-label={`Read full article: ${activeFeatured.title}`}
              >
                <span>Read Full Article</span>
                <ArrowRight size={14} strokeWidth={2.4} />
              </Link>
            </div>

            {/* Right Wave-Masked Image */}
            <div className="bmv-featured-img-box" aria-hidden="true">
              <div className="bmv-featured-img-inner">
                <SafeBlogImage
                  src={activeFeatured.imageUrl}
                  alt={activeFeatured.title}
                  fill
                  priority
                  sizes="(max-width: 767px) 50vw, 220px"
                  className="bmv-featured-img"
                />
              </div>

              {/* Decorative orange wave contour line along the arch mask */}
              <svg className="bmv-mask-contour" viewBox="0 0 40 240" fill="none" preserveAspectRatio="none">
                <path
                  d="M 28 0 C 8 40, -4 110, 16 165 C 32 205, 18 225, 0 240"
                  stroke="#ea580c"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </div>
          </div>

          {/* Elongated Carousel Indicator Dots (● ● ●) */}
          {featuredArticles.length > 1 && (
            <div className="bmv-dots-row" aria-label="Featured carousel navigation">
              {featuredArticles.map((article, idx) => (
                <button
                  key={article.id}
                  type="button"
                  onClick={() => setFeaturedIdx(idx)}
                  className={`bmv-dot ${idx === featuredIdx ? 'is-active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* ========================================================= */}
      {/* 4. LATEST ARTICLES SECTION (HORIZONTAL CARDS)             */}
      {/* ========================================================= */}
      <section className="bmv-latest-section">
        <div className="bmv-section-header">
          <div className="bmv-header-title-wrap">
            <span className="bmv-header-pill" aria-hidden="true" />
            <h2 className="bmv-section-title">Latest Articles</h2>
          </div>

          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="bmv-view-all-btn"
          >
            <span>View All</span>
            <ArrowRight size={13} strokeWidth={2.4} />
          </button>
        </div>

        {/* Article Cards List */}
        {filteredArticles.length === 0 ? (
          <div className="bmv-empty-card">
            <Search size={32} className="bmv-empty-icon" />
            <h3 className="bmv-empty-title">No articles found</h3>
            <p className="bmv-empty-desc">
              We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="bmv-empty-reset-btn"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="bmv-articles-list" ref={articlesListRef}>
            {filteredArticles.map((article, idx) => {
              const isSaved = bookmarkedIds.includes(article.id);
              const isRevealed = revealedCardIds.has(article.id);
              const isFocal = focalCardId === article.id;

              return (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  data-article-id={article.id}
                  className={`bmv-article-card ${isRevealed ? 'is-revealed' : ''} ${
                    isFocal ? 'is-focal' : ''
                  }`}
                  style={{ '--card-idx': Math.min(idx, 8) }}
                  title={article.title}
                >
                  {/* Left: Thumbnail Image */}
                  <div className="bmv-card-thumb">
                    <SafeBlogImage
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      sizes="130px"
                      className="bmv-thumb-img"
                    />
                  </div>

                  {/* Right: Article Details */}
                  <div className="bmv-card-body">
                    {/* Top Row: Category Badge & Bookmark Button */}
                    <div className="bmv-card-top-row">
                      <span className="bmv-card-cat-badge">
                        <span className="bmv-cat-badge-icon">
                          {getCategoryIcon(article.category)}
                        </span>
                        <span>{article.category}</span>
                      </span>

                      <button
                        type="button"
                        onClick={(e) => handleToggleBookmark(e, article.id)}
                        className={`bmv-bookmark-btn ${isSaved ? 'is-bookmarked' : ''}`}
                        aria-label={isSaved ? 'Remove bookmark' : 'Bookmark article'}
                      >
                        <Bookmark
                          size={15}
                          fill={isSaved ? '#ea580c' : 'none'}
                          stroke={isSaved ? '#ea580c' : '#9ca3af'}
                        />
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="bmv-card-title">{article.title}</h3>

                    {/* Meta Row: Date & Read Time */}
                    <div className="bmv-card-meta">
                      <span className="bmv-meta-item">
                        <Calendar size={12} className="bmv-meta-icon" />
                        <span>{article.date}</span>
                      </span>
                      <span className="bmv-meta-item">
                        <Clock size={12} className="bmv-meta-icon" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* ========================================================= */}
      {/* 5. NEWSLETTER CARD AT BOTTOM                              */}
      {/* ========================================================= */}
      <section
        ref={newsletterRef}
        className={`bmv-newsletter-section ${isNewsletterInView ? 'is-revealed' : ''}`}
      >
        <div
          className="bmv-newsletter-card"
          onClick={onOpenNewsletter}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenNewsletter();
            }
          }}
          aria-label="Subscribe to ProvenanceTech newsletter"
        >
          {/* 3D Envelope Illustration */}
          <div className="bmv-nl-illu-box">
            <Mail3DIllustration />
          </div>

          {/* Center Text */}
          <div className="bmv-nl-text-col">
            <h4 className="bmv-nl-title">Get the latest updates</h4>
            <p className="bmv-nl-sub">
              Subscribe to our newsletter for new articles, case studies, and more.
            </p>
          </div>

          {/* Right Circular Arrow Button */}
          <button
            type="button"
            className="bmv-nl-arrow-btn"
            aria-label="Subscribe"
            tabIndex={-1}
          >
            <ArrowRight size={17} strokeWidth={2.4} />
          </button>
        </div>
      </section>
    </div>
  );
}
