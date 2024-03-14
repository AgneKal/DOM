console.log('Labas rytas, Lietuva!');

const h1DOM = document.getElementsByTagName('h1');

//Ištraukti tik patį tekstą
console.log('"' + h1DOM[0].innerText + '"');

//Ištttraukti su visais aplink esančiais space ir pan:
console.log('"' + h1DOM[0].textContent + '"');

//Galima tiesiog sutriminti:
console.log('"' + h1DOM[0].textContent.trim() + '"');
const person = {
    name: 'Petras',
    age: 88,
    isMarried: false
};

person.name = 'Jonas';
console.log(person.name);

h1DOM[0].innerText = 'Paskutinis "pirmadienis" :(';

const titleDom = document.getElementsByTagName('title')

console.log(titleDom);

titleDom[0].innerText = 'AAAAAAAAA';
titleDom[0].innerText = 'BBBBBBBBB';

//vienkartinis laikas
setTimeout(() => {
    console.log('LAIKAS - 1');
}, 3000);


const clockDOM = document.getElementById('clock');
clockDOM.innerText = '0:00'

//daugkartinis
let i = 0;
setInterval(() => {
    i++;
    const s = i % 60;
    const m = (i - s) / 60;

    clockDOM.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`
}, 1000);

// laikrodžiams => requestAnimationFrame()

let count = 0;
setInterval(() => {
    count++;
    if (count % 2 === 0) {
        titleDom[0].innerText = 'DOM'
    } else {
        titleDom[0].innerText = '***New Message***'
    }
}, 1000);

