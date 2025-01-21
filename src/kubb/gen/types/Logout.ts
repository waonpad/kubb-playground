import type { BaseError } from "./BaseError.ts";

export type Logout204 = unknown;

export type Logout401 = BaseError;

export type Logout500 = BaseError;

export type LogoutMutationResponse = Logout204;

export type LogoutMutation = {
  Response: Logout204;
  Errors: Logout401 | Logout500;
};
