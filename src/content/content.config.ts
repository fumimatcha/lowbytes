import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(), 
    tags: z.array(z.string()).default([]),
     cover: z
      .object({
        src: image(),
        alt: z.string(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
