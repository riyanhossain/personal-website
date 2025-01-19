import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import * as constants from "@/constants";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: constants.SITE_TITLE,
    description: constants.SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
