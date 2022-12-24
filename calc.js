const validKeys = '1234567890.*/+-';
const validOps = '*/+-'
const display = document.getElementById('display');
const displayContent = display.textContent;
let displayValue;

function add(a, b) {
    return a + b;
}

function subtrak(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, fun) {
    return fun(a, b);
}

function updateDisplay(e) {

    let val;
    if (e instanceof KeyboardEvent) {
        val = e.key;
    } else val = e.target.textContent;

    //can  make an early return if !validKeys.includes(val)
    if (validKeys.includes(val)) {
        if (display.textContent == '0') {
            display.textContent = '';
        }
        display.textContent += val;
        console.log(val)
    }
    if (val == 'Backspace' & display.textContent.length != 0) {
        display.textContent = display.textContent.slice(0, -1);
    }
}

window.addEventListener('keydown', updateDisplay);


calcButtons = Array.from(document.querySelectorAll('button.grid'));

calcButtons.forEach(button => button.addEventListener('click', updateDisplay))


// display = 123
// >> operator pressed 
//   >> let a = (display).toNumber()
//   >> add rest of numbers to display 
// option 1>> equals pressed 
//  >> let b = display[from the end up to length(a)+1]
//  >> display = operation output 
// option 2>> another operator pressed 
//  >>let b = ...
//  >>result of first operator (a,b)
//  >> a = result 
//  >> add result of numbers to display 
//  >> equals pressed? repeat as above
