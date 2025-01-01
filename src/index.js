import {CreateTodo} from './createTodo.js';
import { TaskList } from './taskList.js';
import './style.css';

const add = document.querySelector('#add');
const task = new TaskList();
const addTask = document.querySelector('#sidebar__add-task');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.form__group-close');
const addTask2 = document.querySelector('#main__content-btn');

addTask2.addEventListener('click', () => {
  modal.classList.add('modal--show');
})

addTask.addEventListener('click', () => {
  modal.classList.add('modal--show');
});

closeModal.addEventListener('click',() => {
  modal.classList.remove('modal--show');
})