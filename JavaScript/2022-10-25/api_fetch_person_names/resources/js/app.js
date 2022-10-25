let form = document.querySelector('.form-person-name');
let result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    result.innerHTML = '';
    e.preventDefault();
    let searchName = e.target.name.value;
    fetchAge(searchName);
    setTimeout(fetchNationality, 500, searchName);
    setTimeout(fetchGender, 1000, searchName);
})

function fetchAge(Name) {
    fetch('https://api.agify.io?name=' + Name)
        .then(res => res.json())
        .then(data => {
            let age = data.age;
            result.innerHTML += '<p> Vardas: ' + Name + '.</p>';
            result.innerHTML += '<p> Man ' + age + ' metai.</p>';
        });
}

function fetchNationality(Name) {
    fetch('https://api.nationalize.io?name=' + Name)
        .then(res => res.json())
        .then(data => {
            let nationality = data.country[0].country_id;
            result.innerHTML += '<p> Aš iš: ' + nationality + '.</p>';
        })
}

function fetchGender(Name) {
    fetch('https://api.genderize.io?name=' + Name)
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