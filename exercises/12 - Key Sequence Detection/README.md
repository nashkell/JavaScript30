![](http://buddyharrisdesign.com/JavaScript30/exercises/12%20-%20Key%20Sequence%20Detection/keySeq_1.png)

# Key Sequence Detection

Completed: April 29, 2018

We are given an HTML page which displays basically nothing. There's a script tag in the document header that loads a JavaScript file from [Cornify.com](/exercises/12%20-%20Key%20Sequence%20Detection/) which injects a random image/gif of a unicorn or rainbow into the DOM. Each time a unicorn is injected a `p` tag updates at the bottom of the page.

## Synopsis

Our job is to write the necessary JavaScript code to generate new unicorns/rainbows ever time the user successfully enters a *secret code* that we specify in the script.

#### Our Goals

1. Create a blank array to store keys being pressed by user and the *secret code* that will generate the unicorns.

2. *Hook-up* an event listener to watch for the keys pressed by the user.

3. Build function that fires in the event occurs to 


## Takeaways

This is a fun opportunity to learn how to add hidden easter eggs. In a more formal sense this could be a way of adding logic to put a small catch before you allow access to a hidden page, or display some specific information.

Separately this is a great excercise in the use of read/modifying arrays. You essentially use `splice` to limit the length of the array to match the length fo the *secret code* we defined.


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

Now you `splice` the array in a specific manner. We need our array to *always* match the length of our `secret code`; otherwise we'd end up with a HUGE array of all the random keys the user pressed. One thing that Wes shared was, as he put it, "a *secret* array trick"

`-secretCode.length-1` Using a "-" before referencing the length allows us to *splice* from the back of the array. This gives us the cutoff point for the array, and then `pressed.length - secretCode.length` removes anything after secret code length.

```javascript
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
```

![](http://buddyharrisdesign.com/JavaScript30/exercises/12%20-%20Key%20Sequence%20Detection/keySeq_3.png)

**test against the user input**

To test if the user's input matches our *string* `secretCode`, the array needs to be converted to a string and then checked against `secretCode`.

```javascript
//Join turns the array into a string that can be used as a variable
if (pressed.join('').includes(secretCode)) {
	console.log('DING DING');
	cornify_add();
}
```


## Running the Script

![](http://buddyharrisdesign.com/JavaScript30/exercises/12%20-%20Key%20Sequence%20Detection/keySeq_2.png)

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/12%20-%20Key%20Sequence%20Detection/index.html)


```javascript
//key sequencing detection
//inputs a certain sequence of keys something needs to happen
//konami code 

//make a pressed array
const pressed = [];
const secretCode = 'buddy';

window.addEventListener('keyup', (e) => {
	console.log(e.key);
	pressed.push(e.key);
	//splice form the back using a negative number
	//-secretCode.length-1 - gives us the cutoff point for th array, and then pressed.length removes anything after secret code length
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

	//Join turns the array into a string that can be used as a variable
	if (pressed.join('').includes(secretCode)) {
		console.log('DING DING');
		cornify_add();
	}

	console.log(pressed);
});
```

## Acknowledgments

* Wes Bos
* Inspiration
* etc
