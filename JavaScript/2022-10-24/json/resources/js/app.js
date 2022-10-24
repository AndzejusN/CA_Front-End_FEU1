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
        let outputGenre = movie.genre.toString().split(',').join(', ');
        liGenre.textContent = 'Genre: ' + outputGenre;
        ul.appendChild(liGenre);

        let liRating = document.createElement('li');
        liRating.textContent = `Rating score: ${movie.rating.ratingScore}; Rating voters: ${movie.rating.numberOfVoters}`;
        ul.appendChild(liRating);

        let directors = [];

        movie.director.map(director => {
            directors.push([director.firstName, director.secondName + ';']);
        })

        let liDirector = document.createElement('li');
        liDirector.textContent = 'Director: ' + directors.toString().split(',').join(' ');
        ul.appendChild(liDirector);


        let actors = [];

        movie.majorActors.map(actor => {
            actors.push([actor.firstName, actor.secondName] + ';');
        })

        let liActor = document.createElement('li');
        liActor.textContent = 'Actor: ' + actors.toString().split(',').join(' ');
        ul.appendChild(liActor);
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