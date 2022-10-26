// API nuoroda: https://jsonplaceholder.typicode.com
//
//   1. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts.html). Kiekvienas įrašas turi:
// 1.1. Pavadinimą.
// 1.2. Pastraipą su įrašo (post) turiniu.
// 1.3. Autorių. Tai turi būti nuoroda. Kol kas ji gali niekur nevesti.

function generatePostsList(userName, postId, postTitle, postText) {
    let container = document.querySelector('.container');

    let divCard = document.createElement('div');
    divCard.style.width = '240px';
    divCard.style.margin = '10px';
    divCard.classList.add('card');
    container.append(divCard);

    let divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');
    divCardHeader.textContent = postId;
    divCard.appendChild(divCardHeader)

    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    divCard.appendChild(ul);

    let liFirst = document.createElement('li');
    liFirst.classList.add('list-group-item');
    liFirst.textContent = postTitle;
    ul.appendChild(liFirst)

    let liSecond = document.createElement('li');
    liSecond.classList.add('list-group-item');
    liSecond.textContent = postText;
    ul.appendChild(liSecond)
    let liThird = document.createElement('li');
    liThird.classList.add('list-group-item');
    liThird.textContent = userName;
    ul.appendChild(liThird)

}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
        .then(response => response.json())
        .then(data => {
            data.map(post => {

                fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
                    .then(response => response.json())
                    .then(data => {
                        generatePostsList(data.username, post.id, post.title, post.body);
                    })
            })
        })
}

function init() {
    getPosts();
}

init();