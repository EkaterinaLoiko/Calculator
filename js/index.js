import {TheButton} from './buttons.js';
import {newButtons, buttons} from './buttons.js'
import {deleteNumbers, clearDisplay, point, sound} from './functions.js'

const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.append(container);

const calculator = document.createElement('div');
calculator.classList.add('calculator');
container.append(calculator);

const displayCalculator = document.createElement('div');
displayCalculator.classList.add('display');
calculator.append(displayCalculator);
displayCalculator.innerText = '0';

const displayButtons = document.createElement('div');
displayButtons.classList.add('buttons-display');
calculator.append(displayButtons);

for (let i = 0; i < buttons.length; i++) {
    newButtons[i] = new TheButton(document.createElement('button'),buttons[i]);  
    displayButtons.append(newButtons[i].element);         
}

newButtons[3].element.typedata = 'digit';
newButtons[4].element.typedata = 'digit';
newButtons[5].element.typedata = 'digit';
newButtons[7].element.typedata = 'digit';
newButtons[8].element.typedata = 'digit';
newButtons[9].element.typedata = 'digit';
newButtons[11].element.typedata = 'digit';
newButtons[12].element.typedata = 'digit';
newButtons[13].element.typedata = 'digit';
newButtons[15].element.typedata = 'digit';
newButtons[16].element.typedata = 'digit';
newButtons[0].element.classList.add('words');
newButtons[17].element.classList.add('words');

let firstNumber = '';
let secondNumber = '';
let sign = '';
let end = false;
displayCalculator.innerText = 0;

newButtons[0].element.onclick = clearDisplay;
newButtons[1].element.onclick = deleteNumbers;
newButtons[15].element.onclick = point;

displayButtons.addEventListener('click', (event) => {
    sound();
    if (!event.target.classList.contains('buttons')) return ;
    if (event.target.value == 'AC') {
        firstNumber = 0;
        secondNumber = '';
        firstNumber = secondNumber;
        end = false;
        sign = '';
        return; 
    }
    if (event.target.value !== 'DEL' ) { 
    const key = event.target.innerText;
    displayCalculator.innerText += key;

    if (event.target.value == '.' ) { 
        if (newButtons[15].element.value == '.' && firstNumber !== '' && secondNumber == '') {
        displayCalculator.innerText = firstNumber ;
        const array =  String(firstNumber).split('');
            if (array.includes('.')) {
                return;
            }    
        }
        if (newButtons[15].element.value == '.' && secondNumber !== '') {
            displayCalculator.innerText = secondNumber ;
            const array =  String(secondNumber).split('');
            if (array.includes('.')) {
                return;
            }        
        }
    }  
    
    if (event.target.value === '-' && firstNumber === '') { 
        displayCalculator.innerText = event.target.value;     
        firstNumber += event.target.value; 
        return;      
    }  

    if (event.target.typedata === 'digit' ) {
        if (secondNumber === '' && sign === '' ) {                   
            firstNumber += key;
            displayCalculator.innerText = firstNumber ; 
        } 
        else if (firstNumber!== '' && secondNumber!== '' && end ) {
            secondNumber = key;  
            end = false;          
            displayCalculator.innerText = secondNumber; 
        } else {            
            secondNumber += key;
            displayCalculator.innerText = secondNumber;
        }
        return;
    }  

    if (event.target.typedata !== 'digit' && event.target.value !== '=' && event.target.value !== 'DEL' ) {
        sign = key;       
        displayCalculator.innerText = sign;        
        return;
    }    
    
    if (key === '=') {
        if (secondNumber === '') secondNumber = firstNumber;
        switch (sign) {
            case '+':
                firstNumber = (+firstNumber) + (+secondNumber);
                break;
            case '-':
                firstNumber = firstNumber - secondNumber;
                break;  
            case '*':
                firstNumber = firstNumber * secondNumber;
                break;  
            case '÷':
                if (secondNumber == '0' || secondNumber == '') {
                    displayCalculator.innerText  = 'Error';
                    firstNumber = '';
                    secondNumber = '';
                    sign = '';
                    return;
                }
                firstNumber = firstNumber / secondNumber;
                    break;            
        }
            end = true;
            displayCalculator.innerText = firstNumber;
            console.log(firstNumber, secondNumber, sign);
    }       
    
    if (event.target.typedata !== 'digit' && firstNumber == '' && secondNumber == '') {
        displayCalculator.innerText += event.target.value;
        firstNumber = displayCalculator.innerText;
        return;
      }  
    
}})






