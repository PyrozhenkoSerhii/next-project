webpackHotUpdate(4,{

/***/ "./redux/actions/order.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setCount; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__ = __webpack_require__("./redux/costants/actionTypes.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var setCount = function setCount(productCount) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["c" /* SET_COUNT */],
    payload: productCount
  };
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(setCount, "setCount", "E:\\Projects\\serhii\\nextjs-project\\redux\\actions\\order.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/costants/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return clockTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SAVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SAVE_TOKEN; });
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var clockTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};
var SET_COUNT = 'SET_COUNT';
var SAVE_USER = 'SAVE_USER';
var SAVE_TOKEN = 'SAVE_TOKEN';
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(clockTypes, "clockTypes", "E:\\Projects\\serhii\\nextjs-project\\redux\\costants\\actionTypes.js");
  reactHotLoader.register(SET_COUNT, "SET_COUNT", "E:\\Projects\\serhii\\nextjs-project\\redux\\costants\\actionTypes.js");
  reactHotLoader.register(SAVE_USER, "SAVE_USER", "E:\\Projects\\serhii\\nextjs-project\\redux\\costants\\actionTypes.js");
  reactHotLoader.register(SAVE_TOKEN, "SAVE_TOKEN", "E:\\Projects\\serhii\\nextjs-project\\redux\\costants\\actionTypes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.2a014a6d08046fb58441.hot-update.js.map