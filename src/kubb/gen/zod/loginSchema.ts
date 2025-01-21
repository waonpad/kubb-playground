import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";
import { loginRequestBodyValidationErrorSchema } from "./loginRequestBodyValidationErrorSchema.ts";
import { loginRequestSchema } from "./loginRequestSchema.ts";

export const login200Schema = z.object({
  token: z.string().optional(),
});

export const login401Schema = z.lazy(() => baseErrorSchema);

export const login422Schema = z.lazy(() => loginRequestBodyValidationErrorSchema);

export const login500Schema = z.lazy(() => baseErrorSchema);

export const loginMutationRequestSchema = z.lazy(() => loginRequestSchema);

export const loginMutationResponseSchema = z.lazy(() => login200Schema);
