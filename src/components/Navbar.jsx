'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let ticking = false;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;

      // Check if page scrolled past initial top margin
      setScrolled(currentScrollY > 15);

      if (currentScrollY <= 40) {
        // At or near the top: always visible
        setVisible(true);
      } else if (currentScrollY < lastScrollY - 4) {
        // Scrolling UP: reveal the floating menu immediately
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 6 && currentScrollY > 120) {
        // Scrolling DOWN: hide menu unless mobile menu is open
        if (!mobileMenuOpen) {
          setVisible(false);
        }
      }

      lastScrollY = Math.max(0, currentScrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollState();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Reset visibility and close menu on route change
  useEffect(() => {
    setVisible(true);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Helper to check active route
  const isItemActive = (href) => {
    if (href === '/') return pathname === '/';
    if (href === '/portfolio') {
      return pathname.startsWith('/portfolio') || pathname.startsWith('/projects') || pathname.startsWith('/catalog');
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={`floating-header-wrapper ${scrolled ? 'header-scrolled' : ''} ${visible ? 'header-visible' : 'header-hidden'}`}>
      <div className="floating-navbar-container">
        {/* Brand Logo & Brand Name - Horizontally Aligned & Vertically Centered */}
        <Link
          href="/"
          className="brand-logo-link"
          aria-label="ProvenanceTech - Home"
        >
          <div className="brand-logo-icon">
            <Image
              src="/icon.png"
              alt="ProvenanceTech Monogram Logo"
              width={34}
              height={34}
              priority
              style={{
                objectFit: 'contain',
                width: 'auto',
                height: '100%',
                display: 'block',
                filter: 'drop-shadow(0 2px 8px rgba(197, 155, 79, 0.25))',
              }}
            />
          </div>
          <span className="brand-title">
            PROVENANCE<span className="brand-title-accent">TECH</span>
          </span>
        </Link>

        {/* Desktop Navigation Links - Exact Order: Home | About Us | Services | Projects | Blog | Contact */}
        <nav
          aria-label="Main Navigation"
          className="desktop-floating-nav"
        >
          <ul className="nav-items-list" role="menubar">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.href);
              return (
                <li key={item.label} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    className={`floating-nav-link ${active ? 'active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span>{item.label}</span>{active && <span className="nav-active-dot" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle-btn"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
        >
          {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Floating Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          role="navigation"
          aria-label="Mobile Navigation"
          className="mobile-floating-drawer"
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`mobile-floating-link ${active ? 'active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span>{item.label}</span>{active && <span className="nav-active-dot" aria-hidden="true" />}
                    {active && <span className="mobile-active-badge">Active</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
