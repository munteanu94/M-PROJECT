const text = [
    `Motivational quotes can help you reach your potential each day. 
    Sure, they’re just words. But they’re positive words. 
    And if you’re on the verge of giving up or struggling to push yourself 
    to the next level, sometimes that’s just what you need.`,
    `So whether you’re trying to finish a project, start a new side hustle, 
    or hit that big life goal, knowing how to motivate yourself and train your 
    brain for success can help.`,
    `So, let’s dive into what motivation is, how to motivate yourself, 
    and the motivational quotes that’ll get you back on track. 
    These motivational quotes will give you the jumpstart your day needs, 
    so don’t forget to bookmark this page.`,
    `Motivation is your desire to do something with your personal life, 
    at work, in school, in sports, or in any hobbies. The motivation to 
    do something can help you achieve your big goals and dreams, whatever 
    they may be.`,
    `Knowing how to motivate yourself can help you accomplish anything you 
    set your mind to, so let’s get to that next with some quotes to inspire you. `,
    `Motivational quotes for entrepreneurs
    “All our dreams can come true, if we have the courage to pursue them.” —Walt Disney
    “The secret of getting ahead is getting started.” —Mark Twain
    “I’ve missed more than 9,000 shots in my career. 
    I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. 
    I’ve failed over and over and over again in my life, and that is why I succeed.” —Michael Jordan`,
    `As entrepreneurs, leaders, managers, and bosses, we must realize that everything 
    we think actually matters. If we are seeking success, we must think successful, inspiring, 
    and motivating thoughts.`,
    `Read on to find the words of wisdom that will motivate you in building your business, leading your life, 
    creating success, achieving your goals, and overcoming your fears.`,
    `What is it about motivational quotes that make them so endearing? 
    Every driven person eventually figures out that there's a whole lot 
    of feel-good time wasters out there that suck us because they feel 
    like work, and browsing endless lists of motivational phrases are no 
    exception. And yet, there's hidden value in finding a concise expression 
    that perfectly distills our own beliefs.`,
    `Motivational success quotes often feel like our own opinions making a 
    return visit, just augmented by someone with writing talent. And the 
    right quote at the right time can change things—words matter, 
    and motivating phrases can encourage us to get up, overcome tough times, 
    take action, stop procrastinating, escape our comfort zone, 
    motivate a team, invest in personal growth, start a business, 
    and do the hard work that needs doing.`,
    `Even genuinely successful people show some reverence to a favorite 
    inspirational quote or two—to get through hard times, remember an 
    important personal principle, or even get some inspiration to be more 
    productive while working from home. In business and life, quotes are 
    short bits of wit and wisdom that are easy to revisit when we need them.`,

]

const form = document.querySelector(".form");
const input = document.getElementById("input");
const result = document.querySelector(".text");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const value = parseInt(input.value);
    const random = Math.floor(Math.random() * text.length)
    
    if(isNaN(value) || value < 0 || value > 10){
        result.innerHTML = `<p class="result"> ${text[random]}</p>`;
    }else{
        let tempText = text.slice(0,value);
        tempText = tempText.map((item) => {
            return `<p class="result">${item}</p>`
        }).join("");
        result.innerHTML = tempText;
    }
})