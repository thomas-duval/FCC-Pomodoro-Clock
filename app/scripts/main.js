/* global $ */
var worktime = 25;
var breaktime = 5;
var workduration = worktime * 60 * 1000;
var breakduration = breaktime * 60 * 1000;
var timerMinute;
var timerSecond;
var timerintervalID;
var timerendID;
var transitionToBreak;
var transitionToWork;

function workTimer() {
    stop();
    timerMinute = worktime;
    timerSecond = 60;
    timerMinute--;
    $("#timerMinuteID").html(timerMinute);
    timerintervalID = setInterval(timer, 1000);
    timerendID = setTimeout(clearTimer, workduration);
    transitionToBreak = setTimeout(breakTimer, workduration + 1);
}

function timer() {
    if (timerSecond > 0) {
        timerSecond--;
        $("#timerSecondID").html(timerSecond);
    } else {
        timerMinute--;
        $("#timerMinuteID").html(timerMinute);
        timerSecond = 60;
    }
}

function clearTimer() {
    window.clearInterval(timerintervalID);
}

function breakTimer() {
    timerMinute = breaktime;
    timerSecond = 60;
    timerMinute--;
    $("#timerMinuteID").html(timerMinute);
    timerintervalID = setInterval(timer, 1000);
    timerendID = setTimeout(clearTimer, breakduration);
    transitionToWork = setTimeout(workTimer, breakduration);
}

function stop() {
    $("#timerMinuteID").html(worktime);
    $("#timerSecondID").html(0);
    clearInterval(timerintervalID);
    clearTimeout(transitionToBreak);
    clearTimeout(transitionToWork);
    clearTimeout(timerendID);

}

$(document).ready(function () {
    $('#workTimeMore').click(function () {
        worktime++;
        $("#worktimenumber").html(worktime);
        stop();
    });
    $('#workTimeLess').click(function () {
        if (worktime > 1) {
            worktime--;
        }
        $("#worktimenumber").html(worktime);
        stop();
    });
    $('#BreakTimeMore').click(function () {
        breaktime++;
        $("#breaktimenumber").html(breaktime);
        stop();
    });
    $('#BreakTimeLess').click(function () {
        if (breaktime > 1) {
            breaktime--;
        }
        $("#breaktimenumber").html(breaktime);
        stop();
    });
    $('#start').click(function () {
        workTimer();
    });
    $('#stop').click(function () {
        stop();
    });
});

window.onload = function () {
    $("#worktimenumber").html(worktime);
    $("#breaktimenumber").html(breaktime);
    stop();

}
