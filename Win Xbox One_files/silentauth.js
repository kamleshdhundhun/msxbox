if (window.addEventListener) {
	window.addEventListener("load", RefreshRemoteSession, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", RefreshRemoteSession);
} else {
	window.onload = RefreshRemoteSession;
}

function RefreshRemoteSession() {
	RefreshSession("https://controllers.xbox.com/en-us/mscomhp/onerf/IsUserAuthenticated", "https://controllers.xbox.com/en-us/mscomhp/onerf/MeSilentPassport");
	RefreshSession("https://www.microsoft.com/en-us/mscomhp/onerf/IsUserAuthenticated", "https://www.microsoft.com/en-us/mscomhp/onerf/MeSilentPassport");
}

function RefreshSession(isUserAuthenticatedApi, silentPassport) {
	$.ajax(isUserAuthenticatedApi, {
		type: "GET",
		contentType: "text/plain",
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		statusCode: {
			'400': function () {
				var i = document.createElement("iframe");
				i.src = silentPassport;
				i.setAttribute("width", "0");
				i.setAttribute("height", "0");
				i.setAttribute("border", "0");
				i.setAttribute("frameborder", "0");
				i.setAttribute("style", "display: none");
				i.style = "display: none";
				document.body.appendChild(i);
			}
		}
	});
}