export type DestroyPostRequestPathValidationError = {
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
