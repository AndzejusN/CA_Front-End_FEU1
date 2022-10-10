let arrNumbers = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end'];

// Pagalbinės funkcijos

function dataToPage(array, number) {

    let ul = document.createElement('ul');
    ul.setAttribute('id', number);
    let container = document.querySelector('.container');
    container.appendChild(ul);

    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.textContent = array[i];
        ul.appendChild(li);
    }
}

function isNumber(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            result.push(arr[i]);
        }
    }

    return result;
}

function isString(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'string') {
            result.push(arr[i]);
        }
    }

    return result;
}

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

function getNumbersMap(arr) {
    let result = [];

    arr.map(value => {
        if (Number(value)) {
            result.push(value);
        }
    })

    return result;
}


console.log(getNumbers(arrNumbers));
console.log(getNumbersMap(arrNumbers));
dataToPage(getNumbersMap(arrNumbers, 41));

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

function getStringsMap(arr) {
    let result = [];

    arr.map(value => {
        if (typeof (value) === 'string') {
            result.push(value);
        }
    })

    return result;
}

console.log(getStrings(arrNumbers));
console.log(getStringsMap(arrNumbers));
dataToPage(getStringsMap(arrNumbers, 42));

// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.
function getNumbersXfour(arr) {
    let arrFiltered = isNumber(arr);

    let result = [];

    for (let i = 0; i < arrFiltered.length; i++) {
            result.push(Math.pow(arrFiltered[i], 4));
    }

    return result;
}

function getNumbersXfourMap(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            result.push(arr[i]);
        }
    }

    return result.map(value => Math.pow(value, 4));
}

console.log(getNumbersXfour(arrNumbers));
console.log(getNumbersXfourMap(arrNumbers));
dataToPage(getNumbersXfourMap(arrNumbers, 43))

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

function getNumbersPlusMap(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            result.push(arr[i]);
        }
    }

    return result.map(value => value + 55);
}


console.log(getNumbersPlus(arrNumbers));
console.log(getNumbersPlusMap(arrNumbers));
dataToPage(getNumbersPlusMap(arrNumbers, 44));

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

function getNumbersDivideByTwoMap(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            result.push(arr[i]);
        }
    }

    return result.map(value => value / 2);
}


console.log(getNumbersDivideByTwo(arrNumbers));
console.log(getNumbersDivideByTwoMap(arrNumbers));
dataToPage(getNumbersDivideByTwoMap(arrNumbers, 45));

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

function getNumbersPlusTextMap(arr) {

    let result = isNumber(arr);

    return result.map(value => `Number: ${value}`);
}

console.log(getNumbersPlusText(arrNumbers));
console.log(getNumbersPlusTextMap(arrNumbers));
dataToPage(getNumbersPlusTextMap(arrNumbers, 46));

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

function getNumbersPlusIndexOneMap(arr) {
    let result = isNumber(arr);

    return result.map((value, index) => {
        return `Index: ${index}, Number: ${value}\n`;
    });
}

console.log(getNumbersPlusIndexOne(arrNumbers));
console.log(getNumbersPlusIndexOneMap(arrNumbers));
dataToPage(getNumbersPlusIndexOneMap(arrNumbers, 47));

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

function getNumbersMultiplyByIxMap(arr) {
    let result = isNumber(arr);

    return result.map((value, index, array) => {
        return value * index;
    });
}

console.log(getNumbersMultiplyByIx(arrNumbers));
console.log(getNumbersMultiplyByIxMap(arrNumbers));
dataToPage(getNumbersMultiplyByIxMap(arrNumbers, 48));

// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
// - Pirmo skaičiaus dauginti nereikia.
// - Antrą skaičių dauginti iš pirmo.
// - Trečią skaičių dauginti iš antro.
// - Ketvirta skaičių dauginti iš trečio.
// - Penktą skaičių dauginti iš ketvirto.
//     Ir t.t.

function getNumbersSumNotFirst(arr) {
    let result = 0;
    let flag = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            if (flag !== 0) {
                result *= arr[i];
                flag++;
            } else {
                flag++;
            }
        }
    }

    return result;
}

function getNumbersSumNotFirstMap(arr) {

    let result = isNumber(arr);
    let output = 0;
    let flag = 0;

    result.map(value => {
        if (flag !== 0) {
            output *= value;
            flag++;
        } else {
            flag++;
        }

    })

    return output;
}

console.log(getNumbersSumNotFirst(arrNumbers));
console.log(getNumbersSumNotFirstMap(arrNumbers));
dataToPage(getNumbersSumNotFirstMap(arrNumbers, 49));

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

function getNumbersFourTenMap(arr) {
    let result = isNumber(arr);
    let output = [];

    result.map(value => {
        if (value * 5 > 350) {
            output.push(value);
        }
    })

    return output;
}

console.log(getNumbersFourTen(arrNumbers));
console.log(getNumbersFourTenMap(arrNumbers));
dataToPage(getNumbersFourTenMap(arrNumbers, 410));

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

function getNumbersFourElevenMap(arr) {
    let result = isString(arr);

    return result.map((value, index, array) => {
        return `${value} has ${value.length} symbols`;
    })
}

console.log(getNumbersFourEleven(arrNumbers));
console.log(getNumbersFourElevenMap(arrNumbers));
dataToPage(getNumbersFourElevenMap(arrNumbers, 411));

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

function getNumbersFourTwelveMap(arr) {
    let result = isString(arr);

    return result.map((value, index, array) => {
        let data = '';
        for (let j = 0; j < value.length; j++) {
            let dataPart = '';
            if (j === value.length - 1) {
                dataPart = value[j].toUpperCase();
            } else {
                dataPart = value[j].toUpperCase() + '-';
            }
            data += dataPart;
        }

        return data;
    })
}

console.log(getNumbersFourTwelve(arrNumbers));
console.log(getNumbersFourTwelveMap(arrNumbers));
dataToPage(getNumbersFourTwelveMap(arrNumbers, 412));

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

function getNumbersFourThirteenMap(arr) {
    let result = isString(arr);

    return result.map((value, index, array) => {
        let data = '';
        for (let j = 0; j < value.length; j++) {
            let dataPart = '';
            if (j === 0 || j === 2) {
                dataPart = '_';
            } else {
                dataPart = value[j];
            }
            data += dataPart;
        }
        return data;
    })
}

console.log(getNumbersFourThirteen(arrNumbers));
console.log(getNumbersFourThirteenMap(arrNumbers));
dataToPage(getNumbersFourThirteenMap(arrNumbers, 413));

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

function getNumbersFourFourteenMap(arr) {
    let result = isString(arr);

    return result.map((value, index, array) => {
        let data = '';
        for (let j = value.length - 1; j >= 0; j--) {
            data += value[j];
        }
        return data;
    })
}

console.log(getNumbersFourFourteen(arrNumbers));
console.log(getNumbersFourFourteenMap(arrNumbers));
dataToPage(getNumbersFourFourteenMap(arrNumbers, 414));

// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obulys is between -5564 and -51 in the array".
function getNumbersFourFifteen(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let before = (a) => (typeof (a) === 'undefined') ? 'empty' : a;
        let after = (b) => (typeof (b) === 'undefined') ? 'empty' : b;

        let data = `Word ${arr[i]} is between ${before(arr[i - 1])} and ${after(arr[i + 1])} in the array`;
        result.push(data);
    }

    return result;
}

function getNumbersFourFifteenMap(arr) {

    return arr.map((value, index, array) => {
        let before = (a) => (typeof (a) === 'undefined') ? 'empty' : a;
        let after = (b) => (typeof (b) === 'undefined') ? 'empty' : b;
        return `Word ${value} is between ${before(array[index - 1])} and ${after(array[index + 1])} in the array`;
    })
}

console.log(getNumbersFourFifteen(arrNumbers));
console.log(getNumbersFourFifteenMap(arrNumbers));
dataToPage(getNumbersFourFifteenMap(arrNumbers, 415));

// 5. Atlikti ta patį, kaip ir ketvirtoje užduotyje, tačiau atsakymus išvesti ne į konsolę, o į ul elementus.
// 5.1. Kiekvienai užduočiai HTML faile sukurti naują ul elementą ir jam priskirti unikalų id, pvz.:
// <ul id="task-41"></ul>
// <ul id="task-42"></ul>
// <ul id="task-43"></ul>
// Ir t.t.
// 5.2. JavaScript'e paselektinti šiuos elementus.
// 5.3. Kiekvienas ketvirtos užduoties ciklo atsakymas turėtų būti įdėtas į li elementą.
// 5.4. Kiekvienas li elementas turėtų būti įdėtas į atitinkamą ul elementą.