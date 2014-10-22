window.HandsFree = window.HandsFree || (function() {

	function save(opts) {
		chrome.storage.local.set({'options': opts});
	}

	function load(callback) {
		var defaultOption = {'modes': {'speech': true, 'gesture': true}, 'language': 'ja-JP', 'direction': 'horizontal'};

		chrome.storage.local.get('options', function(result) {
			callback(result.options ? result.options : defaultOption);
		});
	}

	function clear() {
		chrome.storage.local.remove('options');
	}

	return { save: save, load: load , clear: clear};

})();
