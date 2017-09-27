import { Task } from './task.component';
import { Component } from '../component';

export class Card extends Component {
  /**
   *
   * @param {string} name
   */
  constructor(name) {
    super();
    this.componentName = 'card';
    this.name = name;
  }

  /**
   *
   * @param {Task} task
   *
   * @returns {void}
   */
  deleteListItem(task) {
    this.childList = this.childList.filter(elem => elem !== task);
  }

  /**
   *
   * @returns {string}
   */
  getTemplate() {
    return `
      <h2 class="title card__title">${this.name}</h2>
      <div class="card__content">
        ${this.createChild(new Task('prif', 'che del', this.deleteListItem))}
        ${this.createChild(new Task('vilkoi', 'v glaz', this.deleteListItem))}
        ${this.createChild(new Task('v popu', 'raz', this.deleteListItem))}
      </div>
      <button type="button" class="add-button">Add element...</button>
  `;
  }
}

