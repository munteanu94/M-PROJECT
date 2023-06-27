let products = {
    data:[
    {
        name: "bali",
        category: "Bali",
        price: "1000$",
        image: "./images/dubai1.jpeg",
    },
    {
        name: "dubai",
        category: "Dubai",
        price: "1500$",
        image: "./images/dubai2.jpeg",
    },
    {
        name: "maldives",
        category: "Maldives",
        price: "4000$",
        image: "./images/maldive.jpeg",
    },
    {
        name: "spania",
        category: "Spania",
        price: "1700$",
        image: "./images/poz1.jpeg",
    },
    {
        name: "tenerifes",
        category: "Tenerifes",
        price: "3000$",
        image: "./images/poz5.jpeg",
    },
    {
        name: "bali",
        category: "Bali",
        price: "1000$",
        image: "./images/poz6.jpeg",
    },
    {
        name: "bali",
        category: "Bali",
        price: "1000$",
        image: "./images/travel3.jpeg",
    },
    {
        name: "bali",
        category: "Bali",
        price: "1000$",
        image: "./images/travel2.jpeg",
    },
],
}
for(let i of products.data) {
    let card = document.createElement("div")
    card.classList.add("card", i.category, "hidden")
    
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("imageContainer");
   
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("containerBox");

    // product name
    let name = document.createElement("h5");
    name.classList.add("productName");
    name.innerText = i.name.toUpperCase();
    container.appendChild(name);
    
    // price
    let price = document.createElement("h6");
    price.innerHTML = i.price;
    container.appendChild(price);
    
    card.appendChild(container)
    document.getElementById("products").appendChild(card);
} 

filterProduct = (value) =>{
    let buttons = document.querySelectorAll(".buttonValue");
    buttons.forEach( (btn) =>{
        //check if value equals innerText
        if(value.toUpperCase() === btn.innerText.toUpperCase()){
            btn.classList.add("active");
        }else{
            btn.classList.remove("active");
        }
    })

//select all cards
let elements = document.querySelectorAll(".card");
elements.forEach( (element) =>{
    if (value == "All") {
        element.classList.remove("hidden")
    }else {
        if(element.classList.contains(value)){
            element.classList.remove("hidden")
        }else {
            element.classList.add("hidden")
        }
    }
})
}
// search button click
document.getElementById("searchBtn").addEventListener("click", ()=>{
    let searchInput = document.getElementById("searchInput").value;
    let elements = document.querySelectorAll(".productName");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) =>{
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hidden")
        }else {
            cards[index].classList.add("hidden");
        }
    })
});

// display all products 
window.onload = () =>{
    filterProduct('All');
}