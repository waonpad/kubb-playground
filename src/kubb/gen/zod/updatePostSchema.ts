import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";
import { postResourceSchema } from "./postResourceSchema.ts";
import { updatePostRequestBodyValidationErrorSchema } from "./updatePostRequestBodyValidationErrorSchema.ts";
import { updatePostRequestPathValidationErrorSchema } from "./updatePostRequestPathValidationErrorSchema.ts";
import { updatePostRequestSchema } from "./updatePostRequestSchema.ts";

export const updatePostPathParamsSchema = z.object({
  id: z.string(),
});

export const updatePost200Schema = z.lazy(() => postResourceSchema);

export const updatePost400Schema = z.lazy(() => updatePostRequestPathValidationErrorSchema);

export const updatePost401Schema = z.lazy(() => baseErrorSchema);

export const updatePost403Schema = z.lazy(() => baseErrorSchema);

export const updatePost422Schema = z.lazy(() => updatePostRequestBodyValidationErrorSchema);

export const updatePost500Schema = z.lazy(() => baseErrorSchema);

export const updatePostMutationRequestSchema = z.lazy(() => updatePostRequestSchema);

export const updatePostMutationResponseSchema = z.lazy(() => updatePost200Schema);
