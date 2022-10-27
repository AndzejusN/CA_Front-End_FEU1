function userPageDom(id = 1) {
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(resp => resp.json())
        .then(user => {
            let address = user.address.street + ' ' + user.address.suite + ' ' + user.address.zipcode + ', ' + user.address.city;

            let userDataToDom = {
                'name': user.name,
                'username': user.username,
                'email': user.email,
                'address': {
                    'address': address,
                    'lat': user.address.geo.lat,
                    'lng': user.address.geo.lng
                },
                'phone': user.phone,
                'website': user.website,
                'company': user.company.name
            }

            generatePostsList(userDataToDom);
        })
}

function generatePostsList(userDataToDom) {
    let container = document.querySelector('.container');

    let divCard = document.createElement('div');
    divCard.classList.add('card', 'card-parameters');
    container.append(divCard);

    let divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');
    divCardHeader.textContent = userDataToDom.name;
    divCard.appendChild(divCardHeader)

    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    divCard.appendChild(ul);

    let usernameLi = document.createElement('li');
    usernameLi.classList.add('list-group-item');
    usernameLi.textContent = userDataToDom.username;
    ul.appendChild(usernameLi)

    let liFirst = document.createElement('li');
    liFirst.classList.add('list-group-item');
    liFirst.textContent = userDataToDom.email;
    ul.appendChild(liFirst)

    let liEmail = document.createElement('li');
    liEmail.classList.add('list-group-item');
    liEmail.innerHTML = '<a href="https://maps.google.com/?q=' + userDataToDom.address.lat + ',' + userDataToDom.address.lng + '">' + userDataToDom.address.address + '</a>';
    ul.appendChild(liEmail)

    let liSecond = document.createElement('li');
    liSecond.classList.add('list-group-item');
    liSecond.textContent = userDataToDom.phone;
    ul.appendChild(liSecond)

    let liThird = document.createElement('li');
    liThird.classList.add('list-group-item');
    liThird.textContent = userDataToDom.website;
    ul.appendChild(liThird)

    let liFourth = document.createElement('li');
    liFourth.classList.add('list-group-item');
    liFourth.textContent = userDataToDom.company;
    ul.appendChild(liFourth)
}

function init() {
    const queryParams = document.location.search;
    const urlParams = new URLSearchParams(queryParams);
    const userId = urlParams.get('userid');

    userPageDom(userId);
}

init();
