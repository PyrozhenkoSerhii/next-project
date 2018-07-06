module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_cookie__ = __webpack_require__("js-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cookie__ = __webpack_require__("cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_actions_user__ = __webpack_require__("./redux/actions/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux_persist_integration_react__ = __webpack_require__("redux-persist/integration/react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux_persist_integration_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_redux_persist_integration_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__redux_store__ = __webpack_require__("./redux/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__redux_persistedStore__ = __webpack_require__("./redux/persistedStore.js");

var _jsxFileName = "E:\\Projects\\serhii\\nextjs-redux-project\\pages\\_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_10__redux_persistedStore__["a" /* default */])(
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  _createClass(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var Component, ctx, cookies, cookiesJSON, token;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (ctx.req) {
                  cookies = ctx.req.headers.cookie;

                  if (typeof cookies === 'string') {
                    cookiesJSON = __WEBPACK_IMPORTED_MODULE_6_cookie___default.a.parse(cookies);
                    token = cookiesJSON.token;
                  }
                } else {
                  cookies = __WEBPACK_IMPORTED_MODULE_5_js_cookie___default.a.get('token');
                }

                if (!Component.getInitialProps) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                _context.t0 = _context.sent;
                _context.next = 9;
                break;

              case 8:
                _context.t0 = {};

              case 9:
                _context.t1 = _context.t0;
                _context.t2 = cookies;
                return _context.abrupt("return", {
                  pageProps: _context.t1,
                  cookies: _context.t2
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this));
    var cookies = props.cookies,
        store = props.store;
    store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_actions_user__["b" /* saveToken */])(cookies));
    _this.state = {
      socket: null
    };
    return _this;
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          store = _props.store;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_redux_persist_integration_react__["PersistGate"], {
        persistor: store.__persistor,
        loading: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, "Loading..."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, {
        socket: this.state.socket,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })))));
    }
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_3_next_app___default.a)));

/***/ }),

/***/ "./redux/actions/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export saveUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return saveToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteToken; });
/* unused harmony export testServerRedux */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__ = __webpack_require__("./redux/costants/actionTypes.js");

var saveUser = function saveUser(user) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["e" /* SAVE_USER */],
    payload: user
  };
};
var saveToken = function saveToken(token) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["d" /* SAVE_TOKEN */],
    payload: token
  };
};
var deleteToken = function deleteToken() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["b" /* DELETE_TOKEN */]
  };
};
var testServerRedux = function testServerRedux() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["f" /* TEST_SERVER_REDUX */],
    payload: {
      'redux': 'server'
    }
  };
};

/***/ }),

/***/ "./redux/costants/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ORDER_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UPDATE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UPLOAD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_FROM_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SAVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SAVE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DELETE_TOKEN; });
/* unused harmony export LOGOUT */
/* unused harmony export DATA_LOAD_SUCCESS */
/* unused harmony export SAVE_MY_DATA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TEST_SERVER_REDUX; });
var ORDER_PRODUCT = 'ORDER_PRODUCT';
var UPDATE_ORDER = 'UPDATE_ORDER';
var UPLOAD_PRODUCTS = 'UPLOAD_PRODUCTS';
var DELETE_FROM_ORDER = 'DELETE_FROM_ORDER';
var SAVE_USER = 'SAVE_USER';
var SAVE_TOKEN = 'SAVE_TOKEN';
var DELETE_TOKEN = 'DELETE_TOKEN';
var LOGOUT = 'LOGOUT';
var DATA_LOAD_SUCCESS = 'DATA_LOAD_SUCCESS';
var SAVE_MY_DATA = 'SAVE_MY_DATA';
var TEST_SERVER_REDUX = 'TEST_SERVER_REDUX';

/***/ }),

/***/ "./redux/middleware/logger.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export logger */
var logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.log('dispatching', action.type);
      var result = next(action);
      console.log('new state', store.getState());
      return result;
    };
  };
};

/***/ }),

/***/ "./redux/persistedStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_persistedRoot__ = __webpack_require__("./redux/reducers/persistedRoot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_root__ = __webpack_require__("./redux/reducers/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist__ = __webpack_require__("redux-persist");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_persist__);






var makeConfiguredStore = function makeConfiguredStore(reducer, initialState) {
  var isServer = typeof window === 'undefined';
  var composeEnhancers;

  if (!isServer) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  } else {
    composeEnhancers = __WEBPACK_IMPORTED_MODULE_1_redux__["compose"];
  }

  var date = new Date();
  console.log(">> Creating store ".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds(), "(").concat(date.getMilliseconds(), ")"));
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(reducer, initialState, composeEnhancers(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_0_redux_thunk___default.a)));
};

/* harmony default export */ __webpack_exports__["a"] = (function (initialState, _ref) {
  var isServer = _ref.isServer;

  if (isServer) {
    return makeConfiguredStore(__WEBPACK_IMPORTED_MODULE_3__reducers_root__["a" /* default */], initialState);
  } else {
    var store = makeConfiguredStore(__WEBPACK_IMPORTED_MODULE_2__reducers_persistedRoot__["a" /* default */], initialState);
    store.__persistor = Object(__WEBPACK_IMPORTED_MODULE_4_redux_persist__["persistStore"])(store);
    return store;
  }
});

/***/ }),

/***/ "./redux/reducers/persistedRoot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_persist__ = __webpack_require__("redux-persist");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_persist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_persist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage__ = __webpack_require__("redux-persist/lib/storage");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_stateReconciler_autoMergeLevel2__ = __webpack_require__("redux-persist/lib/stateReconciler/autoMergeLevel2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_stateReconciler_autoMergeLevel2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_stateReconciler_autoMergeLevel2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product__ = __webpack_require__("./redux/reducers/product.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__("./redux/reducers/user.js");






var productPersistConfig = {
  key: 'product',
  storage: __WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage___default.a,
  blacklist: ['products'],
  autoMergeLevel2: __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_stateReconciler_autoMergeLevel2___default.a
};
var persistConfig = {
  key: 'root',
  storage: __WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage___default.a,
  autoMergeLevel2: __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_stateReconciler_autoMergeLevel2___default.a,
  blacklist: ['product']
};
var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  product: Object(__WEBPACK_IMPORTED_MODULE_1_redux_persist__["persistReducer"])(productPersistConfig, __WEBPACK_IMPORTED_MODULE_4__product__["a" /* default */]),
  user: __WEBPACK_IMPORTED_MODULE_5__user__["a" /* default */]
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_redux_persist__["persistReducer"])(persistConfig, rootReducer));

/***/ }),

/***/ "./redux/reducers/product.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = productReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__ = __webpack_require__("./redux/costants/actionTypes.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  productState: [],
  products: []
};
function productReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["c" /* ORDER_PRODUCT */]:
      return _objectSpread({}, state, {
        productState: _toConsumableArray(state.productState).concat([action.payload])
      });

    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["g" /* UPDATE_ORDER */]:
      var newState = state.productState.filter(function (el) {
        return el.id !== action.payload.id;
      });
      return _objectSpread({}, state, {
        productState: _toConsumableArray(newState).concat([action.payload])
      });

    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["h" /* UPLOAD_PRODUCTS */]:
      return _objectSpread({}, state, {
        products: action.payload
      });

    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["a" /* DELETE_FROM_ORDER */]:
      return _objectSpread({}, state, {
        productState: state.productState.filter(function (el) {
          return el.id !== action.payload;
        })
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/reducers/root.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product__ = __webpack_require__("./redux/reducers/product.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("./redux/reducers/user.js");



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  product: __WEBPACK_IMPORTED_MODULE_1__product__["a" /* default */],
  user: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* default */]
}));

/***/ }),

/***/ "./redux/reducers/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = userReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__ = __webpack_require__("./redux/costants/actionTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  user: [],
  token: undefined
};
function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["e" /* SAVE_USER */]:
      return _objectSpread({}, state, {
        user: action.payload
      });

    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["d" /* SAVE_TOKEN */]:
      return _objectSpread({}, state, {
        token: action.payload
      });

    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["b" /* DELETE_TOKEN */]:
      return _objectSpread({}, state, {
        token: undefined
      });

    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["f" /* TEST_SERVER_REDUX */]:
      return _objectSpread({}, state, {
        server: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_root__ = __webpack_require__("./redux/reducers/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middleware_logger__ = __webpack_require__("./redux/middleware/logger.js");




/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isServer = typeof window === 'undefined';
  var composeEnhancers;

  if (!isServer) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  } else {
    composeEnhancers = __WEBPACK_IMPORTED_MODULE_1_redux__["compose"];
  }

  var date = new Date();
  console.log(">> Creating store ".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds(), "(").concat(date.getMilliseconds(), ")"));
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers_root__["a" /* default */], initialState, composeEnhancers(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_0_redux_thunk___default.a)));
});

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "cookie":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "js-cookie":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/stateReconciler/autoMergeLevel2":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/stateReconciler/autoMergeLevel2");

/***/ }),

/***/ "redux-persist/lib/storage":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map