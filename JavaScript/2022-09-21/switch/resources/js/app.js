let oneForAll = document.querySelector('.one-for-all');

function oneForAllFunction(bgColor = '', text = '', flag = false) {

    if (bgColor.length > 0) {
        oneForAll.classList.add(bgColor);

    } else {
        oneForAll.classList.add('text-bg-secondary');
    }

    if (text.length > 0) {
        oneForAll.textContent = text;

    } else {
        oneForAll.textContent = 'No information is available';
        oneForAll.classList.add('text-bg-secondary');
    }

    oneForAll.style.fontSize = '70px';
    oneForAll.style.textTransform = 'uppercase';
    oneForAll.style.textAlign = 'center';
    oneForAll.style.padding = '30px';

    if (flag) {
        oneForAll.textContent = 'Sugedo :(';
    }
}

let originalLight = '';
let light = originalLight.toLowerCase();
switch (light) {
    case 'green':
        oneForAllFunction('text-bg-success', 'Galima eiti');
        break;
    case 'yellow':
        oneForAllFunction('text-bg-warning', 'Pasiruošk');
        break;
    case 'red':
        oneForAllFunction('text-bg-danger', 'STOP');
        break;
    default:
        oneForAllFunction('text-bg-danger', 'Sugedo :(', true);
}