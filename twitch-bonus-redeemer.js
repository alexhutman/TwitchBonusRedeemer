let intervalSecs = 5;

let minJitterMs = 45;
let maxJitterMs = 1250;
let inclusiveJitterDiff = maxJitterMs - minJitterMs + 1;

// Check to see if the button is back after `intervalSecs` number of seconds passes
function checkButton() {
	// Array with either 0 elements if the button isn't back, or 1 if it is back
	let pointsButton = document.querySelector('button[aria-label="Claim Bonus"]');

	// If the button is back
	if (pointsButton) {
		// Introduce a random jitter just in case Twitch is onto us monkaW
		let randJitter = Math.floor(Math.random() * inclusiveJitterDiff + minJitterMs);

		// Click the button after `randJitter` ms
		setTimeout(function() {
			pointsButton.click();
			//console.log("Redeemed bonus Twitch points!");
		}, randJitter);
	}
}

setInterval(checkButton, intervalSecs*1000);
