if (window.HandsFree) {
	(function($) {
		$.start = function () {
			$.load(function(options) {
				$.operator.init(options);
				if (options.modes.speech) {
					$.voice.init(options);
					$.voice.setOperator($.operator);
					$.voice.start();
				}
				if (options.modes.gesture) {
					$.gesture.init(options);
					$.gesture.setOperator($.operator);
					$.gesture.start();
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

