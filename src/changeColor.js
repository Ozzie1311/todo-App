const changeColor = (status) => {
  const statusSpan = document.querySelector(
    ".task__content-container-status-span"
  );
  const statusColor = document.querySelector(
    ".task__content-container-status-color"
  );

  if (status) {
    statusSpan.textContent = "Completada";
    statusColor.classList.remove("status-pending");
    statusColor.classList.add("status-completed");
  } else {
    statusSpan.textContent = "Pendiente";
    statusColor.classList.remove("status-completed");
    statusColor.classList.add("status-pending");
  }
};

const changePriority = (priority) => {
  const icon = document.getElementById("priority-icon");
  const span = document.getElementById("priority-span");

  if (priority === "Low") {
    icon.classList.add("priority-low");
    span.classList.add("priority-low");
    icon.classList.remove("priority-medium");
    span.classList.remove("priority-medium");
    icon.classList.remove("priority-high");
    span.classList.remove("priority-high");
  } else if (priority === "Medium") {
    icon.classList.add("priority-medium");
    span.classList.add("priority-medium");
    icon.classList.remove("priority-low");
    span.classList.remove("priority-low");
    icon.classList.remove("priority-high");
    span.classList.remove("priority-high");
  } else {
    icon.classList.add("priority-high");
    span.classList.add("priority-high");
    icon.classList.remove("priority-low");
    span.classList.remove("priority-low");
    icon.classList.remove("priority-medium");
    span.classList.remove("priority-medium");
  }
};

export { changeColor, changePriority };
