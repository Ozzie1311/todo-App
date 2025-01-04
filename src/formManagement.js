import { CreateTask } from "./createTask";
import { modalClose } from "./modalShow";
import { TaskList } from "./taskList";
import renderTask from "./renderTasks";


export const newTaskList = new TaskList();

const formControl = () => {
  //Recuperando los elementos necesarios del HTML

  const form = document.querySelector(".form");
  const mainContent = document.querySelector(".main__content");
  const taskInput = document.querySelector("#task");
  const descriptionInput = document.querySelector("#description");
  const priorityInput = document.querySelector("#priority");
  const date = new Date().toLocaleDateString();
  const status = true;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Obteniendo los valores de los inputs
    let taskInputContent = taskInput.value;
    let descriptionInputContent = descriptionInput.value;
    let priorityInputContent = priorityInput.value;

    //Creando la tarea
    const newTask = new CreateTask(
      taskInputContent,
      descriptionInputContent,
      priorityInputContent,
      date,
      status
    );

    //Limpiando el html
    mainContent.innerHTML = "";

    //Añadiendo la tarea a el arreglo de tareas
    newTaskList.addTask(newTask);

    //Obteniendo la ultima tarea
    const lastTask = newTaskList.getLastTask();

    //Renderizando la tarea ultima tarea
    renderTask(
      lastTask.title,
      lastTask.description,
      lastTask.priority,
      date,
      lastTask.status
    );



    // //Limpiando los valores de los inputs
    taskInput.value = "";
    descriptionInput.value = "";

    console.log(newTask);

    //Cerrando el modal luego de enviar los datos de los inputs
    modalClose();
  });
};

export default formControl;
