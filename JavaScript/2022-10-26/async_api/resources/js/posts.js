import headerNavigation from './header.js';
import { generateBootstrapCard, firstLetterToUpperCase, fetchData} from './functions';

async function init() {
    await allPostsByUser();
    await allAlbumsByUser();
    headerNavigation();
}

async function allPostsByUser(userId = 1) {

    let data = await fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

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
                `User id: ${postsDataToDom.userId}`
        ]
    }

    let result = generateBootstrapCard(obj);

    leftColumn.append(result);
}

async function allAlbumsByUser(userId = 1) {

    let data = await fetchData(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)

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