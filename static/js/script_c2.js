var History2 = "";
var name = "";
var message = "";
var currentEntry = "";
var output = "";
var n = "Name: ";
var m = "Message: ";
var commentForm2 = document.getElementById("commentForm2");
commentForm2.addEventListener("submit", function(event) {
	event.preventDefault();

	name = commentForm2.elements.namedItem("name").value;
	message = commentForm2.elements.namedItem("message").value;
	currentEntry = n.bold() + name + " " + m.bold() + message + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0";
	output = document.getElementById("comment2");

	if(localStorage.getItem("History2")) {
		var history = localStorage.getItem("History2");
	} else {
		var history = "";
	}
	History2 = history + currentEntry;

	localStorage.setItem("History2", History2);

	output.innerHTML = localStorage.getItem("History2");
	document.getElementById('commentForm2').reset();
})

function previousComments() {
	output = document.getElementById("comment2");

	if(localStorage.getItem("History2")) {
		var history = localStorage.getItem("History2");
		History2 = history + currentEntry;

	} else {
		var history = "";
		History2 = "";
	}

	localStorage.setItem("History2", History2);

	output.innerHTML = localStorage.getItem("History2");
}