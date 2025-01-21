import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";

export const _500Schema = z.lazy(() => baseErrorSchema);
