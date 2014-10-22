if (window.HandsFree) {
	(function($) {

		$.start = function () {
			$.load(function(options) {
				console.log(options);
				for (var i=0; i< options.modes.length; i++) {
					var mode = options.modes[i];
					if (mode === 'speech') {
						$.voice.init(options);
						$.voice.setOperator($.operator);
						$.voice.start();
					} else if (mode === 'gesture') {
						$.gesture.init(options);
						$.gesture.setOperator($.operator);
						$.gesture.start();
					}
				}
			});
		};

		$.stop = function() {
			$.voice.stop();
			$.gesture.stop();
		}

	})(window.HandsFree);

	console.log("HandsFree is initialized.");
}

