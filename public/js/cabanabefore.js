var button = document.getElementById("button");
var d3 = document.getElementById("d3");
var lolo = ["1", "2", "3", "4", "5", "6", "7", "8"];

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

    for (i = 0; i < lolo.length; i++) {
        $("#projects").append("<div class='imgcontainer" + [i] + "'><img onclick='lightbox(" + [i] + ")' id='lolo" + [i] + "' src='/assets/images/Before/Cabana/" + lolo[i] + ".jpg'/><div id='myModal' class='modal'> <span class = 'close'>&times;</span><img class='modal-content' id='img01'></div></div>");

    }
    if ($(window).width() > 769) {

        for (i = 0; i < lolo.length; i++) {
            $("#ninja").append("<li><a class='ns-img' href='/assets/images/Before/Cabana/" + lolo[i] + ".jpg'></a></li>")

        }
    }


})