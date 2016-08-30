// var today = moment().format("ddd MMM Do h:mm A");
// document.getElementById('dandt').innerHTML=today;

(function () {

	var dandt = document.getElementById('dandt');

	function updateClock(clock) {
		clock.innerHTML = moment().format("ddd MMM Do h:mm:ss A");
	}

	setInterval(function () {
		updateClock(dandt);
	}, 1000);

}());



window.addEventListener('load', function () {
	Blue.mount(document.getElementById('bodyLabsBlueWidget'), {
		accessKey: AK903f7f6b8ca8731562ea9e38c753dfe8,
		debug: false,
		action: {
			onFinished: function (finalMeasurements) {
				// insert your function here
			},
		},
	});
});
