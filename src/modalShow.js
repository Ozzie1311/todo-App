const modalShow = () => {
  const modal = document.querySelector(".modal");
  modal.classList.add("modal--show");
};

const modalClose = () => {
  const modal = document.querySelector(".modal");
  modal.classList.remove("modal--show");
};

export { modalShow, modalClose };
