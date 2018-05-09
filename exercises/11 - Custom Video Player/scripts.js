//Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]'); //equal to anything that has a data-skip data attribute
const ranges = player.querySelectorAll('.player__slider');

//Build our functions

//toggle the play on and off
function togglePlay() {
	// if(video.paused) {
	// 	video.play();
	// } else {
	// 	video.pause();
	// }

	//ternary operator
	const method = video.paused ? 'play' : 'pause';
	video[method](); //call the method 
}
function updateButton() {
	//you can use "this" here because it is bound to the video variable
	const icon = this.paused ? '►' : '❚ ❚';
	toggle.textContent = icon;
}

function skip() {
 console.log(this.dataset.skip);
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
	video[this.name] = this.value;
	// console.log(this.name);
	// console.log(this.value);
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

// *** Hook up the event listeners

//listens for click even on player window
video.addEventListener('click', togglePlay);

//listens for play/pause event on player window
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

//listen for time update event
video.addEventListener('timeupdate', handleProgress);

//listens for click on the play button
toggle.addEventListener('click', togglePlay);

//listens for anything that has a data attribute with skip
skipButtons.forEach(button => button.addEventListener('click', skip));


//listen for change in ranges
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));


//setup scrub
progress.addEventListener('click', scrub);

let mousedown = false;
//listen for a mouse move
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


