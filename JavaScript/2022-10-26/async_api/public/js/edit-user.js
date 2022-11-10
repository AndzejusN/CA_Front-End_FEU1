/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/functions.js":
/*!***********************************!*\
  !*** ./resources/js/functions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomElement": () => (/* binding */ createDomElement),
/* harmony export */   "fetchData": () => (/* binding */ fetchData),
/* harmony export */   "firstLetterToUpperCase": () => (/* binding */ firstLetterToUpperCase),
/* harmony export */   "generateBootstrapCard": () => (/* binding */ generateBootstrapCard),
/* harmony export */   "generatePaginationToDom": () => (/* binding */ generatePaginationToDom),
/* harmony export */   "getSearchPhrase": () => (/* binding */ getSearchPhrase),
/* harmony export */   "waitingForDataSpinner": () => (/* binding */ waitingForDataSpinner)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function firstLetterToUpperCase(text) {
  var firstLetter = text[0].toUpperCase();
  var withoutFirstLetter = text.slice(1);
  return firstLetter + withoutFirstLetter;
}
function getSearchPhrase(name) {
  var queryParams = document.location.search;
  var urlParams = new URLSearchParams(queryParams);
  var inputSearch = urlParams.get(name);
  return inputSearch;
}
function waitingForDataSpinner() {
  var spinner = document.querySelector('.loading');
  if (spinner.style.display === 'none') {
    spinner.style.display = 'block';
  } else {
    spinner.style.display = 'none';
  }
}
function fetchData(_x, _x2) {
  return _fetchData.apply(this, arguments);
}
function _fetchData() {
  _fetchData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, obj) {
    var methodSend,
      res,
      _total,
      _data,
      total,
      data,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            methodSend = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'POST';
            if (!obj) {
              _context.next = 10;
              break;
            }
            _context.next = 4;
            return fetch(url, {
              method: methodSend,
              body: JSON.stringify(obj),
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
            });
          case 4:
            res = _context.sent;
            _total = res.headers.get('x-total-count');
            _context.next = 8;
            return res.json();
          case 8:
            _data = _context.sent;
            return _context.abrupt("return", {
              data: _data,
              total: _total
            });
          case 10:
            _context.next = 12;
            return fetch(url);
          case 12:
            res = _context.sent;
            total = res.headers.get('x-total-count');
            _context.next = 16;
            return res.json();
          case 16:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data,
              total: total
            });
          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchData.apply(this, arguments);
}
function createDomElement(tagName, content, asignClass) {
  var element = document.createElement(tagName);
  var isHtml = checkIsHtml(content);
  if (content && isHtml) {
    element.innerHTML = content;
  } else if (content) {
    element.textContent = content;
  }
  if (asignClass) {
    element.className = asignClass;
  }
  return element;
}
function generateBootstrapCard(obj) {
  var divCardMain = createDomElement('div', '', 'card card-parameters');
  var divCardHeader = createDomElement('div', obj.header, 'card-header');
  divCardMain.appendChild(divCardHeader);
  var ul = createDomElement('ul', '', 'list-group list-group-flush');
  divCardMain.appendChild(ul);
  obj.list.map(function (elem) {
    var li = createDomElement('li', elem, 'list-group-item');
    ul.appendChild(li);
  });
  return divCardMain;
}
function checkIsHtml(elem) {
  var arr = ['<img', 'src', 'href', '<a', '</a>'];
  var isHtml = false;
  arr.map(function (arrElem) {
    isHtml = elem.includes(arrElem) ? true : isHtml;
  });
  return isHtml;
}
function generatePaginationToDom(_x3) {
  return _generatePaginationToDom.apply(this, arguments);
}
function _generatePaginationToDom() {
  _generatePaginationToDom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dataToPagination) {
    var currentPage, appendDomTag, numberPerPage, total, queryString, paginationWrapper, limit, pages, i, span, a, _span, _a, _span2, _a2, _span3, _a3, _span4, _a4, perPageContainerDom, linkPerPageFive, linkPerPageTen, linkPerPageTwenty;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            currentPage = dataToPagination.currentPage, appendDomTag = dataToPagination.appendDomTag, numberPerPage = dataToPagination.numberPerPage, total = dataToPagination.total;
            currentPage = parseInt(currentPage);
            queryString = window.location.pathname;
            total = parseInt(total);
            paginationWrapper = document.createElement('div');
            paginationWrapper.style.width = '100%';
            paginationWrapper.style.display = 'flex';
            appendDomTag.prepend(paginationWrapper);
            limit = numberPerPage;
            pages = Math.ceil(total / limit);
            for (i = 1; i <= pages; i++) {
              if (i === 1 && currentPage == 1) {
                span = document.createElement('span');
                span.innerText = 'First page';
                span.style.padding = '15px';
                span.style.margin = '0 3px';
                span.style.backgroundColor = 'white';
                span.style.border = 'solid grey 1px';
                paginationWrapper.append(span);
              } else if (i === 1) {
                a = document.createElement('a');
                a.href = "".concat(queryString, "?_page=").concat(i, "&_limit=").concat(limit);
                a.textContent = 'First page';
                a.style.padding = '15px';
                a.style.backgroundColor = 'white';
                a.style.border = 'solid grey 1px';
                a.style.margin = '0 3px';
                paginationWrapper.append(a);
              }
              if (i === 1 && currentPage == 1) {
                _span = document.createElement('span');
                _span.innerText = '<';
                _span.style.padding = '15px';
                _span.style.margin = '0 3px';
                _span.style.backgroundColor = 'white';
                _span.style.border = 'solid grey 1px';
                paginationWrapper.append(_span);
              } else if (i === 1) {
                _a = document.createElement('a');
                _a.href = "".concat(queryString, "?_page=").concat(currentPage - 1, "&_limit=").concat(limit);
                _a.textContent = '<';
                _a.style.padding = '15px';
                _a.style.backgroundColor = 'white';
                _a.style.border = 'solid grey 1px';
                _a.style.margin = '0 3px';
                paginationWrapper.append(_a);
              }
              if (currentPage == i) {
                _span2 = document.createElement('span');
                _span2.innerText = currentPage;
                _span2.style.padding = '15px';
                _span2.style.margin = '0 3px';
                _span2.style.backgroundColor = 'white';
                _span2.style.border = 'solid grey 1px';
                paginationWrapper.append(_span2);
              } else {
                _a2 = document.createElement('a');
                _a2.href = "".concat(queryString, "?_page=").concat(i, "&_limit=").concat(limit);
                _a2.textContent = i;
                _a2.style.padding = '15px';
                _a2.style.backgroundColor = 'white';
                _a2.style.border = 'solid grey 1px';
                _a2.style.margin = '0 3px';
                paginationWrapper.append(_a2);
              }
              if (i == pages && currentPage == pages) {
                _span3 = document.createElement('span');
                _span3.innerText = '>';
                _span3.style.padding = '15px';
                _span3.style.margin = '0 3px';
                _span3.style.backgroundColor = 'white';
                _span3.style.border = 'solid grey 1px';
                paginationWrapper.append(_span3);
              } else if (i == pages) {
                _a3 = document.createElement('a');
                _a3.href = "".concat(queryString, "?_page=").concat(currentPage + 1, "&_limit=").concat(limit);
                _a3.textContent = '>';
                _a3.style.padding = '15px';
                _a3.style.backgroundColor = 'white';
                _a3.style.border = 'solid grey 1px';
                _a3.style.margin = '0 3px';
                paginationWrapper.append(_a3);
              }
              if (i == pages && currentPage == pages) {
                _span4 = document.createElement('span');
                _span4.innerText = 'Last page';
                _span4.style.padding = '15px';
                _span4.style.margin = '0 3px';
                _span4.style.backgroundColor = 'white';
                _span4.style.border = 'solid grey 1px';
                paginationWrapper.append(_span4);
              } else if (i == pages) {
                _a4 = document.createElement('a');
                _a4.href = "".concat(queryString, "?_page=").concat(i, "&_limit=").concat(limit);
                _a4.textContent = 'Last page';
                _a4.style.padding = '15px';
                _a4.style.backgroundColor = 'white';
                _a4.style.border = 'solid grey 1px';
                _a4.style.margin = '0 3px';
                paginationWrapper.append(_a4);
              }
            }
            perPageContainerDom = document.createElement('div');
            perPageContainerDom.style.width = '100%';
            perPageContainerDom.style.display = 'flex';
            linkPerPageFive = document.createElement('a');
            linkPerPageFive.href = "".concat(queryString, "?_page=").concat(currentPage, "&_limit=10");
            linkPerPageFive.textContent = 'Per page results: 10';
            linkPerPageFive.style.padding = '15px';
            linkPerPageFive.style.backgroundColor = 'white';
            linkPerPageFive.style.border = 'solid grey 1px';
            linkPerPageFive.style.margin = '0 3px';
            perPageContainerDom.append(linkPerPageFive);
            linkPerPageTen = document.createElement('a');
            linkPerPageTen.href = "".concat(queryString, "?_page=").concat(currentPage, "&_limit=20");
            linkPerPageTen.textContent = 'Per page results: 20';
            linkPerPageTen.style.padding = '15px';
            linkPerPageTen.style.backgroundColor = 'white';
            linkPerPageTen.style.border = 'solid grey 1px';
            linkPerPageTen.style.margin = '0 3px';
            perPageContainerDom.append(linkPerPageTen);
            linkPerPageTwenty = document.createElement('a');
            linkPerPageTwenty.href = "".concat(queryString, "?_page=").concat(currentPage, "&_limit=50");
            linkPerPageTwenty.textContent = 'Per page results: 50';
            linkPerPageTwenty.style.padding = '15px';
            linkPerPageTwenty.style.backgroundColor = 'white';
            linkPerPageTwenty.style.border = 'solid grey 1px';
            linkPerPageTwenty.style.margin = '0 3px';
            perPageContainerDom.append(linkPerPageTwenty);
            appendDomTag.append(perPageContainerDom);
          case 39:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _generatePaginationToDom.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/header.js":
/*!********************************!*\
  !*** ./resources/js/header.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!***********************************!*\
  !*** ./resources/js/edit-user.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./resources/js/header.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./resources/js/functions.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function init() {
  var form = document.querySelector('.edit-user-form');
  var userId = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getSearchPhrase)('userid');
  setDataForm(userId, form);
  getDataForm(form, userId);
  (0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}
function setDataForm(_x, _x2) {
  return _setDataForm.apply(this, arguments);
}
function _setDataForm() {
  _setDataForm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(userId, form) {
    var userInformation, name, username, email, _userInformation$addr, street, suite, city, zipcode, _userInformation$addr2, lat, lng, phone, website, companyName, companyCatchPhrase, companyBs;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.fetchData)("https://jsonplaceholder.typicode.com/users/".concat(userId));
          case 2:
            userInformation = _context.sent;
            name = userInformation.name, username = userInformation.username, email = userInformation.email, _userInformation$addr = userInformation.address, street = _userInformation$addr.street, suite = _userInformation$addr.suite, city = _userInformation$addr.city, zipcode = _userInformation$addr.zipcode, _userInformation$addr2 = _userInformation$addr.geo, lat = _userInformation$addr2.lat, lng = _userInformation$addr2.lng, phone = userInformation.phone, website = userInformation.website;
            companyName = userInformation.company.name;
            companyCatchPhrase = userInformation.company.catchPhrase;
            companyBs = userInformation.company.bs;
            form.elements['user-name'].value = name;
            form.elements['user-nickname'].value = username;
            form.elements['user-email'].value = email;
            form.elements['user-address-street'].value = street;
            form.elements['user-address-number'].value = suite;
            form.elements['user-address-city'].value = city;
            form.elements['user-address-zipcode'].value = zipcode;
            form.elements['user-address-geo-lat'].value = lat;
            form.elements['user-address-geo-lon'].value = lng;
            form.elements['user-phone'].value = phone;
            form.elements['user-website'].value = website;
            form.elements['user-company-name'].value = companyName;
            form.elements['user-company-catchphrase'].value = companyCatchPhrase;
            form.elements['user-company-bs'].value = companyBs;
          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _setDataForm.apply(this, arguments);
}
function getDataForm(form, userId) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = event.target.elements['user-name'].value;
    var username = event.target.elements['user-nickname'].value;
    var email = event.target.elements['user-email'].value;
    var street = event.target.elements['user-address-street'].value;
    var suite = event.target.elements['user-address-number'].value;
    var city = event.target.elements['user-address-city'].value;
    var zipcode = event.target.elements['user-address-zipcode'].value;
    var lat = event.target.elements['user-address-geo-lat'].value;
    var lng = event.target.elements['user-address-geo-lon'].value;
    var phone = event.target.elements['user-phone'].value;
    var website = event.target.elements['user-website'].value;
    var companyName = event.target.elements['user-company-name'].value;
    var companyCatchPhrase = event.target.elements['user-company-catchphrase'].value;
    var companyBs = event.target.elements['user-company-bs'].value;
    var data = {
      name: name,
      username: username,
      email: email,
      address: {
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode,
        geo: {
          lat: lat,
          lng: lng
        }
      },
      phone: phone,
      website: website,
      company: {
        name: companyName,
        catchPhrase: companyCatchPhrase,
        bs: companyBs
      }
    };
    postData(data, userId);

    // form.reset(); 
  });
}
function postData(_x3, _x4) {
  return _postData.apply(this, arguments);
}
function _postData() {
  _postData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data, userId) {
    var feedbackEditUser, rigthColumn, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0,_functions__WEBPACK_IMPORTED_MODULE_1__.fetchData)("https://jsonplaceholder.typicode.com/users/".concat(userId), data, 'PATCH');
          case 2:
            feedbackEditUser = _context2.sent;
            rigthColumn = document.querySelector('.right-column');
            rigthColumn.innerHTML = '';
            response = document.createElement('h6');
            response.innerText = "User name:  ".concat(feedbackEditUser.id, ";\n                          Post title: ").concat(feedbackEditUser.name, ";\n                          Post text: ").concat(feedbackEditUser.email, ";");
            rigthColumn.append(response);
          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _postData.apply(this, arguments);
}
init();
})();

/******/ })()
;