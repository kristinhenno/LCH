var button = document.getElementById("button");
var d3 = document.getElementById("d3");
var lolo = ["lolo1", "lolo2", "lolo3", "lolo4", "lolo5", "lolo6", "lolo7", "lolo8", "lolo9", "lolo10", "lolo11", "lolo12", "lolo13"];

function openNav() {
    button.style.display = "none";
    d3.style.display = "block";
}

function closeNav() {
    button.style.display = "inline-block";
    d3.style.display = "none";
}


$(document).ready(function() {
    for (i = 0; i < lolo.length; i++) {
        $("#projects").append("<div onclick='lightbox" + [i] + "' class='imgcontainer" + [i] + "'><img id='lolo" + [i] + "' src='/public/assets/images/Lolo/" + lolo[i] + ".jpg'/><div id='myModal' class='modal'> <span class = 'close'>&times;</span><img class='modal-content' id='img01'></div></div>");

    }


});