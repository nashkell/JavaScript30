![](http://buddyharrisdesign.com/JavaScript30/exercises/02%20-%20JS%20and%20CSS%20Clock/cssClock.png)

# CSS + JS Clock

Completed: March 22, 2018

We are given an HTML page that displays an anolog clock created via CSS.  

## Synopsis

Our job is to write the JavaScript code and revise the CSS as necessary to make the clock functional. JavaScript will be used to grab and identify the time and apply those values (seconds, minutes, hours) to the hands of the clock. CSS will be used to set positioning for the hands; both the rotation point of origin and timing for each 'tick'.  

### Prerequisites

As with all the projects in this challenge some JavaScript knowledge is necessary, but in this particular case there is some reference to 'transforms' and 'transitions' being performed via CSS. 


## Takeaways


1. Transforms and transitions

```css
transform-origin: 100%; /*set origin point for rotation*/
transform: rotate(90deg); /*sets start point at 12 o'clock*/
transition: all 0.05s; /*super short tick between each degree of the clock*/
transition-timing-function: cubic-bezier(0.1,2.7,0.58,1); /*sets ease-in and out for hands*/
```
I've used `transitions` before in the past when implementing CSS on a project, but one thing that stuck out was the use of `Bezier curves`. As seen on the many examples that are shared via [*codepen*](https://codepen.io/) `bezier` curves have been present, but I haven't used them in practice. This gives me a new outlook and something to consider in future projects.

*Side note: I've used `bezier curves` **many** times before when working on kinetic type projects or site experience videos in Adobe After effects. It makes me wonder why I've never thought to explore them in other aspects of design/code.*


2. Data Attributes

```javascript
//grabs the current time
const now = new Date();

//seconds
const seconds = now.getSeconds();
const secondsDegrees = ((seconds / 60) * 360) + 90; //sec into deg; +90 deg css offset fix
secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //
```
`.style.transform` is used to target the css of the element with a related class name. I've done something similar via JQuery like below:

```jquery
$("button").click(function(){
    $("p").css("color", "red");
});
```
In this instance it feels a great deal cleaner to target the element via variable then just adjust `.style` then its property. Sooo much more straight forward.


## Running the Script

![](http://buddyharrisdesign.com/JavaScript30/exercises/02%20-%20JS%20and%20CSS%20Clock/cssClock-2.png)

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/02%20-%20JS%20and%20CSS%20Clock/index.html)

```javascript
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  //grabs the current time
  const now = new Date();
  
  //seconds
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; //sec into deg; +90 deg css offset fix
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //
  

  //minutes
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) +90; //min into deg; +90 deg css offset fix
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  //hours
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90; //hr into deg; +90 deg css offset fix
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);//run function every sec 
```

## Acknowledgments

* Wes Bos
* Inspiration
* etc
