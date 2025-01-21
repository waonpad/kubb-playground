import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";
import { postResourceSchema } from "./postResourceSchema.ts";
import { storePostRequestBodyValidationErrorSchema } from "./storePostRequestBodyValidationErrorSchema.ts";
import { storePostRequestSchema } from "./storePostRequestSchema.ts";

export const createPost201Schema = z.lazy(() => postResourceSchema);

export const createPost401Schema = z.lazy(() => baseErrorSchema);

export const createPost403Schema = z.lazy(() => baseErrorSchema);

export const createPost422Schema = z.lazy(() => storePostRequestBodyValidationErrorSchema);

export const createPost500Schema = z.lazy(() => baseErrorSchema);

export const createPostMutationRequestSchema = z.lazy(() => storePostRequestSchema);

export const createPostMutationResponseSchema = z.lazy(() => createPost201Schema);
