# Validation and delivery

Read this guide before handing off or publishing a generated site.

## Preserve the workspace

Before edits, inspect version-control status and existing project instructions. Do not overwrite unrelated changes. Avoid destructive cleanup. When replacing or deleting user content is required, get explicit confirmation.

## Required validation

Use the project's own commands when they exist. For the default Astro project, run dependency installation according to its lockfile, then:

```text
npm run check
npm run build
npm run preview
```

Validate observable behavior, not just command exit codes.

### Pages and links

- Home loads and identifies the person and site's purpose.
- About and Blog are reachable from Home and global navigation.
- At least one real or explicitly marked sample article opens correctly.
- GitHub and other key external links match user-supplied URLs.
- Internal links work under the configured deployment base path.
- The 404 page provides a route back to the site.

### Content

- No draft posts appear in production.
- Post order is intentional and deterministic.
- Missing optional content produces an omission or useful empty state, not a broken section.
- No sample or inferred material is presented as user fact.
- Sensitive data is excluded unless explicitly intended for publication.

### Bilingual behavior

- The document `lang` matches each page.
- A locale switch targets a real equivalent page or the target locale home.
- Localized title, description, canonical, and alternate metadata are correct.
- Missing translations do not create empty routes or 404 links.

### Browser and design

- Inspect at least one mobile and one desktop viewport.
- Test keyboard navigation, visible focus, menu behavior, and reduced motion.
- Check headings, landmarks, alternative text, contrast, overflow, and long content.
- Check the browser console for unhandled errors.
- Confirm images have stable sizing and no broken sources.

### GitHub Profile README

- Markdown, images, alt text, and links are valid.
- Missing fields are explicit placeholders rather than invented claims.
- The local deliverable does not silently overwrite an existing remote README.

## Publishing checks

Publishing is a separate, user-authorized action. Before it:

- identify the exact repository, branch, host, domain, and existing site;
- inspect for private content and secrets;
- configure real site/base URLs and required public variables;
- build successfully from a clean dependency install where practical.

After it:

- open the public URL;
- test Home, About, Blog, one post, language switching, assets, and 404 behavior;
- distinguish a preview URL from a production URL;
- stop and report the concrete error if authentication, DNS, or host configuration blocks completion.

Do not report deployment complete until the public result is reachable and checked.

## Handoff format

Lead with the outcome and include:

1. pages and deliverables created or changed;
2. local run/build commands;
3. primary files for editing profile, projects, navigation, translations, and posts;
4. checks performed and their results;
5. remaining placeholders, unconfirmed translations, or configuration;
6. the verified public URL only if publishing completed.

