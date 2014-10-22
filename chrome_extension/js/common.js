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
					url: 'http://cookpad.com/.*',
					sections: [
						{ name: 'zairyo', func: 'function() {var ingredients = document.getElementById("ingredients_list").children;var text = "";for (var i = 0; i < ingredients.length; i++) {var ingredient = ingredients[i];text = text + ingredient.getElementsByClassName("ingredient_name")[0].innerText + "、" + ingredient.getElementsByClassName("ingredient_quantity amount")[0].innerText + "。";}return text;}' },
						{ name: '1', func: 'function() {var steps = document.getElementsByClassName("step");for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute("data-position") == "1") {return steps[i].getElementsByClassName("step_text")[0].innerText;}}}' },
						{ name: '2', func: 'function() {var steps = document.getElementsByClassName("step");for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute("data-position") == "2") {return steps[i].getElementsByClassName("step_text")[0].innerText;}}}' },
						{ name: '3', func: 'function() {var steps = document.getElementsByClassName("step");for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute("data-position") == "3") {return steps[i].getElementsByClassName("step_text")[0].innerText;}}}' },
						{ name: '4', func: 'function() {var steps = document.getElementsByClassName("step");for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute("data-position") == "4") {return steps[i].getElementsByClassName("step_text")[0].innerText;}}}' },
						{ name: '5', func: 'function() {var steps = document.getElementsByClassName("step");for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute("data-position") == "5") {return steps[i].getElementsByClassName("step_text")[0].innerText;}}}' },
						{ name: '6', func: 'function() {var steps = document.getElementsByClassName("step");for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute("data-position") == "6") {return steps[i].getElementsByClassName("step_text")[0].innerText;}}}' },
						{ name: '7', func: 'function() {var steps = document.getElementsByClassName("step");for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute("data-position") == "7") {return steps[i].getElementsByClassName("step_text")[0].innerText;}}}' },
						{ name: '8', func: 'function() {var steps = document.getElementsByClassName("step");for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute("data-position") == "8") {return steps[i].getElementsByClassName("step_text")[0].innerText;}}}' },
						{ name: '9', func: 'function() {var steps = document.getElementsByClassName("step");for (var i = 0; i < steps.length; i++) {if (steps[i].getAttribute("data-position") == "9") {return steps[i].getElementsByClassName("step_text")[0].innerText;}}}' }
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
