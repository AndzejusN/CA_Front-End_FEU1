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

function SortAndToString(arr) {
    let arrSort = arr.sort((a, b) => a - b);

    return arrSort.reduce((a, b) => a + `, ${b}`);
}

function createAnswerString(valuesString, condition, result) {

    return `Skaičių (${valuesString}) ${condition} yra ${result}`;
}

function addToHtml(text) {
    let mainContainer = document.querySelector('.container');
    let allElementsP = mainContainer.querySelectorAll('p');

    let p = document.createElement("p");
    p.textContent = text;
    let id = `id-${allElementsP.length}`;
    p.setAttribute('id', `${id}`);
    mainContainer.appendChild(p);
}

// 2. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų vidurkį.
// 2.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) vidurkis yra 15".

function arithmeticAverage(arr) {
    let arrString = arr.reduce((a, b) => a + `, ${b}`);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let result = sum / arr.length;

    let output = createAnswerString(arrString, 'vidurkis', result);

    addToHtml(output);

    return output;
}

function arithmeticAverageReduce(arr) {

    let result = arr.reduce((previousArg, currentArg, index, arr) => {
        if (arr.length - 1 === index) {
            return (previousArg + currentArg) / arr.length;
        }

        return previousArg + currentArg;
    })

    let valuesString = SortAndToString(arr);
    let output = createAnswerString(valuesString, 'vidurkis', result);
    addToHtml(output);

    return output;
}

console.log(arithmeticAverage(numbersArr));
console.log(arithmeticAverageReduce(numbersArr));

// 3. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų medianą.
// 3.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mediana yra 15"

function medianSort(arr) {

    if (arr.length === 0) {
        return 'No inputs';
    }

    let arrSortedString = SortAndToString(arr);
    let halfArrNumber = Math.floor(arr.length / 2);
    let result;

    if (arr.length % 2 !== 0) {
        result = arr[halfArrNumber];
    } else {
        result = (arr[halfArrNumber - 1] + arr[halfArrNumber]) / 2.0;
    }

    let output = createAnswerString(arrSortedString, 'mediana', result);

    addToHtml(output);

    return output;
}

console.log(medianSort(numbersArr));

// 4. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausia jame esantį skaičių.
// 4.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) didžiausias skaičius yra 15"

function largestNumber(arr) {
    let result = arr[0];
    let arrString = arr.reduce((a, b) => a + `, ${b}`);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }

    return createAnswerString(arrString, 'didžiausias', result);
}

function largestNumberSort(arr) {
    let arrSortedString = SortAndToString(arr);
    let result = arr[arr.length - 1];

    let output = createAnswerString(arrSortedString, 'didžiausias', result);

    addToHtml(output);

    return output;
}

console.log(largestNumber(numbersArr));
console.log(largestNumberSort(numbersArr));

// 5. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią jame esantį skaičių.
// 5.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mažiausias skaičius yra 1"

function smallestNumberSort(arr) {
    let arrSortedString = SortAndToString(arr);
    let result = arr[0];

    let output = createAnswerString(arrSortedString, 'mažiausias', result);

    addToHtml(output);

    return output;
}

console.log(smallestNumberSort(numbersArr));

// 6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina n-tąjį skaičių pagal dydį (skaičiuojant nuo mažiausio iki didžiausio).
// 6.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) trečias skaičius pagal dydį yra 3"

function numberByGreatest(arr, biggestByNum) {
    let arrSortedString = SortAndToString(arr);
    let result = arr[biggestByNum - 1];

    let output = `Skaičių masyve: ${arrSortedString} - ${numberInWord[biggestByNum - 1]} skaičius pagal dydi yra ${result}`;

    addToHtml(output);

    return output;
}

console.log(numberByGreatest(numbersArr, 3));