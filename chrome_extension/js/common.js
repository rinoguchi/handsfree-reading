function save(opts) {
	localStorage.options = JSON.stringify(opts);
}

function load() {
	return JSON.parse(
		localStorage.options || 
		'{"modes": ["speech"], "language": "ja-JP", "direction": "horizontal"}');
}