var hrs = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hrsHeading = document.getElementById("hrs");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min++
        minHeading.innerHTML = min;
        sec = 0;
    } else if (min >= 60) {
        hrs++
        hrsHeading.innerHTML = hrs;
        min = 0;
    }
}



function start() {
    interval = setInterval(timer, 10)
}
function stop() {
    clearInterval(interval)
}
function reset() {
    hrs = 0;
    min = 0;
    sec = 0;
    msec = 0;
    msecHeading.innerHTML = msec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    hrsHeading.innerHTML = hrs;
    stop()
}