# Ahmed Wagih — Front-End Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-000000?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-C5F74F?logo=drizzle)](https://orm.drizzle.team)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql)](https://www.postgresql.org)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **Live Site:** [wagih.site](https://wagih.site)  
> **Contact:** [contact@wagih.site](mailto:contact@wagih.site)

A modern, high-performance portfolio website built with **Next.js 16**, **React 19**, and **TypeScript**. Showcases full-stack development expertise — from animated front-end interfaces to production-grade back-end systems with PostgreSQL, Drizzle ORM, and secure authentication.

---

## ✨ Features

### Front-End

- **Animated Hero Section** — Letter-by-letter stagger animation using Framer Motion
- **Skills Grid** — Floating animation loop on technology icons
- **Project Showcase** — Dynamic grid with individual project detail pages (`/project/[id]`)
- **Services Cards** — Three service pillars with interactive hover effects
- **About Me** — Bio section with personal branding image
- **Contact Form** — Full validation (client + server), live error feedback, API-driven email sending via Nodemailer
- **Responsive Design** — Fully fluid layout from mobile to 4K displays
- **Framer Motion** — Scroll-triggered entrance animations, stagger children, and custom variants

### Back-End & Database

- **PostgreSQL + Drizzle ORM** — Type-safe schema definitions, migrations, seed scripts, and query building
- **Bilingual CMS** — JSONB-based `LocalizedString` pattern for EN/AR content with fallback chains
- **Authentication** — NextAuth.js with JWT strategy and role-based access (admin, vendor, customer)
- **API Layer** — RESTful endpoints under `/api/` for public contact, admin, auth, and dashboard
- **Email Service** — Nodemailer integration for contact form submissions
- **Data Validation** — Zod-like validation library in `lib/validation.ts` with per-field and full-form validators

### DevOps & Performance

- **Vercel Deployment** — Optimized for Vercel with Analytics & Speed Insights
- **Nginx + PM2** — Production deployment on Linux VPS with reverse proxy and process management
- **Image Optimization** — Next.js Image component with `sharp` for AVIF/WebP auto-optimization
- **Responsive Images** — Proper `sizes` attributes and lazy loading

---

## 🧰 Tech Stack

| Category             | Technologies                              |
| -------------------- | ----------------------------------------- |
| **Framework**        | Next.js 16 (App Router), React 19         |
| **Language**         | TypeScript 5                              |
| **Styling**          | Tailwind CSS 4, PostCSS                   |
| **Animation**        | Framer Motion 12                          |
| **State Management** | Redux Toolkit, TanStack Query             |
| **Authentication**   | NextAuth.js                               |
| **Database**         | PostgreSQL, Drizzle ORM                   |
| **Email**            | Nodemailer                                |
| **Deployment**       | Vercel, Linux VPS, Nginx, PM2             |
| **Analytics**        | @vercel/analytics, @vercel/speed-insights |
| **Icons**            | react-icons (Fa, Si, Md, Ri, etc.)        |
| **Fonts**            | Geist (via next/font)                     |

### Key Libraries

- `framer-motion` — Scroll animations, stagger children, spring physics
- `react-icons` — Icon components for skills, services, and contact
- `nodemailer` — Server-side email sending
- `sharp` — High-performance image processing
- `@vercel/analytics` — Web vitals and traffic insights
- `@vercel/speed-insights` — Real-user performance monitoring

---

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── (admin)/                  # Admin dashboard routes
│   ├── (auth)/                   # Authentication routes
│   ├── (public)/                 # Public-facing pages
│   │   ├── (pages)/              # Nested public pages (project/[id])
│   │   └── sections/             # Home page sections
│   │       ├── HeroSection.tsx
│   │       ├── SkillesSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── SammarySction.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── AboutMeSection.tsx
│   │       ├── ContactSection.tsx
│   │       ├── NavBarSection.tsx
│   │       └── FooterSection.tsx
│   ├── api/                      # API routes
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   └── public/contact/
│   ├── layout.tsx                # Root layout (Nav, Footer, Analytics)
│   ├── page.tsx                  # Home page composition
│   └── globals.css               # Global styles + Tailwind
├── components/                   # Shared UI components
│   └── skillesList.tsx           # Skills data & icons
├── config/                       # App configuration
├── data/                         # Static data
│   └── projects.json             # Project entries with full challenge/solution docs
├── db/                           # Database layer
│   ├── enums.ts                  # PG enum definitions
│   ├── index.ts                  # DB connection & client
│   ├── relations.ts              # 400+ line type-safe relation map
│   ├── migrations/               # DB migration files
│   ├── schema/                   # Per-entity table schemas
│   ├── scripts/                  # Utility scripts
│   └── seed/                     # Database seed data
├── hooks/                        # Custom React hooks
├── lib/                          # Shared utilities
│   ├── email.ts                  # Nodemailer transport config
│   └── validation.ts             # Form validation library
├── public/                       # Static assets
│   ├── cv/                       # Downloadable CV (PDF)
│   └── projects/                 # Project screenshots & galleries
├── server/                       # Back-end service layer
│   ├── controllers/
│   ├── middleware/
│   ├── repositories/
│   ├── services/
│   ├── utils/
│   └── validators/
├── styles/                       # Additional style modules
├── types/                        # TypeScript type definitions
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20.x
- **npm**, **yarn**, **pnpm**, or **bun**
- **PostgreSQL** (for full back-end features)

### Installation

```bash
# Clone the repository
git clone https://github.com/Wagih-13/WagihPortfolio.git
cd WagihPortfolio

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database (required for back-end features)
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio

# NextAuth
AUTH_SECRET=your-auth-secret
AUTH_URL=http://localhost:3000

# Email (for contact form)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password
CONTACT_EMAIL=contact@wagih.site
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app supports hot module replacement — edits to `app/page.tsx` or any section component will auto-refresh.

### Production Build

```bash
npm run build
npm start
```

### Database Migrations

```bash
# Push schema changes
npx drizzle-kit push

# Generate a new migration
npx drizzle-kit generate

# Run migrations
npx drizzle-kit migrate
```

---

## 🧠 Architecture Highlights

### Bilingual CMS with JSONB

The Staron Egypt project implements a **JSONB-based localization pattern** that stores translations as a single column typed as `{ ar: string; en: string }` rather than duplicating columns (`title_en`, `title_ar`). This approach:

- Reduces column count by ~50% across all tables
- Makes schema evolution trivial
- Provides runtime type safety with helper functions

### Server Architecture

The application follows a **layered back-end architecture**:

- **Controllers** — Handle HTTP requests/responses
- **Services** — Business logic layer
- **Repositories** — Data access abstraction
- **Middlewares** — Auth guards, validation, error handling
- **Validators** — Input validation schemas

### Database Layer

The `db/` directory contains a **fully typed schema layer**:

- `schema/` — One file per domain entity (products, orders, users, etc.)
- `relations.ts` — 400+ lines of type-safe relationship declarations
- `enums.ts` — Centralized Postgres enum definitions via `pgEnum()`
- `migrations/` — Auto-generated and manual migration files

---

## 🧪 Featured Projects

### [E-Commerce Platform](https://modestwear.cloud) — MODEST WEAR

**Next.js · Redux Toolkit · TanStack Query · PostgreSQL · Drizzle ORM · Nginx · PM2**
A full-scale e-commerce platform with role-based access (customer, vendor, admin), server-side rendering, real-time inventory, and responsive admin dashboard. Achieved Lighthouse score improvement from 45 → 92.

### Staron Egypt — Bilingual CMS

**Next.js · TypeScript · Drizzle ORM · PostgreSQL · JSONB · TanStack Query**
A bilingual (EN/AR) B2C + B2B platform for a contracting company. Features a JSONB-based localization system, 30+ interconnected database tables, legacy data migration pipeline, and a comprehensive admin dashboard.

_(View all projects at `/project/[id]` on the live site)_

---

## 📞 Contact

- **Email:** [contact@wagih.site](mailto:contact@wagih.site)
- **Phone:** +20 101 263 9673
- **WhatsApp:** [+20 101 263 9673](https://wa.me/201012639673?text=Hi%20Ahmed%2C%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.)
- **GitHub:** [@Wagih-13](https://github.com/Wagih-13)
- **CV:** [Download PDF](/cv/Ahmed%20Wagih%20CV.pdf)

---

## 📄 License

This project is **MIT licensed** — see the [LICENSE](LICENSE) file for details.

---

_Built with [Next.js](https://nextjs.org), [React](https://react.dev), and [TypeScript](https://www.typescriptlang.org). Deployed on [Vercel](https://vercel.com)._
