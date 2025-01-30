import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content", // This is important!
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      formattedDate: z.string(),
      description: z.string(),
      coverImage: image().optional(),
      readingTime: z.number(),
      tags: z.array(z.string()).optional(),
      featuredMessage: z.string().optional(),
    }),
});

const timeline = defineCollection({
  type: "content", // This is important!
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      formattedDate: z.string(),
      description: z.string().optional(), // optional
      coverImage: image().optional(), // optional
      readingTime: z.number(),
      tags: z.array(z.string()).optional(), // optional
      featuredMessage: z.string().optional(), // optional
    }),
});

const legal = defineCollection({
  type: "content", // This is important!
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      formattedDate: z.string(),
      description: z.string().optional(), // optional
      coverImage: image().optional(), // optional
      readingTime: z.number(),
      tags: z.array(z.string()).optional(), // optional
      featuredMessage: z.string().optional(), // optional
    }),
});

export const collections = {
  blog,
  timeline,
  legal,
};
