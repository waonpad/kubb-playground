import { z } from "zod";

export const updatePostRequestPathValidationErrorSchema = z.object({
  message: z.string(),
  errors: z.object({
    "path.id": z.string().optional(),
  }),
});
