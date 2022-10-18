let form = document.querySelector('.contact-form');
let output = document.querySelector('.info-output');

let data = [];

let divAlert = document.createElement('div');
divAlert.classList.add('alert', 'alert-success');
divAlert.textContent = 'Student created successfully';
divAlert.style.minHeight = '50px';
divAlert.style.display = 'none';

let divAlertDelete = document.createElement('div');
divAlertDelete.classList.add('alert', 'alert-danger');
divAlertDelete.style.minHeight = '50px';
divAlertDelete.style.display = 'none';

let alerts = document.querySelector('.alerts');
alerts.style.minHeight = '100px';
alerts.appendChild(divAlert);
alerts.appendChild(divAlertDelete);

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let fname = document.querySelector('input[name=fname]').value;
    let lname = document.querySelector('input[name=lname]').value;
    let tel = document.querySelector('input[name=tel]').value;
    let mail = document.querySelector('input[name=mail]').value;
    let age = document.querySelector('input[name=age]').value;
    let experience = document.querySelector('input[name=experience]').value;
    let text = document.querySelector('#text').value;
    let volume = document.querySelector('input[name=volume]').value;
    let groupRadio = document.querySelector('input[name=group]:checked');
    let groupCheckbox = document.querySelector('input[name=groupCheckbox]:checked').value;

    let validation = document.querySelectorAll('.required');

    let response = formValidation(validation);

    if (response) {
        return;
    }

    data.push({
        fname,
        lname,
        tel,
        mail,
        age,
        experience,
        text,
        volume,
        groupRadio,
        groupCheckbox
    });

    generateListInHtml(data);

    alertSwitch();

    divAlert.textContent = 'Student created successfully' + ' ' + fname + ' ' + lname;

    form.reset();

    localStorage.clear();

    window.scrollTo(0, document.body.scrollHeight);

    setTimeout(alertSwitch, 5000);
})

function formValidation(validation) {
    let mistakes = document.querySelectorAll('.mistake');
    mistakes.forEach((value) => value.remove());

    let noData = false;
    let notValid = false;

    validation.forEach(element => {
        element.style.border = "2px solid black";

        if (!element.value) {
            noData = true;
            element.style.border = "2px solid red";
            let text = '<p style="color: red;">Šis laukelis yra privalomas</p>';
            let p = createErrorMessage(text);
            element.before(p);
        }

        if (element.name === 'fname' && element.value.length < 4) {
            element.style.border = "2px solid red";
            let text = '<p style="color: red;">Vardas privalo būti bent 3 simbolių ilgumo</p>';
            let p = createErrorMessage(text);
            element.before(p);
            notValid = true;
        }

        if (element.name === 'lname' && element.value.length < 4) {
            element.style.border = "2px solid red";
            let text = '<p style="color: red;">Pavardė privalo būti bent 3 simbolių ilgumo</p>';
            let p = createErrorMessage(text);
            element.before(p);
            notValid = true;
        }

        if (element.name === 'age' && element.value <= 0) {
            element.style.border = "2px solid red";
            let text = '<p style="color: red;">Amžius privalo būti teigiamas skaičius</p>';
            let p = createErrorMessage(text);
            element.before(p);
            notValid = true;

        } else if (element.name === 'age' && element.value > 120) {
            element.style.border = "2px solid red";
            let text = '<p style="color: red;">Įvestas amžius yra per didelis</p>';
            let p = createErrorMessage(text);
            element.before(p);
            notValid = true;
        }

        if (element.name === 'tel' && (element.value.length < 9 || element.value.length > 12)) {
            element.style.border = "2px solid red";
            let text = '<p style="color: red;">Įvestas telefono numeris yra neteisingas</p>';
            let p = createErrorMessage(text);
            element.before(p);
            notValid = true;
        }

        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        let found = element.value.match(regex);

        if (element.name === 'mail' && (element.value.length < 8 || !found)) {
            element.style.border = "2px solid red";
            let text = '<p style="color: red;">Įvestas elektroninis paštas yra neteisingas</p>';
            let p = createErrorMessage(text);
            element.before(p);
            notValid = true;
        }
    })

    if (noData) {
        divAlertDelete.textContent = 'Ne visi laukeliai yra užpildyti';
        divAlertDelete.style.display = 'block';

        setTimeout(() => {
            divAlertDelete.style.display = 'none';
        }, 5000);
    }

    let response = false;

    if (notValid || noData) {
        response = true;
    }

    return response;
}

function alertSwitch() {
    if (divAlert.style.display === 'none') {
        divAlert.style.display = 'block';
    } else {
        divAlert.style.display = 'none';
    }
}

let volume = document.querySelector('#volume');
let volumeResult = document.querySelector('.volume-result');

volume.addEventListener('change', () => {
    volumeResult.textContent = volume.value;
})

let studentList = document.createElement('div');
studentList.setAttribute('id', 'students-list');
studentList.style.display = 'flex';
studentList.style.flexWrap = 'wrap';
studentList.style.gap = '20px';
studentList.style.width = '100%';
output.appendChild(studentList);

function generateHtml(data) {
    let studentItem = document.createElement('div');
    studentItem.setAttribute('id', 'students-item');
    studentItem.classList.add('card');
    studentItem.style.width = '380px';
    studentList.appendChild(studentItem);

    let divCard = document.createElement('div');
    divCard.classList.add('card-header');
    divCard.textContent = data[data.length - 1].fname + ' ' + data[data.length - 1].lname;
    studentItem.appendChild(divCard);

    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    ul.style = 'list-style: none';
    studentItem.appendChild(ul);
    let values = Object.values(data[data.length - 1]);

    values.map((value, index) => {
        let mark;
        if (index === 3) {
            value = '*****';
            mark = 'mark';
        }
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        if (mark) {
            li.classList.add(mark);
        }
        li.textContent = value;
        ul.appendChild(li);
    })

    let buttonStd = document.createElement('button');
    buttonStd.textContent = 'Rodyti asmens duomenis';
    ul.appendChild(buttonStd);

    let buttonDeleteStd = document.createElement('button');
    buttonDeleteStd.textContent = 'Ištrinti studentą';
    buttonDeleteStd.classList.add('btn', 'btn-danger');
    ul.appendChild(buttonDeleteStd);

    buttonDeleteStd.addEventListener('click', () => {
        studentItem.remove();
        divAlertDelete.textContent = 'Student ' + values[0] + ' ' + values[1] + ' successfully deleted';
        divAlertDelete.style.display = 'block';
        setTimeout(() => {
            divAlertDelete.style.display = 'none';
        }, 5000);
    });

    let dataHidden = true;

    buttonStd.addEventListener('click', () => {
        let email = document.querySelector('.mark');

        if (dataHidden) {
            email.textContent = values[3];
            buttonStd.textContent = 'Slėpti asmens duomenis';
        } else {
            email.textContent = '*****';
            buttonStd.textContent = 'Rodyti asmens duomenis';
        }
        dataHidden = !dataHidden;
    })
}

function createErrorMessage(text) {
    let p = document.createElement('p');
    p.innerHTML = text;
    p.classList.add('mistake');

    return p;
}

let inputs = document.querySelectorAll('input:not([type="submit"]), select');

inputs.forEach((element, index, nodelst) => {

    element.value = localStorage.getItem(element.id);

    if (index < nodelst.length - 1) {
        if (element.checked) {
            element.addEventListener('change', () => {
                localStorage.setItem(element.id, element.checked);
            })
        } else {
            element.addEventListener('change', () => {
                localStorage.setItem(element.id, element.value);
            })
        }
    }
})

let reset = document.querySelector('button[type="reset"]');

reset.addEventListener('click', () => {
    localStorage.clear();
})

let radioBox = document.querySelectorAll('input[type=radio]');

radioBox.forEach(element => {
    element.addEventListener('change', () => {
        setRadioBoxes();
    })
})

let dataRadioBox = localStorage.getItem('groupRadio');

if (dataRadioBox) {
    document.getElementById(dataRadioBox).checked = true;
}

function setRadioBoxes() {
    let radioBoxChecked = document.querySelector('input[type=radio]:checked');
    localStorage.setItem('groupRadio', radioBoxChecked.id);
}

let allCheckBoxes = document.querySelectorAll('input[type=checkbox]');

allCheckBoxes.forEach(element => {
    element.addEventListener('change', () => {
        allCheckBoxesData();
    })
})

let dataFromStorage = localStorage.getItem('groupCheckbox');
let parsedData = JSON.parse(dataFromStorage);

if (parsedData) {

    parsedData.map(element => {
        let data = document.getElementById(element);
        data.checked = true;
    })
}

function allCheckBoxesData() {
    let arr = [];
    let checkBoxesAll = document.querySelectorAll('[name="groupCheckbox"]:checked');

    if (checkBoxesAll) {
        checkBoxesAll.forEach(element => {
            arr.push(element.id);
        });

        let dataToStorage = JSON.stringify(arr);
        localStorage.setItem('groupCheckbox', dataToStorage);
    }
}

// Local Storage 2
// function formDataInLocalStorage(studentForm) {
//     studentForm.addEventListener('change', (event) => {
//         console.log(event.target);
//         let activeName = event.target.name;
//         let activeValue = event.target.value;
//         localStorage.setItem(activeName, activeValue);
//
//         // localStorage.setItem(event.target.name, event.target.value);
//     })
// }
//
// formDataInLocalStorage(form);

// ŠEŠTA UŽDUOTIS:
// 1. Sukurti pradinius duomenų masyvą, kuriame būtų bent 5 studentų duomenys (objektų formatu).
// 2. Sukurti funkciją, kuri priima šiuos duomenis ir užkrovus puslapį į ekraną iškart išveda duomenis iš šio masyvo.

let studentsList = [
    {
        firstName: 'Petras',
        secondName: 'Petrauskas',
        phoneNumber: '+37068600001',
        emailAddress: 'some@petrauskas.eu',
        studentAge: 20,
        studentExperience: 2,
        studentInformation: 'Some a lot of text',
        knowledgeRating: 8,
        studentGroup: 'First',
        studentStack: [
            'JS',
            'PHP',
            'CSS',
            'HTML'
        ]
    },
    {
        firstName: 'Jonas',
        secondName: 'Jonauskas',
        phoneNumber: '+37068600002',
        emailAddress: 'some@jonauskas.eu',
        studentAge: 23,
        studentExperience: 3,
        studentInformation: 'Some a lot of text',
        knowledgeRating: 9,
        studentGroup: 'Second',
        studentStack: [
            'PHP',
            'CSS',
            'HTML'
        ]
    },
    {
        firstName: 'Darius',
        secondName: 'Dariauskas',
        phoneNumber: '+37068600003',
        emailAddress: 'some@dariauskas.eu',
        studentAge: 19,
        studentExperience: 1,
        studentInformation: 'Some a lot of text',
        knowledgeRating: 5,
        studentGroup: 'Third',
        studentStack: [
            'HTML'
        ]
    },
    {
        firstName: 'Pranas',
        secondName: 'Pranauskas',
        phoneNumber: '+37068600004',
        emailAddress: 'some@pranauskas.eu',
        studentAge: 18,
        studentExperience: 0,
        studentInformation: 'Some a lot of text',
        knowledgeRating: 3,
        studentGroup: 'First',
        studentStack: [
            'HTML'
        ]
    },
    {
        firstName: 'Zofija',
        secondName: 'Zofijauska',
        phoneNumber: '+37068600005',
        emailAddress: 'some@zofijauska.eu',
        studentAge: 65,
        studentExperience: 50,
        studentInformation: 'Some a lot of text',
        knowledgeRating: 10,
        studentGroup: 'Best',
        studentStack: [
            'HTML',
            'C++',
            'C#',
            'JS',
            'Java',
            'Python',
            'Ruby',
            'PHP',
            'Go',
            'Swift'
        ]
    }
]

generateListInHtml(studentsList);

function generateListInHtml(data) {

    data.map((data, index, arr) => {

        let studentItem = document.createElement('div');
        studentItem.setAttribute('id', `students-item${index}`);
        studentItem.classList.add('card');
        studentItem.style.width = '380px';
        studentList.appendChild(studentItem);

        let divCard = document.createElement('div');
        divCard.classList.add('card-header');
        divCard.textContent = data.firstName + ' ' + data.secondName;
        studentItem.appendChild(divCard);

        let ul = document.createElement('ul');
        ul.classList.add('list-group', 'list-group-flush');
        ul.style = 'list-style: none';
        studentItem.appendChild(ul);

        let values = Object.values(data);
        values.map((value, which, inArr) => {
            let mark;
            if (which === 3) {
                value = '*****';
                mark = `mark${index}`;
            }
            let li = document.createElement('li');
            li.classList.add('list-group-item');
            if (mark) {
                li.classList.add(mark);
            }
            li.textContent = value;
            ul.appendChild(li);
        })

        let buttonStd = document.createElement('button');
        buttonStd.textContent = 'Rodyti asmens duomenis';
        ul.appendChild(buttonStd);

        let buttonDeleteStd = document.createElement('button');
        buttonDeleteStd.textContent = 'Ištrinti studentą';
        buttonDeleteStd.classList.add('btn', 'btn-danger');
        ul.appendChild(buttonDeleteStd);

        buttonDeleteStd.addEventListener('click', () => {
            studentItem.remove();
            divAlertDelete.textContent = 'Student ' + values[0] + ' ' + values[1] + ' successfully deleted';
            divAlertDelete.style.display = 'block';
            setTimeout(() => {
                divAlertDelete.style.display = 'none';
            }, 5000);
        });

        let dataHidden = true;

        buttonStd.addEventListener('click', () => {
            let email = document.querySelector(`.mark${index}`);
            if (dataHidden) {
                email.textContent = values[3];
                buttonStd.textContent = 'Slėpti asmens duomenis';
            } else {
                email.textContent = '*****';
                buttonStd.textContent = 'Rodyti asmens duomenis';
            }
            dataHidden = !dataHidden;
        })
    })
}

// 1. Selektinti paieškos forma javascript'e ir priskirti ją kintamąjam. +
// 2. Šiam kintamąjam pridėti event listener'į - jo tipas submit. +
// 3. Submit metu, išsaugoti duomenis, kurie įvesti paieškos formoje (text input'e).
// 4. Selektinti visus studentų elementus, juos pridedam į kintamąjį.
// 5. Leisti ciklą per studentų masyvą ir kiekvieno ciklo metu:
// 5.1. Paselektinti studento vardą.
// 5.2. Paselektinti studento pavardę.
// 5.3. Patikrinti ar varde arba pavardėje yra ieškoma frazė.
// 5.3.1. Jeigu nėra, tai reikia paslėpti studento elementą (display: none).
// 5.3.2. Jeigu yra, tai reikia parodyti studento elementą (display: block).

let filterForm = document.querySelector('.filter-form');

filterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let searchFormValue = event.target.elements.searchText.value;
    let numberOfStudents = studentList.childNodes.length;

    for (let i = 0; i < numberOfStudents; i++) {
        let isTrueFirstName = studentList.childNodes[i].textContent.includes(searchFormValue);
        let isTrueSecondName = studentList.childNodes[i].textContent.includes(searchFormValue);

        if (isTrueFirstName || isTrueSecondName) {
            studentList.childNodes[i].style.display = 'block';
        } else {
            studentList.childNodes[i].style.display = 'none';
        }
    }
})