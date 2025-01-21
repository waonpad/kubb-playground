import { z } from "zod";

export const indexPostRequestQueryValidationErrorSchema = z.object({
  message: z.string(),
  errors: z.object({
    "query.page": z.string().optional(),
  }),
});
