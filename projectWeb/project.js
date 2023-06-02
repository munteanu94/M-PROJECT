const menuIcons = document.querySelector('.menuIcons');
const navList = document.querySelector('.navList');
if(menuIcons) {
    menuIcons.addEventListener("click", ()=>{
        navList.classList.toggle("open");
    })
}