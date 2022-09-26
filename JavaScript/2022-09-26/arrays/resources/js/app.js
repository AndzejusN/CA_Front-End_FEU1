// Užduotis (masyvai):
// 1. Sukurti 3 masyvus, kuriuose būtų bent 10 narių.
// 2. Sukurti funkciją, kuri išveda visus masyve esančius narius į konsolę.

names = ['Andrius', 'Jonas', 'Edita', 'Romas', 'Tomas', 'Pranas', 'Audrius', 'Jolanta', 'Agota', 'Vytautas'];
numbers = [1,2,3,4,5,6,7,8,9];

let sum = 0;

function sumAllRecursive(someArray) {
    if (someArray.length > 0) {
     let number = someArray.pop();
     sum += number;
        sumAllRecursive(someArray);
    }
    return sum;
}

console.log(sumAllRecursive(numbers));

function onScreen(someArray) {
    for (let i = 0; i < someArray.length; i++) {
        console.log(someArray[i]);
    }
}

function addElement(someArray) {

    const container = document.querySelector('.container');
    const newUl = document.createElement('ul')
    container.appendChild(newUl);

    for (let i = 0; i < someArray.length; i++) {
        const newLi = document.createElement('li');
        newLi.textContent = someArray[i];
        newUl.appendChild(newLi);
    }
}

onScreen(names);
addElement(names);


