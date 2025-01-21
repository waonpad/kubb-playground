import { z } from "zod";

export const updatePostRequestSchema = z.object({
  content: z.string(),
});
