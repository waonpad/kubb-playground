import { z } from "zod";

export const postResourceSchema = z.object({
  id: z.number().int(),
  content: z.string(),
  userId: z.number().int(),
});
