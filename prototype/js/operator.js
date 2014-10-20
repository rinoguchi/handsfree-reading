// chrome extension化した際に、option化の予定
var sections = [
  {name:'zairyo', fnc:function(){return '材料を読み上げる関数';}},
  {name:'1', fnc:function(){return 'レシピの項１を読み上げる関数';}},
  {name:'2', fnc:function(){return 'レシピの項２を読み上げる関数';}},
  {name:'3', fnc:function(){return 'レシピの項３を読み上げる関数';}},
  {name:'4', fnc:function(){return 'レシピの項４を読み上げる関数';}},
  {name:'5', fnc:function(){return 'レシピの項５を読み上げる関数';}},
  {name:'6', fnc:function(){return 'レシピの項６を読み上げる関数';}},
  {name:'7', fnc:function(){return 'レシピの項７を読み上げる関数';}},
  {name:'8', fnc:function(){return 'レシピの項８を読み上げる関数';}},
  {name:'9', fnc:function(){return 'レシピの項９を読み上げる関数';}}];

// 以下はchrome extension化しても変更無し
var Operator = function() {
  var self = this;

  // セクションを読み上げ
  // @param sectionName : sections.nameの値
  self.readSection = function(sectionName) {
    var text = '指示内容が定義されていません。';
    jQuery.each(sections, function(i, section) {
      if(section.name == sectionName) {
        text = section.fnc();
        return false;
      }
    });
    self._read(text);
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