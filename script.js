let startTime = 0;
let elapsedTime = 0;
let lapCount = 0;
const timeDisplay = document.getElementById('time')
const startBtn = document.getElementById('startBtn')
const lapBtn = document.getElementById('lapBtn')
const lapsList = document.getElementById('lapsList')


function formatTime(time){
    let diffinHrs = time / 3600000
    let hh = Math.floor(diffInHrs)

    let diffInMin = (diffInHrs - hh) * 60
    let mm = Math.floor(diffInMins)

    let diffInSec = (diffInMin - mm) * 60
    let ss = Math.floor(diffInSec)

    let diffInMs = (diffInSec - ss) * 100
    let ms = Math.floor(diffInMs)
    let formattedMM = mm.toString().padStart(2, "0")
    let formattedSS = ss.toString().padStart(2, "0")
    let formattedMS = ms.toString().padStart(2, "0")

    if(hh > 0){
        let formattedHH = hh.toString().padStart(2, "0")
        return `${formattedHH}:${formattedSS}<span class"ms">.${formattedMS}</span>`
    }
    return
}
