window.onload = function () {
    // Retrieve elements by ID
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var company = document.getElementById("company");
    var reason = document.getElementById("reason");
    var message = document.getElementById("message");
    var industry = document.getElementById("industry");

    // Load values from local storage if they exist, or set default values
    fname.value = localStorage.getItem("fname") || "John";
    lname.value = localStorage.getItem("lname") || "Doe";
    email.value = localStorage.getItem("email") || "example@example.com";
    phone.value = localStorage.getItem("phone") || "123-456-7890";
    company.value = localStorage.getItem("company") || "My Company";
    reason.value = localStorage.getItem("reason") || "project_inquiry";
    message.value = localStorage.getItem("message") || "Enter your message here...";
    industry.value = localStorage.getItem("industry") || "Technology";

    // Load skills checkboxes
    const skills = JSON.parse(localStorage.getItem("skills") || "[]");
    skills.forEach(skill => {
        const skillCheckbox = document.getElementById(skill);
        if (skillCheckbox) {
            skillCheckbox.checked = true;
        }
    });

    // Store values on form submission
    document.getElementById("myform").onsubmit = function () {
        localStorage.setItem("fname", fname.value);
        localStorage.setItem("lname", lname.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("company", company.value);
        localStorage.setItem("reason", reason.value);
        localStorage.setItem("message", message.value);
        localStorage.setItem("industry", industry.value);

        // Store selected skills
        const selectedSkills = [];
        document.querySelectorAll("input[name='skills']:checked").forEach(skill => {
            selectedSkills.push(skill.id);
        });
        localStorage.setItem("skills", JSON.stringify(selectedSkills));

        alert("Form data saved!");
    };
};
