// chrome extension化した際に、option化の予定
var commands = [
  {name:'command_0', fnc:function(){return '材料を読み上げる関数';}},
  {name:'command_1', fnc:function(){return 'レシピの項１を読み上げる関数';}},
  {name:'command_2', fnc:function(){return 'レシピの項２を読み上げる関数';}},
  {name:'command_3', fnc:function(){return 'レシピの項３を読み上げる関数';}},
  {name:'command_4', fnc:function(){return 'レシピの項４を読み上げる関数';}},
  {name:'command_5', fnc:function(){return 'レシピの項５を読み上げる関数';}},
  {name:'command_6', fnc:function(){return 'レシピの項６を読み上げる関数';}},
  {name:'command_7', fnc:function(){return 'レシピの項７を読み上げる関数';}},
  {name:'command_8', fnc:function(){return 'レシピの項８を読み上げる関数';}},
  {name:'command_9', fnc:function(){return 'レシピの項９を読み上げる関数';}}];

// 以下はchrome extension化しても変更無し
var Operator = function() {
  var self = this;

  // セクションを読み上げ
  // @param commandName : 'command_0'〜'command_9'のいずれかの値
  self.readSection = function(commandName) {
    var text = '指示内容が定義されていません。';
    jQuery.each(commands, function(i, command) {
      if(command.name == commandName) {
        text = command.fnc();
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