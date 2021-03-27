var articleElement = document.getElementById("articles");
articleElement.style.fontSize = "50px";
articleElement.children[0].lastElementChild.style.color = "blue";

document.getElementById("articles").previousElementSibling.style.backgroundColor = "black";

var main = document.getElementById("main");
console.log(main);

main.childNodes[1].style.textDecoration = "underline";

main.lastElementChild.style.fontSize = "50px"; 

main.firstElementChild.style.color = "orange";

main.lastElementChild.parentElement.style.fontSize = "50px"
