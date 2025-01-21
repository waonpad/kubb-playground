export type IndexPostRequestQueryValidationError = {
  /**
   * @type string
   */
  message: string;
  /**
   * @type object
   */
  errors: {
    /**
     * @type string | undefined
     */
    "query.page"?: string;
  };
};
