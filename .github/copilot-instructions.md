# Copilot / AI Agent Instructions for nexcent

This repository is a small Next.js (app directory) TypeScript project. Keep guidance concise and repo-specific.

- Project type: Next.js app-router in `app/` using TypeScript and Next 16+ features. See `app/layout.tsx` for font setup and global CSS import.
- Package manager: pnpm is used (repo contains `pnpm-lock.yaml`). Use `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint` when suggesting commands.
- Linting: Run `pnpm lint` (script maps to `eslint`). Config lives in `eslint.config.mjs`.
- Styling: Tailwind v4 + PostCSS are configured (`tailwindcss`, `postcss.config.mjs`). Global styles live in `app/globals.css`.
- Components: Shared UI lives under `app/components/`. Components in `app/` are server components by default; add `"use client"` at the top for client components (e.g., when using state or browser-only APIs).
- Images: Use `next/image` for optimized images (example import in `app/components/Header.tsx`).
- Public assets: Place static assets in `public/` and reference them with absolute paths (`/images/...`).
- Types: TypeScript is enabled; prefer exported types and explicit prop types for components.

Patterns & examples to follow

- Layout & metadata: `app/layout.tsx` sets fonts and metadata. Keep global providers and font setup here.
- Minimal Page: `app/page.tsx` uses the app-router; implement routes by adding directories under `app/`.
- Client vs Server: If a component uses `useState`, `useEffect`, or DOM APIs, make it a client component by adding `"use client"` as the first line.

Integration points and assumptions

- No API routes present; if adding serverless endpoints, use `app/api/` (route handlers) or `src/pages/api` depending on routing preference—prefer `app/api` for app-router consistency.
- Next config: `next.config.ts` is present but minimal; propose changes conservatively and include rationale.
- Fonts: Project uses `next/font/google`—keep font variables in `layout.tsx` to avoid duplicate downloads.

Recommendations for PRs and edits

- Keep changes focused: update only the files relevant to the task. For UI changes, update `app/components/*` and `app/page.tsx`.
- Use `pnpm` commands in examples. E.g., `pnpm dev` to spin up the dev server.
- Respect TypeScript types; run TypeScript checks if proposing new types.

When you need clarification

- Ask whether a change should be server or client-side (server components are preferred when possible).
- Confirm whether to add dependencies (explain why and provide `pnpm add -D` or `pnpm add`).

Contact points in repo (examples)

- Global layout and fonts: `app/layout.tsx`
- Global styles: `app/globals.css`
- Example empty page: `app/page.tsx`
- Example component: `app/components/Header.tsx`
- Scripts & deps: `package.json`

If you update this file, keep it short (20–50 lines), concrete, and reference the exact files above.

---
If anything here is unclear or you want the instructions to emphasize different workflows (e.g., CI, testing, or backend integration), tell me which area to expand.
