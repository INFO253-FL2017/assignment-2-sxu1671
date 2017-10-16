"""
webserver.py

File that is the central location of code for your webserver.
"""

from flask import Flask, render_template, redirect, url_for, request
from os import environ
import json
import requests

# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")

@app.route('/')
def hello_world():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    return render_template('index.html') # Render the template located in "templates/index.html"

@app.route('/index')
def index():
	return render_template("index.html")

@app.route('/about')
def about():
	return render_template('About Us.html')

@app.route('/contact')
def contact():
	return render_template('Contact Us.html')

@app.route('/blog/8-experiments-in-motivation')
def motivation():
    return render_template("8 Experiments in Motivation.html")

@app.route('/blog/a-mindful-shift-of-focus')
def mindful():
    return render_template("A Mindful Shift of Focus.html")

@app.route('/blog/how-to-develop-an-awesome-sense-of-direction')
def direction():
    return render_template("How to Develop an Awesome Sense of Direction.html")

@app.route('/blog/training-to-be-a-good-writer')
def writer():
    return render_template("Training to Be a Good Writer.html")

@app.route('/blog/what-productivity-systems-wont-solve')
def productivity():
    return render_template("What Productivity Systems Won't Solve.html")

user = environ['INFO253_MAILGUN_USER']
pw = environ['INFO253_MAILGUN_PASSWORD']
from_email = environ['INFO253_MAILGUN_FROM_EMAIL']
to_email = environ['INFO253_MAILGUN_TO_EMAIL']
domain = environ['INFO253_MAILGUN_DOMAIN']

@app.route('/f', methods=['POST'])
def post_form():
  data = json.loads(request.data.decode('ascii'))
  r = requests.post(
    "https://api.mailgun.net/v3/"+domain+"/messages",
    auth = (user, pw),
    data = {"from": data['name'] + " " + from_email,
    'to': to_email,
    'subject': data['subject'],
    'text': data['msg']})
  return(' ', 204)
