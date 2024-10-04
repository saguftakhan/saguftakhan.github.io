let person = prompt("Please enter your name", "Angelina Jolie");

if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}







function mOver(some_tag) {
    some_tag.innerHTML = "Thank You";
     some_tag.style.color = "brown";
  }
  function mOut(some_tag) {
     some_tag.innerHTML = "Mouse Over Me";
     some_tag.style.color = "red";
  }