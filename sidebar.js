document.addEventListener("DOMContentLoaded", function(event) {
	document.title = "Twitter for Opera Sidebar";
	iframe = document.createElement("iframe");
	iframe.src = "https://mobile.twitter.com/";
	document.body.appendChild(iframe);
	iframe.contentWindow.focus();
});