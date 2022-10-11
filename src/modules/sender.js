import fetcher from './fetcher.js';

export const form = document.querySelector('#scoresubmit');

export const sender = async () => {
  const name = form.querySelector('#nametext');
  const score = form.querySelector('#scorenumber');
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M0Anxzr1Nh9yC67Rays1/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: name.value,
      score: score.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  fetcher();
};
