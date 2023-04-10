let slideIndex = 1;
showDivs(slideIndex);
function currentDiv(n) {
  showDivs(slideIndex = n);
}
function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slide");
  let docum = document.getElementsByClassName("show");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < docum.length; i++) {
    docum[i].className = docum[i].className.replace("play", "");
  }
  x[slideIndex-1].style.display = "block";  
  docum[slideIndex-1].className += " play";
}



