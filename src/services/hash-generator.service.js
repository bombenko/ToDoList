let service = null;
const INIT_NUM = 0;

export class HashGenerator {
  /**
   * Realize Singleton pattern
   *
   * @returns {HashGenerator}
   */
  constructor() {
    if (!service) {
      service = this;
    }

    this.componentNum = INIT_NUM;

    return service;
  }

  /**
   *
   * @returns {string}
   */
  generateHash() {
    this.componentNum += 1;

    return `c-${this.componentNum}`;
  }

  /**
   *
   * @param {string} hash
   */
  generateCtrlHash(hash) {
    let ctrlNum = INIT_NUM;

    return function() {
      ctrlNum += 1;

      return `${hash}-ctrl-${ctrlNum}`;
    };
  }

}
