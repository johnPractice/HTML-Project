const toggleBtn = document.getElementById("toggle");
toggleBtn.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark");
});
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const digitalTime = document.getElementById("d-time");
const dateShow = document.getElementById("date");

function setTime() {
  const time = new Date();
  const monthGet = time.getMonth();
  const day = time.getDay();
  const hours = time.getHours();
  const hoursClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  hour.style.transform = ` translate(-50%, -100%) rotate(${(hoursClock * 360) / 11}deg)`;
  minute.style.transform = ` translate(-50%, -100%) rotate(${(minutes * 360) / 59}deg)`;
  second.style.transform = ` translate(-50%, -100%) rotate(${(seconds * 360) / 59}deg)`;
  dateShow.innerHTML = `${days[day]} ${month[monthGet]} <span class="circle">${day}</span>`;
  digitalTime.innerHTML = `${hoursClock == 0 ? 12 : hoursClock}:${minutes}:${seconds}`;
}
setInterval(() => {
  setTime();
}, 100);
