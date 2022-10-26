// API nuoroda: https://jsonplaceholder.typicode.com
//
//   1. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts.html). Kiekvienas įrašas turi:
// 1.1. Pavadinimą.
// 1.2. Pastraipą su įrašo (post) turiniu.
// 1.3. Autorių. Tai turi būti nuoroda. Kol kas ji gali niekur nevesti.
//
// 2. Po kiekvienu įrašu (post) pridėti posto komentarus. Kiekvienas komentaras turi:
// 2.1. Komentaro pavadinimą.
// 2.2. Komentaro turinį - pastraipą.
// 2.3. Komentarą parašiusio asmens el. pašto adresą.

function generatePostsList(userName, postId, postTitle, postText) {
    let container = document.querySelector('.container');

    let divCard = document.createElement('div');
    divCard.style.width = '240px';
    divCard.style.margin = '10px';
    divCard.classList.add('card', 'post-id-' + postId);
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

function addPostComments(commentName, commentBody, commentEmail, commentPostId) {

    let postById = document.querySelector(`.post-id-${commentPostId}`);

    let divCardComment = document.createElement('div');
    divCardComment.style.width = '240px';
    divCardComment.style.margin = '10px';
    divCardComment.classList.add('card');
    postById.append(divCardComment);

    let divCardHeaderComment = document.createElement('div');
    divCardHeaderComment.classList.add('card-header');
    divCardHeaderComment.textContent = commentName;
    divCardComment.appendChild(divCardHeaderComment)

    let ulComment = document.createElement('ul');
    ulComment.classList.add('list-group', 'list-group-flush');
    divCardHeaderComment.appendChild(ulComment);

    let liFirstComment = document.createElement('li');
    liFirstComment.classList.add('list-group-item');
    liFirstComment.textContent = commentBody;
    ulComment.appendChild(liFirstComment)

    let liSecondComment = document.createElement('li');
    liSecondComment.classList.add('list-group-item');
    liSecondComment.textContent = commentEmail;
    ulComment.appendChild(liSecondComment)
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        .then(data => {
            data.map(post => {

                fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
                    .then(response => response.json())
                    .then(data => {
                        generatePostsList(data.username, post.id, post.title, post.body);
                        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + post.id)
                            .then(response => response.json())
                            .then(comments => {
                                comments.map(comment => {
                                    addPostComments(comment.name, comment.body, comment.email, comment.postId);
                                })
                            })
                    })
            })
        })
}

function init() {
    getPosts();
}

init();