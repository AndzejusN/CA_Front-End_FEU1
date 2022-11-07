import headerNavigation from './header.js';
import { fetchData, firstLetterToUpperCase } from './functions';

function init() {
    SetDataSelect();
    getDataForm();
    headerNavigation();
    }

// 13.1. Prie kiekvieno post'o pridėti nuorodą.
// 13.1.1. Nuorodos tekstas: „Redaguoti" arba bet koks kitas jūsų pasirinktas.
// 13.1.2. Nuoroda turi nuvestį į edit-post.html puslapį.
// 13.1.3. Nuoroda turi perduoti redaguojamo post'o ID.

// 13.2. Sukurti puslapį edit-post.html
// 13.2.1. Iš nuorodos išimti post'o ID.
// 13.2.2. Iš API gauti visą post'o informaciją pagal post'o ID.

// 13.3. Puslapyje sukurti formą. Ji turės:
// 13.3.1. Input elementą posto pavadinimui įvesti.
// 13.3.2. Textarea elementą posto turiniui įvesti.
// 13.3.3. Select elementą, kuriame būtų atvaizduojami visų vartotojų vardai (option elementų value naudoti vartotojų id).

// 13.3.4. Iš API gautais duomenimis (13.2.2. užduotis) užpildyti formą.

// 13.4. Formos submit metu:
// 13.4.1. Iš formos duomenų suformuluoti objektą pagal API reikalavimus.
// 13.4.2. Su šiais duomenimis išsiųsti PUT užklausą pagal API reikalavimus.
// 13.4.3. Iš užklausos atsakymo gautų duomenų suformoluoti HTML elementą ir juos išvesti į ekraną.

async function SetDataSelect() {

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
  let form = document.querySelector('.crud-form');

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
let response = document.createElement('h5');
    response.innerText = '';
    response.innerText = `User name:  ${userData.name};
                          Post title: ${firstLetterToUpperCase(json.title)};
                          Post text: ${firstLetterToUpperCase(json.body)};`;

            container.append(response);
}

init();