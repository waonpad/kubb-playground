import { z } from "zod";

export const baseErrorSchema = z.object({
  message: z.string(),
});
