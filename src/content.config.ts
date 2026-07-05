import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: '**/index.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(140),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()).min(1),
      date: z.date(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      role: z.string().optional(),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
    }),
});

export const collections = { projects };
