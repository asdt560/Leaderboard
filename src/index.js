import './style.css';

const arr = [
  {
    name: 'example0',
    score: '0',
  },
  {
    name: 'example1',
    score: '1',
  },
  {
    name: 'example2',
    score: '2',
  },
  {
    name: 'example3',
    score: '3',
  },
];

arr.forEach((item) => {
  const container = document.querySelector('#scorecontainer');
  container.innerHTML += `<div class="scorecard">${item.name}: ${item.score}</div>`;
});