let navBar = document.querySelector(".navbar");
let SearchBox = document.querySelector(".SearchContainer .bx-search");
/* <i class='bx bx-x'></i> */
SearchBox.addEventListener("click", () =>{
    navBar.classList.toggle("showSearch");

if(navBar.classList.contains("showSearch")){
    SearchBox.classList.replace("bx-search", "bx-x");
}else{
    SearchBox.classList.replace("bx-x", "bx-search");
}
})

//sidebar functional
let menuOpen = document.querySelector(".navbar .bx-menu");
let menuClose = document.querySelector(".navLinks .bx-x");
let navLinks = document.querySelector(".navLinks");

menuOpen.addEventListener("click", ()=>{
    navLinks.style.left = "0"
})

menuClose.addEventListener("click", ()=>{
    navLinks.style.left = "-100%"
})

//sidebar submenu
let firstAroow = document.querySelector(".firstAroow");
firstAroow.addEventListener("click", ()=> {
    navLinks.classList.toggle("showFirst");
})
let moreAroow = document.querySelector(".moreAroow");
moreAroow.addEventListener("click", ()=> {
    navLinks.classList.toggle("showSecond");
})
let secondAroow = document.querySelector(".secondAroow");
secondAroow.addEventListener("click", ()=> {
    navLinks.classList.toggle("showFird");
})
// fixed navbar

const header = document.querySelector(".header");
window.addEventListener("scroll", () =>{
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > 100){
        navBar.classList.add("fexed")
        header.style.zIndex = "1000";
    }else{
        navBar.classList.remove("fexed")
    }
})

// Media Discount
const video = document.querySelector(".video");
const buttonControl = document.querySelector(".videoControl");
buttonControl.addEventListener("click", controlVideo)

function controlVideo(){
    if(video.paused){
        buttonControl.innerHTML = "<i class='bx bx-pause'></i>" ;
        video.play();
    }else{
        buttonControl.innerHTML = "<i class='bx bx-play'></i>" ;
        video.pause();
    }
    
}

// Preloader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
    setTimeout(()=> {
        loader.style.display = "none";
    },2000)
})
//Scroll 
const links = [...document.querySelectorAll(".navLink")];
const navList = document.querySelector(".links");
links.map((link) =>{
    link.addEventListener("click", (e) =>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const el = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const fix = navBar.classList.contains("fexed");
        let position = el.offsetTop - navHeight;

        window.scrollTo({
            left: 0,
            top: position,
        })
        navList.classList.remove("open")
    })
})

//Scroll Reveal

const scroll = ScrollReveal({
    distance: '150px',
    duration: 2500,
    reset: true,
});

scroll.reveal(`.content h1, .content .btn`, {
    origin: "top",
    interval: 100,
});
scroll.reveal(`.about .column h1, .about .column p`, {
    origin: "left",
    interval: 250,
});

scroll.reveal(`.about .column .swiper`, {
    origin: "right",
    interval: 250,
});
scroll.reveal(`.service img`,{
    origin: "left",
    interval: 250,
});
scroll.reveal(`.service .column .title h1, .service .column p`, {
    origin: "right",
    interval: 250,
});
scroll.reveal(`.service .column .box`,{
    origin: "bottom",
    interval: 250,
});
scroll.reveal(`.vacation .title h1`,{
    origin: "left",
    interval: 250,
});
scroll.reveal(`.vacation .title p`,{
    origin: "right",
    interval: 250,
});
scroll.reveal(`.vacation .firdContainer .swiper, .vacation .explore a`,{
    origin: "bottom",
    interval: 250,
});
scroll.reveal(`.morePlaces .nextRow .column h1`,{
    origin: "top",
    interval: 250,
});
scroll.reveal(`.morePlaces .nextRow .column p`,{
    origin: "left",
    interval: 250,
});
scroll.reveal(`.morePlaces .nextRow .tours`,{
    origin: "bottom",
    interval: 250,
});
scroll.reveal(`.morePlaces .nextRow .column .btn`,{
    origin: "left",
    interval: 250,
});
scroll.reveal(`.morePlaces .nextRow .column img`,{
    origin: "right",
    interval: 250,
});
scroll.reveal(`.Newsletter .nextRow .form`,{
    origin: "right",
    interval: 250,
});
scroll.reveal(`.Newsletter .nextRow .column`,{
    origin: "left",
    interval: 250,
});
scroll.reveal(`.contact .title h1`,{
    origin: "top",
    interval: 250,
});
scroll.reveal(`.contact .title p`,{
    origin: "left",
    interval: 250,
});
scroll.reveal(`.contact .location`,{
    origin: "right",
    interval: 250,
});

//Popap login

const loginPopap = document.querySelector(".loginPopap");
const close = document.querySelector(".bx-x-circle");
const loginBtn = document.querySelector("#login");

window.addEventListener("load", () =>{
    showLoginPopap();
})

showLoginPopap = () =>{
     const timeLimit = 5;
     let i = 0;
     const timer = setInterval(()=>{
        i++;
        if( i === timeLimit){
            clearInterval(timer);
            loginPopap.classList.add("show");
        }
    },1000)
}

close.addEventListener("click", () =>{
    loginPopap.classList.remove("show");
})
loginBtn.addEventListener("click", () =>{
    loginPopap.classList.add("show");
})


//Chatbot
const chatInput = document.querySelector(".chatInput textarea");
const sendMessage = document.querySelector('.chatInput span');
const chatBox = document.querySelector('.chatBox');

const chatbotBtn = document.querySelector(".chatbotBtn");

chatbotBtn.addEventListener("click", () =>{
    document.body.classList.toggle("showChatbot");
      
})

let userMessage;
let API_KEY = "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";
const inputInitHeight = chatInput.scrollHeight;



const createChatLi = (message, className) =>{
    //create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateAnswer = (incomingChatLi) =>{
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{role: "user", content: userMessage}]
              
        })
    }
        //Send POST request to API ,get response
    fetch(API_URL, requestOptions).then(res => res.json()).then(data =>{
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error) =>{
        messageElement.classList.add("error")
        messageElement.textContent = "Please try again";
    }).finally(() => chatBox.scrollTo(0, chatBox.scrollHeight))
}


const handleChat = () =>{
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`
    
    //append the user's message th the chatbox
    chatBox.appendChild(createChatLi(userMessage, "outgoing"));
    chatBox.scrollTo(0, chatBox.scrollHeight);

    setTimeout(() =>{

        const incomingChatLi = createChatLi("Just a moment...", "incoming")
        chatBox.appendChild(incomingChatLi);
        generateAnswer(incomingChatLi);
        chatBox.scrollTo(0, chatBox.scrollHeight);
    }, 600);
}

chatInput.addEventListener("input", () =>{
    chatInput.style.height = `${inputInitHeight}px`
    chatInput.style.height = `${chatInput.scrollHeight}px`
});

chatInput.addEventListener("keydown", (e) =>{
   if(e.key === "Enter" && !e.shifhKey && window.innerWidth > 800){
    e.preventDefault();
    handleChat();
   }
});
sendMessage.addEventListener("click", handleChat)


// Get dark the project: time of night by pressing the button
const lightDarckbtn = document.querySelector(".lightDarckBtn");
lightDarckbtn.addEventListener("click", () =>{
    document.body.classList.toggle("showDark");
      
})

