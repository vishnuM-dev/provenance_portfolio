'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  Layers,
  ShieldCheck,
  ChevronDown,
  X,
} from 'lucide-react';
import { TECHNOLOGY_CATEGORIES } from '@/data/technologies';
import './TechnologiesSection.css';

/**
 * 3D-styled Visual Artworks for Desktop View (Preserved 100%)
 */
function DesktopCardIllustration({ categoryId }) {
  switch (categoryId) {
    case 'frontend':
      return (
        <div className="tech-visual-container">
          <div className="tech-visual--browser">
            <div className="tech-browser-mockup">
              <div className="tech-browser-header">
                <span className="tech-browser-dot red"></span>
                <span className="tech-browser-dot yellow"></span>
                <span className="tech-browser-dot green"></span>
              </div>
              <div className="tech-browser-layout">
                <div className="tech-browser-sidebar">
                  <span className="tech-sidebar-stripe active"></span>
                  <span className="tech-sidebar-stripe"></span>
                  <span className="tech-sidebar-stripe"></span>
                </div>
                <div className="tech-browser-content">
                  <div className="tech-browser-hero-box"></div>
                  <div className="tech-browser-line"></div>
                  <div className="tech-browser-line" style={{ width: '55%' }}></div>
                </div>
              </div>
            </div>
            <div className="tech-floating-cube" aria-hidden="true">
              {'</>'}
            </div>
          </div>
        </div>
      );

    case 'backend':
      return (
        <div className="tech-visual-container">
          <div className="tech-visual--backend">
            <div className="tech-floating-backend-cube" aria-hidden="true">
              {'</>'}
            </div>
            <div className="tech-backend-slab">
              API
              <span className="tech-slab-pipe"></span>
            </div>
            <div className="tech-backend-slab">
              Services
              <span
                className="tech-slab-pipe"
                style={{
                  right: 'auto',
                  left: '-12px',
                  borderRadius: '0 0 0 6px',
                  borderRight: 'none',
                  borderLeft: '2px solid #60a5fa',
                }}
              ></span>
            </div>
            <div className="tech-backend-slab">Database</div>
            <div className="tech-floating-gear" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
          </div>
        </div>
      );

    case 'mobile':
      return (
        <div className="tech-visual-container">
          <div className="tech-visual--mobile">
            <div className="tech-floating-apple" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.87.96-2.84-.93.04-2.06.62-2.73 1.4-.58.67-1.1 1.77-.96 2.81 1.04.08 2.09-.59 2.73-1.37z" />
              </svg>
            </div>
            <div className="tech-phone-mockup phone-left">
              <div className="tech-phone-notch"></div>
              <div className="tech-phone-greeting">Good Morning!</div>
              <div className="tech-phone-card-mini">
                <div className="tech-phone-bar"></div>
                <div className="tech-phone-bar short"></div>
              </div>
              <div className="tech-phone-card-mini" style={{ background: '#f5f0ff' }}>
                <div className="tech-phone-bar" style={{ background: '#a78bfa' }}></div>
              </div>
            </div>
            <div className="tech-phone-mockup phone-right">
              <div className="tech-phone-notch"></div>
              <div style={{ width: '100%', height: '26px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', borderRadius: '4px', marginBottom: '4px' }}></div>
              <div className="tech-phone-card-mini">
                <div className="tech-phone-bar short"></div>
              </div>
            </div>
            <div className="tech-floating-android" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 2.23 12.95 2 12 2c-.96 0-1.86.23-2.66.63L7.85 1.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 4.26 6 6.01 6 8h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
              </svg>
            </div>
          </div>
        </div>
      );

    case 'database':
      return (
        <div className="tech-visual-container">
          <div className="tech-visual--database">
            <div className="tech-db-node-leaf" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                <path d="M12 2C11.66 2.37 7 7.74 7 13.12C7 16.96 9.39 20.76 12 21.93C14.61 20.76 17 16.96 17 13.12C17 7.74 12.34 2.37 12 2Z" fill="#13AA52" />
              </svg>
            </div>
            <div className="tech-db-cylinder-stack">
              <div className="tech-db-disk"></div>
              <div className="tech-db-disk"></div>
              <div className="tech-db-disk"></div>
            </div>
            <div className="tech-db-node-sql" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#336791">
                <path d="M12 4C8 4 6 7 6 10C6 14 8 16 10 17V20H14V17C16 16 18 14 18 10C18 7 16 4 12 4Z" />
              </svg>
            </div>
          </div>
        </div>
      );

    case 'cloud-devops':
      return (
        <div className="tech-visual-container">
          <div className="tech-visual--cloud">
            <div className="tech-cloud-cube-docker" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <rect x="5" y="8" width="3" height="3" fill="#ffffff" rx="0.5" />
                <rect x="9" y="8" width="3" height="3" fill="#ffffff" rx="0.5" />
                <rect x="13" y="8" width="3" height="3" fill="#ffffff" rx="0.5" />
                <rect x="9" y="5" width="3" height="3" fill="#ffffff" rx="0.5" />
                <path d="M4 12C5 12 7 13 9 13C12 13 14 11 17 12C18 12.5 19 13 20 14C19 16 16 18 12 18C8 18 5 16 4 14V12Z" fill="#ffffff" />
              </svg>
            </div>
            <div className="tech-cloud-shape">
              <div className="tech-cloud-logo">aws</div>
            </div>
            <div className="tech-cloud-cube-k8s" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#ffffff" strokeWidth="1.8">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 7V17M7 12H17" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      );

    case 'media-integrations':
      return (
        <div className="tech-visual-container">
          <div className="tech-visual--integrations">
            <svg className="tech-integ-connector-svg" viewBox="0 0 200 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 24 Q 70 45 100 68" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              <path d="M165 24 Q 130 45 100 68" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              <path d="M30 110 Q 65 90 100 68" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              <path d="M170 110 Q 135 90 100 68" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            </svg>
            <div className="tech-integ-node node-cloudinary" title="Cloudinary">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="#ffffff">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
              </svg>
            </div>
            <div className="tech-integ-node node-stripe" title="Stripe">
              <span style={{ fontFamily: 'sans-serif', fontWeight: 800 }}>S</span>
            </div>
            <div className="tech-api-cube">API</div>
            <div className="tech-integ-node node-sockets" title="WebSockets">
              <span style={{ fontSize: '10px' }}>&lt;-&gt;</span>
            </div>
            <div className="tech-integ-node node-api" title="Integrations">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#ffffff" strokeWidth="2.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
              </svg>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

/**
 * 3D Illustrations for Mobile Cards (Matching Reference Image)
 */
function MobileCardIllustration({ categoryId }) {
  switch (categoryId) {
    case 'frontend':
      return (
        <svg viewBox="0 0 64 64" fill="none" className="tech-grid-art-svg" aria-hidden="true">
          {/* Peach Browser Card with orange code cube */}
          <rect x="8" y="12" width="48" height="38" rx="8" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" />
          <rect x="8" y="12" width="48" height="11" rx="8" fill="#fff7ed" />
          <circle cx="14" cy="17.5" r="2" fill="#f87171" />
          <circle cx="20" cy="17.5" r="2" fill="#fbbf24" />
          <circle cx="26" cy="17.5" r="2" fill="#34d399" />
          {/* Orange Code Cube */}
          <rect x="22" y="27" width="20" height="20" rx="5" fill="#ea580c" />
          <text x="32" y="41" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle" fontFamily="monospace">
            &lt;/&gt;
          </text>
        </svg>
      );

    case 'backend':
      return (
        <svg viewBox="0 0 64 64" fill="none" className="tech-grid-art-svg" aria-hidden="true">
          {/* Blue Server Rack (3-tier) */}
          <rect x="14" y="12" width="36" height="11" rx="4" fill="#3b82f6" />
          <circle cx="20" cy="17.5" r="1.8" fill="#93c5fd" />
          <circle cx="26" cy="17.5" r="1.8" fill="#93c5fd" />
          <rect x="36" y="16.5" width="10" height="2" rx="1" fill="#bfdbfe" />

          <rect x="14" y="26" width="36" height="11" rx="4" fill="#2563eb" />
          <circle cx="20" cy="31.5" r="1.8" fill="#93c5fd" />
          <circle cx="26" cy="31.5" r="1.8" fill="#93c5fd" />
          <rect x="36" y="30.5" width="10" height="2" rx="1" fill="#bfdbfe" />

          <rect x="14" y="40" width="36" height="11" rx="4" fill="#1d4ed8" />
          <circle cx="20" cy="45.5" r="1.8" fill="#93c5fd" />
          <circle cx="26" cy="45.5" r="1.8" fill="#93c5fd" />
          <rect x="36" y="44.5" width="10" height="2" rx="1" fill="#bfdbfe" />
        </svg>
      );

    case 'mobile':
      return (
        <svg viewBox="0 0 64 64" fill="none" className="tech-grid-art-svg" aria-hidden="true">
          {/* Purple Smartphone Device */}
          <rect x="18" y="10" width="28" height="44" rx="6" fill="#f5f3ff" stroke="#a855f7" strokeWidth="2.5" />
          <rect x="21" y="14" width="22" height="34" rx="3" fill="#ffffff" />
          <path d="M28 12.5 L36 12.5" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="23" y="17" width="18" height="10" rx="2" fill="#ede9fe" />
          <line x1="25" y1="32" x2="39" y2="32" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="25" y1="37" x2="35" y2="37" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'database':
      return (
        <svg viewBox="0 0 64 64" fill="none" className="tech-grid-art-svg" aria-hidden="true">
          {/* Green Database Cylinders with Check Shield */}
          <ellipse cx="28" cy="18" rx="18" ry="6" fill="#10b981" />
          <path d="M10 18v9c0 3.3 8 6 18 6s18-2.7 18-6v-9" fill="#059669" />
          <ellipse cx="28" cy="27" rx="18" ry="6" fill="#10b981" />
          <path d="M10 27v9c0 3.3 8 6 18 6s18-2.7 18-6v-9" fill="#047857" />
          <ellipse cx="28" cy="36" rx="18" ry="6" fill="#10b981" />
          <path d="M10 36v9c0 3.3 8 6 18 6s18-2.7 18-6v-9" fill="#065f46" />
          <ellipse cx="28" cy="45" rx="18" ry="6" fill="#10b981" />
          {/* Shield Badge */}
          <circle cx="45" cy="45" r="9" fill="#ffffff" />
          <circle cx="45" cy="45" r="7.5" fill="#10b981" />
          <path d="M42 45 L44 47 L48 43" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'cloud-devops':
      return (
        <svg viewBox="0 0 64 64" fill="none" className="tech-grid-art-svg" aria-hidden="true">
          {/* 3D Cyan Cloud with Infinity Loop */}
          <path
            d="M20 40 C14 40 10 34 12 28 C14 22 21 20 25 21 C29 13 40 12 45 18 C49 15 58 17 59 23 C65 25 66 32 62 37 C58 40 51 40 48 40 Z"
            fill="url(#cloud-cyan-grad)"
          />
          <path
            d="M25 31 C25 28 29 28 32 31 C35 34 39 34 39 31 C39 28 35 28 32 31 C29 34 25 34 25 31 Z"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="cloud-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'media-integrations':
      return (
        <svg viewBox="0 0 64 64" fill="none" className="tech-grid-art-svg" aria-hidden="true">
          {/* Interlocking Puzzle Pieces */}
          <rect x="14" y="16" width="18" height="18" rx="4" fill="#a855f7" />
          <circle cx="23" cy="16" r="3.5" fill="#a855f7" />
          <circle cx="32" cy="25" r="3.5" fill="#a855f7" />

          <rect x="32" y="16" width="18" height="18" rx="4" fill="#f59e0b" />
          <circle cx="41" cy="34" r="3.5" fill="#f59e0b" />

          <rect x="22" y="32" width="18" height="18" rx="4" fill="#ea580c" />
          <circle cx="31" cy="41" r="3.5" fill="#ea580c" />
        </svg>
      );

    default:
      return null;
  }
}

/**
 * 3D Laptop Illustration with Floating Technology Cubes (Hero Section)
 */
function HeroTechLaptopIllustration() {
  return (
    <div className="tech-hero-laptop-wrap" aria-hidden="true">
      <svg viewBox="0 0 170 145" fill="none" className="tech-hero-laptop-svg">
        {/* Golden Glowing Orbital Ring */}
        <ellipse cx="85" cy="78" rx="66" ry="24" stroke="url(#hero-gold-ring)" strokeWidth="2.5" transform="rotate(-15 85 78)" opacity="0.85" />

        {/* Floating React Cube (Top Left) */}
        <g transform="translate(18, 16)">
          <rect width="22" height="22" rx="5" fill="#ffffff" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.08))" />
          <ellipse cx="11" cy="11" rx="7" ry="2.8" stroke="#00d8ff" strokeWidth="1.2" />
          <ellipse cx="11" cy="11" rx="7" ry="2.8" transform="rotate(60 11 11)" stroke="#00d8ff" strokeWidth="1.2" />
          <ellipse cx="11" cy="11" rx="7" ry="2.8" transform="rotate(120 11 11)" stroke="#00d8ff" strokeWidth="1.2" />
          <circle cx="11" cy="11" r="1.5" fill="#00d8ff" />
        </g>

        {/* Floating Node.js Cube (Top Right) */}
        <g transform="translate(136, 20)">
          <rect width="22" height="22" rx="5" fill="#ffffff" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.08))" />
          <text x="11" y="15" fill="#22c55e" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
            JS
          </text>
        </g>

        {/* Floating Orange Database Cylinders (Left Middle) */}
        <g transform="translate(14, 72)">
          <ellipse cx="10" cy="5" rx="9" ry="3.5" fill="#fb923c" />
          <path d="M1 5v4c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-4" fill="#ea580c" />
          <ellipse cx="10" cy="9" rx="9" ry="3.5" fill="#fb923c" />
          <path d="M1 9v4c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-4" fill="#c2410c" />
          <ellipse cx="10" cy="13" rx="9" ry="3.5" fill="#fb923c" />
        </g>

        {/* Laptop Shadow */}
        <ellipse cx="85" cy="120" rx="56" ry="12" fill="#ea580c" fillOpacity="0.12" filter="blur(4px)" />

        {/* Metallic Base */}
        <polygon points="26,104 144,104 154,118 16,118" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
        <polygon points="16,118 154,118 152,123 18,123" fill="#94a3b8" />
        <polygon points="70,109 100,109 102,116 68,116" fill="#cbd5e1" />

        {/* Laptop Screen */}
        <polygon points="36,25 134,25 144,104 26,104" fill="#1e293b" />
        <polygon points="40,30 130,30 140,99 30,99" fill="#0f172a" />

        {/* Code </> Symbol on Screen */}
        <text
          x="85"
          y="72"
          fill="#ffffff"
          fontSize="24"
          fontWeight="800"
          textAnchor="middle"
          fontFamily="monospace"
          letterSpacing="1"
        >
          &lt;/&gt;
        </text>

        <defs>
          <linearGradient id="hero-gold-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * 3D Rocket Illustration for Bottom CTA
 */
function CtaRocketIllustration() {
  return (
    <svg viewBox="0 0 76 76" fill="none" className="tech-cta-rocket-svg" aria-hidden="true">
      {/* Smoke puffs */}
      <ellipse cx="26" cy="62" rx="14" ry="8" fill="#ffffff" fillOpacity="0.85" />
      <ellipse cx="40" cy="60" rx="13" ry="7" fill="#ffffff" fillOpacity="0.95" />
      <ellipse cx="16" cy="56" rx="10" ry="6" fill="#ffffff" fillOpacity="0.75" />
      <circle cx="28" cy="54" r="7" fill="#ffffff" fillOpacity="0.9" />

      {/* Thruster Flame */}
      <polygon points="28,54 40,43 23,45" fill="#fde047" />
      <polygon points="29,52 37,44 25,46" fill="#ef4444" />

      {/* Fins */}
      <path d="M19 44 L25 39 L23 50 Z" fill="#ffffff" fillOpacity="0.95" />
      <path d="M40 28 L45 35 L36 37 Z" fill="#ffffff" fillOpacity="0.95" />

      {/* Rocket Main Body */}
      <path
        d="M23 45 C25 36 34 20 48 16 C45 30 34 39 25 45 Z"
        fill="#ffffff"
        filter="drop-shadow(0 2px 5px rgba(0,0,0,0.18))"
      />
      {/* Orange Tip */}
      <path d="M43 19 C45 17 47 16 48 16 C48 17 47 19 45 21 Z" fill="#ea580c" />
      <circle cx="36" cy="28" r="4.5" fill="#ea580c" />
      <circle cx="36" cy="28" r="2.8" fill="#fed7aa" />
    </svg>
  );
}

/**
 * Desktop Technology Card (Preserved 100%)
 */
function DesktopTechnologyCard({ category, isExpanded, onToggle }) {
  const cardRef = useRef(null);
  const visibleTechs = category.technologies.slice(0, 3);
  const remainingTechs = category.technologies.slice(3);
  const overflowCount = remainingTechs.length;

  useEffect(() => {
    if (!isExpanded) return;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onToggle();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded, onToggle]);

  return (
    <article
      ref={cardRef}
      className={`tech-card tech-card--${category.colorTheme || 'peach'} ${isExpanded ? 'is-card-expanded' : ''}`}
    >
      <div className="tech-card-header">
        <span className="tech-number-badge">{category.number || '01'}</span>
        <span className="tech-tool-count-badge">
          {category.technologies.length} Tools
        </span>
      </div>

      <div className="tech-card-body">
        <div className="tech-card-content">
          <h3 className="tech-card-title">{category.title}</h3>
          <p className="tech-card-desc">{category.description}</p>
        </div>
        <DesktopCardIllustration categoryId={category.id} />
      </div>

      <div className="tech-card-footer">
        <div className="tech-pill-list">
          {visibleTechs.map((tech) => (
            <div key={tech.name} className="tech-mini-pill" title={tech.role}>
              <span className="tech-mini-pill-icon">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}

          {overflowCount > 0 && (
            <button
              type="button"
              className={`tech-overflow-btn ${isExpanded ? 'is-expanded' : ''}`}
              onClick={onToggle}
              aria-expanded={isExpanded}
              aria-controls={`tech-expand-panel-${category.id}`}
              aria-label={
                isExpanded
                  ? `Show less technologies in ${category.title}`
                  : `View ${overflowCount} more technologies in ${category.title}`
              }
              title={isExpanded ? 'Click to show less' : `Click to view all ${overflowCount} additional technologies`}
            >
              <span>{isExpanded ? 'Show Less' : `+${overflowCount} more`}</span>
              <ChevronDown
                size={13}
                strokeWidth={2.6}
                className={`tech-overflow-arrow ${isExpanded ? 'is-rotated' : ''}`}
                aria-hidden="true"
              />
            </button>
          )}
        </div>

        {overflowCount > 0 && (
          <div
            id={`tech-expand-panel-${category.id}`}
            className={`tech-card-drawer ${isExpanded ? 'is-open' : ''}`}
            aria-hidden={!isExpanded}
          >
            <div className="tech-card-drawer-inner">
              <div className="tech-drawer-surface">
                <div className="tech-drawer-surface-header">
                  <div className="tech-drawer-title-group">
                    <span className="tech-drawer-dot" aria-hidden="true"></span>
                    <span className="tech-drawer-label">More {category.title} Tools</span>
                  </div>
                  <span className="tech-drawer-count-badge">
                    +{overflowCount} Tools
                  </span>
                </div>
                <div className="tech-drawer-pills">
                  {remainingTechs.map((tech, idx) => (
                    <div
                      key={tech.name}
                      className="tech-mini-pill tech-drawer-pill"
                      style={{ '--pill-idx': idx }}
                      title={tech.role}
                    >
                      <span className="tech-mini-pill-icon">{tech.icon}</span>
                      <span className="tech-mini-pill-name">{tech.name}</span>
                      {tech.tag && (
                        <span className="tech-mini-pill-tag">{tech.tag}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

/**
 * Premium Mobile Category Grid Card (Matching New Reference Image)
 */
function MobileGridCard({ category, isExpanded, onToggle, index }) {
  // Concise descriptions from reference image
  const descriptions = {
    frontend: 'Modern, responsive UIs with high performance and clean code.',
    backend: 'Scalable services, secure APIs, and robust business logic.',
    mobile: 'Cross-platform mobile apps for iOS & Android with native performance.',
    database: 'Reliable, high-performance data solutions with integrity and scale.',
    'cloud-devops': 'Automated CI/CD, containerization, and resilient cloud infrastructure.',
    'media-integrations': 'Optimized asset pipelines and secure third-party service integrations.',
  };

  const desc = descriptions[category.id] || category.description;

  return (
    <div
      className={`tech-grid-card tech-grid-card--${category.id || 'frontend'} ${isExpanded ? 'is-expanded' : ''}`}
      style={{ '--card-idx': index }}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`${category.title}. ${isExpanded ? 'Click to collapse details' : 'Click to view all tools'}`}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      {/* 3D Illustration Centered near top */}
      <div className="tech-grid-art-box" aria-hidden="true">
        <MobileCardIllustration categoryId={category.id} />
      </div>

      {/* Title */}
      <h3 className="tech-grid-card-title">{category.title}</h3>

      {/* Supporting Description */}
      <p className="tech-grid-card-desc">{desc}</p>

      {/* Bottom Action Row: Decorative Orange Progress Line + Circular Arrow */}
      <div className="tech-grid-action-row">
        <span className="tech-grid-decor-line" aria-hidden="true" />
        <div className="tech-grid-arrow-btn" aria-hidden="true">
          <ArrowRight size={14} strokeWidth={2.4} />
        </div>
      </div>

      {/* In-Card Expanded Technology Badges (Revealed when card is tapped) */}
      {isExpanded && (
        <div
          className="tech-grid-expanded-tray"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="tech-grid-expanded-header">
            <span className="tech-grid-expanded-title">
              {category.technologies.length} Technologies
            </span>
            <button
              type="button"
              className="tech-grid-close-btn"
              onClick={onToggle}
              aria-label="Close technology details"
            >
              <X size={14} strokeWidth={2.5} />
            </button>
          </div>

          <div className="tech-grid-expanded-pills">
            {category.technologies.map((tech) => (
              <div key={tech.name} className="tech-grid-pill" title={tech.role}>
                <span className="tech-grid-pill-icon">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TechnologiesSection({ id = 'technologies' }) {
  const [expandedDesktopCategoryId, setExpandedDesktopCategoryId] = useState(null);
  const [expandedMobileCardId, setExpandedMobileCardId] = useState(null);

  const toggleMobileCard = (catId) => {
    setExpandedMobileCardId(expandedMobileCardId === catId ? null : catId);
  };

  return (
    <section id={id} className="tech-showcase-section" style={{ scrollMarginTop: '90px' }}>
      {/* Background Soft Atmospheric Glow & Decorative Circles */}
      <div className="tech-bg-decorations" aria-hidden="true">
        <div className="tech-bg-radial-top" />
        <div className="tech-bg-arc-ring" />
        <div className="tech-bg-radial-bottom" />
      </div>

      <div className="tech-showcase-container">
        {/* ========================================================= */}
        {/* 1. MOBILE & TABLET VIEW (< 1024px) - Matched to Reference  */}
        {/* ========================================================= */}
        <div className="tech-mobile-flow">
          {/* Mobile Badge: ( [Layers] Our Technology Stack ) */}
          <div className="tech-mobile-badge-wrap">
            <div className="tech-mobile-badge">
              <Layers size={14} className="tech-badge-icon" aria-hidden="true" />
              <span>Our Technology Stack</span>
            </div>
          </div>

          {/* Hero Row: Heading on Left + 3D Tech Laptop on Right */}
          <div className="tech-mobile-hero-row">
            <div className="tech-mobile-hero-text">
              <h2 className="tech-mobile-heading">
                Technologies That Power<br />
                <span className="tech-mobile-heading-accent">
                  Innovation
                  {/* Two small diagonal orange strokes beside Innovation */}
                  <span className="tech-heading-accents" aria-hidden="true">
                    <svg width="22" height="14" viewBox="0 0 24 14" fill="none">
                      <line x1="4" y1="12" x2="10" y2="4" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="14" y1="12" x2="20" y2="4" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  {/* Curved Underline beneath Innovation */}
                  <svg
                    viewBox="0 0 160 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="tech-heading-underline-svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 12C45 17 115 16 157 5"
                      stroke="#ea580c"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="tech-mobile-desc">
                A modern and future-ready tech stack to build scalable, secure, and high-performance digital solutions.
              </p>
            </div>

            {/* 3D Tech Laptop Illustration */}
            <div className="tech-mobile-hero-laptop-col">
              <HeroTechLaptopIllustration />
            </div>
          </div>

          {/* 6 Premium Technology Category Cards Grid */}
          <div className="tech-grid-container">
            {TECHNOLOGY_CATEGORIES.map((category, idx) => (
              <MobileGridCard
                key={`grid-${category.id}`}
                category={category}
                index={idx}
                isExpanded={expandedMobileCardId === category.id}
                onToggle={() => toggleMobileCard(category.id)}
              />
            ))}
          </div>

          {/* Bottom Banner: Let's Build Your Next Solution */}
          <div className="tech-mobile-bottom-banner">
            <div className="tech-banner-rocket-box">
              <CtaRocketIllustration />
            </div>

            <div className="tech-banner-text-box">
              <h3 className="tech-banner-title">
                Let&apos;s Build<br />Your Next Solution
              </h3>
            </div>

            <div className="tech-banner-btn-box">
              <Link href="/contact" className="tech-banner-btn">
                <span>Discuss Tech Stack</span>
                <ArrowRight size={15} strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. DESKTOP VIEW (>= 1024px) - Preserved Original Layout   */}
        {/* ========================================================= */}
        <div className="tech-desktop-flow">
          <div className="tech-showcase-header">
            <div className="tech-badge-pill">
              <span className="tech-badge-dot"></span>
              OUR TECHNOLOGY STACK
            </div>

            <h2 className="tech-showcase-title">
              Technologies That Power <span className="tech-highlight">Innovation</span>
            </h2>

            <p className="tech-showcase-desc">
              We combine modern technologies and proven engineering practices to build reliable, scalable, and high-performance digital solutions tailored to your business needs.
            </p>

            <div className="tech-pillars-row">
              <div className="tech-pillar-item">
                <div className="tech-pillar-icon-box">
                  <Zap size={18} />
                </div>
                <div className="tech-pillar-text">
                  <div className="tech-pillar-title">Modern &amp; Updated</div>
                  <div className="tech-pillar-sub">Using the latest stable technologies</div>
                </div>
              </div>

              <div className="tech-pillar-item">
                <div className="tech-pillar-icon-box">
                  <Layers size={18} />
                </div>
                <div className="tech-pillar-text">
                  <div className="tech-pillar-title">Scalable Solutions</div>
                  <div className="tech-pillar-sub">Built for growth and performance</div>
                </div>
              </div>

              <div className="tech-pillar-item">
                <div className="tech-pillar-icon-box">
                  <ShieldCheck size={18} />
                </div>
                <div className="tech-pillar-text">
                  <div className="tech-pillar-title">Secure &amp; Reliable</div>
                  <div className="tech-pillar-sub">Best practices in development</div>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-showcase-grid">
            {TECHNOLOGY_CATEGORIES.map((category) => (
              <DesktopTechnologyCard
                key={category.id}
                category={category}
                isExpanded={expandedDesktopCategoryId === category.id}
                onToggle={() =>
                  setExpandedDesktopCategoryId(
                    expandedDesktopCategoryId === category.id ? null : category.id
                  )
                }
              />
            ))}
          </div>

          <div className="tech-cta-banner">
            <div className="tech-cta-banner-left">
              <span className="tech-cta-label">LET&apos;S BUILD TOGETHER</span>
              <h3 className="tech-cta-title">
                Looking for a custom software or mobile architecture?
              </h3>
              <p className="tech-cta-desc">
                We tailor our technology selection to your system performance &amp; scaling needs.
              </p>
            </div>

            <div className="tech-cta-banner-right">
              <Link href="/contact" className="tech-cta-btn">
                Discuss Tech Stack
                <ArrowRight size={16} />
              </Link>

              <div className="tech-cta-blocks-visual" aria-hidden="true">
                <div className="tech-cta-cube">{'</>'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
