const products = new Swiper (".productsSlide", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    watchOverflow: true,
    navigation: {
        nextEl: '.customNext',
        prevEl: '.customPrev',
        lockClass: "no",
    },
    breakpoints: {
        900: {
        slidesPerView: 2,
        }
    },
})
const productsContainer = document.getElementById("productsContainer");


const getProducts = async () => {
    try {
      const results = await fetch("./products.json");
      const data = await results.json();
      const products = data.products;
      return products;
    } catch (err) {
      console.log(err);
    }
  };
console.log(products.json);

  window.addEventListener("DOMContentLoaded", async function () {
    let products = await getProducts();
    products = products.filter((product) => product.category === "Burger");
    displayProducts(products);
  });
function displayProducts(items) {
    let display = items.map((product) =>
    `<div class="slide">
    <div class="product">
        <img src="/Restaurant.Project/imagine/burgher.jpeg">
        <div class="overlay">
            <h4>Burger</h4>
            <div class="flex">
                <span class="price">$5</span>
                <span class="rating"><i class="bx bxs-star">5</i></span>
            </div>
        </div>
    </div>
</div>`
    )
    display = display.join("");
    if (productsContainer) {
        productsContainer.innerHTML = display;
    }

}