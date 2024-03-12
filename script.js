let currentInput = 1;

function updateInput(number) {
    const inputField = currentInput === 1 ? "firstNumber" : "secondNumber";
    document.getElementById(inputField).value += number;
}

function switchInputField(field) {
    currentInput = field;
}

function addition() {
    performOperation("+");
}

function substraction() {
    performOperation("-");
}

function division() {
    performOperation("/");
}

function multiplication() {
    performOperation("*");
}

function percentage() {
    const inputFirstNumber = parseFloat(document.getElementById("firstNumber").value);
    const inputSecondNumber = parseFloat(document.getElementById("secondNumber").value);
    
    let result;
    
    if (!isNaN(inputFirstNumber) && !isNaN(inputSecondNumber)) {
        result = (inputFirstNumber * inputSecondNumber) / 100;
    }
    
    document.getElementById("result").textContent = result;
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    currentInput = 1;
}

function performOperation(operator) {
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value);
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value);
    
    let result;
    
    switch (operator) {
        case "+":
            result = inputFirstNumber + inputSecondNumber;
            break;
        case "-":
            result = inputFirstNumber - inputSecondNumber;
            break;
        case "/":
            result = inputFirstNumber / inputSecondNumber;
            break;
        case "*":
            result = inputFirstNumber * inputSecondNumber;
            break;
        default:
            result = "Error";
            break;
    }
    
    document.getElementById("result").textContent = result;
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    currentInput = 1;
}

const database = [
    "gejometry.desh",
    "fortnite.balls",
    "honza.grassblock",
    "petrji.mrkev"
];

function loginuser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginData = username + "." + password;

    for (let i = 0; i < database.length; i++) {
        if (loginData === database[i]) {
            console.log("Login successful.");
            window.location.href = "index.html";
            return;
        }
    }

    console.log("Login Failed.");
    window.location.href = "loginfailed.html";
}

var textElement = document.getElementById('text');
var fontSize = 1;
var initialDelay = 5000;

var interval = 1;
var initialTimeoutId;
var intervalTimeoutId;

initialTimeoutId = setTimeout(startIncreasingFontSize, initialDelay);

function startIncreasingFontSize() {
  intervalTimeoutId = setInterval(increaseFontSize, interval);
}

function increaseFontSize() {
  fontSize++;
  textElement.style.fontSize = fontSize + '1px';
}

