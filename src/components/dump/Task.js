export class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.createTime = new Date();
    this.isCompleted = false;
  }
  setComplited() {
    this.isCompleted = true;
  }
}