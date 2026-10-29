import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 75% 20%, #fcf9f4 0%, #f6f0e6 48%, #ede4d4 100%)',
        padding: '5rem 0 2.5rem',
        marginTop: '5rem',
      }}
    >
      {/* 1. Subtle Silk Waves Vector Background */}
      <svg
        viewBox="0 0 1440 450"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="silkWaveLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#df7a38" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#c59b4f" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#df7a38" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="silkRibbonCurve" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c59b4f" stopOpacity="0.28" />
            <stop offset="50%" stopColor="#df7a38" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#df7a38" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="silkFillBottom" x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c59b4f" stopOpacity="0.14" />
            <stop offset="25%" stopColor="#df7a38" stopOpacity="0.08" />
            <stop offset="75%" stopColor="#df7a38" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#c59b4f" stopOpacity="0.16" />
          </linearGradient>
        </defs>

        {/* Top-Left Silk Ribbons */}
        <path
          d="M-50,0 C120,35 230,120 190,250 C160,340 50,380 -50,410 Z"
          fill="url(#silkWaveLeft)"
        />
        <path
          d="M-40,15 C135,65 240,150 210,280 C180,370 70,400 -40,430"
          fill="none"
          stroke="rgba(223, 122, 56, 0.22)"
          strokeWidth="1.5"
        />

        {/* Bottom Silk Wave Flow */}
        <path
          d="M-30,375 C310,435 670,325 1090,405 C1250,430 1370,385 1470,335 L1470,470 L-30,470 Z"
          fill="url(#silkFillBottom)"
        />
        <path
          d="M-30,375 C310,435 670,325 1090,405 C1250,430 1370,385 1470,335"
          fill="none"
          stroke="rgba(197, 155, 79, 0.25)"
          strokeWidth="1.5"
        />

        {/* Right Corner Accent Wave */}
        <path
          d="M1470,190 C1350,250 1330,350 1470,410 Z"
          fill="url(#silkRibbonCurve)"
        />
      </svg>

      {/* 2. Large Subtle Watermark of Faceted Monogram Emblem on the Right */}
      <div
        style={{
          position: 'absolute',
          right: '-40px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '380px',
          height: '380px',
          opacity: 0.08,
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <Image
          src="/logo-transparent.png"
          alt=""
          width={380}
          height={380}
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
            filter: 'sepia(0.35) saturate(1.2)',
          }}
        />
      </div>

      <style>{`
        .footer-grid-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.35fr;
          gap: 3.5rem;
          margin-bottom: 3.5rem;
        }
        @media (max-width: 900px) {
          .footer-grid-layout {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 2.5rem;
          }
        }
        @media (max-width: 640px) {
          .footer-grid-layout {
            grid-template-columns: 1fr;
            gap: 2.25rem;
          }
        }
        .footer-link-item {
          color: #38312b;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 480;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-link-item:hover {
          color: var(--primary, #eb7821) !important;
          transform: translateX(3px);
        }
        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: #4a423a;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .footer-social-link:hover {
          color: var(--primary, #eb7821) !important;
          transform: translateY(-1px);
        }
      `}</style>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="footer-grid-layout">
          {/* 1. Brand Info & Positioning */}
          <div style={{ maxWidth: '360px' }}>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                marginBottom: '1.25rem',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/icon.png"
                  alt="Provenance Tech Monogram Logo"
                  width={40}
                  height={40}
                  style={{
                    objectFit: 'contain',
                    width: 'auto',
                    height: '100%',
                    filter: 'drop-shadow(0 2px 6px rgba(197, 155, 79, 0.25))',
                  }}
                />
              </div>
              <div>
                <span
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: '#1a1612',
                    display: 'block',
                    lineHeight: 1,
                  }}
                >
                  Provenance&nbsp;<span style={{ color: 'var(--primary, #eb7821)' }}>Tech</span>
                </span>
                <span
                  style={{
                    fontSize: '0.625rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--primary, #eb7821)',
                    fontWeight: 750,
                    display: 'block',
                    marginTop: '4px',
                  }}
                >
                  WEB APPLICATION &amp; MOBILE APPLICATION
                </span>
              </div>
            </Link>

            <p
              style={{
                color: '#5c544d',
                fontSize: '0.885rem',
                lineHeight: 1.68,
                marginBottom: '1.35rem',
                fontWeight: 450,
              }}
            >
              ProvenanceTech is a software engineering company dedicated to architecting high-impact web applications, cross-platform mobile experiences, and resilient cloud infrastructure.
            </p>

            <Link
              href="/about"
              className="footer-link-item"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--primary, #eb7821)',
                fontSize: '0.875rem',
                fontWeight: 700,
              }}
            >
              Learn More About Our Company &rarr;
            </Link>
          </div>

          {/* 2. Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.825rem',
                textTransform: 'uppercase',
                letterSpacing: '0.09em',
                color: 'var(--primary, #eb7821)',
                fontWeight: 800,
                marginBottom: '1.35rem',
              }}
            >
              NAVIGATION
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
              }}
            >
              <li><Link href="/" className="footer-link-item">Home</Link></li>
              <li><Link href="/about" className="footer-link-item">About Us</Link></li>
              <li><Link href="/services" className="footer-link-item">Services</Link></li>
              <li><Link href="/portfolio" className="footer-link-item">Projects</Link></li>
              <li><Link href="/blog" className="footer-link-item">Blog</Link></li>
              <li><Link href="/contact" className="footer-link-item">Contact</Link></li>
            </ul>
          </div>

          {/* 3. Direct Contact */}
          <div>
            <h4
              style={{
                fontSize: '0.825rem',
                textTransform: 'uppercase',
                letterSpacing: '0.09em',
                color: 'var(--primary, #eb7821)',
                fontWeight: 800,
                marginBottom: '1.35rem',
              }}
            >
              CONTACT US
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#8c7e70',
                    fontWeight: 700,
                    marginBottom: '0.45rem',
                    lineHeight: 1.2,
                  }}
                >
                  WhatsApp Direct
                </span>
                <a
                  href="https://wa.me/918074407095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-item"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    fontSize: '0.925rem',
                    fontWeight: 600,
                    color: '#2b2520',
                    lineHeight: 1,
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="1 1 22 22"
                      fill="currentColor"
                      style={{ color: '#25D366', display: 'block' }}
                      aria-label="WhatsApp icon"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.58 1.961.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.112-.527-1.424-.591-2.339-2.029-2.41-2.123-.07-.095-.578-.769-.578-1.467 0-.698.366-1.042.497-1.185.132-.144.288-.18.384-.18.096 0 .192.001.276.006.09.005.21-.034.329.252.126.301.431 1.05.468 1.127.037.077.062.167.012.268-.05.1-.075.163-.15.251-.075.088-.158.196-.226.264-.075.075-.153.157-.066.307.087.15.387.638.831 1.033.571.509 1.053.667 1.203.742.15.075.237.063.325-.038.087-.101.374-.436.474-.586.1-.15.199-.126.335-.075.136.05 8.64.407.994.472.13.065.217.1.25.152.033.052.033.303-.111.708z"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5.01L2 22l5.18-1.31C8.61 21.53 10.26 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.03 16.94c-1.19 0-2.31-.34-3.28-.94l-.23-.14-2.43.64.65-2.37-.15-.24C6.01 14.93 5.5 13.5 5.5 11.94c0-3.6 2.93-6.53 6.53-6.53 3.6 0 6.53 2.93 6.53 6.53 0 3.6-2.93 6.53-6.53 6.53z"/>
                    </svg>
                  </span>
                  <span style={{ lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>8074407095</span>
                </a>
              </div>

              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#8c7e70',
                    fontWeight: 700,
                    marginBottom: '0.45rem',
                    lineHeight: 1.2,
                  }}
                >
                  Email
                </span>
                <a
                  href="mailto:provenancetech@gmail.com"
                  className="footer-link-item"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    fontSize: '0.925rem',
                    fontWeight: 600,
                    color: '#2b2520',
                    wordBreak: 'break-all',
                    lineHeight: 1,
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: 'var(--primary, #eb7821)', display: 'block' }}
                      aria-label="Email icon"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span style={{ lineHeight: 1 }}>provenancetech@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(215, 198, 178, 0.45)',
            paddingTop: '1.75rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            fontSize: '0.85rem',
            color: '#6e6459',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} ProvenanceTech Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
              </svg>
              <span>Facebook</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
