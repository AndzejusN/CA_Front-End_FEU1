export default function shop(props) {

    let shopListContainer = document.createElement('div');
    shopListContainer.classList.add('shops-list');

    props.map(element => {

        let shopContainer = document.createElement('div');
        shopContainer.classList.add('shop');

        if (element.shopTitle) {
            let shopTitle = document.createElement('h3');
            shopTitle.classList.add('shop-title');
            shopTitle.innerHTML = element.shopTitle;

            shopContainer.append(shopTitle);
        }

        let shopList = document.createElement('ul');
        shopList.classList.add('shop-address-list');

        if (element.contactPhone) {
            let liPhone = document.createElement('li');
            liPhone.innerHTML = `Phone: <a href="tel:${element.contactPhone}">${element.contactPhone}</a>`;
            shopContainer.append(liPhone);
        }

        if (element.contactEmail) {
            let liEmail = document.createElement('li');
            liEmail.innerHTML = `Email: <a href="mailto:${element.contactEmail}">${element.contactEmail}</a>`;
            shopContainer.append(liEmail);
        }

        if (element.contactAddress) {
            let liAddress = document.createElement('li');
            liAddress.innerHTML = `Address: <a href="${element.contactAddress}" target="_blank">${element.contactAddress}</a>`;
            shopContainer.append(liAddress);
        }

        shopContainer.append(shopList);

        shopListContainer.append(shopContainer)
    })

    return shopListContainer;

}