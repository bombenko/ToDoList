let service = null;

export class ComponentService {
  constructor() {
    if (!service) {
      service = this;
    }

    this.componentNum = 0;

    return service;
  }

  generateHash() {
    this.componentNum += 1;

    return `c_${this.componentNum}`;
  }
}
