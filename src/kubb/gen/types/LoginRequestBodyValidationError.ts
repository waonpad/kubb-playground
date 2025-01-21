export type LoginRequestBodyValidationError = {
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
    email?: string;
    /**
     * @type string | undefined
     */
    password?: string;
  };
};
