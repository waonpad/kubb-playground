import client from "@kubb/plugin-client/clients/fetch";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/fetch";
import type { GetPost400, GetPost500, GetPostPathParams, GetPostQueryResponse } from "../types/GetPost.ts";

export function getGetPostUrl({ id }: { id: GetPostPathParams["id"] }) {
  return `${process.env.API_URL}/posts/${id}` as const;
}

/**
 * @summary Display the specified resource.
 * {@link /posts/:id}
 */
export async function getPost({ id }: { id: GetPostPathParams["id"] }, config: Partial<RequestConfig> = {}) {
  const res = await client<GetPostQueryResponse, ResponseErrorConfig<GetPost400 | GetPost500>, unknown>({
    method: "GET",
    url: getGetPostUrl({ id }).toString(),
    ...config,
  });
  return res;
}
