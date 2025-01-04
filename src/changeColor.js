export const changeColor = (status, statusSpan, statusColor) => {
  if (status) {
    statusSpan.textContent = "Completada";
    statusColor.style.backgroundColor = "green"; // Color para completada
  } else {
    statusSpan.textContent = "Pendiente";
    statusColor.style.backgroundColor = "red"; // Color para pendiente
  }
};

export const changePriority = (priority, priorityIcon, prioritySpan) => {
  prioritySpan.textContent = priority;
  switch (priority) {
    case 'High':
      prioritySpan.style.color = 'red';
      priorityIcon.style.color = 'red';
      break;
    case 'Medium':
      prioritySpan.style.color = 'orange';
      priorityIcon.style.color = 'orange';
      break;
    case 'Low':
      prioritySpan.style.color = 'green';
      priorityIcon.style.color = 'green';
      break;
    default:
      priorityIcon.style.color = 'gray'; // Color por defecto
  }
};