var GestureCommander = function(options) {
  var self = this;

  document.getElementsByTagName("body")[0].onWebcamSwipeLeft = next;
  document.getElementsByTagName("body")[0].onWebcamSwipeRight = previous;

  function next() {
    operator.rightAction();
  }

  function previous() {
    operator.leftAction();
  }

  // オペレータをセット
  self.operator;
  self.setOperator = function(operator) {
    self.operator = operator;
    console.log("GestureCommander setOperator!!");
  };

  // ジェスチャー認識を開始
  self.start = function() {
    console.log("GestureCommander start!!");
    window.initializeWebcamSwiper();
  };

  // ジェスチャー認識を停止
  self.stop = function() {
    console.log("GestureCommander stop!!");
    window.destroyWebcamSwiper();
  };

};
