import { z } from "zod";

export const storePostRequestSchema = z.object({
  content: z.string(),
});
