import { Component } from '../component';

export class Task extends Component {
  /**
   *
   * @param title
   * @param description
   * @param {Function(<Task>)} deleteListItem
   */
  constructor(title, description, deleteListItem) {
    super();
    this.componentName = 'task';
    this.title = title;
    this.description = description;
    this.createTime = new Date();
    this.isCompleted = false;
    this.deleteListItem = deleteListItem;
  }

  setCompleted() {
    this.isCompleted = true;
  }

  deleteTask() {
    this.deleteListItem(this);
  }

  /**
   *
   * @param {string} title
   * @param {string} description
   */
  editTask(title, description) {
    this.title = title;
    this.description = description;
  }

  getTemplate() {
    return `
      <input class="checkbox" id="${`${this.hash}-cbx`}" type="checkbox">
      <label for="${`${this.hash}-cbx`}" class="checkbox-label task__completed"></label>
      <div class="task__content">
        <h3 class="title task__title">${this.title}</h3>
        <p class="task__description">${this.description}</p>
      </div>
      <div class="task__btn-group">
        <button type="button" class="ctrl-btn task__del-btn">Delete</button>
        <button type="button" class="ctrl-btn task__edit-btn">Edit</button>
      </div>
  `;
  }
}
