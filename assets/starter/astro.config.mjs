import { defineConfig } from "astro/config";

const site = process.env.SITE_URL;
const base = process.env.BASE_PATH;

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  ...(site ? { site } : {}),
  ...(base ? { base } : {}),
});
