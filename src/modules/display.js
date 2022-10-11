const display = (array) => {
  const container = document.querySelector('#scorecontainer');
  container.innerHTML = '';
  const arr = array.sort((a, b) => b.score - a.score);
  arr.forEach((item) => {
    container.innerHTML += `<div class="scorecard">${item.user}: ${item.score}</div>`;
  });
};

export default display;