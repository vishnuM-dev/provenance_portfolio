'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Home,
  ChevronRight,
  ChevronLeft,
  Play,
  Lock,
  User,
  Calendar,
  Layers,
  HeartHandshake,
  LayoutGrid,
  HelpCircle,
  Package,
  Cpu,
  TrendingUp,
  Clock,
  ImageIcon,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Zap,
  Box,
  FileText,
  MapPin,
  Building2,
  ShoppingCart,
  ClipboardList,
  PackageCheck,
  ShieldCheck,
  Star,
  Rocket,
  ExternalLink,
  X,
  Share2
} from 'lucide-react';
import './CaseStudyDetailView.css';

// Helper to map icon name to Lucide component
function renderFeatureIcon(name, size = 18) {
  switch (name) {
    case 'Zap': return <Zap size={size} />;
    case 'Box': return <Box size={size} />;
    case 'FileText': return <FileText size={size} />;
    case 'MapPin': return <MapPin size={size} />;
    case 'Building':
    case 'Building2': return <Building2 size={size} />;
    case 'ShoppingCart': return <ShoppingCart size={size} />;
    case 'ClipboardList': return <ClipboardList size={size} />;
    case 'PackageCheck': return <PackageCheck size={size} />;
    case 'ShieldCheck': return <ShieldCheck size={size} />;
    case 'TrendingUp': return <TrendingUp size={size} />;
    case 'Clock': return <Clock size={size} />;
    case 'Star': return <Star size={size} />;
    case 'Rocket': return <Rocket size={size} />;
    case 'Code': return <Cpu size={size} />;
    default: return <Zap size={size} />;
  }
}

// Helper to render technology logos/badges
function renderTechIcon(logo) {
  switch (logo) {
    case 'nextjs':
      return (
        <span className="csd-tech-symbol" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="90" fill="#000" />
            <path d="M149.508 157.086L69.6055 54H54V126H66.8633V70.8359L139.736 164.672C143.141 162.336 146.402 159.805 149.508 157.086Z" fill="#fff" />
            <rect x="115" y="54" width="13" height="72" fill="#fff" />
          </svg>
        </span>
      );
    case 'react':
      return (
        <span className="csd-tech-symbol" style={{ color: '#0ea5e9' }} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 115.3 100" fill="currentColor">
            <path d="M57.65 65.57c-8.6 0-15.57-6.97-15.57-15.57s6.97-15.57 15.57-15.57 15.57 6.97 15.57 15.57-6.97 15.57-15.57 15.57zm0-24.89c-5.14 0-9.32 4.18-9.32 9.32s4.18 9.32 9.32 9.32 9.32-4.18 9.32-9.32-4.18-9.32-9.32-9.32z"/>
            <path d="M113.88 43.1c-1.39-7.07-5.07-13.62-10.4-18.49-5.32-4.87-12.02-7.85-18.9-8.41-3.66-.3-7.38.16-11.02 1.34C68.3 7.82 63.09 2.5 57.65 2.5s-10.65 5.32-15.91 14.04c-3.64-1.18-7.36-1.64-11.02-1.34-6.88.56-13.58 3.54-18.9 8.41-5.33 4.87-9.01 11.42-10.4 18.49-1.37 6.99-.37 14.15 2.83 20.3 3.2 6.16 8.35 10.96 14.54 13.56 2.37 8.01 6.55 15.11 11.96 20.24 5.41 5.13 12.08 7.9 18.9 7.9 6.82 0 13.49-2.77 18.9-7.9 5.41-5.13 9.59-12.23 11.96-20.24 6.19-2.6 11.34-7.4 14.54-13.56 3.2-6.15 4.2-13.31 2.83-20.3z"/>
          </svg>
        </span>
      );
    case 'nodejs':
      return (
        <span className="csd-tech-symbol" style={{ color: '#22c55e' }} aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 2.2L3.1 9.6v14.9L16 31.8l12.9-7.4V9.6L16 2.2zm10.6 20.7L16 29 5.4 22.9V11.1L16 5.1l10.6 6v11.8z" />
          </svg>
        </span>
      );
    case 'dynamodb':
      return (
        <span className="csd-tech-symbol" style={{ color: '#2563eb' }} aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 6.5c-4.41 0-8-1.57-8-3.5s3.59-3.5 8-3.5 8 1.57 8 3.5-3.59 3.5-8 3.5zM2 9.5v5c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-5c0 2.48-4.48 4.5-10 4.5S2 11.98 2 9.5zm0 7v3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-3c0 2.48-4.48 4.5-10 4.5S2 18.98 2 16.5z"/>
          </svg>
        </span>
      );
    case 'googlemaps':
      return (
        <span className="csd-tech-symbol" style={{ color: '#ea4335' }} aria-hidden="true">
          <MapPin size={15} />
        </span>
      );
    case 'aws':
      return (
        <span className="csd-tech-symbol" style={{ color: '#f59e0b' }} aria-hidden="true">
          <Cpu size={15} />
        </span>
      );
    case 'stripe':
      return (
        <span className="csd-tech-symbol" style={{ color: '#6366f1' }} aria-hidden="true">
          <span style={{ fontWeight: 800, fontSize: '0.8rem' }}>S</span>
        </span>
      );
    default:
      return (
        <span className="csd-tech-symbol" aria-hidden="true">
          <Cpu size={15} />
        </span>
      );
  }
}

export default function CaseStudyDetailView({ project, allProjects = [] }) {
  // Gallery active slide index
  const gallery = project.galleryScreenshots || [
    { url: project.imageUrl, title: 'Main Preview', caption: 'Application interface overview' },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  // Active Anchor Tab
  const [activeTab, setActiveTab] = useState('overview');

  // Video / Interactive Demo Modal
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Lightbox Modal for Screenshots
  const [lightboxImg, setLightboxImg] = useState(null);

  // Calculate Previous and Next Projects
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0
      ? allProjects[currentIndex - 1]
      : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : allProjects[0];

  // Related projects (exclude current project)
  const relatedProjects = allProjects
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  // Controls for gallery slide
  const handlePrevSlide = (e) => {
    e?.stopPropagation();
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  };

  const handleNextSlide = (e) => {
    e?.stopPropagation();
    setActiveSlide((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  };

  const scrollToSection = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="csd-page">
      <div className="csd-container">
        {/* ========================================================= */}
        {/* 1. TOP BREADCRUMB & PROJECT PAGINATION                    */}
        {/* ========================================================= */}
        <div className="csd-topbar">
          <nav aria-label="Breadcrumb" className="csd-breadcrumb">
            <Link href="/" className="csd-bc-link">
              <Home size={15} className="csd-bc-home-icon" />
              <span>Home</span>
            </Link>
            <ChevronRight size={13} className="csd-bc-sep" />
            <Link href="/portfolio" className="csd-bc-link">
              Portfolio
            </Link>
            <ChevronRight size={13} className="csd-bc-sep" />
            <span className="csd-bc-current">{project.shortTitle || project.title}</span>
          </nav>

          <div className="csd-pagination">
            {prevProject && (
              <Link
                href={`/catalog/${prevProject.id}`}
                className="csd-page-nav-link"
                title={`View ${prevProject.shortTitle || prevProject.title}`}
              >
                <ArrowLeft size={14} />
                <span>Previous Project</span>
              </Link>
            )}
            <span className="csd-page-nav-divider" aria-hidden="true">|</span>
            {nextProject && (
              <Link
                href={`/catalog/${nextProject.id}`}
                className="csd-page-nav-link"
                title={`View ${nextProject.shortTitle || nextProject.title}`}
              >
                <span>Next Project</span>
                <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. PROJECT HERO (TWO-COLUMN DESKTOP COMPOSITION)           */}
        {/* ========================================================= */}
        <section className="csd-hero-section">
          <div className="csd-hero-grid">
            {/* Left Column: Interactive Product Screenshot Preview */}
            <div className="csd-hero-media-col">
              <div
                className="csd-hero-media-frame"
                onClick={() => setLightboxImg(gallery[activeSlide]?.url || project.imageUrl)}
                role="button"
                tabIndex={0}
                aria-label="Enlarge project screenshot"
              >
                <Image
                  src={gallery[activeSlide]?.url || project.imageUrl}
                  alt={`${project.shortTitle || project.title} preview ${activeSlide + 1}`}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className="csd-hero-img"
                />

                {/* Bottom Overlay Controls */}
                <div className="csd-hero-overlay-bar" onClick={(e) => e.stopPropagation()}>
                  {/* Video / Interactive Demo Button */}
                  <button
                    type="button"
                    onClick={() => setVideoModalOpen(true)}
                    className="csd-hero-video-pill"
                    aria-label="Watch Project Demo Video"
                  >
                    <span className="csd-hero-play-icon">
                      <Play size={13} fill="currentColor" />
                    </span>
                    <span>Watch Project Video</span>
                  </button>

                  {/* Slide Carousel Controls: < 01 / 04 > */}
                  <div className="csd-hero-slide-nav">
                    <button
                      type="button"
                      onClick={handlePrevSlide}
                      className="csd-slide-arrow-btn"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="csd-slide-indicator">
                      {String(activeSlide + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
                    </span>
                    <button
                      type="button"
                      onClick={handleNextSlide}
                      className="csd-slide-arrow-btn"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Project Intro & Metadata */}
            <div className="csd-hero-content-col">
              {/* Category & Project ID Header */}
              <div className="csd-hero-meta-header">
                <div className="csd-category-badge">
                  <Share2 size={14} className="csd-category-icon" />
                  <span>{project.categoryTag || project.category || 'WEB APPLICATION'}</span>
                </div>
                <div className="csd-project-id-badge">
                  PROJECT ID: {project.id}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h1 className="csd-hero-title">
                {project.shortTitle || project.title}
              </h1>
              <div className="csd-hero-subtitle">
                {project.subtitle || project.title}
              </div>

              {/* Lead Description */}
              <p className="csd-hero-lead">
                {project.leadDesc || project.description}
              </p>

              {/* Action Buttons */}
              <div className="csd-hero-actions">
                <a
                  href={project.demoUrl || '#screenshots'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="csd-btn-primary"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={15} />
                </a>

                <div className="csd-btn-secondary-locked" title="Commercial client repository — enterprise confidentiality agreement">
                  <Lock size={14} />
                  <span>View Source (Private)</span>
                </div>
              </div>

              {/* Client & Engagement Spec Card */}
              <div className="csd-client-meta-card">
                <div className="csd-meta-item">
                  <div className="csd-meta-icon-box">
                    <User size={16} />
                  </div>
                  <div className="csd-meta-text">
                    <span className="csd-meta-label">Client</span>
                    <span className="csd-meta-value">{project.client || project.creator || 'Commercial Enterprise'}</span>
                  </div>
                </div>

                <div className="csd-meta-item">
                  <div className="csd-meta-icon-box">
                    <Calendar size={16} />
                  </div>
                  <div className="csd-meta-text">
                    <span className="csd-meta-label">Launch Year</span>
                    <span className="csd-meta-value">{project.creationYear || 2025}</span>
                  </div>
                </div>

                <div className="csd-meta-item">
                  <div className="csd-meta-icon-box">
                    <Layers size={16} />
                  </div>
                  <div className="csd-meta-text">
                    <span className="csd-meta-label">Project Type</span>
                    <span className="csd-meta-value">{project.projectType || project.category || 'Web Application'}</span>
                  </div>
                </div>

                <div className="csd-meta-item">
                  <div className="csd-meta-icon-box">
                    <HeartHandshake size={16} />
                  </div>
                  <div className="csd-meta-text">
                    <span className="csd-meta-label">Engagement Model</span>
                    <span className="csd-meta-value">{project.engagementModel || 'End-to-End Product Development'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. IN-PAGE STICKY SECTION ANCHOR TABS                     */}
        {/* ========================================================= */}
        <div className="csd-tabs-nav-wrapper">
          <div className="csd-tabs-bar">
            {[
              { id: 'overview', label: 'Overview', icon: <LayoutGrid size={15} /> },
              { id: 'problem-solution', label: 'Problem & Solution', icon: <HelpCircle size={15} /> },
              { id: 'features', label: 'Features', icon: <Package size={15} /> },
              { id: 'tech-stack', label: 'Technology Stack', icon: <Cpu size={15} /> },
              { id: 'results', label: 'Results', icon: <TrendingUp size={15} /> },
              { id: 'timeline', label: 'Project Timeline', icon: <Clock size={15} /> },
              { id: 'screenshots', label: 'Screenshots', icon: <ImageIcon size={15} /> },
              { id: 'testimonial', label: 'Testimonial', icon: <MessageSquare size={15} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => scrollToSection(tab.id)}
                className={`csd-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                <span className="csd-tab-icon">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. MAIN BENTO GRID (01. OVERVIEW to 05. RESULTS)          */}
        {/* ========================================================= */}
        <div className="csd-bento-grid">
          {/* Card 1: 01. OVERVIEW (Project at a Glance) */}
          <div className="csd-card csd-card-overview" id="overview">
            <div className="csd-eyebrow">01. OVERVIEW</div>
            <h3 className="csd-card-title">{project.overview?.title || 'Project at a Glance'}</h3>
            <p className="csd-card-desc">
              {project.overview?.desc || project.description}
            </p>

            {/* 2x2 Feature Highlights */}
            {project.overview?.highlights && (
              <div className="csd-highlights-grid" id="features">
                {project.overview.highlights.map((feat, i) => (
                  <div key={i} className="csd-highlight-box">
                    <div className="csd-hl-icon-wrap">
                      {renderFeatureIcon(feat.icon)}
                    </div>
                    <div className="csd-hl-content">
                      <div className="csd-hl-title">{feat.title}</div>
                      <div className="csd-hl-desc">{feat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: 02. BUSINESS PROBLEM & 03. OUR SOLUTION */}
          <div className="csd-col-prob-sol" id="problem-solution">
            {/* Card 2: 02. BUSINESS PROBLEM */}
            <div className="csd-card csd-card-problem">
              <div className="csd-prob-header">
                <div className="csd-prob-icon-wrap">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <div className="csd-eyebrow csd-eyebrow-red">02. BUSINESS PROBLEM</div>
                  <h3 className="csd-card-title">{project.problemSolution?.problemTitle || 'Challenges We Addressed'}</h3>
                </div>
              </div>
              <p className="csd-card-desc">
                {project.problemSolution?.problemDesc || project.problem}
              </p>
            </div>

            {/* Card 3: 03. OUR SOLUTION */}
            <div className="csd-card csd-card-solution">
              <div className="csd-sol-header">
                <div className="csd-sol-icon-wrap">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="csd-eyebrow csd-eyebrow-green">03. OUR SOLUTION</div>
                  <h3 className="csd-card-title">{project.problemSolution?.solutionTitle || 'Engineered for Scale & Speed'}</h3>
                </div>
              </div>
              <p className="csd-card-desc">
                {project.problemSolution?.solutionDesc || project.solution}
              </p>
            </div>
          </div>

          {/* Column 3: 04. TECHNOLOGY STACK & 05. KEY RESULTS */}
          <div className="csd-col-tech-res">
            {/* Card 4: 04. TECHNOLOGY STACK */}
            <div className="csd-card csd-card-tech" id="tech-stack">
              <div className="csd-eyebrow">04. TECHNOLOGY STACK</div>
              <h3 className="csd-card-title">Built With Modern Technologies</h3>

              <div className="csd-tech-badges-wrap">
                {(project.techStackDetailed || [
                  { name: 'Next.js', logo: 'nextjs' },
                  { name: 'React', logo: 'react' },
                  { name: 'Node.js', logo: 'nodejs' },
                  { name: 'Amazon DynamoDB', logo: 'dynamodb' },
                ]).map((t, i) => (
                  <div key={i} className="csd-tech-pill">
                    {renderTechIcon(t.logo)}
                    <span className="csd-tech-name">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 5: 05. KEY RESULTS */}
            <div className="csd-card csd-card-results" id="results">
              <div className="csd-eyebrow">05. KEY RESULTS</div>
              <h3 className="csd-card-title">Measurable Impact</h3>

              <div className="csd-results-row">
                {(project.metrics || [
                  { value: '99.98%', label: 'Platform Uptime', icon: 'TrendingUp' },
                  { value: '38 ms', label: 'Avg. Latency', icon: 'Clock' },
                  { value: '99/100', label: 'Lighthouse Score', icon: 'Star' },
                ]).map((m, i) => (
                  <div key={i} className="csd-metric-box">
                    <div className="csd-metric-icon-wrap">
                      {renderFeatureIcon(m.icon, 16)}
                    </div>
                    <div className="csd-metric-value">{m.value}</div>
                    <div className="csd-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. 06. PROJECT TIMELINE                                    */}
        {/* ========================================================= */}
        <section className="csd-section-timeline" id="timeline">
          <div className="csd-section-header">
            <div className="csd-eyebrow">06. PROJECT TIMELINE</div>
            <h2 className="csd-section-title">From Development to Launch</h2>
          </div>

          <div className="csd-timeline-flow">
            <div className="csd-timeline-line" aria-hidden="true" />
            <div className="csd-timeline-steps">
              {(project.timelineSteps || [
                { step: '01', title: 'Planning & Research', period: 'Jan – Feb 2025', desc: 'Architecture mapping and schema planning.', icon: 'FileText' },
                { step: '02', title: 'Development', period: 'Mar – Jun 2025', desc: 'Core platform sprints and feature delivery.', icon: 'Code' },
                { step: '03', title: 'Testing & QA', period: 'Jul 2025', desc: 'Stress testing and automated validation.', icon: 'ShieldCheck' },
                { step: '04', title: 'Production Launch', period: 'Oct 2025', desc: 'Global multi-zone cloud release with SLA.', icon: 'Rocket' },
              ]).map((t, idx) => (
                <div key={idx} className="csd-timeline-node">
                  <div className="csd-timeline-dot-wrap">
                    <div className="csd-timeline-dot">
                      {renderFeatureIcon(t.icon, 18)}
                    </div>
                  </div>
                  <div className="csd-timeline-info">
                    <div className="csd-timeline-step-badge">Phase {t.step}</div>
                    <div className="csd-timeline-title">{t.title}</div>
                    <div className="csd-timeline-period">{t.period}</div>
                    <p className="csd-timeline-desc">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. 07. APPLICATION SCREENSHOTS & GALLERY                  */}
        {/* ========================================================= */}
        <section className="csd-section-gallery" id="screenshots">
          <div className="csd-gallery-header-row">
            <div>
              <div className="csd-eyebrow">07. APPLICATION SCREENSHOTS</div>
              <h2 className="csd-section-title">Product Screens</h2>
            </div>

            {/* Gallery Navigation Buttons */}
            <div className="csd-gallery-nav-btns">
              <button
                type="button"
                onClick={handlePrevSlide}
                className="csd-gallery-arrow-btn"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNextSlide}
                className="csd-gallery-arrow-btn"
                aria-label="Next screenshot"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="csd-gallery-grid">
            {gallery.map((screen, idx) => (
              <div
                key={idx}
                className={`csd-gallery-card ${activeSlide === idx ? 'featured' : ''}`}
                onClick={() => {
                  setActiveSlide(idx);
                  setLightboxImg(screen.url);
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${screen.title} in full size`}
              >
                {/* Browser-style Top Header Chrome */}
                <div className="csd-browser-chrome">
                  <div className="csd-chrome-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <span className="csd-chrome-url">app.{project.id.toLowerCase()}.provenancetech.io</span>
                </div>

                <div className="csd-gallery-img-box">
                  <Image
                    src={screen.url}
                    alt={screen.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="csd-gallery-thumb"
                  />
                </div>

                <div className="csd-gallery-caption-box">
                  <div className="csd-gallery-card-title">{screen.title}</div>
                  <div className="csd-gallery-card-caption">{screen.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. 08. CLIENT TESTIMONIAL & ARCHITECTURE PERSPECTIVE      */}
        {/* ========================================================= */}
        {project.testimonial && (
          <section className="csd-section-testimonial" id="testimonial">
            <div className="csd-testimonial-card">
              <div className="csd-quote-mark" aria-hidden="true">“</div>
              <p className="csd-quote-text">
                {project.testimonial.quote}
              </p>

              <div className="csd-quote-author-row">
                <div className="csd-author-avatar">
                  {project.testimonial.author?.charAt(0) || 'P'}
                </div>
                <div>
                  <div className="csd-author-name">{project.testimonial.author}</div>
                  <div className="csd-author-role">
                    {project.testimonial.role} • <span className="csd-author-company">{project.testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* 8. RELATED PROJECTS                                       */}
        {/* ========================================================= */}
        {relatedProjects.length > 0 && (
          <section className="csd-section-related">
            <div className="csd-section-header">
              <div className="csd-eyebrow">MORE CASE STUDIES</div>
              <h2 className="csd-section-title">Explore Related Solutions</h2>
            </div>

            <div className="csd-related-grid">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/catalog/${rel.id}`}
                  className="csd-related-card"
                >
                  <div className="csd-related-img-wrap">
                    <Image
                      src={rel.imageUrl}
                      alt={rel.shortTitle || rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="csd-related-img"
                    />
                    <div className="csd-related-cat-pill">
                      {rel.categoryTag || rel.category}
                    </div>
                  </div>

                  <div className="csd-related-body">
                    <div className="csd-related-title">{rel.shortTitle || rel.title}</div>
                    <div className="csd-related-subtitle">{rel.subtitle || rel.title}</div>
                    <p className="csd-related-desc">{rel.leadDesc || rel.description}</p>

                    <div className="csd-related-cta">
                      <span>View Case Study</span>
                      <ArrowRight size={14} className="csd-related-arrow" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* 9. CLIENT CONVERSION CALL TO ACTION                       */}
        {/* ========================================================= */}
        <section className="csd-section-conversion">
          <div className="csd-conversion-panel">
            <div className="csd-conversion-content">
              <div className="csd-conversion-badge">
                <Zap size={14} />
                <span>START YOUR PROJECT</span>
              </div>
              <h2 className="csd-conversion-heading">
                Have a similar project in mind?
              </h2>
              <p className="csd-conversion-sub">
                Let&apos;s discuss how our engineering team can architect and build the right software solution for your business.
              </p>

              <div className="csd-conversion-buttons">
                <Link href="/contact" className="csd-conversion-btn-primary">
                  <span>Discuss Your Project</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/portfolio" className="csd-conversion-btn-secondary">
                  <span>Explore All Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================= */}
      {/* LIGHTBOX MODAL FOR SCREENSHOTS                            */}
      {/* ========================================================= */}
      {lightboxImg && (
        <div
          className="csd-lightbox-backdrop"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged screenshot preview"
        >
          <div className="csd-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="csd-lightbox-close-btn"
              onClick={() => setLightboxImg(null)}
              aria-label="Close enlarged preview"
            >
              <X size={20} />
            </button>
            <div className="csd-lightbox-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lightboxImg} alt="Enlarged screenshot" className="csd-lightbox-img" />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* VIDEO / DEMO MODAL                                        */}
      {/* ========================================================= */}
      {videoModalOpen && (
        <div
          className="csd-lightbox-backdrop"
          onClick={() => setVideoModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Project Video Preview"
        >
          <div className="csd-video-modal" onClick={(e) => e.stopPropagation()}>
            <div className="csd-video-modal-header">
              <div className="csd-video-modal-title">
                {project.shortTitle || project.title} — Product Demonstration
              </div>
              <button
                type="button"
                className="csd-lightbox-close-btn"
                onClick={() => setVideoModalOpen(false)}
                aria-label="Close video demo"
              >
                <X size={20} />
              </button>
            </div>

            <div className="csd-video-modal-body">
              <div className="csd-video-poster">
                <Image
                  src={project.imageUrl}
                  alt={`${project.shortTitle} preview`}
                  fill
                  className="csd-video-poster-img"
                />
                <div className="csd-video-overlay-msg">
                  <div className="csd-video-big-play">
                    <Play size={28} fill="#ffffff" />
                  </div>
                  <h3>Live Application Screencast</h3>
                  <p>
                    Interactive demonstration environment recorded from production staging cluster.
                  </p>
                  <a
                    href={project.demoUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="csd-btn-primary"
                    style={{ marginTop: '1rem' }}
                  >
                    Launch Interactive Demo Preview ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

