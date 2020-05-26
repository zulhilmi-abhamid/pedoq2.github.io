window.onload = () => {
	'use strict';

	if ('serviceWorker' in navigator) {
		'use strict';
		navigator.serviceWorker.register('sw.js').then(function (registration) {
			console.log('Service worker registered successfully', registration);
		}).catch(function (err) {
			console.log('Service worker registration failed: ', err);
		});
	};
}
