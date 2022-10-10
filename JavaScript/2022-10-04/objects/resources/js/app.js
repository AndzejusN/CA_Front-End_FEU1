// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
// 1.1. name - miesto pavadinimas (string)
// 1.2. population - miesto populiacija (number)
// 1.3. location - (object)
// 1.3.1. continent - žemynas (string)
// 1.3.2. country - šalis (string)
// 1.4. touristAttractions - lankytinos vietos (array)
// 1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)
// 3.1. Jeigu miestas yra sostinė, tai:
// 3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
// 3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."
// 4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
// 4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
// 4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
// 4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.
let cityList = [
    {
        name: 'Vilnius',
        population: 542000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
            coordinates: {
                latitude: '54.687157',
                longitude: '25.279652'
            }
        },
        touristAttractions: ['Gediminas Castle Tower', 'Gediminas Castle Tower', 'Cathedral square', 'The Virgin Mary, Mother of Mercy', 'St. Nicholas church',
        ],
        isCapital: true
    },
    {
        name: 'Kaunas',
        population: 289000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
            coordinates: {
                latitude: '54.90272',
                longitude: '23.90961'

            }
        },
        touristAttractions: ['Kaunas fortifications'],
        isCapital: false
    },
    {
        name: 'Klaipėda',
        population: 154000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
            coordinates: {
                latitude: '55.7068',
                longitude: '21.13912'
            }
        },
        touristAttractions: ['Klaipėda port'],
        isCapital: false
    },
    {
        name: 'Šiauliai',
        population: 130000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
            coordinates: {
                latitude: '55.93333',
                longitude: '23.31667'
            }
        },
        touristAttractions: ['Saint Disciple Peter and Paul Cathedral'],
        isCapital: false
    },
    {
        name: 'Panevėžys',
        population: 85000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
            coordinates: {
                longitude: '24.35983',
                latitude: '55.73186'
            }
        },
        touristAttractions: ['St. Peter and Paul\'s Church'],
        isCapital: false
    },
    {
        name: 'Alytus',
        population: 49000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
            coordinates: {
                latitude: '54.39635',
                longitude: '24.04142'
            }
        },
        touristAttractions: ['Town Hall Square'],
        isCapital: false
    },
    {
        name: 'Marijampolė',
        population: 34000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
            coordinates: {
                latitude: '54.55991',
                longitude: '23.35412'
            }
        },
        touristAttractions: ['Poetry park'],
        isCapital: false
    },
    {
        name: 'Mažeikiai',
        population: 32000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
            coordinates: {
                latitude: '56.31667',
                longitude: '22.33333'
            }
        },
        touristAttractions: [],
        isCapital: false
    },
    {
        name: 'Visaginas',
        population: 28000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
            coordinates: {
                latitude: '55.59678',
                longitude: '26.43984'
            }
        },
        touristAttractions: ['Nuclear power plant'],
        isCapital: false
    },
    {
        name: 'Jonava',
        population: 26000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
            coordinates: {
                latitude: '55.08014',
                longitude: '24.27544'
            }
        },
        touristAttractions: ['Fertilizers factory'],
        isCapital: false
    },
    {
        name: 'Utena',
        population: 25000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
            coordinates: {
                latitude: '55.49764',
                longitude: '25.59918'
            }
        },
        touristAttractions: ['Museum of Local History'],
        isCapital: false
    },
    {
        name: 'Kėdainiai',
        population: 22000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
            coordinates: {
                latitude: '55.28782',
                longitude: '23.97275'
            }
        },
        touristAttractions: ['Canned cucumber factory'],
        isCapital: false
    },
];

function assignValues(data, i) {

    let {name, population} = data;
    let {continent, country} = data.location;
    let {latitude, longitude} = data.location.coordinates;

    // For fun another chain:
    // let {name, population, location} = data;
    // let {continent, country, coordinates} = location;
    // let {latitude, longitude} = coordinates;

    // Simple one:
    // let name = data.name;
    // let population = data.population;
    // let continent = data.location.continent;
    // let country = data.location.country;
    // let latitude = data.location.coordinates.latitude;
    // let longitude = data.location.coordinates.longitude;

    // Not used, but good:
    // let result = data.isCapital === true ? 'Taip' : 'Ne';
    // let isCapitalValue = 'Sostinė: ' + result;
    // let nameValue = 'Miesto pavadinimas: ' + name;
    // let populationValue = 'Populiacija: ' + population;
    // let continentValue = 'Žemynas: ' + continent;
    // let countryValue = 'Šalis: ' + country;
    // let latitudeValue = 'Ilguma:  λ' + latitude;
    // let longitudeValue = 'Platuma: Φ' + longitude;

    let top = 'City is: ' + name;
    let total = name + ' city is locates in ' + continent + ' ' + country + ' and has population of ' + population + ' people.';

    if (data.isCapital || data.isCapital === 'Taip') {
        top += ' (capital)';
        total = 'Vilnius is the capital of Lithuania. ' + total;
    }

    let container = document.querySelector('.container');

    let divTop = generateDomElement('div', top, container)

    divTop.classList.add('city-' + i, 'city');

    if (data.isCapital || data.isCapital === 'Taip') {
        divTop.classList.add('capital');
    }

    let divItem = generateDomElement('div', total, container);
    divItem.className = 'information-' + i;

    generateDomElement('br', '', container);

    let places;

    switch (data.touristAttractions.length) {
        case (0):
            places = '0';
            break;
        case (1):
            places = 'Lankytina vieta: ';
            break;
        default:
            places = 'Lankytinos vietos: ';
    }

    if (places !== '0') {
        generateDomElement('h5', places, container)
    }

    let ul = document.createElement('ul');
    container.appendChild(ul);

    data.touristAttractions.forEach(a => {
        generateDomElement('li', a, ul)
    });

    generateDomElement('hr', '', container);
}

function generateDomElement(element, text, append) {
    let item = document.createElement(`${element}`);
    item.textContent = text;
    append.appendChild(item);

    return item;
}

function allInConsoleLog(dataArr) {
    dataArr.map((data, i) => {
        assignValues(data, i);
    })
}

allInConsoleLog(cityList);

function markPlaces(cityList) {

}

// 5. Naudojant tik JavaScript:
// 5.1. Pakeisti visų sostinių teksto spalvą.

function numberFive(cityList) {

    let capitals = document.querySelectorAll('.capital');

    capitals.forEach(city => city.style.color = 'green');

// 5.2. Pakeisti kas antro miesto fono spalvą.

    let everySecond = document.querySelectorAll('div.city');

    everySecond.forEach((elem, i) => {
        if (i % 2 !== 0) {
            elem.style.color = 'red';
        }
    });

// 5.3. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
    let firstPlaces = document.querySelectorAll('ul li:first-of-type');
    firstPlaces.forEach((first, index) => first.style.color = 'green');

// 5.4. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.

    let lastPlaceFromThree = document.querySelectorAll('ul li:nth-child(n+4)');
    lastPlaceFromThree.forEach(elem => elem.style.color = 'red');

    // let lastPlace = document.querySelectorAll('ul li:last-of-type');
    // for (let i = 0; i < cityList.length; i++) {
    //     if (cityList[i].touristAttractions.length > 3) {
    //
    //
    //         lastPlace[i].style.color = 'red';
    //     }
    // }
}

numberFive(cityList);