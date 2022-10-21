let form = document.querySelector('.contact-form');
let filterForm = document.querySelector('.filter-form');
let output = document.querySelector('.info-output');
let volume = document.querySelector('#volume');
let reset = document.querySelector('button[type=reset]');
let radioBox = document.querySelectorAll('input[type=radio]');

let data = [];
let keysLocalStorage = [
    'fname',
    'lname',
    'tel',
    'mail',
    'age',
    'experience',
    'groupRadio',
    'groupCheckbox',
    'volume'];

let allFields = [
    'Vardas',
    'Pavardė',
    'Telefonas',
    'Elektr.pašto adresas',
    'Amžius',
    'Patirtis',
    'Aprašymas',
    'Grupė',
    'Žinias',
    'Įvertinimas'
];


let studentsListData = [
    {
        firstName: 'Petras',
        secondName: 'Petrauskas',
        phoneNumber: '+37068600001',
        emailAddress: 'some@petrauskas.eu',
        studentAge: 20,
        studentExperience: 2,
        studentInformation: 'Some a lot of text',
        studentGroup: 'first',
        studentStack: [
            'JS',
            'PHP',
            'CSS',
            'HTML'
        ],
        knowledgeRating: 8
    },
    {
        firstName: 'Jonas',
        secondName: 'Jonauskas',
        phoneNumber: '+37068600002',
        emailAddress: 'some@jonauskas.eu',
        studentAge: 23,
        studentExperience: 3,
        studentInformation: 'Some a lot of text',
        studentGroup: 'second',
        studentStack: [
            'PHP',
            'CSS',
            'HTML'
        ],
        knowledgeRating: 9
    },
    {
        firstName: 'Darius',
        secondName: 'Dariauskas',
        phoneNumber: '+37068600003',
        emailAddress: 'some@dariauskas.eu',
        studentAge: 19,
        studentExperience: 1,
        studentInformation: 'Some a lot of text',
        studentGroup: 'third',
        studentStack: [
            'HTML'
        ],
        knowledgeRating: 5
    },
    {
        firstName: 'Pranas',
        secondName: 'Pranauskas',
        phoneNumber: '+37068600004',
        emailAddress: 'some@pranauskas.eu',
        studentAge: 18,
        studentExperience: 0,
        studentInformation: 'Some a lot of text',
        studentGroup: 'first',
        studentStack: [
            'HTML'
        ],
        knowledgeRating: 3
    },
    {
        firstName: 'Zofija',
        secondName: 'Zofijauska',
        phoneNumber: '+37068600005',
        emailAddress: 'some@zofijauska.eu',
        studentAge: 65,
        studentExperience: 50,
        studentInformation: 'Some a lot of text',
        studentGroup: 'second',
        studentStack: [
            'HTML',
            'C++',
            'C#',
            'JS',
            'Java',
            'Python',
            'Ruby',
            'PHP',
        ],
        knowledgeRating: 10
    }
];

let studentList = document.createElement('div');
studentList.setAttribute('id', 'students-list');
studentList.style.display = 'flex';
studentList.style.flexWrap = 'wrap';
studentList.style.gap = '20px';
studentList.style.width = '100%';
output.appendChild(studentList);

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
        let groupRadio = document.querySelector('input[name=group]:checked').value;
        let groupCheckbox = document.querySelectorAll('input[name=groupCheckbox]:checked');
        let volume = document.querySelector('input[name=volume]').value;

        let validation = document.querySelectorAll('.required');

        let response = formValidation(validation);

        if (response) {
            return;
        }

        let groupCheckboxToData = [...groupCheckbox].map((element, index) => {
            if (index !== 0) {
                return ' ' + element.value;
            } else {
               return element.value
            }
        });

        let dataToStorage =
            {
                firstName: fname,
                secondName: lname,
                phoneNumber: tel,
                emailAddress: mail,
                studentAge: age,
                studentExperience: experience,
                studentInformation: text,
                studentGroup: groupRadio,
                studentStack: groupCheckboxToData,
                knowledgeRating: volume
            }

        let dataFromLocalStorage = getStudentsDataFromLocalstorage();

        dataFromLocalStorage.unshift(dataToStorage);

        setStudentsDataToLocalstorage(dataFromLocalStorage);

        if (studentList.children.length > 0) {
            while (studentList.lastElementChild) {
                studentList.removeChild(studentList.lastElementChild);
            }
        }

        generateListInHtml(dataFromLocalStorage);

        alertSwitch();

        divAlert.textContent = 'Student created successfully' + ' ' + fname + ' ' + lname;

        form.reset();
        resetLocalStorage();

        window.scrollTo(0, document.body.scrollHeight / 4);

        setTimeout(alertSwitch, 5000);
    }
)

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

volume.addEventListener('change', () => {
    let volumeResult = document.querySelector('.volume-result');
    volumeResult.textContent = volume.value;
})

function createErrorMessage(text) {
    let p = document.createElement('p');
    p.innerHTML = text;
    p.classList.add('mistake');

    return p;
}

let inputs = document.querySelectorAll('input:not([type=radio]):not([type=checkbox]), select');
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

reset.addEventListener('click', () => {
    resetLocalStorage();
})

function resetLocalStorage() {
    keysLocalStorage.forEach(value => {
        localStorage.removeItem(`${value}`);
    })
}

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

setStudentsDataToLocalstorage(studentsListData);

let isDataInLocalStorage = getStudentsDataFromLocalstorage();

if (!isDataInLocalStorage) {
    localStorage.setItem('student-data', dataToLocalStorage);
}

function getStudentsDataFromLocalstorage() {
    let studentsListRaw = localStorage.getItem('student-data');
    return JSON.parse(studentsListRaw);
}

function setStudentsDataToLocalstorage(data) {
    localStorage.setItem('student-data', JSON.stringify(data));
}

let studentsList = getStudentsDataFromLocalstorage();

generateListInHtml(studentsList);

function generateListInHtml(data) {

    data.map((data, index) => {

        let studentItem = document.createElement('div');
        studentItem.setAttribute('id', `students-card-${index}`);
        studentItem.classList.add('card');
        studentItem.style.width = '380px';
        studentList.appendChild(studentItem);

        let divCard = document.createElement('div');
        divCard.classList.add('card-header');
        divCard.textContent = data.firstName + ' ' + data.secondName;
        studentItem.appendChild(divCard);

        let ul = document.createElement('ul');
        ul.classList.add('list-group', 'list-group-flush');
        ul.classList.add('students-item-' + index);
        ul.style.listStyle = 'none';
        studentItem.appendChild(ul);

        let values = Object.values(data);
        values.map((value, whichIx) => {
            let mark;
            if (whichIx === 3) {
                value = '*****';
                mark = `mark${index}`;
            }
            let li = document.createElement('li');
            li.classList.add('list-group-item');
            if (mark) {
                li.classList.add(mark);
            }
            li.innerHTML = allFields[whichIx] + ': ' + '<span class=\"' + 'item-' + whichIx + '\">' + value + '</span>';
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

            let dataFromLocalStorage = JSON.parse(localStorage.getItem('student-data'));

            let dataToLocalStorage = dataFromLocalStorage.filter(value => {
                if (value.firstName !== values[0] && value.secondName !== values[1]) {
                    return value;
                }
            })
            localStorage.setItem('student-data', JSON.stringify(dataToLocalStorage));
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

function filterByParameter() {
    filterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let searchByItem = document.querySelector('.search-item').value;

        let searchFormValue = event.target.elements.searchText.value.toLowerCase();
        let numberOfStudents = studentList.childNodes.length;

        for (let i = 0; i < numberOfStudents; i++) {

            let selector = '.students-item-' + i;
            let studentFirstName = document.querySelector(`${selector}`).childNodes[0].textContent.toLowerCase();
            let studentLastName = document.querySelector(`${selector}`).childNodes[1].textContent.toLowerCase();
            let studentAge = document.querySelector(`${selector}`).childNodes[4].textContent.toLowerCase();
            let studentGroup = document.querySelector(`${selector}`).childNodes[7].textContent.toLowerCase();
            let studentGrade = document.querySelector(`${selector}`).childNodes[9].textContent.toLowerCase();

            let isTrueFirstName = studentFirstName.includes(searchFormValue);
            let isTrueSecondName = studentLastName.includes(searchFormValue);
            let isTrueAge = studentAge.includes(searchFormValue);
            let isTrueGroup = studentGroup.includes(searchFormValue);
            let isTrueGrade = studentGrade.includes(searchFormValue);

            if (searchByItem === 'firstName' && isTrueFirstName) {
                studentList.childNodes[i].style.display = 'block';
            } else if (searchByItem === 'secondName' && isTrueSecondName) {
                studentList.childNodes[i].style.display = 'block';
            } else if (searchByItem === 'age' && isTrueAge) {
                studentList.childNodes[i].style.display = 'block';
            } else if (searchByItem === 'group' && isTrueGroup) {
                studentList.childNodes[i].style.display = 'block';
            } else if (searchByItem === 'grade' && isTrueGrade) {
                studentList.childNodes[i].style.display = 'block';
            } else {
                studentList.childNodes[i].style.display = 'none';
            }
        }
    })
}

filterByParameter();

function filterButtonDisable() {
    let submitButtonFilter = document.querySelector('.filter-submit-button');
    submitButtonFilter.disabled = true;

    filterForm.addEventListener('change', (e) => {
        submitButtonFilter.disabled = !(e.target.value.length > 0 && e.target.value !== 0);
    })
}

filterButtonDisable();

document.querySelector('.filter-reset-button').addEventListener('click', () => {
    document.location.reload();
})