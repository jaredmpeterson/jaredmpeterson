// var today = moment().format("ddd MMM Do h:mm A");
// document.getElementById('dandt').innerHTML=today;

(function () {

	var dandt = document.getElementById('dandt');

	function updateClock(clock) {
		clock.innerHTML = moment().format('ddd MMM Do h:mm:ss A');
	}

	setInterval(function () {
		updateClock(dandt);
	}, 1000);

}());

$('article').draggable({ handle: '.title' });
