# Gabriela Nunes — Project Instructions

- Follow the documented order in `docs/` before expanding scope.
- Keep the stack aligned with Next.js App Router, TypeScript, Tailwind CSS, MDX-based blog content, and Vercel-first deployment.
- Prefer Server Components; use Client Components only when interaction is required.
- Keep files small, feature-focused, and easy to reuse.
- Use `NEXT_PUBLIC_SERVER_URL` for canonical URLs and `NEXT_PUBLIC_ANALYTICS_ID` only as a provider placeholder.
- Do not hardcode analytics providers.
- Do not add heavy UI libraries, state libraries, or unnecessary abstractions.
- Keep generated artifacts ignored, including `.next/`, `node_modules/`, and local `.env` files.
- Run `npm run lint` and `npm run build` after meaningful code changes.
- Reuse the existing design tokens and SEO helpers before adding new ones.
- Preserve Portuguese (pt-BR) orthography in user-facing text, including accents and cedilla (ã, á, â, é, ê, í, ó, ô, õ, ú, ç); do not normalize content copy to ASCII.
