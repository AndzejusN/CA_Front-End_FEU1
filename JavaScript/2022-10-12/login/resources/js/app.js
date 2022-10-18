let form = document.querySelector('.login-form');
let submitButtonLogin = document.getElementById('submit');
let resetButton = document.getElementById('reset');
let userName = document.getElementById('name');
let userPassword = document.getElementById('password');
let checkbox = document.getElementById('check');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = authentification(userName.value, userPassword.value);

    if (result) {
        createLoggedPage();

    } else {
        validationNotMatch();
        userPassword.value = '';
    }
})

let submitEnabled = false;
let checkboxEnable = false;
let nameEnable = false;
let passwordEnable = false;

checkbox.addEventListener('change', () => {
    checkboxEnable = !checkboxEnable;
    submitEnabledCheck();
})

userName.addEventListener('change', () => {
    if (userName.value.length > 4) {
        nameEnable = true;
        submitEnabledCheck()
    } else {
        nameEnable = false;
        submitEnabledCheck()
    }
})

userPassword.addEventListener('change', () => {

    if (userPassword.value.length > 10) {
        passwordEnable = true;
        submitEnabledCheck()
    } else {
        passwordEnable = false;
        submitEnabledCheck()
    }
})

function submitEnabledCheck() {
    if (passwordEnable && nameEnable && checkboxEnable) {
        submitEnabled = !submitEnabled;
    } else {
        submitEnabled = false;
    }

    if (submitEnabled) {
        submitButtonLogin.toggleAttribute('disabled');
    } else {
        submitButtonLogin.setAttribute('disabled', '');
    }
}

let usersList = [
    {
        userName: 'Andrius',
        userPassword: 'andrius123456',
    },
    {
        userName: 'Petras',
        userPassword: 'petras123456',
    },
    {
        userName: 'Jonas',
        userPassword: 'jonas123456',
    },
    {
        userName: 'Povilas',
        userPassword: 'povilas123456',
    },
    {
        userName: 'Vytautas',
        userPassword: 'vytautas123456',
    }
];

function authentification(name, password) {
    let isAuth = false;

    usersList.map(value => {
        if (value.userName === name && value.userPassword === password) {
            isAuth = true;
        }
    })

    return isAuth;
}

function createLoggedPage() {
    let formContainer = document.querySelector('.form-wrapper');
    formContainer.remove();

    let container = document.querySelector('.container');

    let h1 = document.createElement('h1');
    h1.textContent = 'Sveikinu sėkmingai prisijungus';
    container.appendChild(h1);

    localStorage.setItem('isLogged', 'true');

    let isLoggedButton = document.createElement('button');
    isLoggedButton.classList.add('secondary', 'outline');
    isLoggedButton.textContent = 'LogOut';
    container.appendChild(isLoggedButton);

    isLoggedButton.addEventListener('click', () => {
        clearStorageUserLog();
        localStorage.setItem('isLogged', 'false');
        location.reload();
    })
}

function validationNotMatch() {
    let h3 = document.createElement('h3');
    h3.textContent = 'Prisijungimo vardas arba slaptažodis buvo neteisingas';
    h3.classList.add('alert', 'alert-danger');
    form.prepend(h3)
}

function inputLocalStorage(input) {
    let localStorageValue = localStorage.getItem(input.id);

    if (input.type === 'checkbox') {
        let isChecked = localStorageValue === 'true';
        input.checked = isChecked;

        input.addEventListener('change', () => {
            localStorage.setItem(input.id, input.checked);
        })

    } else {
        input.value = localStorageValue;
        input.addEventListener('change', () => {
            localStorage.setItem(input.id, input.value);
        })
    }
}

inputLocalStorage(userName);
inputLocalStorage(userPassword);
inputLocalStorage(checkbox);

if (localStorage.getItem('isLogged') === 'true') {
    createLoggedPage();
}

resetButton.addEventListener('click', () => {
    clearStorageUserLog();
})

function clearStorageUserLog() {
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    localStorage.removeItem('check');
}