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

//Show mobile menu
const menuBtn = document.querySelector(".trigger");
const closeBtn = document.querySelector(".t-close");
const addClass = document.querySelector(".site");

menuBtn.addEventListener("click", () =>{
    addClass.classList.toggle("showMenu");
})
closeBtn.addEventListener("click", () =>{
    addClass.classList.remove("showMenu");
})

// show sub menu 

const subMenu = document.querySelectorAll(".hasItem .iconSmoll");
subMenu.forEach((menu) =>menu.addEventListener("click",toggle));

function toggle(e) {
    e.preventDefault();
    subMenu.forEach((item) => item != this ? item.closest(".hasItem").classList.remove("expand") : null);
    if(this.closest(".hasItem").classList != "expand");
    this.closest(".hasItem").classList.toggle("expand");
};

// slider
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
});

//show search
const searchButton = document.querySelector(".search");
const closeSearch = document.querySelector(".search-close");
const showClass = document.querySelector(".site");

searchButton.addEventListener("click", () =>{
    showClass.classList.toggle("showsearch");
})

closeSearch.addEventListener("click", ()=>{
    showClass.classList.remove("showsearch");
})

//show dpt menu

const dptButton = document.querySelector(".dptCat .dptMenu");
const dptClass = document.querySelector(".site");

dptButton.addEventListener("click", ()=>{
    dptClass.classList.toggle("showdpt");
})

//product image slider
const productThumb = new Swiper(".smollImage", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});

const productBig = new Swiper(".bigImage", {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: productThumb,
    },
})

// stock products bar with precentage
let stocks = document.querySelectorAll(".products .stock");
for(let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock;
    let available = stocks[x].querySelector(".qty-available").innerHTML;
    let sold = stocks[x].querySelector(".qty-sold").innerHTML;
    let precent = sold*100/stock;

    stocks[x].querySelector(".available").style.width = precent + "%";

}
