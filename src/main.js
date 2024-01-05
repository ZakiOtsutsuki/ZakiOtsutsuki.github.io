window.onresize = function() {
    var x = document.getElementById("mobile-nav");
    if(window.innerWidth >= 768){
        x.style.display = "none";
    }
}

function showNavBar(){
    var x = document.getElementById("mobile-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
}