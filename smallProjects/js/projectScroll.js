// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// close links
const navToggle = document.querySelector('.navToggle');
const linksContainer = document.querySelector('.linksContainer');
const links = document.querySelector('.links');

navToggle.addEventListener("click", function(){
    //linksContainer.classList.toggle("showContainer");
   const containerHeight = linksContainer.getBoundingClientRect().height;
   const linksHeight = links.getBoundingClientRect().height;
   if(containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
   }else{
    linksContainer.style.height = 0;
   }
});

const navBar = document.getElementById("nav");
const topLink = document.querySelector('.topLink');
//fixed navBar
window.addEventListener('scroll', function () {
const scrollHeight = window.pageYOffset;
const navHeight = navBar.getBoundingClientRect().height

if(scrollHeight > navHeight){
    navBar.classList.add('navFixed');
}else{
    navBar.classList.remove('navFixed');
}

if(scrollHeight > 500){
    topLink.classList.add('showLink')
}else{
    topLink.classList.remove('showLink')
}
})
// select links
const scrollLinks = document.querySelectorAll('.scrollLink');
scrollLinks.forEach(function(link) {
    link.addEventListener('click',function(e){
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    window.scrollTo({
        left: 0,
        top: position,
    }) 
    linksContainer.style.height = 0;
    })
})
