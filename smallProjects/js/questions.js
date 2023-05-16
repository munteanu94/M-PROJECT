const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    const btn = question.querySelector(".btnContainer");

   btn.addEventListener("click", function(){
    question.classList.toggle("showText")
    }

   )
})
/*
const btns = document.querySelectorAll(".btnContainer");
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle("showText")
    })
})*/


