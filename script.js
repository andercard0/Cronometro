const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('milliseconds');

const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stoptBtn');
const pauseButton = document.getElementById('pauseBtn');
const resetButton = document.getElementById('resetBtn');

const lapList = document.getElementById('laplist');

///Variaveis do Cronometro

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  interval = setInterval(updatetimer, 10);
  startButton.disabled = true;
}

function stopTimer() {
  clearInterval(interval);
  addToLapList();
  resetTimerData();
  startButton.disabled = false;
}

function pauseTimer() {
  clearInterval(interval);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(interval);
  resetTimerData();
  startButton.disabled = false;
}

function updatetimer() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  displaytimer();
}

function displaytimer() {
  millisecondsLabel.textContent = padTime(milliseconds);
  secondsLabel.textContent = padTime(seconds);
  minutesLabel.textContent = padTime(minutes);
}

function padTime(time) {
  return time.toString().padStart(2, '0');
}

function resetTimerData() {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displaytimer();
}

function addToLapList() {
  const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;

  const listItem = document.createElement('li');
  listItem.innerHTML = `<span>Volta ${lapList.childElementCount + 1}: </span>${lapTime}`;
  lapList.appendChild(listItem);
}












///Bloqueios padrão
document.addEventListener('keypress', function (event) {
  event = event || window.event;
  if (event.key === 'F12' || (event.ctrlKey && event.key === 'u')) {
    event.preventDefault();
  }
});

document.addEventListener('keydown', function (event) {
  event = event || window.event;
  if (event.key === 'F12' || (event.ctrlKey && event.key === 'u')) {
    event.preventDefault();
  }
});