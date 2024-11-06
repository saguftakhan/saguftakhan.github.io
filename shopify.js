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