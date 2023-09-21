const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSign = document.querySelector('.mathSign');

const  numbersButton= document.querySelectorAll('.number');

const opertorsButtons = document.querySelectorAll('.operator');

const equalsButtons = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');

const cluclatorHistory = document.querySelector('.history');

const historyBtn = document.querySelector('.history-btn');


let result = '';

function displayNumber () {
    if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if (this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '.0'

        currentNumber.innerHTML += this.textContent;
}


function operate () {
    if(currentNumber.innerHTML === '' && this.textContent ==="-"){
        currentNumber.innerHTML = '-';
        return;
    }

    else if (currentNumber.innerHTML === ''){
        return;
    }
    
    if(mathSign.innerHTML !== ''){
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}




function showResult () {

}



function clearScreen () {

}


function clearHistory () {

}



//  Nasuchiwanie przycisków

operatorsButton.forEach((button) => button.addEventListener('click',operate))

equalsButtons.addEventListener('click', showResult);

clearButton.addEventListener('click', clearScreen);

numbersButton.forEach((button) => {
    button.addEventListener('click', displayNumber)
})

historyBtn.addEventListener('click', clearHistory);