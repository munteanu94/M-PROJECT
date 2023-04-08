const slideContent = document.querySelector(".slideContent");
buttonArrow = document.querySelectorAll("button");
firstImg = slideContent.querySelectorAll("img")[0];
let isStartSlide = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth +10;

buttonArrow.forEach(button => {
    button.addEventListener("click", () =>{
        slideContent.scrollLeft += button.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

const startSlide = (e) => {
    isStartSlide = true;
    prevPageX = e.pageX;
    prevScrollLeft = slideContent.scrollLeft;
}

const slideShow = (e) => {
    if(!isStartSlide) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    slideContent.scrollLeft = prevScrollLeft - positionDiff;
}

const stopSlide = () => {
    isStartSlide = false;
}

slideContent.addEventListener("mousedown", startSlide);
slideContent.addEventListener("mousemove", slideShow);
slideContent.addEventListener("mouseup", stopSlide);