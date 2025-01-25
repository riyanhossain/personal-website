// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// import partytown from "@astrojs/partytown";

import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import icon from "astro-icon";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://riyan-one.vercel.app",

  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            linkedheading: true,
          },
        },
      ],
    ],
  },

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      extendMarkdownConfig: true,
    }), // partytown(),
    sitemap(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],

  output: "server",
  adapter: vercel({
    isr: {
      // caches all pages on first request and saves for 1 day
      expiration: 60 * 60 * 24,
    },
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 10,
  }),
});
