const display = (array) => {
  const container = document.querySelector('#scorecontainer');
  container.innerHTML = '';
  array.forEach((item) => {
    container.innerHTML += `<div class="scorecard">${item.user}: ${item.score}</div>`;
  });
};

export default display;