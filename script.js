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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
}
}
}
}

