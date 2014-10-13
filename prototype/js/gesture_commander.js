var GestureCommander = function() {
  var self = this;

  // オペレータをセット
  self.operator;
  self.setOperator = function(operator) {
    self.operator = operator;
    console.log("GestureCommander setOperator!!");
  };

  // ジェスチャー認識を開始
  self.start = function() {
    console.log("GestureCommander start!!");
  };

  // ジェスチャー認識を停止
  self.stop = function() {
    console.log("GestureCommander stop!!");
  };

};