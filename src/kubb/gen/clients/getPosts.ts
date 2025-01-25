import client from "@kubb/plugin-client/clients/fetch";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/fetch";
import type { GetPosts400, GetPosts500, GetPostsQueryParams, GetPostsQueryResponse } from "../types/GetPosts.ts";

export function getGetPostsUrl() {
  return `${process.env.API_URL}/posts` as const;
}

/**
 * @summary Display a listing of the resource.
 * {@link /posts}
 */
export async function getPosts({ params }: { params?: GetPostsQueryParams }, config: Partial<RequestConfig> = {}) {
  const res = await client<GetPostsQueryResponse, ResponseErrorConfig<GetPosts400 | GetPosts500>, unknown>({
    method: "GET",
    url: getGetPostsUrl().toString(),
    params,
    ...config,
  });
  return res;
}
