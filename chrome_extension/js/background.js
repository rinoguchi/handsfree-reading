var options = load();

if (options.mode === 'speech') {
	var commander = new VoiceCommander();
} else {
	var commander = new GestureCommander();
}
commander.setOperator(new Operator());
chrome.browserAction.setBadgeText({"text":"off"});

$(document).ready(function(){
	// 今のところ何もなし
});

// アイコンクリック時の動作
var isStart = false;
chrome.browserAction.onClicked.addListener(function () {
	if (!isStart) {
		commander.start();
		isStart = true;
		chrome.browserAction.setBadgeText({"text":"on"});
	} else {
		commander.stop();
		isStart = false;
		chrome.browserAction.setBadgeText({"text":"off"});
	}


//	chrome.tabs.executeScript(null, {
//		"code": "alert('call Script');"
//	});

});
