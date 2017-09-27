export class AppBuilder {
  build(component, elemRef) {
    elemRef.setAttribute(component.hash, '');
    component.render();
  }
}
