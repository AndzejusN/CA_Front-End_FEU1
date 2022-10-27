let container = document.querySelector('.container');
let leftColumn = document.querySelector('.left-column');
let rightColumn = document.querySelector('.right-column');

function allPostsByUser(userId = 1) {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
        .then(res => res.json())
        .then(data => {

            data.map(post => {
                let postsDataToDom = {
                    'userId': post.userId,
                    'postId': post.id,
                    'title': post.title,
                    'body': post.body
                };

                generatePostsList(postsDataToDom)
            })
        })
}

function generatePostsList(postsDataToDom) {

    let divCard = document.createElement('div');
    divCard.classList.add('card', 'card-parameters');
    leftColumn.append(divCard);

    let divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');
    divCardHeader.innerHTML = '<a href="post.html?postid=' + postsDataToDom.postId + '">' + postsDataToDom.title + '</a>';
    divCard.appendChild(divCardHeader)

    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    divCard.appendChild(ul);

    let liUsername = document.createElement('li');
    liUsername.classList.add('list-group-item');
    liUsername.textContent = postsDataToDom.body;
    ul.appendChild(liUsername)

    let liPostId = document.createElement('li');
    liPostId.classList.add('list-group-item');
    liPostId.textContent = 'Post id: ' + postsDataToDom.postId;
    ul.appendChild(liPostId)

    let liUserId = document.createElement('li');
    liUserId.classList.add('list-group-item');
    liUserId.textContent = 'User id: ' + postsDataToDom.userId;
    ul.appendChild(liUserId)
}

function allAlbumsByUser(userId = 1) {
    fetch('https://jsonplaceholder.typicode.com/albums/?userId=' + userId)
        .then(res => res.json())
        .then(data => {
            data.map(album => {
                let albumsDataToDom = {
                    'userId': album.userId,
                    'postId': album.id,
                    'title': album.title,
                };

                generateAlbumsList(albumsDataToDom);
            })
        })
}

function generateAlbumsList(albumsDataToDom) {
    let divCard = document.createElement('div');
    divCard.classList.add('card', 'card-parameters');
    rightColumn.append(divCard);

    let divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');
    divCardHeader.innerHTML = '<a href="#">' + albumsDataToDom.title + '</a>';
    divCard.appendChild(divCardHeader)

    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    divCard.appendChild(ul);

    let liPostId = document.createElement('li');
    liPostId.classList.add('list-group-item');
    liPostId.textContent = 'Post id: ' + albumsDataToDom.postId;
    ul.appendChild(liPostId)

    let liUserId = document.createElement('li');
    liUserId.classList.add('list-group-item');
    liUserId.textContent = 'User id: ' + albumsDataToDom.userId;
    ul.appendChild(liUserId)
}

function init() {
    allPostsByUser();
    allAlbumsByUser();
}

init();