const menuIcons = document.querySelector('.menuIcons');
const navList = document.querySelector('.navList');
if(menuIcons) {
    menuIcons.addEventListener("click", ()=>{
        navList.classList.toggle("open");
    })
}

//popup
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popupClose");

if(popup) {
    popupClose.addEventListener("click", () => {
        popup.classList.add("hidePopap");
    })
    window.addEventListener('load', () => {
        setTimeout(() =>{
            popup.classList.remove("hidePopap");
        },1000)
    })
}