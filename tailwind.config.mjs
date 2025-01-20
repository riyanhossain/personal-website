/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Berkeley Mono Variable", "monospace"],
        lexend: ["Lexend Giga", "sans-serif"],
      },
      // fontWeight: {
      //   normal: "100", // 400
      //   medium: "110", // 500
      //   semibold: "120", // 600
      //   bold: "130", // 700
      //   extrabold: "140", // 800
      //   black: "150", // 900
      // },
      typography: {
        DEFAULT: {
          css: {
            // this is to fix the rehypeAutolinkHeadings generated links inside headers
            "h1 a[linkedheading], h2 a[linkedheading], h3 a[linkedheading], h4 a[linkedheading], h5 a[linkedheading], h6 a[linkedheading]":
              {
                fontWeight: "inherit",
              },
            a: {
              fontWeight: "500",
            },
            strong: {
              fontWeight: "600",
            },
            "ol > li::marker": {
              fontWeight: "400",
            },
            dt: {
              fontWeight: "600",
            },
            blockquote: {
              fontWeight: "500",
            },
            h1: {
              fontWeight: "800",
            },
            "h1 strong": {
              fontWeight: "900",
            },
            h2: {
              fontWeight: "700",
            },
            "h2 strong": {
              fontWeight: "800",
            },
            h3: {
              fontWeight: "600",
            },
            "h3 strong": {
              fontWeight: "700",
            },
            h4: {
              fontWeight: "600",
            },
            "h4 strong": {
              fontWeight: "700",
            },
            kbd: {
              fontWeight: "500",
            },
            code: {
              fontWeight: "600",
            },
            pre: {
              fontWeight: "400",
            },
            "thread th": {
              fontWeight: "600",
            },
            "h1 a, h2 a, h3 a, h4 a, h5 a, h6 a": {
              textDecoration: "none",
            },
            "h1 a:hover::before, h2 a:hover::before, h3 a:hover::before, h4 a:hover::before, h5 a:hover::before, h6 a:hover::before":
              {
                content: '"#"',
                position: "absolute",
                transform: "translateX(-2rem)",
              },
            "h1, h2, h3, h4, h5, h6": {
              position: "relative",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
