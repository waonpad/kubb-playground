import client from "@kubb/plugin-client/clients/fetch";
import type { RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/fetch";
import type {
  DeletePost400,
  DeletePost401,
  DeletePost403,
  DeletePost500,
  DeletePostMutationResponse,
  DeletePostPathParams,
} from "../types/DeletePost.ts";
import { deletePostMutationResponseSchema } from "../zod/deletePostSchema.ts";

export function getDeletePostUrl({ id }: { id: DeletePostPathParams["id"] }) {
  return `${process.env.API_URL}/posts/${id}` as const;
}

/**
 * @summary Remove the specified resource from storage.
 * {@link /posts/:id}
 */
export async function deletePost({ id }: { id: DeletePostPathParams["id"] }, config: Partial<RequestConfig> = {}) {
  const res = await client<
    DeletePostMutationResponse,
    ResponseErrorConfig<DeletePost400 | DeletePost401 | DeletePost403 | DeletePost500>,
    unknown
  >({
    method: "DELETE",
    url: getDeletePostUrl({ id }).toString(),
    ...config,
  });
  return deletePostMutationResponseSchema.parse(res.data);
}
