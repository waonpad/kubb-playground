import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";
import { destroyPostRequestPathValidationErrorSchema } from "./destroyPostRequestPathValidationErrorSchema.ts";

export const deletePostPathParamsSchema = z.object({
  id: z.string(),
});

export const deletePost204Schema = z.unknown();

export const deletePost400Schema = z.lazy(() => destroyPostRequestPathValidationErrorSchema);

export const deletePost401Schema = z.lazy(() => baseErrorSchema);

export const deletePost403Schema = z.lazy(() => baseErrorSchema);

export const deletePost500Schema = z.lazy(() => baseErrorSchema);

export const deletePostMutationResponseSchema = z.lazy(() => deletePost204Schema);
