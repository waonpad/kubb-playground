import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";

export const _401Schema = z.lazy(() => baseErrorSchema);
