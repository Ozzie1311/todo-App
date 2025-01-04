import { changeColor, changePriority } from "./changeColor";

const div = document.createElement("div");
const renderTask = (title, description, priority, date, status) => {
  const mainContent = document.querySelector(".main__content");

  //Creando los elementos necesarios para el DOM
  // const div = document.createElement("div");
  const div2 = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const bottomContentDiv = document.createElement("div");
  const bottomContentLeft = document.createElement("div");
  const containerDate = document.createElement("div");
  const calendarIcon = document.createElement("i");
  const spanDate = document.createElement("span");
  const priorityContentDiv = document.createElement("div");
  const priorityIcon = document.createElement("i");
  const prioritySpan = document.createElement("span");
  const buttonsDiv = document.createElement("div");
  const buttonsCheck = document.createElement("div");
  const checkIcon = document.createElement("i");
  const spanCheck = document.createElement("span");
  const buttonsRemove = document.createElement("div");
  const removeIcon = document.createElement("i");
  const spanRemove = document.createElement("span");
  const statusDiv = document.createElement("div");
  const statusSpan = document.createElement("span");
  const statusColor = document.createElement("span");

  //Agregando los atributos necesarios
  div.classList.add("task__content");
  div2.classList.add("task__content-container");
  bottomContentDiv.classList.add("bottom-content");
  bottomContentLeft.classList.add("bottom-content-left");
  containerDate.classList.add("task__content-container-date");
  calendarIcon.classList.add("fa-solid");
  calendarIcon.classList.add("fa-calendar-days");
  priorityContentDiv.classList.add("task__content-container-priority");
  priorityIcon.classList.add("fa-regular");
  priorityIcon.classList.add("fa-flag");
  buttonsDiv.classList.add("buttons");
  buttonsCheck.classList.add("buttons__check");
  buttonsCheck.classList.add("btn");
  checkIcon.classList.add("fa-solid");
  checkIcon.classList.add("fa-check");
  buttonsRemove.classList.add("buttons-remove");
  buttonsRemove.classList.add("btn");
  removeIcon.classList.add("fa-solid");
  removeIcon.classList.add("fa-trash");
  statusDiv.classList.add("task__content-container-status");
  statusSpan.classList.add("task__content-container-status-span");
  statusColor.classList.add("task__content-container-status-color");
  priorityIcon.setAttribute("id", "priority-icon");
  prioritySpan.setAttribute("id", "priority-span");

  //Creando funcion para cambiar el color del estado

  //Estableciendo los valores necesarios de la card
  h3.textContent = title;
  p.textContent = description;
  spanDate.textContent = date;
  prioritySpan.textContent = priority;
  spanCheck.textContent = "Check";
  spanRemove.textContent = "Remove";

  //Estructurando
  buttonsRemove.append(removeIcon, spanRemove);
  buttonsCheck.append(checkIcon, spanCheck);
  buttonsDiv.append(buttonsCheck, buttonsRemove);
  priorityContentDiv.append(priorityIcon, prioritySpan);
  containerDate.append(calendarIcon, spanDate);
  bottomContentLeft.append(containerDate, priorityContentDiv);
  statusDiv.append(statusSpan, statusColor);
  bottomContentDiv.append(bottomContentLeft, statusDiv, buttonsDiv);
  div2.append(h3, p, bottomContentDiv);
  div.append(div2);
  mainContent.append(div);

  //llamando a funciones
  changeColor(status, statusSpan, statusColor);
  changePriority(priority, priorityIcon, prioritySpan);
};

export default renderTask;
