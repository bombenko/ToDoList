export class AppBuilder {
  /**
   *
   * @param {Component} component
   * @param (HTMLElement) elemRef
   *
   * @returns {void}
   */
  build(component, elemRef) {
    elemRef.setAttribute(component.hash, '');
    component.attach().render();
  }
}
