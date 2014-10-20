var options = load();

jQuery.each(options.modes, function(i, mode) {
	console.log("options.modes:" + mode);
	if (mode === 'speech') {
		var commander = new VoiceCommander();
		commander.setOperator(new Operator());
		commander.start();
	}
	if (mode === 'gesture') {
		var commander = new GestureCommander();
		commander.setOperator(new Operator());
		commander.start();
	}
});
