// 1. Sukurti 10-ies skaičių masyvą.
let numbersArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// 2. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų vidurkį.
// 2.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) vidurkis yra 15".

function arithmeticAverage(someArray) {
    let sum = 0;
    for (let i = 0; i < someArray.length; i++) {
        sum += someArray[i];
    }
    let result = sum / someArray.length;
    let output = `Skaičių: ${someArray} vidurkis yra: ${result}`;

    return output;
}

console.log(arithmeticAverage(numbersArr));

// 3. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina jų medianą.
// 3.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mediana yra 15"

function median(someArray) {
    let result = 0;
    if (someArray.length === 0) {
        return 'No inputs';
    } else {
        someArray = someArray.sort((a, b) => a - b);
        let halfNumber = Math.floor(someArray.length / 2);

        if (someArray.length % 2 !== 0) {
            result = someArray[halfNumber];
        } else {
            result = (someArray[halfNumber - 1] + someArray[halfNumber]) / 2.0;
        }
    }

    let output = `Skaičių: ${someArray} mediana yra ${result}`;

    return output;
}

console.log(median(numbersArr));

// 4. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina didžiausia jame esantį skaičių.
// 4.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) didžiausias skaičius yra 15"

function largestNumber(someArray) {
    let result = someArray[0];
    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i] > result) {
            result = someArray[i];
        }
    }

    let output = `Skaičių: ${someArray} didžiausias skaičius yra ${result}`;

    return output;
}

console.log(largestNumber(numbersArr));

// 5. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina mažiausią jame esantį skaičių.
// 5.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) mažiausias skaičius yra 1"

function smallestNumber(someArray) {
    let result = someArray[0];
    for (let i = 0; i < someArray.length; i++) {
        if (someArray[i] < result) {
            result = someArray[i];
        }
    }

    let output = `Skaičių: ${someArray} mažiausias skaičius yra ${result}`;

    return output;
}

console.log(smallestNumber(numbersArr));

// 6. Sukurti funkciją, kuri priima skaičių masyvą ir grąžina n-tąjį skaičių pagal dydį (skaičiuojant nuo mažiausio iki didžiausio).
// 6.1. Reikšmę išsaugoti ir išvesti į ekraną (HTML elementą) tokiu formatu: „Skaičių (1, 2, 3, 5, 6 ...) trečias skaičius pagal dydį yra 3"

function numberByGreatest(someArray, whichNumber) {
    someArray = someArray.sort((a, b) => a - b);
    let numberLikeWord = ['pirmas', 'antras', 'trečias', 'ketvirtas', 'penktas', 'šeštas', 'septyntas', 'aštuntas', 'devintas', 'dešimtas'];

    let output = `Skaičių: ${someArray} ${numberLikeWord[whichNumber - 1]} skaičius pagal dydi yra ${someArray[whichNumber - 1]}`;

    return output;
}

console.log(numberByGreatest(numbersArr, 3));