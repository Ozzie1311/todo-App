import {CreateTodo} from './createTodo.js';
import { TaskList } from './taskList.js';
import { addTodo } from './addTodo.js';
import { clearDiv } from './clear.js';
import './style.css';

const add = document.querySelector('#add');
const task = new TaskList();
const addTask = document.querySelector('#sidebar__add-task');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.form__group-close');
const addTask2 = document.querySelector('#main__content-btn');
const form = document.querySelector('form');

addTask2.addEventListener('click', () => {
  modal.classList.add('modal--show');
  addTodo();
})

addTask.addEventListener('click', () => {
  modal.classList.add('modal--show');
  addTodo();
});

closeModal.addEventListener('click',() => {
  modal.classList.remove('modal--show');
})