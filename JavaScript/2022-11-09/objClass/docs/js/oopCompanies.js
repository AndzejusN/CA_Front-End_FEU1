/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./resources/js/oopCompanies.js ***!
  \**************************************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
// 7. Sukurti metodą 'renderElement', kuris sukurią html elementą, jame atvaizduoja automobilio informaciją (modelį, brandą, variklio tipą, kilometražą, spalvą, bazinę kainą) ir šį elementą išveda į ekraną.
// 7.1. Pridėti property 'image', kuris turėtų būti nuotrauka ir šią nuotrauką, taip pat, pridėti į formuluojamą elementą.
var Company = /*#__PURE__*/function () {
  function Company(companyName, opened, code, employees, ceo, nvo, workingLocation, activityAreas, subsidiary, phone, email, country, city, street, apartment) {
    _classCallCheck(this, Company);
    this.companyName = companyName;
    this.opened = opened;
    this.code = code;
    this.employees = employees;
    this.ceo = ceo;
    this.nvo = nvo;
    this.workingLocation = workingLocation;
    this.activityAreas = activityAreas;
    this.phone = phone;
    this.email = email;
    this.country = country;
    this.city = city;
    this.street = street;
    this.apartment = apartment;
    this.subsidiary = subsidiary;
    this.address = {
      'country': this.country,
      'city': this.city,
      'street': this.street,
      'apartment': this.apartment
    };
    this.contacts = {
      'phone': this.phone,
      'email': this.email,
      'address': this.address
    };
  }
  _createClass(Company, [{
    key: "getAddressString",
    value: function getAddressString() {
      return "".concat(this.street, " ").concat(this.appartment, ", ").concat(this.city, ", ").concat(this.country);
    }
  }, {
    key: "setNvo",
    value: function setNvo(param) {
      if (param) {
        this.nvo = param;
      } else {
        this.nvo = !this.nvo;
      }
      return this.nvo;
    }
  }, {
    key: "getActivityAreasString",
    value: function getActivityAreasString() {
      return this.activityAreas.toString();
    }
  }, {
    key: "getWorkingLocationString",
    value: function getWorkingLocationString() {
      return this.workingLocation.toString();
    }
  }, {
    key: "addActivityArea",
    value: function addActivityArea(data) {
      return this.activityAreas.push(data);
    }
  }, {
    key: "addWorkingLocation",
    value: function addWorkingLocation(data) {
      return this.workingLocation.push(data);
    }
  }, {
    key: "deleteWorkingLocation",
    value: function deleteWorkingLocation(data) {
      var index = this.workingLocation.indexOf(data);
      if (index > -1) {
        this.workingLocation.splice(index, 1);
      }
      return this.workingLocation;
    }
  }, {
    key: "deleteActivityArea",
    value: function deleteActivityArea(data) {
      var index = this.activityAreas.indexOf(data);
      if (index > -1) {
        this.activityAreas.splice(index, 1);
      }
      return this.activityAreas;
    }
  }]);
  return Company;
}();
var company = new Company('companyName', 'opened', 'code', 'employees', 'ceo', 'nvo', ['workingLocation1', 'workingLocation2'][('activityArea1', 'activityArea2')], 'subsidiary', 'phone', 'email', 'country', 'city', 'street', 'apartment');
console.log(company.getActivityAreasString());
/******/ })()
;