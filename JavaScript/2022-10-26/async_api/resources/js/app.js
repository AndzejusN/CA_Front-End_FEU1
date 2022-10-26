function generatePostsList(postData) {
    let container = document.querySelector('.container');

    let divCard = document.createElement('div');
    divCard.style.width = '100%';
    divCard.style.margin = '30px';
    divCard.classList.add('card', 'post-id-' + postData.id);
    container.append(divCard);

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

function addPostComments(commentName, commentBody, commentEmail, commentPostId) {

    let postById = document.querySelector(`.post-id-${commentPostId}`);

    let divCardComment = document.createElement('div');
    divCardComment.style.width = 'calc (100% - 50px)';
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
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(data => {
            data.map(post => {
                fetch('https://jsonplaceholder.typicode.com/users/' + post.userId)
                    .then(response => response.json())
                    .then(data => {

                        let postData = {
                            'username': data.username,
                            'id': post.id,
                            'title': post.title,
                            'body': post.body
                        }

                        generatePostsList(postData);

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