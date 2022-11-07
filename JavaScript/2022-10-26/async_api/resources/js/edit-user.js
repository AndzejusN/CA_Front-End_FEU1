import headerNavigation from './header.js';
import { fetchData , getSearchPhrase } from './functions';

function init() {
    let form = document.querySelector('.edit-user-form');
    let userId = getSearchPhrase('userid');
    setDataForm(userId, form);
    getDataForm(form, userId);
    headerNavigation();
}

async function setDataForm(userId, form){

let userInformation = await fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`);

let {name, username, email, address: { street, suite, city, zipcode, geo : { lat , lng }}, phone, website} = userInformation;

let companyName = userInformation.company.name;
let companyCatchPhrase = userInformation.company.catchPhrase;
let companyBs = userInformation.company.bs;

form.elements['user-name'].value = name;
form.elements['user-nickname'].value = username;
form.elements['user-email'].value = email;
form.elements['user-address-street'].value = street;
form.elements['user-address-number'].value = suite;
form.elements['user-address-city'].value = city;
form.elements['user-address-zipcode'].value = zipcode;
form.elements['user-address-geo-lat'].value = lat;
form.elements['user-address-geo-lon'].value = lng;
form.elements['user-phone'].value = phone;
form.elements['user-website'].value = website;
form.elements['user-company-name'].value = companyName;
form.elements['user-company-catchphrase'].value = companyCatchPhrase;
form.elements['user-company-bs'].value = companyBs;
}

function getDataForm(form, userId) {

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

postData(data, userId);

// form.reset(); 
})
}

async function postData(data, userId) {

let feedbackEditUser = await fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`, data, 'PATCH');

let rigthColumn = document.querySelector('.right-column');

rigthColumn.innerHTML = '';

let response = document.createElement('h6');

    response.innerText = `User name:  ${feedbackEditUser.id};
                          Post title: ${feedbackEditUser.name};
                          Post text: ${feedbackEditUser.email};`;

    rigthColumn.append(response);
}

init();