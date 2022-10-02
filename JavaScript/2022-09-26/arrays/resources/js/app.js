// Užduotis (masyvai):
// 1. Sukurti 3 masyvus, kuriuose būtų bent 10 narių.
// 2. Sukurti funkciją, kuri išveda visus masyve esančius narius į konsolę.

// names = ['Andrius', 'Jonas', 'Edita', 'Romas', 'Tomas', 'Pranas', 'Audrius', 'Jolanta', 'Agota', 'Vytautas'];
// numbers = [1,2,3,4,5,6,7,8,9];
//
// let sum = 0;
//
// function sumAllRecursive(someArray) {
//     if (someArray.length > 0) {
//      let number = someArray.pop();
//      sum += number;
//         sumAllRecursive(someArray);
//     }
//     return sum;
// }
//
// console.log(sumAllRecursive(numbers));
//
// function onScreen(someArray) {
//     for (let i = 0; i < someArray.length; i++) {
//         console.log(someArray[i]);
//     }
// }
//
// function addElement(someArray) {
//
//     const container = document.querySelector('.container');
//     const newUl = document.createElement('ul')
//     container.appendChild(newUl);
//
//     for (let i = 0; i < someArray.length; i++) {
//         const newLi = document.createElement('li');
//         newLi.textContent = someArray[i];
//         newUl.appendChild(newLi);
//     }
// }
//
// onScreen(names);
// addElement(names);


// UZDUOTIS dirbant su pirkinių sąrašu (bent 7 pirkiniai):
// Kiekvienam iš punktų sukurti po atskirą kintamąjį ir jame išsaugoti reikšmę. Šią reikšmę atvaizduoti konsolėje.
// 1. Išimti pirmus du pirkinius.
// 2. Išimti tris paskutinius pirkinius.
// 3. Išimti ketvirtą ir penktą pirkinį.
// 4. Išimti antrą ir trečią pirkinį.
// 5. Išimti visus, išskyrus pirmą pirkinį.
//
// let goods = ['Duona', 'Apelsinai','Sūris', 'Sviestas', 'Jogurtas', 'Mėsa', 'Sultys'];
//           //  0         1           2          3         4          5         6
//           // -7        -6          -5         -4        -3         -2        -1
//
// let firstTwo = goods.slice(0,2);
// console.log(firstTwo);
//
// let lastThree = goods.slice(-3);
// console.log(lastThree);
//
// let fourAndFive = goods.slice(3,5);
// console.log(fourAndFive);
//
// let twoAndThree = goods.slice(1,3);
// console.log(twoAndThree);
//
// let allButNotFirst = goods.slice(1);
// console.log(allButNotFirst);

// Sukurti 10-ties filmų masyvą ir iš jo:
let movies = [
    'The Shawshank Redemption 1'
    , 'The Godfather 2'
    , 'The Dark Knight 3'
    , 'The Godfather Part II 4'
    , '12 Angry Men 5'
    , 'Schindlers List 6'
    , 'The Lord of the Rings: The Return of the King 7'
    , 'Pulp Fiction 8'
    , 'The Lord of the Rings: The Fellowship of the Ring 9'
    , 'The Good, the Bad and the Ugly 10'
]

let dates = [
    1994
    , 1972
    , 2008
    , 1974
    , 1957
    , 1993
    , 2003
    , 1994
    , 2001
    , 1966
]

function connectTwoArrays(oneArray, twoArray) {
    let newArray = [];

    if (oneArray.length === twoArray.length) {
        for (let i = 0; i < oneArray.length; i++) {
            let partOfArray = [oneArray[i], twoArray[i]]
            newArray.push(partOfArray);
        }
    } else {
        let partOfArray = ['Data is not correct', 'please contact administrator.', 'Administrator:please check lengths of arrays']
        newArray.push(partOfArray);
    }

    return newArray;
}

let moviesWithDates = connectTwoArrays(movies, dates);

// 1. Išimti pirmus 5 filmus.
// let firstFive = movies.slice(0, 5);
// console.log(firstFive);
// let firstFive = movies.splice(0, 5);
// console.log(firstFive);

// 2. Išimti 4 paskutinius filmus.
// let lastFour = movies.slice(-4);
// console.log(lastFour);
// let lastFour = movies.splice(-4);
// console.log(lastFour);

// 3. Išimti nuo trečio iki septinto filmo.
// let fromThirdTillSeventh = movies.slice(2, 7);
// console.log(fromThirdTillSeventh);
// let fromThirdTillSeventh = movies.splice(2, 5);
// console.log(fromThirdTillSeventh);

// 4. Išimti antrą ir trečią filmą.
// let secondTillThird = movies.slice(1, 3);
// console.log(secondTillThird);
// let secondTillThird = movies.splice(1, 2);
// console.log(secondTillThird);

// 5. Išimti visus, išskyrus pirmą filmą.
// let notFirst = movies.slice(1);
// console.log(notFirst);
// let notFirst = movies.splice(1);
// console.log(notFirst);

// 6. Išimti 5 filmus skaičiuojant nuo trečio.
// let fifthTillSeventh = movies.slice(2,7);
// console.log(fifthTillSeventh);
// let fifthTillSeventh = movies.splice(2,5);
// console.log(fifthTillSeventh);

// 7. Išimti tris filmus nuo galo, tačiau palikti paskutinį.
// let lastThree = movies.slice(-3);
// console.log(lastThree);
// let lastThree = movies.splice(-3);
// console.log(lastThree);

// 8. Vietoje penkto filmo įrašyti du naujus filmus.
// let fiveAnotherTwo = movies.splice(4,1,'Chip and Dale', 'Beaves and Buthead');
// console.log(movies);

// 9. Pašalinti pirmą filmą.
// let noFirst  = movies.splice(0,1);
// console.log(movies);

// 10. Įrašyti naują filmą į masyvo pradžią.
// movies.unshift('New Film');
// console.log(movies);

// 11.1. Išimti pirmus tris filmus, skaičiuojant nuo antro filmo.
// let firstThree = movies.slice(0, 3);
// console.log(firstThree);

// 11.2. Išimti paskutinius tris filmus, skaičiuojant nuo priešpaskutinio filmo.
// let lastThreeExLast = movies.slice(-4, -1);
// console.log(lastThreeExLast);

// 11.3. Šiuos išimtus filmus išsaugoti naujame masyve ir padaryti, jog jo nariai būtų apsukti.

// let bothArr = firstThree.concat(lastThreeExLast);
// let reversed = bothArr.reverse();

// 12. Filmų sąrašą išvesti į ekraną (ul - li elementuose). Prie filmo pavadinimo pridėti filmo eilės numerį.

// function addElement(someArray) {
//
//     const container = document.querySelector('.container');
//     const newUl = document.createElement('ul')
//     container.appendChild(newUl);
//
//     for (let i = 0; i < someArray.length; i++) {
//         let count = i + 1;
//         let child = document.createElement('li');
//         let answer = '';
//         for (let j = 0; j < someArray[i].length; j++) {
//             if (!isNaN(someArray[i][j])) {
//                 someArray[i][j] = '(' + someArray[i][j] + ')';
//             }
//             if (j === someArray[i].length - 1) {
//                 answer += someArray[i][j] + '.';
//             } else {
//                 answer += someArray[i][j] + ', ';
//             }
//         }
//         child.textContent = count + '.) ' + answer;
//         newUl.style.listStyleType = 'none';
//         newUl.appendChild(child);
//     }
// }

// 13. Modifikuoti duomenis taip kad filmai turėtų ne tik pavadinimus, tačiau ir išleidimo datą.
// 13.1. Prie filmų sąrašo (ul - li elementuose) pridėti išleidimo datą.

// addElement(moviesWithDates);

// 14. Sukurti dar 2 naujus masyvus, kuriuose būtų po keletą filmų ir:
// 14.1. Išvesti visuose 3 masyvuose esančius filmus į ekraną kaip vieną sąrašą.

let secondMoviesArr = ['All rivers', 'All oceans'];
let thirdMoviesArr = ['All stars', 'All planets'];
// let resultArr = [...movies, ...secondMoviesArr, ...thirdMoviesArr];

let resultArr = [movies, secondMoviesArr, thirdMoviesArr];

function listThreeArr(arr) {

    const container = document.querySelector('.container');
    const newUl = document.createElement('ul')
    container.appendChild(newUl);

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            count++;
            let child = document.createElement('li');
            child.textContent = count + '.) ' + arr[i][j];
            newUl.style.listStyleType = 'none';
            newUl.appendChild(child);
        }
    }
}

listThreeArr(resultArr);