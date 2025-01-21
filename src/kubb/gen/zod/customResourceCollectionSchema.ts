import { z } from "zod";

export const customResourceCollectionSchema = z.object({
  links: z.object({
    first: z.string().url(),
    last: z.string().url(),
    prev: z.string().url().nullable(),
    next: z.string().url().nullable(),
  }),
  meta: z.object({
    currentPage: z.number().int(),
    from: z.number().int(),
    lastPage: z.number().int(),
    links: z.array(
      z.object({
        url: z.string().url().nullable(),
        label: z.string(),
        active: z.boolean(),
      }),
    ),
    path: z.string().url(),
    perPage: z.number().int(),
    to: z.number().int(),
    total: z.number().int(),
  }),
});
