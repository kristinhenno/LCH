var button = document.getElementById("button");
var d3 = document.getElementById("d3");
var lolo = [
  "1a",
  "1b",
  "2a",
  "2b",
  "3a",
  "3b",
  "4a",
  "4b",
  "5a",
  "5b",
  "6a",
  "6b",
  "7a",
  "7b",
  "8a",
  "8b",
  "9a",
  "9b",
  "10a",
  "10b",
  "11a",
  "11b",
  "12a",
  "12b",
  "13a",
  "13b",
  "14a",
  "14b",

];

function openNav() {
  button.style.display = "none";
  d3.style.display = "block";
}

function closeNav() {
  button.style.display = "inline-block";
  d3.style.display = "none";
}

function lightbox(idx) {
  //Show the slider wrapper
  var ninjaSldr = document.getElementById("ninja-slider");
  ninjaSldr.parentNode.style.display = "block";

  //Then init the slider
  //Note: The { initSliderByCallingInitFunc: true } option in the
  // ninja-slider.js tells the page not to initiate the slider
  // unless the following init(idx) function is called.
  nslider.init(idx);

  //Then mimic clicking the fullscreen button to popup the modal
  var fsBtn = document.getElementById("fsBtn");
  fsBtn.click();
}

function fsIconClick(isFullscreen) {
  //Note: fsIconClick is the default event handler of the fullscreen button
  if (isFullscreen) {
    var ninjaSldr = document.getElementById("ninja-slider");
    ninjaSldr.parentNode.style.display = "none";
  }
}

$(document).ready(function () {
  for (i = 0; i < lolo.length; i++) {
    $("#projects").append(
      "<div class='imgcontainer" + [i] +
      "'><img onclick='lightbox(" + [i] +
      ")' id='lolo" + [i] +
      "' src='/assets/images/Before/Casita/" +
      lolo[i] +
      ".jpg'/><div id='myModal' class='modal'> <span class = 'close'>&times;</span><img class='modal-content' id='img01'></div></div>"
    );
  }
  if ($(window).width() > 769) {
    for (i = 0; i < lolo.length; i++) {
      $("#ninja").append(
        "<li><a class='ns-img' href='/assets/images/Before/Casita" +
        lolo[i] +
        ".jpg'></a></li>"
      );
    }
  }
});