var commander = commander || (function() {

	var operator;
	var voice;
	var gesture;
	var options = { "modes" : ["speech","gesture"] };

	function start() {
	  operator = new Operator();

		for (var i=0; i< options.modes.length; i++) {
      var mode = options.modes[i];
      if (mode === 'speech') {
			  voice = new VoiceCommander(options);
			  voice.setOperator(operator);
			  voice.start();
      } else if (mode === 'gesture') {
			  gesture = new GestureCommander(options);
			  gesture.setOperator(operator);
			  gesture.start();
      }
    }
	}

  
  function stop() {
    voice.stop();
    gesture.stop();
  }

  return {
    start: start,
    stop:  stop
  };
})();

console.log("commander is set up");