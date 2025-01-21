import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";
import { userResourceSchema } from "./userResourceSchema.ts";

export const getAuthUser200Schema = z.lazy(() => userResourceSchema);

export const getAuthUser401Schema = z.lazy(() => baseErrorSchema);

export const getAuthUser500Schema = z.lazy(() => baseErrorSchema);

export const getAuthUserQueryResponseSchema = z.lazy(() => getAuthUser200Schema);
