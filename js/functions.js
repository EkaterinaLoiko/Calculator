export function deleteNumbers () {   
    if (newButtons[1].element.value == 'DEL' && firstNumber !== '' && secondNumber == '') {
        displayCalculator.innerText = firstNumber;
        firstNumber = firstNumber.slice(0, -1);        
        displayCalculator.innerText = firstNumber;  
    }   
    if (newButtons[1].element.value == 'DEL' && secondNumber !== '') {
        displayCalculator.innerText = secondNumber;           
        const array =  String(secondNumber).split('');
        console.log(array);
        array.pop();
        displayCalculator.innerText = array.join('');
        secondNumber = displayCalculator.innerText; 
    }
}

export function clearDisplay () {    
    let firstNumber = '';
    let secondNumber = '';    
    let sign = '';
    let end = false;
    displayCalculator.innerText = '0';
    console.log(firstNumber,secondNumber);
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


  

