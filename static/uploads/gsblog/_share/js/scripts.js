addLoadEvent(function() {
	loadSafHacks("/_share/css/screen/patches/mac-saf.css");
});

/*
	JS hack for Safari.
	I'm not proud of this.
*/
function loadSafHacks(url) {
	var isSaf = (document.childNodes && !document.all && !navigator.taintEnabled) ? true : false;

	// Is this Safari?
	if (document.createElement && isSaf) {
		var link = document.createElement("link");
		link.setAttribute("media", "screen, projection");
		link.setAttribute("rel", "stylesheet");
		link.href = url;

		var head = document.getElementsByTagName("head")[0];
		head.appendChild(link);
	}
}


/*-  Initialize sIFR
----------------------------------------------------------------------*/
var fago = {
	src: '/_share/swf/fagoco-med-roman.swf'
};

/*sIFR.debugMode = true;*/
sIFR.prefetch(fago);
sIFR.activate();

sIFR.replace(fago, {
	selector: '#main-lead h4.main',
	css: [
		'.sIFR-root { color: #000000; }'
	],
	wmode: 'transparent'
});

sIFR.replace(fago, {
	selector: '.module h4.title',
	css: [
		'.sIFR-root { color: #000000; text-transform: uppercase; }'
	],
	wmode: 'transparent'
});

sIFR.replace(fago, {
	selector: '#single h2',
	css: [
		'.sIFR-root { color: #000000; text-transform: uppercase; }'
	],
	wmode: 'transparent'
});

sIFR.replace(fago, {
	selector: '#article h2',
	css: [
		'.sIFR-root { color: #000000; text-transform: uppercase; }'
	],
	wmode: 'transparent'
});


/*-  Utility functions
----------------------------------------------------------------------*/
/*
	Add Load Event
*/
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
