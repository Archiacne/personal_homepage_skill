# Deployment

Read this guide only when the user asks to publish, deploy, host, connect a domain, or prepare a deployment configuration.

Local delivery is the default. Creating a website does not imply permission to create a remote repository, push code, enable Pages, change DNS, or deploy.

## Before publishing

Confirm:

- the exact repository and branch;
- whether an existing remote site or workflow will be replaced;
- the desired provider;
- whether a custom domain already exists;
- which profile, contact, sample, draft, and private content is allowed to be public;
- any required public environment variables.

Run the full local validation first. Do not publish starter placeholders or sample articles as personal facts.

## GitHub Pages default

For a new static site with no selected provider, recommend GitHub Pages. The bundled starter contains `.github/workflows/deploy.yml`, which:

- installs with the committed npm lockfile;
- reads the repository's Pages origin and base path;
- runs the full build and static audit;
- uploads the `dist` artifact;
- deploys it with the official Pages action.

Before the first deployment, the repository owner must configure GitHub Pages to use GitHub Actions as its source. Do not change repository settings without the user's request and authorization.

The default workflow is intended for GitHub.com. Re-check action and runner compatibility before using GitHub Enterprise Server.

After pushing the workflow:

1. Wait for the workflow result.
2. Inspect failed build or Pages configuration output before retrying.
3. Open the reported public URL.
4. Test Home, About, Blog, an article, assets, and 404 behavior.
5. Report deployment complete only when the public URL is reachable.

## Vercel

For a static Astro site:

- connect the user's repository only when requested;
- use `npm run build` or `npm run validate` as the build command;
- use `dist` as the output directory;
- set `SITE_URL` to the production origin;
- leave `BASE_PATH` empty unless the deployment genuinely uses a subpath;
- do not add the Vercel adapter unless on-demand rendering is required.

Verify both the preview and production URLs, and identify which one is being handed off.

## Netlify

For a static Astro site:

- use `npm run build` or `npm run validate` as the build command;
- publish `dist`;
- set `SITE_URL` to the production origin;
- leave `BASE_PATH` empty for a normal root deployment;
- do not add the Netlify adapter unless on-demand rendering is required.

## Custom domains

Do not buy a domain or edit DNS without an explicit request. When a custom domain is in scope:

- distinguish registrar, DNS provider, and hosting provider;
- show the exact records required by the selected host;
- avoid deleting unrelated DNS records;
- account for DNS propagation;
- re-run canonical and absolute URL checks after the domain is active.

## Failure handling

- Authentication failure: stop and request the required user action or connection.
- Pages not enabled: report the exact repository setting required.
- Build failure: fix locally before another deployment attempt.
- DNS pending: report the current verified state; do not claim completion.
- Existing production conflict: do not overwrite until the user confirms the target.
- Repeated provider failure: stop after the concrete cause is established rather than retrying unchanged actions.
