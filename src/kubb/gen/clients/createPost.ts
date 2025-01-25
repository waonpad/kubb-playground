import client from "@kubb/plugin-client/clients/fetch";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/fetch";
import type {
  CreatePost401,
  CreatePost403,
  CreatePost422,
  CreatePost500,
  CreatePostMutationRequest,
  CreatePostMutationResponse,
} from "../types/CreatePost.ts";

export function getCreatePostUrl() {
  return `${process.env.API_URL}/posts` as const;
}

/**
 * @summary Store a newly created resource in storage.
 * {@link /posts}
 */
export async function createPost(
  { data }: { data: CreatePostMutationRequest },
  config: Partial<RequestConfig<CreatePostMutationRequest>> = {},
) {
  const res = await client<
    CreatePostMutationResponse,
    ResponseErrorConfig<CreatePost401 | CreatePost403 | CreatePost422 | CreatePost500>,
    CreatePostMutationRequest
  >({ method: "POST", url: getCreatePostUrl().toString(), data, ...config });
  return res;
}
