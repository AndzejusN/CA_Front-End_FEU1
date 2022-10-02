console.group();

let students = ['Jonas', 'Petras', 'Darius'];

for (let student of students) {
    console.log('For of:' + student);
}

let pupils = {
    1: {
        firstName: 'Jonas',
        secondName: 'Jonaitis',
        age: 8,
        city: 'Vilnius',
        class: '2A'
    },
    2: {
        firstName: 'Petras',
        secondName: 'Petraitis',
        age: 10,
        city: 'Vilnius',
        class: '4B'
    }
}

console.log(pupils[1]['firstName']);

pupils[1]['aktyvus'] = true;
pupils[2]['aktyvus'] = false;

let studentAddress = {
    city: 'Vilnius',
    street: 'Laisvės',
    buildingNr: 115,
    flatNr: 5
}

pupils[1]['address'] = studentAddress;

console.log(pupils['1'].address);

console.groupEnd();


// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.

console.group();

let companyOne = new Object();

// 2. Prie objekto pridėti:
// 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
companyOne['company name'] = 'UAB Super';

// 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
companyOne['opened'] = '2000-01-01';

// 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
companyOne['companyCode'] = 305405450;

// 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
companyOne['employees'] = 234;

// 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
companyOne['ceo'] = 'Jonas Jonaitis';

// 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
companyOne['nvo'] = false;

// 2.7. Property „workingLocation" ir priskirti įmonės veiklos šalių value (turi būti bent 2 veiklos šalys).
companyOne['workingLocation'] = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Republic of Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'];

// 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
companyOne['activityAreas'] = ['Projektavimas', 'Dizainas', 'Statyba', 'Gamyba'];

// 2.9. Property „contacts", kuris turės:
// 2.9.1. „phone"
// 2.9.2. „email"
// 2.9.3. „address", kuris turės:
companyOne['contacts'] = {
    phone: {},
    email: ['jonas.jonaitis@super.eu'],
    address: {}
}

companyOne['contacts']['phone'] = {
    mobile: ['+37066655444'],
    wirePhone: ['+37052600555'],
    fax: ['+37052600555']
}

companyOne['contacts']['address'] = {
    country: 'Lithuania',
    city: 'Vilnius',
    street: 'Laisvės pr.',
    apartment: 115
}

// 2.10. Property „subsidiary", kurio reikšmė bus naujas objektas.

companyOne['subsidiaries'] = [];

// 3.1 Sukurti naują kintamąjį pagal tą patį modelį. Tai bus dukterinė įmonę.
// 3.2 Šį objektą priskirti prie „subsidiary" reikšmės pirmame objekte.

let subsidiaryOne = new Object();

subsidiaryOne['company name'] = 'UAB Super One';
subsidiaryOne['opened'] = '2000-01-01';
subsidiaryOne['companyCode'] = 305405451;
subsidiaryOne['employees'] = 134;
subsidiaryOne['ceo'] = 'Petras Petraitis';
subsidiaryOne['nvo'] = false;
subsidiaryOne['workingLocation'] = ['Austria', 'Belgium', 'Bulgaria'];
subsidiaryOne['activityAreas'] = ['Projektavimas', 'Dizainas', 'Statyba', 'Gamyba'];

subsidiaryOne['contacts'] = {
    phone: {},
    email: ['petras.petraitis@superone.eu'],
    address: {}
}

subsidiaryOne['contacts']['phone'] = {
    mobile: ['+37066655445'],
    wirePhone: ['+37052600557'],
    fax: ['+37052600558']
}

subsidiaryOne['contacts']['address'] = {
    country: 'Austria',
    city: 'Zalsburg',
    street: 'Rammstein strasse',
    apartment: 115
}

let subsidiaryTwo = {
    'company name': 'UAB Super Two',
    opened: '2000-01-01',
    companyCode: 305405453,
    employees: 55,
    ceo: 'Saulius Sauliauskas',
    nvo: true,
    workingLocation: [
        'Austria',
        'Belgium',
        'Bulgaria',
        'Croatia',
        'Republic of Cyprus'
    ],
    activityAreas: [
        'Projektavimas',
        'Dizainas',
        'Statyba',
        'Gamyba'
    ],
    contacts: {
        phone: {
            mobile: ['+37066655444'],
            wirePhone: ['+37052600555'],
            fax: ['+37052600555']
        },
        email: ['saulius.sauliauskas@supertwo.eu'],
        address: {
            country: 'Lithuania',
            city: 'Vilnius',
            street: 'Laisvės pr.',
            apartment: 115
        }
    },
    subsidiaries: [],
    fullAddress() {
        let {street, apartment, city, country} = this.contacts.address;

        return street + ' ' + apartment + ', ' + city + ', ' + country + '.';
    },
    changeNvoStatusToTrue() {
        this.nvo = true;

        return this.nvo;
    },
    changeNvoStatusToFalse() {
        this.nvo = false;

        return this.nvo;
    },
    changeNvoStatusInOpposite() {
        this.nvo = !this.nvo;

        return this.nvo;
    },
    activityAreasString() {

        return this.toString(this.activityAreas);
    },
    workingLocationsString() {

        return this.toString(this.workingLocation);
    },
    toString(arr) {
        if (typeof (arr) === 'string') {
            return arr;
        }

        return arr.join(', ') + '.';
    },
    setWorkingLocation(argument) {
        this.workingLocation.push(argument);

        return this.workingLocation;
    },
    setActivityAreas(argument) {
        this.activityAreas.push(argument);

        return this.activityAreas;
    },
    deleteWorkingLocation(argument) {
        return this.workingLocation.filter(one => {
            return one !== argument;
        })
    },
    deleteActivityAreas(argument) {
        return this.activityAreas.filter(one => {
            return one !== argument;
        })
    }
};

// 4. BONUS: property „subsidiaries" sukurti kaip masyvą, kuriame gali būti ir daugiau dukterinių įmonių.

companyOne['subsidiaries'].push(subsidiaryOne);
companyOne['subsidiaries'].push(subsidiaryTwo);

console.log(companyOne);

console.groupEnd();

console.group();

// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".

companyOne.fullAddress = function () {

    let {street, apartment, city, country} = this.contacts.address;

    return street + ' ' + apartment + ', ' + city + ', ' + country + '.';
}
console.log(companyOne.fullAddress());

// 6. Sukurti dvi funkcijas, kurios:
// 6.1. Pakeičia NVO statusą į true.
// 6.2. Pakeičia NVO statusą į false.
companyOne.changeNvoStatusToTrue = function () {
    this.nvo = true;

    return this.nvo;
}

companyOne.changeNvoStatusToFalse = function () {
    this.nvo = false;

    return this.nvo;
}

console.log(companyOne.changeNvoStatusToTrue());

// 6.3. BONUS, sukurti funkciją, kuri keičia NVO statusą iš true į false ir iš false į true.

companyOne.changeNvoStatusInOpposite = function () {
    this.nvo = !this.nvo;

    return this.nvo;
}

// 7. Sukurti funkcijas, kurios grąžina:
// 7.1. Šalis, kuriose veikia įmonė į vieną string'ą.

companyOne.activityAreasString = function () {

    return this.toString(this.activityAreas);
}

// 7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.

companyOne.workingLocationsString = function () {

    return this.toString(this.workingLocation);
}

companyOne.toString = function (arr) {
    if (typeof (arr) === 'string') {
        return arr;
    }

    return arr.join(', ') + '.';
}

console.log(companyOne.workingLocationsString());
console.log(companyOne.activityAreasString());

// 8. Sukurti funkcijas, kurios prideda:
// 8.1. Naują veiklos šalį prie šalių masyvo.
// 8.2. Naują veiklos rūšį prie veiklų masyvo.

companyOne.setWorkingLocation = function (argument) {
    this.workingLocation.push(argument);

    return this.workingLocation;
}

companyOne.setWorkingLocation('Argentina');

companyOne.setActivityAreas = function (argument) {
    this.activityAreas.push(argument);

    return this.activityAreas;
}

companyOne.setActivityAreas('Finansai');

console.log(companyOne.activityAreasString());

// 9. Sukurti funkcijas, kurios pašalina:
// 9.1. Veiklos šalį iš šalių masyvo.
// 9.2. Veiklos rūšį iš veiklų masyvo.

companyOne.deleteWorkingLocation = function (argument) {
    return this.workingLocation.filter(one => {
        return one !== argument;
    })
}

companyOne.deleteActivityAreas = function (argument) {
    return this.activityAreas.filter(one => {
        return one !== argument;
    })
}

console.groupEnd();
console.log(companyOne.deleteWorkingLocation('Latvia'));
