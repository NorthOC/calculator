//Main function operations
let currentOperator = null;
let displayNum1 = 0;
let displayNum2 = 0;

function add(num1,num2) {
    return num1 + num2;
    
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num1 / num2;
}

//Operation function

function operate(num1, funcop, num2) {
    if(funcop == add){
        console.log(add(num1,num2));
    }else if(funcop == subtract){
        console.log(subtract(num1, num2))
    }else if(funcop == multiply){
        console.log(multiply(num1, num2))
    }else if(funcop == divide){
        console.log(divide(num1, num2))
    }
}
function clear() {
    display.textContent = "0";
    displayNum1 = 0;
    displayNum2 = 0;
    currentOperator = null;  
}
function check(num){
    if (display.textContent === "0"){
        display.textContent = `${num}`;
    } else{
        display.textContent += `${num}`;
    }
}
function dot() {
    display.textContent += "."
    }
//selecting buttons and display
const display = document.getElementById("display");
document.querySelector(".zero").addEventListener("click", function(){check(0)})
document.querySelector(".one").addEventListener("click", function(){check(1)})
document.querySelector(".two").addEventListener("click", function(){check(2)})
document.querySelector(".three").addEventListener("click", function(){check(3)})
document.querySelector(".four").addEventListener("click", function(){check(4)})
document.querySelector(".five").addEventListener("click", function(){check(5)})
document.querySelector(".six").addEventListener("click", function(){check(6)})
document.querySelector(".seven").addEventListener("click", function(){check(7)})
document.querySelector(".eight").addEventListener("click", function(){check(8)})
document.querySelector(".nine").addEventListener("click", function(){check(9)})
document.querySelector(".plus").addEventListener("click", add)
document.querySelector(".minus").addEventListener("click", subtract)
document.querySelector(".divide").addEventListener("click", divide)
document.querySelector(".multiply").addEventListener("click", multiply)
document.querySelector(".equals").addEventListener("click", operate)
document.querySelector(".clear").addEventListener("click", clear)
document.querySelector(".dot").addEventListener("click", dot)