let navBar = document.querySelector(".navbar");
let SearchBox = document.querySelector(".SearchContainer .bx-search");
/* <i class='bx bx-x'></i> */
SearchBox.addEventListener("click", () =>{
    navBar.classList.toggle("showSearch");

if(navBar.classList.contains("showSearch")){
    SearchBox.classList.replace("bx-search", "bx-x");
}else{
    SearchBox.classList.replace("bx-x", "bx-search");
}
})


//sidebar functional
let menuOpen = document.querySelector(".navbar .bx-menu");
let menuClose = document.querySelector(".navLinks .bx-x");
let navLinks = document.querySelector(".navLinks");

menuOpen.addEventListener("click", ()=>{
    navLinks.style.left = "0"
})

menuClose.addEventListener("click", ()=>{
    navLinks.style.left = "-100%"
})

//sidebar submenu
let firstAroow = document.querySelector(".firstAroow");
firstAroow.addEventListener("click", ()=> {
    navLinks.classList.toggle("showFirst");
})
let moreAroow = document.querySelector(".moreAroow");
moreAroow.addEventListener("click", ()=> {
    navLinks.classList.toggle("showSecond");
})
let secondAroow = document.querySelector(".secondAroow");
secondAroow.addEventListener("click", ()=> {
    navLinks.classList.toggle("showFird");
})

// Media Discount
const video = document.querySelector(".video");
const buttonControl = document.querySelector(".videoControl");
buttonControl.addEventListener("click", controlVideo)

function controlVideo(){
    if(video.paused){
        buttonControl.innerHTML = "<i class='bx bx-pause'></i>" ;
        video.play();
    }else{
        buttonControl.innerHTML = "<i class='bx bx-play'></i>" ;
        video.pause();
    }
    
}

    

