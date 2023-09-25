let startTime;
let isRunning = false;
let intervalId;

const display = document.getElementById("display");
const horusTimer = document.getElementById("hours");
const minutesTimer = document.getElementById("minutes");
const secondsTimer = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", () => {
    if (!isRunning) {
        startTime = startTime || Date.now();
        intervalId = setInterval(getTime, 10);
        isRunning = true;
    }
});

stopButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(intervalId);
    isRunning = false;
    startTime = null;
    display.textContent = "00:00:00";
    horusTimer.textContent = "00";
    minutesTimer.textContent = "00";
    secondsTimer.textContent = "00";
});

function getTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = String(elapsedTime.getUTCHours()).padStart(2, "0");
    const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, "0");
    const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}`;
    horusTimer.textContent = hours;
    minutesTimer.textContent = minutes;
    secondsTimer.textContent = seconds;
}