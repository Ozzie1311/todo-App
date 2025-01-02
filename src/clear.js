const clearDiv = () => {
  const mainContent = document.querySelector('.main__content');
  const initialContent = document.querySelector('.main__content-initial');

  if(initialContent){
    mainContent.removeChild(initialContent);
  }

  mainContent.innerHTML = '';
};

export { clearDiv };