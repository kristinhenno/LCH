var button = document.getElementById("button");
var d3 = document.getElementById("d3");
var sb = ["1", "2"];

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





$(document).ready(function() {
    for (i = 0; i < sb.length; i++) {
        $("#projects").append("<div id='imgcontainers" + [i] + "'><img onclick='lightbox(" + [i] + ")' class='californiahomes' src='/assets/images/Press/Summer17/" + sb[i] + ".jpg'/><div id='myModal' class='modal'> <span class = 'close'>&times;</span><img class='modal-content' id='img01'></div></div>");

    }
 if ($(window).width() > 769) {

    for (i = 0; i < sb.length; i++) {
        $("#ninja").append("<li><a class='ns-img' href='/assets/images/Press/Summer17/" + sb[i] + ".jpg'></a></li>")
}
    }


})