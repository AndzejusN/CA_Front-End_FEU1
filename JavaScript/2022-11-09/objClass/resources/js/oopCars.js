class Car {
    constructor(brand, model, engine, color = 'black', mileage = 0, imageSrc, basePrice = 20000){
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.mileage = mileage;
        this.basePrice = basePrice;
        this.imageSrc = imageSrc;

        this.color = color;
        this.baseColor = ['black', 'red', 'blue', 'silver', 'white', 'special blue'];

        this.priceHistory = {rawPrice : basePrice};
    }

    turnOn() {
        alert('Vrooom');
    }


    getcheck(){
       this.basePrice =  this.priceHistory.rawPrice;
       this.priceFromMileage();
       this.priceHistory.mileagePrice = this.basePrice;

       this.basePrice =  this.priceHistory.rawPrice;
       this.priceFromEngine();
       this.priceHistory.enginePrice = this.basePrice;
    }

    getPrice() {
    this.priceFromMileage();
    this.priceFromEngine();
    this.priceByColor();

    return this.basePrice;
    }

    getDiscount(percents) {

        this.getPrice();

            let discount = percents;

            if (percents >= 1){
            discount  = percents/100;
            } 
            return this.basePrice - (this.basePrice * discount);
    }

    priceFromMileage(){
            if (this.mileage > 400000){return this.basePrice = this.basePrice*0.5};
            if (this.mileage > 100000){return this.basePrice = this.basePrice*0.7};
            if (this.mileage > 50000){return this.basePrice = this.basePrice*0.8};
            if (this.mileage > 20000){return this.basePrice = this.basePrice*0.85};
            if (this.mileage > 0 ){return this.basePrice = this.basePrice*0.9};
            return this.basePrice;
    }

    priceFromEngine(){
            if (this.engine == 'diesel'){return this.basePrice = this.basePrice + 5000;}
            if (this.engine == 'electric'){return this.basePrice = this.basePrice + 10000;}
            return this.basePrice;
    }

    priceByColor() {
            if(!(this.baseColor.includes(this.color))){
               this.basePrice = this.basePrice + 3000;
            } else if (this.baseColor.includes('special blue')){
                this.basePrice = this.basePrice + 500
            }
    }

    renderElement() {
            let resultContainer = document.querySelector('.result-container');
            
            let divCard = document.createElement('div');
            divCard.classList.add('card');
            divCard.style.width = '300px';
            divCard.style.padding = '10px';
            divCard.style.margin = '20px';
            
            let img = document.createElement('img');
            img.src = "https://da4dkroembtou.cloudfront.net/wp-content/uploads/2022/08/h2.jpg";
            img.classList.add('card-img-top');
            img.alt = 'Photo of car';
    
            let divCardBody = document.createElement('div');
            divCardBody.classList.add('card-body');
    
            let h5 = document.createElement('h5');
            h5.classList.add('card-title');
            h5.textContent = 'Automobilis: ' + this.brand;
    
            let p = document.createElement('p');
            p.classList.add('card-text');
    
            let ul = document.createElement('ul');
            ul.classList.add('list-group', 'list-group-flush');
    
            let liModel = document.createElement('li');
            liModel.classList.add('list-group-item');
            liModel.textContent = 'Model: ' + this.model;

            let liFuel = document.createElement('li');
            liFuel.classList.add('list-group-item');
            liFuel.textContent = 'Fuel:  ' + this.engine;

            let liColor = document.createElement('li');
            liColor.classList.add('list-group-item');
            liColor.textContent = 'Color: ' + this.color;

            let divCardFooter = document.createElement('div');
            divCardFooter.classList.add('card-footer');
            divCardFooter.textContent = 'Price just: ' + this.basePrice + ' Euro';

            let button = document.createElement('button');
            button.classList.add('btn', 'btn-primary');
            button.setAttribute('type','button');
            button.setAttribute('data-bs-toggle','modal');
            button.setAttribute('data-bs-target','#exampleModal');
            button.setAttribute('data-bs-brand', this.brand);
            button.setAttribute('data-bs-model', this.model);
            button.setAttribute('data-bs-base-price', this.basePrice);
            button.setAttribute('data-bs-discount-mileage', (this.priceFromMileage()));
            button.setAttribute('data-bs-discount-value', (this.basePrice - this.priceFromMileage()));
            button.setAttribute('data-bs-discount-total', this.basePrice);
            button.setAttribute('data-bs-discount-vat', (this.basePrice * 1.21 - this.basePrice));

            button.innerText = 'Daugiau informacijos';

            resultContainer.append(divCard);
            divCard.append(img, divCardBody, ul, divCardFooter, button);
            divCardBody.append(h5, p);
            ul.append(liModel, liFuel, liColor);
    }

}
    let firstCar = new Car('BMW', 'X6', 'diesel', 'white', 100001);
    let secondCar = new Car('Opel', 'Last', 'electric', 20001);

    firstCar.getcheck();
    firstCar.renderElement();
    let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
event.preventDefault();

let brand = event.target.elements.brand.value;
let model = event.target.elements.model.value;
let engine = event.target.elements.engine.value;
let color = event.target.elements.color.value;
let mileage = event.target.elements.brand.value;
let picture = event.target.elements.picture.value;
let price = event.target.elements.price.value;

let firstCar = new Car(brand, model, engine, color, mileage, picture, price);

firstCar.renderElement();
// form.clear();
})

const exampleModal = document.getElementById('exampleModal');

exampleModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget;

  const brand = button.getAttribute('data-bs-brand');
  const model = button.getAttribute('data-bs-model');
  const basePrice = button.getAttribute('data-bs-base-price');
  const discountMileage = button.getAttribute('data-bs-discount-mileage');
  const discountValue = button.getAttribute('data-bs-discount-value');
  const discountTotal = button.getAttribute('data-bs-discount-total');
  const discountVat = button.getAttribute('data-bs-discount-vat');

  const modalTitle = exampleModal.querySelector('.modal-title');
  const modalBrand = exampleModal.querySelector('.modal-body  #recipient-name');
  const modalModel = exampleModal.querySelector('.modal-body #recipient-model');
  const modalBasePrice = exampleModal.querySelector('.modal-body #recipient-base-price');
  const modalDiscountMileage = exampleModal.querySelector('.modal-body #recipient-discount-mileage');
  const modalDiscountValue = exampleModal.querySelector('.modal-body #recipient-discount-value');
  const modalDiscountTotal = exampleModal.querySelector('.modal-body #recipient-discount-total');
  const modalDiscountVat = exampleModal.querySelector('.modal-body #recipient-discount-vat');

  modalTitle.textContent = `More information about: ${brand}`;
  modalBrand.textContent = brand;
  modalModel.textContent = model;
  modalBasePrice.textContent = basePrice;
  modalDiscountMileage.textContent = discountMileage;
  modalDiscountValue.textContent = discountValue;
  modalDiscountTotal.textContent = discountTotal;
  modalDiscountVat.textContent = discountVat;
})