import { CreateTask } from "./createTask";
import { modalClose } from "./modalShow";
import { TaskList } from "./taskList";

const newTaskList = new TaskList();

const formControl = () => {
  const form = document.querySelector(".form");

  //Recuperando los elementos necesarios del HTML
  const taskInput = document.querySelector("#task");
  const descriptionInput = document.querySelector("#description");
  const priorityInput = document.querySelector("#priority");
  const date = new Date().toLocaleDateString();

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
      date
    );

    //Añadiendo la tarea a el arreglo de tareas
    newTaskList.addTask(newTask);

    console.log(newTaskList);

    // //Limpiando los valores de los inputs
    taskInput.value = "";
    descriptionInput.value = "";

    //Cerrando el modal luego de enviar los datos de los inputs
    modalClose();
  });
};

export default formControl;
