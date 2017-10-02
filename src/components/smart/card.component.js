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
    this.taskList = [];
    this.setDefaultTaskList();
  }

  /**
   * Generate init values
   *
   * @returns {void}
   */
  setDefaultTaskList() {
    const taskList = [
      new Task('prif', 'che del', this.deleteTaskListItem.bind(this), this.rerender.bind(this)),
      new Task('vilkoi', 'v glaz', this.deleteTaskListItem.bind(this), this.rerender.bind(this)),
      new Task('v popu', 'raz', this.deleteTaskListItem.bind(this), this.rerender.bind(this)),
    ];
    taskList.map((task) => {this.taskList.push(task); this.childList.push(task)});
  }

  /**
   *
   * @return {string}
   */
  getTaskListTemplate() {
    const incmplTasksTemplate = this.taskList.filter(task => task.isCompleted === false)
      .map(task => this.createRootTag(task)).join('');
    const cmplTasksTemplate = this.taskList.filter(task => task.isCompleted === true)
      .map(task => this.createRootTag(task)).join('');

    return `${incmplTasksTemplate}${cmplTasksTemplate}`;
  }

  /**
   *
   * @param {Task} task
   *
   * @returns {void}
   */
  deleteTaskListItem(task) {
    this.childList = this.childList.filter(elem => elem !== task);
    this.taskList = this.taskList.filter(elem => elem !== task);
  }

  /**
   *
   * @returns {void}
   */
  addTask() {
    const task = new Task('', '', this.deleteTaskListItem.bind(this), this.rerender.bind(this));
    this.childList.push(task);
    this.taskList.push(task);

    this.rerender();
  }

  /**
   *
   * @returns {void}
   */
  addHandlers() {
    const addBtnRef = this.elemRef.querySelector(`[${this.controlList['add-btn']}]`);
    addBtnRef.addEventListener('click', this.addTask.bind(this));
  }

  rerender() {
    this.render().addHandlers();
  }

  /**
   *
   * @returns {string}
   */
  getTemplate() {
    return `
      <h2 class="title card__title">${this.name}</h2>
      <div class="card__content">
        ${this.getTaskListTemplate()}
      </div>
      <button type="button" class="add-button" ${this.createControl('add-btn')}>Add element...</button>
  `;
  }
}

