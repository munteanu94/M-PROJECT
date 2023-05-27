const navButton = document.querySelector(".navButton");
const navContainer= document.querySelector(".navContainer");

navButton.addEventListener("click", ()=> {
    if(navContainer.classList.contains("showNavContainer")){
        navContainer.classList.remove("showNavContainer")
    }else {
        navContainer.classList.add("showNavContainer")
    }
})

const navFixed = document.querySelector(".header");
window.addEventListener("scroll", function (){
    const scrollHeight = window.pageYOffset;
    const navHeight = navFixed.getBoundingClientRect().height
    
    if(scrollHeight > navHeight){
        navFixed.classList.add("headerFixted")
    }else{
        navFixed.classList.remove("headerFixted")
    }
})

const products = [
    {
        id: '1',
        title: 'corrucior',
        company: 'tools',
        image: './imagine/tools.jpeg',
        price: 15.99,
      },
      {
        id: '2',
        title: 'fork',
        company: 'tools',
        image: './imagine/tools1.jpeg',
        price: 5.99,
      },
      {
        id: '3',
        title: 'Motoc',
        company: 'tools',
        image: './imagine/tools2.jpeg',
        price: 120.99,
      },
      {
        id: '4',
        title: 'watering can',
        company: 'tools',
        image: './imagine/tools4.webp',
        price: 10,
      },
      {
        id: '5',
        title: 'watering can',
        company: 'tools',
        image: './imagine/tools5.webp',
        price: 14.99,
      },
      {
        id: '6',
        title: 'chairs',
        company: 'terrace',
        image: './imagine/gradina1.webp',
        price: 69.99,
      },
      {
        id: '7',
        title: 'Table with chairs',
        company: 'terrace',
        image: './imagine/gradina2.webp',
        price: 179.99,
      },
      {
        id: '8',
        title: 'Table with chairs',
        company: 'terrace',
        image: './imagine/gradina3.webp',
        price: 99.99,
      },
      {
        id: '9',
        title: 'swing',
        company: 'terrace',
        image: './imagine/leagan1.jpeg',
        price: 250,
      },
      {
        id: '10',
        title: 'swing',
        company: 'terrace',
        image: './imagine/leagan2.jpeg',
        price: 299.99,
      },
      {
        id: '11',
        title: 'bulbs',
        company: 'lights',
        image: './imagine/lights1.jpeg',
        price: 50,
      },
      {
        id: '12',
        title: 'bulbs',
        company: 'lights',
        image: './imagine/lights2.jpeg',
        price: 29.99,
      },
      {
        id: '13',
        title: 'bulbs',
        company: 'lights',
        image: './imagine/lights3.jpeg',
        price: 14.99,
      },
      {
        id: '14',
        title: 'bulbs',
        company: 'lights',
        image: './imagine/lights4.jpeg',
        price: 9.99,
      },
      {
        id: '15',
        title: 'terrace',
        company: 'terrace',
        image: './imagine/fundalpro.jpeg',
        price: 399.99,
      },
]

const containerProducts = document.querySelector(".containerProducts");
const btnFilter = document.querySelector(".btnFilter");

window.addEventListener("DOMContentLoaded",() =>{
    displayProductsKind(products)
})

function displayProductsKind (productskind){
    let displayProducts = productskind.map( (item) => {
        return `<article class="productsAll">
        <img src=${item.image} class="imgProducts img" alt=${item.title}>
        <footer>
            <h5 class="nameProducts">${item.title}</h5>
            <span class="priceProducts">${item.price}</span>
        </footer>
    </article>`
    })
    displayProducts = displayProducts.join('');
    containerProducts.innerHTML = displayProducts;

}
   