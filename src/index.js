import './style.css';

import fetcher from './modules/fetcher.js';

import { form, sender } from './modules/sender.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sender();
  e.target.reset();
});

document.querySelector('#refresher').addEventListener('click', () => {
  fetcher();
});

window.addEventListener('load', () => {
  fetcher();
});