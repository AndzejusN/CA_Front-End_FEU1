function createNavivation(ulNavigation) {

    let pages = [
        {
            id: 1,
            linkName: 'main',
            url: 'index.html'
        },
        {
            id: 2,
            linkName: 'albums',
            url: 'albums.html'
        },
        {
            id: 3,
            linkName: 'posts',
            url: 'posts.html'
        },
        {
            id: 4,
            linkName: 'users',
            url: 'users.html'
        }
    ];

    pages.forEach(name => {

        let li = document.createElement('li');
        li.style.margin = '20px';
        li.innerHTML = `<a href="./${name.url}" style="text-decoration: none;"> ${name.linkName.toUpperCase()} </a>`
        ulNavigation.append(li);
    })
}

function createSearchPlace(ulNavigation){

let searchForm = document.createElement('form');
searchForm.setAttribute('action', 'search.html');
searchForm.setAttribute('name', 'searchForm');
searchForm.style.margin = '20px';
ulNavigation.append(searchForm);

let inputSearch = document.createElement('input');
inputSearch.setAttribute('type','text');
inputSearch.setAttribute('name', 'inputSearch');
inputSearch.setAttribute('id', 'inputSearch');
inputSearch.setAttribute('placeholder', 'Please enter text...');
searchForm.append(inputSearch);

let submitButton = document.createElement('button');
submitButton.setAttribute('type','submit');
submitButton.textContent = 'Push the button';
submitButton.style.marginLeft = '20px';
searchForm.append(submitButton);
}

function init(){

    let divNavigation = document.createElement('div');
    divNavigation.style.minHeight = '100px';
    document.body.prepend(divNavigation)

    let ulNavigation = document.createElement('ul');
    ulNavigation.style.display = 'flex';
    ulNavigation.style.flexWrap = 'wrap';
    ulNavigation.style.listStyleType = 'none';
    divNavigation.append(ulNavigation);

    createNavivation(ulNavigation);
    createSearchPlace(ulNavigation);
}

export default init;