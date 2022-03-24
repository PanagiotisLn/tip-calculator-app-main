let bill = document.getElementById("bill");
let people = document.getElementById("people");
let numBill;
let numPeople;
let tipSelection = 5 / 100;
let button = document.getElementsByClassName("btn");
let reset = document.getElementById("reset");
let tipAmountPer = document.getElementById("tip-amount-person");
let totAmountPer = document.getElementById("total-amount-person");
let custom = document.getElementById("custom");



let tip = document.getElementById("tip-amount-person");
let total = document.getElementById("total-amount-person");

function calculate(bill,people,Percentage){
    
    let tipPerPerson = ((bill*Percentage)/people).toFixed(2);
    let totalAmountPerPerson = ((bill + Percentage*bill)/people).toFixed(2);
    tip.innerHTML = `$ ${tipPerPerson}`;
    total.innerHTML = `$ ${totalAmountPerPerson}`;
    
}

for (let i = 0; i < button.length; i++){
   
    
    button[i].addEventListener('click', (event) => {

        for (let j = 0; j < button.length; j++){
            if (button[j].classList.contains("btn-clicked")){
                button[j].classList.toggle("btn-clicked")
            }
        }
        
        console.log(event.target.classList);
        event.target.classList.toggle("btn-clicked")
        
        tipSelection = event.target.value / 100;
        if (!isNaN(numBill) && !isNaN(numPeople) && numPeople !== 0){
        calculate(numBill,numPeople,tipSelection)
        }
        
        
    })
}


bill.addEventListener('keyup',() => {
    bill = document.getElementById("bill");
    numBill = parseFloat(bill.value);
    people = document.getElementById("people");
    numPeople = parseFloat(people.value);
    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    reset.style.color = "hsl(183, 100%, 15%)";
    if (!isNaN(numBill) && !isNaN(numPeople) && numPeople !== 0){
        calculate(numBill,numPeople,tipSelection)
    }
    if (bill.value === ""){
        tip.innerHTML = "$ " + 0.00.toFixed(2);
        total.innerHTML =  "$ " + 0.00.toFixed(2);
    }
})

people.addEventListener('keyup',() => {
    bill = document.getElementById("bill");
    numBill = parseFloat(bill.value);
    people = document.getElementById("people");
    numPeople = parseFloat(people.value);
    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    reset.style.color = "hsl(183, 100%, 15%)";
    if (!isNaN(numBill) && !isNaN(numPeople) && numPeople !== 0){
        calculate(numBill,numPeople,tipSelection)
    }
    if (people.value === ""){
        tip.innerHTML =  "$ " + 0.00.toFixed(2);
        total.innerHTML =  "$ " + 0.00.toFixed(2);
    }
})

reset.addEventListener('click', () => {
    bill.value = 0;
    people.value = 0;
    numBill = 0;
    numPeople = 0;
    tipAmountPer.innerHTML = "$ " + 0.00.toFixed(2);
    totAmountPer.innerHTML = "$ " + 0.00.toFixed(2);
    button[0].classList.toggle("btn-clicked");
    reset.style.backgroundColor = "hsl(186, 14%, 43%)";
    reset.style.color = "hsl(183, 100%, 15%)";
    tipSelection = button[0].value /100;
    custom.value = "Custom"
})

custom.addEventListener('click', () => {
    if (custom.value == "Custom"){
        custom.value = "";
    }
})
custom.addEventListener('keyup', (event) => {
    custom = document.getElementById("custom");
    let numCustom = parseFloat(custom.value) / 100;
    if (!isNaN(numBill) && !isNaN(numPeople) && numPeople !== 0){
        calculate(numBill,numPeople,numCustom)
    } 
    
})

