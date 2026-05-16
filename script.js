let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
let lapCount = 0;

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapsList = document.getElementById('lapsList');

function formatTime(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    if (hh > 0) {
        let formattedHH = hh.toString().padStart(2, "0");
        return `${formattedHH}:${formattedMM}:${formattedSS}<span class="ms">.${formattedMS}</span>`;
    }
    
    return `${formattedMM}:${formattedSS}<span class="ms">.${formattedMS}</span>`;
}

function print(txt) {
    timeDisplay.innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(formatTime(elapsedTime));
    }, 10);
    
    startBtn.textContent = "Stop";
    startBtn.classList.add("running");
    lapBtn.disabled = false;
    isRunning = true;
}

function stop() {
    clearInterval(timerInterval);
    startBtn.textContent = "Start";
    startBtn.classList.remove("running");
    isRunning = false;
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        start();
    } else {
        stop();
    }
});

lapBtn.addEventListener('click', () => {
    if (!isRunning) return;
    
    lapCount++;
    if (lapsList.style.display === "none") {
        lapsList.style.display = "block";
    }
    
    const lapItem = document.createElement('div');
    lapItem.classList.add('lap-item');
    lapItem.innerHTML = `
        <span class="lap-number">Lap ${lapCount}</span>
        <span>${timeDisplay.innerHTML}</span>
    `;
    
    lapsList.insertBefore(lapItem, lapsList.firstChild);
});

resetBtn.addEventListener('click', () => {
    stop();
    elapsedTime = 0;
    lapCount = 0;
    print("00:00:00<span class=\"ms\">.00</span>");
    lapsList.innerHTML = "";
    lapsList.style.display = "none";
    lapBtn.disabled = true;
});