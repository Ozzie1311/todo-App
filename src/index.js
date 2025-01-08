<<<<<<< HEAD
import "./style.css";
=======
import "./style.css"

//DOM Elements
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector(".todos");
const totalTasks = document.querySelector('#task-count');
const completedTasks = document.querySelector('#completed-count');
const remainingTasks = document.querySelector('#remaining-count');
const mainInput = document.querySelector('#input-value');
const description = document.querySelector('#description-value');
//const svg = document.querySelector('.svg-remove-button')
const h1 = document.querySelector('h1');

h1.textContent = `Bienvenido(a) --> ${new Date().toLocaleDateString()}`

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

if(localStorage.getItem('tasks')) {
  tasks.map(task => createTask(task))
}

todoForm.addEventListener('submit',(e) => {
  e.preventDefault();

  const inputValue = mainInput.value;
  const descriptionValue = description.value;

  if(inputValue === '' || descriptionValue === '') {
    //exit function
    return;
  }

  const task = {
    id: new Date().getTime(),
    name: inputValue,
    description:descriptionValue,
    isCompleted: false,
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  createTask(task)

  todoForm.reset();
  mainInput.focus();
});

todoList.addEventListener('click', (e) => {
  if(e.target.parentElement.classList.contains('svg-remove-button')) {
    const parentElement = e.target.parentElement.parentElement.parentElement.parentElement;
    const taskId = parentElement.id;
    

    removeTask(taskId)
  }
   
});

todoList.addEventListener('keydown', (e) => {
  if(e.keyCode === 13) {
    e.preventDefault();

    e.target.blur();
  }
});

todoList.addEventListener('input', (e) => {
  const parentElement = e.target.parentElement.parentElement.parentElement.parentElement;
  const taskId = parentElement.id
  
  updateTask(taskId, e.target)
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
              <span class="span-task" ${!task.isCompleted ? 'contenteditable = true' : '' }>${task.name}</span>
              <p ${!task.isCompleted ? 'contenteditable = true' : '' }>${task.description}</p>
              <span id="span-date">${new Date().toLocaleDateString()}</span>
              <span id="span-priority">Priority: Alta</span>
            </div>
          </div>
            <button class="remove-btn">
              <svg class="svg-remove-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </button>  
        </li>`

            taskElement.innerHTML = taskElementMarkup;

            todoList.appendChild(taskElement);
  
  countTasks();
}; 


function countTasks() {
  const completedTasksArray = tasks.filter((task) => task.isCompleted)
  

  totalTasks.textContent = tasks.length;
  completedTasks.textContent = completedTasksArray.length;
  remainingTasks.textContent = tasks.length - completedTasksArray.length;
};

function removeTask(taskId) {
  tasks = tasks.filter((task) => task.id !== parseInt(taskId));

  localStorage.setItem('tasks', JSON.stringify(tasks));

  document.getElementById(taskId).remove();

  countTasks();
};

function updateTask(taskId, taskEl) {
  //Aquí lo que estamos haciendo es, que si el id de la tarea es el mismo id que yo le estoy pasando, y si coincide, me lo va a retornar.
  const task = tasks.find((task) => task.id === parseInt(taskId));

  if(taskEl.hasAttribute('contenteditable')) {
    task.name = taskEl.textContent
  } else {
    const span = document.querySelector('.span-task')
    const parent = taskEl.closest('li')

    console.log(parent)
    
    task.isCompleted = !task.isCompleted;
    
    if(task.isCompleted) {
      span.removeAttribute('contenteditable');
      parent.classList.add('complete')
      
    } else {
      span.setAttribute('contenteditable', 'true');
      parent.classList.remove('complete')
    }
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));

  countTasks();
}
>>>>>>> d8d49b939f8487d5b08315269b61ebd35264ec22
