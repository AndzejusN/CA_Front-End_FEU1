import headerNavigation from './header.js';
import { firstLetterToUpperCase, waitingForDataSpinner, getSearchPhrase, createDomElement, fetchData } from './functions';

async function init(){

    const inputSearch = getSearchPhrase('inputSearch');
    await searchBy(inputSearch);
    fromSearch();
    headerNavigation();
    waitingForDataSpinner();
}

function fromSearch() {

let innerSearchForm = document.querySelector('#search-form-inner');

innerSearchForm.addEventListener('submit', (e) => {
e.preventDefault();
waitingForDataSpinner();   
let searchValue =  e.target.innerInput.value;
searchBy(searchValue);
innerSearchForm.reset(); 
waitingForDataSpinner();  
})
}

async function searchBy(inputSearch) {    

let firstColumn = document.querySelector('.first-column');
let secondColumn = document.querySelector('.second-column');
let thirdColumn = document.querySelector('.third-column');
let fourthColumn = document.querySelector('.fourth-column');

await searchFetch(firstColumn, 'users', inputSearch);
await searchFetch(secondColumn, 'posts', inputSearch);
await searchFetch(thirdColumn, 'albums', inputSearch);
await searchFetch(fourthColumn, 'comments', inputSearch); 
}

async function searchFetch (column, searchBy, parameter) {

let cuttedLastSimbol = searchBy.slice(0, searchBy.length - 1);

let data = await fetchData(`https://jsonplaceholder.typicode.com/${searchBy}?q=${parameter}`)

column.innerHTML = '';

if (data.length < 1) {
    let h6 = document.createElement('h6');
    h6.innerHTML = '';
    let textToHtml = 'No data in ' + searchBy + ' was found';
    h6.innerHTML = textToHtml;
    column.append(h6);

} else {
    data.map( element => {

    if (element.name){
        element.title = element.name;
    }

    let divCard = createDomElement('div', '', 'card card-parameters mx-auto dom-created-data');
    column.append(divCard);

    let textToHtmlHeader = `Title: <a href="${cuttedLastSimbol}.html?${cuttedLastSimbol}id=${element.id}">${firstLetterToUpperCase(element.title)}</a>`;
    let divCardHeader = document.createElement('div', textToHtmlHeader, 'card-header');
    divCard.appendChild(divCardHeader);

    let ul = createDomElement('ul', '', 'list-group list-group-flush');
    divCard.appendChild(ul);

    let liPostId = createDomElement('li', `Id: ${element.id}`, 'list-group-item')
    ul.appendChild(liPostId);
        })
    }
}

init();