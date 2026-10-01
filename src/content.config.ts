import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['shoes', 'merch', 'training']),
    tags: z.array(z.string()),
    readingTime: z.string(),
    featured: z.boolean().default(false),
    author: z.string().default('Stride Guide editorial team')
  })
});

export const collections = { articles };
