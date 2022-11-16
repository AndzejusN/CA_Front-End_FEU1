export default function shop(props) {

let shopListContainer = document.createElement('div');
shopListContainer.classList.add('shops-list');

props.shopList.map(element => {

let shopContainer = document.createElement('div');
shopContainer.classList.add('shop');

let shopTitle = document.createElement('h3');
shopTitle.classList.add('shop-title');
shopTitle.innerHTML = element.shopTitle;

let shopList = document.createElement('ul');
shopList.classList.add('shop-address-list');

let liPhone = document.createElement('li');
liPhone.innerHTML = `Phone: <a href="tel:${element.contactPhone}">${element.contactPhone}</a>`;

let liEmail = document.createElement('li');
liEmail.innerHTML = `Phone: <a href="mailto:${element.contactEmail}">${element.contactEmail}</a>`;

let liAddress = document.createElement('li');
liAddress.innerHTML = `Phone: <a href="${element.contactAddress}" target="_blank">${element.contactAddress}</a>`;

shopList.append(liPhone, liEmail, liAddress);

shopContainer.append(shopTitle, shopList);

shopListContainer.append(shopContainer)
})

return shopListContainer;

}