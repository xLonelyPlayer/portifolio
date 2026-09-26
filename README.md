# portifolio

Personal landing page built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Requirements

- Node 24 (see `.node-version`; `nvm use 24`)
- pnpm (`corepack enable`)

## Scripts

| Command          | Description                |
| ---------------- | -------------------------- |
| `pnpm dev`       | Start the dev server       |
| `pnpm build`     | Production build           |
| `pnpm start`     | Serve the production build |
| `pnpm lint`      | ESLint                     |
| `pnpm typecheck` | TypeScript, no emit        |
| `pnpm test`      | Unit tests (Vitest)        |
| `pnpm format`    | Prettier                   |

## Structure

- `src/content/` — **data**: site copy and types. Edit `site.ts` to change content.
- `src/lib/` — **calculations**: pure helpers, unit-tested alongside (`*.test.ts`).
- `src/components/` — presentational server components; props only.
- `src/app/page.tsx` — composition root wiring content → calculations → components.
