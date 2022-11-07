import headerNavigation from './header.js';
import { getSearchPhrase, fetchData, generateBootstrapCard } from './functions';

async function init() {
    const userId = getSearchPhrase ('userid');
    await userPageDom(userId);
    headerNavigation();
}

async function userPageDom(id = 1) {
    let userData = await fetchData(`https://jsonplaceholder.typicode.com/users/${id}`);

            let address = userData.address.street + ' ' + userData.address.suite + ' ' + userData.address.zipcode + ', ' + userData.address.city;

            let userDataToDom = {
                'name': userData.name,
                'username': userData.username,
                'email': userData.email,
                'address': {
                    'address': address,
                    'lat': userData.address.geo.lat,
                    'lng': userData.address.geo.lng
                },
                'phone': userData.phone,
                'website': userData.website,
                'company': userData.company.name
            }

            generatePostsList(userDataToDom);
        }

function generatePostsList(userDataToDom) {
    let container = document.querySelector('.container');

    let obj = {
        header : `User name: ${userDataToDom.name}`,
        list : [ `User full name: ${userDataToDom.username}`,
                userDataToDom.email,
                `<a href="https://maps.google.com/?q=${userDataToDom.address.lat},${userDataToDom.address.lng}">${userDataToDom.address.address}</a>`,
                `User phone: ${userDataToDom.phone}`,
                `User website: ${userDataToDom.website}`,
                `User job name: ${userDataToDom.company}`
                ]
            }

    let result = generateBootstrapCard(obj);

    container.append(result);
}

init();