import headerNavigation from './header.js';
import { generateBootstrapCard, firstLetterToUpperCase, fetchData, getSearchPhrase} from './functions';

async function init() {
    let userId = getSearchPhrase('userid');
    await allPostsByUser(userId);
    await allAlbumsByUser(userId);
    headerNavigation();
}

async function generatePaginationToDom(currentPage){

   let dataTotal = await fetchData(`https://jsonplaceholder.typicode.com/posts`);
   let total = dataTotal.length;

   let leftColumn = document.querySelector('.left-column');

   let paginationWrapper = document.createElement('div');
   paginationWrapper.style.width = '100%';
   paginationWrapper.style.display = 'flex';
   leftColumn.prepend(paginationWrapper);

    let limit = 10;
    let pages = Math.ceil(total/limit);
    
    for (let i = 1; i <= pages; i++){

        if (i===1 && currentPage==1){
            let span = document.createElement('span');
            span.innerText = 'First page';
            span.style.padding = '15px';
            span.style.margin = '0 3px';
            span.style.backgroundColor = 'white';
            span.style.border = 'solid black 1px';
            paginationWrapper.append(span);
        } else if (i===1){
            let a = document.createElement('a');
            a.href = `posts.html?_page=${i}&_limit=${limit}`;
            a.textContent = 'First page';
            a.style.padding = '15px';
            a.style.backgroundColor = 'white';
            a.style.border = 'solid black 1px';
            a.style.margin = '0 3px';
            paginationWrapper.append(a);
        }

        if (currentPage == i){
        let span = document.createElement('span');
        span.innerText = currentPage;
        span.style.padding = '15px';
        span.style.margin = '0 3px';
        span.style.backgroundColor = 'white';
        span.style.border = 'solid black 1px';
        paginationWrapper.append(span);
        } else {
            let a = document.createElement('a');
            a.href = `posts.html?_page=${i}&_limit=${limit}`;
            a.textContent = i;
            a.style.padding = '15px';
            a.style.backgroundColor = 'white';
            a.style.border = 'solid black 1px';
            a.style.margin = '0 3px';
            paginationWrapper.append(a);
        }

        if (i==pages && currentPage==pages){
            let span = document.createElement('span');
            span.innerText = 'Last page';
            span.style.padding = '15px';
            span.style.margin = '0 3px';
            span.style.backgroundColor = 'white';
            span.style.border = 'solid black 1px';
            paginationWrapper.append(span);
        } else if (i==pages){
            let a = document.createElement('a');
            a.href = `posts.html?_page=${i}&_limit=${limit}`;
            a.textContent = 'Last page';
            a.style.padding = '15px';
            a.style.backgroundColor = 'white';
            a.style.border = 'solid black 1px';
            a.style.margin = '0 3px';
            paginationWrapper.append(a);
        }
    }
}

async function allPostsByUser(userId) {

    let currentPage = getSearchPhrase('_page') ? getSearchPhrase('_page') : 1;
    let limitPage = getSearchPhrase('_limit');

    let data = {};

    if (userId) {
      data = await fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    } else {
      data = await fetchData(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limitPage}`);
    }

    await generatePaginationToDom(currentPage);

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