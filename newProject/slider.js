const slideFirst = new Swiper(".SwiperFirst", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    }
})


const slideSecond = new Swiper(".SwiperSecond", {
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})