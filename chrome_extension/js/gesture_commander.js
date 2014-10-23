if (window.HandsFree) {
	window.HandsFree.gesture = (function() {

		var operator;
		var direction;

		function rightOrDown() {
			console.log(window.location.href);
			if (window.location.href.match('cookpad\.com')) {
				operator.rightAction();
			} else {
				operator.scrollDown(1000);
			}
		}

		function leftOrUp() {
			console.log(window.location.href);
			if (window.location.href.match('cookpad\.com')) {
				operator.scrollUp(1000);
			} else {
				operator.leftAction();
			}
		}

		// オペレータをセット
		var setOperator = function(_operator) {
			operator = _operator;
			console.log("GestureCommander setOperator!!");
		};

		// ジェスチャー認識を開始
		var start = function() {
			console.log("GestureCommander start!!");
			window.initializeWebcamSwiper(direction);
		};

		// ジェスチャー認識を停止
		var stop = function() {
			console.log("GestureCommander stop!!");
			window.destroyWebcamSwiper();
		};

		var init = function (options) {
			console.log("GestureCommander option: " + options.direction);
			direction = options.direction;
			document.getElementsByTagName("body")[0].addEventListener("webcamSwipeLeft", leftOrUp, false);
			document.getElementsByTagName("body")[0].addEventListener("webcamSwipeRight", rightOrDown, false);
		}

		return { start: start, stop: stop, setOperator: setOperator, init: init }
	})();
}