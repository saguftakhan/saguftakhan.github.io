let person = prompt("Please enter your name", "Your Name");

if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}







let menuItems = document.querySelectorAll('nav a');

// Add event listeners for mouseover and mouseout
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'blue'; // Change color on hover (mouseover)
});

    item.addEventListener('mouseout', () => {
        item.style.color = 'black'; // Revert back to original color (mouseout)
});
});