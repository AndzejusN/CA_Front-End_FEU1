import headerNavigation from './header.js';
import { generateBootstrapCard, firstLetterToUpperCase, fetchData, getSearchPhrase, createDomElement } from './functions';

function init() {
    let postId = getSearchPhrase('postid');
    setDataUsersNamesSelect();
    headerNavigation();
    getData(postId);
    getDataForm(postId);
}

async function getData(postId){

if(!postId){
    let error = createDomElement('h5', 'Something went wrong, try one more time');
    document.body.prepend(error);
}

let data = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user`);

setDataUsersNamesSelect(data.user.id)

document.querySelector('#post-name').value = data.title;
document.querySelector('#post-body').value = data.body;
}

async function setDataUsersNamesSelect(userId) {

    let select = document.getElementById('user-id');
    
    let data = await fetchData('https://jsonplaceholder.typicode.com/users', )
    data.map(user => {
        let option = document.createElement('option');
        option.textContent = user.name;
        option.value = user.id;
        select.append(option);

        if (user.id === userId){
            option.selected = true;
        }
    })
}

function getDataForm(postId) {
    let form = document.querySelector('.edit-form');
    
    form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    let postName =  event.target.elements['post-name'].value;
    let postBody =  event.target.elements['post-body'].value;
    let selectUserId =  event.target.elements['user-id'].value;
    
    let data = {
        id : postId,
        title : postName,
        body: postBody,
        userId: selectUserId,
    }
    
    let response = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`, data, 'PUT');
    
    infoToHtml(response);

    form.reset();     
    })
}
 
function infoToHtml(responseData){
    let rigthColumn = document.querySelector('.right-column');

    rigthColumn.innerHTML = '';

let response = document.createElement('h6');

    response.innerText = `Post id:  ${responseData.id};
                          User id: ${responseData.userId};
                          Post title: ${firstLetterToUpperCase(responseData.title)};
                          Post text: ${firstLetterToUpperCase(responseData.body)};`;

    rigthColumn.append(response);
}

init();