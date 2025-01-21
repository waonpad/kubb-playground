import client from "@kubb/plugin-client/clients/fetch";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/fetch";
import type { Logout401, Logout500, LogoutMutationResponse } from "../types/Logout.ts";
import { logoutMutationResponseSchema } from "../zod/logoutSchema.ts";

export function getLogoutUrl() {
  return `${process.env.API_URL}/logout` as const;
}

/**
 * {@link /logout}
 */
export async function logout(config: Partial<RequestConfig> = {}) {
  const res = await client<LogoutMutationResponse, ResponseErrorConfig<Logout401 | Logout500>, unknown>({
    method: "POST",
    url: getLogoutUrl().toString(),
    ...config,
  });
  return logoutMutationResponseSchema.parse(res.data);
}
