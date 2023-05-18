const btn = document.querySelector(".btnSwitch");
const video = document.querySelector(".videoContainer");

btn.addEventListener("click", function(){
    if(!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause();
    }else{
        btn.classList.remove("slide");
        video.play();
    };
})