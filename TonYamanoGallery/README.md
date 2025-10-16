# Ton Yamano Gallery

A Nuxt 3 + Tailwind CSS powered personal photography gallery for Ton Yamano. The project includes Playwright end-to-end tests and versioned preview artwork stored in `public/previews` to represent captured website states.

## Getting started

```bash
npm install
npm run dev
```

## Testing

```bash
npx playwright test
```

## Preview Artwork

Each release of the gallery should include an updated preview image stored under `public/previews/<version>/`. These SVG placeholders ship with the repository so contributors working offline can still see representative artwork. Replace them with actual screenshots before shipping to production.
