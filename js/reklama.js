import { ads } from "./ads/ads.js";

const resetDOM = document.querySelector('button')
const adDOM = document.getElementById('ad');
const closeDOM = adDOM.querySelector('.close');

closeDOM.addEventListener('click', () => {
    adDOM.classList.add('hide');
})

resetDOM.addEventListener('click', () => {
    adDOM.classList.remove('hide');
})