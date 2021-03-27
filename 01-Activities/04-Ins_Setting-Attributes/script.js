// var pTags = document.querySelectorAll("p");
var divTags = document.querySelectorAll("div");
var aTags = document.querySelectorAll("a");
var imgElements = document.querySelectorAll("img");
 
// var changeP = document.querySelector("#change2");

// console.log(pTags);

// pTags[0].setAttribute("style", "font-size: 65px;");
// changeP.setAttribute("style", "color:blue; border:2px solid black;");
aTags[0].setAttribute("href", "https://github.com");
imgElements[0].setAttribute("src", "images/image_1.jpg");
imgElements[0].setAttribute("style", "width:500px; height:200px;");

imgElements[0].setAttribute("alt", "Alternate String here");

for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "text-decoration:underline; color:red;");
}
