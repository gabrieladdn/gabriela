---
applyTo: "src/**/*.{ts,tsx},public/**/*,tailwind.config.js,next.config.js,postcss.config.js,tsconfig.json"
description: "Use when editing the app source, styling, or build/runtime settings."
---

- Prefer Server Components by default.
- Use Client Components only for stateful or interactive UI.
- Keep component files short and feature-focused.
- Use the shared design tokens in `src/styles/globals.css` and `tailwind.config.js`.
- Keep SEO logic centralized in `src/lib/seo.ts`.
- Keep environment parsing centralized in `src/config/env.ts`.
- Avoid editing generated folders like `.next/`.
