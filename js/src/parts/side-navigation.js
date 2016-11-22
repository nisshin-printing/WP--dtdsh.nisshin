!function($) {
	'use strict';
	
	$(document).ready(() => {
		$('#js-navBtn').click(() => {
			$('body').toggleClass('is-nav-open');
		});
	});
}(jQuery);