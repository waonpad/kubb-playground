import { z } from "zod";

export const loginRequestSchema = z.object({
  email: z.string(),
  password: z.string(),
});
