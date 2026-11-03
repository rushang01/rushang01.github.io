import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // Files starting with an underscore, like _template.mdx, are ignored.
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(160),
    kind: z.enum(['Course project', 'Personal project', 'Open source', 'Work']),
    context: z.string(),
    period: z.string(),
    role: z.string(),
    stack: z.array(z.string()).min(1),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    archive: z.boolean().default(false),
    draft: z.boolean().default(false),
    cover: z.enum(['auto', 'plot', 'redaction', 'flow']).default('auto'),
    results: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    links: z
      .object({
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
        report: z.string().optional(),
      })
      .default({}),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    kind: z.string().default('Post'),
    file: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
