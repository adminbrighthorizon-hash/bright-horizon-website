# Bright Horizon Website

Marketing website for Bright Horizon, built with Astro and Tailwind CSS.

## Stack

- Astro 6
- Tailwind CSS 4
- Node.js 22+

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

http://localhost:4321

## Build and Preview

Build production assets:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Deployment Flow

This repository uses branch-based deployment:

1. Push to dev branch:
- Deploys to GitHub Pages via GitHub Actions

2. Merge to main branch:
- Deploys to Cloudflare Pages via GitHub Actions

Workflow files:

- .github/workflows/deploy-dev-github-pages.yml
- .github/workflows/deploy-main-cloudflare.yml

## Domains

Primary production domain:

- https://www.brighthorizon.co.za

Temporary/default Cloudflare domains may exist for preview/fallback:

- bright-horizon-website.brighthorizonza.workers.dev
- *-bright-horizon-website.brighthorizonza.workers.dev

## SSL and Canonical Host

This project includes Cloudflare-compatible edge files in public:

- public/_redirects
- public/_headers

These enforce:

- HTTP to HTTPS redirects
- Apex to www redirect
- Security headers including HSTS

Cloudflare dashboard settings should also be enabled:

1. SSL/TLS mode: Full (strict)
2. Always Use HTTPS: On
3. Redirect rule from brighthorizon.co.za to www.brighthorizon.co.za

## Required GitHub Secrets (Cloudflare Deploy)

Set these in GitHub repository secrets:

- CLOUDFLARE_API_TOKEN
- CLOUDFLARE_ACCOUNT_ID
- CLOUDFLARE_PAGES_PROJECT

## Project Structure

Key directories:

- src/pages: route pages
- src/components: reusable UI components
- src/layouts: layout wrappers
- src/styles: global styles
- public: static assets and edge config files
