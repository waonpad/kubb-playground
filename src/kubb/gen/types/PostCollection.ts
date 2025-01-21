import type { CustomResourceCollection } from "./CustomResourceCollection.ts";
import type { PostResource } from "./PostResource.ts";

export type PostCollection = CustomResourceCollection & {
  /**
   * @type array | undefined
   */
  data?: PostResource[];
};
