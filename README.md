# PREVENANCE | Art & Asset Provenance Platform

> An enterprise full-stack Web Application for tracking, managing, and verifying the provenance, authenticity, and chain-of-custody of high-value assets (fine art, rare antiquities, horological masterpieces, high jewelry, and rare manuscripts).

---

## 🏛️ Technology Stack

- **Frontend**: Next.js 16 (App Router), React 19, JavaScript (JSX), Vanilla CSS with luxury dark aesthetics and glassmorphism.
- **Backend**: Next.js Route Handlers (`/api/*`), HTTP-only cookie authentication with Edge-ready JWT (`jose`) and `bcryptjs`.
- **Database**: Amazon DynamoDB (`@aws-sdk/client-dynamodb` & `@aws-sdk/lib-dynamodb`) with seamless zero-config local fallback for development and automated testing.
- **Image Storage**: Cloudinary Media Vault integration (`cloudinary`) with client drag-and-drop preview and fallback data-URL handler.
- **Icons**: Lucide React.
- **Testing & Verification**: ESLint, Node test runner (`node --test`), and Next.js production build verification.
- **Monorepo Architecture**: Frontend and backend unified within a single Next.js project. No separate Express.js or Spring Boot backend required.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env.local` file (already preconfigured with defaults in the repository):
```env
ADMIN_EMAIL=admin@prevenance.io
ADMIN_PASSWORD=AdminSecure2026!
JWT_SECRET=prevenance-super-secret-cryptographic-jwt-key-2026-prod

# Amazon DynamoDB (Optional for local development; if omitted, persistent local mock store is used)
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
DYNAMODB_TABLE_NAME=PrevenanceAssets

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

## 🔐 Default Admin Credentials

- **Portal URL**: `/admin/login`
- **Email**: `admin@prevenance.io`
- **Password**: `AdminSecure2026!`
*(A "Fill Demo Credentials" one-click button is available on the login screen for instant evaluation).*

---

## 🧪 Testing & Verification

### Run Automated Tests
```bash
npm test
```
Executes 10 automated unit and integration tests covering:
- Password hashing & verification with `bcryptjs`.
- JWT session cryptographic signing & decoding with `jose`.
- DynamoDB operations: query filters, item lookup, token resolution, and full asset CRUD lifecycle.
- Chain-of-custody event appending and identifier generators.

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
prevenance/
├── src/
│   ├── app/
│   │   ├── layout.js                 # Global layout with luxury dark theme, navbar, footer
│   │   ├── page.js                   # Homepage (Hero with token search, showcase, stats)
│   │   ├── catalog/
│   │   │   ├── page.jsx              # Searchable & filterable asset catalog
│   │   │   └── [id]/
│   │   │       └── page.jsx          # Public asset dossier, specs & provenance timeline
│   │   ├── verify/
│   │   │   └── page.jsx              # Cryptographic certificate verification portal
│   │   ├── admin/
│   │   │   ├── login/page.jsx        # Admin authentication with secure cookie session
│   │   │   ├── dashboard/page.jsx    # Control center: metrics, inventory table, deletion
│   │   │   └── assets/
│   │   │       ├── new/page.jsx      # Asset creation with Cloudinary image upload
│   │   │       └── [id]/page.jsx     # Edit asset & append provenance timeline events
│   │   └── api/
│   │       ├── auth/
│   │       │   ├── login/route.js    # Issues HTTP-only session cookie
│   │       │   ├── logout/route.js   # Clears session cookie
│   │       │   └── me/route.js       # Validates current curator session
│   │       ├── assets/
│   │       │   ├── route.js          # GET catalog / POST asset (admin protected)
│   │       │   └── [id]/
│   │       │       ├── route.js      # GET, PUT, DELETE asset
│   │       │       └── events/
│   │       │           └── route.js  # POST provenance event (admin protected)
│   │       ├── verify/[code]/
│   │       │   └── route.js          # Public certificate token verification
│   │       └── upload/
│   │           └── route.js          # Cloudinary media upload handler
│   ├── components/
│   │   ├── Navbar.jsx                # Responsive navbar with live admin status
│   │   ├── Footer.jsx                # Institutional standards & badges
│   │   ├── AssetCard.jsx             # Luxury styled card with hover animations
│   │   ├── ProvenanceTimeline.jsx    # Chronological chain-of-custody visualization
│   │   ├── CertificateBadge.jsx      # Cryptographic certificate with print option
│   │   └── ImageUploader.jsx         # Cloudinary drag-and-drop media uploader
│   ├── lib/
│   │   ├── dynamodb.js               # AWS DynamoDB Document Client + local fallback
│   │   ├── auth.js                   # Password hashing, JWT token & session cookies
│   │   ├── cloudinary.js             # Cloudinary SDK client with fallback handler
│   │   ├── seed-data.js              # Initial curated museum & luxury asset collection
│   │   └── utils.js                  # Formatting, date utilities, certificate generators
│   └── globals.css                   # Custom obsidian & champagne gold design system
├── tests/
│   ├── auth.test.js                  # Authentication & crypto tests
│   ├── dynamodb.test.js              # DynamoDB asset CRUD & event append tests
│   └── utils.test.js                 # Formatting and ID generation tests
├── .env.example                      # Template environment variables
├── .env.local                        # Active local environment variables
├── package.json
└── next.config.mjs
```

---

## 🛡️ Key Features

1. **Dual-Mode Amazon DynamoDB Adapter**: Ready for direct AWS production use via environment keys, with persistent local mock fallback allowing instant testing without active AWS billing.
2. **Cloudinary Media Storage**: Supports high-resolution imagery uploads with responsive image transformations and secure CDN delivery.
3. **Cryptographic Certificate Verification**: Fast token lookup (`/verify`) confirms authentic laboratory forensics, creation year, and custodian records.
4. **Interactive Provenance Timeline**: Chronological chain-of-custody records tracking ownership transfers, museum exhibitions, auctions, and condition audits.
5. **Secure Admin Authentication**: Server-side authorized endpoints protected by HTTP-only, SameSite cookies and cryptographically signed JWTs.
