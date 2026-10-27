# PROVENANCE | Web & Mobile Application Development Studio

> An enterprise full-stack Web Application for showcasing digital engineering capabilities, verified project releases, case studies, technologies, and consultation inquiries.

---

## 🏛️ Technology Stack

- **Frontend**: Next.js 16 (App Router), React 19, JavaScript (JSX), Vanilla CSS with tailored aesthetics and responsive typography.
- **Backend**: Next.js Route Handlers (`/api/*`).
- **Database**: Amazon DynamoDB (`@aws-sdk/client-dynamodb` & `@aws-sdk/lib-dynamodb`) with seamless zero-config local fallback for development and automated testing.
- **Image Storage**: Cloudinary Media Vault integration (`cloudinary`) with fallback data-URL handler.
- **Icons**: Lucide React.
- **Testing & Verification**: ESLint, Node test runner (`node --test`), and Next.js production build verification.
- **Monorepo Architecture**: Frontend and backend unified within a single Next.js project.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env.local` file:
```env
# Amazon DynamoDB (Optional for local development; if omitted, persistent local mock store is used)
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
DYNAMODB_TABLE_NAME=ProvenanceAssets

# Cloudinary (Optional for local development; if omitted, local data-URL fallback is used)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Verification

### Run Automated Tests
```bash
npm test
```
Executes automated unit and integration tests covering:
- DynamoDB operations: query filters, item lookup, token resolution, and full asset CRUD lifecycle.
- Chain-of-custody event appending and identifier generators.
- Project inquiry ingestion and persistence.

### Run Code Linter
```bash
npm run lint
```

### Verify Production Bundle
```bash
npm run build
```

---

## 📂 Project Architecture

```
provenance/
├── src/
│   ├── app/
│   │   ├── layout.js                 # Global layout with theme, navbar, footer
│   │   ├── page.js                   # Homepage (Hero, statistics, engineering services)
│   │   ├── catalog/
│   │   │   ├── page.jsx              # Searchable & filterable project catalog
│   │   │   └── [id]/
│   │   │       └── page.jsx          # Public asset dossier & provenance timeline
│   │   ├── portfolio/
│   │   │   └── page.jsx              # Master portfolio showcase
│   │   ├── services/
│   │   │   └── page.jsx              # Core services & development capabilities
│   │   ├── technologies/
│   │   │   └── page.jsx              # Technology stack & architectural standards
│   │   ├── about/
│   │   │   └── page.jsx              # Engineering team & philosophy
│   │   ├── contact/
│   │   │   └── page.jsx              # Project consultation & inquiry form
│   │   ├── verify/
│   │   │   └── page.jsx              # Release & verification portal
│   │   └── api/
│   │       ├── assets/
│   │       │   ├── route.js          # GET catalog / POST asset
│   │       │   └── [id]/
│   │       │       ├── route.js      # GET, PUT, DELETE asset
│   │       │       └── events/
│   │       │           └── route.js  # POST provenance milestone event
│   │       ├── contact/
│   │       │   └── route.js          # Project inquiry handler
│   │       └── verify/[code]/
│   │           └── route.js          # Public certificate token verification
│   ├── components/
│   │   ├── Navbar.jsx                # Responsive navigation bar
│   │   ├── Footer.jsx                # Engineering standards & links
│   │   ├── AssetCard.jsx             # Project card with hover animations
│   │   ├── ProvenanceTimeline.jsx    # Chronological release milestone visualization
│   │   └── CertificateBadge.jsx      # Cryptographic release certificate with print option
│   ├── lib/
│   │   ├── dynamodb.js               # AWS DynamoDB Document Client + local fallback
│   │   ├── cloudinary.js             # Cloudinary SDK client with fallback handler
│   │   ├── seed-data.js              # Curated project collection
│   │   └── utils.js                  # Formatting, date utilities, certificate generators
│   └── globals.css                   # Custom theme & design tokens
├── tests/
│   ├── dynamodb.test.js              # DynamoDB asset CRUD & event append tests
│   ├── contact.test.js               # Inquiry creation & validation tests
│   └── utils.test.js                 # Formatting and ID generation tests
├── .env.example                      # Template environment variables
├── .env.local                        # Active local environment variables
├── package.json
└── next.config.mjs
```

---

## 🛡️ Key Features

1. **Dual-Mode Amazon DynamoDB Adapter**: Ready for direct AWS production use via environment keys, with persistent local mock fallback allowing instant testing without active AWS billing.
2. **Cloudinary Media Storage**: Supports high-resolution imagery with responsive image transformations and secure CDN delivery.
3. **Release Verification**: Fast token lookup (`/verify`) confirms authentic laboratory forensics, build parameters, and custodian records.
4. **Interactive Milestone Timeline**: Chronological chain-of-custody records tracking deployments, security audits, and condition reports.
5. **Client Inquiry Pipeline**: Validated project intake route feeding consultation inquiries directly to the database.
