import type { BaseError } from "./BaseError.ts";
import type { PostResource } from "./PostResource.ts";
import type { UpdatePostRequest } from "./UpdatePostRequest.ts";
import type { UpdatePostRequestBodyValidationError } from "./UpdatePostRequestBodyValidationError.ts";
import type { UpdatePostRequestPathValidationError } from "./UpdatePostRequestPathValidationError.ts";

export type UpdatePostPathParams = {
  /**
   * @type string
   */
  id: string;
};

export type UpdatePost200 = PostResource;

export type UpdatePost400 = UpdatePostRequestPathValidationError;

export type UpdatePost401 = BaseError;

export type UpdatePost403 = BaseError;

export type UpdatePost422 = UpdatePostRequestBodyValidationError;

export type UpdatePost500 = BaseError;

export type UpdatePostMutationRequest = UpdatePostRequest;

export type UpdatePostMutationResponse = UpdatePost200;

export type UpdatePostMutation = {
  Response: UpdatePost200;
  Request: UpdatePostMutationRequest;
  PathParams: UpdatePostPathParams;
  Errors: UpdatePost400 | UpdatePost401 | UpdatePost403 | UpdatePost422 | UpdatePost500;
};
