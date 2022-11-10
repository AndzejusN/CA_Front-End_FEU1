import headerNavigation from './header.js';
import { getSearchPhrase, fetchData,  firstLetterToUpperCase, generateBootstrapCard } from './functions';

function init(){
    const inputSearch = getSearchPhrase('albumid');
    getAlbum(inputSearch);
    headerNavigation();
}

async function getAlbum(id = 1) {

    let res = await fetchData(`https://jsonplaceholder.typicode.com/albums/${id}/?_expand=user`);
    let album = res.data;


            let albumsDataToDom = {
                'userId': album.userId,
                'albumId': album.id,
                'title': album.title,
                'userName': album.user.name
            }

            generateAlbumsList(albumsDataToDom);
}

function generateAlbumsList(albumsDataToDom) {
    let leftColumn = document.querySelector('.left-column');

    let obj = {
        header : `Album title: ${firstLetterToUpperCase(albumsDataToDom.title)}`,
        list : [`User id: ${albumsDataToDom.userId}`,
                `Album id: ${albumsDataToDom.albumId}`,
                `User name: <a href="user.html?userid=${albumsDataToDom.userId}"> ${albumsDataToDom.userName}</a>`
        ]
    }

    let result = generateBootstrapCard(obj);

    leftColumn.append(result);
}

init();