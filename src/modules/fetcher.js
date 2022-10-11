import display from './display.js';

const fetcher = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M0Anxzr1Nh9yC67Rays1/scores', {
    method: 'GET',
  });
  const results = response.json();
  results.then((object) => display(object.result));
};

export default fetcher;