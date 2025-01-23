export type HeaderItem = {
  title: string;
  link: string;
};

export type SocialItem = {
  link: string;
  icon: string;
  title: string;
};

export type Stack = {
  name: string;
  icon: string;
};

export type TechStack = {
  title: string;
  icon: string;
  skills: Stack[];
};

export type Page = {
  params: {
    slug: string | undefined;
  };
};

export type Project = {
  title: string;
  description: string;
  techStacks: Stack[];
  link: string;
};
