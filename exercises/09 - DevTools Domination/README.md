![](http://buddyharrisdesign.com/JavaScript30/exercises/09%20-%20DevTools%20Domination/devTools.png)

# Dev Tools Domination

Completed: April 8, 2018

We are given a few prompts along with two arrays to progress through a series `dev tools` exercises. Primarily Wes explorationss consist of `console` methods

## Synopsis

Our job is to learn new ways to interact with our script via the console and better yet how we can use this interaction to output our information in a new and clearer way. 


## Takeaways


1. Debugging through dev tools


Think of this: I have some javascript running on the page, but I dont know what is causing it, what is changing, I dont know where the javascript that is running it.

We can open the developer tool and right click on the dom element then select "break on.." followed by attribute modification.

This pops a "debugger" command (i.e. breakpoint) and takes us to the line of code that runs. Also make sure to go back to the (DOM) element, right click and turn off the "break"


2. Console Methods

#### Regular

```javascript
  console.log('hello');
```

#### Interpolated

Here you can use "%s" to pass a variable into the string that is logged in the console.

```javascript
  console.log('Hello I am a %s string!', 'variable'); 
    

  //Alternatively we can use an ES6 standard of backticks and placing our variable directly into the string
  console.log(`Hellow I am ${var}`);
```

#### Styled

Here you can style the output within the console log via prefacing the string with `%c` and then passing in the css type styling.

```javascript
  //place "%c" in front of what you want to style, then pass the styling you want as the second argument
  //console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');
```

#### Warning

Here you can throw a warning in the console. The warning gives you the stack trace as to where it was called.

```javascript
  console.warn('OH NOOO');
```

#### Error

Here you can display an error in the console. The error gives you the stack trace where it was called.

```javascript
  console.error('Shit!');
```

#### Info

Here you display info passed into the log.

```javascript
  console.info('Crocodiles eat 3-4 people per year')
```

#### Testing

Here we can check if things are true. The console log will only display the second(i.e. else) argument if the condition is false.

```javascript
  console.assert(1 === 1, 'That is wrong!');
  
  const p = document.querySelector('p');
  console.assert(p.classList.contains('ouch'), 'You did not select the right Element!');
```

#### Clearing

This is a fun way to mess with a developer by putting this at the end of their code ;)

```javascript
  console.clear(); clears the console
```

#### Viewing DOM Elements

If you want to find the available methods/properties on an element. The best way is to log the element, but not in the standard way, call `console.dir()` on the element and it allows you to open up the element and view all the properties associated with it.

```javascript
  //log the paragraph, how you find out the available methods/properties on that element
  console.log(p);//shows just the element itself
  console.dir(p);//allows you to open it up and view all the properties
```

#### Grouping Together

```javascript
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  //console.groupCollapsed(`${dog.name}`); Used to display the group collapsed in console
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
```

#### Counting

This counts how many times an element or item has been used.

```javascript
console.count('buddy');
console.count('buddy');
console.count('harris');
console.count('buddy');
console.count('harris');
console.count('buddy');
```

#### Timing

This is something that can help in a pinch if you really want to target an element/function and see its effect on your script. Yes most dev tools do have the ability to view your 

```javascript
  console.time('fetching data');
  fetch('http://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
  });
```

## Running the Script

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/09%20-%20DevTools%20Domination/index.html)


```javascript
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

//condition: I have some javascript running on the page, but I dont know what is causing it, what is changing, I dont know where the javascript that is running
//in developer tool you right click on the dom element > select "break on.." > attribute modification

//this pops a "debugger" command in i.e. breakpoint and takes us to the line of code that runs 
//make sure to go back to the (DOM) element, right click and turn off the "break"


// Regular

console.log('hello');


// Interpolated

//this places the second passed value into "%s"
console.log('Hello I am a %s string!', 'variable'); 

//Alternatively we can use an ES6 standard of backticks and placing our variable directly into the string
//console.log(`Hellow I am ${var}`);


// Styled

//place "%c" in front of what you want to style, then pass the styling you want as the second argument
//console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');


// warning!

//throws a warning in the console and gives you the stack trace as to where it got called
console.warn('OH NOOO');


// Error :|

//display an error in the console and gives you the stack trace as to where it got called
console.error('Shit!');

// Info

//displays info passed into the log
console.info('Crocodiles eat 3-4 people per year')

// Testing

//check if things are true, it will only display the second argument if the condition is false
console.assert(1 === 1, 'That is wrong!');

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'You did not select the right Element!');


// clearing

//fun way to mess with a developer by putting this at the end of their code
console.clear(); clears the console


// Viewing DOM Elements

//log the paragraph, how do you find out the available methods/properties on that element
console.log(p);//shows just the element itself
console.dir(p);//allows you to ope it up and view all the properties

// Grouping together

//
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  //console.groupCollapsed(`${dog.name}`); Used to display the group collapsed in console
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});


// counting

//will count how many times an item has been used
console.count('buddy');
console.count('buddy');
console.count('harris');
console.count('buddy');
console.count('harris');
console.count('buddy');

// timing

//outputs the amount of time in milliseconds that it took to fetch the data/perform task
console.time('fetching data');
fetch('http://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
```

## Acknowledgments

* Wes Bos
* Inspiration
* etc
