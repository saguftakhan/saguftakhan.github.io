window.onload = function() {
    // Access form elements
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var company = document.getElementById("company");
    var contactEmail = document.getElementById("contact_email");
    var contactPhone = document.getElementById("contact_phone");
    var contactText = document.getElementById("contact_text");
    var reason = document.getElementById("reason");
    var message = document.getElementById("message");
    var industry = document.querySelector('input[list="industry"]');
    var skills = document.querySelectorAll('input[name="skills"]:checked');

    // Event listener to handle form submission
    document.getElementById('myform').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect and log form data
        console.log(fname.value); // First name
        console.log(lname.value); // Last name
        console.log(email.value); // Email address
        console.log(phone.value); // Phone number
        console.log(company.value); // Company name
        console.log(reason.value); // Reason for contact
        console.log(message.value); // Message
        console.log(industry.value); // Industry
        console.log(contactEmail.checked ? "Email" : contactPhone.checked ? "Phone" : "Text"); // Preferred contact method

        // Save form data to local storage
        localStorage.setItem("firstName", fname.value);
        localStorage.setItem("lastName", lname.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("company", company.value);
        localStorage.setItem("contactMethod", contactEmail.checked ? "Email" : contactPhone.checked ? "Phone" : "Text");
        localStorage.setItem("reason", reason.value);
        localStorage.setItem("message", message.value);
        localStorage.setItem("industry", industry.value);

        // Store skills as an array in local storage
        let skillsArray = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value);
        localStorage.setItem("skills", JSON.stringify(skillsArray));

        alert("Your data has been saved locally!");
    });

    // Retrieve and log stored data (for testing purposes)
    console.log(localStorage.getItem("firstName")); // Check first name stored in local storage
    console.log(localStorage.getItem("skills")); // Check skills stored in local storage as a JSON string
};
