![](http://buddyharrisdesign.com/JavaScript30/exercises/01%20-%20JavaScript%20Drum%20Kit/jsDrumKit.png)

# JavaScript Drum Kit

> Completed: March 21, 2018

We are given an HTML page that displays a series of `div` elements, each with a letter inside that corresponds with a key on the keyboard and the name of a soundclip that is to be played when the key is pressed. 

## Synopsis

When a user presses a key that matches one of the keys that matches one of the letters display in the `div` elements, the page should both play the corresponding soundclip as well as plase a temporary 'highlight' (border) around the `div`. Our job is to write the JavaScript code necessary to add this functionality. 

### Prerequisites

Some JavaScript knowledge is necessary, but Wes does a fantastic job walking you through each step and what each iteration of the code means. 

## Takeaways

1. Console logs

```javascript
console.log(e.keycode);
```
*used to reference the key being pressed within the first function created*

Wes definitely more concretely planted the importance of console logging for general referential output. Through out the challenge `consol.log` was used to verify and check the output of the code we were writing.

2. Data Attributes

```html
<div data-key="65" class="key">
```

```javascript
const key = document.querySelector(
    `.key[data-key="${e.keyCode}"]`  
);
```
`[data-key=65]` targets specific data attribute, but we can use ES6 standard ${e.keyCode} to target 'event' variable passed into function. Make sure that data-key value is in `" "`.

3. I thought I knew transitions

```javascript
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
```

First you have to listen for the `key down event` in the window. Then you need to pass the key down event heard into a function to play the sound tied to the data attribute of key pressed.

I'm familiar with the process of applying transitions through css, but this was a new way to toggle the class that applies and then removes the transition to the html element. It makes so much more sense now.


## Running the Script

![](http://buddyharrisdesign.com/JavaScript30/exercises/01%20-%20JavaScript%20Drum%20Kit/jsDrumKit2.png)

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/01%20-%20JavaScript%20Drum%20Kit/index.html)

```javascript
function playSound(e) {
  //console.log(e.keycode);//logs keycode of key pressed

  const audio = document.querySelector(
    //look for audio element with a 'data-key' data attribute
    `audio[data-key="${e.keyCode}"]`
  );
  const key = document.querySelector(
    `.key[data-key="${e.keyCode}"]`  
  );
    /*[data-key=65] targets specific data attribute, but we can use ES6 standard ${e.keyCode} to target 'event' variable passed into function 
    make sure that data-key value is in " "
    */
    if (!audio) return;//stops the function
    audio.currentTime = 0; //rewind audio to the start - allows continuous pressing of key
    audio.play();
    key.classList.toggle('playing');//playing class is what toggles the 'highlight' on and off
    
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;//skip if its not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//listen for 'keydown' event in window
//pass event heard into function to play sound tied to data attribute of key pressed
window.addEventListener('keydown', playSound);
```

## Acknowledgments

* Wes Bos
* Inspiration
* etc
