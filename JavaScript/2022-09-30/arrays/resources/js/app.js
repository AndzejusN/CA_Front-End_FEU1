// Dirbti su šiuo masyvu:
//     [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];
let numbersArr = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 1. Dirbant su šiuo masyvu eilės tvarka atlikti žemiau pateiktas užduotis. Naudoti metodus: pop, push, shift, unshift, splice.
// 1.1. Pašalinti pirmą masyvo narį.
numbersArr.shift();
// 1.2. Pašalinti paskutinį masyvo narį.
numbersArr.pop();

// 1.3. Rasti vidurinį masyvo narį ir jį pašalinti.
function cutMiddleNumber(arr) {
    if (arr.length % 2 === 0) {

        return arr.splice(arr.length / 2 - 1, 2);
    }

    return arr.splice(Math.floor(arr.length / 2), 1);
}

cutMiddleNumber(numbersArr);

// 1.4. Pašalinti priešpaskutinį masyvo narį.
numbersArr.splice(-1, 1);

// 1.5. Pašalinti antrą masyvo narį.
numbersArr.splice(1, 1);

// 1.6. Pašalinti 7 ir 8 masyvo narius.
numbersArr.splice(6, 2);

// 1.7. Pašalinti 4, 5 ir 6 masyvo narius skaičiuojant nuo galo.
numbersArr.slice(3, 6);

// 1.8. Pašalinti trečią masyvo narį ir į jo vietą įdėti skaičių 888.
numbersArr.splice(2, 1, 888);

// 1.9. Pašalinti dešimtą masyvo narį ir į jo vietą įdėti skaičius: 33, 789 ir 6543.
numbersArr.splice(9, 1, 33, 789, 6543);

// 1.10. Pašalinti paskutinį masyvo narį į jo vietą įdėti skaičius: 321, 654, 987.
numbersArr.splice(numbersArr.length - 1, 1, 321, 654, 987);

// 1.11. Tarp pirmo ir antro masyvo narių įdėti skaičių 11.
numbersArr.splice(1, 0, 11);

// 1.12. Tarp 13 ir 14 masyvo narių įdėti skaičių 1.
numbersArr.splice(13, 0, 1);

// 1.13. Tarp paskutinio ir priešpaskutinio masyvo narių įdėti skaičių -1.
numbersArr.splice(-1, 0, -1);

// 1.14. Į masyvo pradžią pridėti skaičius: 1, 2, 3.
numbersArr.unshift(1, 2, 3);

// 1.15. Į masyvo pabaigą pridėti skaičius: -333, -321, -312.
numbersArr.push(-333, -321, -312);

// 1.16. Į masyvo vidurį pridėti skaičių 0.
function pushInMiddleNumber(arr) {
    if (arr.length % 2 === 0) {

        return arr.splice(arr.length / 2, 0, 0, 0);
    }

    return arr.splice(Math.floor(arr.length / 2 - 1), 0, 0);
}

pushInMiddleNumber(numbersArr);

// 1.17. Pašalinti pirmą masyvo narį.
numbersArr.shift();

// 1.18. Pašalinti paskutinį masyvo narį.
numbersArr.pop();

// 1.19. Į masyvo pradžią pridėti žodį "start".
numbersArr.unshift('start');

// 1.20. Į masyvo pabaigą pridėti žodį "end".
numbersArr.push('end');

//     Atlikus šias užduotis eilės tvarka masyvas turėtų atrodyti taip:
//     ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
