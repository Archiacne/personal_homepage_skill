# Personal homepage starter

This starter is copied and customized by the `personal-homepage-builder` skill when a new project has no user-selected stack.

## Before publishing

1. Replace all placeholder profile text in `src/data/site.ts` with confirmed user content.
2. Add a real GitHub URL or leave it empty so the navigation item stays hidden.
3. Replace or remove both sample Blog posts.
4. Review the GitHub Profile README in `deliverables/github-profile/README.md`.
5. Set `SITE_URL` and, for a GitHub Pages project repository, `BASE_PATH` during the production build.
6. Run `npm run build` and inspect both mobile and desktop pages.

## Commands

```text
npm install
npm run dev
npm run check
npm run build
npm run audit
npm run validate
npm run preview
```

Example GitHub Pages project build:

```text
SITE_URL=https://username.github.io BASE_PATH=/repository-name npm run build
```

`npm run validate` performs the type/content checks, production build, and a static audit of page metadata, landmarks, headings, image alt text, and internal links.

## GitHub Pages

The starter includes `.github/workflows/deploy.yml`. After the project is pushed to its own GitHub repository, configure Pages to use **GitHub Actions** as the source. The workflow reads the repository's actual Pages origin and base path, validates the site, and deploys `dist`.

Do not enable or run a public deployment until all placeholders, sample posts, and private content have been reviewed.
