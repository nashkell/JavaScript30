![](http://buddyharrisdesign.com/JavaScript30/exercises/05%20-%20Flex%20Panel%20Gallery/flexBox.png)

# Flex Panels Image Gallery

Completed: March 27, 2018

We are given a web page with five `div` HTML elements; identified by class of `.panels` which is wrapped inside a container with the class of `.panel`. Each `div` contains three `p` elements. The initial state has the five `div` stacked with the type inside and visible.

## Synopsis

Our job is to display the divs vertically across the page and only the *middle* `p` element of each `div`. When we click on a particular `div` element we want to expand that element and bring the two other `p` tags (first/last) back into view. We need to update the CSS and write the JavaScript code needed to make this page interactive.

## Takeaways

Where do I start, I mentioned this was my first time working with flexbox. This challenge has definitely turned me into a fan of what flexbox can do and it makes me want to go check out Wes Bos' [flexbox course](https://flexbox.io/). Here's my primary takeaways:

tables, ternary operators, a new way of looping, arrow functions

1. Flex Container : Flex Item

#### Flex Items

**An element in css can be both a 'flex container' and a 'flex item'**

Flex items are only as wide as they need to be in order to display their contents, but we want them to take up the entire *flex container*. Allow the *flex items* to take up equal space and fill out the *flex container* by allowing them to grow. 

In the case of the challenge we want the content of each *flex item* to be flexible as well, we're going to display the `panel` class as both a *flex item* AND a *flex container*; this means that elements with the `panel` class will adjust themselves with respect to their *flex container* (div HTML element with class panels), and the contents within those elements (in this case, the three p HTML elements) will adjust themselves with respect to their own *flex container* (div HTML element with class panels).

**And so we begin with editing the CSS**


Set .panels to display as a flex container

```css
.panels {
  /* ... */
  //
  display: flex; 
}
```

Update styling applied to .panel so they equally maximize their width to the flex container

```css
.panel {
  /* ... */
  flex: 1; 
}
```


Update styling to .panel so they act as a flex container and it contents are displayed in columns. 

```css
.panel {
  /* ... */
  display: flex;
  flex-direction: column; 
}
```


`.panel > *` targets the children of each `panel`

We apply styling so the child elements become *flex items* and are center justified. 

```css
.panel > * {
  /* ... */
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
}
```

Now we add new style definitions for the *first* and *last* child elements of the `.panel` so that the content is pushed off the viewport until the panel is selected by the user.

```css
.panel > *:first-child {
  transform: translateY(-100%);
}

.panel.open-active > *:first-child {
  transform: translateY(0);
}

.panel > *:last-child {
  transform: translateY(100%);
}

.panel.open-active > *:last-child {
  transform: translateY(0);
}
```

Before we get into the JavaScript we have one thing left to setup in teh CSS. We need to add styling to make the panels expand when they are clicked. Instead of setting a specified width or percentage we set flex to eqaul 5. This makes the panel take up 5x the space of the other panels (*flext items) in the container.

```css
.panel.open {
  /* ... */
  flex: 5;
}
```


2. Event Listeners

After we have set up the function to reference all the elements with the class `panels` we need to iterate through the HTML Node elements that we are referencing and add the *event lister* for the `click` event. This *event listener* provides the name of the *event handler*.

```javascript
panels.forEach(panel => panel.addEventListener('click', toggleOpen)); 

//gives reference to function; when user clicks panel it goes and finds the function and runs it. You wouldnt put 'toggleOpen*()*' because that would run the function on page load
```

```javascript
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));

//this *event lister* waits until `toggleActive()` has finished the transition of the flex items
```

What we are doing is listening for a click on each panel, when someone clicks we open it via css trigger. When that finishes, the second one 'transitionend' will fire and toggle 'open-active'


## Running the Script

![](http://buddyharrisdesign.com/JavaScript30/exercises/05%20-%20Flex%20Panel%20Gallery/flexBox-2.png)

My final output including comments 

[**Live Demo**](http://buddyharrisdesign.com/JavaScript30/exercises/exercises/05%20-%20Flex%20Panel%20Gallery/index.html)


```css
.panel {
  /* ... */
  flex: 1; /*tells panels to fill parent ".panels" div evenly distrubuting extra space the div width*/
  justify-content: center; /*centers content within flex container*/
  align-items: center; /*centers content within flex container*/
  display: flex; /*sets panels as a flex item*/ 
  flex-direction: column; /*take contents of panel and stacks them vertically*/
}


/*FLEX CHILDREN, ITEMS WITHIN EACH PANEL*/
.panel > * {
  margin:0;
  width: 100%;
  transition:transform 0.5s;
  flex: 1 0 auto; /*forces children of each panel to evenly distribute extra space*/
  display: flex; /*sets children to float left*/
  justify-content: center; /*centers children left to right*/
  align-items: center; /*centers content vertically*/
}

.panel > *:first-child { transform: translateY(-100%); } /*moves first child element off viewport*/
.panel.open-active > *:first-child { transform: translateY(0%); } 
.panel > *:last-child { transform: translateY(100%); }/*moves last child element off viewport*/
.panel.open-active > *:last-child { transform: translateY(0%); }


.panel.open {
  /* ... */
  flex: 5; /*when it has class of open, its going to take 5 times the amount of extra room as the other panels*/
}
```

```javascript
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e){
  console.log(e.propertyName); //used to figure out what transitions are triggered on panel opening; 'flex-grow' is firing
  if(e.propertyName.includes('flex')) {//normally you would use 'e.propertyName === 'flex-grow''this condition to look for the property that changes, but some browsers identify it differently. You use '.includes('flex')
    this.classList.toggle('open-active'); //toggle set once we've checked for the property that is changing
}

  //this.classList.toggle('open-active'); default way of watching transition but doesnt watch the multiple transitionend events that would be firing
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); //gives reference to function; when user clicks panel it goes and finds the function and runs it. You wouldnt put 'toggleOpen()' because that would run the function on page load

panels.forEach(panel => panel.addEventListener('transitionend', 
  toggleActive));


  //overall
  //what we are doing is listening for a click on each panel, when someone clicks we open it via css trigger. When that finishes, the second one 'transitionend' will fire and toggle 'open-active'
```



## Acknowledgments

* Wes Bos
* Inspiration
* etc
