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

const slideFird = new Swiper(".SwiperFird", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    pagination: {
        el: ".custom-pagination"

    }
})