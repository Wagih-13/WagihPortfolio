# Grovo SASS — Project Structure Report

**Generated:** June 21, 2026  
**Project:** `grovo-sass` — A Next.js SaaS application for Meta Ads management (Grovo Hub)

---

## Overview

This is a **Next.js 16** (App Router) project bootstrapped with `create-next-app`, using **TypeScript**, **Tailwind CSS v4**, and **PostCSS**. The project is structured as a **multi-tenant SaaS platform** that integrates with the **Meta Graph API (v19.0)** for ad account management, campaign insights, and creative asset retrieval. The codebase follows a **layered architecture** separating frontend routes, API routes, database layer, and server-side business logic.

---

## Root Configuration Files

| File                    | Purpose                                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `package.json`          | Project metadata, scripts (`dev`, `build`, `start`, `lint`), and dependencies (Next.js 16.2.9, React 19.2.4, Tailwind CSS v4, TypeScript 5, ESLint 9) |
| `tsconfig.json`         | TypeScript configuration targeting ES2017, using bundler module resolution, strict mode, and path alias `@/*` mapping to root                         |
| `next.config.ts`        | Next.js configuration (currently empty/default)                                                                                                       |
| `postcss.config.mjs`    | PostCSS configuration with `@tailwindcss/postcss` plugin                                                                                              |
| `eslint.config.mjs`     | ESLint flat config using `eslint-config-next` with core-web-vitals and TypeScript rules                                                               |
| `.gitignore`            | Git ignore rules                                                                                                                                      |
| `.claudignore`          | Claude AI ignore rules                                                                                                                                |
| `.env` / `.env.example` | Environment variables (not tracked in git)                                                                                                            |
| `CLAUDE.md`             | Claude AI instructions (references `@AGENTS.md`)                                                                                                      |
| `META_API_GUIDE.md`     | Meta Graph API integration specification (v19.0) — documents OAuth scopes, endpoints, and database schema for Meta connections                        |
| `README.md`             | Default Next.js README                                                                                                                                |
| `next-env.d.ts`         | Next.js TypeScript declarations (auto-generated)                                                                                                      |

---

## `app/` — Next.js App Router (Frontend + API)

The application uses **Next.js App Router** with route groups and parallel API routes.

### Root Files

| File              | Purpose                                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| `app/layout.tsx`  | Root layout component — sets up Geist/Geist Mono fonts, global HTML structure with `h-full` and `antialiased` classes |
| `app/page.tsx`    | Home page — default Next.js starter page with deploy/docs links                                                       |
| `app/globals.css` | Global CSS with Tailwind directives                                                                                   |
| `app/favicon.ico` | Favicon                                                                                                               |

### Route Groups (UI Pages)

| Directory       | Purpose                                              |
| --------------- | ---------------------------------------------------- |
| `app/(admin)/`  | Admin-facing UI routes (empty — to be implemented)   |
| `app/(auth)/`   | Authentication UI routes (empty — to be implemented) |
| `app/(public)/` | Public-facing UI routes (empty — to be implemented)  |

### API Routes

| Directory            | Purpose                                                  |
| -------------------- | -------------------------------------------------------- |
| `app/api/admin/`     | Admin API endpoints (empty — to be implemented)          |
| `app/api/auth/`      | Authentication API endpoints (empty — to be implemented) |
| `app/api/dashboard/` | Dashboard API endpoints (empty — to be implemented)      |
| `app/api/public/`    | Public API endpoints (empty — to be implemented)         |

---

## `db/` — Database Layer

The database layer is scaffolded with **Drizzle ORM** (referenced in `META_API_GUIDE.md`). All files are currently empty placeholders.

| File/Directory    | Purpose                                    |
| ----------------- | ------------------------------------------ |
| `db/index.ts`     | Database connection/instance setup (empty) |
| `db/enums.ts`     | Drizzle enum definitions (empty)           |
| `db/relations.ts` | Drizzle table relations (empty)            |
| `db/schema/`      | Database schema definitions (empty)        |
| `db/migrations/`  | Database migration files (empty)           |
| `db/scripts/`     | Database utility scripts (empty)           |
| `db/seed/`        | Database seed data (empty)                 |

---

## `server/` — Server-Side Business Logic

The server layer follows a **layered architecture** pattern. All directories are currently empty.

| Directory              | Purpose                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `server/controllers/`  | Request handlers — process HTTP requests and return responses                       |
| `server/services/`     | Business logic layer — orchestrates operations between controllers and repositories |
| `server/repositories/` | Data access layer — interacts with the database (Drizzle ORM)                       |
| `server/middleware/`   | Express/Next.js middleware — authentication, validation, error handling             |
| `server/validators/`   | Input validation schemas (likely Zod or similar)                                    |
| `server/utils/`        | Utility/helper functions                                                            |

---

## Supporting Directories (All Empty)

| Directory     | Purpose                                            |
| ------------- | -------------------------------------------------- |
| `components/` | Reusable React components (UI library)             |
| `config/`     | Application configuration files                    |
| `hooks/`      | Custom React hooks                                 |
| `lib/`        | Shared library code (utilities, API clients, etc.) |
| `styles/`     | Additional style files                             |
| `types/`      | TypeScript type definitions and interfaces         |

---

## `public/` — Static Assets

| File                | Purpose          |
| ------------------- | ---------------- |
| `public/file.svg`   | File icon SVG    |
| `public/globe.svg`  | Globe icon SVG   |
| `public/next.svg`   | Next.js logo SVG |
| `public/vercel.svg` | Vercel logo SVG  |
| `public/window.svg` | Window icon SVG  |

---

## Architecture Summary

```
grovo-sass/
├── app/                    # Next.js App Router
│   ├── (admin)/            # Admin UI routes
│   ├── (auth)/             # Auth UI routes
│   ├── (public)/           # Public UI routes
│   └── api/                # API routes
│       ├── admin/
│       ├── auth/
│       └── public/
├── components/             # Reusable React components
├── config/                 # App configuration
├── db/                     # Database layer (Drizzle ORM)
│   ├── schema/             # Table schemas
│   ├── migrations/         # DB migrations
│   ├── scripts/            # Utility scripts
│   └── seed/               # Seed data
├── hooks/                  # Custom React hooks
├── lib/                    # Shared utilities
├── public/                 # Static assets
├── server/                 # Server-side logic
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Express/Next middleware
│   ├── repositories/       # Data access layer
│   ├── services/           # Business logic
│   ├── utils/              # Helpers
│   └── validators/         # Input validation
├── styles/                 # Additional styles
└── types/                  # TypeScript types
```

---

## Key Observations

1. **Scaffolding Phase:** The project is in an early scaffolding stage — most directories contain empty files or are completely empty. The core structure is well-planned but not yet implemented.

2. **Meta API Integration:** The `META_API_GUIDE.md` documents the planned integration with Meta Graph API v19.0 for:
   - OAuth 2.0 authentication with `ads_read` and `business_management` scopes
   - Ad account discovery
   - Campaign insights/metrics sync
   - Creative payload lookup

3. **Multi-Tenancy:** The architecture is designed for multi-tenancy with a `tenant_id` unique constraint on Meta connections, enforcing a 1:1 mapping between tenant workspaces and Meta accounts.

4. **Tech Stack:** Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS v4 + Drizzle ORM + PostgreSQL (inferred from Drizzle setup).

5. **Layered Backend:** The `server/` directory follows a clean architecture pattern (Controllers → Services → Repositories) with separate middleware and validation layers.
