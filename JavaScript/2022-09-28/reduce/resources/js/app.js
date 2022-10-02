// .reduce()
// 1. Sukurti masyvą su bent 7 pasaulio valstybėmis. +
// 2. Sukurti naują kintamąjį, kurio jo reikšmė bus visos pasaulio valstybės iš pirmojo masyvo sudėtos į vieną string'ą (naudoti reduce metodą).
// 3. Šio kintamojo reikšmę išvesti į konsolę.

let countries = [
    'Lietuva',
    'Latvija',
    'Estija',
    'Suomija',
    'Švedija',
    'Norvegija',
    'Danija'
];

let listOfCountriesReverse = countries.reduce((previousValue, currentValue, index) => {
    if (1 === index) {
        return currentValue + `, ${previousValue}.`;
    }
    return currentValue + `, ${previousValue}`;
});


console.log(listOfCountriesReverse);

let listOfCountries = countries.reduce((previousValue, currentValue, index, arr) => {
    if (arr.length - 1 === index) {
        return previousValue + `, ${currentValue}.`;
    }
    return previousValue + `, ${currentValue}`;
});

console.log(listOfCountries);