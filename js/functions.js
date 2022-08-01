import {firstNumber,secondNumber,sign,end} from './index.js'
import {newButtons, buttons} from './buttons.js'
import {displayCalculator, displayButtons} from './index.js'

export function clearDisplay () {    
    let firstNumber = '';
    let secondNumber = '';    
    let sign = '';
    let end = false;
    displayCalculator.innerText = '0';
}

export function point() {
    if (newButtons[15].element.value == '.' && firstNumber !== '' && secondNumber == '') {
        displayCalculator.innerText = firstNumber ;
        const array =  String(firstNumber).split('');
        if (array.includes('.')) {
           return;
        }       
        displayCalculator.innerText = array.join('');
        firstNumber = displayCalculator.innerText;         
    } 
    if (newButtons[15].element.value == '.' && secondNumber !== '') {
        displayCalculator.innerText = secondNumber ;
        const array =  String(secondNumber).split('');
        if (array.includes('.')) {
           return;
        }
        displayCalculator.innerText = array.join('');
        secondNumber = displayCalculator.innerText;         
    } 
}

export function sound() {
    const audio = new Audio();
    audio.src = './sound/single-button-press.mp3';
    audio.autoplay = true;
  }

  

