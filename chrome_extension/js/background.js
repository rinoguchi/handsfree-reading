var isRunning = false;
chrome.browserAction.setBadgeText({"text":""});

var start = function() {
	chrome.tabs.executeScript(null, {"code": "if (window.HandsFree) { window.HandsFree.start(); }"}, function() {});
	isRunning = true;
	chrome.browserAction.setBadgeText({"text":"on"});
}

var stop = function() {
	chrome.tabs.executeScript(null, {"code": "if (window.HandsFree) { window.HandsFree.stop(); }"}, function() {});
	isRunning = false;
	chrome.browserAction.setBadgeText({"text":""});

}

chrome.browserAction.onClicked.addListener(function () {
	if (!isRunning) {
		start();
	} else {
		stop();
	}
});

chrome.runtime.onMessage.addListener(function(request) {
	if(request.shouldStop) {
		stop();
	}
});

//タブ切り替え時にstopしたいが、これだと移動先のtab側でstopが呼ばれて、移動元のstopが呼べない...
//chrome.tabs.onActiveChanged.addListener(function() {
//	stop();
//});

