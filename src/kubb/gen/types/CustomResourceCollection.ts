export type CustomResourceCollection = {
  /**
   * @type object
   */
  links: {
    /**
     * @type string, uri
     */
    first: string;
    /**
     * @type string, uri
     */
    last: string;
    /**
     * @type string,null, uri
     */
    prev: string | null;
    /**
     * @type string,null, uri
     */
    next: string | null;
  };
  /**
   * @type object
   */
  meta: {
    /**
     * @type integer
     */
    currentPage: number;
    /**
     * @type integer
     */
    from: number;
    /**
     * @type integer
     */
    lastPage: number;
    /**
     * @type array
     */
    links: {
      /**
       * @type string,null, uri
       */
      url: string | null;
      /**
       * @type string
       */
      label: string;
      /**
       * @type boolean
       */
      active: boolean;
    }[];
    /**
     * @type string, uri
     */
    path: string;
    /**
     * @type integer
     */
    perPage: number;
    /**
     * @type integer
     */
    to: number;
    /**
     * @type integer
     */
    total: number;
  };
};
