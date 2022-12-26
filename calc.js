const validKeys = '1234567890.*/+-';
const validNums = '1234567890.';
const validOps = '*/+-';
const opDict = {
    "*": mult,
    "/": divide,
    "+": add,
    "-": subtrak,
}
const display = document.getElementById('display');
let displayVal, firstNum, secondNum, result;
firstNum = secondNum = result = 0;
let funk = add;
let operatorPressed = 0;

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

function updateDisplay(e) { //I should  probably split this into functions for clarity

    let val;
    console.log(firstNum);

    if (e instanceof KeyboardEvent) {
        val = e.key;
    } else val = e.target.textContent;
    

    if (val == 'clr'){
        console.log('inside clear')
        operatorPressed = firstNum = secondNum = result = 0;
        display.textContent = '0';
        
    }

    if (validKeys.includes(val)) {
        // clear the display to update with user input
        if (display.textContent == '0') {
            display.textContent = '';
        }
        // update display
        display.textContent += val;

        //if operator is pressed save the value before the operator into the first number 
        if (validOps.includes(val)) {

            operatorPressed += 1;
            console.log(`operatorPress = ${operatorPressed}`)
            if (operatorPressed == 1){
                console.log(`i'm in the if`)
                firstNum = display.textContent.slice(0, display.textContent.length - 1);
                console.log(firstNum);
                funk = opDict[val];
                console.log(funk);
            }
            else{
                
                console.log(`i'm in else`)
                secondNum = display.textContent.slice(firstNum.length + 1, display.textContent.length-1);
                console.log(`firstNum = ${firstNum}, secondNum = ${secondNum}, funk = ${funk}`);
                //if no operator pressed (i.e., only numbers inputted in display), asking for the result returns the display content directly
                //otherwise, operate
                result = operatorPressed ? operate(Number(firstNum), Number(secondNum), funk) : display.textContent;
                firstNum = display.textContent = result.toString();
                console.log(`firstNum is ${firstNum} and its length = ${firstNum.length}`)
                operatorPressed = 1;
                display.textContent += val;
                funk = opDict[val];
                
            }
        }
    }
    
    if (val == '=' | val == "Enter") {
        secondNum = display.textContent.slice(firstNum.length + 1, display.textContent.length);
        console.log(`firstNum = ${firstNum}, secondNum = ${secondNum}, funk = ${funk}`);
        //if no operator pressed (i.e., only numbers inputted in display), asking for the result returns the display content directly
        //otherwise, operate
        result = operatorPressed ? operate(Number(firstNum), Number(secondNum), funk) : display.textContent;
        display.textContent = result;
        operatorPressed = 0;
    }
    /*TO ADD if first thing on display is operator + or - , should work fine
    if first thing on display is * or / then ignore*/

    if (val == 'Backspace' & display.textContent.length != 0) {
        display.textContent = display.textContent.slice(0, -1);
    }

}

window.addEventListener('keydown', updateDisplay);

calcButtons = Array.from(document.querySelectorAll('button.grid'));

calcButtons.forEach(button => button.addEventListener('click', updateDisplay))


// to calculate using PEDMAS(no parentheses or exponential yet)
// say you've got an expression '12*135-235+25/2-1325' displayed
// let dispVal = display.textContent ( = '555+12*135-235+25/2-1325' )
// start loop to find indices of '*'
// index('*') = n 
  // start to loops to move forward and backwards from n
  // so, first loop dispVal [n-i] and backwards stop when validOps.include(dispVal[n-i])
     // number of steps taken until stop = stepBack;
  // second loop dispVal [n+i] and forwards and stop when validOps.include(dispVal[n-i])
    // number of steps taken until stop = stepForward;
// firstNum = dispVal.slice(n-stepBack, n-1) ,, secondNum = dispVal.slice(n+1, n+stepForward);
// operate Number(firstNum) * Number(secondNum) >> save result in some temp variable subResult 
//         >> update dispVal = dispVal.slice(0, n-stepback) + stepsubresult.toString() + dispVal(n+stepback, dispVal.length-1)
// find next index of '*' and repeat (~ set n = 0 initially, then n =  index('*'))
// do the same for '/' and remaining operators

