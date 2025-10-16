# TonYamanoGallery

TonYamanoGallery is a Nuxt 3 + Tailwind CSS powered photo gallery that presents Ton Yamano's photography through immersive storytelling sections and vibrant gradients. It now includes dedicated collection pages with immersive image grids.

## Getting Started

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` — Start the Nuxt development server.
- `npm run build` — Build the production bundle.
- `npm run preview` — Preview the production build locally.
- `npm run lint` — Lint the project using ESLint.
- `npm run test:e2e` — Execute the Playwright end-to-end tests (requires the dev server).

## Testing

Playwright is configured in `playwright.config.ts` to launch the Nuxt dev server automatically. The smoke tests cover the homepage journey and the collection detail flow.

```bash
npm run test:e2e
```

## Styling

Tailwind CSS utilities are available globally via `assets/css/tailwind.css`. Custom theme extensions live in `tailwind.config.ts`.
