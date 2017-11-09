var button = document.getElementById("button");
var d3 = document.getElementById("d3");
var count = 0;

function openNav() {
    button.style.display = "none";
    d3.style.display = "block";
}

function closeNav() {
    button.style.display = "inline-block";
    d3.style.display = "none";
}

function images() {
    $('#homeimages').fadeOut(1000);
    $('#homeimages2').fadeIn(1500);
    setTimeout(images2, 4000);
}

function images2(){
	 $('#homeimages2').fadeOut(1000);
	 $('#homeimages').fadeIn(1500);
	 setTimeout(images, 4000)

}


$(document).ready(function() {
    setTimeout(images, 3000);

});


