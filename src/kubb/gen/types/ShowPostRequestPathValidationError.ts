export type ShowPostRequestPathValidationError = {
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
    "path.id"?: string;
  };
};
