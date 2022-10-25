let dogForm = document.querySelector('.form-dogs-breeds');
let select = document.createElement('select');
dogForm.append(select);

let container = document.querySelector('.container');
let inputValue = 'affenpinscher';

select.addEventListener('change', () => {
    inputValue = select.value;
});

fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then(breeds => {

        let breedsEntries = Object.entries(breeds.message);
        let length = breedsEntries.length;

        for (let i = 0; i < length; i++) {
            let option = document.createElement('option');
            option.textContent = breedsEntries[i][0];
            option.value = breedsEntries[i][0];
            select.append(option);

            let subBreedLength = breedsEntries[i][1].length;
            let subBreed = breedsEntries[i][1];

            if (subBreedLength > 0) {
                for (let j = 0; subBreedLength > j; j++) {
                    let option = document.createElement('option');
                    option.textContent = breedsEntries[i][0] + ' (' + subBreed[j] + ')';
                    option.value = breedsEntries[i][0] + '/' + subBreed[j];
                    select.append(option);
                }
            }
        }
    });

let button = document.createElement('button');
button.textContent = 'Get picture';
container.append(button);

let divPhoto = document.createElement('div');

button.addEventListener('click', () => {
    if (inputValue) {
        fetch('https://dog.ceo/api/breed/' + inputValue + '/images/random')
            .then((response) => response.json())
            .then((photo) => {
                divPhoto.innerHTML = '<img src="' + photo.message + '">';
                divPhoto.setAttribute('alt', 'Dog photo');
                divPhoto.style.width = '500px';
                divPhoto.style.height = '500px';
            })
    }
});

container.append(divPhoto);