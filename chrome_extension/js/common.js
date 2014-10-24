window.HandsFree = window.HandsFree || (function() {

	function save(opts) {
		chrome.storage.local.set({'options': opts});
	}

	function load(callback) {
		var defaultOption = {
			modes: {speech: true, gesture: true},
			language: 'ja-JP',
			direction: 'horizontal',
			siteSettings: [{
					name: 'CookPad',
					url: 'http.*://cookpad.com/.*',
					sections: [
						{ name: 'zairyo', func: 'function() {return Array.prototype.slice.call(document.getElementsByClassName("ingredient")).map(function(e) { var nElms = e.getElementsByClassName("ingredient_name"); var qElms = e.getElementsByClassName("ingredient_quantity"); return (nElms[0] ? nElms[0].innerText : "") + "。" + (qElms[0] ? qElms[0].innerText : "");}).join("。");}' },
						{ name: '1', func: 'function() {return document.getElementsByClassName("step_text")[0].innerText}' },
						{ name: '2', func: 'function() {return document.getElementsByClassName("step_text")[1].innerText}' },
						{ name: '3', func: 'function() {return document.getElementsByClassName("step_text")[2].innerText}' },
						{ name: '4', func: 'function() {return document.getElementsByClassName("step_text")[3].innerText}' },
						{ name: '5', func: 'function() {return document.getElementsByClassName("step_text")[4].innerText}' },
						{ name: '6', func: 'function() {return document.getElementsByClassName("step_text")[5].innerText}' },
						{ name: '7', func: 'function() {return document.getElementsByClassName("step_text")[6].innerText}' },
						{ name: '8', func: 'function() {return document.getElementsByClassName("step_text")[7].innerText}' },
						{ name: '9', func: 'function() {return document.getElementsByClassName("step_text")[8].innerText}' }
					]
				},
				{
					name: 'Demo',
					url: 'http.*://demo.com/.*',
					sections: [
						{ name: '0', func: 'function() {return document.getElementsByTagName("section")[0].innerText;}' },
						{ name: '1', func: 'function() {return document.getElementsByTagName("section")[1].innerText;}' },
						{ name: '2', func: 'function() {return document.getElementsByTagName("section")[2].innerText;}' },
						{ name: '3', func: 'function() {return document.getElementsByTagName("section")[3].innerText;}' },
						{ name: '4', func: 'function() {return document.getElementsByTagName("section")[4].innerText;}' },
						{ name: '5', func: 'function() {return document.getElementsByTagName("section")[5].innerText;}' },
						{ name: '6', func: 'function() {return document.getElementsByTagName("section")[6].innerText;}' },
						{ name: '7', func: 'function() {return document.getElementsByTagName("section")[7].innerText;}' },
						{ name: '8', func: 'function() {return document.getElementsByTagName("section")[8].innerText;}' },
						{ name: '9', func: 'function() {return document.getElementsByTagName("section")[9].innerText;}' }
					]
				}
			]
		};

		chrome.storage.local.get('options', function(result) {
			callback(result.options ? result.options : defaultOption);
		});
	}

	function clear() {
		chrome.storage.local.remove('options');
	}

	return { save: save, load: load , clear: clear};

})();
