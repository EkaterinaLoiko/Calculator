export class TheButton {
    constructor(el,value,typedata) {
        this.element = el;        
        this.value = value;
        this.typedata = typedata;
        this.init();
    }

    init() {
        this.element = document.createElement('button');
        this.element.classList.add('buttons');
        this.element.value = this.value;
        this.element.innerHTML = this.value;
        this.element.typedata = this.typedata;
    } 
}

export  const newButtons = [];
export const buttons = ['AC', 'DEL', '÷', 1, 2, 3, '*', 4, 5, 6, '+', 7, 8, 9, '-', '.', 0, '='];