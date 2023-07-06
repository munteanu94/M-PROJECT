function copyMenu() {
    //copy all items in departments from dptCat
    const dptCategory = document.querySelector(".dptCat");
    const dptPlace = document.querySelector(".departments");
    dptPlace.innerHTML = dptCategory.innerHTML;
    
    //copy nav to nav
   let mainNav = document.querySelector(".headerNav nav");
   let navPlace = document.querySelector(".offConvas nav");
   navPlace.innerHTML = mainNav.innerHTML;

   //copy headerTop to thetopNav
   const topNav = document.querySelector(".headearTop .box");
   const topPlace = document.querySelector(".topNav");
   topPlace.innerHTML = topNav.innerHTML;

}
copyMenu();

// show sub menu 

const subMenu = document.querySelectorAll(".hasItem .iconSmoll,");
subMenu.forEach((menu) =>menu.addEventListener("click",toggle));


function toggle(e) {
    e.preventDefault();
    subMenu.forEach((item) => item != this ? item.closest(".hasItem").classList.remove("expand") : null);
    if(this.closest(".hasItem").classList != "expand");
    this.closest(".hasItem").classList.toggle("expand");
};