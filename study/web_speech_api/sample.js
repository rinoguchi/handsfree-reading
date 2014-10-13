var recognition;
var recognizing = false;
var commands = [{words:['ざいりょう','材料'], fnc:function(){return jQuery.map($('#ingredients_list .ingredient'), function(e, i) {return jQuery(e).find('.ingredient_name').text() + '、' + jQuery(e).find('.ingredient_quantity').text();}).join('。');}}
               ,{words:['いち','1'], fnc:function(){return jQuery('#1').text();}}
               ,{words:['に','2'], fnc:function(){return jQuery('#2').text();}}
               ,{words:['さん','3'], fnc:function(){return jQuery('#3').text();}}];


// 音声認識開始
function recognition_start () {
    if (!'webkitSpeechRecognition' in window) {
        alert('Web Speech API には未対応です.');
        return;
    }

    recognizing = true;
    recognition = new webkitSpeechRecognition();
    recognition.lang = 'ja-JP';
    recognition.continuous = true; // 継続入力
    recognition.interimResults = false;  // 中間結果取得（true:する, false:しない）
    recognition.onresult = function (e) { // 結果取得コールバック
        var finalVoice = '';
        var interimVoice = ''; // 当面使わない
        for (var i = 0; i < e.results.length; i++) {
            if (e.results[i].isFinal) {
                finalVoice = e.results[i][0].transcript;
                interimVoice = '';
            } else {
                interimVoice += e.results[i][0].transcript;
            }
        }
        console.log('finalVoice:' + finalVoice);
        command = getCommand(finalVoice);
        if (command) speak(command.fnc());
    };
    recognition.onend = function (e) {console.log('recognition finished');}
    recognition.start();
    console.log('recognition started');
};

// 音声認識終了
function recognition_stop() {
    recognition.stop();
    recognizing = false;
    console.log('recognition stopped');
}

// テキスト読み上げ
function speak(text) {
    if (!'SpeechSynthesisUtterance' in window) {
        alert('Web Speech API には未対応です.');
        return;
    }
    var msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 2;
    msg.text = text;
    msg.lang = 'ja-UP'; // en-US or ja-UP
    msg.onend = function (event) {
        console.log('speech end.');
    }
    speechSynthesis.speak(msg);
}

// 音声に対応する指示を取得
function getCommand(input) {
    var command;
    jQuery.each(commands, function(i, e) {
        if(jQuery.inArray(jQuery.trim(input), e.words) != -1) {
            command = e;
            return false;
        }
    });
    return command;
}
