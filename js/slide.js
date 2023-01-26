let slideIndex = 1;
addSlide(slideIndex);

function plusOnce(n) {
  addSlide(slideIndex += n);
}

function addSlide(n) {
  let i;
  let x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}  ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
function displayTime(){
  let dateTime = new Date();
  let hourss = dateTime.getHours();
  let minutess = dateTime.getMinutes();
  let secondss = dateTime.getSeconds();
  let sessions = document.getElementById('session');
  if(hourss >= 12){
    sessions.innerHTML = 'PM';
  }else{
    sessions.innerHTML = 'AM';
  }
  document.getElementById('hours').innerHTML = hourss;
  document.getElementById('minutes').innerHTML = minutess;
  document.getElementById('seconds').innerHTML = secondss;
}
setInterval(displayTime, 1000);

