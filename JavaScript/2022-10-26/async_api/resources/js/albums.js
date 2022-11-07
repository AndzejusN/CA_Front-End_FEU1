import headerNavigation from './header.js';
import { firstLetterToUpperCase, waitingForDataSpinner, fetchData, createDomElement, generateBootstrapCard } from './functions';

async function init(){
    await fetchDataAlbums();
    waitingForDataSpinner();
    headerNavigation();
}

async function fetchDataAlbums() {

    let data = await fetchData('https://jsonplaceholder.typicode.com/albums?_expand=user&_embed=photos');
        data.map(album => {
            let numberOfPhotos = album.photos.length;
            let firstPhotoAddress = album.photos[0].thumbnailUrl;
            let albumsDataToDom = {
                'userId': album.userId,
                'albumId': album.id,
                'title': album.title,
                'userName': album.user.name,
                'numberOfPhotos': numberOfPhotos,
                'photoAddress': firstPhotoAddress
            }

            let photoes = album.photos.map(photo => {
                return photo;
            })

            generateAlbumsList(albumsDataToDom);
            generateAllPhotosList(photoes);

        })
    }

function generateAlbumsList(albumsDataToDom) {
    let leftColumn = document.querySelector('.left-column');

    let obj = {
        header : `Album title: <a href="album.html?albumid=${albumsDataToDom.albumId}">${firstLetterToUpperCase(albumsDataToDom.title)}</a>`,
        list : [`User name: ${albumsDataToDom.userName}`,
                `<img src="${albumsDataToDom.photoAddress}">(${albumsDataToDom.numberOfPhotos})`
        ]
    }

    let result = generateBootstrapCard(obj);

    leftColumn.append(result);
}

function generateAllPhotosList(photoes) {

photoes.map(photo => {
    let galeryBox = document.querySelector('#my-gallery');
    galeryBox.style.textAlign = 'center';

    let aTag =  document.createElement('a');
    aTag.href = photo.url;
    aTag.setAttribute('data-pswp-width', '600');
    aTag.setAttribute('data-pswp-height', '600');
    aTag.setAttribute('target', '_blank');
    galeryBox.append(aTag);

    let imgTag = document.createElement('img');
    imgTag.src = photo.thumbnailUrl;
    imgTag.alt = 'Test photo';

    aTag.append(imgTag);
})
}

init();