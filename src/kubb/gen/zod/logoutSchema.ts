import { z } from "zod";
import { baseErrorSchema } from "./baseErrorSchema.ts";

export const logout204Schema = z.unknown();

export const logout401Schema = z.lazy(() => baseErrorSchema);

export const logout500Schema = z.lazy(() => baseErrorSchema);

export const logoutMutationResponseSchema = z.lazy(() => logout204Schema);
