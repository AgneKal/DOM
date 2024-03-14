const counterDOM = document.querySelector('.counter');
const numberDOM = counterDOM.querySelector('div');
const buttonsDOM = counterDOM.querySelectorAll('button')

const plusDOM = buttonsDOM[0];
const minusDOM = buttonsDOM[1];

let count = 0;

function plus() {
    count++;
    numberDOM.innerText = count;
}

function minus() {
    count--;
    numberDOM.innerText = count;
}

plusDOM.addEventListener('click', plus);
minusDOM.addEventListener('click', minus);

