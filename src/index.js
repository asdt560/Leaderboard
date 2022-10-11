import './style.css';

import fetcher from './modules/fetcher.js';

import { form, sender } from './modules/sender.js';

const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sender();
  message.innerHTML = 'Score Saved';
  message.classList.add('visible');
  e.target.reset();
});

const fields = document.querySelectorAll('.field');

fields.forEach((field) => {
  field.addEventListener('invalid', () => {
    message.innerHTML = '';
    message.classList.remove('visible');
  });
});

document.querySelector('#refresher').addEventListener('click', () => {
  fetcher();
});

window.addEventListener('load', () => {
  fetcher();
});