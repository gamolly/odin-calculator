const validKeys = '1234567890.*/+-';
const validOps = '*/+-'
const display = document.getElementById('display');
const displayContent = display.textContent;
let displayValue;

function add(a,b){
    return a+b;
}

function subtrak(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,fun){
    return fun(a,b);
}

function updateDisplay(e){
    // console.log(e.target.textContent);
    if(validKeys.includes(e.key)){
        if(display.textContent == '0'){
            display.textContent = '';
        }

        display.textContent += e.key;
        console.log(e.key)
    }
    if(e.key == 'Backspace' & display.textContent.length != 0){
       display.textContent = display.textContent.slice(0,-1);
    }
    
}


window.addEventListener('keydown', updateDisplay);
function nameValue(e) {
    console.log((e.target.textContent))
}

calcButtons = Array.from(document.querySelectorAll('button.grid'));
// calcButtons.forEach(button => button.addEventListener('onclick', (e) => console.log(e.target.value)));

calcButtons.forEach(button => button.addEventListener('click', nameValue))


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
 