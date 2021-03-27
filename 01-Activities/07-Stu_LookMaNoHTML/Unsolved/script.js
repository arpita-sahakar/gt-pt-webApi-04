// // Create your HTML Page via DOM Methods here!
// console.log(document.body);
// var tag1 = document.createElement("h1");
// tag1.textContent = "This was made via prompts. It's a " + "h1";
// document.body.appendChild(tag1);

// var tag2 = document.createElement("h2");
// tag2.textContent = "This was made via prompts. It's a " + "h2";
// document.body.appendChild(tag2);


// var img = document.createElement("img");
// img.src ="puppies-cover.jpg" ;
// document.body.appendChild(img);

// var unorderedList = document.createElement("ul");
// var li1 = document.createElement("li");
// li1.textContent = "orange";

// var li2 = document.createElement("li");
// li2.textContent = "apple";

// var li3 = document.createElement("li");
// li3.textContent = "banana";

// unorderedList.appendChild(li1);
// unorderedList.appendChild(li2);
// unorderedList.appendChild(li3);

// document.body.appendChild(unorderedList);


var h1Tag = document.createElement("h1");
h1Tag.textContent = "This is h1";
h1Tag.setAttribute("style", "text-align : center");
document.body.appendChild(h1Tag);


var h2Tag = document.createElement("h2");
h2Tag.textContent = "This is h2";
h2Tag.setAttribute("style", "text-align : center");
document.body.appendChild(h2Tag);

var image = document.createElement("img");
image.setAttribute("src", "puppies-cover.jpg");
image.setAttribute("alt", "this is a cute puppy");
image.setAttribute("style", "height:200px; width:300px;");
image.setAttribute("style", "display: block;margin-left: auto; margin-right: auto; width: 50%;")

document.body.appendChild(image);

var ulList = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

li1.textContent = "apple";
li2.textContent = "banana";
li3.textContent = "grapes";

ulList.appendChild(li1);
ulList.appendChild(li2);
ulList.appendChild(li3); 

document.body.appendChild(ulList);

document.body.setAttribute("style", "padding : 50px;");




