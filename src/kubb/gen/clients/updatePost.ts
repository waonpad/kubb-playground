import client from "@kubb/plugin-client/clients/fetch";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/fetch";
import type {
  UpdatePost400,
  UpdatePost401,
  UpdatePost403,
  UpdatePost422,
  UpdatePost500,
  UpdatePostMutationRequest,
  UpdatePostMutationResponse,
  UpdatePostPathParams,
} from "../types/UpdatePost.ts";
import { updatePostMutationResponseSchema } from "../zod/updatePostSchema.ts";

export function getUpdatePostUrl({ id }: { id: UpdatePostPathParams["id"] }) {
  return `${process.env.API_URL}/posts/${id}` as const;
}

/**
 * @summary Update the specified resource in storage.
 * {@link /posts/:id}
 */
export async function updatePost(
  { id, data }: { id: UpdatePostPathParams["id"]; data: UpdatePostMutationRequest },
  config: Partial<RequestConfig<UpdatePostMutationRequest>> = {},
) {
  const res = await client<
    UpdatePostMutationResponse,
    ResponseErrorConfig<UpdatePost400 | UpdatePost401 | UpdatePost403 | UpdatePost422 | UpdatePost500>,
    UpdatePostMutationRequest
  >({ method: "PATCH", url: getUpdatePostUrl({ id }).toString(), data, ...config });
  return updatePostMutationResponseSchema.parse(res.data);
}
