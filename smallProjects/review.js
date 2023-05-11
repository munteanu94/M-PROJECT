const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "Web Developer",
        img: "https://www.shutterstock.com/image-photo/successful-businesswoman-standing-creative-office-260nw-1761099719.jpg",
        text: "Lean in, speak out, have a voice in your organization, and never use the word, ‘sorry’.",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "Web Desingner",
        img: "https://media.istockphoto.com/id/831902150/photo/ive-solidified-my-name-in-the-business-world.jpg?s=612x612&w=0&k=20&c=GCkoeN4GXE9W3EgNmwnInZpvGEepUSPd7N8NMKGBGFs=",
        text: "The most successful entrepreneurs I know are optimistic. It’s part of the job description.",
    },
    {
        id: 3,
        name: "susan sm",
        job: "PHP Developer",
        img: "https://media.istockphoto.com/id/1164863397/photo/attractive-businesswoman-using-a-digital-tablet-while-standing-in-front-of-windows.jpg?s=612x612&w=0&k=20&c=Ni0nPUsWCwHoxft50FRsAZTj7pBkATi5CzfvLkG3otE=",
        text: "You will be defined not just by what you achieve, but by how you survive.",
    },
    {
        id: 4,
        name: "san smith",
        job: "QS Developer",
        img: "https://agcdn-1d97e.kxcdn.com/wp-content/uploads/2016/04/alphagamma-20-largest-communities-for-women-entrepreneurs-startups-entrepreneurship-1021x580.jpg",
        text: "Stay true to yourself and your vision. Don’t let any one person’s opinion move you; listen, but be confident.",
    },
    {
        id: 5,
        name: "an smith",
        job: "Selfors Developer",
        img: "https://campustechnology.com/articles/2011/11/29/~/media/EDU/CampusTechnology/Images/2011/11/20111201WomenIT_400.ashx",
        text: "Trying to do it all and expecting it all can be done exactly right is a recipe for disappointment. Perfection is the enemy.",
    },
]
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
let currentItem = 0;
window.addEventListener("DOMContentLoaded", function(){
showPerson()
})
function showPerson () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});
prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});
randomBtn.addEventListener("click", function(){
   currentItem = Math.floor(Math.random() * reviews.length)
    console.log(currentItem);
    showPerson();
})
