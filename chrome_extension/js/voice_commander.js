if (window.HandsFree) {
	window.HandsFree.voice = (function() {

		function log(obj) {
			if (typeof obj == 'string' || obj instanceof String) {
				console.log("VoiceCommander: " + obj);
			} else {
				console.log("VoiceCommander: ");
				console.log(obj);
			}
		}

		var commands
		var operator;
		var recognition;
		var recognizing = false;

		function init(options) {
			commands = [
				{ texts: ["上","うえ","アップ"],     onMatch: function() { operator.scrollUp(300);    } }
				, { texts: ["下","した","ダウン"],   onMatch: function() { operator.scrollDown(300); } }
				, { texts: ["次","つぎ"],            onMatch: function() { operator.leftAction();    } }
				, { texts: ["前","まえ","戻る","もどる"],   onMatch: function() { operator.rightAction(); } }
				, { texts: ["材料"],                 onMatch: function() { operator.readSection("zairyo");   } }
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

			recognition = new webkitSpeechRecognition();
			recognition.lang = options.lang || "ja-JP";
			recognition.continuous = false;
			recognition.interimResults = true;

			recognition.onend = function(event) {
				log("recognition ended.");
				recognition.start();
				//recognizing = false;
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
		}

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

		// オペレータをセット
		function setOperator(_operator) {
			operator = _operator;
			log("operater is set");
		};

		// 外部に公開する関数だけを返却
		return { start: start, stop: stop, setOperator: setOperator, init: init };
	})();
}
