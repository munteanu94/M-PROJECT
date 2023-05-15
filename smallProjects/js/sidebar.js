const sidebarButton = document.querySelector(".sidebarButton");
const closeButton = document.querySelector(".closeBtn");
const sidebar = document.querySelector(".sidebar");

sidebarButton.addEventListener("click", function() {
    console.log(sidebar.classList);
    if(sidebar.classList.contains("show-sideBar")) {
        sidebar.classList.remove("show-sideBar")
    }else{
       sidebar.classList.add("show-sideBar")
    }
  
})
closeButton.addEventListener("click", function() {
    sidebar.classList.remove("show-sideBar");
})
