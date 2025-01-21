import type { BaseError } from "./BaseError.ts";
import type { UserResource } from "./UserResource.ts";

export type GetAuthUser200 = UserResource;

export type GetAuthUser401 = BaseError;

export type GetAuthUser500 = BaseError;

export type GetAuthUserQueryResponse = GetAuthUser200;

export type GetAuthUserQuery = {
  Response: GetAuthUser200;
  Errors: GetAuthUser401 | GetAuthUser500;
};
