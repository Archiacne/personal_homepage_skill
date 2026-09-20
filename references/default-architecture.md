# Default architecture

Read this guide for a new website when the user has not selected a technology stack. For an existing project, preserve its architecture and use only the relevant quality principles.

## Default stack

- Node.js Active LTS supported by the selected Astro release.
- npm with a committed `package-lock.json`.
- Astro stable release with TypeScript strict mode.
- Static output.
- Astro Content Collections for Markdown blog posts.
- Native CSS with CSS Custom Properties for design tokens.
- Native JavaScript for small interactions; an Astro island only when an interaction genuinely needs a client framework.
- English content and routes by default. Use another single language only when the user requests it.

Do not add React, Vue, Svelte, Tailwind CSS, a database, a CMS, a server adapter, analytics, or a state-management library by default.

## Change the default when needed

Use another architecture when the user requests it or the outcome requires it:

- authentication or personalized server data: server/full-stack architecture;
- edit-without-rebuild content: CMS or remote content source;
- high-frequency live data: server or client data fetching;
- complex client application state: an appropriate client framework;
- plain HTML request: HTML, CSS, and minimal JavaScript;
- existing Next.js, Nuxt, React, Vue, or other project: preserve that stack.

Explain migration impact before replacing an existing architecture.

## Generated project shape

Keep small sites small. Use the following shape as a guide, not a requirement to create empty directories:

```text
site/
├── public/
├── src/
│   ├── components/
│   ├── content/blog/
│   ├── data/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   └── content.config.ts
├── deliverables/github-profile/README.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Separate concerns:

- `src/data`: profile, navigation, projects, social links, and UI copy;
- `src/content`: authored long-form posts;
- `src/lib`: content queries and base-aware URL helpers;
- `src/components`: reusable presentation;
- `src/pages`: route composition and page metadata;
- `src/styles`: tokens and global foundations.

Do not scatter biography or URLs across several components.

## Default routes

Use unprefixed routes for the site's single language:

```text
/
/about/
/blog/
/blog/<slug>/
```

Do not generate locale-prefixed duplicates or a language switch. English is the default when the user does not select another language.

Use a centralized base-aware URL helper so GitHub Pages project deployment does not break internal links or assets.

## Content model

Validate Blog entries with a schema equivalent to:

```yaml
title: string
summary: string
publishedAt: date
updatedAt: date?
locale: string
tags: string[]
cover: image?
coverAlt: string?
draft: boolean
featured: boolean
canonicalUrl: url?
```

Exclude drafts from production, explicitly sort posts by publication date, and do not link a translation that does not exist.

## Command contract

Provide semantic equivalents of:

```json
{
  "scripts": {
    "dev": "astro dev",
    "check": "astro check",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "audit": "node scripts/validate-build.mjs",
    "validate": "npm run build && npm run audit"
  }
}
```

Pin compatible dependency versions in the lockfile. Record the supported Node major version in project configuration. Do not upgrade unrelated dependencies during a content or visual edit.

## Deployment defaults

Local delivery is the default. If the user requests publishing without selecting a provider, propose GitHub Pages.

For GitHub Pages, configure the real `site` and required `base`, then test subpath links. Prefer the official Astro deployment action appropriate to the generated project version.

For static Vercel or Netlify deployment, use the normal build command and `dist` output. Add a platform adapter only for on-demand rendering.
