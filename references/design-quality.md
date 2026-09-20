# Design quality

Read this guide before creating or substantially revising a site's visual system.

## Translate direction into a system

Turn the user's visual language into explicit decisions for:

- color roles rather than isolated hex values;
- display and body typography;
- type scale and line length;
- spacing rhythm;
- content width and grid behavior;
- borders, radii, and shadows;
- button, link, card, tag, navigation, and focus states;
- image treatment and motion behavior.

Use CSS Custom Properties for recurring decisions. Change tokens for global revisions instead of applying inconsistent component overrides.

## Default direction

When no style is specified, inspect [`../assets/reference.html`](../assets/reference.html) and follow its minimal, centered personal-homepage composition: a prominent avatar, display name, short statement, restrained divider, and concise text navigation. Adapt it to the user's real content and accessibility needs rather than copying placeholder content literally.

Avoid decorative sections without content. Visual personality can come from typography, proportion, color, illustration, and composition rather than unnecessary interface chrome.

## Responsive behavior

- Start with the narrow layout and enhance for available space.
- Use fluid type and spacing where appropriate.
- Collapse navigation only when it no longer fits.
- Let cards adapt to content and width rather than named device models.
- Test long names, navigation labels, long URLs, tags, code blocks, and tables.
- Prevent horizontal page overflow.
- Provide stable image dimensions to reduce layout shift.

## Interaction

- All interactive elements need hover, focus-visible, active, and disabled treatment when applicable.
- Do not rely on hover to reveal essential information.
- Use native controls where possible.
- Respect `prefers-reduced-motion`.
- Keep core content readable when client-side JavaScript fails.

## Accessibility baseline

- Use semantic landmarks and one descriptive page-level heading.
- Keep heading hierarchy logical.
- Include a skip link on multi-section pages.
- Ensure keyboard access and visible focus.
- Meet practical WCAG 2.2 AA contrast targets; do not claim full compliance without testing.
- Use descriptive alt text for informative images and empty alt text for decoration.
- Do not use color as the only status indicator.
- Give external links names that explain their destination.

## Visual inspection

Inspect at least:

- a narrow mobile viewport;
- a typical desktop viewport;
- open and closed navigation states when a menu exists;
- Home, About, Blog listing, and one article;
- keyboard focus and reduced-motion behavior;
- empty states and missing optional images.

Fix broken hierarchy, overlap, clipping, low contrast, layout shift, and content overflow before delivery.
