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

var img = document.createElement("img"); 
 
img.src = "IMG_0364.jpg"; 
var src = document.getElementById("x"); 
img.style.width = "350px";
img.style.height = "350px"; 
 
var src =document.getElementById("x")
src.appendChild(img);

// Function to enlarge the image when clicked
img.onclick = function() {
    if (img.style.width === "350px") {
        img.style.width = "600px";  // Enlarged size
        img.style.height = "600px"; // Enlarged size
    } else {
        img.style.width = "350px";  // Default size when clicked again
        img.style.height = "350px"; 
    }
};