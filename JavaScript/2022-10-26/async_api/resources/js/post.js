// KOMENTARAI:
// 14.1.1. Po posto komentarais, sukurti formą, kurioje būtų galima sukurti naują komentarą.
// 14.1.2. Sukurtą komentarą nusiųsti į API (POST metodas).
// 14.1.3. Iš API gautą rezultatą pridėti prie ankstesnių komentarų.

import headerNavigation from './header.js';
import { getSearchPhrase, firstLetterToUpperCase, fetchData, createDomElement } from './functions';

async function init(){
    const inputSearch = getSearchPhrase('postid');
    await getOnePost(inputSearch);
    await formCreatePostComment(inputSearch);
    headerNavigation();
}

async function getOnePost(post = 1) {

    let res = await fetchData(`https://jsonplaceholder.typicode.com/posts/${post}/?_expand=user&_embed=comments`);
    let postData = res.data;


            let postsDataToDom = {
                'userId': postData.userId,
                'postId': postData.id,
                'title': postData.title,
                'body': postData.body,
                'username': postData.user.name
            };

            generatePostsList(postsDataToDom)

            let comments = postData.comments;
            comments.map(comment => {
                let commentList = {
                    'id': comment.id,
                    'name': comment.name,
                    'email': comment.email,
                    'body': comment.body
                }

                addPostComments(commentList);
            })
        }

function generatePostsList(postsDataToDom) {
    let leftColumn = document.querySelector('.left-column');

    let divCard = createDomElement('div', '', `card card-parameters post-id-${postsDataToDom.id}`);
    leftColumn.append(divCard);

    let headerTextToHtml = `Post title: <a href="#">${firstLetterToUpperCase(postsDataToDom.title)}</a>`;
    let divCardHeader = createDomElement('div', headerTextToHtml, 'card-header');
    divCard.appendChild(divCardHeader)

    let ul = createDomElement('ul', '', 'list-group list-group-flush');
    divCard.appendChild(ul);

    let liUsername = createDomElement('li', `Post content: ${firstLetterToUpperCase(postsDataToDom.body)}`, 'list-group-item');
    ul.appendChild(liUsername)

    let liPostId = createDomElement('li', `Post id: ${postsDataToDom.postId}`, 'list-group-item');
    ul.appendChild(liPostId)

    let liUserId = createDomElement('li', `User id: ${postsDataToDom.userId}`, 'list-group-item');
    ul.appendChild(liUserId);

    let listTextToHtml =`User name: <a href="user.html?userid=${postsDataToDom.userId}">${postsDataToDom.username}</a>`;
    let liUserName = createDomElement('li', listTextToHtml, 'list-group-item');
    ul.appendChild(liUserName);

    let liUserAllPosts = createDomElement('li', `<a href="posts.html">Kiti autoriaus įrašai</a>`, 'list-group-item');
    ul.appendChild(liUserAllPosts);
}

function addPostComments(commentsList) {

    let postById = document.querySelector(`.post-id-${commentsList.postId}`);

    let divCardComment = document.createElement('div');
    divCardComment.style.width = 'calc (100% - 50px)';
    divCardComment.style.margin = '10px';
    divCardComment.classList.add('card');
    postById.append(divCardComment);

    let divCardHeaderComment = createDomElement('div', commentsList.name, 'card-header');
    divCardComment.appendChild(divCardHeaderComment)

    let ulComment = createDomElement('ul', '', 'list-group list-group-flush');
    divCardHeaderComment.appendChild(ulComment);

    let liFirstComment = createDomElement('li', firstLetterToUpperCase(commentsList.body), 'list-group-item');
    ulComment.appendChild(liFirstComment)

    let liSecondComment = createDomElement('li', commentsList.email, 'list-group-item');
    ulComment.appendChild(liSecondComment)
}


async function formCreatePostComment(postId){


let formCreateComment = document.querySelector('.comment-form');

formCreateComment.addEventListener('submit', async (event) => {
    event.preventDefault();

    let name = event.target.elements['comment-name'].value;
    let email = event.target.elements['comment-email'].value;
    let body = event.target.elements['comment-body'].value;

    let data = {
        postId,
        name,
        email,
        body,
    };

    let res = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, data, 'POST');
    let response = res.data;

    let commentList = {
            'id': response.id,
            'name': response.name,
            'email': response.email,
            'body': response.body
    }

    addPostComments(commentList);

    formCreateComment.reset();
})
}

init();