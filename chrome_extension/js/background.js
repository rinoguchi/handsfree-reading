var isStart = false;
chrome.browserAction.setBadgeText({"text":"off"});

chrome.browserAction.onClicked.addListener(function () {
	if (!isStart) {
		chrome.tabs.executeScript(null, 
			{
				"code": "commander.start();"
			}
			, function(){}
		);
		isStart = true;
		chrome.browserAction.setBadgeText({"text":"on"});
	} else {
		chrome.tabs.executeScript(null, 
			{
				"code": "commander.stop();"
			}
			, function(){}
		);
		isStart = false;
		chrome.browserAction.setBadgeText({"text":"off"});
	}
});
