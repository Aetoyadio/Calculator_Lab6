let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleSign() {
    display.value = -parseFloat(display.value);
}

function calculatePercentage() {
    display.value = parseFloat(display.value) / 100;
}

function power(exponent) {
    display.value = Math.pow(parseFloat(display.value), exponent);
}

function calculateSquareRoot() {
    display.value = Math.sqrt(parseFloat(display.value));
}

function calculateResult() {
    calculate();
}
