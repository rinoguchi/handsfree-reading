var GestureCommander = function() {
  var self = this;

  $("body").bind("webcamSwipeLeft", next);
  $("body").bind("webcamSwipeRight", previous);

  function next() {
    console.log("goto next page");
  }

  function previous() {
    console.log("goto previous page");
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
