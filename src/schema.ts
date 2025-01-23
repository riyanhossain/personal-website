import { z } from "astro:content";

export const starSchema = z.object({
  stargazers_count: z.number(),
});
