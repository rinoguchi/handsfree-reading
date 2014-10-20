var commander = function() {
  var operator = new Operator();
  
  function stop() {
    new VoiceCommander().setOperator(operator).stop()
    new GestureCommander().setOperator(operator).stop()
  }
  
  function start() {
    new VoiceCommander().setOperator(operator).start()
    new GestureCommander().setOperator(operator).start()
  }
};
