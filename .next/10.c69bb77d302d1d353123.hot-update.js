webpackHotUpdate(10,{

/***/ "./redux/actions/clock.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return startClock; });
/* unused harmony export incrementCount */
/* unused harmony export decrementCount */
/* unused harmony export resetCount */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__ = __webpack_require__("./redux/costants/actionTypes.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();


var serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["a" /* clockTypes */].TICK,
      light: !isServer,
      ts: Date.now()
    });
  };
};
var startClock = function startClock(dispatch) {
  return setInterval(function () {
    dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["a" /* clockTypes */].TICK,
      light: true,
      ts: Date.now()
    });
  }, 1000);
};
var incrementCount = function incrementCount() {
  return function (dispatch) {
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["a" /* clockTypes */].INCREMENT
    });
  };
};
var decrementCount = function decrementCount() {
  return function (dispatch) {
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["a" /* clockTypes */].DECREMENT
    });
  };
};
var resetCount = function resetCount() {
  return function (dispatch) {
    return dispatch({
      type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["a" /* clockTypes */].RESET
    });
  };
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(serverRenderClock, "serverRenderClock", "E:\\Projects\\serhii\\nextjs-project\\redux\\actions\\clock.js");
  reactHotLoader.register(startClock, "startClock", "E:\\Projects\\serhii\\nextjs-project\\redux\\actions\\clock.js");
  reactHotLoader.register(incrementCount, "incrementCount", "E:\\Projects\\serhii\\nextjs-project\\redux\\actions\\clock.js");
  reactHotLoader.register(decrementCount, "decrementCount", "E:\\Projects\\serhii\\nextjs-project\\redux\\actions\\clock.js");
  reactHotLoader.register(resetCount, "resetCount", "E:\\Projects\\serhii\\nextjs-project\\redux\\actions\\clock.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/costants/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clockTypes; });
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
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(clockTypes, "clockTypes", "E:\\Projects\\serhii\\nextjs-project\\redux\\costants\\actionTypes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=10.c69bb77d302d1d353123.hot-update.js.map