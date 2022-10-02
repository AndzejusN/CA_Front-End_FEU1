let arrNumbers = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'];

// 4. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant for ciklą ir map metodą. Kiekvieną užduotį atlikti abiem būdais (for ciklu ir map metodu). Visus narius išvesti į konsole pagal žemiau pateiktas sąlygas:
// 4.1. Tik skaičius (number tipo duomenis).

function getNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(getNumbers(arrNumbers));

// 4.2. Tik tekstą (string tipo duomenis).
function getStrings(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'string') {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(getStrings(arrNumbers));

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
function getNumbersXfour(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            result.push(Math.pow(arr[i], 4));
        }
    }

    return result;
}

console.log(getNumbersXfour(arrNumbers));

// 4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.
function getNumbersPlus(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            result.push(arr[i] + 55);
        }
    }

    return result;
}

console.log(getNumbersPlus(arrNumbers));

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.
function getNumbersDivideByTwo(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            result.push(arr[i] / 2);
        }
    }

    return result;
}

console.log(getNumbersDivideByTwo(arrNumbers));

// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".
function getNumbersPlusText(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            result.push(`Number: ${arr[i]}`);
        }
    }

    return result;
}

console.log(getNumbersPlusText(arrNumbers));

// 4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
// "Index: 0, Number: 2"
// "Index: 1, Number: 3"
// "Index: 2, Number: 5"
// Ir t.t.
function getNumbersPlusIndexOne(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            result.push(`Index: ${i}, Number: ${arr[i]}\n`);
        }
    }

    return result;
}

console.log(getNumbersPlusIndexOne(arrNumbers));

// 4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.
function getNumbersMultiplyByIx(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            result.push(arr[i] * i);
        }
    }

    return result;
}

console.log(getNumbersMultiplyByIx(arrNumbers));

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
// - Pirmo skaičiaus dauginti nereikia.
// - Antrą skaičių dauginti iš pirmo.
// - Trečią skaičių dauginti iš antro.
// - Ketvirta skaičių dauginti iš trečio.
// - Penktą skaičių dauginti iš ketvirto.
//     Ir t.t.

function getNumbersSumNotFirst(arr) {
    let result = [];
    let flag = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            if (flag !== 0) {
                result *= arr[i];
                flag++;
            }
            flag++;
        }
    }

    return result;
}

console.log(getNumbersSumNotFirst(arrNumbers));

// 4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.
function getNumbersFourTen(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            if (arr[i] * 5 > 350) {
                result.push(arr[i]);
            }
        }
    }

    return result;
}

console.log(getNumbersFourTen(arrNumbers));

// 4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".
function getNumbersFourEleven(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'string') {
            let data = `${arr[i]} has ${arr[i].length} symbols`;
            result.push(data);

        }
    }

    return result;
}

console.log(getNumbersFourEleven(arrNumbers));

// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".
function getNumbersFourTwelve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'string') {
            let data = '';
            for (let j = 0; j < arr[i].length; j++) {
                let dataPart = '';
                if (j === arr[i].length - 1) {
                    dataPart = arr[i][j].toUpperCase();
                } else {
                    dataPart = arr[i][j].toUpperCase() + '-';
                }
                data += dataPart;
            }
            result.push(data);
        }
    }

    return result;
}

console.log(getNumbersFourTwelve(arrNumbers));

// 4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";
function getNumbersFourThirteen(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'string') {
            let data = '';
            for (let j = 0; j < arr[i].length; j++) {
                let dataPart = '';
                if (j === 0 || j === 2) {
                    dataPart = '_';
                } else {
                    dataPart = arr[i][j];
                }
                data += dataPart;
            }
            result.push(data);
        }
    }

    return result;
}

console.log(getNumbersFourThirteen(arrNumbers));

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";
function getNumbersFourFourteen(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'string') {
            let data = '';
            for (let j = arr[i].length - 1; j >= 0; j--) {
                data += arr[i][j];
            }
            result.push(data);
        }
    }

    return result;
}

console.log(getNumbersFourFourteen(arrNumbers));

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obulys is between -5564 and -51 in the array".
function getNumbersFourFifteen(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'string') {
            let data = `Word ${arr[i]} is between ${arr[i - 1]} and ${arr[i + 1]} in the array`;
            result.push(data);
        }
    }

    return result;
}

console.log(getNumbersFourFifteen(arrNumbers));