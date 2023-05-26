const navButton = document.querySelector(".navButton");
const navContainer= document.querySelector(".navContainer");

navButton.addEventListener("click", ()=> {
    if(navContainer.classList.contains("showNavContainer")){
        navContainer.classList.remove("showNavContainer")
    }else {
        navContainer.classList.add("showNavContainer")
    }
})

const navFixed = document.querySelector(".header");
window.addEventListener("scroll", function (){
    const scrollHeight = window.pageYOffset;
    const navHeight = navFixed.getBoundingClientRect().height
    
    if(scrollHeight > navHeight){
        navFixed.classList.add("headerFixted")
    }else{
        navFixed.classList.remove("headerFixted")
    }
})
   