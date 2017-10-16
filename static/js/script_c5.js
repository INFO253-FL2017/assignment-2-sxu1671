var History5 = "";
var name = "";
var message = "";
var currentEntry = "";
var output = "";
var n = "Name: ";
var m = "Message: ";
var commentForm5 = document.getElementById("commentForm5");
commentForm5.addEventListener("submit", function(event) {
	event.preventDefault();

	name = commentForm5.elements.namedItem("name").value;
	message = commentForm5.elements.namedItem("message").value;
	currentEntry = n.bold() + name + " " + m.bold() + message + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0";
	output = document.getElementById("comment5");

	if(localStorage.getItem("History5")) {
		var history = localStorage.getItem("History5");
	} else {
		var history = "";
	}
	History5 = history + currentEntry;

	localStorage.setItem("History5", History5);

	output.innerHTML = localStorage.getItem("History5");
	document.getElementById('commentForm5').reset();
})

function previousComments() {
	output = document.getElementById("comment5");

	if(localStorage.getItem("History5")) {
		var history = localStorage.getItem("History5");
		History5 = history + currentEntry;

	} else {
		var history = "";
		History5 = "";
	}

	localStorage.setItem("History5", History5);

	output.innerHTML = localStorage.getItem("History5");
}