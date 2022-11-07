import headerNavigation from './header.js';
import { fetchData } from './functions';

function init() {
    getDataForm();
    headerNavigation();
}

function getDataForm() {
let form = document.querySelector('.create-user-form');

form.addEventListener('submit', (event) => {
event.preventDefault();

let name =  event.target.elements['user-name'].value;
let username =  event.target.elements['user-nickname'].value;
let email =  event.target.elements['user-email'].value;
let street =  event.target.elements['user-address-street'].value;
let suite = event.target.elements['user-address-number'].value;
let city = event.target.elements['user-address-city'].value;
let zipcode = event.target.elements['user-address-zipcode'].value;
let lat = event.target.elements['user-address-geo-lat'].value;
let lng = event.target.elements['user-address-geo-lon'].value;
let phone = event.target.elements['user-phone'].value;
let website = event.target.elements['user-website'].value;
let companyName = event.target.elements['user-company-name'].value;
let companyCatchPhrase = event.target.elements['user-company-catchphrase'].value;
let companyBs = event.target.elements['user-company-bs'].value;

let data = {
    name,
    username,
    email,
    address : {
        street,
        suite,
        city,
        zipcode,
        geo : {
                lat,
                lng
        }
    },
    phone,
    website,
    company : {
                name : companyName,
                catchPhrase : companyCatchPhrase,
                bs : companyBs
    }
}

form.reset();

postData(data);
 
})
}

async function postData(data) {

let feedbackCreateUser = await fetchData('https://jsonplaceholder.typicode.com/users', data, 'POST');

let container = document.querySelector('.container');

let rigthColumn = document.querySelector('.right-column');

rigthColumn.innerHTML = '';

let response = document.createElement('h6');

    response.innerText = `User name:  ${feedbackCreateUser.id};
                          Post title: ${feedbackCreateUser.name};
                          Post text: ${feedbackCreateUser.email};`;

    rigthColumn.append(response);
}

init();