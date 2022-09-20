// let password = 'some_password';
//
// // password = password.str.replace(/\s/g, '');
// password = password.replaceAll(' ', '');
//
// let passwordLength = password.length;
//
// function checkPassword(length) {
//     let passwordLength = Number(length);
//     if (passwordLength < 16) {
//         return console.log('Please try again, too short password');
//     } else if (passwordLength > 20) {
//         return console.log('Password is good');
//     } else if (passwordLength > 15 && passwordLength < 21) {
//         return console.log('Password is good, but better if it would be longer than 20 symbols');
//     } else {
//         return console.log('Sorry, something goes wrong please try again or inform page administrator');
//     }
// }
//
// checkPassword(passwordLength);


// Pagal amŽiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

// function checkState(age) {
//     let ageNum = Number(age);
//     let answer = '';
//
//     if (ageNum === 6 || ageNum === 10 || ageNum === 14 || ageNum === 18) {
//         switch (ageNum) {
//             case 6:
//                 return answer = 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.';
//             case 10:
//                 return answer = 'Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.';
//             case 14:
//                 return answer = 'Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.';
//             case 18:
//                 return answer = 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.';
//         }
//     } else if (ageNum < 0 || ageNum > 120) {
//         if (ageNum < 0) {
//             answer = 'Per mažas mokyklai';
//         } else {
//             answer = 'Per senas mokyklai';
//         }
//     } else if (ageNum >= 0 && ageNum < 7) {
//         answer = 'Too young for school';
//     } else if (ageNum >= 7 && ageNum < 11) {
//         answer = 'Pradinė mokykla';
//     } else if (ageNum >= 11 && ageNum < 15) {
//         answer = 'Pagrindinė mokykla';
//     } else if (ageNum >= 15 && ageNum < 19) {
//         answer = 'Gimnazistas';
//     } else if (ageNum >= 19 && ageNum <= 120) {
//         answer = 'Mokyklą pabaigė';
//     } else {
//         answer = 'Įvyko klaida';
//     }
//     return answer;
// }
//
// console.log(checkState(6));

function checkState(age) {
    let ageNum = age;
    let answer = '';

    if (ageNum < 0 || ageNum > 120) {
        if (ageNum < 0) {
            answer = 'Dar negimęs';
        } else {
            answer = 'Per senas mokyklai';
        }
    } else if (ageNum >= 0 && ageNum <= 120) {
        if (ageNum >= 0 && ageNum <= 6) {
            answer = 'Per jaunas mokyklai';
            if (ageNum === 6) {
                answer = 'Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.';
            }
        } else if (ageNum > 6 && ageNum <= 10) {
            answer = 'Pradinė mokykla';
            if (ageNum === 10) {
                answer = 'Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.';
            }
        } else if (ageNum > 10 && ageNum <= 14) {
            answer = 'Pagrindinė mokykla';
            if (ageNum === 14) {
                answer = 'Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.';
            }
        } else if (ageNum > 14 && ageNum <= 18) {
            answer = 'Gimnazistas';
            if (ageNum === 18) {
                answer = 'Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.';
            }
        } else if (ageNum > 18 && ageNum <= 120) {
            answer = 'Mokyklą pabaigė';
            if (ageNum === 120) {
                answer = 'Tikriausiai mokyklą pabaigė, tačiau gali būti per senas';
            }
        }
    } else {
        if (isNaN(ageNum)) {
            answer = 'Amžius nėra numeris, bandykite dar kartą';
        } else {
            answer = 'Įvyko klaida';
        }
    }

    return answer;
}

let age = prompt();
let ageInt = parseInt(age);
console.log(checkState(ageInt));