![](http://buddyharrisdesign.com/JavaScript30/exercises/11%20-%20Custom%20Video%20Player/video.png)

# Custom Video Player

Completed: April 24, 2018

We are given an HTML page which displays a video player with controls for playing/pausing a vieo, scrolling through the video progress, skipping/rewinding, changing the volume, and adjusting playback speed. **None of these controls currently work**. Wes also challenges us at the end to take the exercise a step further by adding a button to the player that provides the user the ability to toggle fullscreen video.

## Synopsis

Our job is to write the necessary JavaScript code to add functionality to the player; including Wes' challenge to toggle fullscreenvideo.

#### Our Goals

1. Store all interactive elements into their own variables via `querySelector()` or `querySelectorAll()`

2. Build out our functions to allow the user to interact with the player via the buttons.

3. *Hook-up* the event listeners to the buttons and call functions(actions) when the user interacts with the player.


## Takeaways

This challenge was a clear and productive excercise in targeting elements on a page with `querySelector` and then how listen for the user's interaction on the element. There was a rehash of ternary operators, as well as practice with a wide array of event types and the methods relating to them.


#### query Selectors

We assign each of the elements in our player to a variable. To keep things simple and recognizable in our script, it's best to match the name of the variable with the class of the element.

```javascript
//Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]'); //equal to anything that has a data-skip data attribute
const ranges = player.querySelectorAll('.player__slider');
const fullScreenBtn = player.querySelector('.fullScreenBtn');
```

#### Our functions

```javascript
//toggle the play on and off
function togglePlay() {

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
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

//calculate the update for when you click and drag the video scrubber
function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

function toggleFullScreen(){
	if(video.requestFullScreen){
		video.requestFullScreen();
	} else if(video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	} else if(video.mozRequestFullScreen){
		video.mozRequestFullScreen();
	}
}
```

#### Hook up the event listeners

```javascript
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

//listens for click on fullScreenBtn
fullScreenBtn.addEventListener('click', toggleFullScreen);
```


## Running the Script

![](http://buddyharrisdesign.com/JavaScript30/exercises/11%20-%20Custom%20Video%20Player/video2.png)

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/11%20-%20Custom%20Video%20Player/index.html)


```javascript
//Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]'); //equal to anything that has a data-skip data attribute
const ranges = player.querySelectorAll('.player__slider');
const fullScreenBtn = player.querySelector('.fullScreenBtn')


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

function toggleFullScreen(){
	if(video.requestFullScreen){
		video.requestFullScreen();
	} else if(video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	} else if(video.mozRequestFullScreen){
		video.mozRequestFullScreen();
	}
}

// ****** Hook up the event listeners ******

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

//listens for click on fullScreenBtn
fullScreenBtn.addEventListener('click', toggleFullScreen);
```

## Acknowledgments

* Wes Bos
* Inspiration
* etc
