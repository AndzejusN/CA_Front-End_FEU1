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

export async function fetchData(url, obj, methodSend = 'POST'){
 
    if(obj) {
        let response = await fetch(url,{
            method: methodSend,
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

export async function generatePaginationToDom(dataToPagination){

    let { currentPage, appendDomTag, source, numberPerPage } = dataToPagination;

    currentPage = parseInt(currentPage);

    const queryString = window.location.pathname;

    let dataTotal = await fetchData(source);
    let total = dataTotal.length;
 
    let paginationWrapper = document.createElement('div');
    paginationWrapper.style.width = '100%';
    paginationWrapper.style.display = 'flex';
    appendDomTag.prepend(paginationWrapper);
 
     let limit = numberPerPage;
     let pages = Math.ceil(total/limit);
     
    for (let i = 1; i <= pages; i++){
 
        if (i===1 && currentPage==1){
             let span = document.createElement('span');
             span.innerText = 'First page';
             span.style.padding = '15px';
             span.style.margin = '0 3px';
             span.style.backgroundColor = 'white';
             span.style.border = 'solid grey 1px';
             paginationWrapper.append(span);
        } else if (i===1) {
             let a = document.createElement('a');
             a.href = `${queryString}?_page=${i}&_limit=${limit}`;
             a.textContent = 'First page';
             a.style.padding = '15px';
             a.style.backgroundColor = 'white';
             a.style.border = 'solid grey 1px';
             a.style.margin = '0 3px';
             paginationWrapper.append(a);
        }

        if (i===1 && currentPage==1) {
            let span = document.createElement('span');
            span.innerText = '<';
            span.style.padding = '15px';
            span.style.margin = '0 3px';
            span.style.backgroundColor = 'white';
            span.style.border = 'solid grey 1px';
            paginationWrapper.append(span);
        } else if (i===1) {
            let a = document.createElement('a');
            a.href = `${queryString}?_page=${currentPage-1}&_limit=${limit}`;
            a.textContent = '<';
            a.style.padding = '15px';
            a.style.backgroundColor = 'white';
            a.style.border = 'solid grey 1px';
            a.style.margin = '0 3px';
            paginationWrapper.append(a);
        }

        if (currentPage == i) {
            let span = document.createElement('span');
            span.innerText = currentPage;
            span.style.padding = '15px';
            span.style.margin = '0 3px';
            span.style.backgroundColor = 'white';
            span.style.border = 'solid grey 1px';
            paginationWrapper.append(span);
        } else {
             let a = document.createElement('a');
             a.href = `${queryString}?_page=${i}&_limit=${limit}`;
             a.textContent = i;
             a.style.padding = '15px';
             a.style.backgroundColor = 'white';
             a.style.border = 'solid grey 1px';
             a.style.margin = '0 3px';
             paginationWrapper.append(a);
        }

        if (i==pages && currentPage==pages) {
            let span = document.createElement('span');
            span.innerText = '>';
            span.style.padding = '15px';
            span.style.margin = '0 3px';
            span.style.backgroundColor = 'white';
            span.style.border = 'solid grey 1px';
            paginationWrapper.append(span);
        } else if (i==pages){
            let a = document.createElement('a');
            a.href = `${queryString}?_page=${currentPage+1}&_limit=${limit}`;
            a.textContent = '>';
            a.style.padding = '15px';
            a.style.backgroundColor = 'white';
            a.style.border = 'solid grey 1px';
            a.style.margin = '0 3px';
            paginationWrapper.append(a);
        }
 
        if (i==pages && currentPage==pages) {
             let span = document.createElement('span');
             span.innerText = 'Last page';
             span.style.padding = '15px';
             span.style.margin = '0 3px';
             span.style.backgroundColor = 'white';
             span.style.border = 'solid grey 1px';
             paginationWrapper.append(span);
        } else if (i==pages) {
             let a = document.createElement('a');
             a.href = `${queryString}?_page=${i}&_limit=${limit}`;
             a.textContent = 'Last page';
             a.style.padding = '15px';
             a.style.backgroundColor = 'white';
             a.style.border = 'solid grey 1px';
             a.style.margin = '0 3px';
             paginationWrapper.append(a);
        }
     }

    let perPageContainerDom = document.createElement('div');
    perPageContainerDom.style.width = '100%';
    perPageContainerDom.style.display = 'flex';

    let linkPerPageFive = document.createElement('a');
    linkPerPageFive.href = `${queryString}?_page=${currentPage}&_limit=10`;
    linkPerPageFive.textContent = 'Per page results: 10';
    linkPerPageFive.style.padding = '15px';
    linkPerPageFive.style.backgroundColor = 'white';
    linkPerPageFive.style.border = 'solid grey 1px';
    linkPerPageFive.style.margin = '0 3px';
    perPageContainerDom.append(linkPerPageFive);

    let linkPerPageTen = document.createElement('a');
    linkPerPageTen.href = `${queryString}?_page=${currentPage}&_limit=20`;
    linkPerPageTen.textContent = 'Per page results: 20';
    linkPerPageTen.style.padding = '15px';
    linkPerPageTen.style.backgroundColor = 'white';
    linkPerPageTen.style.border = 'solid grey 1px';
    linkPerPageTen.style.margin = '0 3px';
    perPageContainerDom.append(linkPerPageTen);

    let linkPerPageTwenty = document.createElement('a');
    linkPerPageTwenty.href = `${queryString}?_page=${currentPage}&_limit=50`;
    linkPerPageTwenty.textContent = 'Per page results: 50';
    linkPerPageTwenty.style.padding = '15px';
    linkPerPageTwenty.style.backgroundColor = 'white';
    linkPerPageTwenty.style.border = 'solid grey 1px';
    linkPerPageTwenty.style.margin = '0 3px';
    perPageContainerDom.append(linkPerPageTwenty);

    appendDomTag.append(perPageContainerDom);
 }