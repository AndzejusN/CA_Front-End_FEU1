export function firstLetterToUpperCase(text) {

 let firstLetter = text[0].toUpperCase();
 let withoutFirstLetter = text.slice(1);

return firstLetter + withoutFirstLetter;
}

export function getSearchPhrase(name){
    const queryParams = document.location.search;
    const urlParams = new URLSearchParams(queryParams);
    const inputSearch = urlParams.get(name);

    return inputSearch;
}

export function waitingForDataSpinner() {

    let spinner = document.querySelector('.loading');

    if (spinner.style.display === 'none') {
        spinner.style.display = 'block';
    }
    else {
        spinner.style.display = 'none';   
    }
}

export async function fetchData(url, obj){
 
    if(obj) {
        let response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(obj),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
      })

      return await response.json();
    }

    let response = await fetch(url);
    return await response.json();   
}

export function createDomElement(tagName, content, asignClass){

    let element = document.createElement(tagName);

    let isHtml = checkIsHtml(content);

    if(content && isHtml) {
        element.innerHTML = content;
        } else if (content) {
            element.textContent = content;
        }
    
    if(asignClass){
    element.className = asignClass;
    }

    return element;
}

export function generateBootstrapCard(obj) {

    let divCardMain = createDomElement('div', '', 'card card-parameters');

    let divCardHeader = createDomElement('div', obj.header, 'card-header');
    divCardMain.appendChild(divCardHeader);

    let ul = createDomElement('ul', '', 'list-group list-group-flush');
    divCardMain.appendChild(ul);

    obj.list.map(elem => {
        let li = createDomElement('li', elem, 'list-group-item')
        ul.appendChild(li);
    })

    return divCardMain;
}

function checkIsHtml(elem){
    let arr = ['<img', 'src', 'href', '<a', '</a>'];
    let isHtml = false;

    arr.map(arrElem => {
        isHtml = elem.includes(arrElem) ?  true :  isHtml;
    });

    return isHtml;
}