let container = document.querySelector('.container');

let divWrapperFirst = document.createElement('div');
divWrapperFirst.style.width = '800px';
container.append(divWrapperFirst);

let buttonRandom = document.createElement('button');
let divJoke = document.createElement('div');
divJoke.style.minHeight = '100px';

divJoke.style.display = 'grid';
divJoke.style.placeContent = 'center';

buttonRandom.textContent = 'New Random Joke';

divWrapperFirst.append(divJoke);
divWrapperFirst.append(buttonRandom);

let hr = document.createElement('hr');
container.append(hr);

buttonRandom.addEventListener('click', () => {
    fetchDataRandom();
})

function fetchDataRandom() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((data) => {
            divJoke.textContent = data.value;
        });
}

fetchDataRandom();

let divWrapperSecond = document.createElement('div');
divWrapperSecond.style.width = '200px';
divWrapperSecond.style.minHeight = '100px';
divWrapperSecond.style.display = 'flex';
divWrapperSecond.style.alignItems = 'center';
divWrapperSecond.style.flexWrap = 'wrap';
container.append(divWrapperSecond);

let category;

let select = document.createElement('select');
divWrapperSecond.append(select);

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

let buttonByCategory = document.createElement('button');
buttonByCategory.textContent = 'New Joke by category';
divWrapperSecond.append(buttonByCategory);


buttonByCategory.addEventListener('click', () => {
    fetchDataByCategory(category);
})

function fetchDataByCategory(category = 'animal') {
    fetch('https://api.chucknorris.io/jokes/random?category=' + category)
        .then((response) => response.json())
        .then((data) => {
            divJoke.textContent = data.value;
        });
}

let hrTwo = document.createElement('hr');
container.append(hrTwo);


// 3. Sukurti galimybę ieškoti juokelių pagal užklausos frazę.

let divWrapperThird = document.createElement('div');
divWrapperThird.style.width = '200px';
divWrapperThird.style.minHeight = '100px';
divWrapperThird.style.display = 'flex';
divWrapperThird.style.alignItems = 'center';
divWrapperThird.style.flexWrap = 'wrap';
container.append(divWrapperThird);


let inputSearch = document.createElement('input');
inputSearch.setAttribute('type', 'text');
divWrapperThird.append(inputSearch);

let buttonSubmit = document.createElement('button');
buttonSubmit.textContent = 'Search';
divWrapperThird.append(buttonSubmit);

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