import type { BaseError } from "./BaseError.ts";
import type { IndexPostRequestQueryValidationError } from "./IndexPostRequestQueryValidationError.ts";
import type { PostCollection } from "./PostCollection.ts";

export type GetPostsQueryParams = {
  /**
   * @type integer | undefined
   */
  page?: number;
};

export type GetPosts200 = PostCollection;

export type GetPosts400 = IndexPostRequestQueryValidationError;

export type GetPosts500 = BaseError;

export type GetPostsQueryResponse = GetPosts200;

export type GetPostsQuery = {
  Response: GetPosts200;
  QueryParams: GetPostsQueryParams;
  Errors: GetPosts400 | GetPosts500;
};
