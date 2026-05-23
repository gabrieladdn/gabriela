---
name: site-workflow
description: "Use when implementing Gabriela Nunes site work in the documented order, especially when moving from foundation to content, SEO, routing, and deploy tasks."
---

# Site Workflow

Use this workflow when extending the project.

## When to use
- The task should follow the blueprint docs in order.
- You need to add or refine site pages, content, SEO, or deploy behavior.
- You want to avoid jumping ahead of the documented plan.

## Workflow
1. Read the next relevant doc in `docs/`.
2. Check whether the current source already satisfies it.
3. Make the smallest focused change.
4. Validate with `npm run lint` or `npm run build`.
5. Update docs or instructions only if the implementation changes the project contract.

## Assets
- `docs/00-project-context.md`
- `docs/01-product-requirements.md`
- `docs/02-architecture.md`
- `docs/03-domain-model.md`
- `docs/04-design-system.md`
- `docs/05-seo-aeo.md`
- `docs/06-routing-pages.md`
- `docs/07-content-migration.md`
- `docs/08-coding-standards.md`
- `docs/09-deploy.md`
- `docs/10-definition-of-done.md`
