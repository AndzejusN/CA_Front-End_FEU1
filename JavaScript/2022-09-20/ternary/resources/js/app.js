// UŽDUOTIS: sukurti galvosūkį su keletu klausimu
//
// PIRMAS LYGIS:
//     1. Norint patekti į kitą lygį, reikia atsakyti bent į vieną klausimą iš dviejų:
//     2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris klausimas buvo neteisingas.

let playerAnswer11 = '';
let playerAnswer12 = '';

let formOne = document.querySelector('.form-one');

let answerBlock = document.querySelector('.answer');
let resultPositive = document.querySelector('.result');
let resultNegative = document.querySelector('.wrong-answer');
let nextLevelButton = document.querySelector('.next-level');
let tryAgainButton = document.querySelector('.try-again');


formOne.addEventListener('submit', function (event) {
    event.preventDefault();
    playerAnswer11 = event.target.elements.firstQuestion.value;
    console.log('First: ' + playerAnswer11);
    playerAnswer12 = event.target.elements.secondQuestion.value;
    console.log('Second: ' + playerAnswer12);
    clearValues();
    checkAnswers();
})

let correct11 = 'A';
let correct12 = 'B';

function checkAnswers() {
    answerBlock.style.display = 'block';
    resultPositive.textContent = 'You in the next level';
    nextLevelButton.style.display = 'block';
    resultNegative.classList.add('text-danger');
    disableForm(true);

    if (correct11 === playerAnswer11 || correct12 === playerAnswer12) {
        if (correct11 === playerAnswer11) {
            resultNegative.textContent = 'Second question is wrongly answered';
        } else {
            resultNegative.textContent = 'First question is wrongly answered';
        }
    } else {
        resultNegative.textContent = 'Please try again, both answers are wrong!';
        resultPositive.textContent = '';
        nextLevelButton.style.display = 'none';
        tryAgainButton.style.display = 'block';
    }
}

tryAgainButton.addEventListener('click', () => {
    answerBlock.style.display = 'none';
    disableForm(false);
})

function clearValues() {
    let firstAnswer = document.querySelectorAll('input[name="firstQuestion"]');
    firstAnswer.forEach((one) => {
            one.checked = false;
        }
    )

    let secondAnswer = document.querySelectorAll('input[name="secondQuestion"]');
    secondAnswer.forEach((one) => {
            one.checked = false;
        }
    )
}

function disableForm(meaning) {

    let formButtons = document.querySelectorAll('form button');

    formButtons.forEach((one) => {
            one.disabled = meaning;
        }
    )
}

//     ANTRAS LYGIS:
//
//     1. Norint patekti į kitą lygį, reikia atsakyti į abu klausimus iš dviejų:
//     2. Jeigu atsakytas tik vienas klausimas, tai papildomai reikia parašyti kuris atsakymas buvo neteisingas.

// console.log('SECOND LEVEL:');
// console.log('1. The JSON syntax is a subset of the _____ syntax.' + '\n' + 'A. Php' + '\n' + 'B. JavaScript');
// console.log('2. Who is the creator of JSON?' + '\n' + 'A. Alvin Alexander' + '\n' + 'B. Douglas Crockford');

let correct21 = 'B';
let correct22 = 'B';

let playerAnswer21 = 'B';
let playerAnswer22 = 'B';

if (correct21 === playerAnswer21 && correct22 === playerAnswer22) {
    console.log('You in next level');
} else if (correct21 === playerAnswer21 || correct22 === playerAnswer22) {
    if (correct11 === playerAnswer11) {
        console.log('Second question is wrongly answered');
    } else {
        console.log('First question is wrongly answered');
    }
} else {
    console.log('Please try again, both answers are wrong!');
}

//     TREČIAS LYGIS:
//     1. Trys klausimai ir į kitą lygį pereinama, jeigu atsakomi bent du klausimai.
//     2. Jeigu atsakomi du klausimai, turi būti parodoma, kuris klausimas buvo neatsakytas.
//     3. Jeigu atsakomi mažiau nei du klausimai, tai turi parodyti, kuris klausimas buvo atsakytas.

// console.log('THIRD LEVEL:');
// console.log('1. In the JSON syntax, data is separated by _____.' + '\n' + 'A. Colons' + '\n' + 'B. Commas');
// console.log('2. In the JSON syntax, array is written within in ____.' + '\n' + 'A. Square brackets' + '\n' + 'B. Curley braces');
// console.log('3. In the JSON syntax, data is in ____ pairs.' + '\n' + 'A. class/object' + '\n' + 'B. name/value');

let correct31 = 'B';
let correct32 = 'A';
let correct33 = 'B';

let playerAnswer31 = 'B';
let playerAnswer32 = 'A';
let playerAnswer33 = 'B';

let flag = 0;
let uncorrect = '';
let correct = '';

if (correct31 === playerAnswer31) {
    flag += 1;
    correct = 'First question answered correctly';
} else {
    uncorrect = 'First question answered not correctly';
}

if (correct32 === playerAnswer32) {
    flag += 1;
    correct = 'Second question answered correctly';
} else {
    uncorrect = 'Second question answered not correctly';
}

if (correct33 === playerAnswer33) {
    flag += 1;
    correct = 'Third question answered correctly';
} else {
    uncorrect = 'Third question answered not correctly';
}

switch (flag) {
    case 3:
        console.log('You in next level, all answers are correct');
        break;
    case 2:
        console.log('You in next level, 2 of 3 are correct. Wrongly answered:' + uncorrect);
        break;
    case 1:
        console.log('Please try again, only one answer is good. Good answer: ' + correct);
        break;
    case 0:
        console.log('Please try again, all answers are not correct');
        break;
    default:
        console.log('Sorry, something is wrong, please try again');
}