export type UpdatePostRequestBodyValidationError = {
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
    content?: string;
  };
};
