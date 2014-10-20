function save(opts) {
	chrome.storage.local.set({'options': opts});
}

function load(callback) {
	// 非同期実行
	chrome.storage.local.get('options', function(result) {
		options = result.options || {'modes': ['speech'], 'language': 'ja-JP', 'direction': 'horizontal'};
		callback(options);
	});

}