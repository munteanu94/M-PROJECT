const container = document.querySelector(".container");
const inputs = document.querySelectorAll(".forBox input[type = 'password']");
const icons = [...document.querySelectorAll(".formIcon")];
const spans = [...document.querySelectorAll(".forBox .top span")];
const section = document.querySelector("section");

spans.map((span)=>{
    span.addEventListener('click', (e) => {
        const color = e.target.dataset.id;
        container.classList.toggle('active');
        section.classList.toggle('active');
        document.querySelector(':root').style.setProperty('#1a1aff', color);
    })
})

Array.from(inputs).map(input => {
    icons.map((icon) =>{
        icon.innerHTML = `<img src="/salesSait/imagine/eyeicon.png" alt="img">`;

        icon.addEventListener("click", () =>{
            const type = input.getAttribute("type");
            if(type ==='password') {
                input.setAttribute("type", "text");
                icon.innerHTML = `<img src="/salesSait/imagine/iconsHide.png" alt="img">`;
            }else if(type === "text"){
                input.setAttribute("type", "password");
                icon.innerHTML = `<img src="/salesSait/imagine/eyeicon.png" alt="img">`;
            }
        })
    })
})