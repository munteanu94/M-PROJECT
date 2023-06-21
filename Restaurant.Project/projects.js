const swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 70,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    breakpoints: {
        567: {
            slidesPerView: 2,
        },
        996: {
            slidesPerView: 3,
        },
    },
  });
  
  const getProducts = async () => {
      try{
        const results = await fetch("./products.json");
        const data = await results.json();
        const products = data.products;
        return products;
      } catch (error) {
        console.log(error)
      }
  }
 
 
  const productsContainer = document.getElementById("products");
  window.addEventListener("DOMContentLoaded", async function(){
    let products = await getProducts();
    products = products.filter((product) => product.category === "Pizza");
    displayProducts(products);
  
   
  })

  const displayProducts = (items) => {
    let displayP = items.map(
        (product) => `
        <div class="swiper-slide">
      <div class="product">
           <div class="top flex">
               <img src="${product.url}" alt="img">
               <div class="icon flex">
                   <i class='bx bxs-heart'></i>
               </div>
           </div>
           <div class="bottom">
               <h4>${product.title}</h4>
               <div class="flex">
                   <div class="price">$${product.price}</div>
                   <div class="rating">
                       <i class='bx bxs-star' ></i>
                       <i class='bx bxs-star' ></i>
                       <i class='bx bxs-star' ></i>
                       <i class='bx bxs-star' ></i>
                       <i class='bx bxs-star' ></i>
                   </div>
               </div>
           </div>
       </div>
   </div>
   `
    )
    displayP = displayP.join("")
    productsContainer.innerHTML = displayP;
    };

    const filters = [...document.querySelectorAll(".filters div")];
    filters.forEach(filter =>{
        filters[2].classList.add("active");
        filter.addEventListener("click", async (e) =>{
            const id = e.target.getAttribute("data-filter");
            const target = e.target;
            const products = await getProducts();
            filters.forEach((btn) =>{
                btn.classList.remove("active");
            });
            target.classList.add("active");

            let category = products.filter(product =>{
                if(product.category === id){
                    return product;
                }
            })
            displayProducts(category);
            swiper.update();
        })
    })

   
  
