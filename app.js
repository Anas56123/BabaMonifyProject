var bar1 = document.getElementById('bar1')

var bar2 = document.getElementById('bar2')

var bar3 = document.getElementById('bar3')

var bar4 = document.getElementById('bar4')

var bar5 = document.getElementById('bar5')

var bar6 = document.getElementById('bar6')

var bar7 = document.getElementById('bar7')

var bar8 = document.getElementById('bar8')

var bar9 = document.getElementById('bar9')

var bar10 = document.getElementById('bar10')

var bar11 = document.getElementById('bar11')

var bar12 = document.getElementById('bar12')

var bar13 = document.getElementById('bar13')

var bar14 = document.getElementById('bar14')

var bar1_1 = document.getElementById('bar1_1')

var bar2_1 = document.getElementById('bar2_1')

var bar3_1 = document.getElementById('bar3_1')
const calculatorBtn = document.getElementById("calculatorBtn");
const calculator = document.getElementById("calculator");
const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

calculatorBtn.addEventListener("click", function () {
    calculator.style.display = "block";
});

calculator.addEventListener("click", function (e) {
    if (e.target === calculator) {
        calculator.style.display = "none";
    }
});
