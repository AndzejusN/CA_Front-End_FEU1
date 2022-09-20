// Pasisveikinimas
//
// 1. Jeigu vartotojas prisijungęs (true/false), tai prie pasisveikinimo reikia prirašyti jo vardą, pvz. „Good Morning, Tom.".
//
// 2. Jeigu vartotojas nėra prisijungęs, tai išvesti tik tekstą „Good Morning...".
//
// 3. Priklausomai nuo paros laiko, pasisveikinimas turėtų būti skirtingas:
//
//     3.1. 5-12 val. „Good Morning"
//
// 3.2. 13-18 val. „Good Afternoon"
//
// 3.3. 19-4 val. „Good Evening"
//
// 4. Jeigu vartotojas yra ir prisijungęs, ir šiandien yra jo gimtadienis, tai prie pasisveikinimo dar turi būti parašytas ir pasveikinimas, pvz.: „Good Morning, Tom and have a great birthday!"


function helloUser(isLogged, personName, time, isBirthday) {

    let answer = '';

    if (time >= 5 && time < 12) {
        answer = 'Good Morning, ';
    } else if (time >= 12 && time < 18) {
        answer = 'Good Afternoon, ';
    } else if (time >= 18 && time < 24 || time < 5 && time >= 0) {
        answer = 'Good Evening, ';
    } else {
        answer = 'Hello, '
    }

    if (isLogged) {
        answer += personName;

        if (isBirthday) {
            answer += ' and have a great birthday!'
        }
    }

    return answer;
}

function cleanFormValues() {
    document.getElementById('name').value = '';
    document.getElementById('isLogged').value = '';
    document.getElementById('isBirthday').checked = false;
}


document.addEventListener('DOMContentLoaded', (function () {
    document.addEventListener('submit', (function (e) {
            e.preventDefault();
            let personName = document.getElementById('name').value;
            let isLogged = document.getElementById('isLogged').value;
            let isBirthday = document.getElementById('isBirthday').checked;

            let dateNow = new Date();
            let time = dateNow.getHours();

            document.getElementById('text').innerText = helloUser(isLogged, personName, time, isBirthday);
            document.getElementById('userLogForm').style.display = "none";
        }
    ))
}))