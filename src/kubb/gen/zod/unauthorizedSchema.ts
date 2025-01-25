import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";

export const unauthorizedSchema = z.lazy(() => baseErrorSchema);
