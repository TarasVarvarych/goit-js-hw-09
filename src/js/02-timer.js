import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const startBtn = document.querySelector('button[data-start]');
const timeInput = document.querySelector('#datetime-picker');
const TIMER_INTERVAL = 1000;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const chosenDate = selectedDates[0].getTime();
    let msToEvent = chosenDate - new Date().getTime();
    startBtn.addEventListener('click', onStartBtnClick);
    function onStartBtnClick() {
      msToEvent -= TIMER_INTERVAL;
      startBtn.disabled = true;
      timeInput.disabled = true;
      const timerId = setInterval(() => {
        msToEvent -= TIMER_INTERVAL;
        if (msToEvent <= 0) {
          clearInterval(timeInput);
          startBtn.disabled = false;
          timeInput.disabled = false;
          return;
        }
        const timeToEvent = convertMs(msToEvent);
        addTimeMarkup(timeToEvent);
      }, TIMER_INTERVAL);
    }
    if (selectedDates[0] < new Date()) {
      Notify.warning('Please choose a date in the future');
      startBtn.disabled = true;
    } else startBtn.disabled = false;
  },
};
flatpickr(timeInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.padStart(2, '0');
}

function addTimeMarkup(value) {
  document.querySelector('span[data-days]').textContent = addLeadingZero(
    `${value.days}`
  );
  document.querySelector('span[data-hours]').textContent = addLeadingZero(
    `${value.hours}`
  );
  document.querySelector('span[data-minutes]').textContent = addLeadingZero(
    `${value.minutes}`
  );
  document.querySelector('span[data-seconds]').textContent = addLeadingZero(
    `${value.seconds}`
  );
}

