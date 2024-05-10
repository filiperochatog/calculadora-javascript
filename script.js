// script.js
let currentInput = '';
let result = 0;
let operator = '';

function pressKey(key) {
    let display = document.getElementById('display');

    if (key === 'C') {
        currentInput = '';
        result = 0;
        operator = '';
        display.value = '';
    } else if (key === '=') {
        if (operator) {
            currentInput = eval(result + operator + currentInput).toString();
            display.value = currentInput;
            result = parseFloat(currentInput);
            operator = '';
        }
    } else if ('+-*/'.includes(key)) {
        if (operator) {
            result = eval(result + operator + currentInput);
            display.value = result;
        } else {
            result = parseFloat(currentInput);
        }
        operator = key;
        currentInput = '';
    } else {
        currentInput += key;
        display.value = currentInput;
    }
}
