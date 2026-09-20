# GitHub Profile README

Use this guide when creating or changing a GitHub Profile README.

## Target and authorization

A GitHub Profile README belongs in the public repository whose name exactly matches the GitHub username. Confirm the username before preparing a remote change.

Default to a local deliverable such as:

```text
deliverables/github-profile/README.md
```

Do not create the remote profile repository, replace an existing README, commit, or push unless the user explicitly requests that external change. If an existing README is in scope, read it first and preserve content the user did not ask to remove.

## Content choices

Choose only sections supported by real content:

- short introduction and current focus;
- work, study, or collaboration status;
- skills and tools;
- selected projects;
- latest or featured Blog links;
- personal-site link;
- contact and social links;
- optional badges or activity cards.

Keep the opening useful above the fold. Prefer a few meaningful links to a dense badge wall.

## Accuracy and placeholders

Do not invent roles, organizations, projects, contribution metrics, awards, or skill levels. When the user explicitly wants a scaffold and project content is missing, use an obvious placeholder such as `<!-- Add a selected project here -->` and list it in the handoff.

Never include tokens, private repository URLs, private email addresses, or other secrets.

## Third-party images and badges

Badges, counters, statistics cards, and dynamic images are optional. Before using them:

- prefer established HTTPS services;
- add meaningful alt text;
- ensure the README remains useful when the service is unavailable;
- avoid exposing private identifiers or tracking data;
- avoid claims derived from unreliable generated metrics.

## Validation

- Verify Markdown structure and image/link syntax.
- Check every personal-site, Blog, repository, and social URL supplied by the user.
- Confirm headings remain readable in GitHub's renderer.
- Confirm light and dark GitHub themes do not make essential images invisible.
- Keep the README useful without HTML-only styling.

Report the local path and any remaining placeholders. Report a remote update only after verifying the target repository state.

