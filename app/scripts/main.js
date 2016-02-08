var worktime = 2;
var breaktime = 1;
var workduration = worktime * 60 * 1000;
var breakduration = breaktime * 60 * 1000;

function workTimer() {
	// PLAY NOISE 
	timerMinute = worktime;
	timerSecond = 60;
	timerMinute--;
	$("#timerMinuteID").html(timerMinute);
	timerintervalID = setInterval(timer, 1000);
	timerendID = setTimeout(clearTimer, workduration);
	transitionToBreak = setTimeout(breakTimer, workduration);
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
	// PLAY NOISE 
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
	$("#timerSecondID").html(00);
	clearInterval(timerintervalID);
	clearTimeout(transitionToBreak);
	clearTimeout(transitionToWork);
	clearTimeout(timerendID);

}

function workTimeMore() {
	worktime++;
	$("#worktimenumber").html(worktime);
}

function workTimeLess() {
	worktime--;
	$("#worktimenumber").html(worktime);
}

function BreakTimeMore() {
	breaktime++;
	$("#breaktimenumber").html(breaktime);
}

function BreakTimeLess() {
	breaktime--;
	$("#breaktimenumber").html(breaktime);
}

$(document).ready(function() {
	$('#workTimeMore').click(function() {
		workTimeMore();
	});
	$('#workTimeLess').click(function() {
		workTimeLess();
	});
	$('#BreakTimeMore').click(function() {
		BreakTimeMore();
	});
	$('#BreakTimeLess').click(function() {
		BreakTimeLess();
	});
	$('#start').click(function() {
		workTimer();
	});
	$('#stop').click(function() {
		stop();
	});
});
