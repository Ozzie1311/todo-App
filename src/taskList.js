class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(index) {
    this.tasks.splice(index, 1); 
  }

  getLastTask() {
    return this.tasks[this.tasks.length - 1];
  }
};

export { TaskList };