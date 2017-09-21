import { Task } from '../dump/Task';

export class Card {
  constructor(name, taskArr = []) {
    this.name = name;
    this.taskArr = taskArr;
  }
  createTask(title, description){
    let task = new Task(title, description);
    this.taskArr.push(task);
  }
  findTask(task) {
    for (let i = 0; i < this.taskArr.length; i++) {
      if (this.taskArr[i] === task) {
        return i;
      }
    }
    return -1;
  }
  deleteTask(task) {
    let i = this.findTask(task);
    if (i !== -1) {
      this.taskArr.splice(i, 1);
      return true;
    }
    return false;
  }
  editTask(task, title, description) {
    let i = this.findTask(task);
    if (i !== -1) {
      this.taskArr[i].title = title;
      this.taskArr[i].decription = description;
      return true;
    }
    return false;
  }
}