// 1. Padaugina skaičių iš 2.    - flag - 1
// 2. Padaugina skaičių iš 5.    - flag - 2
// 3. Prideda prie skaičiaus 5.  - flag - 3
// 4. Atima iš skaičiaus 2.      - flag - 4
// 5. Pakelia skaičių kvadratu.  - flag - 5
// 6. Pakelia skaičių kūbu.      - flag - 6

// direction = 0 - Ascending.
// direction != 0 - Descending.

// times - how many times repeat cycle.

// displayEvery - which answers goes to console (every second, third ...).

function numbers(flag = 0, i = 1, direction = 0, displayEvery = 1, times = 1) {
    let start = i;
    if (i > 0 && i < 101) {
        for (times; times > 0; times--) {
            if (direction === 0) {
                for (i; i < 101; i++) {
                    if (i % displayEvery === 0) {
                        countByFlag(flag, i);
                    }
                }
            } else {
                for (i; i > 0; i--) {
                    if (i % displayEvery === 0) {
                        countByFlag(flag, i);
                    }
                }
            }
            i = start;
        }
    } else {
        return console.log('Number must be from 1 to 100');
    }
}

function countByFlag(flag, i) {
    switch (flag) {
        case 0 :
            console.log(i);
            break;
        case 1 :
            multiplyByTwo(i);
            break;
        case 2 :
            multiplyByFive(i);
            break;
        case 3 :
            plusFive(i);
            break;
        case 4 :
            minusTwo(i);
            break;
        case 5 :
            numberByTwo(i);
            break;
        case 6 :
            numberByThree(i);
            break;
        default :
            console.log('Something is wrong');
    }
}

function multiplyByTwo(i) {
    let result = i * 2;
    console.log(`${i} * 2 = ${result}`);
}

function multiplyByFive(i) {
    let result = i * 5;
    console.log(`${i} * 5 = ${result}`);
}

function plusFive(i) {
    let result = i + 5;
    console.log(`${i} + 5 = ${result}`);
}

function minusTwo(i) {
    let result = i - 2;
    console.log(`${i} - 2 = ${result}`);
}

function numberByTwo(i) {
    let result = Math.pow(i, 2);
    console.log(`${i} * ${i} = ${result}`);
}

function numberByThree(i) {
    let result = Math.pow(i, 3);
    console.log(`${i} * ${i} * ${i} = ${result}`);
}

numbers(1, 100, 1, 2, 3);