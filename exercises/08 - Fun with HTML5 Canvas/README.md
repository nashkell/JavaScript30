![](http://buddyharrisdesign.com/JavaScript30/exercises/08%20-%20Fun%20with%20HTML5%20Canvas/htmlCanvas.png)

# Fun with HTML5 Canvas

Completed: April 6, 2018

We are given an HTML page with a `canvas` element where the we should be able to click and drag to see a line being drawn on the canvas. 

## Synopsis

Our job is to take grab the `canvas` and create a `context` to draw on. Next we need to create the backend functionality to recognize when the user clicks down(the start point) and the end point when the user lifts the mouseup(the end point).


## Takeaways


1. Context

First we need to grab the `canvas`, set it's size and build the `context`

```javascript
//build the context to draw on
const canvas = document.querySelector('#draw');

//set height and width of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

Set the defaults for how the stroke looks when drawn

```javascript
//base settings
ctx.strokeStyle = '#BADA55';//when you draw on something it needs to be a color and define if the end of the line should be squared off or round
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'multipy'; //like photoshop where it blends the colors as you draw
```


Now we set the defaults states for the variables that the function will use to allow us to draw

```javascript
let isDrawing = false;//when we click down sets to true; flag to tell the app if we should draw to the canvas

let lastX = 0; //where do you start and end the line
let lastY = 0;
let hue = 0;
let direction = true;
```

Lets draw

```javascript
function draw(e) {
  if(!isDrawing) return; //this still stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; //100% saturation, 50% lightness
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  //lastX = e.offsetX;
  //lastY = e.offsetY;

  [lastX, lastY] = [e.offsetX, e.offsetY];//destructuring an array

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
```

Calling the draw function relies on the users input via the mouse. We need to watch for a number of different events that the user provides. Initially we're watching the `mousemove` within the canvas and returning the coordinates. Then we check for the condition of the mouse click ending to stop the line from drawing. 

```javascript
canvas.addEventListener('mousemove', draw); //when I move my mouse 

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
```


## Running the Script

![](http://buddyharrisdesign.com/JavaScript30/exercises/08%20-%20Fun%20with%20HTML5%20Canvas/htmlCanvas-2.png)

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/08%20-%20Fun%20with%20HTML5%20Canvas/index.html)


```javascript
//learn about the fundamentals of canvas

//first we need to grab the canvas
const canvas = document.querySelector('#draw');

//second we need what is called a context canvas on the web is sort of like microsoft paint where you get a block of actual pixels and then you draw on that. On the web you draw on the canvas

const ctx = canvas.getContext('2d');//build the context that we draw on can be `2d` or `3d`

//set height and width of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//base settings
ctx.strokeStyle = '#BADA55';//when you draw on something it needs to be a color and define if the end of the line should be squared off or round
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'multipy'; //like photoshop where it blends the colors as you draw

let isDrawing = false;//when we click down sets to true; flag to tell the app if we should draw to the canvas

let lastX = 0; //where do you start and end the line
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if(!isDrawing) return; //this still stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; //100% saturation, 50% lightness
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  //lastX = e.offsetX;
  //lastY = e.offsetY;

  [lastX, lastY] = [e.offsetX, e.offsetY];//destructuring an array

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

//canvas.addEventListener('mousemove', draw); //when I move my mouse 
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

//mother-effinghsl
```

## Acknowledgments

* Wes Bos
* Inspiration
* etc
