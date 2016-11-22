! function ($) {
	'use strict';

	/*
	 * Function about Write Fullscreen Contact Form Text.
	 * Functions
	 */
	let metaBg = $('meta[theme-color]'),
		contact = $('#js-contact'),
		ctsWel = $('#js-welcome .js-contactStep'),
		ctsCta = $('#js-ctform .js-contactStep');

	// Loading Effects.
	$(window).load(() => {
		$('body').toggleClass('is-loading is-loaded');
		$('#l-loader').addClass('a-done');
		if ($('body').hasClass('is-contact-open')) {
			isHeadroomPin(false);
			contactMessage(ctsWel);
			setTimeout(function() {
				ctsWel.removeClass('is-active');
				$('body').toggleClass('is-contact-open u-background u-background_alt is-welcome');
				metaBg.attr('content', '#FFF');
				isHeadroomPin(true);
			}, 3000);
		}
		setTimeout(function() {
			ctsWel.css('display', 'none');
		}, 3500);
	});
	
	// Click the Contact-Button.
	$('#js-contactOpen').click(() => {
		if (!$('body').hasClass('is-contact-open')) {
			// Opening function.
			$('body').toggleClass('is-contact-open u-background u-background_alt');
			metaBg.attr('content', contact.data('bgColor'));
			isHeadroomPin(true);
			contactMessage(ctsCta);
		} else {
			// Closing function.
			$('body').toggleClass('is-contact-open u-background u-background_alt');
			metaBg.attr('content', '#FFF');
			ctsCta.removeClass('is-active');
		}
	});
	
	/*
	 * Functions
	 */
	function contactMessage(ele) {
		ele.each(function(i) {
			let _this = $(this),
				delayAni = 200 * i;
			setTimeout(function() {
				_this.addClass('is-active');
			}, delayAni);
		});
	}
	function isHeadroomPin(pin = true) {
		let sp = $('#l-header .js-headerContainer, #l-header .js-headerBackground'),
			pc = $('#l-header .js-headerNav, #l-header .js-headerBackground');
		if (pin) {
			if (window.matchMedia("(max-width: 640px)").matches) {
				sp.addClass('is-pinned').removeClass('is-unpinned');
			} else {
				pc.addClass('is-pinned').removeClass('is-unpinned');
			}
		} else {
			if (window.matchMedia("(max-width: 640px)").matches) {
				sp.removeClass('is-pinned').addClass('is-unpinned');
			} else {
				pc.removeClass('is-pinned').addClass('is-unpinned');
			}
		}
	}
}(jQuery);