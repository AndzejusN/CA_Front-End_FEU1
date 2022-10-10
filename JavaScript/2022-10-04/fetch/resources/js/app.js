let obj = [];

fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user')
    .then((response) => response.json())
    .then(data => obj = data)
    .then(data => console.log(data));


function generatePosts(arr, userId = 1){

    let container = document.querySelector('.container');

    let divTop = document.createElement('div');
    divTop.className = 'user-' + userId;
    divTop.textContent =  'User is:' + userId;

    container.appendChild(divTop);

    for (let i = 0; i <  10; i++) {
        let divItem = document.createElement('div');
        divItem.className = 'post-' + i;
        let childPost = document.querySelector(`.post-${i}`).textContent = arr[`${i}`].title;

        let parent = document.querySelector(`user-${i}`);
        parent.appendChild(childPost);
    }
}