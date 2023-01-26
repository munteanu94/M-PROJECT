let popup = document.getElementById('mag');

  function openP(){
      popup.classList.remove('open');
  }
  function closeP(){
      popup.classList.add('open');
  }
let inputSearch = document.querySelector(".input-search"),
search = document.querySelector(".span-search"),
closIcons = document.querySelector(".close-icon");
  
search.addEventListener("click", () => inputSearch.classList.add("start"));
closIcons.addEventListener("click", () => inputSearch.classList.remove("start"));
