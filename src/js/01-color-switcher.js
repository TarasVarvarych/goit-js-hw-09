const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timedId = null;

btnStart.addEventListener('click', onStartBtnClick);
btnStop.addEventListener('click', onStopBtnClick);
function onStartBtnClick() {
  body.style.backgroundColor = getRandomHexColor();
  timedId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function onStopBtnClick() {
  clearInterval(timedId);
  btnStop.disabled = true;
  btnStart.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

