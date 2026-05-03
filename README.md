# Bright Horizon Website

Official marketing website for Bright Horizon, built with Astro and Tailwind CSS.

## Tech Stack

- Astro 6
- Tailwind CSS 4 (via Vite plugin)
- Node.js 22.12+

## Requirements

- Node.js >= 22.12.0
- npm >= 10

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the site:

http://localhost:4321

## Build and Preview

Build production output:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## NPM Scripts

- `npm run dev` - Start Astro dev server
- `npm run build` - Create production build
- `npm run preview` - Serve built output locally
- `npm run astro -- <command>` - Run Astro CLI commands

## Deployment Model

This repo uses branch-based deployments.

1. `dev` branch
- Deploys to GitHub Pages via GitHub Actions

2. `main` branch
- Deploys to Cloudflare for production

The Astro config automatically adjusts `site` and `base` for GitHub Pages when `DEPLOY_TARGET=github-pages`.

## Domains

- Production: https://www.brighthorizon.co.za
- Development/preview: https://dev.brighthorizon.co.za

Default Cloudflare preview/workers domains may also exist depending on deployment settings.

## Edge and Security Headers

Cloudflare-compatible edge files are committed in `public`:

- `public/_redirects`
- `public/_headers`

These are used for:

- HTTP to HTTPS redirects
- Apex-to-www behavior
- Security headers (including HSTS where configured)

Recommended Cloudflare dashboard settings:

1. SSL/TLS mode: Full (strict)
2. Always Use HTTPS: On
3. Canonical redirect from `brighthorizon.co.za` to `www.brighthorizon.co.za`

## Required CI/CD Secrets

Set these in GitHub repository secrets for Cloudflare deployment workflows:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PAGES_PROJECT`

## Project Structure

- `src/pages` - Route-based pages
- `src/components` - Reusable UI components
- `src/layouts` - Page layouts (`MainLayout.astro`, `Layout.astro`)
- `src/styles` - Global styling (`global.css`)
- `public` - Static assets, redirects, and headers

## Notes

- Primary site pages use `MainLayout.astro`.
- Global visual system and homepage hero styling are maintained in `src/styles/global.css`.
- Backup standards are documented in `BACKUP_POLICY.md`.
