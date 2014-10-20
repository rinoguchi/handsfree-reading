jQuery(document).ready(function(){

	load(function(options) {

		jQuery.each(options.modes, function(i, mode) {
			jQuery('#' + mode).attr('checked', 'checked');
		});
		jQuery('#saveModes').click(function() {
			options.modes = [];
			jQuery.each(jQuery('input[name="modes"]:checked'), function(i, mode) {
				options.modes.push($(mode).val());
			});
			save(options);
		});

		jQuery('#' + options.language).attr('checked', 'checked');
		jQuery('#saveLanguage').click(function() {
			options.language = jQuery('input[name="language"]:checked').val();
			save(options);
		});

		jQuery('#' + options.direction).attr('checked', 'checked');
		jQuery('#saveDirection').click(function() {
			options.language = jQuery('input[name="direction"]:checked').val();
			save(options);
		});

	});

});