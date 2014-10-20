function save(opts) {
	localStorage.options = JSON.stringfy(opts);
}

function load() {
	return JSON.parse(
		localStorage.options || 
		'{"mode": "speech", "language": "ja-JP"}');
}