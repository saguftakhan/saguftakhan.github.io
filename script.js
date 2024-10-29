// Prompt to type in name
let person = prompt("Please enter your name", "Your Name");
if (person != null) {
    document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
}

// Mouseover and Mouseout for menu items
let menuItems = document.querySelectorAll('.navbar-container nav ul li a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'black'; 
    });

    item.addEventListener('mouseout', () => {
        item.style.color = 'darkblue'; 
    });
});
