import type { BaseError } from "./BaseError.ts";
import type { DestroyPostRequestPathValidationError } from "./DestroyPostRequestPathValidationError.ts";

export type DeletePostPathParams = {
  /**
   * @type string
   */
  id: string;
};

export type DeletePost204 = unknown;

export type DeletePost400 = DestroyPostRequestPathValidationError;

export type DeletePost401 = BaseError;

export type DeletePost403 = BaseError;

export type DeletePost500 = BaseError;

export type DeletePostMutationResponse = DeletePost204;

export type DeletePostMutation = {
  Response: DeletePost204;
  PathParams: DeletePostPathParams;
  Errors: DeletePost400 | DeletePost401 | DeletePost403 | DeletePost500;
};
