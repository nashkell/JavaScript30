![](http://buddyharrisdesign.com/JavaScript30/exercises/12%20-%20Key%20Sequence%20Detection/keySeq_1.png)

# Slide in on Scroll

Completed: May 1, 2018

We are given an HTML page with multiple paragraphs and images.

## Synopsis

Our job is to write the necessary JavaScript code to slide the images into view when the user scrolls to a point where it woul be logical to display the image (*usually about halfway through the height of the image*)

#### Our Goals

1. Declare a constant.

2. *Hook-up* an event listener to watch for the keys pressed by the user.

3. Build function that fires in the event occurs to 

## Takeaways

#### Setup the `constants`

Create an empty array and the *code* that we'll compare the users key presses to

```javascript
//make a pressed array
const pressed = [];
const secretCode = 'buddy';
```

#### Event Listener

Here is where we listen to the users interaction (i.e., keypress), tag it as an event and add the *key* the user pressed into the `pressed` array.

```javascript
pressed.push(e.key);
```


## Running the Script

![](http://buddyharrisdesign.com/JavaScript30/exercises/12%20-%20Key%20Sequence%20Detection/keySeq_2.png)

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/12%20-%20Key%20Sequence%20Detection/index.html)


```javascript
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
	var context = this, args = arguments;
	var later = function() {
		timeout = null;
		if (!immediate) func.apply(context, args);
	};
	var callNow = immediate && !timeout;
	clearTimeout(timeout);
	timeout = setTimeout(later, wait);
	if (callNow) func.apply(context, args);
	};
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
	//console.log(e);
	
	//loop over each of the images with a "forEach"
	sliderImages.forEach(sliderImage => {
	//determine how far we've scrolled down tells us when we meet the middle of the image
	const slideInAt = (window.scrollY + window.innerHeight) -
		sliderImage.height/2;
	//bottom of the image
	const imageBottom = sliderImage.offsetTop + sliderImage.height;
	
	//determine if the image is half shown
	const isHalfShown = slideInAt > sliderImage.offsetTop;
	const isNotScrolledPast = window.scrollY < imageBottom;

	if (isHalfShown && isNotScrolledPast) {
		sliderImage.classList.add('active');
	} else {
		sliderImage.classList.remove('active');
	}
	});
}

window.addEventListener('scroll', debounce(checkSlide));
```

## Acknowledgments

* Wes Bos
* Inspiration
* etc
