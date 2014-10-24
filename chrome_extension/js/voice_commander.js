if (window.HandsFree) {
	window.HandsFree.voice = (function() {

		// simple logging
		function log(obj) {
			if (typeof obj == 'string' || obj instanceof String) {
				console.log("VoiceCommander: " + obj);
			} else {
				console.log("VoiceCommander: ");
				console.log(obj);
			}
		}

		var commands = [
			{ texts: ["上","うえ","アップ"],        onMatch: function() { operator.scrollUp(300);    } }, 
			{ texts: ["下","した","ダウン"],        onMatch: function() { operator.scrollDown(300); } }, 
			{ texts: ["次","つぎ"],              onMatch: function() { operator.leftAction();    } }, 
			{ texts: ["前","まえ","戻る","もどる"], onMatch: function() { operator.rightAction(); } }, 
			{ texts: ["材料"],                  onMatch: function() { operator.readSection("zairyo");   } }, 
			{ texts: ["１","1","一","いち"],      onMatch: function() { operator.readSection("1");   } }, 
			{ texts: ["2"], onMatch: function() { operator.readSection("2");   } }, 
			{ texts: ["3"], onMatch: function() { operator.readSection("3");   } }, 
			{ texts: ["4"], onMatch: function() { operator.readSection("4");   } }, 
			{ texts: ["5"], onMatch: function() { operator.readSection("5");   } }, 
			{ texts: ["6"], onMatch: function() { operator.readSection("6");   } }, 
			{ texts: ["7"], onMatch: function() { operator.readSection("7");   } }, 
			{ texts: ["8"], onMatch: function() { operator.readSection("8");   } }, 
			{ texts: ["9"], onMatch: function() { operator.readSection("9");   } }
		];  

		var operator;
		var recognition;
		var recognizing = false;

		function init(options) {
		    if (!'webkitSpeechRecognition' in window) {
		        alert('Web Speech API に未対応です.');
		        return;
		    }

			recognition = new webkitSpeechRecognition();
			recognition.lang = options.lang || "ja-JP";
			recognition.continuous = true;
			recognition.interimResults = true;

			recognition.onend = function(event) {
				log("recognition ended.");
				if (recognizing) {
					recognition.start();
				}
			}
			
			recognition.onstart = function(event) {
				log("recognition started.");
			}

			recognition.onerror = function(event) {
				if (event.error === "aborted") {
					return;
				}
				recognizing = false;
				log("Error occured. recognition stopped.");
				log(event);
			}

			recognition.onresult = function(event) { 
				if (event.results.length > 0) {
					var result = event.results[0];
					var transcript = result[0].transcript;

					if (result.isFinal) {
						log("recognition finished: " + transcript);
						detectCommandList(transcript);
					} else {
						log("recognizing... : " + transcript);
						detectCommandList(transcript);
						recognition.abort();
					}
				}
			}
		}

		// 空白文字区切りテキストを複数のコマンドの並びとして解釈・実行する
		function detectCommandList(text) {
			commandTexts = text.split(" ");
			for (var j=0; j<commandTexts.length; j++) {
				detectCommand(commandTexts[j]);
			}
		}
		
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
			log("not matched any command: " + text);
			return false;
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

		// オペレータをセット
		function setOperator(_operator) {
			operator = _operator;
			log("operater is set");
		};

		// 外部に公開する関数だけを返却
		return { start: start, stop: stop, setOperator: setOperator, init: init };
	})();
}
