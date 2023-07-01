let country = {
    "USD": "US",
    "RUB": "RU",
    "RON": "RO",
    "UAH": "UA",
    "MDL": "MD",
};

const list = document.querySelectorAll(".list select");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const apiKey = 'b615369daace1889c00bbdfc'
const getButton = document.querySelector(".containerExchange form button");

for(let i = 0; i < list.length; i++){
    for(element in country){
        let selected;
        if(i == 0){
            selected = element == "USD" ? "selected" : "";
        }else if(i == 1){
            selected = element == "MDL" ? "selected" : "";
        }
        let optionTag = `<option value="${element}" ${selected}>${element}</option>`
        list[i].insertAdjacentHTML("beforeend", optionTag);
    }
    list[i].addEventListener("change", e =>{
        loadFlag(e.target);
    })

}

loadFlag = (element) =>{
    for(code in country) {
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagsapi.com/${country[code]}/flat/64.png`;
        }
    }
}

window.addEventListener("load", e =>{
    getExchange();
})

getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchange();
})


const exchangeIcon = document.querySelector(".list .icon");
exchangeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchange();

});

getExchange = () =>{
    const amount = document.querySelector(".amount input");
    exchangetext = document.querySelector(".exchangeRate");
    let amountValue = amount.value;
    if(amountValue == "" || amountValue == "0"){
        amount.value = '1';
        amountValue = 1;
    }

    exchangetext.innerText = "EXCHANGE...";
    let url = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then (result =>{
        let exchange = result.conversion_rates[toCurrency.value];
        let totalExchange = (amountValue * exchange).toFixed(2);
        exchangetext.innerText = `${amountValue} ${fromCurrency.value} = ${totalExchange} ${toCurrency.value}`;
    }).catch(() =>{
        exchangetext.innerText = "Something went wrong";
    })

}

// icon open and close exchange
const btnExchange = document.querySelector(".btnExchange .material-symbols-outlined");
const containerExchange = document.querySelector(".containerExchange")
const closeBtnExchange = document.querySelector(".closeBtnExchange .bx-x")

btnExchange.addEventListener("click", () =>{
    containerExchange.classList.add("showExchange");
})

closeBtnExchange.addEventListener("click", () =>{
    containerExchange.classList.remove("showExchange");
})