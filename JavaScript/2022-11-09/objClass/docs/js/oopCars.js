/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./resources/js/oopCars.js ***!
  \*********************************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Car = /*#__PURE__*/function () {
  function Car(brand, model, engine) {
    var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'black';
    var mileage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var imageSrc = arguments.length > 5 ? arguments[5] : undefined;
    var basePrice = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 20000;
    _classCallCheck(this, Car);
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.mileage = mileage;
    this.basePrice = basePrice;
    this.imageSrc = imageSrc;
    this.color = color;
    this.baseColor = ['black', 'red', 'blue', 'silver', 'white', 'special blue'];
    this.priceHistory = {
      rawPrice: basePrice
    };
  }
  _createClass(Car, [{
    key: "turnOn",
    value: function turnOn() {
      alert('Vrooom');
    }
  }, {
    key: "getcheck",
    value: function getcheck() {
      this.basePrice = this.priceHistory.rawPrice;
      this.priceFromMileage();
      this.priceHistory.mileagePrice = this.basePrice;
      this.basePrice = this.priceHistory.rawPrice;
      this.priceFromEngine();
      this.priceHistory.enginePrice = this.basePrice;
    }
  }, {
    key: "getPrice",
    value: function getPrice() {
      this.priceFromMileage();
      this.priceFromEngine();
      this.priceByColor();
      return this.basePrice;
    }
  }, {
    key: "getDiscount",
    value: function getDiscount(percents) {
      this.getPrice();
      var discount = percents;
      if (percents >= 1) {
        discount = percents / 100;
      }
      return this.basePrice - this.basePrice * discount;
    }
  }, {
    key: "priceFromMileage",
    value: function priceFromMileage() {
      if (this.mileage > 400000) {
        return this.basePrice = this.basePrice * 0.5;
      }
      ;
      if (this.mileage > 100000) {
        return this.basePrice = this.basePrice * 0.7;
      }
      ;
      if (this.mileage > 50000) {
        return this.basePrice = this.basePrice * 0.8;
      }
      ;
      if (this.mileage > 20000) {
        return this.basePrice = this.basePrice * 0.85;
      }
      ;
      if (this.mileage > 0) {
        return this.basePrice = this.basePrice * 0.9;
      }
      ;
      return this.basePrice;
    }
  }, {
    key: "priceFromEngine",
    value: function priceFromEngine() {
      if (this.engine == 'diesel') {
        return this.basePrice = this.basePrice + 5000;
      }
      if (this.engine == 'electric') {
        return this.basePrice = this.basePrice + 10000;
      }
      return this.basePrice;
    }
  }, {
    key: "priceByColor",
    value: function priceByColor() {
      if (!this.baseColor.includes(this.color)) {
        this.basePrice = this.basePrice + 3000;
      } else if (this.baseColor.includes('special blue')) {
        this.basePrice = this.basePrice + 500;
      }
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var resultContainer = document.querySelector('.result-container');
      var divCard = document.createElement('div');
      divCard.classList.add('card');
      divCard.style.width = '300px';
      divCard.style.padding = '10px';
      divCard.style.margin = '20px';
      var img = document.createElement('img');
      img.src = "https://da4dkroembtou.cloudfront.net/wp-content/uploads/2022/08/h2.jpg";
      img.classList.add('card-img-top');
      img.alt = 'Photo of car';
      var divCardBody = document.createElement('div');
      divCardBody.classList.add('card-body');
      var h5 = document.createElement('h5');
      h5.classList.add('card-title');
      h5.textContent = 'Automobilis: ' + this.brand;
      var p = document.createElement('p');
      p.classList.add('card-text');
      var ul = document.createElement('ul');
      ul.classList.add('list-group', 'list-group-flush');
      var liModel = document.createElement('li');
      liModel.classList.add('list-group-item');
      liModel.textContent = 'Model: ' + this.model;
      var liFuel = document.createElement('li');
      liFuel.classList.add('list-group-item');
      liFuel.textContent = 'Fuel:  ' + this.engine;
      var liColor = document.createElement('li');
      liColor.classList.add('list-group-item');
      liColor.textContent = 'Color: ' + this.color;
      var divCardFooter = document.createElement('div');
      divCardFooter.classList.add('card-footer');
      divCardFooter.textContent = 'Price just: ' + this.basePrice + ' Euro';
      var button = document.createElement('button');
      button.classList.add('btn', 'btn-primary');
      button.setAttribute('type', 'button');
      button.setAttribute('data-bs-toggle', 'modal');
      button.setAttribute('data-bs-target', '#exampleModal');
      button.setAttribute('data-bs-brand', this.brand);
      button.setAttribute('data-bs-model', this.model);
      button.setAttribute('data-bs-base-price', this.basePrice);
      button.setAttribute('data-bs-discount-mileage', this.priceFromMileage());
      button.setAttribute('data-bs-discount-value', this.basePrice - this.priceFromMileage());
      button.setAttribute('data-bs-discount-total', this.basePrice);
      button.setAttribute('data-bs-discount-vat', this.basePrice * 1.21 - this.basePrice);
      button.innerText = 'Daugiau informacijos';
      resultContainer.append(divCard);
      divCard.append(img, divCardBody, ul, divCardFooter, button);
      divCardBody.append(h5, p);
      ul.append(liModel, liFuel, liColor);
    }
  }]);
  return Car;
}();
var firstCar = new Car('BMW', 'X6', 'diesel', 'white', 100001);
var secondCar = new Car('Opel', 'Last', 'electric', 20001);
firstCar.getcheck();
firstCar.renderElement();
var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var brand = event.target.elements.brand.value;
  var model = event.target.elements.model.value;
  var engine = event.target.elements.engine.value;
  var color = event.target.elements.color.value;
  var mileage = event.target.elements.brand.value;
  var picture = event.target.elements.picture.value;
  var price = event.target.elements.price.value;
  var firstCar = new Car(brand, model, engine, color, mileage, picture, price);
  firstCar.renderElement();
  // form.clear();
});

var exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget;
  var brand = button.getAttribute('data-bs-brand');
  var model = button.getAttribute('data-bs-model');
  var basePrice = button.getAttribute('data-bs-base-price');
  var discountMileage = button.getAttribute('data-bs-discount-mileage');
  var discountValue = button.getAttribute('data-bs-discount-value');
  var discountTotal = button.getAttribute('data-bs-discount-total');
  var discountVat = button.getAttribute('data-bs-discount-vat');
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBrand = exampleModal.querySelector('.modal-body  #recipient-name');
  var modalModel = exampleModal.querySelector('.modal-body #recipient-model');
  var modalBasePrice = exampleModal.querySelector('.modal-body #recipient-base-price');
  var modalDiscountMileage = exampleModal.querySelector('.modal-body #recipient-discount-mileage');
  var modalDiscountValue = exampleModal.querySelector('.modal-body #recipient-discount-value');
  var modalDiscountTotal = exampleModal.querySelector('.modal-body #recipient-discount-total');
  var modalDiscountVat = exampleModal.querySelector('.modal-body #recipient-discount-vat');
  modalTitle.textContent = "More information about: ".concat(brand);
  modalBrand.textContent = brand;
  modalModel.textContent = model;
  modalBasePrice.textContent = basePrice;
  modalDiscountMileage.textContent = discountMileage;
  modalDiscountValue.textContent = discountValue;
  modalDiscountTotal.textContent = discountTotal;
  modalDiscountVat.textContent = discountVat;
});
/******/ })()
;