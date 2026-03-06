let time = 60;
const total = 339;
const progress = document.getElementById("progress");
const text = document.getElementById("time");

const interval = setInterval(() => {
  if (time > 0) {
    time--;
    text.innerText = time;
    progress.style.strokeDashoffset = total - (time / 60) * total;
  } else {
    clearInterval(interval);
    window.location.href = "https://t.me/+3y2h9KNg_HYwZTA1";
  }
}, 1000);
