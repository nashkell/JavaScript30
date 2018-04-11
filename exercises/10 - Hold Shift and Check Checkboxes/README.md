![](http://buddyharrisdesign.com/JavaScript30/exercises/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/checkboxes.png)

# Checking Checkboxes

Completed: April 6, 2018

We are given an HTML page with a collection of `inputs` via `checkboxes` each followed by an `p` element that has text describing the challenge. The current state allows you to check off each checkbox and the relating `p` tag will have it's contents striked through. 

## Synopsis

Our job is to write the javascript allowig the user to select multiple inputs while holding down the `shift key`. This was a very straightforward exploration/challenge and didn't require a whole lot of code or explanation.


## Takeaways

This challenge recycled a number of methods learned in previous challenges such as `querySelectorAll()` to target the checkboxes, and then a varied method of looping through the checkboxes with an arrow function with nested if statements.


## Running the Script

![](http://buddyharrisdesign.com/JavaScript30/exercises/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/checkboxes.png)

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/index.html)


```javascript
const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  //console.log(e); //console the event

  //check if they had the shift key down
  //AND check if the user checks an input
  let inBetween = false;//flag variable
  if (e.shiftKey && this.checked) {
    //go ahead and do what we please
    //how our sausage gets made

    //loop through every single check box
    checkBoxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them inbetween');
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
```

## Acknowledgments

* Wes Bos
* Inspiration
* etc
