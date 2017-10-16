var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
	event.preventDefault();
	var name = contactForm.elements.namedItem("name").value;
	var subject = contactForm.elements.namedItem("subject").value;
	var message = contactForm.elements.namedItem("message").value;
	var output = document.getElementById("contact");
	var missing = ""
	// console.log(name);
	
	if(name == "" || subject == "" || message == "") {
		if(name === "") {
			missing += "name ";
		}
		if(subject === "") {
			missing += "subject ";
		}
		if(message === "") {
			missing += "message";
		}
		output.innerHTML = "Please fill out the following fields: " + missing;
	} else {
		var xhttp = new XMLHttpRequest();
		xhttp.open("POST","/f",true);
		s = xhttp.send('{"name":"' + name + '","subject":"' + subject + '","msg":"' + message + '"}')
		message = "";
		subject = "";
		output.innerHTML = 'Hi ' + name + ', your message has been sent';
		name = "";
	}	
})
