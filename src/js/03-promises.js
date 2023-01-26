import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');
let MAX_COUNTS = 0;
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  })
    .then(x => Notify.success(x))
    .catch(y => Notify.failure(y));
}

formRef.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  const delayNumber = Number(delay.value);
  const stepNumber = Number(step.value);
  const amountNumber = Number(amount.value);

  setTimeout(() => {}, delayNumber);

  let intervalId = setInterval(() => {
    if (MAX_COUNTS === amountNumber) {
      clearInterval(intervalId);
      return;
    }
    let position = 1 + MAX_COUNTS;
    let del = delayNumber + stepNumber * MAX_COUNTS;
    createPromise(position, del);
    MAX_COUNTS += 1;
  }, stepNumber);
  e.currentTarget.reset();
  MAX_COUNTS = 0;
}
