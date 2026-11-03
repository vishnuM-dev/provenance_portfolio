import Link from 'next/link';
import Image from 'next/image';
import '@/components/AboutPage.css';
import AboutHeroSection from '@/components/AboutHeroSection';
import {
  Code2,
  Globe,
  Smartphone,
  Cpu,
  Database,
  Cloud,
  Compass,
  Sparkles,
  CheckCircle2,
  HeartHandshake,
  Users,
  Zap,
  ArrowRight,
  ShieldCheck,
  Target,
  Laptop,
  TrendingUp,
  Server,
  Layers,
  Settings,
  Workflow,
  Play
} from 'lucide-react';

export const metadata = {
  title: 'About ProvenanceTech | Technology Built on Trust. Innovation Built for Growth.',
  description: 'At ProvenanceTech, we are a software engineering company focused on modern web applications, mobile experiences, and scalable digital solutions built on trust and transparency.',
};

/* ==========================================================================
   3D Service Icons Matching Mobile Reference Image
   ========================================================================== */
function WebApp3DIllustration() {
  return (
    <svg viewBox="0 0 76 76" fill="none" className="about-what-3d-svg">
      <defs>
        <radialGradient id="webappGlow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="laptopScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
      </defs>
      {/* Ambient shadow */}
      <ellipse cx="38" cy="58" rx="28" ry="7" fill="#ea580c" fillOpacity="0.16" filter="blur(3px)" />
      {/* Glowing screen backdrop */}
      <ellipse cx="38" cy="38" rx="26" ry="20" fill="url(#webappGlow)" />
      {/* Base / Keyboard chassis */}
      <polygon points="12,50 64,50 68,57 8,57" fill="#ea580c" opacity="0.9" />
      <polygon points="8,57 68,57 66,60 10,60" fill="#9a3412" />
      {/* Trackpad */}
      <polygon points="32,52 44,52 45,55 31,55" fill="#fed7aa" opacity="0.6" />
      {/* Display Lid Back */}
      <polygon points="17,17 59,17 64,50 12,50" fill="#7c2d12" />
      {/* Display Screen */}
      <polygon points="19,19 57,19 62,48 14,48" fill="url(#laptopScreenGrad)" />
      {/* Code </> Symbol on Screen */}
      <text
        x="38"
        y="37"
        fill="#ffffff"
        fontSize="14"
        fontWeight="850"
        textAnchor="middle"
        fontFamily="monospace"
        letterSpacing="0.5"
      >
        &lt;/&gt;
      </text>
    </svg>
  );
}

function MobileApp3DIllustration() {
  return (
    <svg viewBox="0 0 76 76" fill="none" className="about-what-3d-svg">
      {/* Ambient shadow */}
      <ellipse cx="38" cy="62" rx="22" ry="6" fill="#ea580c" fillOpacity="0.16" filter="blur(3px)" />
      {/* Smartphone Body */}
      <rect x="23" y="14" width="30" height="48" rx="6" fill="#ffffff" stroke="#ea580c" strokeWidth="2.4" />
      {/* Screen Outline */}
      <rect x="26" y="20" width="24" height="36" rx="3.5" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1" />
      {/* Speaker Bar */}
      <rect x="33" y="17" width="10" height="1.6" rx="0.8" fill="#ea580c" />
      {/* Home Indicator / Dot */}
      <circle cx="38" cy="58" r="1.5" fill="#ea580c" />
    </svg>
  );
}

function CustomSoftware3DIllustration() {
  return (
    <svg viewBox="0 0 76 76" fill="none" className="about-what-3d-svg">
      <defs>
        <linearGradient id="layerGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffb076" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="layerGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="layerGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#9a3412" />
        </linearGradient>
      </defs>
      {/* Ambient shadow */}
      <ellipse cx="38" cy="64" rx="26" ry="6" fill="#ea580c" fillOpacity="0.16" filter="blur(3px)" />
      {/* Bottom Layer 1 */}
      <g transform="translate(0, 16)">
        <polygon points="38,20 62,31 38,42 14,31" fill="#ffffff" stroke="#ea580c" strokeWidth="2.2" strokeLinejoin="round" />
        <polygon points="14,31 38,42 38,46 14,35" fill="url(#layerGrad3)" />
        <polygon points="38,42 62,31 62,35 38,46" fill="url(#layerGrad3)" />
      </g>
      {/* Middle Layer 2 */}
      <g transform="translate(0, 8)">
        <polygon points="38,20 62,31 38,42 14,31" fill="#ffffff" stroke="#ea580c" strokeWidth="2.2" strokeLinejoin="round" />
        <polygon points="14,31 38,42 38,46 14,35" fill="url(#layerGrad2)" />
        <polygon points="38,42 62,31 62,35 38,46" fill="url(#layerGrad2)" />
      </g>
      {/* Top Layer 3 */}
      <g transform="translate(0, 0)">
        <polygon points="38,20 62,31 38,42 14,31" fill="#ffffff" stroke="#ea580c" strokeWidth="2.2" strokeLinejoin="round" />
        <polygon points="14,31 38,42 38,46 14,35" fill="url(#layerGrad1)" />
        <polygon points="38,42 62,31 62,35 38,46" fill="url(#layerGrad1)" />
      </g>
    </svg>
  );
}

function BackendApi3DIllustration() {
  return (
    <svg viewBox="0 0 76 76" fill="none" className="about-what-3d-svg">
      <defs>
        <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fff3ea" />
        </linearGradient>
      </defs>
      {/* Ambient shadow */}
      <ellipse cx="38" cy="60" rx="25" ry="6" fill="#ea580c" fillOpacity="0.16" filter="blur(3px)" />
      {/* 3D Cloud */}
      <path
        d="M23 44 C17 44 12 39 14 32 C16 26 23 24 27 25 C31 17 42 16 47 22 C51 19 60 21 61 27 C67 29 68 36 64 41 C60 45 53 45 50 45 Z"
        fill="url(#cloudGrad)"
        stroke="#ea580c"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Gear in bottom right of cloud */}
      <g transform="translate(42, 36)">
        <circle cx="12" cy="12" r="7.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="#ffffff" />
        {/* Gear Teeth */}
        <path d="M12 2.5 V5 M12 19 V21.5 M2.5 12 H5 M19 12 H21.5 M5.3 5.3 L7.1 7.1 M16.9 16.9 L18.7 18.7 M5.3 18.7 L7.1 16.9 M16.9 7.1 L18.7 5.3" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ==========================================================================
   3D Brand Principles Illustrations Matching Mobile Reference Image
   ========================================================================== */
function ValShield3D() {
  return (
    <svg viewBox="0 0 96 90" fill="none" className="about-val-3d-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="shieldAmbientGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="shieldPodiumTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffedd5" />
        </linearGradient>
        <linearGradient id="shieldPodiumSide" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
        <linearGradient id="shieldRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="40%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#9a3412" />
        </linearGradient>
        <linearGradient id="shieldFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fffaf5" />
          <stop offset="60%" stopColor="#ffedd5" />
          <stop offset="100%" stopColor="#fed7aa" />
        </linearGradient>
        <filter id="shieldShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#ea580c" floodOpacity="0.22" />
        </filter>
      </defs>

      <ellipse cx="48" cy="46" rx="38" ry="34" fill="url(#shieldAmbientGlow)" />
      <ellipse cx="48" cy="70" rx="36" ry="12" stroke="rgba(234, 88, 12, 0.28)" strokeWidth="1.2" fill="none" />

      {/* 3D Circular Podium Base */}
      <path d="M 20 67 C 20 74, 76 74, 76 67 L 76 72 C 76 79, 20 79, 20 72 Z" fill="url(#shieldPodiumSide)" />
      <ellipse cx="48" cy="67" rx="28" ry="9" fill="url(#shieldPodiumTop)" stroke="rgba(234, 88, 12, 0.35)" strokeWidth="1" />

      {/* 3D Shield */}
      <g filter="url(#shieldShadow)">
        <path
          d="M 48 16 C 62 16, 68 20, 68 35 C 68 53, 53 62, 48 65 C 43 62, 28 53, 28 35 C 28 20, 34 16, 48 16 Z"
          fill="url(#shieldRimGrad)"
        />
        <path
          d="M 48 20 C 58 20, 63 23, 63 36 C 63 50, 52 57, 48 60 C 44 57, 33 50, 33 36 C 33 23, 38 20, 48 20 Z"
          fill="url(#shieldFaceGrad)"
        />
        <path
          d="M 48 22 C 55 22, 60 25, 60 36 C 60 42, 57 48, 54 52 C 51 46, 48 34, 48 22 Z"
          fill="white"
          opacity="0.38"
        />
        <path
          d="M 41 39 L 46 44 L 56 32"
          stroke="#ea580c"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function ValLaptop3D() {
  return (
    <svg viewBox="0 0 96 90" fill="none" className="about-val-3d-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lapAmbientGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lapPodiumTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffedd5" />
        </linearGradient>
        <linearGradient id="lapPodiumSide" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
        <linearGradient id="lapScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#9a3412" />
        </linearGradient>
        <linearGradient id="lapScreenInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="lapBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fffaf5" />
          <stop offset="100%" stopColor="#fed7aa" />
        </linearGradient>
        <filter id="lapShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#ea580c" floodOpacity="0.22" />
        </filter>
      </defs>

      <ellipse cx="48" cy="48" rx="38" ry="34" fill="url(#lapAmbientGlow)" />
      <ellipse cx="48" cy="70" rx="36" ry="12" stroke="rgba(234, 88, 12, 0.28)" strokeWidth="1.2" fill="none" />

      {/* 3D Circular Podium Base */}
      <path d="M 20 67 C 20 74, 76 74, 76 67 L 76 72 C 76 79, 20 79, 20 72 Z" fill="url(#lapPodiumSide)" />
      <ellipse cx="48" cy="67" rx="28" ry="9" fill="url(#lapPodiumTop)" stroke="rgba(234, 88, 12, 0.35)" strokeWidth="1" />

      {/* 3D Open Laptop */}
      <g filter="url(#lapShadow)">
        <polygon points="32,22 66,20 64,52 30,54" fill="url(#lapScreenGrad)" />
        <polygon points="34,24 64,22 62,50 32,52" fill="url(#lapScreenInner)" />
        <polygon points="34,24 54,23 38,51 32,52" fill="white" opacity="0.2" />

        {/* Code brackets < / > */}
        <path d="M 43 33 L 38 37 L 43 41" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="48" y1="31" x2="45" y2="43" stroke="#ffedd5" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 50 33 L 55 37 L 50 41" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Laptop Keyboard Base */}
        <polygon points="24,62 70,59 72,63 26,66" fill="#fdba74" />
        <polygon points="28,54 66,51 70,59 24,62" fill="url(#lapBaseGrad)" stroke="rgba(234, 88, 12, 0.3)" strokeWidth="0.8" />
        <polygon points="43,58 53,57 54,60 44,61" fill="#fed7aa" opacity="0.8" />
      </g>
    </svg>
  );
}

function ValBulb3D() {
  return (
    <svg viewBox="0 0 96 90" fill="none" className="about-val-3d-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bulbRaysGlow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#fb923c" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#ea580c" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bulbGlassGrad" cx="45%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fffaf0" />
          <stop offset="35%" stopColor="#fed7aa" />
          <stop offset="75%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </radialGradient>
        <linearGradient id="screwGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9a3412" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>
        <linearGradient id="bulbPodiumTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffedd5" />
        </linearGradient>
        <linearGradient id="bulbPodiumSide" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
        <filter id="bulbShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#ea580c" floodOpacity="0.25" />
        </filter>
      </defs>

      <circle cx="48" cy="38" r="34" fill="url(#bulbRaysGlow)" />

      {/* Light Rays */}
      <g stroke="#ea580c" strokeWidth="2" strokeLinecap="round" opacity="0.75">
        <line x1="48" y1="12" x2="48" y2="7" />
        <line x1="28" y1="20" x2="24" y2="16" />
        <line x1="68" y1="20" x2="72" y2="16" />
        <line x1="20" y1="36" x2="15" y2="36" />
        <line x1="76" y1="36" x2="81" y2="36" />
      </g>

      <ellipse cx="48" cy="70" rx="36" ry="12" stroke="rgba(234, 88, 12, 0.28)" strokeWidth="1.2" fill="none" />

      {/* 3D Circular Podium Base */}
      <path d="M 20 67 C 20 74, 76 74, 76 67 L 76 72 C 76 79, 20 79, 20 72 Z" fill="url(#bulbPodiumSide)" />
      <ellipse cx="48" cy="67" rx="28" ry="9" fill="url(#bulbPodiumTop)" stroke="rgba(234, 88, 12, 0.35)" strokeWidth="1" />

      {/* 3D Lightbulb */}
      <g filter="url(#bulbShadow)">
        <path
          d="M 36 48 C 34 44, 30 38, 30 32 C 30 22, 38 15, 48 15 C 58 15, 66 22, 66 32 C 66 38, 62 44, 60 48 Z"
          fill="url(#bulbGlassGrad)"
          stroke="#ea580c"
          strokeWidth="1.5"
        />
        <ellipse cx="41" cy="24" rx="4" ry="6" transform="rotate(-25 41 24)" fill="white" opacity="0.55" />

        {/* Filament */}
        <path
          d="M 44 42 L 44 32 C 44 28, 52 28, 52 32 L 52 42"
          stroke="#fffaf0"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <circle cx="48" cy="30" r="2" fill="#ffffff" />

        {/* Screw Base */}
        <rect x="40" y="49" width="16" height="3" rx="1.5" fill="url(#screwGrad)" />
        <rect x="41" y="53" width="14" height="3" rx="1.5" fill="url(#screwGrad)" />
        <rect x="43" y="57" width="10" height="2.5" rx="1" fill="#7c2d12" />
        <ellipse cx="48" cy="60" rx="3" ry="1.2" fill="#431407" />
      </g>
    </svg>
  );
}

function ValGrowth3D() {
  return (
    <svg viewBox="0 0 96 90" fill="none" className="about-val-3d-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="growthAmbientGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="avatarHeadBack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id="avatarHeadFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff7ed" />
          <stop offset="40%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="40%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <filter id="growthShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#ea580c" floodOpacity="0.25" />
        </filter>
      </defs>

      <ellipse cx="48" cy="48" rx="38" ry="34" fill="url(#growthAmbientGlow)" />
      <ellipse cx="48" cy="70" rx="36" ry="12" stroke="rgba(234, 88, 12, 0.28)" strokeWidth="1.2" fill="none" />

      {/* Avatars & Growth Arrow Group */}
      <g filter="url(#growthShadow)">
        {/* Left Back Avatar */}
        <circle cx="34" cy="36" r="7.5" fill="url(#avatarHeadBack)" />
        <path d="M 23 54 C 23 45, 45 45, 45 54 Z" fill="url(#avatarHeadBack)" />

        {/* Right Back Avatar */}
        <circle cx="58" cy="34" r="7.5" fill="url(#avatarHeadBack)" />
        <path d="M 47 52 C 47 43, 69 43, 69 52 Z" fill="url(#avatarHeadBack)" />

        {/* Center Front Avatar */}
        <circle cx="45" cy="40" r="9" fill="url(#avatarHeadFront)" stroke="#ffffff" strokeWidth="1.5" />
        <ellipse cx="43" cy="36" rx="2.5" ry="3.5" transform="rotate(-20 43 36)" fill="white" opacity="0.6" />
        <path d="M 31 62 C 31 50, 59 50, 59 62 Z" fill="url(#avatarHeadFront)" stroke="#ffffff" strokeWidth="1.5" />

        {/* Rising 3D Growth Arrow */}
        <path
          d="M 24 64 C 40 68, 62 64, 76 40 L 73 37 C 60 59, 40 62, 24 59 Z"
          fill="url(#arrowGrad)"
        />
        <polygon points="73,28 85,36 73,43 75,37 68,36" fill="#ea580c" stroke="#ffffff" strokeWidth="0.8" />
        <path d="M 24 59 C 40 62, 60 59, 73 37 L 75 37 L 85 36" stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.6" />
      </g>
    </svg>
  );
}

export default function AboutPage() {
  const whatWeDo = [
    {
      number: '01',
      title: 'Web Application Development',
      desc: 'We develop modern, responsive, and high-performance web applications that deliver seamless experiences.',
      href: '/services',
      highlighted: true,
      mobile3d: <WebApp3DIllustration />,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="26" height="20" rx="4" stroke="#ea580c" strokeWidth="2.2" />
          <line x1="3" y1="12" x2="29" y2="12" stroke="#ea580c" strokeWidth="1.8" />
          <circle cx="7" cy="9" r="1.2" fill="#ea580c" />
          <circle cx="11" cy="9" r="1.2" fill="#ea580c" />
          <circle cx="15" cy="9" r="1.2" fill="#ea580c" />
          <path d="M12.5 16L9.5 19L12.5 22" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.5 16L22.5 19L19.5 22" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="17" y1="15" x2="15" y2="23" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Mobile Application Development',
      desc: 'We build intuitive mobile applications for Android and iOS using modern cross-platform technologies.',
      href: '/services',
      highlighted: false,
      mobile3d: <MobileApp3DIllustration />,
      icon: (
        <svg viewBox="0 0 32 32" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="3" width="18" height="26" rx="4" stroke="#ea580c" strokeWidth="2.2" />
          <line x1="13" y1="6.5" x2="19" y2="6.5" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="24" r="1.5" fill="#ea580c" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Custom Software Development',
      desc: 'We transform business requirements into tailored software solutions designed to improve workflows and efficiency.',
      href: '/services',
      highlighted: false,
      mobile3d: <CustomSoftware3DIllustration />,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L4 10L16 16L28 10L16 4Z" stroke="#ea580c" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M4 16L16 22L28 16" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 22L16 28L28 22" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Backend & API Development',
      desc: 'We develop reliable backend systems, secure APIs, and database-driven applications that scale effectively.',
      href: '/services',
      highlighted: false,
      mobile3d: <BackendApi3DIllustration />,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19C6.2 19 4 16.8 4 14C4 11.5 5.8 9.4 8.2 9.1C9 5.5 12.2 3 16 3C20.4 3 24 6.6 24 11C26.2 11.2 28 13 28 15.3C28 17.8 26 19.8 23.5 19.9" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
          <text x="6" y="15.5" fill="#ea580c" fontSize="6.5" fontWeight="900" fontFamily="system-ui, sans-serif">API</text>
          <circle cx="23" cy="22" r="3.2" stroke="#ea580c" strokeWidth="2" />
          <path d="M23 16.8V18.8M23 25.2V27.2M17.8 22H19.8M26.2 22H28.2" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const techGroups = [
    {
      category: 'Frontend',
      categoryIcon: (
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 7L2.5 10L6 13M14 7L17.5 10L14 13M11.5 5L8.5 15" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      items: [
        {
          name: 'Next.js',
          icon: (
            <svg viewBox="0 0 180 180" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="next-mask-about" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
                <circle cx="90" cy="90" r="90" fill="black" />
              </mask>
              <g mask="url(#next-mask-about)">
                <circle cx="90" cy="90" r="90" fill="#111111" />
                <path d="M149.508 157.172L69.6406 54H54V125.969H66.2578V69.5625L139.992 164.555C143.344 162.32 146.523 159.844 149.508 157.172Z" fill="url(#paint0_linear_ab)" />
                <rect x="115.125" y="54" width="12.375" height="72" fill="url(#paint1_linear_ab)" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_ab" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_ab" x1="121.312" y1="54" x2="120.781" y2="104.531" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          ),
        },
        {
          name: 'React.js',
          icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00d8ff" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="2" fill="#00d8ff" />
            </svg>
          ),
        },
      ],
    },
    {
      category: 'Mobile Development',
      categoryIcon: (
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="10" height="16" rx="2.5" stroke="#ea580c" strokeWidth="2" fill="none" />
          <line x1="9" y1="15" x2="11" y2="15" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      items: [
        {
          name: 'React Native',
          icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00d8ff" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="2" fill="#00d8ff" />
            </svg>
          ),
        },
        {
          name: 'Flutter',
          icon: (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2 2.5L4 12.7L7.3 16L20.8 2.5H14.2Z" fill="#47C5FB" />
              <path d="M14.2 13.5L9.6 18.1L12.9 21.4H19.5L14.2 13.5Z" fill="#02569B" />
              <path d="M11 16.8L12.9 18.7L17.5 14.1L15.6 12.2L11 16.8Z" fill="#0175C2" />
            </svg>
          ),
        },
      ],
    },
    {
      category: 'Backend',
      categoryIcon: (
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="14" height="5" rx="1.5" stroke="#ea580c" strokeWidth="2" fill="none" />
          <rect x="3" y="11" width="14" height="5" rx="1.5" stroke="#ea580c" strokeWidth="2" fill="none" />
          <circle cx="6" cy="6.5" r="0.8" fill="#ea580c" />
          <circle cx="6" cy="13.5" r="0.8" fill="#ea580c" />
        </svg>
      ),
      items: [
        {
          name: 'Node.js',
          icon: (
            <svg viewBox="0 0 28 28" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2L25 8.35V21.05L14 27.4L3 21.05V8.35L14 2Z" fill="#539E43" />
              <text x="14" y="17.5" fill="#ffffff" fontSize="10.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle">JS</text>
            </svg>
          ),
        },
        {
          name: 'REST APIs',
          icon: (
            <svg viewBox="0 0 32 24" width="30" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 19H23C26 19 28 17 28 14C28 11.5 26 9.5 23.5 9.5C23 6 20 3.5 16.5 3.5C13.5 3.5 11 5.2 10 7.8C7.5 8.2 5.5 10.3 5.5 13C5.5 16.3 8 19 9 19Z" fill="#fff7ed" stroke="#f97316" strokeWidth="1.6" strokeLinejoin="round" />
              <text x="16.5" y="15" fill="#ea580c" fontSize="7.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle" letterSpacing="0.4">REST</text>
            </svg>
          ),
        },
      ],
    },
    {
      category: 'Database',
      categoryIcon: (
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="10" cy="5" rx="6" ry="2.2" stroke="#ea580c" strokeWidth="1.8" fill="none" />
          <path d="M4 5V15C4 16.2 6.7 17.2 10 17.2C13.3 17.2 16 16.2 16 15V5" stroke="#ea580c" strokeWidth="1.8" fill="none" />
          <path d="M4 10C4 11.2 6.7 12.2 10 12.2C13.3 12.2 16 11.2 16 10" stroke="#ea580c" strokeWidth="1.8" fill="none" />
        </svg>
      ),
      items: [
        {
          name: 'Amazon DynamoDB',
          icon: (
            <svg viewBox="0 0 28 28" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="14" cy="7" rx="8.5" ry="3.5" fill="#3B82F6" />
              <path d="M5.5 7V13C5.5 15 9.3 16.5 14 16.5C18.7 16.5 22.5 15 22.5 13V7" fill="#2563EB" />
              <ellipse cx="14" cy="13" rx="8.5" ry="3.5" fill="#3B82F6" />
              <path d="M5.5 13V19C5.5 21 9.3 22.5 14 22.5C18.7 22.5 22.5 21 22.5 19V13" fill="#1D4ED8" />
              <ellipse cx="14" cy="19" rx="8.5" ry="3.5" fill="#60A5FA" />
            </svg>
          ),
        },
      ],
    },
    {
      category: 'Cloud & DevOps',
      categoryIcon: (
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 15H14.5C16.5 15 18 13.5 18 11.5C18 9.7 16.7 8.2 15 8C14.6 5.7 12.5 4 10 4C7.8 4 6 5.4 5.3 7.3C3.5 7.6 2 9.2 2 11.2C2 13.3 3.6 15 5.5 15Z" stroke="#ea580c" strokeWidth="1.8" fill="none" />
          <path d="M10 12V8.5M10 8.5L8.5 10M10 8.5L11.5 10" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      items: [
        {
          name: 'Docker',
          icon: (
            <svg viewBox="0 0 32 26" width="30" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7" y="5" width="3" height="3" fill="#0ea5e9" rx="0.5" />
              <rect x="11" y="5" width="3" height="3" fill="#0ea5e9" rx="0.5" />
              <rect x="15" y="5" width="3" height="3" fill="#0ea5e9" rx="0.5" />
              <rect x="7" y="9" width="3" height="3" fill="#0ea5e9" rx="0.5" />
              <rect x="11" y="9" width="3" height="3" fill="#0ea5e9" rx="0.5" />
              <rect x="15" y="9" width="3" height="3" fill="#0ea5e9" rx="0.5" />
              <rect x="19" y="9" width="3" height="3" fill="#0ea5e9" rx="0.5" />
              <path d="M28.5 13C27.5 13 26.6 13.5 26 14.2C24.8 13.5 23.2 13 21 13H5C4 13 3 13.8 3 15C3 18.5 6 22 13 22C20.5 22 25.5 18 26.5 14.5C27 14.8 27.6 15 28.5 15C29.8 15 31 14 31 14C31 14 30 13 28.5 13Z" fill="#0ea5e9" />
              <circle cx="8" cy="16.5" r="0.8" fill="#ffffff" />
            </svg>
          ),
        },
        {
          name: 'CI/CD',
          icon: (
            <svg viewBox="0 0 32 24" width="30" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 6C7.5 6 5 8.7 5 12C5 15.3 7.5 18 11 18C14 18 15.5 15.5 16 14C16.5 15.5 18 18 21 18C24.5 18 27 15.3 27 12C27 8.7 24.5 6 21 6C18 6 16.5 8.5 16 10C15.5 8.5 14 6 11 6Z" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
        {
          name: 'Cloud Infrastructure',
          icon: (
            <svg viewBox="0 0 30 24" width="28" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 19H22C25 19 27.5 16.8 27.5 13.8C27.5 11.2 25.5 9.1 23 8.9C22.4 5.5 19.5 3 16 3C13 3 10.4 4.8 9.3 7.5C6.8 7.9 5 10 5 12.8C5 16.2 7.6 19 8 19Z" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" fill="none" />
              <path d="M16 15V9M16 9L13.5 11.5M16 9L18.5 11.5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
      ],
    },
  ];

  const valuesBehindName = [
    {
      number: '01',
      title: 'Trust Through Transparency',
      desc: 'We believe successful projects are built on honest communication, clear expectations, and collaborative decision-making.',
      highlighted: true,
      illustration: <ValShield3D />,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3L5 7V15C5 21.8 9.7 28.1 16 29.5C22.3 28.1 27 21.8 27 15V7L16 3Z" stroke="#ea580c" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 15.5L14.5 19L21.5 12" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      watermark: (
        <svg viewBox="0 0 48 48" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 26L8 20L18 10L24 16L30 10L40 20L34 26" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 22L24 28L30 22" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 28L18 34L24 28M36 28L30 34L24 28" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 37L24 40L27 37" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Quality Through Engineering',
      desc: 'We prioritize clean code, thoughtful architecture, testing, and maintainability to create software that businesses can depend on.',
      highlighted: false,
      illustration: <ValLaptop3D />,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 10L5 16L11 22" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 10L27 16L21 22" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="18.5" y1="8" x2="13.5" y2="24" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      ),
      watermark: (
        <svg viewBox="0 0 48 48" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 6L6 15L24 24L42 15L24 6Z" stroke="#ea580c" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M6 24L24 33L42 24" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 33L24 42L42 33" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Innovation With Purpose',
      desc: 'We choose technologies and approaches based on the problems they solve, not simply because they are new.',
      highlighted: false,
      illustration: <ValBulb3D />,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 3L6 17H16L15 29L26 15H16L17 3Z" stroke="#ea580c" fill="#ea580c" fillOpacity="0.15" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      watermark: (
        <svg viewBox="0 0 48 48" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 36H30M20 42H28" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M24 6C16.8 6 11 11.8 11 19C11 23.5 13.5 27.5 17 30V33H31V30C34.5 27.5 37 23.5 37 19C37 11.8 31.2 6 24 6Z" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 14V20M20 17H28" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Growth Through Collaboration',
      desc: 'We work closely with our clients to understand their goals, adapt to their needs, and build solutions that support their growth.',
      highlighted: false,
      illustration: <ValGrowth3D />,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="11" r="4.5" stroke="#ea580c" strokeWidth="2.2" />
          <path d="M8 26C8 21.6 11.6 18 16 18C20.4 18 24 21.6 24 26" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="7" cy="12" r="3" stroke="#ea580c" strokeWidth="1.8" />
          <path d="M2 24C2 21 4.5 18.5 7.5 18.5" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="25" cy="12" r="3" stroke="#ea580c" strokeWidth="1.8" />
          <path d="M30 24C30 21 27.5 18.5 24.5 18.5" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
      watermark: (
        <svg viewBox="0 0 48 48" width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="6" y1="42" x2="42" y2="42" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" />
          <rect x="10" y="28" width="6" height="14" rx="2" stroke="#ea580c" strokeWidth="2" />
          <rect x="21" y="20" width="6" height="22" rx="2" stroke="#ea580c" strokeWidth="2" />
          <rect x="32" y="12" width="6" height="30" rx="2" stroke="#ea580c" strokeWidth="2" />
          <path d="M12 22L23 13L32 17L40 7" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 7H40V13" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const whyChooseUs = [
    {
      number: '01',
      title: 'Business-Focused Solutions',
      desc: 'We begin by understanding your business challenges and develop solutions aligned with your objectives.',
      highlighted: true,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" stroke="#ea580c" strokeWidth="2.2" />
          <circle cx="16" cy="16" r="7.5" stroke="#ea580c" strokeWidth="2" />
          <circle cx="16" cy="16" r="3" fill="#ea580c" />
          <path d="M23 9L27 5" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Modern Engineering',
      desc: 'We use contemporary frameworks and proven development practices to create dependable digital products.',
      highlighted: false,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="7" width="18" height="18" rx="4" stroke="#ea580c" strokeWidth="2.2" />
          <rect x="12" y="12" width="8" height="8" rx="2" fill="#ea580c" fillOpacity="0.2" stroke="#ea580c" strokeWidth="1.8" />
          <path d="M12 2V6M20 2V6M12 26V30M20 26V30M2 12H6M2 20H6M26 12H30M26 20H30" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Built for the Future',
      desc: 'We design applications with maintainability, flexibility, and future enhancements in mind.',
      highlighted: false,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="19" width="4.5" height="9" rx="1.5" stroke="#ea580c" strokeWidth="2" />
          <rect x="13.5" y="13" width="4.5" height="15" rx="1.5" stroke="#ea580c" strokeWidth="2" />
          <rect x="22" y="7" width="4.5" height="21" rx="1.5" stroke="#ea580c" strokeWidth="2" />
          <path d="M7 13L15 6L25 9L29 4" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 4H29V9" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Transparent Collaboration',
      desc: 'We value open communication, clear project expectations, and meaningful client involvement throughout development.',
      highlighted: false,
      icon: (
        <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17L5 13L12 6L16 10L20 6L27 13L23 17" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 14L16 18L20 14" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 18L12 22L16 18M24 18L20 22L16 18" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 24L16 26L18 24" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="about-page-wrapper">
      {/* Background Soft Glows */}
      <div className="about-ambient-glow-1" aria-hidden="true" />
      <div className="about-ambient-glow-2" aria-hidden="true" />

      <div className="about-container">
        {/* ==================================================================
            1. HERO SECTION (MATCHING REFERENCE DESIGN WITH STATS & FEATURES)
            ================================================================== */}
        <AboutHeroSection />

        {/* ==================================================================
            2. OUR STORY & MISSION SECTION (SCROLL TARGET)
            ================================================================== */}
        <section id="our-story" className="about-story-section" style={{ scrollMarginTop: '100px' }}>
          <div className="about-story-banner">
            <div className="about-story-banner-inner">
              <div className="about-story-pill">
                <span className="about-story-dot" aria-hidden="true" />
                OUR ENGINEERING PHILOSOPHY
              </div>
              <h2 className="about-story-title">
                Building Software that Balances{' '}
                <span className="about-story-title-highlight">
                  Purpose, Quality &amp; Scale
                  <svg
                    className="about-story-title-curve"
                    viewBox="0 0 240 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M 4 10 C 65 18, 175 16, 236 6"
                      stroke="#ea580c"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <div className="about-story-paragraphs">
                <p>
                  We are a software engineering company focused on building modern web applications, mobile experiences, and scalable digital solutions that help businesses turn ideas into reality.
                </p>
                <p>
                  Our name reflects the values we believe in: transparency, reliability, and purposeful technology. From the first conversation to the final deployment, we focus on creating software that is practical, maintainable, and built with the future in mind.
                </p>
              </div>
            </div>

            {/* Premium 3D Engineering Platform Illustration (Matching Reference Design) */}
            <div className="about-story-illustration-wrap" aria-hidden="true">
              <div className="about-story-ambient-glow" />
              <svg
                className="about-story-orbit-arc"
                viewBox="0 0 280 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="140"
                  cy="120"
                  rx="115"
                  ry="65"
                  stroke="#ea580c"
                  strokeWidth="1.2"
                  strokeOpacity="0.32"
                />
                <circle cx="240" cy="95" r="4.5" fill="#ea580c" filter="drop-shadow(0 0 4px #ea580c)" />
              </svg>
              <div className="about-story-laptop-visual">
                <Image
                  src="/images/about-3d-showcase.png"
                  alt="ProvenanceTech Engineering Platform & Laptop"
                  width={340}
                  height={340}
                  className="about-story-laptop-img"
                />
              </div>
            </div>
          </div>

          <div className="about-mission-vision-grid">
            {/* Mission Card */}
            <div className="about-mv-card about-mv-card--mission">
              <div className="about-mv-content">
                <div className="about-mv-badge">
                  <Target size={12} color="#ea580c" strokeWidth={2.4} />
                  <span>PURPOSE &amp; COMMITMENT</span>
                </div>
                <h2 className="about-mv-title">Our Mission</h2>
                <p className="about-mv-desc">
                  To empower businesses with reliable, innovative, and scalable software solutions that simplify complex challenges, improve digital experiences, and create lasting value.
                </p>
              </div>

              {/* Target & Bullseye Illustration with Flowing Dunes Base */}
              <div className="about-mv-art about-mv-art--mission" aria-hidden="true">
                <div className="about-mv-art-glow" />
                <svg viewBox="0 0 180 150" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="targetGlow" cx="50%" cy="45%" r="50%">
                      <stop offset="0%" stopColor="#ea580c" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="duneGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#fdba74" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#fb923c" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="duneGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffedd5" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#fed7aa" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#fdba74" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>

                  {/* Ambient Glow */}
                  <ellipse cx="90" cy="72" rx="65" ry="50" fill="url(#targetGlow)" />

                  {/* 3D Concentric Bullseye Rings */}
                  <ellipse cx="90" cy="75" rx="52" ry="46" fill="#fff5ee" stroke="#fed7aa" strokeWidth="2.2" />
                  <ellipse cx="90" cy="75" rx="39" ry="34" fill="#ffedd5" stroke="#fdba74" strokeWidth="2.2" />
                  <ellipse cx="90" cy="75" rx="26" ry="23" fill="#fed7aa" stroke="#fb923c" strokeWidth="2.2" />
                  <ellipse cx="90" cy="75" rx="14" ry="12" fill="#ea580c" />
                  <circle cx="90" cy="75" r="4.5" fill="#ffffff" />

                  {/* 3D Arrow Striking the Bullseye */}
                  <g className="about-target-arrow">
                    <path d="M142 22 L93 72" stroke="#ea580c" strokeWidth="3.2" strokeLinecap="round" />
                    {/* Flights */}
                    <path d="M142 22 L128 26 M142 22 L136 36" stroke="#ea580c" strokeWidth="2.4" strokeLinecap="round" />
                    <polygon points="90,75 99,66 84,81" fill="#c2410c" />
                  </g>

                  {/* Flowing Dunes / Waves at Card Base */}
                  <path d="M-10 128 C30 114, 70 134, 120 118 C150 108, 175 120, 190 126 L190 150 L-10 150 Z" fill="url(#duneGrad1)" />
                  <path d="M-10 136 C35 126, 80 140, 130 128 C160 120, 180 132, 190 136 L190 150 L-10 150 Z" fill="url(#duneGrad2)" />
                </svg>
              </div>
            </div>

            {/* Vision Card */}
            <div className="about-mv-card about-mv-card--vision">
              <div className="about-mv-content">
                <div className="about-mv-badge">
                  <TrendingUp size={12} color="#ea580c" strokeWidth={2.4} />
                  <span>FUTURE DIRECTION</span>
                </div>
                <h2 className="about-mv-title">Our Vision</h2>
                <p className="about-mv-desc">
                  To build a future where technology is more accessible, businesses can innovate with confidence, and every digital product is created with purpose, quality, and trust.
                </p>
              </div>

              {/* Rising 3D Bar Chart & Trend Arrow with Flowing Dunes Base */}
              <div className="about-mv-art about-mv-art--vision" aria-hidden="true">
                <div className="about-mv-art-glow" />
                <svg viewBox="0 0 180 150" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="visionGlow" cx="50%" cy="45%" r="50%">
                      <stop offset="0%" stopColor="#ea580c" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="visBar1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffb076" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                    <linearGradient id="visBar2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                    <linearGradient id="visBar3" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#c2410c" />
                    </linearGradient>
                    <linearGradient id="visBar4" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#9a3412" />
                    </linearGradient>
                    <linearGradient id="visDuneGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#fdba74" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#fb923c" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="visDuneGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffedd5" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#fed7aa" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#fdba74" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>

                  {/* Ambient Glow */}
                  <ellipse cx="90" cy="72" rx="65" ry="50" fill="url(#visionGlow)" />

                  {/* 4 Rising 3D Bars */}
                  <rect className="about-chart-bar about-chart-bar-1" x="42" y="86" width="16" height="32" rx="3.5" fill="url(#visBar1)" />
                  <rect className="about-chart-bar about-chart-bar-2" x="65" y="68" width="16" height="50" rx="3.5" fill="url(#visBar2)" />
                  <rect className="about-chart-bar about-chart-bar-3" x="88" y="48" width="16" height="70" rx="3.5" fill="url(#visBar3)" />
                  <rect className="about-chart-bar about-chart-bar-4" x="111" y="26" width="16" height="92" rx="3.5" fill="url(#visBar4)" />

                  {/* Diagonal Curved Trend Arrow */}
                  <g className="about-chart-trend-group">
                    <path className="about-chart-trend-line" d="M38 94 Q85 68 126 22" stroke="#ea580c" strokeWidth="3.2" strokeLinecap="round" />
                    <polygon points="128,18 114,23 124,34" fill="#ea580c" />
                  </g>

                  {/* Flowing Dunes / Waves at Card Base */}
                  <path d="M-10 128 C30 114, 70 134, 120 118 C150 108, 175 120, 190 126 L190 150 L-10 150 Z" fill="url(#visDuneGrad1)" />
                  <path d="M-10 136 C35 126, 80 140, 130 128 C160 120, 180 132, 190 136 L190 150 L-10 150 Z" fill="url(#visDuneGrad2)" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            3. WHAT WE DO (CORE CAPABILITIES) - MATCHING REFERENCE DESIGN
            ================================================================== */}
        <section className="about-capabilities-section">
          {/* Subtle Ambient Silk Flow Waves in Background */}
          <div className="about-capabilities-silk-bg" aria-hidden="true">
            <svg className="about-cap-silk-left" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-60 220 C80 140, 200 200, 260 90 C300 30, 320 -10, 360 -40" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
              <path d="M-90 280 C50 190, 180 250, 280 130 C340 60, 380 20, 420 -10" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
            </svg>
            <svg className="about-cap-silk-right" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M560 160 C420 90, 300 150, 240 50 C200 -10, 180 -50, 140 -80" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
              <path d="M590 220 C450 150, 320 210, 220 90 C160 20, 120 -20, 80 -50" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          <div className="about-section-header">
            {/* Pill badge: CORE CAPABILITIES */}
            <div className="about-capabilities-badge">
              <Layers size={13} color="#ea580c" strokeWidth={2.4} />
              <span>CORE CAPABILITIES</span>
            </div>

            {/* Title: What in black, We Do in orange with curved underline & spark whiskers */}
            <h2 className="about-capabilities-title">
              <span className="about-cap-what">What</span>{' '}
              <span className="about-cap-wedo-wrap">
                <span className="about-cap-wedo">We Do</span>
                {/* 3 radiating whisker sparks at top-right of "Do" */}
                <svg className="about-cap-whiskers" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M8 26L2 30" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M18 16L18 8" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M26 22L34 16" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                </svg>
                {/* Curved orange underline swoosh */}
                <svg className="about-cap-swoosh" viewBox="0 0 160 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 6C45 16 115 16 158 6" stroke="#ea580c" strokeWidth="3.2" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="about-section-desc">
              We combine modern engineering practices with thoughtful design to create digital solutions tailored to your business needs.
            </p>
          </div>

          {/* 4 Premium 3D Service Cards */}
          <div className="about-what-grid">
            {whatWeDo.map((item, idx) => (
              <div
                key={idx}
                className={`about-what-card ${item.highlighted ? 'about-what-card--highlighted' : ''}`}
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                {/* Desktop Content (Rendered on desktop >= 769px) */}
                <div className="about-what-desktop-content">
                  {/* Top Row: Floating 3D Icon Tile & Numbered Badge */}
                  <div className="about-what-card-top">
                    <div className="about-what-icon-stage">
                      {/* Layered Orange Backdrop Plate */}
                      <div className="about-what-icon-backdrop" aria-hidden="true" />
                      {/* Elevated White Icon Tile */}
                      <div className="about-what-icon-front">
                        {item.icon}
                      </div>
                    </div>

                    {/* Numbered Badge (01 - 04) */}
                    <div className="about-what-num-badge">
                      {item.number}
                    </div>
                  </div>

                  {/* Card Body */}
                  <h3 className="about-what-card-title">{item.title}</h3>
                  <p className="about-what-card-desc">{item.desc}</p>

                  {/* Bottom Row: Explore More Button */}
                  <div className="about-what-card-bottom">
                    <Link
                      href={item.href}
                      className={`about-what-btn ${item.highlighted ? 'about-what-btn--primary' : 'about-what-btn--outline'}`}
                    >
                      <span>Explore More</span>
                      <span className="about-what-btn-arrow-wrap">
                        <ArrowRight size={15} strokeWidth={2.6} className="about-what-btn-arrow" />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Mobile View: Exact match to Reference Image */}
                <Link href={item.href} className="about-what-mobile-card">
                  {/* Left: 3D Squircle Icon Tile */}
                  <div className="about-what-mobile-icon-box">
                    {item.mobile3d}
                  </div>

                  {/* Center: Title & Description */}
                  <div className="about-what-mobile-info">
                    <h3 className="about-what-mobile-title">{item.title}</h3>
                    <p className="about-what-mobile-desc">{item.desc}</p>
                  </div>

                  {/* Right: Number Badge & Circular Arrow Button */}
                  <div className="about-what-mobile-right">
                    <span className="about-what-mobile-num">{item.number}</span>
                    <span className="about-what-mobile-arrow-btn" aria-hidden="true">
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </span>
                  </div>
                </Link>

                {/* Flowing Bottom-Right Orange Wave Accents (Desktop only) */}
                <div className="about-what-card-wave" aria-hidden="true">
                  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 120 C40 80, 90 90, 160 40 L160 120 Z"
                      fill="url(#cardWaveGrad1)"
                    />
                    <path
                      d="M30 120 C70 95, 110 105, 160 65 L160 120 Z"
                      fill="url(#cardWaveGrad2)"
                    />
                    <defs>
                      <linearGradient id="cardWaveGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f4974f" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.45" />
                      </linearGradient>
                      <linearGradient id="cardWaveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.55" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Ambient Dune Waves Matching Reference Image */}
          <div className="about-what-mobile-bottom-waves" aria-hidden="true">
            <svg viewBox="0 0 390 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 54 C60 28, 160 46, 390 14 L390 54 Z" fill="rgba(251, 146, 60, 0.16)" />
              <path d="M0 54 C100 36, 220 44, 390 28 L390 54 Z" fill="rgba(234, 88, 12, 0.22)" />
            </svg>
          </div>
        </section>

        {/* ==================================================================
            4. OUR TECHNOLOGY STACK
            ================================================================== */}
        {/* ==================================================================
            4. OUR TECHNOLOGY STACK - MATCHING MOBILE REFERENCE IMAGE
            ================================================================== */}
        <section className="about-tech-section" id="technology">
          {/* Ambient soft glow decoration */}
          <div className="about-tech-ambient-glow" aria-hidden="true" />

          {/* Section Header */}
          <div className="about-tech-header">
            <div className="about-tech-pill-badge">
              <Layers size={13} className="about-tech-badge-icon" strokeWidth={2.4} />
              <span>FLEXIBLE &amp; SCALABLE</span>
            </div>

            <h2 className="about-tech-title">
              Our Technology{' '}
              <span className="about-tech-title-highlight">
                Stack
                <svg className="about-tech-title-curve" viewBox="0 0 110 16" fill="none" preserveAspectRatio="none">
                  <path d="M 4 8 C 35 15, 75 13, 106 5" stroke="#ea580c" strokeWidth="3.4" strokeLinecap="round" />
                </svg>
                {/* Sparkle stars */}
                <svg className="about-tech-title-sparks" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#ea580c" />
                  <path d="M19 14L20 17.5L23.5 18.5L20 19.5L19 23L18 19.5L14.5 18.5L18 17.5L19 14Z" fill="#f97316" opacity="0.85" />
                </svg>
              </span>
            </h2>

            <p className="about-tech-desc">
              We use modern technologies and development tools to build flexible, maintainable, and scalable digital products.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="about-tech-groups-grid">
            {techGroups.map((group, idx) => (
              <div
                key={idx}
                className={`about-tech-group-card ${idx === 4 ? 'about-tech-group-card--wide' : ''}`}
              >
                <div className="about-tech-group-header">
                  <div className="about-tech-cat-icon-squircle">
                    {group.categoryIcon}
                  </div>
                  <h3 className="about-tech-group-title">{group.category}</h3>
                </div>

                <div className="about-tech-items-row">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="about-tech-item-single">
                      <div className="about-tech-icon-wrap">
                        {item.icon}
                      </div>
                      <span className="about-tech-item-name">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="about-tech-footer-note">
            Our technology choices depend on the project&apos;s requirements, performance needs, and long-term goals.
          </p>

          {/* Bottom Ambient Dune Waves Matching Reference Image */}
          <div className="about-tech-mobile-bottom-waves" aria-hidden="true">
            <svg viewBox="0 0 390 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 48 C80 24, 200 42, 390 12 L390 48 Z" fill="rgba(251, 146, 60, 0.16)" />
              <path d="M0 48 C120 30, 240 38, 390 22 L390 48 Z" fill="rgba(234, 88, 12, 0.2)" />
            </svg>
          </div>
        </section>

        {/* ==================================================================
            5. THE VALUES BEHIND OUR NAME (BRAND PRINCIPLES) - MATCHING REFERENCE
            ================================================================== */}
        <section className="about-values-section" id="values">
          {/* Ambient soft glow decoration */}
          <div className="about-values-ambient-glow" aria-hidden="true" />

          {/* Subtle Ambient Silk Flow Waves in Background */}
          <div className="about-values-silk-bg" aria-hidden="true">
            <svg className="about-val-silk-left" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-60 220 C80 140, 200 200, 260 90 C300 30, 320 -10, 360 -40" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
              <path d="M-90 280 C50 190, 180 250, 280 130 C340 60, 380 20, 420 -10" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
            </svg>
            <svg className="about-val-silk-right" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M560 160 C420 90, 300 150, 240 50 C200 -10, 180 -50, 140 -80" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
              <path d="M590 220 C450 150, 320 210, 220 90 C160 20, 120 -20, 80 -50" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          <div className="about-section-header">
            {/* Pill badge: BRAND PRINCIPLES */}
            <div className="about-values-badge">
              <Layers size={13} strokeWidth={2.4} className="about-values-badge-icon" aria-hidden="true" />
              <span>BRAND PRINCIPLES</span>
            </div>

            {/* Title: The Values Behind in black, Our Name in orange with curved underline & spark whiskers */}
            <h2 className="about-values-title">
              <span className="about-val-title-black">The Values Behind</span>{' '}
              <span className="about-val-title-orange-wrap">
                <span className="about-val-title-orange">Our Name</span>
                {/* 3 radiating whisker sparks at top-right of "Name" */}
                <svg className="about-val-whiskers" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M8 26L2 30" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M18 16L18 8" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M26 22L34 16" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                </svg>
                {/* Curved orange underline swoosh */}
                <svg className="about-val-swoosh" viewBox="0 0 180 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 6C50 17 130 17 178 6" stroke="#ea580c" strokeWidth="3.2" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="about-section-desc">
              At ProvenanceTech, our name represents more than technology. It reflects the principles that guide how we work and the relationships we build.
            </p>
          </div>

          {/* 4 Redesigned Value Cards Matching Reference Image */}
          <div className="about-values-grid">
            {valuesBehindName.map((val, idx) => (
              <div
                key={idx}
                className={`about-val-card-item ${val.highlighted ? 'about-val-card-item--highlighted' : ''}`}
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                {/* Desktop Overlapping Floating 3D Icon Tile at Top-Left */}
                <div className="about-val-icon-cluster">
                  <div className="about-val-icon-backplate" aria-hidden="true" />
                  <div className="about-val-icon-frontplate">
                    {val.icon}
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="about-val-card-inner">
                  {/* Mobile Left Orange Number Badge */}
                  <div className="about-val-mobile-badge-col">
                    <div className="about-val-mobile-num">{val.number}</div>
                    <div className="about-val-mobile-badge-glow" aria-hidden="true" />
                  </div>

                  {/* Desktop Top-Right Curved Orange Corner with Card Number */}
                  <div className="about-val-corner-cap" aria-hidden="true">
                    <svg viewBox="0 0 100 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0 C30 0, 55 12, 100 48 L100 0 Z" fill="#ea580c" />
                    </svg>
                    <span className="about-val-corner-num">{val.number}</span>
                  </div>

                  {/* Card Content */}
                  <div className="about-val-content">
                    <h3 className="about-val-heading">{val.title}</h3>
                    <p className="about-val-description">{val.desc}</p>
                  </div>

                  {/* Mobile Right 3D Illustration */}
                  <div className="about-val-mobile-illustration">
                    {val.illustration}
                  </div>

                  {/* Desktop Card Footer: Subtle Watermark (Left), Decorative Wave, & Circular Arrow Button (Right) */}
                  <div className="about-val-footer">
                    <div className="about-val-watermark" aria-hidden="true">
                      {val.watermark}
                    </div>

                    <div
                      className={`about-val-arrow-btn ${val.highlighted ? 'about-val-arrow-btn--primary' : 'about-val-arrow-btn--outline'}`}
                      role="img"
                      aria-label={`${val.title} principle`}
                    >
                      <ArrowRight size={17} strokeWidth={2.8} className="about-val-arrow-svg" />
                    </div>
                  </div>

                  {/* Flowing Bottom-Right Orange Wave Accent */}
                  <div className="about-val-bottom-wave" aria-hidden="true">
                    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 110 C45 75, 95 85, 160 35 L160 110 Z"
                        fill="url(#valWaveGrad1)"
                      />
                      <path
                        d="M35 110 C75 88, 115 96, 160 60 L160 110 Z"
                        fill="url(#valWaveGrad2)"
                      />
                      <defs>
                        <linearGradient id="valWaveGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f4974f" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.45" />
                        </linearGradient>
                        <linearGradient id="valWaveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.55" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Ambient Dune Waves Matching Reference Image */}
          <div className="about-values-mobile-bottom-waves" aria-hidden="true">
            <svg viewBox="0 0 390 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 48 C80 24, 200 42, 390 12 L390 48 Z" fill="rgba(251, 146, 60, 0.16)" />
              <path d="M0 48 C120 30, 240 38, 390 22 L390 48 Z" fill="rgba(234, 88, 12, 0.2)" />
            </svg>
          </div>
        </section>

        {/* ==================================================================
            6. WHY CHOOSE PROVENANCETECH? (CLIENT PARTNERSHIP) - MATCHING REFERENCE
            ================================================================== */}
        <section className="about-why-section" id="why-choose-us">
          {/* Subtle Ambient Silk Flow Waves in Background */}
          <div className="about-why-silk-bg" aria-hidden="true">
            <svg className="about-why-silk-left" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-60 220 C80 140, 200 200, 260 90 C300 30, 320 -10, 360 -40" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
              <path d="M-90 280 C50 190, 180 250, 280 130 C340 60, 380 20, 420 -10" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
            </svg>
            <svg className="about-why-silk-right" viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M560 160 C420 90, 300 150, 240 50 C200 -10, 180 -50, 140 -80" stroke="rgba(234, 88, 12, 0.16)" strokeWidth="2" fill="none" />
              <path d="M590 220 C450 150, 320 210, 220 90 C160 20, 120 -20, 80 -50" stroke="rgba(244, 151, 79, 0.12)" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          <div className="about-section-header">
            {/* Pill badge: CLIENT PARTNERSHIP with Handshake */}
            <div className="about-why-badge">
              <HeartHandshake size={15} strokeWidth={2.4} className="about-why-badge-icon" aria-hidden="true" />
              <span>CLIENT PARTNERSHIP</span>
            </div>

            {/* Title: Why Choose in black, ProvenanceTech? in orange with curved underline & spark whiskers */}
            <h2 className="about-why-title">
              <span className="about-why-title-black">Why Choose</span>{' '}
              <span className="about-why-title-orange-wrap">
                <span className="about-why-title-orange">ProvenanceTech?</span>
                {/* 3 radiating whisker sparks at top-right of "?" */}
                <svg className="about-why-whiskers" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M8 26L2 30" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M18 16L18 8" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M26 22L34 16" stroke="#ea580c" strokeWidth="2.8" strokeLinecap="round" />
                </svg>
                {/* Curved orange underline swoosh */}
                <svg className="about-why-swoosh" viewBox="0 0 210 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M2 6C55 17 150 17 208 6" stroke="#ea580c" strokeWidth="3.2" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="about-section-desc">
              Reliable engineering, business alignment, and client-first collaboration throughout the software lifecycle.
            </p>
          </div>

          {/* 4 Redesigned Why Choose Cards Matching Reference Image */}
          <div className="about-why-grid">
            {whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                className={`about-why-card-item ${reason.highlighted ? 'about-why-card-item--highlighted' : ''}`}
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                {/* Overlapping Floating 3D Icon Tile at Top-Left */}
                <div className="about-why-icon-cluster">
                  <div className="about-why-icon-backplate" aria-hidden="true" />
                  <div className="about-why-icon-frontplate">
                    {reason.icon}
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="about-why-card-inner">
                  {/* Top-Right Curved Orange Corner with Card Number */}
                  <div className="about-why-corner-cap" aria-hidden="true">
                    <svg viewBox="0 0 100 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0 C30 0, 55 12, 100 48 L100 0 Z" fill="#ea580c" />
                    </svg>
                    <span className="about-why-corner-num">{reason.number}</span>
                  </div>

                  {/* Card Content */}
                  <div className="about-why-content">
                    <h3 className="about-why-card-title">{reason.title}</h3>
                    {/* Short Orange Underline */}
                    <div className="about-why-title-line" aria-hidden="true" />
                    <p className="about-why-card-desc">{reason.desc}</p>
                  </div>

                  {/* Card Footer: Circular Arrow Element */}
                  <div className="about-why-footer">
                    <div
                      className={`about-why-arrow-btn ${reason.highlighted ? 'about-why-arrow-btn--primary' : 'about-why-arrow-btn--outline'}`}
                      role="img"
                      aria-label={`${reason.title} feature`}
                    >
                      <ArrowRight size={17} strokeWidth={2.8} className="about-why-arrow-svg" />
                    </div>
                  </div>

                  {/* Flowing Bottom-Right Orange Wave Accent */}
                  <div className="about-why-bottom-wave" aria-hidden="true">
                    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 110 C45 75, 95 85, 160 35 L160 110 Z"
                        fill="url(#whyWaveGrad1)"
                      />
                      <path
                        d="M35 110 C75 88, 115 96, 160 60 L160 110 Z"
                        fill="url(#whyWaveGrad2)"
                      />
                      <defs>
                        <linearGradient id="whyWaveGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f4974f" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.45" />
                        </linearGradient>
                        <linearGradient id="whyWaveGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.55" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            7. CALL TO ACTION BANNER (LET'S BUILD SOMETHING MEANINGFUL)
            ================================================================== */}
        <section className="about-cta-section" id="contact-cta">
          {/* Outer Ambient Flow Waves for seamless background blending */}
          <div className="about-cta-outer-silk" aria-hidden="true">
            <svg className="about-cta-outer-wave-left" viewBox="0 0 420 320" fill="none">
              <path
                d="M-80 260 C 60 210, 150 140, 220 50 C 260 -2, 330 -10, 420 40"
                stroke="url(#cta-outer-stroke-left)"
                strokeWidth="2.5"
                opacity="0.8"
              />
              <path
                d="M-100 290 C 40 250, 130 180, 200 100 C 250 40, 310 30, 400 80"
                fill="url(#cta-outer-fill-left)"
                opacity="0.45"
              />
              <defs>
                <linearGradient id="cta-outer-stroke-left" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="cta-outer-fill-left" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ffedd5" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <svg className="about-cta-outer-wave-right" viewBox="0 0 420 320" fill="none">
              <path
                d="M500 50 C 380 120, 290 190, 200 270 C 150 310, 80 320, -10 290"
                stroke="url(#cta-outer-stroke-right)"
                strokeWidth="2.5"
                opacity="0.8"
              />
              <path
                d="M520 20 C 400 90, 310 160, 220 240 C 170 280, 100 290, 10 260"
                fill="url(#cta-outer-fill-right)"
                opacity="0.45"
              />
              <defs>
                <linearGradient id="cta-outer-stroke-right" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="cta-outer-fill-right" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#ffedd5" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="about-cta-card">
            {/* Background Corner Wave Accents */}
            <div className="about-cta-card-bg-waves" aria-hidden="true">
              <svg className="about-cta-bg-wave-tl" viewBox="0 0 280 180" fill="none">
                <path d="M-20 60 C 60 40, 140 10, 220 -20" stroke="rgba(234, 88, 12, 0.18)" strokeWidth="2" />
                <path d="M-20 90 C 70 70, 160 30, 250 -10" stroke="rgba(234, 88, 12, 0.12)" strokeWidth="1.5" />
              </svg>
              <svg className="about-cta-bg-wave-br" viewBox="0 0 360 220" fill="none">
                <path d="M40 240 C 120 180, 220 160, 380 120" stroke="rgba(234, 88, 12, 0.22)" strokeWidth="2" />
                <path d="M80 250 C 160 200, 260 180, 400 150" stroke="rgba(234, 88, 12, 0.14)" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="about-cta-grid">
              {/* Left Column: Typography and Content */}
              <div className="about-cta-content-col">
                <div className="about-cta-dash" />
                
                <h2 className="about-cta-title">
                  Let&apos;s Build Something<br />
                  <span className="about-cta-title-meaningful">
                    Meaningful
                    <svg className="about-cta-swoosh" viewBox="0 0 190 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M4 14C55 5 135 5 186 14" stroke="#ea580c" strokeWidth="3.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h2>

                <div className="about-cta-subtitle">
                  Every great digital product begins with an idea and the right team to bring it to life.
                </div>

                <p className="about-cta-desc">
                  Whether you&apos;re launching a startup, modernizing an existing application, or exploring a new digital opportunity, ProvenanceTech is ready to help you take the next step.
                </p>

                <div className="about-cta-buttons-row">
                  <Link href="/contact" className="about-cta-btn-primary">
                    <span>Discuss Your Project</span>
                    <ArrowRight size={17} strokeWidth={2.4} className="about-cta-btn-arrow" />
                  </Link>
                  <Link href="/services" className="about-cta-btn-secondary">
                    <span className="about-cta-btn-play-icon">
                      <Play size={12} fill="#ea580c" stroke="#ea580c" />
                    </span>
                    <span>See How We Work</span>
                  </Link>
                </div>
              </div>

              {/* Right Visual Column: 3D Workstation & Technology Stage */}
              <div className="about-cta-visual-col">
                <div className="about-cta-visual-stage">
                  {/* Glowing platform underglow */}
                  <div className="about-cta-platform-glow" aria-hidden="true" />

                  {/* 3D Illustration matching reference design */}
                  <img
                    src="/images/about-cta-3d-raw.png"
                    alt="Let's Build Something Meaningful - 3D Technology Showcase"
                    className="about-cta-3d-illustration"
                  />

                  {/* Interactive Hotspot for the Floating 'Have an Idea?' Callout */}
                  <Link
                    href="/contact"
                    className="about-cta-callout-hotspot"
                    aria-label="Have an Idea? Let's turn it into reality"
                    title="Have an Idea? Let's turn it into reality"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
