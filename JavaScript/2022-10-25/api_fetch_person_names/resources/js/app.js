let form = document.querySelector('.form-person-name');
let result = document.querySelector('.result');
let container = document.querySelector('.container');

form.addEventListener('submit', (e) => {
    result.innerHTML = '';
    e.preventDefault();
    let searchName = e.target.name.value;
    fetchAge(searchName);
    setTimeout(fetchNationality, 500, searchName);
    setTimeout(fetchGender, 1000, searchName);
})

function fetchAge(name) {
    fetch('https://api.agify.io?name=' + name)
        .then(res => res.json())
        .then(data => {
            let age = data.age;
            result.innerHTML += '<p> Vardas: ' + name + '.</p>';
            result.innerHTML += '<p> Man ' + age + ' metai.</p>';
        });
}

function fetchNationality(name) {
    fetch('https://api.nationalize.io?name=' + name)
        .then(res => res.json())
        .then(data => {
            let nationality = data.country[0].country_id;
            result.innerHTML += '<p> Aš iš: ' + nationality + '.</p>';
            flagImg(nationality);
        })
}

function fetchGender(name) {
    fetch('https://api.genderize.io?name=' + name)
        .then(res => res.json())
        .then(data => {
            let who;
            if (data.gender === 'male') {
                who = 'vyras';
            } else {
                who = 'moteris';
            }
            result.innerHTML += '<p> Ir aš ' + who + '.</p>';
        })
}

function flagImg(flagCode) {
    let photoDiv = document.createElement('div');
    photoDiv.innerHTML = '<img src="https://countryflagsapi.com/png/' + flagCode + '" alt="Flag picture">';
    container.append(photoDiv);
}