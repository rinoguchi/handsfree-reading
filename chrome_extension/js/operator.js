// chrome extension化した際に、option化の予定
var sections = [
  {name:'zairyo', fnc:"$.map($('#ingredients_list .ingredient'), function(e, i) {return jQuery(e).find('.ingredient_name').text() + '、' + jQuery(e).find('.ingredient_quantity').text();}).join('。');"},
  {name:'1', fnc:"$('.step[data-position=1] .step_text').text()"},
  {name:'2', fnc:"$('.step[data-position=2] .step_text').text()"},
  {name:'3', fnc:"$('.step[data-position=3] .step_text').text()"},
  {name:'4', fnc:"$('.step[data-position=4] .step_text').text()"},
  {name:'5', fnc:"$('.step[data-position=5] .step_text').text()"},
  {name:'6', fnc:"$('.step[data-position=6] .step_text').text()"},
  {name:'7', fnc:"$('.step[data-position=7] .step_text').text()"},
  {name:'8', fnc:"$('.step[data-position=8] .step_text').text()"},
  {name:'9', fnc:"$('.step[data-position=9] .step_text').text()"}];

// 以下はchrome extension化しても変更無し
var Operator = function() {
  var self = this;

	// セクションを読み上げ
	// @param sectionName : 'section_0'〜'section_9'のいずれかの値
	self.readSection = function(sectionName) {
		jQuery.each(sections, function(i, section) {
			if(section.name == sectionName) {
				chrome.tabs.executeScript(
						null,
						{"file": "js/jquery-2.1.1.min.js"},
						function() {chrome.tabs.executeScript(
								null,
								{"code": section.fnc},
								function(results) {self._read(results[0]);}
						)}
				);
				return false;
			}
		});
	};

	// 上スクロール
	// @param ammount : スクロール量(px)
	self.scrollUp = function(amount) {
		position = jQuery(window).scrollTop() - amount;
		jQuery('html,body').animate({ scrollTop: position });
	}

	// 下スクロール
	// @param ammount : スクロール量(px)
	self.scrollDown = function(amount) {
		position = jQuery(window).scrollTop() + amount;
		jQuery('html,body').animate({ scrollTop: position });
	}

	// 音声読み上げ
	// @param text : 読み上げる文章
	self._read = function(text) {
		if (!'SpeechSynthesisUtterance' in window) {
			alert('Web Speech API には未対応です。');
			return;
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
	}

};