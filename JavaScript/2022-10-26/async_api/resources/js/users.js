import headerNavigation from './header.js';
import { fetchData, generateBootstrapCard, getSearchPhrase, generatePaginationToDom} from './functions';

async function init(){
    let userId = getSearchPhrase('userId');
    await userPageDom(userId);
    headerNavigation();
}

async function userPageDom(userId) {

    let container = document.querySelector('.container');
    let currentPage = getSearchPhrase('_page') ? getSearchPhrase('_page') : 1;
    let limitPage = getSearchPhrase('_limit');

    let data = {};

    if (userId) {
      data = await fetchData(`https://jsonplaceholder.typicode.com/users?userId=${userId}`);
    } else {
      data = await fetchData(`https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${limitPage}`);
    }

    let source = `https://jsonplaceholder.typicode.com/users`;

    let numberPerPage = 5;

    let dataToPagination = {
        currentPage,
        appendDomTag : container,
        source,
        numberPerPage
    }

    await generatePaginationToDom(dataToPagination);
    
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
                userDataToDom.company,
                `<a href="edit-user.html?userid=${userDataToDom.id}">Edit user information</a>`     
        ]
    }

    let result = generateBootstrapCard(obj);

    container.append(result);
}

init();