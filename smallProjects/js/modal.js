const openModal = document.querySelector(".modalBtn");
const closeModal = document.querySelector(".closeBtn");
const overlyModal = document.querySelector(".modalOverly");

openModal.addEventListener("click", function() {
  overlyModal.classList.add("showModal");
})
closeModal.addEventListener("click", function() {
    overlyModal.classList.remove("showModal");
})