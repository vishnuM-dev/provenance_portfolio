/**
 * ProvenanceTech Technologies Data
 * Comprehensive data structure for genuine technology logos, categories, technical stacks and skills.
 */

export const TECHNOLOGY_CATEGORIES = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend Development',
    description: 'Modern, high-performance user interfaces and responsive web architectures.',
    badge: 'UI & Web',
    colorTheme: 'peach',
    technologies: [
      {
        name: 'Next.js',
        tag: 'Framework',
        status: 'Core Standard',
        role: 'Full-stack React framework with Server Components, App Router & Turbopack acceleration',
        icon: (
          <svg viewBox="0 0 180 180" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        tag: 'UI Library',
        status: 'Core Standard',
        role: 'Declarative component architecture, custom hooks & reactive state management',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00d8ff" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="2" fill="#00d8ff" />
          </svg>
        ),
      },
      {
        name: 'TypeScript',
        tag: 'Language',
        status: 'Enterprise Standard',
        role: 'Strict compile-time type safety, interface contracts & scalable codebases',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path d="M11.5 13.5H9.5V20H7.5V13.5H5.5V11.8H11.5V13.5ZM13.8 18.5C14.3 18.9 15.1 19.2 16 19.2C17.2 19.2 17.9 18.6 17.9 17.7C17.9 15.4 13.6 16.5 13.6 13.6C13.6 12.3 14.6 11.4 16.2 11.4C17.1 11.4 17.9 11.7 18.5 12.1L17.8 13.6C17.3 13.3 16.8 13.1 16.1 13.1C15.2 13.1 14.7 13.5 14.7 14.1C14.7 16.1 19 15.1 19 17.8C19 19.2 17.8 20.3 16 20.3C14.9 20.3 13.9 19.9 13.1 19.3L13.8 18.5Z" fill="white" />
          </svg>
        ),
      },
      {
        name: 'Tailwind CSS',
        tag: 'Styling',
        status: 'Production Standard',
        role: 'Utility-first styling system, responsive layout primitives & design token systems',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.18 12.15 18.4 12.15c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.726 6.332 15.212 4.8 12.001 4.8zm-6.4 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.69 2.726 5.912 2.726 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.177-1.194-2.691-2.726-5.912-2.726z" fill="#06B6D4" />
          </svg>
        ),
      },
      {
        name: 'JavaScript (ES6+)',
        tag: 'Language',
        status: 'Core Standard',
        role: 'Modern ECMAScript standard for asynchronous event logic, closures & DOM reactivity',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#F7DF1E" />
            <path d="M7 18.5V13.5H8.7V17.1C8.7 17.5 9 17.7 9.4 17.7C9.8 17.7 10 17.5 10 17V13.5H11.7V17.1C11.7 18.3 10.8 18.9 9.3 18.9C7.8 18.9 7 18.2 7 18.5ZM13.2 18.5L14.3 17.3C14.9 17.8 15.6 18.1 16.3 18.1C17 18.1 17.4 17.8 17.4 17.3C17.4 16.7 16.9 16.5 15.7 16.1C14.2 15.6 13.4 15 13.4 13.8C13.4 12.3 14.6 11.4 16.2 11.4C17.3 11.4 18.2 11.7 18.8 12.2L17.7 13.3C17.2 12.9 16.6 12.7 16.1 12.7C15.5 12.7 15.1 13 15.1 13.4C15.1 13.9 15.5 14.2 16.7 14.6C18.3 15.1 19.1 15.8 19.1 17C19.1 18.5 17.8 19.4 16.1 19.4C14.9 19.4 13.9 19 13.2 18.5Z" fill="#1a130e" />
          </svg>
        ),
      },
      {
        name: 'Redux & Zustand',
        tag: 'State Management',
        status: 'Production Standard',
        role: 'Predictable centralized global state stores, reactive selectors & cached updates',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#764ABC" />
            <circle cx="12" cy="12" r="3" fill="#ffffff" />
            <ellipse cx="12" cy="12" rx="7" ry="2.5" stroke="#ffffff" strokeWidth="1.2" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="7" ry="2.5" stroke="#ffffff" strokeWidth="1.2" transform="rotate(-30 12 12)" />
          </svg>
        ),
      },
      {
        name: 'HTML5 & Semantic Web',
        tag: 'Standard',
        status: 'Core Standard',
        role: 'Accessible DOM architecture, semantic hierarchy, SEO metadata & WCAG 2.1 compliance',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" fill="#E34F26" />
            <path d="M12 4.5V20L17.2 18.4L18.4 4.5H12Z" fill="#EF652A" />
            <path d="M12 8H8L8.3 11H12M8.5 13.5H12M12 17L9.5 16.3L9.3 14H7.8L8.2 18L12 19" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'Vite & Modern Tooling',
        tag: 'Build Tooling',
        status: 'Modern Standard',
        role: 'Instant hot module replacement (HMR), optimized Rollup bundling, PostCSS & asset optimization',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#646CFF" />
            <path d="M18 4L12 19L6 4L11 6L12 11L13 6L18 4Z" fill="#BD34FE" />
            <path d="M13 6L12 11L11 6L6 4L12 19L18 4L13 6Z" stroke="#ffffff" strokeWidth="1" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend Development',
    description: 'Scalable services, secure endpoints, and enterprise-grade business logic.',
    badge: 'API & Services',
    colorTheme: 'blue',
    technologies: [
      {
        name: 'Node.js',
        tag: 'Runtime',
        status: 'Core Standard',
        role: 'Event-driven, asynchronous V8 engine runtime for high-throughput microservices',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2Z" fill="#539E43" />
            <path d="M12 4.5L18.5 8.2V15.8L12 19.5L5.5 15.8V8.2L12 4.5Z" fill="#333333" />
            <path d="M12 6.5L16.5 9.1V14.3L12 16.9L7.5 14.3V9.1L12 6.5Z" fill="#68A063" />
          </svg>
        ),
      },
      {
        name: 'Express.js',
        tag: 'Framework',
        status: 'Production Standard',
        role: 'Fast, minimalist web framework for REST API routing, security middleware & controllers',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="5" fill="#f4efe6" stroke="#d4c7b8" strokeWidth="1" />
            <text x="12" y="16" fill="#1f1813" fontSize="11" fontWeight="800" fontFamily="system-ui, sans-serif" textAnchor="middle">ex</text>
          </svg>
        ),
      },
      {
        name: 'Python',
        tag: 'Language',
        status: 'Core Standard',
        role: 'Robust asynchronous scripting, data transformation pipelines, automation & backends',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9 2C8.7 2 8.9 3.4 8.9 3.4L8.9 4.9H12V5.4H5.4S2 5 2 9.5s3 4.3 3 4.3h1.8v-2.1s-.1-2.5 2.5-2.5h5.1s2.4 0 2.4-2.4V4.4S17.2 2 11.9 2zm-1.8 1.5c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" />
            <path d="M12.1 22c3.2 0 3-1.4 3-1.4v-1.5H12v-.5h6.6s3.4.4 3.4-4.1-3-4.3-3-4.3h-1.8v2.1s.1 2.5-2.5 2.5H9.6s-2.4 0-2.4 2.4v2.4s-.4 2.4 4.9 2.4zm1.8-1.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD43B" />
          </svg>
        ),
      },
      {
        name: 'FastAPI',
        tag: 'Modern Framework',
        status: 'High Performance',
        role: 'High-speed modern Python async API framework with automatic OpenAPI documentation & Pydantic typing',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#009688" />
            <path d="M12 2L4 13H11L10 22L20 9H13L14 2H12Z" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'Next.js Route Handlers',
        tag: 'Edge Serverless',
        status: 'Production Standard',
        role: 'Native web-standard Request/Response endpoints deployed to edge runtimes with zero cold-starts',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#000000" />
            <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: 'Spring Boot',
        tag: 'Enterprise Java',
        status: 'Enterprise Scale',
        role: 'Enterprise-grade Java framework for multi-tenant microservices, transactional safety & JVM stability',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#6DB33F" />
            <path d="M12 5C8.13 5 5 8.13 5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M12 9V15M9 12H15" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'GraphQL',
        tag: 'API Architecture',
        status: 'Modern Standard',
        role: 'Strongly-typed declarative API query language eliminating client data over-fetching',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#E10098" />
            <circle cx="12" cy="5" r="1.5" fill="#ffffff" />
            <circle cx="18" cy="8.5" r="1.5" fill="#ffffff" />
            <circle cx="18" cy="15.5" r="1.5" fill="#ffffff" />
            <circle cx="12" cy="19" r="1.5" fill="#ffffff" />
            <circle cx="6" cy="15.5" r="1.5" fill="#ffffff" />
            <circle cx="6" cy="8.5" r="1.5" fill="#ffffff" />
            <path d="M12 5L18 8.5V15.5L12 19L6 15.5V8.5L12 5Z" stroke="#ffffff" strokeWidth="1.2" />
          </svg>
        ),
      },
      {
        name: 'NestJS',
        tag: 'Enterprise Framework',
        status: 'Enterprise Standard',
        role: 'Opinionated TypeScript framework for enterprise-grade, dependency-injected microservice backends',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#E0234E" />
            <path d="M6 17C6 11.5 10.5 7 16 7C14 11 12 13 8 15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="15" r="2.5" fill="#ffffff" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'mobile',
    number: '03',
    title: 'Mobile Application Development',
    description: 'Cross-platform mobile apps for iOS and Android with unified native performance.',
    badge: 'iOS & Android',
    colorTheme: 'lavender',
    technologies: [
      {
        name: 'React Native',
        tag: 'Cross-Platform',
        status: 'Core Standard',
        role: 'Shared React component architecture with native bridge acceleration for iOS and Android',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        tag: 'Cross-Platform',
        status: 'Production Standard',
        role: 'High-speed Dart engine rendering 60/120fps responsive UIs with unified native rendering',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2 2.5L4 12.7L7.3 16L20.8 2.5H14.2Z" fill="#47C5FB" />
            <path d="M14.2 13.5L9.6 18.1L12.9 21.4H19.5L14.2 13.5Z" fill="#02569B" />
            <path d="M11 16.8L12.9 18.7L17.5 14.1L15.6 12.2L11 16.8Z" fill="#0175C2" />
          </svg>
        ),
      },
      {
        name: 'Swift & SwiftUI',
        tag: 'Native iOS',
        status: 'Apple Standard',
        role: 'Native Apple iOS application engineering with modern Swift concurrency and declarative SwiftUI',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#F05138" />
            <path d="M18.5 17.5C15 20 9.5 18 6 13C8.5 15.5 12 16 14.5 14.5C11.5 13.5 9 10.5 8 8C10.5 10 13 10.5 15 9.5C13 8 11.5 5.5 11 4C14 6.5 17.5 11 18.5 17.5Z" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'Kotlin & Jetpack',
        tag: 'Native Android',
        status: 'Google Standard',
        role: 'Modern native Android architecture with Jetpack Compose, Kotlin coroutines & lifecycle scopes',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#7F52FF" />
            <path d="M5 4H19L12 11.5L19 19H5V4Z" fill="url(#paint_kotlin)" />
            <defs>
              <linearGradient id="paint_kotlin" x1="5" y1="4" x2="19" y2="19" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7F52FF" />
                <stop offset="0.5" stopColor="#C711E1" />
                <stop offset="1" stopColor="#E4485D" />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        name: 'Expo',
        tag: 'Platform & Build',
        status: 'High Velocity',
        role: 'Universal React Native tooling platform, EAS cloud builds, OTA updates & push notification APIs',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#000020" />
            <path d="M6 18L12 6L18 18H15L12 12L9 18H6Z" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'Mobile SQLite & Cache',
        tag: 'Offline-First',
        status: 'Production Standard',
        role: 'Local relational client database, encrypted storage & background network sync queues',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#003B57" />
            <ellipse cx="12" cy="7" rx="6" ry="2.5" fill="#007ACC" />
            <path d="M6 7V17C6 18.38 8.69 19.5 12 19.5C15.31 19.5 18 18.38 18 17V7" stroke="#ffffff" strokeWidth="1.4" />
          </svg>
        ),
      },
      {
        name: 'Push & Cloud Messaging',
        tag: 'Mobile Services',
        status: 'Production Standard',
        role: 'Apple APNs, Firebase Cloud Messaging (FCM), background sync handlers & deep-link routing',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#FFCA28" />
            <path d="M12 4C9.2 4 7 6.2 7 9V14L5 16V17H19V16L17 14V9C17 6.2 14.8 4 12 4Z" fill="#1f1813" />
            <path d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18H10Z" fill="#1f1813" />
          </svg>
        ),
      },
      {
        name: 'Capacitor & Web-to-App',
        tag: 'Hybrid Bridge',
        status: 'Modern Standard',
        role: 'Cross-platform native bridge runtime transforming modern web applications into iOS & Android native packages',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#119EFF" />
            <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" stroke="#ffffff" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="3" fill="#ffffff" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'database',
    number: '04',
    title: 'Database & Data Management',
    description: 'Relational & NoSQL datastores engineered for performance, integrity and scale.',
    badge: 'Data & Storage',
    colorTheme: 'mint',
    technologies: [
      {
        name: 'MongoDB',
        tag: 'Document NoSQL',
        status: 'Core Standard',
        role: 'Document-oriented NoSQL database with flexible JSON schemas, aggregation pipelines & sharding',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.99 2C11.66 2.37 7 7.74 7 13.12C7 16.96 9.39 20.76 11.66 21.93C11.89 22.04 12.09 22.04 12.32 21.93C14.59 20.76 16.98 16.96 16.98 13.12C16.98 7.74 12.32 2.37 11.99 2Z" fill="#13AA52" />
            <path d="M11.99 2V21.93C12.09 21.98 12.2 21.97 12.32 21.93C14.59 20.76 16.98 16.96 16.98 13.12C16.98 7.74 12.32 2.37 11.99 2Z" fill="#0c7036" />
          </svg>
        ),
      },
      {
        name: 'PostgreSQL',
        tag: 'Relational SQL',
        status: 'Enterprise Standard',
        role: 'Advanced enterprise ACID object-relational SQL with complex JSON query indexing & triggers',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#336791" />
            <path d="M12 4C8 4 6 7 6 10C6 14 8 16 10 17V20H14V17C16 16 18 14 18 10C18 7 16 4 12 4Z" fill="#ffffff" />
            <circle cx="10" cy="9" r="1" fill="#336791" />
            <circle cx="14" cy="9" r="1" fill="#336791" />
          </svg>
        ),
      },
      {
        name: 'MySQL',
        tag: 'Relational SQL',
        status: 'Production Standard',
        role: 'Battle-tested open-source ACID relational database with transactional integrity and indexing',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#00758F" />
            <path d="M6 16C8 12 11 11 15 10C18 9 19 7 19 7C19 7 18 10 15 12C12 14 10 15 6 16Z" fill="#F29111" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'Amazon DynamoDB',
        tag: 'Managed Serverless',
        status: 'Enterprise Scale',
        role: 'Ultra-low latency managed NoSQL key-value & document datastore with single-digit millisecond SLA',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#2E27AD" />
            <ellipse cx="12" cy="6" rx="7" ry="2.5" fill="#4D45E5" />
            <path d="M5 6V18C5 19.38 8.13 20.5 12 20.5C15.87 20.5 19 19.38 19 18V6" stroke="#ffffff" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="7" ry="2.5" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="2 2" />
          </svg>
        ),
      },
      {
        name: 'Redis',
        tag: 'In-Memory Cache',
        status: 'High Performance',
        role: 'Sub-millisecond in-memory key-value caching, JWT session management & pub/sub streaming',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#DC382D" />
            <path d="M5 8L12 4.5L19 8L12 11.5L5 8Z" fill="#ffffff" opacity="0.9" />
            <path d="M5 11.5L12 15L19 11.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5 15L12 18.5L19 15" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'Prisma ORM',
        tag: 'Type-Safe ORM',
        status: 'Core Standard',
        role: 'Next-generation TypeScript ORM, schema modeling, auto-generated migrations & type safety',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#0C344B" />
            <path d="M6 19L11 4L18 14L12 20L6 19Z" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M11 4L12 20" stroke="#16A394" strokeWidth="1.4" />
          </svg>
        ),
      },
      {
        name: 'Firebase Firestore',
        tag: 'Real-Time NoSQL',
        status: 'Production Standard',
        role: 'Real-time document cloud database, snapshot listeners, security rules & offline persistence',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#FFA611" />
            <path d="M6 16L9 5L12 11L14 8L18 16H6Z" fill="#ffffff" />
            <path d="M12 11L14 8L18 16H12V11Z" fill="#F57C00" />
          </svg>
        ),
      },
      {
        name: 'Supabase & Vector DB',
        tag: 'Cloud PostgreSQL',
        status: 'Modern Standard',
        role: 'Managed PostgreSQL with Row Level Security, instant GraphQL/REST APIs & pgvector AI embeddings',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#3ECF8E" />
            <path d="M13 3L6 14H12L11 21L18 10H12L13 3Z" fill="#1c1c1c" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'cloud-devops',
    number: '05',
    title: 'Cloud & DevOps',
    description: 'Automated CI/CD pipelines, containerization, and resilient cloud architectures.',
    badge: 'Infrastructure',
    colorTheme: 'amber',
    technologies: [
      {
        name: 'AWS',
        tag: 'Cloud Platform',
        status: 'Enterprise Standard',
        role: 'Amazon Web Services compute (EC2, Lambda), S3 object storage, VPC, IAM & CloudFront CDN',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#232F3E" />
            <path d="M7 14.5C10 16.5 14 16.5 17 14" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M16 13L17.5 14.2L16.2 15.5" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <text x="5" y="11" fill="#ffffff" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">AWS</text>
          </svg>
        ),
      },
      {
        name: 'Docker',
        tag: 'Containerization',
        status: 'Core Standard',
        role: 'Lightweight container virtualization ensuring reproducible environments across dev and production',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        tag: 'CI/CD Automation',
        status: 'Core Standard',
        role: 'Automated continuous integration pipelines, automated unit test suites, build checks & zero-downtime deploy',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#2088FF" />
            <circle cx="8" cy="12" r="2.5" fill="#ffffff" />
            <circle cx="16" cy="8" r="2.5" fill="#ffffff" />
            <circle cx="16" cy="16" r="2.5" fill="#ffffff" />
            <path d="M10.5 11L13.5 9M10.5 13L13.5 15" stroke="#ffffff" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        name: 'Kubernetes',
        tag: 'Orchestration',
        status: 'Enterprise Scale',
        role: 'Automated container cluster deployment, scaling, health-check self-healing & ingress load balancing',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#326CE5" />
            <circle cx="12" cy="12" r="5" stroke="#ffffff" strokeWidth="1.5" fill="none" />
            <path d="M12 7V17M7 12H17" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: 'Nginx',
        tag: 'Web Server & Proxy',
        status: 'High Performance',
        role: 'High-concurrency reverse proxy, HTTP/2 load balancing, rate limiting & automated SSL termination',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#009639" />
            <path d="M6 5V19L18 5V19" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: 'Terraform',
        tag: 'IaC Infrastructure',
        status: 'Enterprise Standard',
        role: 'Declarative Infrastructure as Code (IaC) for automated, version-controlled cloud environment provisioning',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#623CE4" />
            <path d="M6 5H10V10H6V5ZM11 10H15V15H11V10ZM16 5H20V10H16V5ZM6 11H10V16H6V11ZM11 16H15V21H11V16Z" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'Linux & Shell',
        tag: 'Systems',
        status: 'Core Standard',
        role: 'Enterprise Ubuntu/Debian server administration, cron automations, security firewalls & bash scripting',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#1f2937" />
            <path d="M6 8L10 12L6 16M12 16H18" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: 'Vercel & Edge Network',
        tag: 'Edge Platform',
        status: 'High Velocity',
        role: 'Zero-config edge deployment, global smart CDN routing, preview environments & serverless compute',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#000000" />
            <path d="M12 6L18 17H6L12 6Z" fill="#ffffff" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 'media-integrations',
    number: '06',
    title: 'Media & Integrations',
    description: 'Optimized media asset pipelines and secure third-party SaaS service connectors.',
    badge: 'Media & APIs',
    colorTheme: 'cyan',
    technologies: [
      {
        name: 'Cloudinary',
        tag: 'Media CDN',
        status: 'Core Standard',
        role: 'Automated cloud image/video optimization, format transforms (WebP/AVIF) & edge CDN delivery',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#3448C5" />
            <path d="M7.5 15.5C5.8 15.5 4.5 14.2 4.5 12.5C4.5 11 5.6 9.8 7 9.6C7.5 7.5 9.5 6 11.8 6C14.5 6 16.7 8 16.9 10.6C18.1 11.1 19 12.2 19 13.5C19 15.2 17.7 16.5 16 16.5H7.5" fill="#ffffff" />
            <circle cx="11.5" cy="11.5" r="1.5" fill="#3448C5" />
          </svg>
        ),
      },
      {
        name: 'Stripe',
        tag: 'Payments',
        status: 'Enterprise Standard',
        role: 'PCI-compliant checkout, multi-currency recurring subscriptions, invoice billing & webhook processing',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#635BFF" />
            <path d="M12.5 9.5C11.5 9.1 10.7 8.8 10.7 8.2C10.7 7.7 11.2 7.3 12 7.3C12.9 7.3 14 7.7 14.8 8.1L15.5 6.4C14.6 6 13.4 5.7 12 5.7C9.8 5.7 8.5 6.9 8.5 8.6C8.5 11 11.7 11.3 11.7 12.5C11.7 13.1 11.1 13.5 10.2 13.5C9.1 13.5 7.8 13 6.9 12.4L6.1 14.2C7.1 14.8 8.6 15.2 10.1 15.2C12.5 15.2 13.9 14 13.9 12.2C13.9 9.8 12.5 9.5 12.5 9.5Z" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'WebSockets',
        tag: 'Real-Time',
        status: 'High Performance',
        role: 'Bi-directional low-latency event broadcasting, instant messaging, notification feeds & real-time telemetry',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#059669" />
            <path d="M8 8L5 12L8 16M16 8L19 12L16 16" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="1.8" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'OpenAI & AI SDK',
        tag: 'AI & Intelligence',
        status: 'Modern Standard',
        role: 'LLM integration, generative AI embeddings, function calling, intelligent agents & streaming completions',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#10A37F" />
            <circle cx="12" cy="12" r="5" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="2" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'OAuth 2.0 & Auth0',
        tag: 'Security & SSO',
        status: 'Enterprise Standard',
        role: 'Enterprise single sign-on (SSO), social authentication, JWT validation & Role-Based Access Control (RBAC)',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#EB5424" />
            <path d="M12 4L5 7V12C5 16 8 19.5 12 20C16 19.5 19 16 19 12V7L12 4Z" stroke="#ffffff" strokeWidth="1.5" fill="none" />
            <circle cx="12" cy="11" r="2" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'Twilio & SendGrid',
        tag: 'Communications',
        status: 'Production Standard',
        role: 'Transactional email delivery, SMS authentication, WhatsApp Business notification APIs & webhooks',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#F22F46" />
            <circle cx="9" cy="9" r="2" fill="#ffffff" />
            <circle cx="15" cy="9" r="2" fill="#ffffff" />
            <circle cx="9" cy="15" r="2" fill="#ffffff" />
            <circle cx="15" cy="15" r="2" fill="#ffffff" />
          </svg>
        ),
      },
      {
        name: 'Third-Party APIs',
        tag: 'Integrations',
        status: 'Enterprise Standard',
        role: 'Enterprise SaaS connectors, CRM synchronizations, logistics tracking & custom webhook architectures',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#faf6f0" stroke="#dfd5c8" strokeWidth="1" />
            <path d="M7 10L10 7M10 7L13 10M10 7V13" stroke="#ea580c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 14L14 17M14 17L11 14M14 17V11" stroke="#2d231b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="17" r="1.5" fill="#ea580c" />
            <circle cx="14" cy="7" r="1.5" fill="#2d231b" />
          </svg>
        ),
      },
      {
        name: 'Postman & API Specs',
        tag: 'API Tooling',
        status: 'Core Standard',
        role: 'Automated contract testing, OpenAPI/Swagger specifications, mocking servers & API monitoring',
        icon: (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#FF6C37" />
            <circle cx="12" cy="12" r="6" stroke="#ffffff" strokeWidth="1.5" />
            <path d="M10 12L14 12M12 10L14 12L12 14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
];
