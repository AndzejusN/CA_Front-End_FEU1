import headerNavigation from './header.js';
import { fetchData, generateBootstrapCard } from './functions';

async function init(){
    await userPageDom();
    headerNavigation();
}

async function userPageDom() {

    let data = await fetchData('https://jsonplaceholder.typicode.com/users');
    
            data.map(user => {
                let address = user.address.street + ' ' + user.address.suite + ' ' + user.address.zipcode + ', ' + user.address.city;

                let userDataToDom = {
                    'id' : user.id,
                    'name': user.name,
                    'username': user.username,
                    'email': user.email,
                    'address': {
                        'address': address,
                        'lat': user.address.geo.lat,
                        'lng': user.address.geo.lng
                    },
                    'phone': user.phone,
                    'website': user.website,
                    'company': user.company.name
                }
                generatePostsList(userDataToDom);
            })
        }

function generatePostsList(userDataToDom) {
    let container = document.querySelector('.container');

    let obj = {
        header : `<a href="user.html?userid=${userDataToDom.id}">${userDataToDom.name}</a>`,
        list : [userDataToDom.username,
                userDataToDom.email,
                `<a href="https://maps.google.com/?q=${userDataToDom.address.lat},${userDataToDom.address.lng}">${userDataToDom.address.address}</a>`,
                userDataToDom.phone,
                userDataToDom.website,
                userDataToDom.company                
        ]
    }

    let result = generateBootstrapCard(obj);

    container.append(result);
}

init();