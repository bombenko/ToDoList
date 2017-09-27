import { ComponentService } from '../services/component.service';

export class Component {
  constructor() {
    this.hash = new ComponentService().generateHash();
    this.componentName = 'comp';
    this.childList = [];
  }

  createChild(component) {
    this.childList.push(component);
    return this.createRootTag(component);
  }

  createRootTag(component) {
    return `<${component.componentName} ${component.hash}></${component.componentName}>`;
  }

  getDomElem() {
    const elem = document.createElement(this.componentName);
    elem.innerHTML = this.getTemplate();
    elem.setAttribute(this.hash, '');
    elem.className += this.componentName;

    return elem;
  }

  render() {
    document.querySelector(`[${this.hash}]`).replaceWith(this.getDomElem());
    this.childList.forEach(child => child.render());
  }


  getTemplate() { }
}
