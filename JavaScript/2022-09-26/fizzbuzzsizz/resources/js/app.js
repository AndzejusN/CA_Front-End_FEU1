// I - VARIANTAS
//
// FIZZ BUZZ
// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";
// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
//
// function fizzBuzzEct() {
//     for (let i = 1; i < 101; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('Fizz Buzz');
//         } else if (i % 7 === 0) {
//             console.log('Biff');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else if (i % 3 === 0) {
//             console.log('Fizz')
//         } else {
//             console.log(i);
//         }
//     }
// }
//
// fizzBuzzEct();

// II - Variantas
//
// FIZZ BUZZ
// 1. Skaičius nuo 1 iki 100.
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".

function fizzBuzzEct() {
    for (let i = 1; i < 106; i++) {
        let result = '';
        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            result = 'Fizz Buzz Biff';
        } else if (i % 3 === 0 && i % 5 === 0) {
            result = 'Fizz Buzz';
        } else if (i % 3 === 0 && i % 7 === 0) {
            result = 'Fizz Buff';
        } else if (i % 5 === 0 && i % 7 === 0) {
            result = 'Buzz Buff';
        } else if (i % 3 === 0) {
            result = 'Fizz';
        } else if (i % 5 === 0) {
            result = 'Buzz';
        } else if (i % 7 === 0) {
            result = 'Biff';
        } else if (i % 9 === 0) {
            result = 'Fuzz';
        } else if (i % 11 === 0) {
            result = 'Bizz';
        } else {
            result = i;
        }
        console.log(result);
    }
}

fizzBuzzEct();