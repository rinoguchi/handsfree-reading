<<<<<<< HEAD
var VoiceCommander = (function() {
 
  function log(obj) {
    if (typeof obj == 'string' || obj instanceof String) {
      console.log("VoiceCommander: " + obj);
    } else {
      console.log("VoiceCommander: ");
      console.log(obj);
    }
  }
 
  // オペレータをセット
  function setOperator(_operator) {
    operator = _operator;
    log("operater is set");
  };
 
  // 音声認識を開始
  function start() {
    if (!recognizing) {
      recognition.start();
      recognizing = true;
      log("started");
    }
  };
 
  // 音声認識を停止
  function stop() {
    if (recognizing) {
      recognition.stop();
      recognizing = false;
      log("stopped");
    }
  };
 
  var operator;
  var recognition = new webkitSpeechRecognition();
  var recognizing = false;
 
  recognition.lang = "ja-JP";
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onend = function(event) {
    log(event);
    recognizing = false;
  }
 
  recognition.onresult = function(event) { 
    log(event);
 
    for (var i=0; i<event.results.length; i++) {
      var result = event.results[i];
      var transcript = result[0].transcript;
      log(transcript);
 
      if (result.isFinal) {
        log("recognition finished: " + transcript);
        commandTexts = transcript.split(" ");
        for (var j=0; j<commandTexts.length; j++) {
          detectCommand(commandTexts[j]);
        }
      } else {
        log("recognizing... : " + transcript);
      }
    }
  }
  
  var commands = [
      { texts: ["上","うえ","アップ"],     onMatch: function() { operator.scrollUp(100);    } }
    , { texts: ["下","した","ダウン"],   onMatch: function() { operator.scrollDown(100); } }
    , { texts: ["材料"],                 onMatch: function() { operator.readSection("zairyou");   } }
    , { texts: ["１","1","一","いち"],   onMatch: function() { operator.readSection("1");   } }
    , { texts: ["2"], onMatch: function() { operator.readSection("2");   } }
    , { texts: ["3"], onMatch: function() { operator.readSection("3");   } }
    , { texts: ["4"], onMatch: function() { operator.readSection("4");   } }
    , { texts: ["5"], onMatch: function() { operator.readSection("5");   } }
    , { texts: ["6"], onMatch: function() { operator.readSection("6");   } }
    , { texts: ["7"], onMatch: function() { operator.readSection("7");   } }
    , { texts: ["8"], onMatch: function() { operator.readSection("8");   } }
    , { texts: ["9"], onMatch: function() { operator.readSection("9");   } }
  ];
 
  // 検出した単語にマッチするコマンドがあれば実行する
  function detectCommand(text) {
    for (var i=0; i< commands.length; i++) {
      var command = commands[i];
      for (var j=0; j<command.texts.length; j++) {
        if (text === command.texts[j]) {
          log("matched:" + command.texts[j]);
          command.onMatch();
          return true;
        }
      }
    }
    return false;
  }
 
  // 外部に公開する関数だけを返却
  return function() {
    this.stop  = stop
    this.start = start
    this.setOperator = setOperator
  };
})();
=======
var VoiceCommander = function(options) {
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
		//self.operator.readSection('1');
		//self.operator.scrollDown(500);
	};

	// 音声認識を停止
	self.stop = function() {
		console.log("VoiceCommander stop!!");
	};

};
>>>>>>> 7332fb62ebcfa23feba05a30071050884d44f20a
