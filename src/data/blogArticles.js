/**
 * ProvenanceTech Engineering Blog Articles Data
 * Real, maintainable editorial articles for the ProvenanceTech insights platform.
 */

export const BLOG_CATEGORIES = [
  { id: 'All', label: 'All', iconName: 'grid' },
  { id: 'Development', label: 'Development', iconName: 'code' },
  { id: 'Technology', label: 'Technology', iconName: 'cloud' },
  { id: 'Design', label: 'Design', iconName: 'palette' },
  { id: 'Business', label: 'Business', iconName: 'briefcase' },
  { id: 'Career', label: 'Career', iconName: 'user' },
];

export const BLOG_ARTICLES = [
  {
    id: 'best-practices-modern-web-development',
    title: 'Best Practices for Modern Web Development',
    subtitle: 'Key practices, tools, and strategies to build faster, cleaner, and more scalable web applications.',
    summary: 'Explore key practices, tools, and strategies to build faster, cleaner, and more scalable web applications with Next.js, React 19, and TypeScript.',
    category: 'Development',
    badgeText: 'DEVELOPMENT',
    date: 'Oct 26, 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    tags: ['React', 'TypeScript', 'Clean Code', 'Web Dev'],
    author: {
      name: 'ProvenanceTech Engineering',
      role: 'Frontend Engineering Lead',
    },
    content: [
      {
        heading: 'Strict Typings and Contract-Driven APIs',
        body: 'TypeScript strict mode and shared domain models between backend handlers and frontend UI components eliminate runtime type mismatches and accelerate development velocity.'
      },
      {
        heading: 'Component Modularity and Design Systems',
        body: 'Decoupling reusable primitives from business logic ensures interfaces remain cohesive across large applications while preserving pixel-perfect branding and accessible keyboard navigation.'
      }
    ]
  },
  {
    id: 'role-of-cloud-modern-applications',
    title: 'The Role of Cloud in Modern Applications',
    subtitle: 'Discover how cloud technologies are powering modern applications and helping businesses scale faster.',
    summary: 'Discover how cloud technologies are powering modern applications, eliminating infrastructure overhead, and helping ambitious businesses scale faster.',
    category: 'Technology',
    badgeText: 'FEATURED ARTICLE',
    date: 'Oct 18, 2024',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    tags: ['Cloud', 'AWS', 'Serverless', 'Infrastructure'],
    author: {
      name: 'ProvenanceTech Engineering',
      role: 'Cloud Infrastructure Lead',
    },
    content: [
      {
        heading: 'Serverless Compute and Auto-Scaling',
        body: 'Modern cloud services replace monolithic provisioning with elastic, on-demand compute. Rather than maintaining idle virtual machines, serverless architectures scale instantaneously from zero to tens of thousands of requests.'
      },
      {
        heading: 'Security and Data Protection',
        body: 'Cloud security is no longer an afterthought. With automated IAM policies, zero-trust network boundaries, and automatic data encryption at rest and in transit, cloud-native products provide enterprise-grade protection from day one.'
      }
    ]
  },
  {
    id: 'ui-ux-trends-digital-products-2025',
    title: 'UI/UX Trends Shaping Digital Products in 2025',
    subtitle: 'Explore the latest design trends and how they create better user experiences and drive engagement.',
    summary: 'Explore the latest design trends and how they create better user experiences, drive customer engagement, and build lasting product trust.',
    category: 'Design',
    badgeText: 'DESIGN',
    date: 'Oct 12, 2024',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    tags: ['UI/UX', 'Design Systems', 'Figma', 'Micro-interactions'],
    author: {
      name: 'ProvenanceTech Design Studio',
      role: 'Lead Product Designer',
    },
    content: [
      {
        heading: 'Restraint and Purposeful Minimalism',
        body: 'Users are fatigued by bloated interfaces and flashy clutter. In 2025, premium digital experiences stand out through clarity, generous breathing room, and typography-first visual hierarchy.'
      },
      {
        heading: 'Micro-Interactions that Delight',
        body: 'Subtle button state elevations, smooth page transitions, and responsive hover physics communicate quality and reassure users that the system is responsive and reliable.'
      }
    ]
  },
  {
    id: 'choose-right-technology-partner',
    title: 'How to Choose the Right Technology Partner',
    subtitle: 'Key factors to consider when selecting a software development partner for your business.',
    summary: 'Key factors to consider when selecting a custom software development company to engineer mission-critical digital products.',
    category: 'Business',
    badgeText: 'BUSINESS',
    date: 'Oct 5, 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    tags: ['Strategy', 'Partnership', 'Consulting', 'ROI'],
    author: {
      name: 'ProvenanceTech Leadership',
      role: 'Managing Director',
    },
    content: [
      {
        heading: 'Beyond Code: Engineering Business Value',
        body: 'A great technology partner does not merely execute tickets; they evaluate the business viability, cost-to-scale, and technical trade-offs of every decision.'
      },
      {
        heading: 'Transparency and Open Collaboration',
        body: 'Regular sprint demos, accessible repository code, and honest communication regarding milestones create genuine partnerships that endure long past initial launch.'
      }
    ]
  },
  {
    id: 'scalable-web-applications',
    title: 'Building Scalable Web Applications for Real Business Needs',
    subtitle: 'Insights, architecture decisions, and lessons from our engineering team.',
    summary: 'A deep dive into how we architect, deploy, and scale high-performance web applications using modern full-stack practices, edge caching, and resilient datastores.',
    category: 'Development',
    badgeText: 'FEATURED ARTICLE',
    date: 'Oct 28, 2024',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['Next.js', 'Architecture', 'Performance', 'Full-Stack'],
    author: {
      name: 'ProvenanceTech Engineering',
      role: 'Solutions Architecture Team',
    },
    content: [
      {
        heading: 'The Foundation of Business-Driven Software',
        body: 'Building software for real business needs requires looking beyond framework hype. In enterprise client work, technical choices must directly reflect business reliability, operational throughput, and predictable maintenance costs. Our engineering team approaches every project by understanding customer traffic patterns, data sovereignty requirements, and peak transaction volumes before choosing an architecture.'
      },
      {
        heading: 'Next.js App Router and Edge Caching',
        body: 'By leveraging Next.js Server Components and selective edge rendering, we minimize client-side JavaScript payloads by up to 60%. Critical user flows render server-side in sub-50 milliseconds, with dynamic data streamed via Suspense boundaries to eliminate layout shifts.'
      },
      {
        heading: 'Resilient Cloud Datastores',
        body: 'Coupled with Amazon DynamoDB single-table indexing and distributed caching tiers, applications withstand sudden traffic surges with consistent sub-10ms query latencies and zero cold-start bottlenecks.'
      }
    ]
  },
  {
    id: 'architecting-dynamodb-ultra-low-latency',
    title: 'Architecting DynamoDB for Ultra-Low Latency & High Throughput',
    subtitle: 'Single-table design patterns, partition key strategies, and global secondary index optimization.',
    summary: 'Single-table design patterns, partition key strategies, and global secondary index optimization in mission-critical applications.',
    category: 'Technology',
    badgeText: 'FEATURED ARTICLE',
    date: 'Sep 28, 2024',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    tags: ['DynamoDB', 'AWS', 'Database', 'Cloud'],
    author: {
      name: 'ProvenanceTech Engineering',
      role: 'Database Architecture Lead',
    },
    content: [
      {
        heading: 'The Power of Single-Table Design',
        body: 'Traditional relational schemas require costly cross-table joins that degrade under heavy load. DynamoDB single-table design collapses related entities into pre-computed key patterns for predictable single-digit millisecond reads.'
      }
    ]
  },
  {
    id: 'practical-devops-delivery',
    title: 'Practical DevOps for Faster, Safer Software Delivery',
    subtitle: 'A real-world look at automated testing, CI/CD pipelines, and monitoring to deliver software with confidence.',
    summary: 'A real-world look at how we use automated testing, CI/CD pipelines, and telemetry monitoring to deliver enterprise software with complete confidence.',
    category: 'Development',
    badgeText: 'DEVELOPMENT',
    date: 'Sep 20, 2024',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    tags: ['DevOps', 'CI/CD', 'GitHub Actions', 'Monitoring'],
    author: {
      name: 'ProvenanceTech Engineering',
      role: 'DevOps & Reliability Engineer',
    },
    content: [
      {
        heading: 'Automated Confidence Pipelines',
        body: 'Every pull request passes through automated linting, unit verification, and end-to-end integration tests before merging, ensuring regression-free deployment cycles.'
      }
    ]
  },
  {
    id: 'engineering-culture-provenancetech',
    title: 'The Software Engineering Culture at ProvenanceTech',
    subtitle: 'How our distributed engineering team fosters continuous learning, mentorship, and ownership.',
    summary: 'How our engineering team fosters continuous learning, mentorship, clean code standards, and long-term product stewardship.',
    category: 'Career',
    badgeText: 'CAREER',
    date: 'Sep 14, 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    tags: ['Culture', 'Engineering', 'Mentorship', 'Career'],
    author: {
      name: 'ProvenanceTech Engineering',
      role: 'Engineering Operations',
    },
    content: [
      {
        heading: 'Ownership Over Execution',
        body: 'We encourage every engineer to understand why a feature matters to end users and clients, creating pride of craftsmanship and superior software quality.'
      }
    ]
  }
];

export function getFeaturedArticles() {
  return BLOG_ARTICLES.filter((a) => a.featured);
}

export function getArticleById(id) {
  return BLOG_ARTICLES.find((a) => a.id === id);
}
