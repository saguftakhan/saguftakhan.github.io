document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Collecting form data
    const formData = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        contactMethod: document.querySelector('input[name="contact_method"]:checked')?.value || '',
        reason: document.getElementById('reason').value,
        message: document.getElementById('message').value,
        industry: document.querySelector('input[list="industry"]').value,
        skills: Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value)
    };

    // Log form data to confirm it's correct
    console.log("Collected Form Data:", formData);

    // Save form data to local storage as JSON string
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log("Data saved to local storage");

    // Alert user and reset the form
    alert('Your data has been saved locally!');
    document.getElementById('myform').reset();
});
