'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
//	var allLikeBtns = document.getElementsByClassName('likeBtn');
//	allLikeBtns.click(sendAnalytics);
	$(document).on("click", ".likeBtn", sendAnalytics);
}

function sendAnalytics() {
	ga("send", "event", 'like', 'click');
}