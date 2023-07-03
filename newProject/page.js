let products = {
    data:[
    {
        name: "dubai",
        category: "Dubai",
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
        name: "maldives",
        category: "Maldives",
        price: "5000$",
        image: "./images/poz1.jpeg",
    },
    {
        name: "bali",
        category: "Bali",
        price: "3000$",
        image: "./images/bali8.jpeg",
    },
    {
        name: "bali",
        category: "Bali",
        price: "1000$",
        image: "./images/bali.jpeg",
    },
    {
        name: "tenerifes",
        category: "Tenerifes",
        price: "1000$",
        image: "./images/travel3.jpeg",
    },
    {
        name: "bali",
        category: "Bali",
        price: "2500$",
        image: "./images/travel2.jpeg",
    },
    {
        name: "bali",
        category: "Bali",
        price: "3499$",
        image: "./images/balih1.jpeg",
    },
    {
        name: "bali",
        category: "Bali",
        price: "3799$",
        image: "./images/balih2.jpeg",
    },
    {
        name: "bali",
        category: "Bali",
        price: "3999$",
        image: "./images/balih3.jpeg",
    },
    {
        name: "bali",
        category: "Bali",
        price: "4499$",
        image: "./images/balih4.jpeg",
    },
    {
        name: "dubai",
        category: "Dubai",
        price: "5500$",
        image: "./images/dubaih1.jpeg",
    },
    {
        name: "dubai",
        category: "Dubai",
        price: "4900$",
        image: "./images/dubaih4.jpeg",
    },
    {
        name: "dubai",
        category: "Dubai",
        price: "5900$",
        image: "./images/dubaih3.jpeg",
    },
    {
        name: "dubai",
        category: "Dubai",
        price: "6900$",
        image: "./images/dubaih22.jpeg",
    },
    {
        name: "maldives",
        category: "Maldives",
        price: "3000$",
        image: "./images/maldivesh1.jpeg",
    },
    {
        name: "maldives",
        category: "Maldives",
        price: "4200$",
        image: "./images/maldivesh2.jpeg",
    },
    {
        name: "maldives",
        category: "Maldives",
        price: "4800$",
        image: "./images/maldivesh3.jpeg",
    },
    {
        name: "maldives",
        category: "Maldives",
        price: "5800$",
        image: "./images/maldivesh4.jpeg",
    },
    {
        name: "tenerifes",
        category: "Tenerifes",
        price: "3399$",
        image: "./images/tenerifah3.jpeg",
    },
    {
        name: "tenerifes",
        category: "Tenerifes",
        price: "4399$",
        image: "./images/tenerifeh1.jpeg",
    },
    {
        name: "tenerifes",
        category: "Tenerifes",
        price: "6399$",
        image: "./images/tenerifeh4.jpeg",
    },
    {
        name: "tenerifes",
        category: "Tenerifes",
        price: "5999$",
        image: "./images/tenerigeh2.jpeg",
    },
  
],
}
for(let i of products.data) {
    let card = document.createElement("div")
    card.classList.add("card", i.category, "hidden", "none")
    
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

