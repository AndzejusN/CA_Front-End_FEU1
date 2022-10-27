let leftColumn = document.querySelector('.left-column');
let rightColumn = document.querySelector('.right-column');

function generatePostsList(postData) {
    let divCard = document.createElement('div');
    divCard.classList.add('card', 'post-id-' + postData.id, 'card-parameters');
    leftColumn.append(divCard);

    let divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');
    divCardHeader.textContent = postData.id;
    divCard.appendChild(divCardHeader)

    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    divCard.appendChild(ul);

    let liFirst = document.createElement('li');
    liFirst.classList.add('list-group-item');
    liFirst.textContent = postData.title;
    ul.appendChild(liFirst)

    let liSecond = document.createElement('li');
    liSecond.classList.add('list-group-item');
    liSecond.textContent = postData.body;
    ul.appendChild(liSecond)

    let liThird = document.createElement('li');
    liThird.classList.add('list-group-item');
    liThird.textContent = postData.username;
    ul.appendChild(liThird)
}

function addPostComments(commentsList) {

    let postById = document.querySelector(`.post-id-${commentsList.postId}`);

    let divCardComment = document.createElement('div');
    divCardComment.style.width = 'calc (100% - 50px)';
    divCardComment.style.margin = '10px';
    divCardComment.classList.add('card');
    postById.append(divCardComment);

    let divCardHeaderComment = document.createElement('div');
    divCardHeaderComment.classList.add('card-header');
    divCardHeaderComment.textContent = commentsList.name;
    divCardComment.appendChild(divCardHeaderComment)

    let ulComment = document.createElement('ul');
    ulComment.classList.add('list-group', 'list-group-flush');
    divCardHeaderComment.appendChild(ulComment);

    let liFirstComment = document.createElement('li');
    liFirstComment.classList.add('list-group-item');
    liFirstComment.textContent = commentsList.body;
    ulComment.appendChild(liFirstComment)

    let liSecondComment = document.createElement('li');
    liSecondComment.classList.add('list-group-item');
    liSecondComment.textContent = commentsList.email;
    ulComment.appendChild(liSecondComment)
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_embed=comments&_expand=user')
        .then(response => response.json())
        .then(data => {
            data.map(post => {

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
        })
}

// 5. Pagrindiniame (index.html) puslapyje pridėti skiltį, kurioje atvaizduojamas albumų sąrašas. Kiekvienas albumas turės:
// 5.1. Pavadinimą, o paspaudus ant jo - nukreipiama į albumą (album.html).
// 5.2. Albumo autoriaus vardą.
// 5.3. Nuotrauką.

function albumsList() {
    fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos')
        .then(res => res.json())
        .then(data => {
            data.map(album => {
                let albumsDataToDom = {
                    'userId': album.userId,
                    'userName' : album.user.name,
                    'albumId': album.id,
                    'title': album.title,
                    'photo': album.photos[0].thumbnailUrl
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
    divCardHeader.innerHTML = '<strong>Albumo pavadinimas: <a href="album.html?albumid=' + albumsDataToDom.albumId + '">' + albumsDataToDom.title + '</a></strong>';
    divCard.appendChild(divCardHeader)

    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    divCard.appendChild(ul);

    let liPostId = document.createElement('li');
    liPostId.classList.add('list-group-item');
    liPostId.textContent = 'Albumo unikalus numeris: ' + albumsDataToDom.albumId;
    ul.appendChild(liPostId)

    let liUserId = document.createElement('li');
    liUserId.classList.add('list-group-item');
    liUserId.textContent = 'Vartotojo unikalus numeris: ' + albumsDataToDom.userId;
    ul.appendChild(liUserId)

    let liUserName = document.createElement('li');
    liUserName.classList.add('list-group-item');
    liUserName.textContent = 'Vartotojo vardas/pavardė: ' + albumsDataToDom.userName;
    ul.appendChild(liUserName)

    let liPhoto = document.createElement('li');
    liPhoto.classList.add('list-group-item');
    liPhoto.innerHTML ='<img src="' + albumsDataToDom.photo + '">';
    ul.appendChild(liPhoto)
}


function init() {
    getPosts();
    albumsList();
}

init();