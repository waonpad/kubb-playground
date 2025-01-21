import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";
import { indexPostRequestQueryValidationErrorSchema } from "./indexPostRequestQueryValidationErrorSchema.ts";
import { postCollectionSchema } from "./postCollectionSchema.ts";

export const getPostsQueryParamsSchema = z
  .object({
    page: z.number().int().optional(),
  })
  .optional();

export const getPosts200Schema = z.lazy(() => postCollectionSchema);

export const getPosts400Schema = z.lazy(() => indexPostRequestQueryValidationErrorSchema);

export const getPosts500Schema = z.lazy(() => baseErrorSchema);

export const getPostsQueryResponseSchema = z.lazy(() => getPosts200Schema);
