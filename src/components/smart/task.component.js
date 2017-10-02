import { Component } from '../component';

export class Task extends Component {
  /**
   *
   * @param title
   * @param description
   * @param {Function(<Task>)} deleteTaskListItem
   */
  constructor(title, description, deleteTaskListItem, cardRender) {
    super();
    this.componentName = 'task';
    this.title = title;
    this.description = description;
    this.isCompleted = false;
    this.deleteTaskListItem = deleteTaskListItem;
    this.cardRender = cardRender;
  }

  /**
   *
   * @returns {void}
   */
  setCompleted() {
    this.isCompleted = !this.isCompleted;
    this.cardRender();
  }

  /**
   *
   * @returns {void}
   */
  deleteTask() {
    this.deleteTaskListItem(this);
    this.elemRef.remove();
  }

  /**
   *
   * @param {string} title
   * @param {string} description
   */
  editTitle(e) {
    this.title = e.currentTarget.innerText;
  }

  editDescription(e) {
    this.description = e.currentTarget.innerText;
  }

  /**
   *
   * @returns {void}
   */
  addHandlers() {
    const delBtnRef = this.elemRef.querySelector(`[${this.controlList['del-btn']}]`);
    const titleRef = this.elemRef.querySelector(`[${this.controlList['edit-title']}]`);
    const descrRef = this.elemRef.querySelector(`[${this.controlList['edit-descr']}]`);
    const completedCbxRef = this.elemRef.querySelector(`[${this.controlList['completed-cbx']}]`);

    delBtnRef.addEventListener('click', this.deleteTask.bind(this));
    titleRef.addEventListener('blur', this.editTitle.bind(this));
    descrRef.addEventListener('blur', this.editDescription.bind(this));
    completedCbxRef.addEventListener('change', this.setCompleted.bind(this));
  }

  /**
   *
   * @returns {string}
   */
  getTemplate() {
    return `
      <input class="checkbox" id="${`${this.hash}-cbx`}" type="checkbox" ${this.createControl('completed-cbx')} ${this.isCompleted ? 'checked' : ''}>
      <label for="${`${this.hash}-cbx`}" class="checkbox-label task__completed"></label>
      <div class="task__content">
        <h3 class="title task__title" contenteditable="true" placeholder="Enter title..." ${this.createControl('edit-title')}>${this.title}</h3>
        <p class="task__description" contenteditable="true" placeholder="Note..." ${this.createControl('edit-descr')}>${this.description}</p>
      </div>
      <button type="button" class="ctrl-btn task__del-btn" ${this.createControl('del-btn')}>Delete</button>
  `;
  }
}
