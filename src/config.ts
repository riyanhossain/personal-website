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
  }
] as SocialItem[];
