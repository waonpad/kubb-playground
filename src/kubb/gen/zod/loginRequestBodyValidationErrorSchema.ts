import { z } from "zod";

export const loginRequestBodyValidationErrorSchema = z.object({
  message: z.string(),
  errors: z.object({
    email: z.string().optional(),
    password: z.string().optional(),
  }),
});
