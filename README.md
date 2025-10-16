# TonYamanoGallery

TonYamanoGallery is a Nuxt 3 + Tailwind CSS single page experience crafted for Ton Yamano’s personal photo gallery. It highlights
signature collections, versioned releases with preview imagery, and a newsletter call-to-action for future drops.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the gallery.

### Linting and formatting

```bash
npm run lint
npm run format
```

Use `npm run format:write` to automatically fix formatting issues with Prettier.

## Tech stack

- [Nuxt 3](https://nuxt.com/) for the application framework and SEO utilities.
- [Tailwind CSS](https://tailwindcss.com/) for rapid, utility-first styling.
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code consistency.

## Project structure

```
TonYamanoGallery/
├── app.vue
├── assets/
│   └── css/
│       └── tailwind.css
├── components/
│   ├── CallToAction.vue
│   ├── DecorativeBlur.vue
│   ├── GalleryGrid.vue
│   ├── HeroSection.vue
│   ├── TheFooter.vue
│   └── VersionTimeline.vue
├── pages/
│   └── index.vue
├── public/
│   ├── favicon.svg
│   └── previews/
│       ├── aurora-release.svg
│       ├── nebula-horizon.svg
│       └── solstice-revision.svg
├── nuxt.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

Each release preview includes an accessible SVG illustration so viewers can compare every version of the gallery at a glance.
