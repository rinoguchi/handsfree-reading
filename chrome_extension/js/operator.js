// chrome extension化した際に、option化の予定
var sections = [
  {name:'zairyo', func:function() {return jQuery.map(jQuery('#ingredients_list .ingredient'), function(e, i) {return jQuery(e).find('.ingredient_name').text() + '、' + jQuery(e).find('.ingredient_quantity').text();}).join('。');}},
  {name:'1', func:function() {return jQuery('.step[data-position=1] .step_text').text();}},
  {name:'2', func:function() {return jQuery('.step[data-position=2] .step_text').text();}},
  {name:'3', func:function() {return jQuery('.step[data-position=3] .step_text').text();}},
  {name:'4', func:function() {return jQuery('.step[data-position=4] .step_text').text();}},
  {name:'5', func:function() {return jQuery('.step[data-position=5] .step_text').text();}},
  {name:'6', func:function() {return jQuery('.step[data-position=6] .step_text').text();}},
  {name:'7', func:function() {return jQuery('.step[data-position=7] .step_text').text();}},
  {name:'8', func:function() {return jQuery('.step[data-position=8] .step_text').text();}},
  {name:'9', func:function() {return jQuery('.step[data-position=9] .step_text').text();}}];

// 以下はchrome extension化しても変更無し
var Operator = function() {
	var self = this;

	// セクションを読み上げ
	// @param sectionName : 'section_0'〜'section_9'のいずれかの値
	self.readSection = function(sectionName) {
		console.log("readSection called!!");
		var text = '未定義';
		jQuery.each(sections, function(i, section) {
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
	var _read = function(text) {
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