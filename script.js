//Main function operations

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