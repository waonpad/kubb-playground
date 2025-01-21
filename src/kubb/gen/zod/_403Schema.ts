import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";

export const _403Schema = z.lazy(() => baseErrorSchema);
