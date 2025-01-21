import { z } from "zod";

export const userResourceSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().email(),
  emailVerifiedAt: z.string(),
});
