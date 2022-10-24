let container = document.querySelector('.container');
let button = document.createElement('button');
let divJoke = document.createElement('div');
button.textContent = 'New Joke';
container.append(divJoke);
container.append(button);

let category = 'animal';

button.addEventListener('click', () => {
    fetchData(category);
})

function fetchData(category = 'animal') {
    fetch('https://api.chucknorris.io/jokes/random?category=' + category)
        .then((response) => response.json())
        .then((data) => {
            divJoke.textContent = data.value;
        });
}

fetchData();

let select = document.createElement('select');
container.append(select);

fetch('https://api.chucknorris.io/jokes/categories')
    .then((response) => response.json())
    .then((categories) => {
        categories.forEach((category, index) => {
            let option = document.createElement('option');
            option.classList.add = 'opt-' + index;
            option.textContent = category;
            option.value = category;
            select.append(option);
        })
    })

select.addEventListener('change', () => {
    category = select.value;
})

// 3. Sukurti galimybę ieškoti juokelių pagal užklausos frazę.

let inputSearch = document.createElement('input');
inputSearch.setAttribute('type', 'text');
container.append(inputSearch);

let buttonSubmit = document.createElement('button');
buttonSubmit.textContent = 'Search';
container.append(buttonSubmit);

buttonSubmit.addEventListener('click', () => {
    let query = inputSearch.value;
    bySearchText(query);
})

function bySearchText(query) {
    console.log(query);
    fetch('https://api.chucknorris.io/jokes/search?query=' + query)
        .then((response) => response.json())
        .then((joke) => {
            let random = Math.floor(Math.random() * joke.result.length);
            divJoke.textContent = joke.result[random].value;
        });
}