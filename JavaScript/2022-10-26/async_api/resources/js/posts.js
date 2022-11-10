import headerNavigation from './header.js';
import { generateBootstrapCard, firstLetterToUpperCase, fetchData, getSearchPhrase, generatePaginationToDom } from './functions';

async function init() {
    let userId = getSearchPhrase('userid');
    await allPostsByUser(userId);
    await allAlbumsByUser(userId);
    headerNavigation();
}

async function allPostsByUser(userId) {
    let leftColumn = document.querySelector('.left-column');
    let currentPage = getSearchPhrase('_page') ? getSearchPhrase('_page') : 1;
    let numberPerPage = getSearchPhrase('_limit') ? getSearchPhrase('_limit') : 20;

    let data;
    let total;

    if (userId) {
      let res = await fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      data = res.data;
    } else {
      let res = await fetchData(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${numberPerPage}`);
      data = res.data;
      total = res.total;
    }

    let dataToPagination = {
        currentPage,
        appendDomTag : leftColumn,
        numberPerPage,
        total
    }

    await generatePaginationToDom(dataToPagination);

            data.map(post => {
                let postsDataToDom = {
                    'userId': post.userId,
                    'postId': post.id,
                    'title': post.title,
                    'body': post.body
                };

                generatePostsList(postsDataToDom)
            })
        }

function generatePostsList(postsDataToDom) {
    let leftColumn = document.querySelector('.left-column');

    let obj = {
        header : `Post title: <a href="post.html?postid=${postsDataToDom.postId}">${firstLetterToUpperCase(postsDataToDom.title)}</a>`,
        list : [`Post content: ${firstLetterToUpperCase(postsDataToDom.body)}`,
                `Post id: ${postsDataToDom.postId}`,
                `User id: ${postsDataToDom.userId}`,
                `<a href="edit-post.html?postid=${postsDataToDom.postId}"><strong>REDAGUOTI</strong></a>`
        ]
    }

    let result = generateBootstrapCard(obj);

    leftColumn.append(result);
}

async function allAlbumsByUser(userId) {

    userId = (userId == null) ? 1 : userId;

    let res = await fetchData(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`);

    let data = res.data;

            data.map(post => {
                let postsDataToDom = {
                    'userId': post.userId,
                    'postId': post.id,
                    'title': post.title,
                };

                generateAlbumsList(postsDataToDom);
            })
        }

function generateAlbumsList(postsDataToDom) {
    let rightColumn = document.querySelector('.right-column');

    let obj = {
        header : `Album title: <a href="post.html?postid=${postsDataToDom.postId}">${firstLetterToUpperCase(postsDataToDom.title)}</a>`,
        list : [`Post id: ${postsDataToDom.postId}`,
                `User id: ${postsDataToDom.userId}`
        ]
    }

    let result = generateBootstrapCard(obj);

    rightColumn.append(result);
}

init();

// let params = new URLSearchParams(location.search);
// params.set('limit', '15');
// params.set('page', '1');
// location.search = params.toString();