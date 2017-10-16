1. What is the function of the following technologies in your assignment:

	-HTML: provides the structure/content of the page
	-CSS: styles the contents on the page
	-JavaScript: makes dynamic changes to the page (ie form validations)
	-Python: the server side language that connects Flask and client side
	-Flask: Python framework that provide tools that help handle get/post requests
	-HTTP: protocol used to send content to and from client/server
	-GET and POST requests: GET requests content while POST sends/puts content

2. How does HTML, CSS, and JavaScript work together in the browser for this 
assignment?

HTML provides the structure/content of the page ("backbone") then CSS will style the HTML content and the JavaScript updates the page (can add interactivity to pages or validate forms)

3. How does Python and Flask work together in the server for this assignment?

Flask is a framework written in Python that handles the POST/GET requests.

4. List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request

GET/index
GET/about
GET/contact
GET/blog/*
All of the above GET requests request the corresponding HTML file.

POST/f
This is when the customer submits (aka posts) information in the Contact Us form. 
