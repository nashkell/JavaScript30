![](http://buddyharrisdesign.com/JavaScript30/exercises/07%20-%20Array%20Cardio%20Day%202/arrayCardio.png)

# Array Cardio

Completed: April 3, 2018

Wes prompts us again to take two arrays and practice solving a few conditions via performing the necessary operations with array methods. Very straight forward and definitely takes you back to the basics.

## Synopsis

Our job is to use some, every, find, and findIndex to solve for the prompts Wes has provided. He even shares a couple examples writing cleaner/clearer functions by incorporating tenary operators, arrow functions and the use of implicit returns.


## Takeaways

Array Methods, the gateway drug to functional programming

**There is a focus on the following array methods:**
- [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)


1. Array Methods

#### array.prototype.some()

`.some()` checks if 'at least one' thing in the array meets the supplied criteria

```javascript
//long way of using array.some
const isAdult = people.some(function(person) {
  const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
      return true;
    }
});


//simpler way of writing this using an arrow function and reducing the if statement to its simplist form. We return the operation because we're only evaluating one condition. In turn we reduce the everything from six(6) lines of code to four(4).

const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
});


//Lastly, if we want to be a hot shot, as Wes Bos calls it, this is an even simpler way of solving the problem vs before. We take the array down to two(2) lines of code from four(4). This uses implicit return without curly brackets

const isAdult = people.some(person => ((new Date())
  .getFullYear()) - person.year >= 19 );

console.log({isAdult}); //output true or false boolean
```

In this case the output is `true` or `false` (i.e. boolean) and because of this we can use an arrow function to test when that index of the array matches our supplied criteria. In turn we now no longer need the if statement.


#### Array.prototype.every()

'every()' checks if "all" things in the array meet the criteria

```javascript
const allAdult = people.every(person => ((new Date())
  .getFullYear()) - person.year >= 19 );

console.log({allAdult}); //false - not every thing in the array is and adult
```


#### array.prototype.find()

`find()` is like filter, but instead returns just the one you are looking for

```javascript
const comment = comments.find(comment => comment.id === 823423);

console.log(comment);
```

Wes introduced ternary operators for simplifying the if statement

```javascript
  //shorten it with a ternary operator
  const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
  console.table(ordered);
```
Using an arrow function we set the parameter compare function to `a, b` then the "if" condition placed followed by `?` then the return if true and `:` then the return if false.


#### array.prototype.findIndex()

`findIndex()` is useful to find where something is in an array. The example case is how to find something and then `delete` it from the array 

```javascript
const index = comments.findIndex(comment => comment.id === 823423); 

console.log(index);
```

There are two ways we can delete the item from the array:

1. We can splice the array by passing our `index` into the splice and then identifying which position of the array we want to delete. Then use `console.table()` to show an ordered output of the array minus your selection.

```javascript
comments.splice(index, 1);

console.table(comments);
```

2. We can use what's popular in the redux world by creating a new array of updated comments.

```javascript
const newComments = [ //newComments = an array
  ...comments.slice(0, index), //start at 0 and go until index
  ...comments.slice(index + 1) //start at index and go until end "+1"
  //make sure to spread(`...`) into new array otherwise it will creat series of nested arrays
];
```



## Running the Script

![](http://buddyharrisdesign.com/JavaScript30/exercises/07%20-%20Array%20Cardio%20Day%202/arrayCardio-2.png)

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/07%20-%20Array%20Cardio%20Day%202/index.html)


```javascript
// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks

//*********************************************************
// Array.prototype.some() // is at least one person 19 or older?

//'some' checks if 'at least one' thing in the array meets the criteria

//long way of using array.some
/*const isAdult = people.some(function(person) {
  const currentYear = (new Date()).getFullYear();
  if(currentYear - person.year >= 19) {
    return true;
  }
});*/

//simpler way of writing this

/*const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
});*/

//As Wes Bos calls it, if we want to be a hot shot this is an even simpler way of solving the problem
//Wes' "HotShot" solution
//use implicit return without curly brackets

const isAdult = people.some(person => ((new Date())
  .getFullYear()) - person.year >= 19 );

console.log({isAdult}); //output true or false boolean


//*********************************************************
// Array.prototype.every() // is everyone 19 or older?

//'every' checks if "all" things in the array meet the criteria

const allAdult = people.every(person => ((new Date())
  .getFullYear()) - person.year >= 19 );

console.log({allAdult}); //false - not every thing in the array is and adult


//*********************************************************
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

//find is like filter instead of returning a subset of the array it returns the first item it finds

const comment = comments.find(comment => comment.id === 823423);

console.log(comment);


//*********************************************************
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

//find where something is in the array

const index = comments.findIndex(comment => comment.id === 823423); 
console.log(index);

//two ways to delete the item from the array

comments.splice(index, 1);

//popular redux world we create a new array of updated comments

const newComments = [ //newComments = an array
  ...comments.slice(0, index), //start at 0 and go until index
  ...comments.slice(index + 1) //start at index and go until end "+1"
  //make sure to spread into new array otherwise it will creat series of nested arrays
]; 
```

## Acknowledgments

* Wes Bos
* Inspiration
* etc
