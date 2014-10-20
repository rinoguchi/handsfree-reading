
var commander = function() {
  var operator = new Operator();
  var voice =   new VoiceCommander();
  var gesture = new GestureCommander();
  voice.setOperator(operator);
  gesture.setOperator(operator);
  
  function stop() {
    voice.stop()
    gesture.stop()
  }
  
  function start() {
    voice.start()
    gesture.start()
  }
};
