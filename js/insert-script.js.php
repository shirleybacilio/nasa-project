'use strict';

var site_url = 'http://ec2-52-91-192-232.compute-1.amazonaws.com/'; 

var mobileNavScript = site_url + 'js/app/src/nav-mobile.js',
		desktopNavScript = site_url + 'js/app/src/nav-desktop.js';

if (WURFL.is_mobile) {
	addScript(mobileNavScript);
} else {
	addScript(desktopNavScript);
}

function addScript(deviceScript){
	var script = document.createElement('script'),
			src = deviceScript;

	script.src = src;
	document.body.appendChild(script);
}