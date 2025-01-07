import "./style.css"

//DOM Elements
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector(".todos");
const totalTasks = document.querySelector('#task-count');
const completedTasks = document.querySelector('#completed-count');
const remainingTasks = document.querySelector('#remaining-count');
const mainInput = document.querySelector('#input-value');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

if(localStorage.getItem('tasks')) {
  tasks.map(task => createTask(task))
}

todoForm.addEventListener('submit',(e) => {
  e.preventDefault();

  const inputValue = mainInput.value;

  if(inputValue === '') {
    //exit function
    return;
  }

  const task = {
    id: new Date().getTime(),
    name: inputValue,
    isCompleted: false,
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  createTask(task)

  todoForm.reset();
  mainInput.focus();

  

})

function createTask(task)  {
  const taskElement = document.createElement('li');

  taskElement.setAttribute('id', task.id);

  if(task.isCompleted) {
    taskElement.classList.add('complete');
  }
  const taskElementMarkup = `<li class="todo-item">
          <div class="right-container">
            <div class="todo-check">
              <input type="checkbox" name="tasks" id="${task.id}">
            </div>
            <div class="todo-text">
              <span ${!task.isCompleted ? 'contenteditable = true' : '' }>${task.name}</span>
              <p contenteditable="true">Descripcion de la tarea</p>
              <span id="span-date">${new Date().toLocaleDateString()}</span>
              <span id="span-priority">Priority: Alta</span>
            </div>
          </div>
            <button class="remove-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </button>  
        </li>`

            taskElement.innerHTML = taskElementMarkup;

            todoList.appendChild(taskElement)
}; 

