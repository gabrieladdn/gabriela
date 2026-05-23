# Project Instructions

- Follow the documented order in `docs/` when extending the project.
- Keep the stack aligned with Next.js App Router, Payload CMS v3, TypeScript, Tailwind CSS, and MongoDB Atlas.
- Prefer server components; use client components only when necessary.
- Keep files small and feature-focused.
- Use `DATABASE_URI` or `MONGODB_URI` for MongoDB connection, `PAYLOAD_SECRET` for Payload, and `NEXT_PUBLIC_SITE_URL` for canonical metadata.
- Do not hardcode analytics providers; use `NEXT_PUBLIC_ANALYTICS_ID` as a placeholder only.
- Run `npm run lint` and `npm run build` after code changes.
