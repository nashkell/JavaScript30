![](http://buddyharrisdesign.com/JavaScript30/exercises/04%20-%20Array%20Cardio%20Day%201/arrayCardio.png)

# Array Cardio

Completed: March 25-26, 2018

Wes prompts us to take two arrays and practice solving a few conditions via performing the necessary operations via array methods. Very straight forward and definitely takes you back to the basics.

## Synopsis

Our job is to use map, reduce, sort, and filter to solve for the prompts Wes has provided. He even shares some clever tricks of the trade to organize your console outputs as well as write cleaner functions.

### Prerequisites

Wes Bos actually did a great job of prepping this array course for those whom are not as familiar with arrays. I for one somewhat fall into that category. I've done the freeCodeCamp courses through basic and advanced javascript, but still felt a little disjointed when it came to being able to initially accomplish the tasks Wes covered.


## Takeaways

Array Methods, the gateway drug to functional programming

**There is a focus on the following array methods:**
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Sort)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter)

tables, ternary operators, a new way of looping, arrow functions

1. Array Methods

#### array.filter

```javascript
  const fifteen = inventors.filter(function(inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600){
      return true; //keep inventor in array
    }
  });
  console.table(fifteen);
```

You pass the `inventor`(inventors array) into the filter and then use an `if` statement to check for the year the inventor was born. Filter takes the array in question and cycles through the index of the array and checks the keys/properties for each to see if they match, if they do then it outputs the match.

Wes was awesome is showing how we can even make this a more efficient operation with an `arrow function`

```javascript
  const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
  console.table(fifteen);//output inventors
```

In this case the output is `true` or `false` (i.e. boolean) and because of this we can use an arrow function to test when that index of the array matches our supplied criteria. In turn we now no longer need the if statement.


#### array.map

Maps act like a factory machine that takes a raw material, stamps it and then kicks out the item on the other end; **map will always return the same amount of items you give it**.

```javascript
const fullNames = inventors.map(inventor => inventor.first + " " + inventor.last);
```
Here Wes asked us to grab the first and last names of the inventors in the array. We `map` the array. By passing in the array the `map` runs through the each indexed item and spits out the concatenated first and last name. 

He also referenced something he showed us in the previous challenges where we used an ES6 template string '`${inventor.first}' to concatenate the first and last name.

```javascript
  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  console.table(fullNames);
```


#### array.sort

Sort is very plain in its execution. When you sort an array, the `sort` relies on a comparative function to be set as a parameter. This `compareFunction` defines the sort order of what is returned. The original array is sorted in place.

```javascript
  //default long way of solving sort comparing first person to next person in array
  const ordered = inventors.sort(function(a, b) {
    if (a.year > b.year) {
      return 1;
    } else {
      return -1;
    }
  });
```

Wes introduced ternary operators for simplifying the if statement

```javascript
  //shorten it with a ternary operator
  const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
  console.table(ordered);
```
Using an arrow function we set the parameter compare function to `a, b` then the "if" condition placed followed by `?` then the return if true and `:` then the return if false.


#### array.reduce

//reduce is a cleaner way of doing a for loop 

```javascript
for(a=0;a<var.length;a++) {}
```

//gives you a running total of what you've returned from this function last time

```javascript
  const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);

  console.log(totalYears);
```
`total` is the accumulator; variable that the initial value plus.
`inventor` is the current value that is stored in the 
`0` sets the default value; if this isn't set reduce reads the array's starting index as 1.

2. Console.Table

The short and sweet of it is that `console.table();` displays the array data as a table.

Each element in the array will be a row in the table.

```javascript
  var sampleArray = ['apples','oranges','bananas'];

  console.table(sampleArray);
```
![](http://buddyharrisdesign.com/JavaScript30/exercises/04%20-%20Array%20Cardio%20Day%201/console-table-array.png)

3. Array Methods on live data

Wes gave an example of how we can run a method on live data. He asked us to go to a wikipedia page that displayed Boulevards in Paris. 

We are able to target the container that holds the anchor tags to the different boulevards using `querySelector` and then building an array out of the anchor tags. *You need to create an array out of the anchor tags because `querySelector` makes a node list which we are not able to pull the info from.

```javascript
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  const category = document.querySelector('.mw-category');
  const links = Array.from(category.querySelectorAll('a'));
  const de = links
    .map(link => link.textContent)//grabs text content from anchor tags
    .filter(streetName => streetName.includes('de'));//filters out names that done include 'de'
```

## Running the Script

![](http://buddyharrisdesign.com/JavaScript30/exercises/04%20-%20Array%20Cardio%20Day%201/arrayCardio-2.png)

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/04%20-%20Array%20Cardio%20Day%201/index.html)


```javascript
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

//first example given
/*const fifteen = inventors.filter(function(inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600){
    return true; //keep inventor in array
  }
});
console.table(fifteen);*/

//version using arrow function
//because if statement is a boolean based response we can add it ot the arrow function and remove the if statement
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);//output inventors


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

//map acts like a factory machine that takes a raw material and stamp it then kick out the item on the other end; map will always return the same amount of items you give it.

//concat names and a space between or 
//const fullNames = inventors.map(inventor => inventor.first + " " + inventor.last);

//use back ticks and use template strings '`${inventor.first}'
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(fullNames);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

//default long way of solving sort
/*const ordered = inventors.sort(function(a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});*/


//shorten it with a ternary operator
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

//reduce is a cleaner way of doing a for loop for(a=0;a<var.length;a++) {}
//gives you a running total of what you've returned from this function last time

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort(function(a,b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//         .map(link => link.textContent)//grabs text content from links
//         .filter(streetName => streetName.includes('de'));//filters out names that done include 'de'

// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj, item) {
  if (!obj[item]) {//loops through and set first item to zero
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});//blank object
console.log(transportation);
```

## Acknowledgments

* Wes Bos
* Inspiration
* etc
