function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
const block=document.querySelector('.ch')
if (window.screenX <983){
  block.style.display="block";
} else (window.screenX > 983)
  block.style.display="none";