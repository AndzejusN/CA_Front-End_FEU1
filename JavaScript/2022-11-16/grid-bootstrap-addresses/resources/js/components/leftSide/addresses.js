import shop from './shop.js';

export default function addresses(props) {

let address = document.createElement('div');
address.classList.add('shops-wrapper');

let mainTitleElement = document.createElement('h2');
mainTitleElement.classList.add('shops-section-title');
mainTitleElement.innerText = props.mainTitle;

address.append(mainTitleElement, shop(props.shopList));

return address;
}