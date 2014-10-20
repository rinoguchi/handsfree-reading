var isRunning = false;
chrome.browserAction.setBadgeText({"text":""});

chrome.browserAction.onClicked.addListener(function () {
	if (!isRunning) {
	  chrome.tabs.executeScript(null, {"code": "if (commander) { commander.start(); }"}, function() {});
		isRunning = true;
		chrome.browserAction.setBadgeText({"text":"on"});
	} else {
	  chrome.tabs.executeScript(null, {"code": "if (commander) { commander.stop(); }"}, function() {});
		isRunning = false;
		chrome.browserAction.setBadgeText({"text":""});
	}
});
