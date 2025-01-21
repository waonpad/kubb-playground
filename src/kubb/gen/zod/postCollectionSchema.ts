import { z } from "zod";
import { customResourceCollectionSchema } from "./customResourceCollectionSchema.ts";
import { postResourceSchema } from "./postResourceSchema.ts";

export const postCollectionSchema = z
  .lazy(() => customResourceCollectionSchema)
  .and(
    z.object({
      data: z.array(z.lazy(() => postResourceSchema)).optional(),
    }),
  );
