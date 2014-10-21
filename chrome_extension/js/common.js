window.HandsFree = window.HandsFree || (function() {

	function save(opts) {
		chrome.storage.local.set({'options': opts});
	}

	function load(callback) {
		var defaultOption = {'modes': ['speech', 'gesture'], 'language': 'ja-JP', 'direction': 'horizontal'};

		// 非同期実行
		chrome.storage.local.get('options', function(result) {
			//console.log(result);
			callback(result ? result.options : defaultOption);
		});
	}

  return { save: save, load: load };

})();
