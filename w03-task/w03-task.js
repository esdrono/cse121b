/* FUNCTIONS */

// Function Declaration - Addition Feature
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let num1 = parseFloat(document.getElementById("add1").value);
    let num2 = parseFloat(document.getElementById("add2").value);
    document.getElementById("sum").value = add(num1, num2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

// Function Expression - Subtraction Feature
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let num1 = parseFloat(document.getElementById("subtract1").value);
    let num2 = parseFloat(document.getElementById("subtract2").value);
    document.getElementById("difference").value = subtract(num1, num2);
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

// Arrow Function - Multiplication Feature
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let num1 = parseFloat(document.getElementById("factor1").value);
    let num2 = parseFloat(document.getElementById("factor2").value);
    document.getElementById("product").value = multiply(num1, num2);
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

// Division Feature
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let num1 = parseFloat(document.getElementById("dividend").value);
    let num2 = parseFloat(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(num1, num2);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

function calculateTotalDue() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const isClubMember = document.getElementById("member").checked;
    let total;

    if (isClubMember) {
        total = subtotal * 0.9; // 10% discount
    } else {
        total = subtotal;
    }

    document.getElementById("total").innerText = "$" + total.toFixed(2);
}

document.getElementById("getTotal").addEventListener("click", calculateTotalDue);


// Display the current year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;

// Work with an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = numbers.join(', ');

// Filter Odd Numbers
const oddNumbers = numbers.filter(number => number % 2 !== 0);
document.getElementById("odds").innerHTML = oddNumbers.join(', ');

// Filter Even Numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);
document.getElementById("evens").innerHTML = evenNumbers.join(', ');

// Sum of Source Array
const sumOfArray = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
document.getElementById("sumOfArray").innerHTML = sumOfArray;

// Source Array Times Two
const multipliedArray = numbers.map(number => number * 2);
document.getElementById("multiplied").innerHTML = multipliedArray.join(', ');

// Sum of Source Array Times Two
const sumOfMultiplied = multipliedArray.reduce((acc, currentValue) => acc + currentValue, 0);
document.getElementById("sumOfMultiplied").innerHTML = sumOfMultiplied;

