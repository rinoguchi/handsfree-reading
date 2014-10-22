if (window.HandsFree) {
	window.HandsFree.operator = (function() {

		// chrome extension化した際に、option化の予定
		var sections = [
		  {name:'zairyo', func:function() {var ingredients = document.getElementById('ingredients_list').children;var text = '';for (var i = 0; i < ingredients.length; i++) {var ingredient = ingredients[i];text = text + ingredient.getElementsByClassName('ingredient_name')[0].innerText + '、' + ingredient.getElementsByClassName('ingredient_quantity amount')[0].innerText + '。';}return text;}},
		  {name:'1', func:function() {var steps = document.getElementsByClassName('step');for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute('data-position') == '1') {return steps[i].getElementsByClassName('step_text')[0].innerText;}}}},
		  {name:'2', func:function() {var steps = document.getElementsByClassName('step');for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute('data-position') == '2') {return steps[i].getElementsByClassName('step_text')[0].innerText;}}}},
		  {name:'3', func:function() {var steps = document.getElementsByClassName('step');for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute('data-position') == '3') {return steps[i].getElementsByClassName('step_text')[0].innerText;}}}},
		  {name:'4', func:function() {var steps = document.getElementsByClassName('step');for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute('data-position') == '4') {return steps[i].getElementsByClassName('step_text')[0].innerText;}}}},
		  {name:'5', func:function() {var steps = document.getElementsByClassName('step');for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute('data-position') == '5') {return steps[i].getElementsByClassName('step_text')[0].innerText;}}}},
		  {name:'6', func:function() {var steps = document.getElementsByClassName('step');for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute('data-position') == '6') {return steps[i].getElementsByClassName('step_text')[0].innerText;}}}},
		  {name:'7', func:function() {var steps = document.getElementsByClassName('step');for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute('data-position') == '7') {return steps[i].getElementsByClassName('step_text')[0].innerText;}}}},
		  {name:'8', func:function() {var steps = document.getElementsByClassName('step');for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute('data-position') == '8') {return steps[i].getElementsByClassName('step_text')[0].innerText;}}}},
		  {name:'9', func:function() {var steps = document.getElementsByClassName('step');for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute('data-position') == '9') {return steps[i].getElementsByClassName('step_text')[0].innerText;}}}}]

		// セクションを読み上げ
		// @param sectionName : 'section_0'〜'section_9'のいずれかの値
		var readSection = function(sectionName) {
			console.log("readSection called!!");
			var text = '未定義';
			sections.forEach(function(section, i) {
				if(section.name == sectionName) {
					text = section.func();
					return false;
				}
			});
			console.log('readSection text=' + text);
			_read(text);
		};

		// 上スクロール
		// @param ammount : スクロール量(px)
		var scrollUp = function(amount) {
			_scroll(+1 * amount);
		};

		// 下スクロール
		// @param ammount : スクロール量(px)
		var scrollDown = function(amount) {
			_scroll(-1 * amount);
		};

		var isScrolling = false;

		// スクロール処理
		// @param amount : px指定、マイナス値だと上へ、プラス値だと下へ
		var _scroll = function(amount) {
			if (amount === 0) return;
			if (isScrolling) return;
			isScrolling = true;

			var scrollby = amount / 6; // スクロール量

			var before = document.body.scrollTop;
			var timerId = setInterval(function() {
				scrollBy(0, scrollby);
				scrollby = scrollby * 0.9;
				if (document.body.scrollTop === 0
						|| (document.body.scrollHeight - window.innerHeight === document.body.scrollTop)
						|| Math.abs(amount) <= Math.abs(before - document.body.scrollTop)) {
					clearInterval(timerId);
					isScrolling = false;
					return;
				}
			}, 5);
		};

		// 音声読み上げ
		// @param text : 読み上げる文章
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
		
		var leftAction = function() { console.log("leftAction!!"); };
		var rightAction = function() {  console.log("rightAction!!"); };
		
		
		return { 
			readSection: readSection, 
			scrollUp: scrollUp, 
			scrollDown: scrollDown, 
			leftAction: leftAction, 
			rightAction: rightAction 
		}
	})();
}