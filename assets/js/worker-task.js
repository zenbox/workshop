/**
 * WORKER TASK
 *
 * @author Michael [michael@zenbox.de]
 * @since 23.04.2015
 */

'use strict';
for (var member in self)
	console.log(member);

var 
	xhr = new XMLHttpRequest(),

	askChuck  = function () {},
	terminate = function () {},
	onJoke    = function () {},
	onMessage = function () {},
endvar;

askChuck = function () {
	xhr.open('GET', 'http://api.icndb.com/jokes/random');
	xhr.send();

	xhr.addEventListener('readystatechange', onJoke);
};
terminate = function () {
	self.close();
};
onJoke = function (event) {
	var 
		joke = undefined,
		data = {}
	endvar;

	if (xhr.readyState === 4) {
		switch (xhr.status) {
			case 200:
			case 304:
				// HIER UMFANGREICHE BERECHNUNGEN ...
				data = JSON.parse(xhr.responseText);
				joke = data.value.joke;
				self.postMessage(joke);
				break;
			default:
				self.postMessage('no jokes available ...');
				break;
		}
	};
};
onMessage = function (event) {
	console.log('Nachricht von Main:' + event.data);
	askChuck();
};


self.addEventListener('message', onMessage);

setInterval(askChuck, 15000);

