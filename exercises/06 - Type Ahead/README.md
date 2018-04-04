![](http://buddyharrisdesign.com/JavaScript30/exercises/06%20-%20Type%20Ahead/typeAhead.png)

# Type Ahead AJAX

Completed: April 1st, 2018

We are given an HTML page that displays an input with an unordered list below. We are given a constant 'endpoint' that points to JSON data 

## Synopsis

Our job is to take json array (via external link) and filter it out by city/state based on what the user supplies. Then display the filtered array below the input. 


## Takeaways


1. Endpoint, Fetch, Spread

Ive worked with Angular and Json files at work where we basically build templats to dynamically generate pages using data/content generated with json files. 

This was a nice introduction to pure collecting of data from an external source and then and elementary way of building the data into an array and then filtering it.

**Endpoint**

First we need to locate the data via declaring an `endpoint`
```javascript
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
```

Then we declare our variable (array) to store the data
```javascript
  const cities = [];
```

**Fetch**

Once we have our array variable and endpoint declared we can `fetch` our data from the `endpoint`.

`fetch` is a new api in the browswer returns a `promise` which is essentially a *blob* of data. The browser doesnt exactly know what to do with the data. We have to convert the *blob* into JSON with a 'blob' method

```javascript
  fetch(endpoint)
    .then(blob => blob.json()) //"blob.json()" returns another promise
    .then(data => cities.push(...data)) //call .then on blob. This gives you raw data and we push it to the "cities" array
```  

**Spread**

If you notice in the above example we did something unique. Instead of using `push` in its default manner, we use an ES6 method to `spread` the data into the array as individual arguments.

The default action of `.push()` takes arguments placed into push() and adds them to the array as separate items which we don't want.

```javascript
  cities.push(1,2,3,4); will add "1,2,3,4" to cities []
  //OUTPUT cities = [Array[1000],1,2,3,4];
``` 

If we use a spread it pushes the data as individual arguments.

```javascript
  .then(data => cities.push(...data))
```


2. RegExp Constructor

A `RegExp` constructor creates a regular expression for matching text with a pattern.

```javascript
  //RegExp();

  //create regular expression to pass into match call on array
  //"g" - global - will look through entire string for the wordToMatch
  //"i" - incensitive - its going to match lowercase and uppercase
  //"wordToMatch" - is the user provided input that is passed into function to find match
  
  const regex = new RegExp(wordToMatch, 'gi');
```

Here we use the `RegExp` constructor to match the pattern of text that the user enters into the input field with the data from our array. We then pass the stored expression into the match call on the array.


```javascript
  //check if city OR state matches user entered items and then returns it
  
  return place.city.match(regex) || place.state.match(regex);
```


## Running the Script

![](http://buddyharrisdesign.com/JavaScript30/exercises/06%20-%20Type%20Ahead/typeAhead-2.png)

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/06%20-%20Type%20Ahead/index.html)


```javascript
//goal is to take json array and filter it out by city/state based on what the user supplies. Then display the filtered array below the input
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//new api in the browswer
//fetch returns a promise
// const prom = fetch(endpoint);
// console.log(prom);

//fetch grabs "blob" of data and we log the data, the browser doesnt know what to do with the data Blob has to be converted into json with a `blob` method
//fetch(endpoint).then(blob => console.log(blob));

fetch(endpoint)
  .then(blob => blob.json())//"blob.json()" returns another promise
  .then(data => cities.push(...data)) //call .then on blob. This gives you raw data

  //cities.push(1,2,3,4); will add "1,2,3,4" to cities [] as
  //cities = [Array[1000], 1,2,3,4]
  

  //"..." is a spread () part of ES6
  //spread into this push method
  //default for push takes arguments placed into push() and adds them to the array as separate items.

// function needed to filter the massive array down into subset that can be listened to

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {//chisel it down into a subset of the array
    //here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi'); //create regular expression to pass into match call on array
    //flags
    //"g" - global - will look through entire string for the wordToMatch
    //"i" - incensitive - its going to match lowercase and uppercase
    return place.city.match(regex) || place.state.match(regex);
    //check if city OR state matches user entered items and then returns it
  });
}

//set up number with commas
function numberWithcommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  //console.log(this.value);
  const matchArray = findMatches(this.value, cities); //gets data next we need to hook up event listeners
  //cosole.log(matchArray); - outputs the array that matches the user input

  const html = matchArray.map(place => {
    //create regex, match city name, use the regex to replace the word that it matches with a span with a class of HL and the word that it matches
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    return `
      <li>
        <span class = "name">${cityName}, ${stateName}</span>
        <span class = "population">${numberWithcommas(place.population)}</span>
      </li>
    `//create list item below input box
  }).join(''); //.map outputs array into html, .join converts the array into a string
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
```

## Acknowledgments

* Wes Bos
* Inspiration
* etc
