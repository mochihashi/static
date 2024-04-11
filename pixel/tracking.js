function includeScript(url, async) {
	if(!url) return;
	var s = document.createElement('script');
	s.type = 'text/javascript'; if(async) s.async = true; s.src = url;
	var d = document.getElementsByTagName('script')[0];
	d.parentNode.insertBefore(s, d);
}

if(location.hostname != '127.0.0.1' && location.hostname != 'localhost') {
	// Global site tag (gtag.js) - Google Analytics
	includeScript("https://www.googletagmanager.com/gtag/js?id=G-6GTS7ZY23E", true);
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-6GTS7ZY23E');
}
