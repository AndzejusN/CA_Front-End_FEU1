/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.js */ "./resources/js/components/header/header.js");
/* harmony import */ var _components_news_topNews_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/news/topNews.js */ "./resources/js/components/news/topNews.js");
/* harmony import */ var _components_news_bottomNews_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/news/bottomNews.js */ "./resources/js/components/news/bottomNews.js");
/* harmony import */ var _components_podcast_podcast_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/podcast/podcast.js */ "./resources/js/components/podcast/podcast.js");




var containerHeader = document.querySelector('.background-header-container .container');
var headerResponse = (0,_components_header_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
containerHeader.append(headerResponse);
var newsWrapper = document.querySelector('.background-main-container .container .main-part .main-content .news-wrapper');
var topNewsResponse = (0,_components_news_topNews_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
var bottomNewsResponse = (0,_components_news_bottomNews_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
newsWrapper.append(topNewsResponse, bottomNewsResponse);
var mainContent = document.querySelector('.background-main-container .container .main-part .main-content');
var podcastResponse = (0,_components_podcast_podcast_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
mainContent.append(podcastResponse);

/***/ }),

/***/ "./resources/js/components/header/header.js":
/*!**************************************************!*\
  !*** ./resources/js/components/header/header.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
  var header = document.createElement('header');
  header.classList.add('main-header');
  header.innerHTML = "<div class=\"main-header-content-wrapper\">\n                        <div class=\"logo-wrapper\">\n                            <img src=\"https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg\"\n                                 alt=\"CodeAcademy Black Logo\">\n                        </div>\n                        <nav class=\"main-navigation\">\n                            <ul class=\"main-menu\">\n                                <li class=\"menu-item\"><a href=\"#\">Studentams</a></li>\n                                <li class=\"menu-item\"><a href=\"#\">Verslui</a></li>\n                                <li class=\"menu-item\"><a href=\"#\">Programos</a></li>\n                                <li class=\"menu-item\"><a href=\"#\">Apie mus</a></li>\n                                <li class=\"menu-item\"><a href=\"#\">Naujienos</a></li>\n                                <li class=\"menu-item\"><a href=\"#\">IT testas</a></li>\n                                <li class=\"menu-item\"><a href=\"#\">Kontaktai</a></li>\n                                <li class=\"menu-item\"><a href=\"#\">EN</a></li>\n                            </ul>\n                            <a href=\"tel:+37066366555\" class=\"button\">Skambinti</a>\n                        </nav>\n                    </div>";
  return header;
}

/***/ }),

/***/ "./resources/js/components/news/bottomNews.js":
/*!****************************************************!*\
  !*** ./resources/js/components/news/bottomNews.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BottomNews)
/* harmony export */ });
function BottomNews() {
  var bottomNews = document.createElement('div');
  bottomNews.classList.add('bottom-news');
  bottomNews.innerHTML = "<a href=\"#\" class=\"text-decoration bottom-news-box\">\n                                    <div>\n                                        <img class=\"image-bottom-news\"\n                                             src=\"https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg\"\n                                             alt=\"News photo\">\n                                    </div>\n                                    <div>\n                                        <p class=\"bottom-news-header upper-case\">technologij\u0173 ritmu</p>\n                                        <h4 class=\"bold-text black-text\">Kaip po chaoti\u0161k\u0173 mokslo met\u0173 pandemijos apsuptyje\n                                            pad\u0117ti vaikams sugr\u012F\u017Eti \u012F klases?</h4>\n                                        <p class=\"black-text\">2021-09-01</p>\n                                    </div>\n                                </a>\n                                <a href=\"#\" class=\"text-decoration bottom-news-box\">\n                                    <div>\n                                        <img class=\"image-bottom-news\"\n                                             src=\"https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg\"\n                                             alt=\"News photo\">\n                                </div>\n                                <div>\n                                        <p class=\"bottom-news-header upper-case\">technologij\u0173 ritmu</p>\n                                        <h4 class=\"bold-text black-text\">Kaip po chaoti\u0161k\u0173 mokslo met\u0173 pandemijos apsuptyje\n                                            pad\u0117ti vaikams sugr\u012F\u017Eti \u012F klases?</h4>\n                                        <p class=\"black-text\">2021-09-01</p>\n                                    </div>\n                                </a>\n                                <a href=\"#\" class=\"text-decoration bottom-news-box\">\n                                    <div>\n                                        <img class=\"image-bottom-news\"\n                                             src=\"https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg\"\n                                             alt=\"News photo\">\n                                    </div>\n                                    <div>\n                                        <p class=\"bottom-news-header upper-case\">technologij\u0173 ritmu</p>\n                                        <h4 class=\"bold-text black-text\">Kaip po chaoti\u0161k\u0173 mokslo met\u0173 pandemijos apsuptyje\n                                            pad\u0117ti vaikams sugr\u012F\u017Eti \u012F klases?</h4>\n                                        <p class=\"black-text\">2021-09-01</p>                               \n                                    </div>\n                                </a>\n                                <a href=\"#\" class=\"text-decoration bottom-news-box\">\n                                   <div>\n                                       <img class=\"image-bottom-news\"\n                                            src=\"https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1536x1038.jpg\"\n                                            alt=\"News photo\">\n                                   </div>\n                                   <div>\n                                       <p class=\"bottom-news-header upper-case\">technologij\u0173 ritmu</p>\n                                        <h4 class=\"bold-text black-text\">Kaip po chaoti\u0161k\u0173 mokslo met\u0173 pandemijos apsuptyje\n                                           pad\u0117ti vaikams sugr\u012F\u017Eti \u012F klases?</h4>\n                                       <p class=\"black-text\">2021-09-01</p>\n                                   </div>\n                                </a>\n                                <div class=\"more-info bold-text\">\n                                    <div>Visos naujienos</div>\n                                    <div class=\"more-symbol\">></div>\n                                </div>";
  return bottomNews;
}

/***/ }),

/***/ "./resources/js/components/news/topNews.js":
/*!*************************************************!*\
  !*** ./resources/js/components/news/topNews.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ topNews)
/* harmony export */ });
function topNews() {
  var topNews = document.createElement('div');
  topNews.classList.add('top-news');
  topNews.innerHTML = "   <a href=\"#\" class=\"text-decoration white\">\n                        <div><img class=\"image-top-news\"\n                                  src=\"https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg\"\n                                  alt=\"News photo\">\n                        </div>\n                        <div class=\"top-news-text\">\n                            <p class=\"upper-case\">naujienos</p>\n                            <h2 class=\"bold-text black-text\">Dezinformacija ir kibernetinis pavojus: kaip\n                                apsisaugoti?</h2>\n                            <p class=\"black-text\">2022-03-23</p>\n                        </div>\n                    </a>\n                    <a href=\"#\" class=\"text-decoration white\">\n                        <div><img class=\"image-top-news\"\n                                  src=\"https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg\"\n                                  alt=\"News photo\">\n                        </div>\n                        <div class=\"top-news-text\">\n                            <p class=\"upper-case\">naujienos</p>\n                            <h2 class=\"bold-text black-text\">Dezinformacija ir kibernetinis pavojus: kaip\n                                apsisaugoti?</h2>\n                            <p class=\"black-text\">2022-03-23</p>\n                        </div>\n                    </a>";
  return topNews;
}

/***/ }),

/***/ "./resources/js/components/podcast/podcast.js":
/*!****************************************************!*\
  !*** ./resources/js/components/podcast/podcast.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ podcast)
/* harmony export */ });
function podcast() {
  var podcastWrapper = document.createElement('div');
  podcastWrapper.classList.add('podcasts-wrapper');
  podcastWrapper.innerHTML = "<h1>Podcastai ir radijo laidos</h1>\n                            <div class=\"podcast\">\n                                <div class=\"podcast-track\">\n                                    <img src=\"https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png\"\n                                         class=\"image-podcast\" alt=\"Man on photo\">\n                                    <p class=\"track-long\">Trukm\u0117: 7:55</p>\n                                    <a class=\"track-link\" href=\"#\"><img class=\"track-play\" src=\"img/play.jpg\" alt=\"Play button\"></a>\n                                </div>\n                                <div class=\"podcast-text\">\n                                    <p class=\"bold-text\">Poj\u016B\u010Dius pir\u0161t\u0173 galiukams sugr\u0105\u017Einti gali smegen\u0173 implantas</p>\n                                    <p>2021-09-02</p>\n                                </div>\n                            </div>\n                            <div class=\"podcast\">\n                                <div class=\"podcast-track\">\n                                    <img src=\"https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png\"\n                                         class=\"image-podcast\" alt=\"Man on photo\">\n                                    <p class=\"track-long\">Trukm\u0117: 7:55</p>\n                                    <a class=\"track-link\" href=\"#\"><img class=\"track-play\" src=\"img/play.jpg\" alt=\"Play button\"></a>\n                                </div>\n                                <div class=\"podcast-text\">\n                                    <p class=\"bold-text\">Poj\u016B\u010Dius pir\u0161t\u0173 galiukams sugr\u0105\u017Einti gali smegen\u0173 implantas</p>\n                                        <p>2021-09-02</p>\n                                    </div>\n                                </div>\n                                <div class=\"podcast\">\n                                    <div class=\"podcast-track\">\n                                        <img src=\"https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png\"\n                                             class=\"image-podcast\" alt=\"Man on photo\">\n                                        <p class=\"track-long\">Trukm\u0117: 7:55</p>\n                                        <a class=\"track-link\" href=\"#\"><img class=\"track-play\" src=\"img/play.jpg\" alt=\"Play button\"></a>\n                                                </div>\n                                                <div class=\"podcast-text\">\n                                                    <p class=\"bold-text\">Poj\u016B\u010Dius pir\u0161t\u0173 galiukams sugr\u0105\u017Einti gali smegen\u0173 implantas</p>\n                                                    <p>2021-09-02</p>\n                                                </div>\n                                            </div>\n                                            <div class=\"podcast\">\n                                                <div class=\"podcast-track\">\n                                                    <img src=\"https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png\"\n                                                         class=\"image-podcast\" alt=\"Man on photo\">\n                                            <p class=\"track-long\">Trukm\u0117: 7:55</p>\n                                        <a class=\"track-link\" href=\"#\"><img class=\"track-play\" src=\"img/play.jpg\" alt=\"Play button\"></a>\n                                    </div>\n                                    <div class=\"podcast-text\">\n                                        <p class=\"bold-text\">Poj\u016B\u010Dius pir\u0161t\u0173 galiukams sugr\u0105\u017Einti gali smegen\u0173 implantas</p>\n                                        <p>2021-09-02</p>\n                                    </div>\n                                </div>\n                                <h1>Renginiai</h1>\n                                    <a href=\"#\">\n                                        <img class=\"promo-testcon\" src=\"img/testcon.png\"\n                                             alt=\"Promo on-line registration TestCon Europe 2022\">\n                                    </a>\n                                    <div class=\"event\">\n                                        <a class=\"text-decoration\" href=\"#\">\n                                            <div class=\"promo-text black white-text\">\n                                                <div class=\"promo-date\">\n                                                    <div class=\"promo-number white black-text\"><h2>26</h2></div>\n                                                    <div class=\"promo-month pink\"><h4>SPA</h4></div>\n                                                </div>\n                                                <p class=\"upper-case\">online</p>\n                                                <h2>TestCon Europe 2022</h2>\n                                            </div>\n                                        </a>\n                                    </div>\n                                    <div class=\"event\">\n                                        <a class=\"text-decoration\" href=\"#\">\n                                            <div class=\"promo-text black white-text\">\n                                                <div class=\"promo-date\">\n                                                    <div class=\"promo-number white black-text\"><h2>26</h2></div>\n                                                    <div class=\"promo-month pink\"><h4>SPA</h4></div>\n                                                </div>\n                                                <p class=\"upper-case\">online</p>\n                                                <h2>TestCon Europe 2022</h2>\n                                            </div>\n                                        </a>\n                                    </div>\n                                    <div class=\"event\">\n                                        <a class=\"text-decoration\" href=\"#\">\n                                            <div class=\"promo-text black white-text\">\n                                                <div class=\"promo-date\">\n                                                    <div class=\"promo-number white black-text\"><h2>26</h2></div>\n                                                    <div class=\"promo-month pink\"><h4>SPA</h4></div>\n                                                </div>\n                                                <p class=\"upper-case\">online</p>\n                                                <h2>TestCon Europe 2022</h2>\n                                            </div>\n                                        </a>\n                                    </div>\n                                    <div class=\"event\">\n                                        <a class=\"text-decoration\" href=\"#\">\n                                            <div class=\"promo-text black white-text\">\n                                                <div class=\"promo-date\">\n                                                    <div class=\"promo-number white black-text\"><h2>26</h2></div>\n                                                    <div class=\"promo-month pink\"><h4>SPA</h4></div>\n                                                </div>\n                                                <p class=\"upper-case\">online</p>\n                                                <h2>TestCon Europe 2022</h2>\n                                            </div>\n                                        </a>\n                                    </div>\n                                    <div class=\"more-info bold-text\">\n                                        <div>Daugiau</div>\n                                        <div class=\"more-symbol\">></div>\n                                    </div>";
  return podcastWrapper;
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