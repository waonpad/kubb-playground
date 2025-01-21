import type { BaseError } from "./BaseError.ts";
import type { LoginRequest } from "./LoginRequest.ts";
import type { LoginRequestBodyValidationError } from "./LoginRequestBodyValidationError.ts";

export type Login200 = {
  /**
   * @type string | undefined
   */
  token?: string;
};

export type Login401 = BaseError;

export type Login422 = LoginRequestBodyValidationError;

export type Login500 = BaseError;

export type LoginMutationRequest = LoginRequest;

export type LoginMutationResponse = Login200;

export type LoginMutation = {
  Response: Login200;
  Request: LoginMutationRequest;
  Errors: Login401 | Login422 | Login500;
};
