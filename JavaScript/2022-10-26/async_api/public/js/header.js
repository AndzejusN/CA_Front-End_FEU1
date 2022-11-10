/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!********************************!*\
  !*** ./resources/js/header.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createNavivation(ulNavigation) {
  var pages = [{
    id: 1,
    linkName: 'main',
    url: 'index.html'
  }, {
    id: 2,
    linkName: 'albums',
    url: 'albums.html'
  }, {
    id: 3,
    linkName: 'posts',
    url: 'posts.html'
  }, {
    id: 4,
    linkName: 'users',
    url: 'users.html'
  }];
  pages.forEach(function (name) {
    var li = document.createElement('li');
    li.style.margin = '20px';
    li.innerHTML = "<a href=\"./".concat(name.url, "\" style=\"text-decoration: none;\"> ").concat(name.linkName.toUpperCase(), " </a>");
    ulNavigation.append(li);
  });
}
function createSearchPlace(ulNavigation) {
  var searchForm = document.createElement('form');
  searchForm.setAttribute('action', 'search.html');
  searchForm.setAttribute('name', 'searchForm');
  searchForm.style.margin = '20px';
  ulNavigation.append(searchForm);
  var inputSearch = document.createElement('input');
  inputSearch.setAttribute('type', 'text');
  inputSearch.setAttribute('name', 'inputSearch');
  inputSearch.setAttribute('id', 'inputSearch');
  inputSearch.setAttribute('placeholder', 'Please enter text...');
  searchForm.append(inputSearch);
  var submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Push the button';
  submitButton.style.marginLeft = '20px';
  searchForm.append(submitButton);
}
function init() {
  var divNavigation = document.createElement('div');
  divNavigation.style.minHeight = '100px';
  document.body.prepend(divNavigation);
  var ulNavigation = document.createElement('ul');
  ulNavigation.style.display = 'flex';
  ulNavigation.style.flexWrap = 'wrap';
  ulNavigation.style.listStyleType = 'none';
  divNavigation.append(ulNavigation);
  createNavivation(ulNavigation);
  createSearchPlace(ulNavigation);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);
/******/ })()
;