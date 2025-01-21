import client from "@kubb/plugin-client/clients/fetch";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/fetch";
import type { Login401, Login422, Login500, LoginMutationRequest, LoginMutationResponse } from "../types/Login.ts";
import { loginMutationResponseSchema } from "../zod/loginSchema.ts";

export function getLoginUrl() {
  return `${process.env.API_URL}/login` as const;
}

/**
 * {@link /login}
 */
export async function login(
  { data }: { data: LoginMutationRequest },
  config: Partial<RequestConfig<LoginMutationRequest>> = {},
) {
  const res = await client<
    LoginMutationResponse,
    ResponseErrorConfig<Login401 | Login422 | Login500>,
    LoginMutationRequest
  >({
    method: "POST",
    url: getLoginUrl().toString(),
    data,
    ...config,
  });
  return loginMutationResponseSchema.parse(res.data);
}
