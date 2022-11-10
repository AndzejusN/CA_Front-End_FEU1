import headerNavigation from './header.js';
import { firstLetterToUpperCase, fetchData, createDomElement, generateBootstrapCard } from './functions';

async function init() {
    await getPosts();
    await albumsList();
    headerNavigation();
}

function generatePostsList(postData) {
    let leftColumn = document.querySelector('.left-column');

    let divCard = createDomElement('div', '', `card post-id-${postData.id} card-parameters`);
    leftColumn.append(divCard);

    let divCardHeader = createDomElement('div', `Post id:${postData.id}`, 'card-header');
    divCard.append(divCardHeader)

    let ul = createDomElement('ul', '', 'list-group list-group-flush');
    divCard.append(ul);

    let liFirst = createDomElement('li', `Post title:${firstLetterToUpperCase(postData.title)}`, 'list-group-item');
    ul.append(liFirst)

    let liSecond = createDomElement('li', `Post content: ${firstLetterToUpperCase(postData.body)}`, 'list-group-item');
    ul.append(liSecond)

    let liThird = createDomElement('li', `User name: ${postData.username}`, 'list-group-item');
    ul.appendChild(liThird)
}

function addPostComments(commentsList) {

    let postById = document.querySelector(`.post-id-${commentsList.postId}`);

    let divCardComment = document.createElement('div');
    divCardComment.style.width = 'calc (100% - 50px)';
    divCardComment.style.margin = '10px';
    divCardComment.classList.add('card');
    postById.append(divCardComment);

    let divCardHeaderComment = createDomElement('div', `Comment header: ${firstLetterToUpperCase(commentsList.name)}`, 'card-header');
    divCardComment.appendChild(divCardHeaderComment);

    let ulComment = createDomElement('ul', '', 'list-group list-group-flush');
    divCardHeaderComment.appendChild(ulComment);

    let liFirstComment = createDomElement('li', `Comment content: ${firstLetterToUpperCase(commentsList.body)}`, 'list-group-item');
    ulComment.appendChild(liFirstComment);

    let liSecondComment = createDomElement('li', `Author e-mail address: ${commentsList.email}`, 'list-group-item');
    ulComment.appendChild(liSecondComment)
}

async function getPosts() {

    let res = await fetchData('https://jsonplaceholder.typicode.com/posts?_limit=10&_embed=comments&_expand=user');
    let data = res.data;

            data.map( post => {

                let dataToPost = {
                    'id': post.id,
                    'title': post.title,
                    'body': post.body,
                    'username': post.user.name
                }

                generatePostsList(dataToPost);

                let postComments = post.comments;
                postComments.map(comment => {
                    let dataComments = {
                        'postId': dataToPost.id,
                        'name': comment.name,
                        'body': comment.body,
                        'email': comment.email
                    }

                    addPostComments(dataComments);
                })
            })
        }

async function albumsList() {

let res = await fetchData('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos');

let data = res.data;

                data.map( album => {
                let albumsDataToDom = {
                    'userId': album.userId,
                    'userName' : album.user.name,
                    'albumId': album.id,
                    'title': album.title,
                    'photo': album.photos[0].thumbnailUrl
                };

                generateAlbumsList(albumsDataToDom);
            })
        }

function generateAlbumsList(albumsDataToDom) {
    let rightColumn = document.querySelector('.right-column');

    let obj = {
        header : `<strong>Albumo pavadinimas: <a href="album.html?albumid=${albumsDataToDom.albumId}">${firstLetterToUpperCase(albumsDataToDom.title)}</a></strong>`,
        list : [`Albumo id: ${albumsDataToDom.albumId}`,
                `Vartotojo id: ${albumsDataToDom.userId}`,
                `Vartotojo vardas/pavardė: ${albumsDataToDom.userName}`,
                `<img src="${albumsDataToDom.photo}">`
        ]
    }

    let result = generateBootstrapCard(obj);

    rightColumn.append(result);
}

init();