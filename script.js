//  Prompt to type in name 
let person = prompt("Please enter your name", "Your Name");

if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}

// Mouseover and Mouseout for menu items 
let menuItems = document.querySelectorAll('.navbar a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'darkblue'; 
    });

    item.addEventListener('mouseout', () => {
        item.style.color = 'black'; 
    });
});

let dropdownButton = document.querySelector('.dropbtn');
dropdownButton.addEventListener('mouseover', () => {
    dropdownButton.style.color = 'darkblue'; 
});
dropdownButton.addEventListener('mouseout', () => {
    dropdownButton.style.color = 'black'; 
});



// When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
}
}
}
}


