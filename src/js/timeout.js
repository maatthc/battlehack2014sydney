function timeout() {
	$('body').prepend("<div id='procrasdonationTimeout'></div>");
	$('#procrasdonationTimeout').css({
		"position": "absolute",
		"top": "0",
		"width": "100%",
		"height": "100%",
		"background-color": "#fff"
	});
}

function restart() {
	$('#procrasdonationTimeout').css({
		"position": "absolute",
		"top": "0",
		"width": "0px",
		"height": "0px"
	});
}

function starttimer() {
	$('body').prepend("<div id='procrasdonation'></div>");
	$('#procrasdonation').css({
		"position": "absolute",
		"top": "0"
	});
}