import { CreateTodo } from "./createTodo";
import { clearDiv } from "./clear";
import { agregar } from "./otracosa";


const addTodo = (array) => {

  const form = document.querySelector('form');
  const mainContent = document.querySelector('.main__content');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = document.getElementById('task').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const date = `${new Date().getDay()}-${new Date().getDate()}-${new Date().getFullYear()}`;

    const newTask = new CreateTodo (task, description, priority);
    
    // const lastTask = task.getLastTask();

    
    clearDiv();

    agregar(task, description, priority, date);


  })
};

export { addTodo };