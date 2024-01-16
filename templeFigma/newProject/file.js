let menu = document.querySelector('.bxHide');
let addClass = document.querySelector('.MenuSide')

menu.addEventListener('click', () => {
    addClass.classList.toggle('showMenu')
})




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpoints: {
400: {
  slidesPerView: 1,
},    
900: {
  slidesPerView: 2,
},
1300: {
  slidesPerView: 3,
},
},
  });