var History4 = "";
var name = "";
var message = "";
var currentEntry = "";
var output = "";
var n = "Name: ";
var m = "Message: ";
var commentForm4 = document.getElementById("commentForm4");
commentForm4.addEventListener("submit", function(event) {
	event.preventDefault();

	name = commentForm4.elements.namedItem("name").value;
	message = commentForm4.elements.namedItem("message").value;
	currentEntry = n.bold() + name + " " + m.bold() + message + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0";
	output = document.getElementById("comment4");

	if(localStorage.getItem("History4")) {
		var history = localStorage.getItem("History4");
	} else {
		var history = "";
	}
	History4 = history + currentEntry;

	localStorage.setItem("History4", History4);

	output.innerHTML = localStorage.getItem("History4");
	document.getElementById('commentForm4').reset();
})

function previousComments() {
	output = document.getElementById("comment4");

	if(localStorage.getItem("History4")) {
		var history = localStorage.getItem("History4");
		History4 = history + currentEntry;

	} else {
		var history = "";
		History4 = "";
	}

	localStorage.setItem("History4", History4);

	output.innerHTML = localStorage.getItem("History4");
}