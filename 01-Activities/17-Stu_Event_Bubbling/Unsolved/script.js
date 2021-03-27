var imgArray = ["image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg"];
var imgPrev = document.querySelector(".prev");
var imgNext = document.querySelector(".next");
var imgEl = document.querySelector("#imgId");

var i = 0;

imgPrev.addEventListener("click", function (event) {
  i--;
  if (i < 0) {
    i = imgArray.length - 1;
  }
  showImage(i);
});

imgNext.addEventListener("click", function (event) {
  i++;
  if (i >= imgArray.length) {
    i = 0;
  }
  showImage(i);
});

function showImage(index) {
  //console.log("index is working " + index);

  imgEl.setAttribute("src" , imgArray[index]);
  imgEl.setAttribute("style" , "height :200px; width : 300px;");
}
