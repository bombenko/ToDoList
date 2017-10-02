import { HashGenerator } from '../services/hash-generator.service';

export class Component {
  constructor() {
    const componentService = new HashGenerator();
    this.hash = componentService.generateHash();
    this.generateCtrlHash = componentService.generateCtrlHash(this.hash);
    this.componentName = 'comp';
    this.childList = [];
    this.controlList = {};
    this.elemRef = null;
  }

  /**
   *
   * @param {Component} component
   * @returns {string}
   */
  createChild(component) {
    this.childList.push(component);

    return this.createRootTag(component);
  }

  /**
   *
   * @param {string} ctrlName
   * @returns {string}
   */
  createControl(ctrlName) {
    const ctrlHash = this.generateCtrlHash();
    this.controlList[ctrlName] = ctrlHash;

    return `${ctrlHash}`;
  }

  /**
   *
   * @param {Component} component
   * @returns {string}
   */
  createRootTag(component) {
    return `<${component.componentName} ${component.hash} class=${component.componentName}></${component.componentName}>`;
  }

  /**
   *
   * @returns {Component}
   */
  attach() {
    this.elemRef = document.querySelector(`[${this.hash}]`);

    return this;
  }

  /**
   *
   * @returns {void}
   */
  renderChildren() {
    this.childList.forEach(child => child
      .attach()
      .render()
      .addHandlers());
  }

  /**
   *
   * @returns {Component}
   */
  render() {
    this.elemRef.innerHTML = this.getTemplate();
    this.renderChildren();

    return this;
  }

  /**
   * Method to override
   */
  getTemplate() { }

  /**
   * Method to override
   */
  addHandlers() { }
}
