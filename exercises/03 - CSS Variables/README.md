![](http://buddyharrisdesign.com/JavaScript30/exercises/03%20-%20CSS%20Variables/cssVarJS.png)

# Update CSS Variables with JS

Completed: March 24, 2018

We are given an HTML page that displays an image, and has 3 form inputs that the user can manipulate to change the padding, blur amount, and background color of the image. .  

## Synopsis

Our job is to use CSS variables to write the JavaScript code as necessary to make the inputs functional. JavaScript will be used to grab and identify the time and apply those values (seconds, minutes, hours) to the hands of the clock. CSS will be used to set positioning for the hands; both the rotation point of origin and timing for each 'tick'.  

### Prerequisites

As with all the projects in this challenge some JavaScript knowledge is necessary, but in this particular case there is some reference to 'transforms' and 'transitions' being performed via CSS. 


## Takeaways


1. CSS3 Variables

This was my first experience with CSS variables. They remind me of Sass variables, **BUT** they are defined differenctly. In Sass variables are defined in the Sass file, and once compiled to CSS the values cannot be updated. CSS3 variables are defined directly in the CSS file and can have there values updated through the use of JavaScript. The `input` *HTML* elements have a `name` property that corresponds with the CSS properties that we want to update.

```css
/*declare variables on an element; use root to target a high level element similar to html element*/

/* Two hyphens (--) followed by variable name*/

:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}
```
First CSS3 variables references are created and then attached to the *root* element, provide them with default values, then use JavaScript to attach event listeners to the input HTML elements that call upon an event handler function when the input values have been changed by the user.

This is a more advanced usage of variables, but could still be used in the same sense/manner as Sass to apply styling in a more immediate manner.

```css
/* 'var(--variableName)' to use previously defined CSS properties */

img {
  background: var(--base);
  filter: blur(var(--blur));
  padding: var(--padding);
}
```

*Side note: Thank you to Wes Bos for including a taste of such a new concept.*


2. Datasets, and Suffix

This was a nice refresh of using the `datasets`, but it was the first time I've ever referenced the suffix of a dataset.   

```javascript
const suffix = this.dataset.sizing || ''; 
//must include or '' (i.e. nothing) otherwise it will return undefined for dataset suffix
```

```javascript
//select entire document (root) and set the property of base/spacing/blur 
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

//`--${this.name}` grabs the name of the element changing and then 'this.value' applies the value to the element
//plus 'suffix is what adds the 'px' as needed to the property

}
```


## Running the Script

![](http://buddyharrisdesign.com/JavaScript30/exercises/03%20-%20CSS%20Variables/cssVarJS-2.png)

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/03%20-%20CSS%20Variables/index.html)

```css
/*declare variables on an element; use root to target a high level element similar to html element*/

/* Two hyphens (--) followed by variable name*/

:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

img {
  /* Use the CSS variable as value of the property and pass your predefined variable into the '()'*/

  /* 'var(--variableName)' to use previously defined CSS properties*/
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}

.hl {
  color: var(--base);
}
```


```javascript
const inputs = document.querySelectorAll('.controls input');
// querySelectorAll it provides a NodeList not array to reference

function handleUpdate() {
  //console.log(this.value); //gets value from input to apply to css variable
  //console.log(this.dataset); //data set is an object that contains all data attributes from that specific element

  const suffix = this.dataset.sizing || ''; //must have or '' (i.e. nothing) otherwise it will return undefined for base color

  //select entire document (root) and set the property of base/spacing/blur 
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  //`--${this.name}` grabs the name of the element changing and then 'this.value' applies the value to the element
  //plus 'suffix is what adds the 'px' as needed to the property

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));//listening for change event on input and call function
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));//listen for mouse movement even on input and call function
```

## Acknowledgments

* Wes Bos
* Inspiration
* etc
