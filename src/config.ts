import type { HeaderItem, SocialItem } from "@/types";
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
    icon: "github",
    title: "GitHub",
  },
  {
    link: TWITTER_LINK,
    icon: "twitter",
    title: "Twitter",
  },
  {
    link: LINKEDIN_LINK,
    icon: "linkedin",
    title: "LinkedIn",
  },
  {
    link: EMAIL_LINK,
    icon: "email",
    title: "Email",
  },
] as SocialItem[];
