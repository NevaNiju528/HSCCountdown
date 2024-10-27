// Countdown Timer to HSC Date
const targetDate = new Date("October 16, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  updateProgressBar(days);
}

// Update progress bar
function updateProgressBar(days) {
  const totalDays = (targetDate - new Date(2024, 10, 16).getTime()) / (1000 * 60 * 60 * 24);
  const percentage = ((totalDays - days) / totalDays) * 100;
  document.getElementById("progress-bar").style.width = `${percentage}%`;
}

setInterval(updateCountdown, 1000);

// Pomodoro Timer
let pomoMinutes = 25;
let pomoSeconds = 0;
let pomoInterval;

function startPomodoro() {
  pomoInterval = setInterval(() => {
    if (pomoSeconds === 0 && pomoMinutes === 0) {
      clearInterval(pomoInterval);
      alert("Pomodoro session completed!");
      return;
    }
    if (pomoSeconds === 0) {
      pomoMinutes--;
      pomoSeconds = 59;
    } else {
      pomoSeconds--;
    }
    document.getElementById("pomo-minutes").textContent = String(pomoMinutes).padStart(2, '0');
    document.getElementById("pomo-seconds").textContent = String(pomoSeconds).padStart(2, '0');
  }, 1000);
}

function resetPomodoro() {
  clearInterval(pomoInterval);
  pomoMinutes = 25;
  pomoSeconds = 0;
  document.getElementById("pomo-minutes").textContent = '25';
  document.getElementById("pomo-seconds").textContent = '00';
}

