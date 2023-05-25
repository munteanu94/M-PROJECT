const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector(".nextBtn");

slides.forEach((slide,index) =>{
    slide.style.left= `${index * 100}%`
})
 let counter = 0;
nextBtn.addEventListener('click', () => {
    counter++;
    moveSlider();
});
prevBtn.addEventListener('click', () => {
    counter--;
    moveSlider();
});

function moveSlider() {
    if(counter < slides.length - 1){
        nextBtn.style.display = "block";
    }else{
        nextBtn.style.display = "none";
    };
    if(counter > 0) {
        prevBtn.style.display = "block"
    }else{
        prevBtn.style.display = "none"
    }

    slides.forEach(item =>{
        item.style.transform = `translateX(-${counter * 100}%)`;
    });
}
prevBtn.style.display = "none";

