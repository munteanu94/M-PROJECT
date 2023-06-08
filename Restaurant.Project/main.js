//menu
const menu = document.querySelector(".navList");

document.querySelector(".menu").onclick = () =>{
    menu.classList.add('show');
}
document.querySelector(".navList .close").onclick = () =>{
    menu.classList.remove('show');
}