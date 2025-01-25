import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";

export const forbiddenSchema = z.lazy(() => baseErrorSchema);
