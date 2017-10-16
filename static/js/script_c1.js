var History1 = "";
var name = "";
var message = "";
var currentEntry = "";
var output = "";
var n = "Name: ";
var m = "Message: ";
var commentForm1 = document.getElementById("commentForm1");
commentForm1.addEventListener("submit", function(event) {
	event.preventDefault();

	name = commentForm1.elements.namedItem("name").value;
	message = commentForm1.elements.namedItem("message").value;
	currentEntry = n.bold() + name + " " + m.bold() + message + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0";
	output = document.getElementById("comment1");

	if(localStorage.getItem("History1")) {
		var history = localStorage.getItem("History1");
	} else {
		var history = "";
	}
	History1 = history + currentEntry;

	localStorage.setItem("History1", History1);

	output.innerHTML = localStorage.getItem("History1");
	document.getElementById('commentForm1').reset();
})

function previousComments() {
	output = document.getElementById("comment1");

	if(localStorage.getItem("History1")) {
		var history = localStorage.getItem("History1");
		History1 = history + currentEntry;

	} else {
		var history = "";
		History1 = "";
	}

	localStorage.setItem("History1", History1);

	output.innerHTML = localStorage.getItem("History1");
}