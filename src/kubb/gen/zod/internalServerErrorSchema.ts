import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";

export const internalServerErrorSchema = z.lazy(() => baseErrorSchema);
