const counters = document.querySelectorAll('div.counter');
counters.forEach((counter) => {
  counter.innerText = 0;
  const counterTarget = parseInt(counter.getAttribute('data-target'));
  upCount(counter, counterTarget);
});

function upCount(counter, counterTarget) {
  const counterValue = parseInt(counter.innerText);
  const add = Math.ceil(counterTarget / 100);
  if (counterValue < counterTarget) {
    counter.innerText = counterValue + add;
    setTimeout(() => upCount(counter, counterTarget), 20);
  } else {
    counter.innerText = counterTarget;
  }
}
