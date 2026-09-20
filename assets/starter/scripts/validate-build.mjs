import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const distRoot = join(projectRoot, "dist");
const basePath = normalizeBase(process.env.BASE_PATH ?? "");

function normalizeBase(value) {
  if (!value || value === "/") return "";
  return `/${value.replace(/^\/+|\/+$/g, "")}`;
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function routeForFile(file) {
  const normalized = relative(distRoot, file).split(sep).join("/");
  if (normalized === "index.html") return "/";
  if (normalized.endsWith("/index.html")) return `/${normalized.slice(0, -"index.html".length)}`;
  return `/${normalized}`;
}

function localPathForHref(href, currentRoute) {
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("data:") ||
    href.startsWith("javascript:") ||
    href.startsWith("//") ||
    /^https?:\/\//i.test(href)
  ) {
    return undefined;
  }

  const pathname = new URL(href, `https://local.invalid${basePath}${currentRoute}`).pathname;
  if (basePath && pathname !== basePath && !pathname.startsWith(`${basePath}/`)) {
    return { error: `internal URL does not include configured base ${basePath}: ${href}` };
  }

  const withoutBase = basePath ? pathname.slice(basePath.length) || "/" : pathname;
  return { pathname: withoutBase };
}

function outputTarget(pathname) {
  const relativePath = pathname.replace(/^\//, "");
  if (!relativePath || pathname.endsWith("/")) return join(distRoot, relativePath, "index.html");
  if (extname(pathname)) return join(distRoot, relativePath);
  return join(distRoot, relativePath, "index.html");
}

if (!existsSync(distRoot)) {
  console.error("Build output not found. Run `npm run build` first.");
  process.exit(1);
}

const htmlFiles = walk(distRoot).filter((file) => file.endsWith(".html"));
const failures = [];
let checkedLinks = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const route = routeForFile(file);
  const label = relative(distRoot, file).split(sep).join("/");

  if (!/<html\s[^>]*lang="[^"]+"/i.test(html)) failures.push(`${label}: missing html lang`);
  if (!/<title>[^<]+<\/title>/i.test(html)) failures.push(`${label}: missing non-empty title`);
  if (!/<meta\s[^>]*name="description"[^>]*content="[^"]+"/i.test(html)) {
    failures.push(`${label}: missing non-empty meta description`);
  }
  if (!/<main(?:\s|>)/i.test(html)) failures.push(`${label}: missing main landmark`);

  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
  if (h1Count !== 1) failures.push(`${label}: expected one h1, found ${h1Count}`);

  for (const image of html.match(/<img\b[^>]*>/gi) ?? []) {
    if (!/\salt=("[^"]*"|'[^']*')/i.test(image)) failures.push(`${label}: img missing alt`);
  }

  for (const match of html.matchAll(/\shref=(?:"([^"]*)"|'([^']*)')/gi)) {
    const href = match[1] ?? match[2];
    const result = localPathForHref(href, route);
    if (!result) continue;
    checkedLinks += 1;

    if (result.error) {
      failures.push(`${label}: ${result.error}`);
      continue;
    }

    const target = outputTarget(result.pathname);
    if (!existsSync(target)) failures.push(`${label}: broken internal link ${href}`);
  }
}

if (failures.length > 0) {
  console.error(`Build audit failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Build audit passed: ${htmlFiles.length} HTML pages and ${checkedLinks} internal links checked.`);
