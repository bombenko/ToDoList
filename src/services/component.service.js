let service = null;

export class ComponentService {
  /**
   * Realize Singleton pattern
   *
   * @returns {ComponentService}
   */
  constructor() {
    if (!service) {
      service = this;
    }

    const initComponentNum = 0;
    this.componentNum = initComponentNum;

    return service;
  }

  /**
   *
   * @returns {string}
   */
  generateHash() {
    this.componentNum += 1;

    return `c_${this.componentNum}`;
  }
}
