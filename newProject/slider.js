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

//slider second
const slideSecond = new Swiper(".SwiperSecond", {
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})
//slider fird
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

// calculator rate 

const formCalc = document.querySelector(".formCalc");
const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("rate");
const payMonths = document.getElementById("months");
const calcBtn = document.querySelector(".calcBtn");
const clearBtn = document.querySelector(".clearBtn");
const paymentInfo = document.querySelectorAll(".paymentInfo div span");

formCalc.addEventListener("submit", (e) => {
    e.preventDefault();
    showPaymentInfo();
})

clearBtn.addEventListener("click", clearResult);

function showPaymentInfo() {
    let monthlyPayment = calcMonthlyPayment(loanAmount.value, interestRate.value,
    payMonths.value);
    paymentInfo[0].innerHTML  = `$${loanAmount.value.toLocaleString()}`;
    paymentInfo[1].innerHTML  = `$${interestRate.value}%`;
    paymentInfo[2].innerHTML  = payMonths.value;
    paymentInfo[3].innerHTML  = `$${parseFloat(monthlyPayment).toLocaleString()}`;

}
let interestRateValue = interestRate.value;
if(interestRateValue == "" || "0") {
    interestRate.value = "10";
    interestRateValue = 10;
}

function calcMonthlyPayment(PV, i, n) {
    i = (i / 100) /12;
    let PMT = (PV * i * Math.pow(1 +i, n)) / (Math.pow(1 + i, n) - 1);
    return PMT.toFixed(2);

}

function clearResult() {
    formCalc.reset();
    paymentInfo.forEach(item => {
        item.innerHTML = "&mdash;";
    });
}
