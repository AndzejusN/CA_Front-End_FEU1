let container = document.querySelector('.container');
let leftColumn = document.querySelector('.left-column');

const queryParams = document.location.search;
const urlParams = new URLSearchParams(queryParams);
const albumId = urlParams.get('postid');

getOnePost(albumId);


function getOnePost(post = 1) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + post + '/?_expand=user&_embed=comments')
        .then(res => res.json())
        .then(post => {
            console.log(post);
            let postsDataToDom = {
                'userId': post.userId,
                'postId': post.id,
                'title': post.title,
                'body': post.body,
                'username': post.user.name
            };

            generatePostsList(postsDataToDom)

            let comments = post.comments;

            comments.map(comment => {
                let commentList = {
                    'id': comment.id,
                    'name': comment.name,
                    'email': comment.email,
                    'body': comment.body
                }

                addPostComments(commentList);

            })

        })
}

function generatePostsList(postsDataToDom) {

    let divCard = document.createElement('div');
    divCard.classList.add('card', 'card-parameters', 'post-id-' + postsDataToDom.id);
    leftColumn.append(divCard);

    let divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');
    divCardHeader.innerHTML = '<a href="#">' + postsDataToDom.title + '</a>';
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
    ul.appendChild(liUserId);

    let liUserName = document.createElement('li');
    liUserName.classList.add('list-group-item');
    liUserName.innerHTML ='User name: <a href="user.html">' + postsDataToDom.username + '</a>';
    ul.appendChild(liUserName);

    let liUserAllPosts = document.createElement('li');
    liUserAllPosts.classList.add('list-group-item');
    liUserAllPosts.innerHTML ='<a href="posts.html">Kiti autoriaus įrašai</a>';
    ul.appendChild(liUserAllPosts);
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