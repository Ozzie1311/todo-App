import "./style.css";
import { tasks } from "./renderTask";
import { MakeTask } from "./makeTasks";
import { renderTask, updateTask, removeTask } from "./renderTask";

//DOM Elements
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector(".todos");
const mainInput = document.querySelector("#input-value");
const description = document.querySelector("#description-value");

const h1 = document.querySelector("h1");

h1.textContent = `Bienvenido(a) --> ${new Date().toLocaleDateString()}`;

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //Obteniendo los valores de los inputs
  const inputValue = mainInput.value;
  const descriptionValue = description.value;

  //Haciendo una verificación, si alguno de los dos campos esta vacio, nos salimos de la funcion y por lo tanto no se envia
  if (inputValue === "" || descriptionValue === "") {
    //exit function
    return;
  }

  const customId = new Date().getTime(); //Obteniendo el id personalizado

  const task = new MakeTask(customId, inputValue, descriptionValue, false); //creando la nueva tarea

  tasks.push(task); //almacenando la nueva tarea al array de tareas

  localStorage.setItem("tasks", JSON.stringify(tasks)); //Aqui estamos guardando el array en el almacenamiento local

  renderTask(task); //Aqui estamos renderizando la tarea

  todoForm.reset(); //luego del submit, limpiar los campos de los inputs
  mainInput.focus(); //Luego del submit, mantener el foco en el input para que el usuario pueda escribir.
});

todoList.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("svg-remove-button")) {
    const parentElement =
      e.target.parentElement.parentElement.parentElement.parentElement;
    const taskId = parentElement.id;

    removeTask(taskId);
  }
});

todoList.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();

    e.target.blur();
  }
});

todoList.addEventListener("input", (e) => {
  const parentElement =
    e.target.parentElement.parentElement.parentElement.parentElement;
  const taskId = parentElement.id;

  updateTask(taskId, e.target);
});
