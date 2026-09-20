---
name: personal-homepage-builder
description: Create or revise a personal homepage, About Me site, portfolio, Markdown blog, or GitHub Profile README through conversation. Use for personal-site planning and implementation, content-driven redesigns, bilingual personal sites, and connecting a homepage with About, Blog, projects, and GitHub. Do not use for unrelated product websites, dashboards, e-commerce, or isolated generic frontend components.
metadata:
  short-description: Build personal websites and GitHub profiles
---

# Personal Homepage Builder

Build a working, maintainable personal website from the user's content and constraints. Treat the homepage as the main entry point to About, Blog, and GitHub. Generate a GitHub Profile README when requested or when it is part of the agreed site package.

## Choose the implementation path

Inspect the workspace before changing files.

1. For an existing project, preserve its framework, package manager, design language, and unrelated files. Read [references/default-architecture.md](references/default-architecture.md) only for quality and content-structure guidance; do not migrate merely to match the default.
2. For a new project with a user-selected stack, use that stack.
3. For a new project without a selected stack, read [references/default-architecture.md](references/default-architecture.md) and use the Astro static-site default.
4. If the request is only for a GitHub Profile README, do not create a website project.

For the default path, create the project with `scripts/scaffold_site.py <target> --name <project-name>` when copying the bundled starter is appropriate. The script refuses to write into a non-empty directory; never bypass that guard for an existing project.

If the user's requested technology conflicts with a required outcome, explain the concrete tradeoff and follow their final choice. Do not ask them to choose technical details that have a safe default.

## Workflow

### 1. Discover the site

Read [references/discovery-and-content.md](references/discovery-and-content.md) when creating a site, importing user materials, or restructuring content.

Extract information already present in the conversation and files before asking questions. Establish:

- the site's purpose and audience;
- the display name and one-line identity;
- the intended Home, About, Blog, projects, GitHub, and contact content;
- the primary language and whether Chinese/English versions are required;
- visual direction and supplied references;
- publishing requirements and existing constraints.

Ask only for missing information that materially changes the result. If content is incomplete, proceed with honest empty states, omit irrelevant sections, or use visibly marked placeholders. Never invent biography, employment, education, projects, metrics, repositories, awards, or contact details.

### 2. Form a brief

Before implementation, state a compact brief covering:

- primary audience and desired impression;
- page and navigation structure;
- content supplied versus content still missing;
- visual direction;
- chosen implementation path and deployment assumptions.

For a simple, clear request, state assumptions and proceed without waiting for line-by-line approval.

### 3. Build the site

Create a real runnable site, not a visual mockup. Keep content data separate from page presentation. The homepage must visibly link to About, Blog, and the user's real GitHub URL when supplied.

Use semantic HTML and responsive, content-first layouts. Read [references/design-quality.md](references/design-quality.md) before creating or substantially changing the visual system.

For bilingual sites:

- keep UI translations separate from personal content;
- generate only pages whose content exists;
- link a language switch to the equivalent page when available and otherwise to that language's homepage;
- mark machine-generated translations as drafts until the user confirms them;
- set correct document language and localized metadata.

### 4. Build the GitHub profile deliverable

Read [references/github-profile.md](references/github-profile.md) when creating or editing a GitHub Profile README. Keep it as a separate deliverable unless the user names an existing profile repository.

Do not create a remote repository, replace an existing README, commit, push, or publish without the user's explicit request and the necessary authorization.

### 5. Preview and revise

Run the site locally or create an equivalent preview. Inspect at least one mobile and one desktop viewport. Apply feedback as local changes: preserve accepted structure and content unless the requested revision requires broader work.

### 6. Validate and deliver

Read [references/validation-and-delivery.md](references/validation-and-delivery.md) before final delivery or publishing.

At minimum:

- install dependencies using the project's lockfile policy;
- run type/content checks and a production build;
- inspect Home, About, Blog, one article, language switching, and GitHub links that exist;
- check keyboard access, visible focus, headings, alt text, contrast, mobile overflow, and browser console errors;
- distinguish local completion from public deployment.

Report what was built, how to run it, where content is edited, what remains to configure, and any verification limitations.

## Publishing boundary

Local generation is the default. Publish only when the user asks for it. Read [references/deployment.md](references/deployment.md) before preparing or executing a deployment. Before a remote mutation, confirm the exact repository or hosting target, existing content handling, and any required domain or environment configuration. Never store secrets in source files, Markdown, build output, or Git history.

For a new static site where the user requests publishing but gives no provider preference, recommend GitHub Pages. Support another provider when requested. Verify the public URL before reporting deployment complete.
