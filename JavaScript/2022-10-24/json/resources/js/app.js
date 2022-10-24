function createDom(movies) {
    let baseContainer = document.querySelector('.container');

    let divFilmsWrapper = document.createElement('div');
    divFilmsWrapper.classList.add('films-wrapper');
    baseContainer.appendChild(divFilmsWrapper);

    movies.map((movie, index) => {
        let divOneFilm = document.createElement('div');
        divOneFilm.classList.add('film', `film-index-${index}`);
        divFilmsWrapper.appendChild(divOneFilm);

        let ul = document.createElement('ul');
        ul.style.listStyleType = 'none';
        divOneFilm.appendChild(ul);

        let liName = document.createElement('li');
        liName.textContent = 'Movie name: ' + movie.movieName;
        ul.appendChild(liName);

        let liProd = document.createElement('li');
        liProd.textContent = 'Production year: ' + movie.productionYear;
        ul.appendChild(liProd);

        let liShortInfo = document.createElement('li');
        liShortInfo.textContent = 'Production year: ' + movie.shortInformation;
        ul.appendChild(liShortInfo);

        let liGenre = document.createElement('li');

        let output = movie.genre.toString();
        let result = output.split(',').join(', ');

        liGenre.textContent = 'Genre: ' + result;
        ul.appendChild(liGenre);
    });
}


fetch('data/movies.json')
    .then((response) => response.json())
    .then((movies) => {
        init(movies);
    });


function init(movies) {
    createDom(movies);
}