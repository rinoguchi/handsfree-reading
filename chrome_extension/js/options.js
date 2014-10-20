var options = load();

$(document).ready(function(){

	$('#' + options.mode).attr('checked', 'checked');
	$('#saveMode').click(function() {
		options.mode = $('input[name="mode"]:checked').val();
		save(options);
	});

	$('#' + options.language).attr('checked', 'checked');
	$('#saveLanguage').click(function() {
		options.language = $('input[name="language"]:checked').val();
		save(options);
	});

});
