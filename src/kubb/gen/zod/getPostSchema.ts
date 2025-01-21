import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";
import { postResourceSchema } from "./postResourceSchema.ts";
import { showPostRequestPathValidationErrorSchema } from "./showPostRequestPathValidationErrorSchema.ts";

export const getPostPathParamsSchema = z.object({
  id: z.string(),
});

export const getPost200Schema = z.lazy(() => postResourceSchema);

export const getPost400Schema = z.lazy(() => showPostRequestPathValidationErrorSchema);

export const getPost500Schema = z.lazy(() => baseErrorSchema);

export const getPostQueryResponseSchema = z.lazy(() => getPost200Schema);
