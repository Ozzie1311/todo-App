class TaskList {
  constructor() {
    this.tasks = [];
  }

  //Método para añadir tarea al array de tareas
  addTask(task) {
    this.tasks.push(task);
  }

  //Método para remover la tarea del array
  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  //Método para obtener la ultima tarea
  getLastTask() {
    return this.tasks[this.tasks.length - 1];
  }

  getTasks() {
    return this.tasks.map((task) => task);
  }
}

export { TaskList };
