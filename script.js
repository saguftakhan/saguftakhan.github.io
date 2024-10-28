// Prompt to type in name
let person = prompt("Please enter your name", "Your Name");

if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}

// Mouseover and Mouseout for menu items
let menuItems = document.querySelectorAll('.navbar a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'green'; 
    });

    item.addEventListener('mouseout', () => {
        item.style.color = 'white'; 
    });
});