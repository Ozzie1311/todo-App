const agregar = (title, description, priority, date) => {

  const mainContent = document.querySelector('.main__content');

  //Creando los elementos necesarios
  const contentPage = document.createElement('div');
  const cardTitle = document.createElement('h2');
  const cardDescription = document.createElement('p');
  const cardPriority = document.createElement('p');
  const cardDate = document.createElement('p');

  //Agregando clases a los elementos
  contentPage.classList.add('content__card');
  cardTitle.classList.add('content__card-title');
  cardDescription.classList.add('content__card-description');
  cardPriority.classList.add('content__card-priority');
  cardDate.classList.add('content__card-date');


  //Estableciendo el contenido de los elementos
  cardTitle.textContent = title;
  cardDescription.textContent = description;
  cardPriority.textContent = priority;
  cardDate.textContent = date;

  //Agregando los elementos al DOM
  contentPage.append(cardTitle, cardDescription, cardPriority, cardDate);
  mainContent.append(contentPage);

  
}

export { agregar };