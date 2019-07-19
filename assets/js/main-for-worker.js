/**
 * WORKER DRIVEN MODULE
 *
 * @author Michael [michael@zenbox.de]
 * @since 23.04.2015
 */




// Module Block  Pattern
// - - - - - - - - - - -
var app = window.app || new Object();

app.chuck = (function () {
'use strict';
// - - - - - - - -

	var
		fn = {},
		worker = undefined,
		onMessage = function () {},
	endvar;

	onMessage = function (event) {
		console.log(event.data);

		// Joke ausgeben
		document.querySelector('main').innerText = event.data;
	};

	fn.init = function () { 
		console.log( 'worker init!');

		// Worker einrichten
		worker = new Worker('sources/js/worker-task.js');

		// Worker starten durch Nachricht!
		worker.postMessage('Hallo Worker!');

		// Workernachrichten empfangen
		worker.addEventListener('message', onMessage);
	};
	fn.stop = function () { 
		console.log( 'worker stop!');

		worker.terminate();
	};

	return fn;
// - - - - - - - -
})();

window.onload = function () {
	document.querySelector('#worker-on').addEventListener('click',  app.chuck.init );
	document.querySelector('#worker-off').addEventListener('click', app.chuck.stop );
};