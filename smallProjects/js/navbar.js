const navButton = document.querySelector(".navButton");
const links = document.querySelector(".links");

navButton.addEventListener("click", function(){
    if(links.classList.contains("show-links")) {
        links.classList.remove("show-links")
    }else{
        links.classList.add("show-links")
    }
})