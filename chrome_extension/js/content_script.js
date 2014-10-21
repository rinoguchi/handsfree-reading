load(function(options) {
	jQuery.each(options.modes, function(i, mode) {
		console.log("options.modes:" + mode);
		if (mode === 'speech') {
			var commander = new VoiceCommander(options);
			commander.setOperator(new Operator());
			commander.start();
		}
		if (mode === 'gesture') {
			var commander = new GestureCommander(options);
			commander.setOperator(new Operator());
			commander.start();
		}
	});
});