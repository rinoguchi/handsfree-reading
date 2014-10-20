function save(opts) {
	localStorage.options = JSON.stringify(opts);
}

function load() {
	return JSON.parse(
		localStorage.options || 
		'{"mode": "speech", "language": "ja-JP"}');
}