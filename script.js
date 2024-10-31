// Prompt to type in name
let person = prompt("Please enter your name", "Your Name");
if (person != null) {
    // If the user provided a name, display a personalized greeting message in the element with ID "demo"
    document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
}

// Select all the links in the navigation menu
let menuItems = document.querySelectorAll('.navbar-container nav ul li a');
menuItems.forEach(item => {
     // When the mouse moves over a menu item, change its color to black
    item.addEventListener('mouseover', () => {
        item.style.color = 'black'; // Changes text color to black on hover
    });
    // When the mouse moves away from a menu item, change its color back to dark blue
    item.addEventListener('mouseout', () => {
        item.style.color = 'darkblue'; // Reverts text color to dark blue when not hovering
    });
});
