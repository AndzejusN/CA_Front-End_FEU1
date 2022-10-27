let leftColumn = document.querySelector('.left-column');

function getAlbum(id = 1) {
    fetch('https://jsonplaceholder.typicode.com/albums/' + id)
        .then(res => res.json())
        .then(album => {
            let albumsDataToDom = {
                'userId': album.userId,
                'albumId': album.id,
                'title': album.title,
            }

            generateAlbumsList(albumsDataToDom);
        })
}

function generateAlbumsList(albumsDataToDom) {
    let divCard = document.createElement('div');
    divCard.classList.add('card', 'card-parameters');
    leftColumn.append(divCard);

    let divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');
    divCardHeader.textContent = albumsDataToDom.title;
    divCard.appendChild(divCardHeader)

    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    divCard.appendChild(ul);

    let liPostId = document.createElement('li');
    liPostId.classList.add('list-group-item');
    liPostId.textContent = 'User id: ' + albumsDataToDom.userId;
    ul.appendChild(liPostId)

    let liUserId = document.createElement('li');
    liUserId.classList.add('list-group-item');
    liUserId.textContent = 'Album id: ' + albumsDataToDom.albumId;
    ul.appendChild(liUserId)
}

const queryParams = document.location.search;
const urlParams = new URLSearchParams(queryParams);
const albumId = urlParams.get('albumid');

getAlbum(albumId);