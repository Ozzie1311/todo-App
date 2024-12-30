class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = false;
  }
};

class TodoList {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    this.todos.splice(index, 1);
  }
};

const todoList = new TodoList();

const add = document.querySelector('#add');

add.addEventListener('click', () => {

  const todo = new Todo('pasear al perro', 'recreacion', '2021-10-10', 'alta');
  todoList.add(todo);

  console.log(todoList.todos)
})