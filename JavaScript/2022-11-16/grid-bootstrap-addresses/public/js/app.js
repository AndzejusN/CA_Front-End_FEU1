/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_leftSide_addresses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/leftSide/addresses.js */ "./resources/js/components/leftSide/addresses.js");
/* harmony import */ var _components_rightSide_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/rightSide/map.js */ "./resources/js/components/rightSide/map.js");


var root = document.querySelector('.root');
var content = document.createElement('div');
content.classList.add('content-wrapper');
root.append(content);
var props = {
  mainTitle: 'Find us',
  shopList: [{
    shopTitle: 'Parduotuve 1',
    contactPhone: '+370456464564',
    contactEmail: 'shop1@parduotuve.lt',
    contactAddress: 'Arsenalo g. 5, Vilnius 01143'
  }, {
    shopTitle: 'Parduotuve 2',
    contactPhone: '+370456464564',
    contactEmail: 'shop2@parduotuve.lt',
    contactAddress: 'Arsenalo g. 5, Vilnius 01143'
  }, {
    shopTitle: 'Parduotuve 3',
    contactPhone: '+370456464564',
    contactEmail: 'shop3@parduotuve.lt',
    contactAddress: 'Arsenalo g. 5, Vilnius 01143'
  }, {
    shopTitle: 'Parduotuve 4',
    contactPhone: '+370456464564',
    contactEmail: 'shop4@parduotuve.lt',
    contactAddress: 'Arsenalo g. 5, Vilnius 01143'
  }]
};
content.append((0,_components_leftSide_addresses_js__WEBPACK_IMPORTED_MODULE_0__["default"])(props), (0,_components_rightSide_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

/***/ }),

/***/ "./resources/js/components/leftSide/addresses.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/leftSide/addresses.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addresses)
/* harmony export */ });
/* harmony import */ var _shop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.js */ "./resources/js/components/leftSide/shop.js");

function addresses(props) {
  var address = document.createElement('div');
  address.classList.add('shops-wrapper');
  var mainTitleElement = document.createElement('h2');
  mainTitleElement.classList.add('shops-section-title');
  mainTitleElement.innerText = props.mainTitle;
  address.append(mainTitleElement, (0,_shop_js__WEBPACK_IMPORTED_MODULE_0__["default"])(props.shopList));
  return address;
}

/***/ }),

/***/ "./resources/js/components/leftSide/shop.js":
/*!**************************************************!*\
  !*** ./resources/js/components/leftSide/shop.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shop)
/* harmony export */ });
function shop(props) {
  var shopListContainer = document.createElement('div');
  shopListContainer.classList.add('shops-list');
  props.map(function (element) {
    var shopContainer = document.createElement('div');
    shopContainer.classList.add('shop');

    if (element.shopTitle) {
      var shopTitle = document.createElement('h3');
      shopTitle.classList.add('shop-title');
      shopTitle.innerHTML = element.shopTitle;
      shopContainer.append(shopTitle);
    }

    var shopList = document.createElement('ul');
    shopList.classList.add('shop-address-list');

    if (element.contactPhone) {
      var liPhone = document.createElement('li');
      liPhone.innerHTML = "Phone: <a href=\"tel:".concat(element.contactPhone, "\">").concat(element.contactPhone, "</a>");
      shopContainer.append(liPhone);
    }

    if (element.contactEmail) {
      var liEmail = document.createElement('li');
      liEmail.innerHTML = "Email: <a href=\"mailto:".concat(element.contactEmail, "\">").concat(element.contactEmail, "</a>");
      shopContainer.append(liEmail);
    }

    if (element.contactAddress) {
      var liAddress = document.createElement('li');
      liAddress.innerHTML = "Address: <a href=\"".concat(element.contactAddress, "\" target=\"_blank\">").concat(element.contactAddress, "</a>");
      shopContainer.append(liAddress);
    }

    shopContainer.append(shopList);
    shopListContainer.append(shopContainer);
  });
  return shopListContainer;
}

/***/ }),

/***/ "./resources/js/components/rightSide/googleMap.js":
/*!********************************************************!*\
  !*** ./resources/js/components/rightSide/googleMap.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ googleMap)
/* harmony export */ });
function googleMap(props) {
  var mapContainer = document.createElement('div');
  mapContainer.style.width = '600px';
  mapContainer.style.height = '450px';
  mapContainer.innerHTML = "<iframe src=\"".concat(props.linkSrc, "\" ").concat(props.style, "></iframe>");
  return mapContainer;
}

/***/ }),

/***/ "./resources/js/components/rightSide/map.js":
/*!**************************************************!*\
  !*** ./resources/js/components/rightSide/map.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _googleMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./googleMap.js */ "./resources/js/components/rightSide/googleMap.js");

function map() {
  var map = document.createElement('div');
  map.classList.add('map-wrapper');
  var props = {
    linkSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.2995081927884!2d25.290643799999998!3d54.6867569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9417621fb72d%3A0x9f881e6eb7ad7bd9!2sArsenalo%20g.%205%2C%20Vilnius%2001143!5e0!3m2!1sen!2slt!4v1662103169886!5m2!1sen!2slt',
    style: 'width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"referrerpolicy="no-referrer-when-downgrade"'
  };
  map.append((0,_googleMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(props));
  return map;
}

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkclean"] = self["webpackChunkclean"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;