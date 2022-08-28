let closenav=document.getElementById("navb2");
closenav.addEventListener("click",closeNav);

function openNav() {
    document.getElementById("navbarmenu").style.width = "300px";
  }
  
function closeNav() {
    document.getElementById("navbarmenu").style.width = "0";
}