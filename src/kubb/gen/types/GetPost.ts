import type { BaseError } from "./BaseError.ts";
import type { PostResource } from "./PostResource.ts";
import type { ShowPostRequestPathValidationError } from "./ShowPostRequestPathValidationError.ts";

export type GetPostPathParams = {
  /**
   * @type string
   */
  id: string;
};

export type GetPost200 = PostResource;

export type GetPost400 = ShowPostRequestPathValidationError;

export type GetPost500 = BaseError;

export type GetPostQueryResponse = GetPost200;

export type GetPostQuery = {
  Response: GetPost200;
  PathParams: GetPostPathParams;
  Errors: GetPost400 | GetPost500;
};
