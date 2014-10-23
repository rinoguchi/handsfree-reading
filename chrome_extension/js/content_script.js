if (window.HandsFree) {
	(function($) {
		$.start = function () {
			$.load(function(options) {

				var siteSetting;
				var isMatched = false;
				var url = window.location.href;
				options.siteSettings.forEach(function(setting) {
					if (url.match(setting.url)) {
						siteSetting = setting;
						isMatched = true;
						console.log(setting.name + ' setting was matched.')
						return false;
					}
				});
				if (!isMatched) {
					console.log('no setting was matched.');
					chrome.runtime.sendMessage({shouldStop: true});
					return; // 処理終了
				}

				$.operator.init(siteSetting);

				if (options.modes.gesture) {
					$.gesture.init(options);
					$.gesture.setOperator($.operator);
					$.gesture.start();
				}

				if (options.modes.speech) {
					$.voice.init(options);
					$.voice.setOperator($.operator);
					$.voice.start();
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

