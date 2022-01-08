
let trailingResult = 0;
let operationOptions = ['divide', 'multiply', 'subtract', 'add'];
let workingOperation = '';


function updateDisplay (input) {
  var display = document.getElementById('display');
  var secondaryDisplay = document.getElementById('secondaryDisplay');


  if (display.innerHTML === '0' && operationOptions.indexOf(input) === -1) {
    // if display is 0 (default) and no operation has been clicked:
    if (input === 'decimal') {
      //if decimal is clicked:
      display.innerHTML = '0.';
      //0 updates to 0.
    } else if (input === 'negative-value') {
      display.innerHTML = '-';

    } else {

      display.innerHTML = input; //only updates if input is a number

    }
  } else if (operationOptions.indexOf(input) >= 0) {
    console.log('dealing with an operation');
    //if the input is an operation
      if (workingOperation === '') {
        //working without an initial operand - no operation previously used
        workingOperation = input; //the operation that is clicked becomes the workingOperation
        trailingResult = display.innerHTML;
        secondaryDisplay.innerHTML = trailingResult;
        display.innerHTML = 0;
    }
    else {
      //operand is currently in use

      console.log(display.innerHTML, 'operand in use');

      trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);
      secondaryDisplay.innerHTML = trailingResult;
      display.innerHTML = 0;
      workingOperation = input;
    }
  } else if (input === 'equals') {
    display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
    trailingResult = display.innerHTML;
    workingOperation = '';
    secondaryDisplay.innerHTML = 0;
  } else if (input === 'decimal') {
    //console.log('decimal clicked');
      if(display.innerHTML.indexOf('.') === -1) {
        display.innerHTML += '.';
      }
    //console.log('decimal skipped because it is already present in the number.')
  } else if (input === 'negative-value') {
        console.log('negative value selected');

        if (display.innerHTML.indexOf('-') === -1) {
          display.innerHTML = '-' + display.innerHTML;
        } else if (display.innerHTML.indexOf('-') > -1) {
          display.innerHTML = display.innerHTML.slice(1,display.innerHTML.length);
        }

  } else {
    display.innerHTML += input;
  }
  console.log(trailingResult, '<= trailingResult', display.innerHTML, '<= display.innerHTML', workingOperation, '<= workingOperation');
}

function clearDisplay () {
  display.innerHTML = 0;
  secondaryDisplay.innerHTML = 0;
  trailingResult = 0;
}

function calculate (firstNumber, secondNumber, operation) {
  let result = '';

  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  switch(operation) {
    case 'add':
      console.log('add calculated')
      result = firstNumber + secondNumber;
      break;
    case 'subtract':
      console.log('subtract calculated')
      result = firstNumber - secondNumber;
      break;
    case 'multiply':
      console.log('multiply calculated')
      result = firstNumber * secondNumber;
      break;
    case 'divide':
      console.log('divide calculated')
      result = firstNumber / secondNumber;
      break;
    default: 'calculate switch statement missed something';

  }
  return result.toString();
}
