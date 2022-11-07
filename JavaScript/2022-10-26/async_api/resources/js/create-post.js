import headerNavigation from './header.js';
import { fetchData, firstLetterToUpperCase } from './functions';

function init() {
    setDataSelect();
    getDataForm();
    headerNavigation();
}

async function setDataSelect() {

let select = document.getElementById('user-id');

let data = await fetchData('https://jsonplaceholder.typicode.com/users', )
data.map(user => {
    let option = document.createElement('option');
    option.textContent = user.name;
    option.value = user.id;
    select.append(option);
    })
}

function getDataForm() {
let form = document.querySelector('.create-form');

form.addEventListener('submit', (event) => {
event.preventDefault();

let postName =  event.target.elements['post-name'].value;
let postBody =  event.target.elements['post-body'].value;
let selectUserId =  event.target.elements['user-id'].value;

let data = {
   title : postName,
   body: postBody,
   userId: selectUserId,
}

form.reset();

postData(data);
 
})
}

async function postData(data) {

let json = await fetchData('https://jsonplaceholder.typicode.com/posts', {title: data.title, body: data.body, userId: data.userId});

let container = document.querySelector('.container');

let userData = await fetchData(`https://jsonplaceholder.typicode.com/users/${json.userId}`);

let rigthColumn = document.querySelector('.right-column');

rigthColumn.innerHTML = '';

let response = document.createElement('h6');

    response.innerText = `User name:  ${userData.name};
                          Post title: ${firstLetterToUpperCase(json.title)};
                          Post text: ${firstLetterToUpperCase(json.body)};`;

    rigthColumn.append(response);
}

init();