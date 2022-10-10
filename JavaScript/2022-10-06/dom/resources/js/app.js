// 1. Sukurti HTML elementą, kurio id „numbers"
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus
// 3. h3 elemento tekstas turėtų būti „0"
// 4. Mygtukų tekstas turėtų būti „+" ir „-"
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams.
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti
// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" myktukas turėtų patapti neveiksnus (disabled)
// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.
// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

let numbers = document.getElementById('numbers');

let h3 = document.createElement('h3');
let resetColor = h3.style.color = 'green';
let resetNumber = h3.textContent = '5';

h3.style.width = '200px';
h3.style.textAlign = 'center';
numbers.appendChild(h3);

let buttonsWrapper = document.createElement('div');
buttonsWrapper.style.display = 'flex';
buttonsWrapper.style.width = '100%';
numbers.appendChild(buttonsWrapper);

let buttonMinus = document.createElement('button');
buttonMinus.textContent = '-';
buttonMinus.style.minWidth = '100px';
buttonMinus.classList.add('btn', 'btn-primary');
buttonsWrapper.appendChild(buttonMinus);

let buttonPlus = document.createElement('button');
buttonPlus.textContent = '+';
buttonPlus.style.minWidth = '100px';
buttonPlus.classList.add('btn', 'btn-success');
buttonsWrapper.appendChild(buttonPlus);

let buttonsWrapper2 = document.createElement('div');
buttonsWrapper2.style.display = 'flex';
buttonsWrapper2.style.width = '100%';
numbers.appendChild(buttonsWrapper2);

let buttonsWrapper3 = document.createElement('div');
buttonsWrapper3.style.display = 'flex';
buttonsWrapper3.style.width = '100%';
numbers.appendChild(buttonsWrapper3);

let buttonMinus2 = document.createElement('button');
buttonMinus2.textContent = '-2';
buttonMinus2.style.minWidth = '100px';
buttonMinus2.classList.add('btn', 'btn-primary');
buttonsWrapper2.appendChild(buttonMinus2);

let buttonPlus2 = document.createElement('button');
buttonPlus2.textContent = '+2';
buttonPlus2.style.minWidth = '100px';
buttonPlus2.classList.add('btn', 'btn-success');
buttonsWrapper2.appendChild(buttonPlus2);

let buttonMinus4 = document.createElement('button');
buttonMinus4.textContent = '-4';
buttonMinus4.style.minWidth = '100px';
buttonMinus4.classList.add('btn', 'btn-primary');
buttonsWrapper3.appendChild(buttonMinus4);

let buttonPlus4 = document.createElement('button');
buttonPlus4.textContent = '+4';
buttonPlus4.style.minWidth = '100px';
buttonPlus4.classList.add('btn', 'btn-success');
buttonsWrapper3.appendChild(buttonPlus4);

let buttonReset = document.createElement('button');
buttonReset.textContent = 'RESET';
buttonReset.style.minWidth = '200px';
buttonReset.classList.add('btn', 'btn-danger');
numbers.appendChild(buttonReset);

buttonMinus.addEventListener('click', () => {
    let result = getAndSetData(h3, -1);
    startEngine(result);
})

buttonPlus.addEventListener('click', () => {
    let result = getAndSetData(h3, 1);
    startEngine(result);
})

buttonMinus2.addEventListener('click', () => {
    let result = getAndSetData(h3, -2);
    startEngine(result);
})

buttonPlus2.addEventListener('click', () => {
    let result = getAndSetData(h3, 2);
    startEngine(result);
})

buttonMinus4.addEventListener('click', () => {
    let result = getAndSetData(h3, -4);
    startEngine(result);
})

buttonPlus4.addEventListener('click', () => {
    let result = getAndSetData(h3, 4);
    startEngine(result);
})

buttonReset.addEventListener('click', () => {
    h3.textContent = resetNumber;
    h3.style.color = resetColor;
    buttonMinus.removeAttribute('disabled');
    buttonPlus.removeAttribute('disabled');
    buttonMinus2.removeAttribute('disabled');
    buttonPlus2.removeAttribute('disabled');
    buttonMinus4.removeAttribute('disabled');
    buttonPlus4.removeAttribute('disabled');
})

function startEngine(result) {
    enableDisableMinus(result);
    enableDisablePlus(result);
    setColor(result, h3);
}

let value;

function getAndSetData(tag, value = 0, change) {
    let number = parseInt(tag.textContent);
    let result = number + value;
    tag.textContent = result;

    if (change) {
        tag.textContent = value;
    }


    return result;
}

function enableDisableMinus(result) {
    if (result < 2) {
        buttonMinus.setAttribute('disabled', true);
    } else {
        buttonMinus.disabled = false;
    }
    if (result < 3) {
        buttonMinus2.setAttribute('disabled', true);
    } else {
        buttonMinus2.disabled = false;
    }
    if (result < 5) {
        buttonMinus4.setAttribute('disabled', true);
    } else {
        buttonMinus4.disabled = false;
    }
}

function enableDisablePlus(result) {
    if (result >= 10) {
        buttonPlus.setAttribute('disabled', true);
    } else {
        buttonPlus.disabled = false;
    }
    if (result >= 9) {
        buttonPlus2.setAttribute('disabled', true);
    } else {
        buttonPlus2.disabled = false;
    }
    if (result >= 6) {
        buttonPlus4.setAttribute('disabled', true);
    } else {
        buttonPlus4.disabled = false;
    }
}

function setColor(result, tag) {
    if (result >= 5) {
        tag.style.color = 'green';
    } else {
        tag.style.color = 'red';
    }
}

// 13. Sukurti naują elementą (h4) ir jį pridėti į „numbers" elemento pabaigą.
// 13.1. Šio elemento tekstas turėtų būti „Balai:"
// 14. Sukurti naują elementą (ul) ir jį pridėti į „numbers" elemento pabaigą.
// 14.1. Sukurti naują mygtuką, kurio teksta būtų „Įrašyti balą".
// 14.2. Paspaudus šį mygtuką, reikia paimti reikšmę iš h3 elemento ir sukurti naują li elementą bei jį append'inti prie ul elemento.
// 14.3. Nuresetinti skaičiuoklę.

let divResult = document.createElement('div');
numbers.appendChild(divResult);

let buttonResult = document.createElement('button');
buttonResult.textContent = 'PUSH (Įrašyti balą)';
buttonResult.style.minWidth = '200px';
buttonResult.classList.add('btn', 'btn-info');
divResult.appendChild(buttonResult);

let buttonResultReset = document.createElement('button');
buttonResultReset.textContent = 'RESET (Balai)';
buttonResultReset.style.minWidth = '200px';
buttonResultReset.classList.add('btn', 'btn-danger');
divResult.appendChild(buttonResultReset);

let h4 = document.createElement('h4');
h4.textContent = 'Balai:';
divResult.appendChild(h4);

buttonResult.addEventListener('click', () => {
    let ulOne = document.querySelector('ul');

    if (!ulOne) {
        ulOne = createUl();
    }

    let li = document.createElement('li');
    li.textContent = parseInt(h3.textContent);
    setColor(li.textContent, li);
    ulOne.appendChild(li);

    li.addEventListener('click', () => li.remove());

})

buttonResultReset.addEventListener('click', () => {
    let ul = document.querySelector('ul');
    divResult.removeChild(ul);
})

function createUl() {
    let ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    divResult.appendChild(ul);

    return ul;
}

let input = document.createElement('input');

input.setAttribute('type', 'number');
input.setAttribute('min', '1');
input.setAttribute('max', '10');

input.value = (value) ? value : resetNumber;

let container = document.querySelector('.container');
container.appendChild(input);

input.addEventListener('input', () => {
    getAndSetData(h3, input.valueAsNumber, 1);
    setColor(input.valueAsNumber, h3);
})




