if (window.HandsFree) {
	window.HandsFree.gesture = (function() {

		var operator;
		var direction;

		function rightOrDown() {
			if (direction === 'horizontal') {
				operator.rightAction();
			} else {
				operator.scrollDown(500);
			}
		}

		function leftOrUp() {
			if (direction === 'horizontal') {
				operator.leftAction();
			} else {
				operator.scrollUp(500);
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
			window.initializeWebcamSwiper();
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