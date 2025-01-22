import type { HeaderItem, SocialItem, TechStack } from "@/types";
import {
  GITHUB_LINK,
  TWITTER_LINK,
  EMAIL_LINK,
  LINKEDIN_LINK,
} from "@/constants";

export const HeaderItems = [
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
] as HeaderItem[];

export const SocialItems = [
  {
    link: GITHUB_LINK,
    icon: "ic-github",
    title: "GitHub",
  },
  {
    link: TWITTER_LINK,
    icon: "ic-twitter",
    title: "Twitter",
  },
  {
    link: LINKEDIN_LINK,
    icon: "ic-linkedin",
    title: "LinkedIn",
  },
  {
    link: EMAIL_LINK,
    icon: "ic-mail",
    title: "Email",
  },
] as SocialItem[];

export const TechStacks = [
  {
    title: "Frontend",
    icon: "ic-frontend",
    skills: [
      {
        name: "React",
        icon: "ic-react",
      },
      {
        name: "Next JS",
        icon: "ic-nextjs",
      },
      {
        name: "Vue",
        icon: "ic-vue",
      },
      {
        name: "Nuxt JS",
        icon: "ic-nuxtjs",
      },
      {
        name: "Astro",
        icon: "ic-astro",
      },
      {
        name: "TailwindCSS",
        icon: "ic-tailwindcss",
      },
      {
        name: "JavaScript",
        icon: "ic-javascript",
      },
      {
        name: "TypeScript",
        icon: "ic-typescript",
      },
    ],
  },
  {
    title: "Backend",
    icon: "ic-backend",
    skills: [
      {
        name: "Node JS",
        icon: "ic-nodejs",
      },
      {
        name: "ExpressJS",
        icon: "ic-express",
      },
      {
        name: "Hono",
        icon: "ic-hono",
      },
    ],
  },
  {
    title: "Database",
    icon: "ic-database",
    skills: [
      {
        name: "MongoDB",
        icon: "ic-mongodb",
      },
      {
        name: "MySQL",
        icon: "ic-mysql",
      },
      {
        name: "PostgreSQL",
        icon: "ic-postgres",
      },
      {
        name: "mongoose",
        icon: "ic-mongoose",
      },
      // {
      //   name: "SqLite",
      //   icon: "ic-sqlite",
      // },
      // {
      //   name: "Drizzle",
      //   icon: "ic-drizzle",
      // },
      {
        name: "prisma",
        icon: "ic-prisma",
      },
    ],
  },
  {
    title: "DevOps",
    icon: "ic-devops",
    skills: [
      {
        name: "Docker",
        icon: "ic-docker",
      },
      {
        name: "AWS",
        icon: "ic-aws",
      },
      {
        name: "Git",
        icon: "ic-git",
      },
    ],
  },
  {
    title: "Tools",
    icon: "ic-tools",
    skills: [
      {
        name: "VS Code",
        icon: "ic-vscode",
      },
      {
        name: "Postman",
        icon: "ic-postman",
      },
      {
        name: "Figma",
        icon: "ic-figma",
      },
    ],
  },
  {
    title: "Others",
    icon: "ic-others",
    skills: [
      {
        name: "GraphQL",
        icon: "ic-graphql",
      },
      // {
      //   name: "REST API",
      //   icon: "ic-restapi",
      // },
      {
        name: "Supabase",
        icon: "ic-supabase",
      },
      {
        name: "Convex",
        icon: "ic-convex",
      },
      {
        name: "Storybook",
        icon: "ic-storybook",
      },
      {
        name: "StoryBlok",
        icon: "ic-storyblok",
      },
      {
        name: "Strapi",
        icon: "ic-strapi",
      },
    ],
  },
] as TechStack[];
