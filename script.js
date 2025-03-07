//your JS code here. If required.
let time = document.getElementById('timer');
let currTime = new Date()

function cb() {
	currTime = new Date();
	time.innerHTML = currTime.toLocaleString();
}

setInterval(cb,1000);
