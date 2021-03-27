console.log ("hello world");


// # Setting Attributes

// In this activity you are going to use JavaScript to add `hrefs` to `a` tags, `src` to `img` tags, along with some styles all while traversing the DOM.

// ## Instructions

// * Open `index.html` and familiarize yourself with the structure of the HTML.



// * Inside of your provided `script.js` complete the following: 

//   * Give a `src` and `alt` attribute to the 3 provided `img` tags.
var imgEls = document.querySelectorAll("img");
for (var i=0; i<imgEls.length; i++) {
    imgEls[i].setAttribute("src", "images/image_" + (i + 1) + ".jpg");
    imgEls[i].setAttribute("alt", "working with team picture");
    // imgEls[i].setAttribute("style", "width : 500px; height : 500px;");

}


//   * Give a `href` attribute to the 3 provided `a` tags.`
var aTags = document.querySelectorAll("a");
var urlArray = ["https://www.google.com/", "https://www.udemy.com/", "https://www.airbnb.com/"]
for (var i=0; i<aTags.length; i++){
    aTags[i].setAttribute("href", urlArray[i]);
}

//   * Add styles via `setAttribute` to make the page look decent. Recommended: margins and padding.

// ## Hint 

// * You may need a for loop!

   imgEls[0].setAttribute("style", "width : 500px; height : 500px;");
   imgEls[1].setAttribute("style", "width : 600px; height : 600px;");

   imgEls[2].setAttribute("style", "width : 700px; height : 700px;");

   document.querySelector("body").setAttribute("style", "padding : 20px;");




// ## Bonus
 
// * Randomly set the `href` for site 1 from an array of sites you create.





