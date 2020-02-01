// Bugs:
// - Pause doesn't work

const pomodoro = document.getElementById("pomodoro");
const countdown = document.getElementById("countdown");

countdown.innerText = `${pomodoro.value}:00`;

var minutes = 0;
var seconds = 0;
var interval;

function startTimer() {
    seconds = pomodoro.value * 60 || 0;
    interval = setInterval(function () {
        seconds--;
        countdown.innerText = `${(minutes = Math.floor(seconds / 60))}:${seconds -
            minutes * 60}`;
        // console.log(seconds)
        if (!seconds) {
            clearInterval(interval);
            // 5 minute break
            // startTimer(5)
            // after 4 "pomodoros" take 10 minute break
            // startTimer(10)
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    updateTimer();
}

function resetSettings() {

}

function updateTimer() {
    countdown.innerText = `${pomodoro.value}:00`;
}
