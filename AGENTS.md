# AGENTS.md

This file provides guidance to AI Agent when working with code in this repository.

## Project

Midone — a Vue 3 admin dashboard template. Stack: Vue 3 (`<script setup>` + TypeScript) · Vite 7 · Tailwind CSS v4 · Pinia · Vue Router. The package name is `@midone/vue`.

The repo uses **pnpm** (`pnpm-lock.yaml`); the README's `yarn` examples are stale — prefer `pnpm`. Requires Node `^20.19.0 || >=22.12.0`.

## Commands

```sh
pnpm dev              # Vite dev server with HMR
pnpm build            # type-check (vue-tsc) + production build, run in parallel
pnpm preview          # serve the production build
pnpm type-check       # vue-tsc --build only
pnpm lint             # eslint . --fix --cache
pnpm format           # prettier --write src/

pnpm test:unit        # Vitest (watch). Single file: pnpm test:unit src/path/file.spec.ts
pnpm test:unit run    # Vitest once (CI mode)
pnpm test:e2e:dev     # Cypress against the Vite dev server (fast iteration)
pnpm test:e2e         # Cypress against a built+previewed app (CI)
```

Unit tests live in `src/**/__tests__/` (Vitest, jsdom). E2E specs live in `cypress/e2e/*.cy.ts`.

## Path aliases

- `@` → `src/`
- `@midoneui/core` → `src/components/ui/` (the UI library; components import their own styles/utils via this alias)

Both are defined in `vite.config.ts` and mirrored in the tsconfig files.

## Architecture

### Theme + layout system (the central abstraction)

The app ships **4 themes** (`rubick`, `icewall`, `tinker`, `enigma`) × **2 layouts** (`side-menu`, `top-menu`) = 8 shell components, registered in `src/stores/theme.ts`. The active theme/layout is persisted in `localStorage` and exposed by the `theme` Pinia store.

`src/themes/Layout.vue` is the root layout: it reads the theme store and renders the matching shell `<Component />` dynamically via `getTheme()`. Each theme directory (`src/themes/{Enigma,Icewall,Rubick,Tinker}/`) contains a `SideMenu/` and `TopMenu/` shell. The router mounts `Layout` at `/` and nests every page under it.

Navigation entries are data, not routes: edit `src/main/side-menu.ts` and `src/main/top-menu.ts` (arrays of `Menu` objects with `icon`, `title`, `route_name`, `sub_menu`). Adding a page = add a route in `src/router/index.ts` **and** a menu entry.

### Stores (Pinia)

`src/stores/` — `theme`, `dark-mode`, `color-scheme`. All are thin wrappers over `localStorage` (read on init, write on every setter). Dark mode toggles the `.dark` class consumed by the CSS variant; color scheme sets `data-theme` (see below).

### UI component library (`src/components/ui/`)

Headless behavior from **Zag.js** (`@zag-js/*` + `@zag-js/vue`) wrapped in Vue components, styled with **class-variance-authority (CVA)**. The pattern, per component (e.g. `button/`):

- `Button.vue` — the component; merges classes with `cn(...)` and applies a CVA variant function.
- `index.ts` — barrel re-export.
- Variants live **separately** in `src/components/ui/styles/<name>.styles.ts` as `cva(...)` definitions exporting both the variant function and its `VariantProps` type.

`cn()` (`src/utils/cn.ts` and `src/components/ui/utils/cn.ts`) = `clsx` + an extended `tailwind-merge`. Use it for all conditional/merged class lists so Tailwind conflicts resolve correctly. Multi-part components (e.g. `accordion/` → `AccordionRoot/Item/Trigger/Content.vue`) follow a Root + parts convention.

Live examples for every component are in `src/docs/pages/*.vue`, rendered through `src/docs/DocsLayout.vue` and routed under `/` (e.g. `/button`, `/data-table`).

### Styling (Tailwind v4, CSS-first)

There is **no `tailwind.config.js`** — configuration is CSS-first in `src/index.css` via `@theme`, `@custom-variant dark`, `@utility`, and `@layer`. Semantic color tokens (`primary`, `secondary`, `success`, `danger`, `pending`, `warning`, plus `background`/`foreground`, each with a `-foreground` pairing) are defined as `--color-*` and reused across CVA variants — prefer these tokens over raw palette colors. Dark mode overrides them under `.dark`; color schemes override `--color-primary` under `[data-theme='N']`.

### Pages

`src/views/` holds ~44 page components (dashboards, e-commerce, CRUD, auth, etc.), all lazy-loaded via dynamic `import()` in `src/router/index.ts`. Auth pages (`/login`, `/register`, `/error-page`) sit outside the `Layout` shell.
