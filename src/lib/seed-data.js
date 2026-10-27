/**
 * Curated software projects, services, team, and testimonials for Provenance
 * Web & Mobile Application Development Studio
 */

export const SEED_ASSETS = [
  {
    id: 'PRV-2026-APP01',
    title: 'ApexPay Global – Cross-Border Payments App',
    creator: 'Apex Financial Technologies',
    client: 'Apex Financial Technologies',
    creationYear: 2025,
    category: 'Mobile Apps',
    status: 'Live Production',
    platform: 'iOS & Android (React Native)',
    estimatedValue: 850000,
    techStack: 'React Native, Next.js, Node.js, Amazon DynamoDB, Stripe',
    problem: 'Cross-border wire transfers took 3-5 days with opaque fee structures and high customer drop-off on mobile.',
    solution: 'Engineered a biometric-authenticated mobile wallet with sub-second settlements, automated multi-currency ledger on DynamoDB, and push notifications.',
    medium: 'Cross-Platform Mobile Application & Cloud Backend',
    dimensions: 'iOS 16+, Android 13+, Web Dashboard',
    originLocation: 'San Francisco, CA & London, UK',
    currentCustodian: 'ApexPay Production Ops & Provenance Cloud SLA',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    certificateCode: 'CERT-APEXPAY-2026-A109',
    description: 'A high-throughput financial application processing cross-border micro-transactions with zero-downtime failover and bank-grade end-to-end encryption.',
    conditionReport: '99.995% SLA uptime in production. Average DynamoDB query latency: 4.2ms. Lighthouse web score: 99/100. 4.9/5 rating across App Store and Google Play.',
    provenanceEvents: [
      {
        id: 'evt_01',
        date: '2025-01-15',
        eventType: 'Discovery & System Architecture',
        custodian: 'Provenance Solutions Studio',
        location: 'San Francisco, CA',
        description: 'Mapped transaction pipelines, data schema on DynamoDB, and interactive wireframe prototypes.',
        verifiedBy: 'Lead Solutions Architect'
      },
      {
        id: 'evt_02',
        date: '2025-04-10',
        eventType: 'Core API & Mobile Sprint',
        custodian: 'Provenance Engineering Team',
        location: 'Remote Global',
        description: 'Built React Native client, microservices, and integrated Stripe/Plaid webhooks.',
        verifiedBy: 'Principal Mobile Engineer'
      },
      {
        id: 'evt_03',
        date: '2025-07-20',
        eventType: 'Security Audit & Automated QA',
        custodian: 'Independent Pen-Testing Lab',
        location: 'Austin, TX',
        description: 'Passed SOC 2 Type II compliance check and automated load tests up to 50k RPS.',
        verifiedBy: 'Head of Quality Assurance'
      },
      {
        id: 'evt_04',
        date: '2025-10-05',
        eventType: 'App Store & Cloud Release',
        custodian: 'Production Release Engineering',
        location: 'Global AWS',
        description: 'Published to Apple App Store & Google Play with blue-green deployment on AWS.',
        verifiedBy: 'DevOps Release Manager'
      }
    ],
    createdAt: '2025-01-10T10:00:00.000Z',
  },
  {
    id: 'PRV-2026-APP02',
    title: 'PulseHealth Telemedicine & EHR Provider Suite',
    creator: 'Pulse Health Systems',
    client: 'Pulse Health Systems',
    creationYear: 2025,
    category: 'Web Applications',
    status: 'Live Production',
    platform: 'Web (Next.js) & iOS iPad App',
    estimatedValue: 620000,
    techStack: 'Next.js 16, React 19, WebRTC, Amazon DynamoDB, Cloudinary, AWS S3',
    problem: 'Legacy clinical portals were slow, difficult to navigate on hospital tablets, and lacked secure real-time video consultation capabilities.',
    solution: 'Architected a HIPAA-compliant Next.js portal with HD video consultation rooms, real-time vital metrics tracking, and instant medical scan uploads via Cloudinary.',
    medium: 'Modern Web Application & Responsive Clinical Portal',
    dimensions: 'Responsive Web, iPad Pro, Desktop Workstations',
    originLocation: 'Boston, MA & Zurich, Switzerland',
    currentCustodian: 'Pulse Clinical Operations & Provenance Support',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    certificateCode: 'CERT-PULSE-2025-H882',
    description: 'Comprehensive telemedicine platform facilitating thousands of daily remote consultations with encrypted EHR synchronization.',
    conditionReport: 'HIPAA and GDPR certified. WebRTC latency < 120ms globally. Automated multi-AZ database replication in AWS us-east-1.',
    provenanceEvents: [
      {
        id: 'evt_05',
        date: '2025-02-10',
        eventType: 'Clinical Workflow Discovery',
        custodian: 'Provenance Healthcare Practice',
        location: 'Boston, MA',
        description: 'Interviewed 40+ medical specialists to draft user journeys and regulatory data boundaries.',
        verifiedBy: 'Lead Healthcare Product Designer'
      },
      {
        id: 'evt_06',
        date: '2025-05-18',
        eventType: 'Next.js App Router Architecture',
        custodian: 'Provenance Full-Stack Core',
        location: 'Remote Global',
        description: 'Engineered server-side rendered physician dashboards and WebRTC signaling gateways.',
        verifiedBy: 'Senior Full-Stack Engineer'
      },
      {
        id: 'evt_07',
        date: '2025-09-01',
        eventType: 'Production Rollout',
        custodian: 'Hospital Network Operations',
        location: 'Boston, MA',
        description: 'Deployed across 12 clinical branches serving 120,000+ registered patients.',
        verifiedBy: 'Chief Medical Information Officer'
      }
    ],
    createdAt: '2025-02-01T10:00:00.000Z',
  },
  {
    id: 'PRV-2026-APP03',
    title: 'OmniLogistics Fleet Tracking & Dispatch Engine',
    creator: 'Omni Freight Global',
    client: 'Omni Freight Global',
    creationYear: 2024,
    category: 'Custom Software',
    status: 'Live Production',
    platform: 'Web Dashboard & Android Driver App',
    estimatedValue: 1150000,
    techStack: 'Flutter, Node.js, Amazon DynamoDB, WebSockets, Mapbox',
    problem: 'Dispatchers suffered 15-minute telemetry delays and manual route adjustments, causing fuel waste and missed delivery windows.',
    solution: 'Developed an event-driven IoT tracking engine feeding real-time truck coordinates to a dispatcher dashboard with automated route optimization.',
    medium: 'Real-Time Enterprise Dispatch Engine & Mobile Driver Suite',
    dimensions: 'Multi-screen dispatch console & Android rugged devices',
    originLocation: 'Rotterdam, Netherlands & Chicago, IL',
    currentCustodian: 'Omni Global Operations Team',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    certificateCode: 'CERT-OMNI-2024-F771',
    description: 'Mission-critical fleet telemetry platform ingesting 100,000 sensor updates per minute with automated delivery ETA forecasting.',
    conditionReport: '100% telemetry message delivery via DynamoDB Streams and WebSocket broadcast. 22% reduction in fleet transit fuel costs.',
    provenanceEvents: [
      {
        id: 'evt_08',
        date: '2024-03-12',
        eventType: 'Architecture Inception',
        custodian: 'Provenance IoT & Cloud Practice',
        location: 'Chicago, IL',
        description: 'Drafted high-throughput ingestion pipelines and dynamic Mapbox rendering layer.',
        verifiedBy: 'Chief Technology Officer'
      },
      {
        id: 'evt_09',
        date: '2024-08-30',
        eventType: 'Field Telematics Testing',
        custodian: 'Omni Pilot Fleet',
        location: 'Rotterdam Corridor',
        description: 'Tested 250 heavy transport trucks in live European logistics corridors.',
        verifiedBy: 'Logistics Operations Lead'
      },
      {
        id: 'evt_10',
        date: '2024-12-15',
        eventType: 'Global Rollout',
        custodian: 'Global Freight Ops',
        location: 'Global',
        description: 'Expanded to 4,200 active trucks across North America and Europe.',
        verifiedBy: 'VP of Transportation'
      }
    ],
    createdAt: '2024-03-01T10:00:00.000Z',
  },
  {
    id: 'PRV-2026-APP04',
    title: 'Zenith Headless Commerce & B2B Portal',
    creator: 'Zenith Retail Network',
    client: 'Zenith Retail Network',
    creationYear: 2025,
    category: 'Web Applications',
    status: 'Live Production',
    platform: 'Modern Web (Responsive PWA)',
    estimatedValue: 480000,
    techStack: 'Next.js App Router, React 19, Amazon DynamoDB, Stripe, Algolia',
    problem: 'Legacy monolithic storefront experienced 6-second page loads and cart abandonment spikes during peak traffic.',
    solution: 'Replatformed to a headless Next.js architecture with instant catalog filtering, sub-50ms DynamoDB cart operations, and 99+ Core Web Vitals.',
    medium: 'Headless E-Commerce Web Application & Wholesale Portal',
    dimensions: 'Responsive Mobile, Tablet & Ultra-Wide Desktops',
    originLocation: 'New York, NY & Paris, France',
    currentCustodian: 'Zenith Digital Commerce Team',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    certificateCode: 'CERT-ZENITH-2025-M312',
    description: 'Blazing-fast modern commerce engine supporting 30,000 SKUs, localized checkout in 18 currencies, and automated B2B invoice generation.',
    conditionReport: '0.8s Largest Contentful Paint (LCP). 38% increase in mobile conversion rate post-launch. Zero downtime during Black Friday 2025.',
    provenanceEvents: [
      {
        id: 'evt_11',
        date: '2025-01-20',
        eventType: 'Headless Architecture Blueprint',
        custodian: 'Provenance Web Commerce Team',
        location: 'New York, NY',
        description: 'Designed server-side caching strategy and DynamoDB single-table schema for product inventory.',
        verifiedBy: 'Lead Full-Stack Architect'
      },
      {
        id: 'evt_12',
        date: '2025-06-14',
        eventType: 'Storefront Launch',
        custodian: 'Zenith Retail Tech',
        location: 'Paris, France',
        description: 'Successfully migrated 250,000 active customer accounts with zero data loss.',
        verifiedBy: 'Head of Digital Products'
      }
    ],
    createdAt: '2025-01-15T10:00:00.000Z',
  },
  {
    id: 'PRV-2026-APP05',
    title: 'AuraFit AI Companion & Wearable Sync',
    creator: 'Aura Wellness Labs',
    client: 'Aura Wellness Labs',
    creationYear: 2025,
    category: 'Mobile Apps',
    status: 'Live Production',
    platform: 'iOS & Android (Flutter)',
    estimatedValue: 390000,
    techStack: 'Flutter, TensorFlow Lite, Amazon DynamoDB, Cloudinary, Bluetooth LE',
    problem: 'Fitness enthusiasts needed real-time exercise form correction and workout tracking without expensive personal coaching sessions.',
    solution: 'Built an on-device computer vision mobile app tracking 33 skeletal points in real time with haptic coaching and seamless Bluetooth wearable sync.',
    medium: 'AI-Powered Cross-Platform Mobile Application',
    dimensions: 'iPhone, Apple Watch, Android Phones & Wear OS',
    originLocation: 'Austin, TX & Stockholm, Sweden',
    currentCustodian: 'Aura Wellness Product Ops',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    certificateCode: 'CERT-AURAFIT-2025-W104',
    description: 'Next-generation fitness app using on-device neural networks to provide millisecond-latency movement guidance without sending video data to external servers.',
    conditionReport: '4.8/5 on App Store with 180,000+ monthly active users. Sub-30ms pose estimation frame rate on modern smartphones.',
    provenanceEvents: [
      {
        id: 'evt_13',
        date: '2025-03-05',
        eventType: 'AI Model Optimization & Prototyping',
        custodian: 'Provenance Mobile AI Lab',
        location: 'Austin, TX',
        description: 'Quantized computer vision models to execute smoothly on mobile NPUs.',
        verifiedBy: 'Principal Mobile AI Engineer'
      },
      {
        id: 'evt_14',
        date: '2025-08-22',
        eventType: 'App Stores Worldwide Release',
        custodian: 'Aura Launch Squad',
        location: 'Global',
        description: 'Featured in Apple App Store "New Apps We Love" across 42 countries.',
        verifiedBy: 'App Store Relations Lead'
      }
    ],
    createdAt: '2025-02-15T10:00:00.000Z',
  },
  {
    id: 'PRV-2026-APP06',
    title: 'CloudScale Multi-Cloud Telemetry SaaS',
    creator: 'CloudScale Infrastructure',
    client: 'CloudScale Infrastructure',
    creationYear: 2024,
    category: 'Cloud Solutions',
    status: 'Live Production',
    platform: 'Web SaaS & Mobile Alerts App',
    estimatedValue: 740000,
    techStack: 'Next.js, Node.js, Amazon DynamoDB, Docker, AWS ECS, Prometheus',
    problem: 'Engineering teams lacked a unified, real-time dashboard to monitor distributed microservices across AWS, GCP, and hybrid cloud clusters.',
    solution: 'Constructed an ultra-fast monitoring dashboard visualizing distributed traces, alert thresholds, and automated container remediation.',
    medium: 'High-Throughput Observability SaaS Platform',
    dimensions: 'Responsive Web Console, Slack & Mobile Webhook Integration',
    originLocation: 'Seattle, WA & Berlin, Germany',
    currentCustodian: 'CloudScale Engineering Operations',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
    certificateCode: 'CERT-CLOUD-2024-C998',
    description: 'Cloud observability platform aggregating billions of metrics per day with sub-second alert dispatching and interactive topological dependency graphs.',
    conditionReport: '99.999% platform availability. Processes 2.4 billion daily metrics without database degradation via DynamoDB on-demand autoscaling.',
    provenanceEvents: [
      {
        id: 'evt_15',
        date: '2024-04-18',
        eventType: 'Distributed Engine Design',
        custodian: 'Provenance Cloud Architecture Team',
        location: 'Seattle, WA',
        description: 'Architected time-series metric aggregators and DynamoDB partition key hashing strategies.',
        verifiedBy: 'Chief Cloud Architect'
      },
      {
        id: 'evt_16',
        date: '2024-11-02',
        eventType: 'Enterprise General Availability',
        custodian: 'CloudScale SRE Team',
        location: 'Global AWS',
        description: 'Onboarded 85 enterprise engineering teams with multi-region replication.',
        verifiedBy: 'Director of Site Reliability'
      }
    ],
    createdAt: '2024-03-20T10:00:00.000Z',
  }
];

export const SEED_SERVICES = [
  {
    id: 'srv-web',
    title: 'Web Application Development',
    tagline: 'High-Performance Web Platforms & SaaS',
    description: 'Custom business websites, web portals, interactive analytics dashboards, customer portals, and enterprise SaaS platforms engineered with Next.js and React.',
    icon: 'Layout',
    deliverables: ['Custom Next.js / React Architecture', 'Server-Side Rendering & Turbopack Speed', 'REST & GraphQL API Integration', 'Enterprise Security & Compliance'],
  },
  {
    id: 'srv-mobile',
    title: 'Mobile Application Development',
    tagline: 'Native & Cross-Platform iOS & Android',
    description: 'Engaging, responsive mobile apps built with React Native and Flutter. From pixel-perfect mobile interfaces to offline sync and App Store launch management.',
    icon: 'Smartphone',
    deliverables: ['iOS & Android App Store Submissions', 'React Native & Flutter Cross-Platform', 'Offline Data Sync & SQLite/DynamoDB', 'Push Notifications & Biometrics'],
  },
  {
    id: 'srv-custom',
    title: 'Custom Software Development',
    tagline: 'Tailored Business & Enterprise Solutions',
    description: 'Bespoke software systems designed to solve unique organizational challenges, automate manual workflows, and streamline internal operations.',
    icon: 'Cpu',
    deliverables: ['Automated Workflow Engines', 'Legacy System Modernization', 'ERP & CRM Tailored Modules', 'Enterprise Data Pipelines'],
  },
  {
    id: 'srv-fullstack',
    title: 'Full-Stack Development',
    tagline: 'Complete Frontend, Backend & Database',
    description: 'End-to-end software delivery covering frontend interfaces, robust backend Route Handlers, microservices, and secure relational and NoSQL databases.',
    icon: 'Layers',
    deliverables: ['Next.js App Router Architecture', 'Enterprise API & Cloud Integrations', 'Amazon DynamoDB & Cloud Backends', 'Third-Party Webhook Integrations'],
  },
  {
    id: 'srv-uiux',
    title: 'UI/UX Design & Design Systems',
    tagline: 'User-Friendly Interfaces & Prototypes',
    description: 'Human-centered user experience design, wireframing, high-fidelity Figma prototypes, responsive design systems, and interaction micro-animations.',
    icon: 'Palette',
    deliverables: ['Interactive Clickable Prototypes', 'Responsive Layouts for Mobile & Web', 'Complete Design System Tokens', 'Usability Audits & User Testing'],
  },
  {
    id: 'srv-cloud',
    title: 'Database & Cloud Solutions',
    tagline: 'Amazon DynamoDB & Scalable Infrastructure',
    description: 'Cloud architecture design, high-availability database modeling on Amazon DynamoDB, automated backups, and low-latency global CDN distribution.',
    icon: 'Database',
    deliverables: ['Amazon DynamoDB Single-Table Design', 'Cloudinary Asset Optimization CDN', 'Sub-10ms Global Read/Write Latency', 'Automated Failover & Multi-AZ'],
  },
  {
    id: 'srv-maintenance',
    title: 'Maintenance & Support',
    tagline: 'Continuous Monitoring & Enhancements',
    description: 'Reliable ongoing technical support, proactive performance monitoring, security patches, framework upgrades, and feature enhancements.',
    icon: 'LifeBuoy',
    deliverables: ['24/7 SLA Uptime Monitoring', 'Bug Fixes & Security Patching', 'Performance Optimization Audits', 'Ongoing Feature Iteration'],
  },
  {
    id: 'srv-devops',
    title: 'Deployment & DevOps',
    tagline: 'Automated CI/CD & Cloud Infrastructure',
    description: 'Production release automation with Docker, automated CI/CD pipelines, container orchestration, zero-downtime deployments, and cloud monitoring.',
    icon: 'Terminal',
    deliverables: ['Docker Containerization', 'Automated GitHub Actions CI/CD', 'Zero-Downtime Blue/Green Release', 'CloudWatch & Prometheus Metrics'],
  }
];

export const SEED_TEAM = [
  {
    name: 'David Vance',
    role: 'Chief Technology Officer & Lead Architect',
    bio: '15+ years engineering high-scale distributed systems, Next.js applications, and cloud databases across Silicon Valley and European fintech hubs.',
    skills: ['System Architecture', 'Next.js', 'Amazon DynamoDB', 'Distributed Systems'],
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Mobile Engineering',
    bio: 'Specialist in high-performance cross-platform mobile apps on React Native and Flutter with over 40 apps published to App Store and Google Play.',
    skills: ['React Native', 'Flutter', 'iOS & Android Native', 'Mobile Security'],
  },
  {
    name: 'Marcus Sterling',
    role: 'Principal Full-Stack Engineer',
    bio: 'Full-stack software engineer focused on modern React, App Router Route Handlers, scalable REST APIs, and microservice integration.',
    skills: ['React 19', 'Node.js', 'API Design', 'DevOps & CI/CD'],
  },
  {
    name: 'Sophia Chen',
    role: 'Director of Product & UI/UX Design',
    bio: 'Award-winning product designer creating intuitive, accessible design systems that convert complex workflows into effortless digital experiences.',
    skills: ['UI/UX Design', 'Figma Design Systems', 'User Research', 'Design Tokens'],
  }
];

export const SEED_TESTIMONIALS = [
  {
    quote: 'Provenance delivered our fintech mobile application two weeks ahead of schedule. The sub-5ms transaction speed on Amazon DynamoDB gave us an incredible competitive edge.',
    author: 'Sarah Jenkins',
    title: 'Founder & CEO, ApexPay Global',
    location: 'San Francisco, CA',
  },
  {
    quote: 'Our hospital clinical staff loves the telemedicine portal. Moving from a sluggish legacy portal to a responsive Next.js application cut provider documentation time by 40%.',
    author: 'Dr. Arthur Pendelton',
    title: 'Chief Information Officer, Pulse Health',
    location: 'Boston, MA',
  },
  {
    quote: 'Handling real-time telemetry for 4,000+ trucks in transit was a monumental engineering challenge. Provenance built an IoT dispatch dashboard that never lags.',
    author: 'Markus Van Der Berg',
    title: 'VP of Transportation Logistics, Omni Freight',
    location: 'Rotterdam, Netherlands',
  }
];

export const SEED_FAQS = [
  {
    q: 'What types of applications does Provenance develop?',
    a: 'We develop custom web applications (analytics dashboards, enterprise portals, SaaS platforms, customer-facing web apps), mobile applications (iOS, Android, React Native, Flutter), and custom business software tailored to your specific operational workflows.'
  },
  {
    q: 'Do you build native or cross-platform mobile apps?',
    a: 'We build both! For most client projects, cross-platform frameworks like React Native or Flutter provide 95%+ shared codebase efficiency across iOS and Android with near-native 60fps performance. When native hardware acceleration or specialized SDKs are required, we build native Swift (iOS) and Kotlin (Android) modules.'
  },
  {
    q: 'Who owns the intellectual property (IP) and source code?',
    a: 'You own 100% of the source code, design assets, database schemas, and intellectual property. Upon project completion, all repositories and cloud configurations are fully transferred to your company.'
  },
  {
    q: 'Why do you use Amazon DynamoDB and Next.js?',
    a: 'Next.js provides the fastest server-side rendering, SEO performance, and unified API Route Handlers in a clean monorepo. Amazon DynamoDB delivers single-digit millisecond latency at any scale, automatic replication, zero server maintenance, and predictable on-demand pricing.'
  },
  {
    q: 'How does your 5-step development process work?',
    a: 'Our agile process runs through: 1) Discovery & Requirement Analysis, 2) Planning & UI/UX Wireframing, 3) Iterative Sprint Development & API Integration, 4) Automated Testing & Quality Assurance, and 5) Zero-Downtime Deployment & Ongoing Support.'
  },
  {
    q: 'Do you provide ongoing maintenance and post-launch support?',
    a: 'Yes. We offer continuous SLA monitoring, security patching, dependency upgrades, bug fixes, feature enhancements, and cloud infrastructure management to keep your digital products operating at peak performance.'
  }
];
