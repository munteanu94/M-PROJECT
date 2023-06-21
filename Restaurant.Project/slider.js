const name = new Swiper(".Swiper", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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

  const getPerson = async () => {
    try{
      const results = await fetch("./person.json");
      const data = await results.json();
      const person = data.person;
      return person;
    } catch (error) {
      console.log(error)
    }
    };

const containerSlide = document.getElementById("person");
window.addEventListener("DOMContentLoaded", async function(){
  let person = await getPerson();
  displayPerson(person);
})

const displayPerson = (item) =>{
    let display = item.map(
        (person) => 
        `<div class="swiper-slide">
        <div class="person">
            <div class="detail flex">
                <div class="flex">
                    <img src="${person.url}" alt="slide">
                    <div class="personalDates">
                        <h3>${person.name}</h3>
                        <h5>${person.country}</h5>
                    </div>
                </div>

                <div class="flex">
                    <div class="feedback">5</div>
                    <div class="level">
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                        <i class='bx bxs-star' ></i>
                    </div>
                </div>
           
            </div>
            <span>Having good restaurant reviews is crucial these days. 
                It is not just making our decision to pick one easier, 
                it is also helping the restaurant be more successful.
                You can quickly copy and paste these good restaurant review examples, 
                publish them on Facebook
            </span>
        </div>
    </div>`
    );
    display = display.join("");
    containerSlide.innerHTML = display;
};