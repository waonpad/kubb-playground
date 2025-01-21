import type { BaseError } from "./BaseError.ts";
import type { PostResource } from "./PostResource.ts";
import type { StorePostRequest } from "./StorePostRequest.ts";
import type { StorePostRequestBodyValidationError } from "./StorePostRequestBodyValidationError.ts";

export type CreatePost201 = PostResource;

export type CreatePost401 = BaseError;

export type CreatePost403 = BaseError;

export type CreatePost422 = StorePostRequestBodyValidationError;

export type CreatePost500 = BaseError;

export type CreatePostMutationRequest = StorePostRequest;

export type CreatePostMutationResponse = CreatePost201;

export type CreatePostMutation = {
  Response: CreatePost201;
  Request: CreatePostMutationRequest;
  Errors: CreatePost401 | CreatePost403 | CreatePost422 | CreatePost500;
};
