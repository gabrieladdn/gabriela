import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";

const siteUrl =
  process.env.PUBLIC_SERVER_URL ||
  process.env.NEXT_PUBLIC_SERVER_URL ||
  "https://gabrielanunes.com.br";

export default defineConfig({
  site: siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl,
  output: "static",
  adapter: vercel(),
  integrations: [mdx()],
  build: {
    inlineStylesheets: "always",
  },
});
