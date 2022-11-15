/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

// // Objekto kūrimo būdai

// // 1
// const obj1 = {
//     name: 'John',
//     surname: 'Doe',
//   }

//   console.log(obj1);
//   console.log(obj1.name);
//   console.log(obj1.surname);

//   // 2
//   // const obj2 = {};
//   const obj2 = new Object();
//   obj2.name = 'John';
//   obj2.surname = 'Doe';

//   console.log(obj2);
//   console.log(obj2.name);
//   console.log(obj2.surname);

//   // 3 - constructor function (pries ES6)
//   function Person(firstName, lastName) {
//     this.name = firstName;
//     this.surname = lastName;
//   }

//   const person1 = new Person('John', 'Doe');
//   console.log(person1);
//   console.log(person1.name);
//   console.log(person1.surname);

//   const person2 = new Person('Doe', 'John');
//   console.log(person2);

//   // 4
//   const personObj = {
//     isHuman: true,
//     printInstructions() {
//       if (this.isHuman) {
//         console.log(`Hello, my name is ${this.name}. I am a human.`);
//       } else {
//         console.log(`Hello, my name is ${this.name}. I am not a human.`);
//       }
//     }
//   }

//   console.log(personObj);
//   console.log(personObj.isHuman);
//   personObj.printInstructions();

//   const extendedPersonObj = Object.create(personObj);
//   console.log(extendedPersonObj);
//   extendedPersonObj.isHuman = false;
//   extendedPersonObj.name = 'John';
//   extendedPersonObj.printInstructions();
//   console.log(extendedPersonObj.isHuman);

//   // 5
//   const firstObj = { name: 'John' };
//   const secondObj = { surname: 'Doe' };
//   const finishedObj = { ...firstObj, ...secondObj };
//   console.log(finishedObj);

//   const finishedObj2 = Object.assign(firstObj, secondObj);
//   console.log(finishedObj2);

// UŽDUOTIS
// 0. Sukurti 3 objektus: keturkampis1, keturkampis2 ir keturkampis3. +
// 1. Visiems keturkampių objektams pridėti plotį ir aukštį. +
// 2. Kiekvienam keturkampio objektui pridėti po funkciją, kuri skaičiuoja plotą. +
// 3. Kiekvienam keturkampio objektui pridėti po funkciją, kuri skaičiuoja perimetrą. +
// 4. Į konsolę išvesti visų keturkampių plotą ir perimetrą. +

var firstSquare = {
  length: 1,
  width: 2,
  countSpace: function countSpace() {
    return this.length * this.width;
  },
  countPerimeter: function countPerimeter() {
    return this.countSpace() * 2;
  },
  outputAllParameters: function outputAllParameters() {
    return "Keturkampio plotas: ".concat(this.countSpace(), "; Keturkampio perimentras: ").concat(this.countPerimeter(), ";");
  }
};
var secondSquare = {
  length: 1,
  width: 2,
  countSpace: function countSpace() {
    return this.length * this.width;
  },
  countPerimeter: function countPerimeter() {
    return this.countSpace() * 2;
  },
  outputAllParameters: function outputAllParameters() {
    return "Keturkampio plotas: ".concat(this.countSpace(), "; Keturkampio perimentras: ").concat(this.countPerimeter(), ";");
  }
};
var thirdSquare = {
  length: 1,
  width: 2,
  countSpace: function countSpace() {
    return this.length * this.width;
  },
  countPerimeter: function countPerimeter() {
    return this.countSpace() * 2;
  },
  outputAllParameters: function outputAllParameters() {
    return "Keturkampio plotas: ".concat(this.countSpace(), "; Keturkampio perimentras: ").concat(this.countPerimeter(), ";");
  }
};
var dataToOutput = "".concat(firstSquare.outputAllParameters(), ", ").concat(secondSquare.outputAllParameters(), ", ").concat(thirdSquare.outputAllParameters());
// console.log(dataToOutput);

// 5. Antram keturkampiui pridėti spalvą. +

secondSquare.color = 'red';

// 6. Antram keturkampiui pridėti metodą, kuris leis paskaičiuoti pusės keturkampio plotą.

secondSquare.halfPlot = function () {
  return this.countSpace() / 2;
};

// 7. Trečiam keturkampiui pridėti metodą, kuris grąžins tekstą „Keturkampio plotis: x, keturkampio aukštis: y".

thirdSquare.outputParametersLengthWidth = function () {
  return "Keturkampio plotis: ".concat(this.width, ", keturkampio auk\u0161tis: ").concat(this.length);
};

// 8. Į konsolę išvesti šiuos naujus duomenis.
// console.log(thirdSquare.outputParametersLengthWidth());

// 9. Visų keturkampių objektuose sukurti funkciją, kuri į html išveda tekstą apie keturkampių informaciją:
//    „Keturkampio plotis: x, keturkampio ilgis: y, keturkampio perimetras: z, keturkampio plotas: y."

secondSquare.outputParametersLengthWidth = function () {
  return "Keturkampio plotis: ".concat(this.width, ", keturkampio auk\u0161tis: ").concat(this.length);
};
firstSquare.outputParametersLengthWidth = function () {
  return "Keturkampio plotis: ".concat(this.width, ", keturkampio auk\u0161tis: ").concat(this.length);
};

// let container = document.querySelector('.container');

// let divFirst = document.createElement('div');
// divFirst.textContent = firstSquare.outputAllParameters() + ' ' + firstSquare.outputParametersLengthWidth();

// let divSecond = document.createElement('div');
// divSecond.textContent = secondSquare.outputAllParameters() + ' ' + secondSquare.outputParametersLengthWidth();

// let divThird = document.createElement('div');
// divThird.textContent = thirdSquare.outputAllParameters() + ' ' + thirdSquare.outputParametersLengthWidth();

// container.append(divFirst, divSecond, divThird);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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