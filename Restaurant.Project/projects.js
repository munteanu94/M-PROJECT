const products = new Swiper (".productsSlide", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    watchOverflow: true,
    navigation: {
        nextEl: '.customNext',
        prevEl: '.customPrev',
        lockClass: "no",
    },
    breakpoints: {
        900: {
        slidesPerView: 2,
        }
    },
})