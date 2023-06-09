//menu
const menu = document.querySelector(".navList");

document.querySelector(".menu").onclick = () =>{
    menu.classList.add('show');
}
document.querySelector(".navList .close").onclick = () =>{
    menu.classList.remove('show');
}
// video 
const containerVideo = document.querySelector(".header .containerVideo");
const video = document.querySelector('.video');
const btn = document.querySelector('.controlVideo');

document.querySelector(".watchBtn").onclick = () =>{
    containerVideo.classList.add('active');
}
document.querySelector(".closeVideo").onclick = () =>{
    containerVideo.classList.remove('active');
}

function controlVideo (){
   if(video.paused){
    btn.innerHTML = "<i class='bx bx-pause'></i>";
    video.play();
   }else{
    btn.innerHTML = "<i class='bx bx-play'></i>";
    video.pause();
   }
}
btn.addEventListener("click", controlVideo);


const login = document.querySelector('.formContainer');

['.loginLink', '.login'].forEach( (e) =>{
document.querySelector(e).onclick = () =>{
    login.classList.add('active');
    menu.classList.remove('show');
}
})

document.querySelector('.closeForm').onclick = () =>{
    login.classList.remove('active');
}