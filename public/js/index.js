var button = document.getElementById("button");
var d3 = document.getElementById("d3");
var count = 0;
var lolo = [
  "lolo1",
  "lolo2",
  "lolo3",
  "lolo4",
  "lolo5",
  "lolo6",
  "lolo7",
  "lolo8",
  "lolo9",
  "lolo10",
  "lolo11",
  "lolo12",
  "lolo13"
];

function openNav() {
  button.style.display = "none";
  d3.style.display = "block";
}

function closeNav() {
  button.style.display = "inline-block";
  d3.style.display = "none";
}

function images() {
  $("#homeimages").fadeOut(1000);
  $("#homeimages2").fadeIn(1500);
  setTimeout(images2, 4000);
}

function images2() {
  $("#homeimages2").fadeOut(1000);
  $("#homeimages3").fadeIn(1500);
  setTimeout(images3, 4000);
}

function images3() {
  $("#homeimages3").fadeOut(1000);
  $("#homeimages").fadeIn(1500);
  setTimeout(images, 4000);
}

$(document).ready(function() {
  if ($(window).width() > 769) {
    setTimeout(images, 3000);
  } else {
    $("#lolosbungalow").on("click", function(event) {
      console.log("poop");
      for (i = 0; i < lolo.length; i++) {
        $("#projects").append(
          "<div class='imgcontainer" +
            [i] +
            "'></div><img id='lolo" +
            [i] +
            "' class='allpics' src='/assets/images/Lolo/" +
            lolo[i] +
            ".jpg'/></div>"
        );
      }
    });
  }
});
