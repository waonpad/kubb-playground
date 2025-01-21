import { z } from "zod";

export const storePostRequestBodyValidationErrorSchema = z.object({
  message: z.string(),
  errors: z.object({
    content: z.string().optional(),
  }),
});
