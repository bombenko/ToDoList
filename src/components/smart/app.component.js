import { Component } from '../component';
import { Card } from './card.component';

export class App extends Component {
  constructor() {
    super();
    this.componentName = 'app';
  }

  /**
   *
   * @returns {string}
   */
  getTemplate() {
    return `
      <div class="header">
        <div class="main-container">
          <h1 class="header__title">Get it done</h1>
        </div>
      </div>
      <main class="content">
        <div class="main-container">
        ${this.createChild(new Card('Monday'))}
        ${this.createChild(new Card('Tuesday'))}
      </main>
  `;
  }
}
