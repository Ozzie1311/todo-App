export const changeColor = (status, statusSpan, statusColor) => {
  if (status) {
    statusSpan.textContent = "Completada";
    statusColor.style.backgroundColor = "green"; // Color para completada
    status = false;
  } else {
    statusSpan.textContent = "Pendiente";
    statusColor.style.backgroundColor = "orange"; // Color para pendiente
    status = true;
  }
};

export const changeStatus = (status) => {
  if(status){
    status = false;
  } else {
    status = true;
  }
}

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

export const changeColorDate = (calendarIcon, spanDate) => {
  calendarIcon.style.color = 'slateblue';
  spanDate.style.color = 'slateblue';
}