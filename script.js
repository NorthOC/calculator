//Variables used in the calculator
let currentOperator = undefined;
let prevOperator = undefined;
let displayNum1 = 0;
let num1;
let num2;
let displayNum2 = 0;
let equality = false;

//a function which checks for an operator and applies the correct operator

function prevOp(a,b){

    if(prevOperator == "+"){
        return a + b
    } else if (prevOperator == "-"){
        return a - b
    } else if (prevOperator == "*"){
        if (a == 0 || b == 0){
            return 0;
        }else{
            return a * b
        }
    } else if (prevOperator == "/"){
        if(b == 0){
            alert("cannot divide by zero");
            clear();
            return display.textContent = 0;
        }
        return a / b;
    }
}
//from 0 to 100, this is what happens after clicking an operator

function operation(sign){
    testLength();
    if(prevOperator === undefined){
        displayNum1 = parseFloat(display.textContent);
        num1 = displayNum1;
        prevOperator = sign;

    }else if(prevOperator == "="){
        prevOperator = undefined;
        display.textContent = display.textContent;

    }else{
        displayNum2 = parseFloat(display.textContent);
        num2 = displayNum2;
        currentOperator = sign;
        if(currentOperator == "="){
            num1 = prevOp(num1, num2);
            display.textContent = num1;
            prevOperator = undefined;
            currentOperator = undefined;
            equality = true;
        } else{
            num1 = prevOp(num1, num2);
            prevOperator = currentOperator;
            display.textContent = num1;
        }
    }
    
}

function testLength(){
    if (display.textContent.length > 16){
        display.textContent = display.textContent.substring(0,16)
    }
}

//shorted functions
function add() {
    operation("+")
}

function subtract() {
    operation("-")
}

function multiply() {
    operation("*")
}

function divide() {
    operation("/")
}
function equals(){
    operation("=")
}
//clears the contents as well as display

function clear() {
    display.textContent = "0";
    displayNum1 = 0;
    displayNum2 = 0;
    currentOperator = undefined;
    prevOperator = undefined;
    equality = false;
    num1 = 0;
    num2 = 0;  
}
//in case a user wants to write zeros randomly

function check(num){
    testLength()
    if (display.textContent === "0"){
        display.textContent = `${num}`;
    } else if(displayNum1 != 0){
        display.textContent = `${num}`;
        displayNum1 = 0;
    } else if(displayNum2 != 0 && equality == false){
        display.textContent = `${num}`;
        displayNum2 = 0;
    } else{
        display.textContent += `${num}`;
    }
}

//puts a dot for decimals 

function dot() {
    if(display.textContent.indexOf(".") == -1){
        display.textContent += "."
    } else{
        display.textContent = display.textContent;
    }
    }

//selecting buttons and display, adding on click events

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
document.querySelector(".equals").addEventListener("click", equals)
document.querySelector(".clear").addEventListener("click", clear)
document.querySelector(".dot").addEventListener("click", dot)