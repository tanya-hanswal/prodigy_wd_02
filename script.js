var ms = 0,
  s = 0,
  m = 0,
  h = 0;
var timer;

var displayTimer = document.querySelector(".timer-display");

function start() {
  if (!timer) {
    timer = setInterval(run, 10);
  }
}
function run() {
  displayTimer.innerHTML = getTimer();
  ms++;
  if (ms == 100) {
    ms = 0;
    s++;
  }
  if (s == 60) {
    s = 0;
    m++;
  }
  if (m == 60) {
    m = 0;
    h++;
  }
}
function getTimer() {
  return (
    (h < 10 ? "0" + h : h) +
    ":" +
    (m < 10 ? "0" + m : m) +
    ":" +
    (s < 10 ? "0" + s : s) +
    ":" +
    (ms < 10 ? "0" + ms : ms)
  );
}

var buttonstop = document.querySelector("#button-stop");

buttonstop.addEventListener("click", () => {
  stopTimer();
});
function stopTimer() {
  clearInterval(timer);
  timer = false;
}

var buttonreset = document.querySelector("#button-reset");
buttonreset.addEventListener("click", () => {
  stopTimer();
  ms = 0;
  s = 0;
  m = 0;
  h = 0;
  displayTimer.innerHTML = getTimer();
});

var buttonlap = document.querySelector("#button-lap");
buttonlap.addEventListener("click", () => {
  if (timer) {
    var li = document.createElement("li");
    li.innerHTML = getTimer();
    buttonlap.appendChild(li);
  }
});
