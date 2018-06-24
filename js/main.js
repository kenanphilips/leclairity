function fullPage() {
	$('#fullpage').fullpage();
}

function activeClass() {
	// Get the container element
	var btnContainer = document.getElementById("fp-nav");

	// Get all buttons with class="btn" inside the container
	var btns = btnContainer.getElementsByClassName("nav-btn");

	// Loop through the buttons and add the active class to the current/clicked button
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function() {
	    var current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
	  });
	}
}

$(document).ready(function() {
	// fullPage();
	// activeClass();
});
