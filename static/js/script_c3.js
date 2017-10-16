var History3 = "";
var name = "";
var message = "";
var currentEntry = "";
var output = "";
var n = "Name: ";
var m = "Message: ";
var commentForm3 = document.getElementById("commentForm3");
commentForm3.addEventListener("submit", function(event) {
	event.preventDefault();

	name = commentForm3.elements.namedItem("name").value;
	message = commentForm3.elements.namedItem("message").value;
	currentEntry = n.bold() + name + " " + m.bold() + message + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0";
	output = document.getElementById("comment3");

	if(localStorage.getItem("History3")) {
		var history = localStorage.getItem("History3");
	} else {
		var history = "";
	}
	History3 = history + currentEntry;

	localStorage.setItem("History3", History3);

	output.innerHTML = localStorage.getItem("History3");
	document.getElementById('commentForm3').reset();
})

function previousComments() {
	output = document.getElementById("comment3");

	if(localStorage.getItem("History3")) {
		var history = localStorage.getItem("History3");
		History3 = history + currentEntry;

	} else {
		var history = "";
		History3 = "";
	}

	localStorage.setItem("History3", History3);

	output.innerHTML = localStorage.getItem("History3");
}