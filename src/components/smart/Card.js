import { Task } from '../dump/Task';

export class Card {
  /**
   *
   * @param {string} name
   * @param {Array<Task>} taskList
   */
  constructor(name, taskList = []) {
    this.name = name;
    this.taskList = taskList;
  }

  /**
   *
   * @param {string} title
   * @param {string} description
   */
  createTask(title, description) {
    const task = new Task(title, description);
    this.taskList.push(task);
  }

  /**
   *
   * @param {Task} task
   */
  deleteTask(task) {
    this.taskList = this.taskList.filter(elem => elem !== task);
  }

  /**
   *
   * @param {Task} task
   * @param {string} title
   * @param {string} description
   *
   * @returns {boolean}
   */
  editTask(task, title, description) {
    const i = this.taskList.indexOf(elem => elem === task);

    if (i !== -1) {
      this.taskList[i].title = title;
      this.taskList[i].decription = description;

      return true;
    }

    return false;
  }
}
