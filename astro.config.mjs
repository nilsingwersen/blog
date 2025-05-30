// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",

  build: {
    format: "file",
  },

  site: "https://ingwersen.dev",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),
});