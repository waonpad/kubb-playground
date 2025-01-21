import client from "@kubb/plugin-client/clients/fetch";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/fetch";
import type { GetAuthUser401, GetAuthUser500, GetAuthUserQueryResponse } from "../types/GetAuthUser.ts";
import { getAuthUserQueryResponseSchema } from "../zod/getAuthUserSchema.ts";

export function getGetAuthUserUrl() {
  return `${process.env.API_URL}/me` as const;
}

/**
 * {@link /me}
 */
export async function getAuthUser(config: Partial<RequestConfig> = {}) {
  const res = await client<GetAuthUserQueryResponse, ResponseErrorConfig<GetAuthUser401 | GetAuthUser500>, unknown>({
    method: "GET",
    url: getGetAuthUserUrl().toString(),
    ...config,
  });
  return getAuthUserQueryResponseSchema.parse(res.data);
}
