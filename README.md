# Personal Homepage Builder

A Codex skill for creating and revising personal homepages, About Me pages, Markdown blogs, portfolios, and GitHub Profile READMEs through conversation.

## Capabilities

- Builds a working personal website with Home, About, Blog, and GitHub navigation.
- Uses an existing project's stack or the user's requested stack.
- Defaults to a static Astro + TypeScript architecture when no stack is specified.
- Supports Chinese and English content without inventing missing translations.
- Creates a separate GitHub Profile README deliverable.
- Validates builds, links, responsive layouts, accessibility basics, and browser behavior.
- Keeps publishing and remote GitHub changes behind explicit user authorization.

## Install

Copy or clone this repository into your Codex skills directory so that `SKILL.md` is at the skill root:

```text
~/.codex/skills/personal-homepage-builder/SKILL.md
```

Restart or reload Codex after installation if the skill is not discovered automatically.

## Use

Invoke the skill explicitly or describe a matching task:

```text
Use $personal-homepage-builder to build a bilingual personal site from my resume and Markdown articles.
```

The skill preserves an existing project's architecture. For a new project without a requested stack, it uses the default architecture described in `references/default-architecture.md`.

Local generation is the default. Creating repositories, pushing to GitHub, or publishing a site occurs only when explicitly requested.

## Development status

- Skill routing, content rules, default architecture, GitHub Profile guidance, and delivery checks are implemented.
- The default Astro starter has a validated desktop flow for Home, About, bilingual Blog, article pages, and language switching.
- Mobile-specific visual acceptance and regression coverage are planned for a later iteration.
