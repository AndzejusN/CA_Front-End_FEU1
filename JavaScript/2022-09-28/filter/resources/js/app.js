// 1. Sukurti 20-ies skaičių masyvą.
let numbersArr = [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let numberInWord = [
    'pirmas',
    'antras',
    'trečias',
    'ketvirtas',
    'penktas',
    'šeštas',
    'septyntas',
    'aštuntas',
    'devintas',
    'dešimtas',
    'vienuoliktas',
    'dvyliktas',
    'tryliktas',
    'keturioliktas',
    'penkioliktas',
    'šešioliktas',
    'septynioliktas',
    'aštuonioliktas',
    'devynioliktas',
    'dvidešimtas'
];

// FILTER:
// 1. Sukurti 20-ties skaičių masyvą ir išfiltruoti skaičius, kurie:
// 1.1. Yra di desni už 10
// 1.2. Yra neigiami
// 1.3. Dalinasi iš 3 arba 5
// 1.4. Dalinasi iš 4 ir yra didesni už 13

let numbersBiggerThanTen = numbersArr.filter(element => element > 10);
console.log(numbersBiggerThanTen);
let negativeNumbers = numbersArr.filter(element => element < 0);
console.log(negativeNumbers);
let divideByThreeOrFive = numbersArr.filter(element => element % 3 === 0 || element % 3 === 0);
console.log(divideByThreeOrFive);
let divideByFourGreaterThanThirteen = numbersArr.filter(element => element % 4 === 0 && element > 13);
console.log(divideByFourGreaterThanThirteen);

// 2. Sukurti 20-ties žodžių masyvą ir išfiltruoti žodžius, kurie:
// 2.1. Baigiasi raide e
// 2.2. Turi daugiau raidžių nei 8
// 2.3. Turi neporinį raidžių skaičių
// 2.4. Savyje turi raidžių junginį as

let endsE = numberInWord.filter(element => element.slice(-1) === 'e');
console.log(endsE);
let moreThanEightLetters = numberInWord.filter(element => element.length > 8);
console.log(moreThanEightLetters);
let evenNumberOfLetters = numberInWord.filter(element => element.length % 2 === 0);
console.log(evenNumberOfLetters);
let oddNumberOfLetters = numberInWord.filter(element => element.length % 2 !== 0);
console.log(oddNumberOfLetters);
let includeLetters = numberInWord.filter(element => element.includes('as'));
console.log(includeLetters);