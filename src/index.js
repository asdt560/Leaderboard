import './style.css';

const form = document.querySelector('#scoresubmit');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('#nametext');
  const score = form.querySelector('#scorenumber');
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M0Anxzr1Nh9yC67Rays1/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  e.target.reset();
});

const display = (array) => {
  const container = document.querySelector('#scorecontainer');
  container.innerHTML = '';
  array.forEach((item) => {
    container.innerHTML += `<div class="scorecard">${item.user}: ${item.score}</div>`;
  });
};

const fetcher = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M0Anxzr1Nh9yC67Rays1/scores', {
    method: 'GET',
  });
  const results = response.json();
  results.then((object) => display(object.result));
};

document.querySelector('#refresher').addEventListener('click', () => {
  fetcher();
});

window.addEventListener('load', () => {
  fetcher();
});