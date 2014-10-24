if (window.HandsFree) {
	window.HandsFree.operator = (function() {

		var siteSetting;
		var init = function(setting) {
			siteSetting = setting;
		}

		/**
		 * セクションを読み上げ
		 * @param sectionName : セクション名
		 */
		var readSection = function(sectionName) {
			console.log("readSection called!!");
			var text = '未定義';
			siteSetting.sections.forEach(function(section, i) {
				if(section.name == sectionName) {
					console.log("func:" + section.func);
					eval('text = ' + section.func + '()');
					return false;
				}
			});
			console.log('readSection text=' + text);
			_read(text);
		};

		/**
		 * 上スクロール
		 * @param ammount : スクロール量(px)
		 */
		var scrollUp = function(amount) {
			_scroll(+1 * amount);
		};

		/**
		 * 下スクロール
		 * @param ammount : スクロール量(px)
		 */
		var scrollDown = function(amount) {
			_scroll(-1 * amount);
		};

		var isScrolling = false;

		/**
		 * スクロール処理
		 * @param amount : px指定、マイナス値だと上へ、プラス値だと下へ
		 */
		var _scroll = function(amount) {
			if (amount === 0) return;
			if (isScrolling) return;
			isScrolling = true;

			var scrollby = amount / 10; // スクロール量

			var before = document.body.scrollTop;
			var timerId = setInterval(function() {
				scrollBy(0, scrollby);
				if (scrollby > 20) { scrollby = scrollby * 0.8; }
				if (document.body.scrollTop === 0
						|| (document.body.scrollHeight - window.innerHeight === document.body.scrollTop)
						|| Math.abs(amount) <= Math.abs(before - document.body.scrollTop)) {
					clearInterval(timerId);
					isScrolling = false;
					return;
				}
			}, 10);
		};

		/**
		 * 音声読み上げ
		 * @param text : 読み上げる文章
		 */
		var _read = function(text) {
			if (!'SpeechSynthesisUtterance' in window) {
				alert('Web Speech API には未対応です。');
				return;
			}

			if (speechSynthesis.speaking) {
				speechSynthesis.cancel();
			}

			var msg = new SpeechSynthesisUtterance();
			msg.volume = 1;
			msg.rate = 1;
			msg.pitch = 2;
			msg.text = text;
			msg.lang = 'ja-UP'; // en-US or ja-UP
			msg.onend = function (event) {
				console.log("speech finished.");
			}
			
			speechSynthesis.speak(msg);
		};

		/**
		 * 左方向へのアクション
		 * プレゼン用のベタ実装
		 */
		var leftAction = function() {
			console.log("leftAction is called!!");
			var elms = document.getElementsByClassName('navigate-right');
			for (var i = 0; i < elms.length; i++) {
				elms[i].click();
			}
		};

		/**
		 * 右方向へのアクション
		 * プレゼン用のベタ実装
		 */
		var rightAction = function() {
			console.log("rightAction is called!!");
			var elms = document.getElementsByClassName('navigate-left');
			for (var i = 0; i < elms.length; i++) {
				elms[i].click();
			}
		};
		
		
		return { 
			init: init,
			readSection: readSection, 
			scrollUp: scrollUp, 
			scrollDown: scrollDown, 
			leftAction: leftAction, 
			rightAction: rightAction 
		}
	})();
}