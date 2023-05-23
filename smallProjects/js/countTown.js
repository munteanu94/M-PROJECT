const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday', 
    'Saturday'
]

const giveaway = document.querySelector('.way');
const daysOffert =document.querySelector('.daysOffert');
const items = document.querySelectorAll('.daysOffert-format h4');

let futureDate = new Date();
let futureYear = futureDate.getFullYear();
let futureMonth = futureDate.getMonth();
let futureDay = futureDate.getDate();
// date with 15 days before
const upDate = new Date(futureYear, futureMonth, futureDay + 15, 11, 30, 0)

const year = upDate.getFullYear();
const hours = upDate.getHours();
const minutes = upDate.getMinutes();

let month = upDate.getMonth();
month = months[month];

const date = upDate.getDate();

const week = weekDays[upDate.getDay()];
giveaway.textContent = `giveaway ends on ${week} ${date} ${month} ${year} ${hours}:${minutes}am`
// future time
const  nextTime = upDate.getTime();

function getRemaining(){
    const tuday = new Date().getTime();
    const time = nextTime - tuday;
    
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinutes = 60 * 1000;
    // calcucalte all values
    let days = time / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((time % oneDay) / oneHour);
    let minutes = Math.floor(( time % oneHour) /oneMinutes);
    let seconds = Math.floor(( time % oneMinutes) /1000);
   
    //set value array;
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if(item < 10) {
            return item = `0${item}`
        } return item
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index])
    })
    if(time < 0){
        clearInterval(countdown)
        daysOffert.innerHTML = `<h4 class="expired"> sorry, this giveway has expired</h4>`
    }
}

let countdown = setInterval(getRemaining, 1000);
getRemaining();