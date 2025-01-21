import { z } from "zod";

export const updatePostRequestBodyValidationErrorSchema = z.object({
  message: z.string(),
  errors: z.object({
    content: z.string().optional(),
  }),
});
