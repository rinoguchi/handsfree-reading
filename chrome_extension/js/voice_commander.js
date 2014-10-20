var VoiceCommander = function() {
  var self = this;

  // オペレータをセット
  self.operator;
  self.setOperator = function(operator) {
    self.operator = operator;
    console.log("VoiceCommander setOperator!!");
  };

  // 音声認識を開始
  self.start = function() {
    console.log("VoiceCommander start!!");
    self.operator.readSection('command_1');
  };

  // 音声認識を停止
  self.stop = function() {
    console.log("VoiceCommander stop!!");
  };

};