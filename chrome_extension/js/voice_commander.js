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
		self.operator.readSection('1');
		//self.operator.scrollDown(500);
	};

	// 音声認識を停止
	self.stop = function() {
		console.log("VoiceCommander stop!!");
	};

};