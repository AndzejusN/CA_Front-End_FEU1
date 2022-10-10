// PIRMA DALIS:
//     Sukurti kontaktų formą.
// 1. Kontaktų formoje turi būti šie laukeliai:
//     1. Tekstinis laukelis vardui (privalomas).
// 2. Tekstinis laukelis pavardei (privalomas).
// 3. Skaičiaus laukelis amžiui (privalomas).
// 4. Laukelis įvesti telefono numerį (neprivalomas).
// 5. Laukelis įvesti el. paštą (privalomas).
//     Ją pridavus (submit):
// 2. Žemiau kontaktų formos turi būtų atvaizduoti visi duomenys, pvz. „Amžius: 25m.".
// 3. Kontaktų forma turi išsivalyti.
// 4. Šalia kiekvieno įvesties (input) elemento, pridėti label elementą, kuris žymi laukelio pavadinimą.

let data = [];
let form = document.querySelector('form');
let output = document.querySelector('.info-output');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let fname = document.querySelector('input[name=fname]').value;
    let lname = document.querySelector('input[name=lname]').value;
    let tel = document.querySelector('input[name=tel]').value;
    let mail = document.querySelector('input[name=mail]').value;
    let age = document.querySelector('input[name=age]').value;
    let experience = document.querySelector('input[name=experience]').value;
    let text = document.querySelector('#text').value;
    let volume = document.querySelector('input[name=volume]').value;
    let group = document.querySelector('input[name=group]:checked').value;

    data.push({
        fname,
        lname,
        tel,
        mail,
        age,
        experience,
        text,
        volume,
        group
    });

    generateHtml(data);

    form.reset();
    window.scrollTo(0, document.body.scrollHeight);
})

let volume = document.querySelector('#volume');
let volumeResult = document.querySelector('.volume-result');

volume.addEventListener('change', () => {
    volumeResult.textContent = volume.value;
})

let studentList = document.createElement('div');
studentList.setAttribute('id', 'students-list');
studentList.style = 'display: flex';
studentList.style = 'flex-wrap: wrap';
studentList.style.width = '100%';
output.appendChild(studentList);

function generateHtml(data) {
    let studentItem = document.createElement('div');
    studentItem.setAttribute('id', 'students-item');
    studentItem.classList.add('card');
    studentItem.style.width = '300px';
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

    values.map(value => {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = value;
        ul.appendChild(li);
    })
}