/**
 * ProvenanceTech Technologies Data
 * Maintainable data structure for genuine technology logos, categories, and technical stacks.
 */

export const TECHNOLOGY_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern, high-performance user interfaces and responsive web architectures.',
    badge: 'UI & Web',
    technologies: [
      {
        name: 'Next.js',
        role: 'Full-stack React framework with Server Components & Turbopack',
        icon: (
          <svg viewBox="0 0 180 180" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
              <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#next-mask)">
              <circle cx="90" cy="90" r="90" fill="#111111" />
              <path d="M149.508 157.172L69.6406 54H54V125.969H66.2578V69.5625L139.992 164.555C143.344 162.32 146.523 159.844 149.508 157.172Z" fill="url(#paint0_linear)" />
              <rect x="115.125" y="54" width="12.375" height="72" fill="url(#paint1_linear)" />
            </g>
            <defs>
              <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="121.312" y1="54" x2="120.781" y2="104.531" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        name: 'React',
        role: 'Declarative component architecture & modern reactive state',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00d8ff" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="2" fill="#00d8ff" />
          </svg>
        ),
      },
      {
        name: 'TypeScript',
        role: 'Strict compile-time type safety & enterprise maintainability',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path d="M11.5 13.5H9.5V20H7.5V13.5H5.5V11.8H11.5V13.5ZM13.8 18.5C14.3 18.9 15.1 19.2 16 19.2C17.2 19.2 17.9 18.6 17.9 17.7C17.9 15.4 13.6 16.5 13.6 13.6C13.6 12.3 14.6 11.4 16.2 11.4C17.1 11.4 17.9 11.7 18.5 12.1L17.8 13.6C17.3 13.3 16.8 13.1 16.1 13.1C15.2 13.1 14.7 13.5 14.7 14.1C14.7 16.1 19 15.1 19 17.8C19 19.2 17.8 20.3 16 20.3C14.9 20.3 13.9 19.9 13.1 19.3L13.8 18.5Z" fill="white" />
          </svg>
        ),
      },
      {
        name: 'Tailwind CSS',
        role: 'Utility-first styling system and bespoke design token layouts',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.18 12.15 18.4 12.15c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.726 6.332 15.212 4.8 12.001 4.8zm-6.4 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.69 2.726 5.912 2.726 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.177-1.194-2.691-2.726-5.912-2.726z" fill="#06B6D4" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Scalable services, secure endpoints, and enterprise-grade business logic.',
    badge: 'API & Services',
    technologies: [
      {
        name: 'Node.js',
        role: 'Event-driven, asynchronous runtime for high-throughput APIs',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" fill="#539E43" />
            <path d="M12 4.5L18.5 8.2V15.8L12 19.5L5.5 15.8V8.2L12 4.5Z" fill="#333333" />
            <path d="M12 6.5L16.5 9.1V14.3L12 16.9L7.5 14.3V9.1L12 6.5Z" fill="#68A063" />
          </svg>
        ),
      },
      {
        name: 'Next.js Route Handlers',
        role: 'Native serverless Web API routing & secure middleware processing',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#1c150f" />
            <path d="M7 16L12 8L17 16M12 12H16" stroke="#eb7821" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: 'Java',
        role: 'Robust, battle-tested object-oriented enterprise foundations',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 18.5C8.5 18.5 10 19 12 19C14 19 15.5 18.5 15.5 18.5M7 15.5C7 15.5 9.5 16.5 12 16.5C14.5 16.5 17 15.5 17 15.5" stroke="#E76F00" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M10 3C10 4.5 9 6 9 7.5C9 9 10.5 9.5 11 11C11.5 9.5 13 9 13 7.5C13 6 12 4.5 12 3" stroke="#5382A1" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M14 6C14 7 13.5 8 13.5 9C13.5 10 14.5 10.5 15 11.5" stroke="#E76F00" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'Spring Boot',
        role: 'Production-ready microservices, dependency injection & security',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 7.2V17.5L12 22.7L21 17.5V7.2L12 2Z" fill="#6DB33F" />
            <path d="M11.8 7.5C8.8 8.8 7.8 12.2 9.5 15.2C10.5 16.8 12.2 17.5 14 17.2C13 16.5 12.5 15.2 12.8 13.8C13.2 12 14.8 10.8 16.2 11.2C15.8 9.5 14 8.2 11.8 7.5Z" fill="white" />
          </svg>
        ),
      },
      {
        name: 'REST APIs',
        role: 'Standardized HTTP JSON contracts, pagination, and status handling',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="5" width="20" height="14" rx="3" stroke="#eb7821" strokeWidth="1.8" />
            <circle cx="6" cy="12" r="1.5" fill="#eb7821" />
            <path d="M10 12H18M10 9H15M10 15H16" stroke="#2d231b" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Application Development',
    description: 'Cross-platform mobile apps for iOS and Android with unified native performance.',
    badge: 'iOS & Android',
    technologies: [
      {
        name: 'React Native',
        role: 'Shared component architecture with native bridge acceleration',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="2" width="14" height="20" rx="3" stroke="#61DAFB" strokeWidth="1.8" />
            <circle cx="12" cy="18" r="1" fill="#61DAFB" />
            <ellipse cx="12" cy="10" rx="4" ry="1.6" stroke="#61DAFB" strokeWidth="1.2" />
            <ellipse cx="12" cy="10" rx="4" ry="1.6" transform="rotate(60 12 10)" stroke="#61DAFB" strokeWidth="1.2" />
            <ellipse cx="12" cy="10" rx="4" ry="1.6" transform="rotate(120 12 10)" stroke="#61DAFB" strokeWidth="1.2" />
          </svg>
        ),
      },
      {
        name: 'Flutter',
        role: 'High-speed Dart engine rendering 60/120fps responsive UIs',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2 2.5L4 12.7L7.3 16L20.8 2.5H14.2Z" fill="#47C5FB" />
            <path d="M14.2 13.5L9.6 18.1L12.9 21.4H19.5L14.2 13.5Z" fill="#02569B" />
            <path d="M11 16.8L12.9 18.7L17.5 14.1L15.6 12.2L11 16.8Z" fill="#0175C2" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'database',
    title: 'Database & Data Management',
    description: 'Relational & NoSQL cloud datastores engineered for sub-10ms queries and integrity.',
    badge: 'Data & Storage',
    technologies: [
      {
        name: 'Amazon DynamoDB',
        role: 'Key-value & document NoSQL database with single-digit millisecond latency',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#2E27AD" />
            <ellipse cx="12" cy="6" rx="7" ry="2.5" fill="#4D45E5" />
            <path d="M5 6V18C5 19.38 8.13 20.5 12 20.5C15.87 20.5 19 19.38 19 18V6" stroke="#ffffff" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="7" ry="2.5" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="2 2" />
          </svg>
        ),
      },
      {
        name: 'MySQL',
        role: 'Proven open-source ACID relational database management system',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#00758F" />
            <path d="M6 16C8 12 11 11 15 10C18 9 19 7 19 7C19 7 18 10 15 12C12 14 10 15 6 16Z" fill="#F29111" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'PostgreSQL',
        role: 'Advanced enterprise object-relational SQL with complex JSON query indexing',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#336791" />
            <path d="M12 4C8 4 6 7 6 10C6 14 8 16 10 17V20H14V17C16 16 18 14 18 10C18 7 16 4 12 4Z" fill="#ffffff" />
            <circle cx="10" cy="9" r="1" fill="#336791" />
            <circle cx="14" cy="9" r="1" fill="#336791" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Automated CI/CD pipelines, containerization, and resilient cloud architectures.',
    badge: 'Infrastructure',
    technologies: [
      {
        name: 'AWS',
        role: 'Amazon Web Services cloud computing, serverless compute, and S3 storage',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#232F3E" />
            <path d="M7 14.5C10 16.5 14 16.5 17 14" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M16 13L17.5 14.2L16.2 15.5" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <text x="5" y="11" fill="#ffffff" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">AWS</text>
          </svg>
        ),
      },
      {
        name: 'Docker',
        role: 'Lightweight containerization ensuring reproducible local & production environments',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#2496ED" />
            <rect x="5" y="8" width="3" height="3" fill="#ffffff" rx="0.5" />
            <rect x="9" y="8" width="3" height="3" fill="#ffffff" rx="0.5" />
            <rect x="13" y="8" width="3" height="3" fill="#ffffff" rx="0.5" />
            <rect x="9" y="5" width="3" height="3" fill="#ffffff" rx="0.5" />
            <path d="M4 12C5 12 7 13 9 13C12 13 14 11 17 12C18 12.5 19 13 20 14C19 16 16 18 12 18C8 18 5 16 4 14V12Z" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'GitHub Actions',
        role: 'Automated CI/CD workflows, automated testing triggers & build checks',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#2088FF" />
            <circle cx="8" cy="12" r="2.5" fill="#ffffff" />
            <circle cx="16" cy="8" r="2.5" fill="#ffffff" />
            <circle cx="16" cy="16" r="2.5" fill="#ffffff" />
            <path d="M10.5 11L13.5 9M10.5 13L13.5 15" stroke="#ffffff" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        name: 'CI/CD',
        role: 'Continuous integration and continuous deployment delivery automation',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 16A5 5 0 0 1 7 6C9.5 6 11 8 12 9.5C13 8 14.5 6 17 6A5 5 0 0 1 17 16C14.5 16 13 14 12 12.5C11 14 9.5 16 7 16Z" stroke="#eb7821" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12.5" r="1.5" fill="#eb7821" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'media-integrations',
    title: 'Media & Integrations',
    description: 'Optimized media asset pipelines and secure third-party SaaS service connectors.',
    badge: 'Media & APIs',
    technologies: [
      {
        name: 'Cloudinary',
        role: 'Automated image and video optimization, responsive transforms & global CDN',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#3448C5" />
            <path d="M7.5 15.5C5.8 15.5 4.5 14.2 4.5 12.5C4.5 11 5.6 9.8 7 9.6C7.5 7.5 9.5 6 11.8 6C14.5 6 16.7 8 16.9 10.6C18.1 11.1 19 12.2 19 13.5C19 15.2 17.7 16.5 16 16.5H7.5" fill="#ffffff" />
            <circle cx="11.5" cy="11.5" r="1.5" fill="#3448C5" />
          </svg>
        ),
      },
      {
        name: 'Third-Party API Integrations',
        role: 'Payment gateways (Stripe, PayPal), CRM, webhooks & external service integrations',
        icon: (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#faf6f0" stroke="#dfd5c8" strokeWidth="1" />
            <path d="M7 10L10 7M10 7L13 10M10 7V13" stroke="#eb7821" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 14L14 17M14 17L11 14M14 17V11" stroke="#2d231b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="17" r="1.5" fill="#eb7821" />
            <circle cx="14" cy="7" r="1.5" fill="#2d231b" />
          </svg>
        ),
      },
    ],
  },
];
