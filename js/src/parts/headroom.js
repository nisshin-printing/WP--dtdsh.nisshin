// Headroom.js
{
	'use strict';
	let Headroom = require('../vendor/headroom');
	let headerMain = {
		ele: {
			background: document.querySelector('#l-header .js-headerBackground'),
			container: document.querySelector('#l-header .js-headerContainer'),
			nav: document.querySelector('#l-header .js-headerNav')
		},
		options: {
			classes: {
				initial: 'js-headroom',
				pinned: 'is-pinned',
				unpinned: 'is-unpinned',
				top: 'is-top',
				notTop: 'is-not-top',
				bottom: false,
				notBottom: false
			}
		}
	};
	let headroomContainer = new Headroom(headerMain.ele.container, headerMain.options),
		headroomBackground = new Headroom(headerMain.ele.background, headerMain.options),
		headroomNav = new Headroom(headerMain.ele.nav, headerMain.options);
	headroomBackground.init();
	if (window.matchMedia("(max-width: 1199x)").matches) {
		headroomNav.destroy();
		headroomContainer.init();
	} else if (window.matchMedia("(min-width: 1200px)").matches) {
		headroomContainer.destroy();
		headroomNav.init();
	}
}