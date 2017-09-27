import { ComponentService } from '../services/component.service';

export class Component {
  constructor() {
    const componentService = new ComponentService();
    this.hash = componentService.generateHash();
    this.componentName = 'comp';
    this.childList = [];
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
    this.childList.forEach(child => child.attach().render());
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
}
