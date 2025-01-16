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
    featuredMessage: z.string().optional(),
  }),
});

const timeline = defineCollection({
  type: "content", // This is important!
  schema: z.object({
    title: z.string(),
    date: z.string(),
    formattedDate: z.string(),
    description: z.string().optional(), // optional
    readingTime: z.number(),
    tags: z.array(z.string()),
    featuredMessage: z.string().optional(), // optional
  }),
});

export const collections = {
  blog,
  timeline,
};
