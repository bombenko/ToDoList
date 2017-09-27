import { ComponentService } from '../services/component.service';

export class Component {
  constructor() {
    this.hash = new ComponentService().generateHash();
    this.componentName = 'comp';
    this.childList = [];
    this.elemRef = null;
  }

  createChild(component) {
    this.childList.push(component);
    return this.createRootTag(component);
  }

  createRootTag(component) {
    return `<${component.componentName} ${component.hash}></${component.componentName}>`;
  }

  getElemRef() {
    if (!this.elemRef) {
      this.elemRef = document.querySelector(`[${this.hash}]`);
    }

    return this.elemRef;
  }

  getDomElem() {
    const elem = document.createElement(this.componentName);
    elem.innerHTML = this.getTemplate();
    elem.setAttribute(this.hash, '');
    elem.className += this.componentName;

    return elem;
  }

  render() {
    this.getElemRef().replaceWith(this.getDomElem());
    this.childList.forEach(child => child.render());
  }

  getTemplate() { }
}
