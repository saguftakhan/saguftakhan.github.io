// Prompt to type in name
let person = prompt("Please enter your name", "Your Name");
if (person != null) {
    // If the user provided a name, display a personalized greeting message in the element with ID "demo"
    document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
}

// JavaScript Document

var myVideo = document.getElementById("video1"); //Get the video element
//window.onload = function(){myVideo=document.getElementById("video1");}

function playPause()
{
    /*
      These built-in functions provides the basic play/pause control using if statements with paused condition checking.
    myVideo is declared outside all functions, so it is available throughout the code.
    */
    if (myVideo.paused)
    {
        myVideo.play();
    } else
    {
        myVideo.pause();
    }
}
/*
 Below methods change width and height of the video *player* which can be called when the buttons are clicked.
 Note: The video itself doesn't enlarge.
 */
function makeBig() 
{
    myVideo.width = 600;
    myVideo.height = 500;
}

function makeSmall() 
{
    myVideo.width = 320;
    myVideo.height = 100;
}

function makeNormal() 
{
    myVideo.width = 420;
    myVideo.height = 250;
}
// Display alt text for images
function displayAltText(id) {
    const altText = document.getElementById(id).alt;
    alert(altText);
}

// Increase text size globally
const increaseTextSizeBtn = document.getElementById('increase-text-size');
increaseTextSizeBtn.addEventListener('click', () => {
    document.querySelectorAll('body, body *').forEach(el => {
        const currentFontSize = window.getComputedStyle(el).fontSize;
        el.style.fontSize = parseFloat(currentFontSize) + 2 + 'px';
    });
});

// Change theme colors dynamically with accessibility in mind
const changeThemeBtn = document.getElementById('change-theme');
let isLightTheme = true;

changeThemeBtn.addEventListener('click', () => {
    if (isLightTheme) {
        // Apply dark theme
        document.body.style.backgroundColor = '#1C1C2E'; // Dark navy background
        document.body.style.color = '#E4E4E4'; // Off-white text

        document.querySelectorAll('h1').forEach(h1 => h1.style.color = '#FFFFFF'); // White for headings
        document.querySelectorAll('p').forEach(p => p.style.color = '#CCCCCC'); // Light gray for paragraphs
        document.querySelectorAll('a').forEach(a => a.style.color = '#4FC3F7'); // Bright cyan for links

        document.querySelector('.container').style.backgroundImage = "url('dark-theme-background.jpg')";

        isLightTheme = false;
    } else {
        // Apply light theme
        document.body.style.backgroundColor = '#FFFFFF'; // White background
        document.body.style.color = '#000000'; // Black text

        document.querySelectorAll('h1').forEach(h1 => h1.style.color = '#000000'); // Black for headings
        document.querySelectorAll('p').forEach(p => p.style.color = '#333333'); // Dark gray for paragraphs
        document.querySelectorAll('a').forEach(a => a.style.color = '#0056D2'); // Dark blue for links

        document.querySelector('.container').style.backgroundImage = "url('light-theme-background.jpg')";

        isLightTheme = true;
    }
});

// Select all the links in the navigation menu
let menuItems = document.querySelectorAll('.navbar-container nav ul li a');
menuItems.forEach(item => {
    // When the mouse moves over a menu item, change its color to a high-contrast color
    item.addEventListener('mouseover', () => {
        item.style.color = '#FFBF00'; // Bright amber (high contrast)
    });
    // When the mouse moves away from a menu item, revert to the theme's link color
    item.addEventListener('mouseout', () => {
        item.style.color = isLightTheme ? '#0056D2' : '#4FC3F7'; // Light or dark theme link color
    });
});