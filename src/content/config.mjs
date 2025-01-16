import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content", // This is important!
  schema: z.object({
    title: z.string(),
    date: z.string(),
    formattedDate: z.string(),
    description: z.string(),
    readingTime: z.number(),
    tags: z.array(z.string()),
  }),
});

const timeline = defineCollection({
  type: "content", // This is important!
  schema: z.object({
    title: z.string(),
    date: z.string(),
    formattedDate: z.string(),
    description: z.string(),
    readingTime: z.number(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
  timeline,
};
