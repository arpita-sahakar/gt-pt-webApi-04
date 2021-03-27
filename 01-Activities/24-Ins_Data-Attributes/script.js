var imageContainer = document.querySelector(".img-container");

imageContainer.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches("img")) {
    var state = element.getAttribute("data-state");

    if (state === "still") {
      element.setAttribute("data-state", "animate");
      var attrValue = element.getAttribute("data-animate");
      element.setAttribute("src", attrValue );
    } else if (state === "animate") {
      element.setAttribute("data-state", "still");
      element.setAttribute("src", element.getAttribute("data-still"));
    }
  }
});
