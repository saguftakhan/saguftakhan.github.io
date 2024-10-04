let person = prompt("Please enter your name", "Your Name");

if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}


let menuItems = document.querySelectorAll('nav a');


menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'blue'; 
});

    item.addEventListener('mouseout', () => {
        item.style.color = 'black'; 
});
});





