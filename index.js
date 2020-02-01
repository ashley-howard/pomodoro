// Bugs:
// - Pause doesn't work
// - stuck on long breaks

// set seconds to shortbreak
// set seconds back to pomodoro
// after 4 times, do long break

const pomodoroTime = document.getElementById("pomodoro-input");
const shortBreakTime = document.getElementById("short-break-input");
const longBreakTime = document.getElementById("long-break-input");
const countdown = document.getElementById("countdown");

countdown.innerText = `${pomodoroTime.value}:00`;

var counter = 0;
var minutes = 0;
var seconds = 0;
var interval;

function pomodoro() {
    if (counter < 3) {
        counter += 1;
        console.log(counter)
        console.log("pomodoro")

        seconds = pomodoroTime.value * 60 || 0;
        interval = setInterval(function () {
            seconds--;
            countdown.innerText = `${(minutes = Math.floor(seconds / 60))}:${seconds -
                minutes * 60}`;
            if (!seconds) {
                clearInterval(interval);
                shortBreak()
            }
        }, 1000);
    }

    else {
        counter += 1;
        console.log(counter)
        console.log("pomodoro")
        seconds = pomodoroTime.value * 60 || 0;
        interval = setInterval(function () {
            seconds--;
            countdown.innerText = `${(minutes = Math.floor(seconds / 60))}:${seconds -
                minutes * 60}`;
            if (!seconds) {
                clearInterval(interval);
                longBreak()
            }
        }, 1000);
    }
}

function shortBreak() {
    console.log("short break")
    seconds = shortBreakTime.value * 60 || 0;
    interval = setInterval(function () {
        seconds--;
        countdown.innerText = `${(minutes = Math.floor(seconds / 60))}:${seconds -
            minutes * 60}`;
        if (!seconds) {
            clearInterval(interval);
            pomodoro();
        }
    }, 1000);
}

function longBreak() {
    console.log("long break")
    seconds = longBreakTime.value * 60 || 0;
    interval = setInterval(function () {
        seconds--;
        countdown.innerText = `${(minutes = Math.floor(seconds / 60))}:${seconds -
            minutes * 60}`;
        // console.log(seconds)
        if (!seconds) {
            clearInterval(interval);
            counter = 0;
            pomodoro();
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

function updateSettings() {
    if (!Number.isInteger(+pomodoroTime.value) || !Number.isInteger(+shortBreakTime.value) || !Number.isInteger(+longBreakTime.value)) {
        window.alert("please enter an integer")
    } else {
        countdown.innerText = `${pomodoroTime.value}:00`;
    }
}

function resetSettings() {
    pomodoroTime.value = 15;
    shortBreakTime.value = 5;
    longBreakTime.value = 10;
}