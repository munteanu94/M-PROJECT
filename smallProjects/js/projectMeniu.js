const menu = [
    {
        id: 1,
        title: "Plum Cake",
        category: "breakfast",
        price: 15,
        img: "./img/menu2.jpeg",
        desc: `The yummy nuts infused with chocolatey fun,
         Ferrero Rocher cake is a delicious dessert to savour at a birthday party or any other occasion`,
    },
    {
        id: 2,
        title: "Ferrero Rocher Cake",
        category: "lunch",
        price: 16,
        img: "./img/meniu3.jpeg",
        desc: `KitKat is one of the most loved chocolate 
        flavours in India that has come a long way. `,
    },
    {
        id: 3,
        title: "Kitkat Cake",
        category: "breakfast",
        price: 13.99,
        img: "./img/meniu4.jpeg",
        desc: `If you are a mango lover, then you must try a toothsome 
        mango cake that is absolutely finger-licking tasty.`,
    },
    {
        id: 4,
        title: "Mango Cake",
        category: "lunch",
        price: 15.99,
        img: "./img/menu5.jpeg",
        desc: `If you want to relive those beautiful memories,
         then get yourself a delicious chocolate cake.`,
    },
    {
        id: 5,
        title: "Chocolate Cake",
        category: "shakes",
        price: 20.99,
        img: "./img/menu6.jpeg",
        desc: `Brownies are one of the most famous desserts 
        worldwide and these cakes will definitely leave you wanting more. `,
    },
    {
        id: 6,
        title: "Brownie Cake",
        category: "breakfast",
        price: 11,
        img: "./img/menu7.jpeg",
        desc: `Pineapple gives the most tropical vibes and the best part about these fruits
         – they can be used to make so many dishes. `,
    },
    {
        id: 7,
        title: "Pineapple Cake",
        category: "shakes",
        price: 17,
        img: "./img/menu8.jpeg",
        desc: `We have pineapple in pizzas, jellies, chocolates, sweets, and most famous, cakes `,
    },
    {
        id: 8,
        title: "Rainbow Cake",
        category: "lunch",
        price: 19.99,
        img: "./img/menu9.jpeg",
        desc: `Rainbow reminds us of fairy tales and wonderlands. `,
    },
    {
        id: 9,
        title: "Chocolate Truffle Cake",
        category: "breakfast",
        price: 18,
        img: "./img/menu10.jpeg",
        desc: `If you want your loved ones licking their fingers, not wanting to waste an inch of the cake,
         then hurry up and grab some chocolate truffle cake.`,
    },
    {
        id: 10,
        title: "Red Velvet Cake",
        category: "shakes",
        price: 12.99,
        img: "./img/meniu1.webp",
        desc: `Red velvet cakes are the most beautiful cakes that catch your eye very effortlessly.`,
    },
]
const sectionCenter = document.querySelector(".sectionCenter");
const filterBtn = document.querySelectorAll(".filterBtn");

window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
});
//filter
filterBtn.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
        if (menuItem.category === category) {
            return menuItem
        }
        })
        if(category === 'all'){
            displayMenuItems(menu)
        }else{
            displayMenuItems(menuCategory)
        }
    })
})
function displayMenuItems (menuItems){
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menuItem">
        <img class="photo" src=${item.img} alt=${item.title}>
        <div class="itemInfo">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}$</h4>
            </header>
            <p class="itemText">
                ${item.desc}
            </p>
        </div>
        </article>`
            })
            displayMenu = displayMenu.join('');
            sectionCenter.innerHTML = displayMenu;
}
