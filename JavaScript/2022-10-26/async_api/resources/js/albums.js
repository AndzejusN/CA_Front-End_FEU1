// 9. Tokiu pačiu principu, kaip ir vartotojų puslapį, sukurti puslapį albumams (albums.html). +
// 9.1. Prie kiekvieno albumo turi būti: +
// 9.1.1. Parašytas jo pavadinimas. +
// 9.1.2. Parašytas vartotojo, sukūrusio šį albumą, vardas. +
// 9.1.3. Albume esančių nuotraukų skaičius. +
// 9.1.4. Viena nuotrauka +

let leftColumn = document.querySelector('.left-column');
let rightColumn = document.querySelector('.right-column');

fetch('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.map(album => {
            let numberOfPhotos = album.photos.length;
            let photoAddress = album.photos[0].thumbnailUrl;
console.log(photoAddress);
            let albumsDataToDom = {
                'userId': album.userId,
                'albumId': album.id,
                'title': album.title,
                'userName': album.user.name,
                'numberOfPhotos': numberOfPhotos,
                'photoAddress': photoAddress
            }

            generateAlbumsList(albumsDataToDom);
        })
    })

function generateAlbumsList(albumsDataToDom) {
    let divCard = document.createElement('div');
    divCard.classList.add('card', 'card-parameters');
    leftColumn.append(divCard);

    let divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');
    divCardHeader.innerHTML = '<a href="album.html?albumid=' + albumsDataToDom.albumId + '">' + albumsDataToDom.title + '</a>';
    divCard.appendChild(divCardHeader)

    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    divCard.appendChild(ul);

    let liPostId = document.createElement('li');
    liPostId.classList.add('list-group-item');
    liPostId.textContent = 'Post id: ' + albumsDataToDom.userName;
    ul.appendChild(liPostId)

    let liUserId = document.createElement('li');
    liUserId.classList.add('list-group-item');
    liUserId.innerHTML = '<img src="' + albumsDataToDom.photoAddress + '" >' + '( ' + albumsDataToDom.numberOfPhotos + ' )' ;
    ul.appendChild(liUserId)
}


// const queryParams = document.location.search;
// const urlParams = new URLSearchParams(queryParams);
// const userId = urlParams.get('user_id');