
function myFunction(event) {
    event.preventDefault();
}

var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var company = document.getElementById("company").value;
var text = document.getElementById("text").value;
var reason = document.getElementById("reason").value;
var message = document.getElementById("message").value;
var industry = document.getElementById("industry").value;
var web_dev = document.getElementById("web_dev").value;
var graphic_design = document.getElementById("graphic_design").value;
var content_writing = document.getElementById("content_writing").value;
var project_management = document.getElementById("project_management").value;


localStorage.setItem("firstName", document.getElementById("fname").value);
localStorage.setItem("lastName", document.getElementById("lname").value);
localStorage.setItem("email", document.getElementById("email").value);
localStorage.setItem("phone", document.getElementById("phone").value);
localStorage.setItem("company", document.getElementById("company").value);
localStorage.setItem("reason", document.getElementById("reason").value);
localStorage.setItem("message", document.getElementById("message").value);
localStorage.setItem("industry", document.getElementById("industry").value);
localStorage.setItem("web_dev", document.getElementById("web_dev").value);
localStorage.setItem("graphic_design", document.getElementById("graphic_design").value);
localStorage.setItem("content_writing", document.getElementById("content_writing").value);
localStorage.setItem("project_management", document.getElementById("project_management").value);

