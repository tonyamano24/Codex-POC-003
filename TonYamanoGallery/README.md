# TonYamanoGallery

A Nuxt 3 + Tailwind CSS powered portfolio for photographer Ton Yamano. The site highlights curated projects, intimate sessions, and provides prospective clients with contact points and service details. Playwright is configured for automated end-to-end checks.

## Getting Started

```bash
# install dependencies
pnpm install

# start the development server
pnpm dev

# run the production build
pnpm build
pnpm preview

# execute Playwright tests
pnpm test
```

> **Note:** This repository uses remote Unsplash assets for gallery imagery. Replace the URLs with self-hosted artwork before going live.

## Project Structure

- `pages/` — Nuxt pages powering routing.
- `components/` — Reusable UI building blocks such as the gallery sections.
- `data/` — Type-safe data sources for projects and profile content.
- `assets/css/tailwind.css` — Tailwind entry file that loads project tokens.
- `tests/e2e/` — Playwright end-to-end specifications.

## Preview Versions

Preview thumbnails for each project series live inside the gallery cards. Update the `previews` array within `data/gallery.ts` to add a new preview image when releasing a refreshed version of the website or client gallery.
