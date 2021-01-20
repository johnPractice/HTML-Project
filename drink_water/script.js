const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => heighLightCups(idx));
});
function heighLightCups(idx) {
  if (smallCups[idx].classList.contains('full') && smallCups[idx].nextElementSibling != null && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) cup.classList.add('full');
    else cup.classList.remove('full');
  });
  checkLiter();
}
function checkLiter() {
  const emptyCup = document.querySelectorAll('.cup.full').length;
  const totalCup = smallCups.length;
  if (emptyCup == 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = '0px';
  } else {
    percentage.style.visibility = 'visible';
    percentage.innerText = 100 * (emptyCup / totalCup) + '%';
    percentage.style.height = (emptyCup / totalCup) * 330 + 'px';
  }
  if (emptyCup == totalCup) {
    remained.style.height = '0px';
    remained.style.visibility = 'hidden';
  } else {
    liters.innerText = (emptyCup * 250) / 1000 + 'L';
    remained.style.visibility = 'visible';
  }
}
