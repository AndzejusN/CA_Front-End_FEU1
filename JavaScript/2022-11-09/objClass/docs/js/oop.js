/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/Classes/Animal.js":
/*!****************************************!*\
  !*** ./resources/js/Classes/Animal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animal": () => (/* binding */ Animal)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Animal = /*#__PURE__*/function () {
  function Animal(legs, color, gender, warmBlooded) {
    _classCallCheck(this, Animal);
    this.legs = legs;
    this.color = color;
    this.gender = gender;
    this.warmBlooded = warmBlooded;
  }
  _createClass(Animal, [{
    key: "eat",
    value: function eat() {
      return "I'm eating.";
    }
  }, {
    key: "sleep",
    value: function sleep() {
      return "I'm sleeping.";
    }
  }, {
    key: "renderText",
    value: function renderText(text, selector) {
      if (!text || !selector) return;
      var element = document.querySelector(selector);
      element.textContent = text;
    }
  }, {
    key: "getAllParameters",
    value: function getAllParameters() {
      var output = "Have/has legs: ".concat(this.legs, ";\n      Color is: ").concat(this.color, ";\n      Gender is: ").concat(this.gender, "\n      WarmBlooded: ").concat(this.gender);
      return output;
    }
  }, {
    key: "getPropertiesValues",
    value: function getPropertiesValues() {
      return Object.values(this);
    }
  }]);
  return Animal;
}();

/***/ }),

/***/ "./resources/js/Classes/Bird/Bird.js":
/*!*******************************************!*\
  !*** ./resources/js/Classes/Bird/Bird.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bird": () => (/* binding */ Bird)
/* harmony export */ });
/* harmony import */ var _Animal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Animal.js */ "./resources/js/Classes/Animal.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Bird = /*#__PURE__*/function (_Animal) {
  _inherits(Bird, _Animal);
  var _super = _createSuper(Bird);
  function Bird(legs, color, gender, warmBlooded, canFly) {
    var _this;
    _classCallCheck(this, Bird);
    _this = _super.call(this, legs, color, gender, warmBlooded);
    _this.canFly = canFly;
    return _this;
  }
  _createClass(Bird, [{
    key: "flying",
    value: function flying() {
      if (this.canFly) {
        return "I'm flying now ...";
      } else {
        return;
      }
    }
  }]);
  return Bird;
}(_Animal_js__WEBPACK_IMPORTED_MODULE_0__.Animal);

/***/ }),

/***/ "./resources/js/Classes/Bird/Parrot/Parrot.js":
/*!****************************************************!*\
  !*** ./resources/js/Classes/Bird/Parrot/Parrot.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bird_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bird.js */ "./resources/js/Classes/Bird/Bird.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Parot = /*#__PURE__*/function (_Bird) {
  _inherits(Parot, _Bird);
  var _super = _createSuper(Parot);
  function Parot(legs, color, gender, warmBlooded, canFly, canReproduceSpeech) {
    var _this;
    _classCallCheck(this, Parot);
    _this = _super.call(this, legs, color, gender, warmBlooded, canFly);
    _this.canReproduceSpeech = canReproduceSpeech;
    return _this;
  }
  _createClass(Parot, [{
    key: "speaking",
    value: function speaking() {
      if (this.canReproduceSpeech) {
        return "Now I'm speaking do not disturb me please ...";
      } else {
        return;
      }
    }
  }]);
  return Parot;
}(_Bird_js__WEBPACK_IMPORTED_MODULE_0__.Bird);

/***/ }),

/***/ "./resources/js/Classes/Bird/Vulture/Vulture.js":
/*!******************************************************!*\
  !*** ./resources/js/Classes/Bird/Vulture/Vulture.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vulture": () => (/* binding */ Vulture)
/* harmony export */ });
/* harmony import */ var _Bird_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bird.js */ "./resources/js/Classes/Bird/Bird.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Vulture = /*#__PURE__*/function (_Bird) {
  _inherits(Vulture, _Bird);
  var _super = _createSuper(Vulture);
  function Vulture(legs, color, gender, warmBlooded, canFly, canEatDeadFlesh) {
    var _this;
    _classCallCheck(this, Vulture);
    _this = _super.call(this, legs, color, gender, warmBlooded, canFly);
    _this.canEatDeadFlesh = canEatDeadFlesh;
    return _this;
  }
  _createClass(Vulture, [{
    key: "eatingDeadFlesh",
    value: function eatingDeadFlesh() {
      if (this.canEatDeadFlesh) {
        return "Now I'm eating dead flesh yum yum so delicious ...";
      } else {
        return;
      }
    }
  }]);
  return Vulture;
}(_Bird_js__WEBPACK_IMPORTED_MODULE_0__.Bird);

/***/ }),

/***/ "./resources/js/Classes/Mammal/Cat/Cat.js":
/*!************************************************!*\
  !*** ./resources/js/Classes/Mammal/Cat/Cat.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cat": () => (/* binding */ Cat)
/* harmony export */ });
/* harmony import */ var _Mammal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mammal.js */ "./resources/js/Classes/Mammal/Mammal.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Cat = /*#__PURE__*/function (_Mammal) {
  _inherits(Cat, _Mammal);
  var _super = _createSuper(Cat);
  function Cat(legs, color, gender, warmBlooded, herbivore, canMiau, canMrrr) {
    var _this;
    _classCallCheck(this, Cat);
    _this = _super.call(this, legs, color, gender, warmBlooded, herbivore);
    _this.canMiau = canMiau;
    _this.canMrrr = canMrrr;
    return _this;
  }
  _createClass(Cat, [{
    key: "makeSounds",
    value: function makeSounds() {
      if (this.canMiau && this.canMrrr) {
        return "I'm miau and mrrr";
      } else if (this.canMiau && !this.canMrrr) {
        return "I'm miau";
      } else if (this.canMrrr && !this.canMiau) {
        return "I'm mrrr";
      } else {
        return "I'm weird cat... nor miau, nor mrrr";
      }
    }
  }]);
  return Cat;
}(_Mammal_js__WEBPACK_IMPORTED_MODULE_0__.Mammal);

/***/ }),

/***/ "./resources/js/Classes/Mammal/Dog/Dog.js":
/*!************************************************!*\
  !*** ./resources/js/Classes/Mammal/Dog/Dog.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dog": () => (/* binding */ Dog)
/* harmony export */ });
/* harmony import */ var _Mammal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mammal.js */ "./resources/js/Classes/Mammal/Mammal.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Dog = /*#__PURE__*/function (_Mammal) {
  _inherits(Dog, _Mammal);
  var _super = _createSuper(Dog);
  function Dog(legs, color, gender, warmBlooded, herbivore, barking, name) {
    var _this;
    _classCallCheck(this, Dog);
    _this = _super.call(this, legs, color, gender, warmBlooded, herbivore);
    _this.barking = barking;
    _this.name = name;
    return _this;
  }
  _createClass(Dog, [{
    key: "bark",
    value: function bark() {
      if (this.barking) {
        return "I'm barking.";
      } else {
        return "I can't bark.";
      }
    }
  }, {
    key: "getInfo",
    value: function getInfo() {
      return "Color is ".concat(this.color, " and have ").concat(this.legs, " legs...");
    }
  }]);
  return Dog;
}(_Mammal_js__WEBPACK_IMPORTED_MODULE_0__.Mammal);

/***/ }),

/***/ "./resources/js/Classes/Mammal/Mammal.js":
/*!***********************************************!*\
  !*** ./resources/js/Classes/Mammal/Mammal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mammal": () => (/* binding */ Mammal)
/* harmony export */ });
/* harmony import */ var _Animal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Animal.js */ "./resources/js/Classes/Animal.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Mammal = /*#__PURE__*/function (_Animal) {
  _inherits(Mammal, _Animal);
  var _super = _createSuper(Mammal);
  function Mammal(legs, color, gender, warmBlooded, herbivore) {
    var _this;
    _classCallCheck(this, Mammal);
    _this = _super.call(this);
    _this.legs = legs;
    _this.color = color;
    _this.gender = gender;
    _this.herbivore = herbivore;
    _this.warmBlooded = warmBlooded;
    return _this;
  }
  _createClass(Mammal, [{
    key: "milkFeeding",
    value: function milkFeeding() {
      return 'Feeding...';
    }
  }]);
  return Mammal;
}(_Animal_js__WEBPACK_IMPORTED_MODULE_0__.Animal);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./resources/js/oop.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Classes_Animal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/Animal.js */ "./resources/js/Classes/Animal.js");
/* harmony import */ var _Classes_Mammal_Mammal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes/Mammal/Mammal.js */ "./resources/js/Classes/Mammal/Mammal.js");
/* harmony import */ var _Classes_Bird_Bird_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes/Bird/Bird.js */ "./resources/js/Classes/Bird/Bird.js");
/* harmony import */ var _Classes_Bird_Parrot_Parrot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Classes/Bird/Parrot/Parrot.js */ "./resources/js/Classes/Bird/Parrot/Parrot.js");
/* harmony import */ var _Classes_Bird_Vulture_Vulture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Classes/Bird/Vulture/Vulture.js */ "./resources/js/Classes/Bird/Vulture/Vulture.js");
/* harmony import */ var _Classes_Mammal_Dog_Dog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Classes/Mammal/Dog/Dog.js */ "./resources/js/Classes/Mammal/Dog/Dog.js");
/* harmony import */ var _Classes_Mammal_Cat_Cat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Classes/Mammal/Cat/Cat.js */ "./resources/js/Classes/Mammal/Cat/Cat.js");







var firstAnimal = new _Classes_Animal_js__WEBPACK_IMPORTED_MODULE_0__.Animal(2, 'blue', 'some', 'forSure');
firstAnimal.renderText('First animal first text', 'h2');
var firstCat = new _Classes_Mammal_Cat_Cat_js__WEBPACK_IMPORTED_MODULE_6__.Cat(3, 'black', 'cat', true, true, false, false);
firstCat.renderText(firstCat.makeSounds(), 'h1');
var animal = new _Classes_Animal_js__WEBPACK_IMPORTED_MODULE_0__.Animal(2, 'blue', 'some', 'forSure');
animal.getProperties();
})();

/******/ })()
;