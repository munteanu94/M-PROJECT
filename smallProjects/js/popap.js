const alert = document.querySelector(".alert");
const form = document.querySelector(".form");
const popap = document.getElementById('popap');
const submitBtn = document.querySelector('.submit');
const container = document.querySelector(".container");
const list = document.querySelector('.popapList');
const clearBtn = document.querySelector('.clearBtn');

let editElement;
let editFlag = false;
let editID = "";

//submit form
form.addEventListener("submit",addItem);
//load items
window.addEventListener('DOMContentLoaded', setupItems);
function addItem(e) {
    e.preventDefault();
    const value = popap.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        createListItem(id, value); 
        //display allert
        displayAlert("item added to the list", "success");
        //show container
        container.classList.add("showContainer");
        //add to local storage
        addToLocalStorage(id,value);
        //set back to default
        setBackToDefault();
    }
    else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert("value is changed", "success");
        //edit local storage
        editLocalStorage(editID,value);
        setBackToDefault();
    }else{
        displayAlert("please enter value", "danger")
    }

}
//display alert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`${action}`);
//remove alert
setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`${action}`);
},2000);
}
function setBackToDefault() {
    popap.value ="";
    editFlag = false;
    editID = '';
    submitBtn.textContent = "submit";

}
//clear button
clearBtn.addEventListener("click", (clearItems)=>{
    const items = document.querySelectorAll(".popapItem");
    if(items.length > 0){
       items.forEach((item) =>{
        list.removeChild(item);
       })
    }
    container.classList.remove("showContainer");
    displayAlert("empty list", 'danger');
    setBackToDefault();
    localStorage.removeItem("list");
});
//function delete item
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0) {
        container.classList.remove("showContainer");
    }
    displayAlert("item removed", "danger");
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id)
}
//function adit
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    popap.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit"
} 
function addToLocalStorage(id,value) {
    const popap = { id, value };
    let items = getLocalStorage();
    console.log(items)
    items.push(popap);
    localStorage.setItem('list', JSON.stringify(items));

}
function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item){
        if(item.id !== id){
            return item;
        }
    });
    localStorage.setItem('list', JSON.stringify(items));
}
function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map((item) =>{
        if(item.id === id){
            item.value = value;
        }
        return item;
    })
    localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage(){
   return localStorage.getItem("list")?JSON.parse
    (localStorage.getItem('list')):[];
}

function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0 ){
    items.forEach(function(item){
        createListItem(item.id, item.value);
    })
    container.classList.add('showContainer')
    }
}
function createListItem(id, value){
    const element = document.createElement('article');
        // add class
        element.classList.add("popapItem");
        // add id 
        const attribute = document.createAttribute("data-id");
        attribute.value = id;
        element.setAttributeNode(attribute);

        element.innerHTML = `<p class="title">${value}</p>
        <div class="containerBtn">
            <button type="button" class="editBtn btns"><i class="fas fa-edit"></i></button>
            <button type="button" class="deleteBtn btns"><i class="fas fa-trash"></i></button>
        </div>`;

        const deleteBtn = element.querySelector(".deleteBtn");
        const editBtn = element.querySelector(".editBtn");
        deleteBtn.addEventListener("click",deleteItem);
        editBtn.addEventListener("click",editItem);

        list.appendChild(element);
}