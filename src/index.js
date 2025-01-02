import { TaskList } from "./taskList";
import { CreateTask } from "./createTask";
import { modalShow, modalClose } from "./modalShow";
import formControl from "./formManagement";

import "./style.css";

const addTaskButton = document.querySelectorAll(".add-task-button");
const cancelButton = document.getElementById("form-cancel-button");

addTaskButton.forEach((element) => {
  element.addEventListener("click", () => {
    modalShow();
  });
});

cancelButton.addEventListener("click", () => {
  modalClose();
});

formControl();
