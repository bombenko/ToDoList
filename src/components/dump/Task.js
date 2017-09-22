export class Task {
  /**
   *
   * @param {string] title
   * @param {string} description
   */
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.createTime = new Date();
    this.isCompleted = false;
  }
  setCompleted() {
    this.isCompleted = true;
  }
}
