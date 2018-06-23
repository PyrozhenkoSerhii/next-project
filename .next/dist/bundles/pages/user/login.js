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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/navbar.js



var navbar_Navbar = function Navbar() {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
    className: "navbar navbar-expand-lg fixed-top navbar-dark bg-primary"
  }, external__react__default.a.createElement("div", {
    className: "container"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("a", {
    className: "navbar-brand"
  }, "Next.js Project")), external__react__default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarResponsive",
    "aria-controls": "navbarResponsive",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, external__react__default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), external__react__default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarResponsive"
  }, external__react__default.a.createElement("ul", {
    className: "navbar-nav"
  }, external__react__default.a.createElement("li", {
    className: "nav-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/about"
  }, external__react__default.a.createElement("a", {
    className: "nav-link"
  }, "About"))), external__react__default.a.createElement("li", {
    className: "nav-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/product/catalog"
  }, external__react__default.a.createElement("a", {
    className: "nav-link"
  }, "Catalog"))), external__react__default.a.createElement("li", {
    className: "nav-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/user/login"
  }, external__react__default.a.createElement("a", {
    className: "nav-link"
  }, "Login"))), external__react__default.a.createElement("li", {
    className: "nav-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/user/register"
  }, external__react__default.a.createElement("a", {
    className: "nav-link"
  }, "Register"))), external__react__default.a.createElement("li", {
    className: "nav-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/test"
  }, external__react__default.a.createElement("a", {
    className: "nav-link"
  }, "Test"))))))), external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null));
};

/* harmony default export */ var navbar = (navbar_Navbar);
// CONCATENATED MODULE: ./components/layout.js




var layout_Layout = function Layout(props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "Next project"), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/cerulean/bootstrap.min.css"
  })), external__react__default.a.createElement(navbar, null), external__react__default.a.createElement("div", {
    className: "container"
  }, props.children));
};

/* harmony default export */ var layout = __webpack_exports__["a"] = (layout_Layout);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return clockTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SAVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SAVE_TOKEN; });
var clockTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};
var SET_COUNT = 'SET_COUNT';
var SAVE_USER = 'SAVE_USER';
var SAVE_TOKEN = 'SAVE_TOKEN';

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CUSTOMERS; });
var API_URL = 'https://obscure-stream-46512.herokuapp.com/';
var PRODUCTS = 'products/';
var CUSTOMERS = 'customers/';

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(4);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./redux/costants/actionTypes.js
var actionTypes = __webpack_require__(5);

// CONCATENATED MODULE: ./redux/actions/user.js

var user_saveUser = function saveUser(user) {
  return {
    type: actionTypes["b" /* SAVE_USER */],
    payload: user
  };
};
var user_saveToken = function saveToken(token) {
  return {
    type: actionTypes["a" /* SAVE_TOKEN */],
    payload: token
  };
};
// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(28);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(29);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./assets/config/api.js
var api = __webpack_require__(9);

// EXTERNAL MODULE: external "react-bootstrap"
var external__react_bootstrap_ = __webpack_require__(6);
var external__react_bootstrap__default = /*#__PURE__*/__webpack_require__.n(external__react_bootstrap_);

// CONCATENATED MODULE: ./components/user/login.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var login_Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "config", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var customer = {
          username: _this.state.username,
          password: _this.state.password
        };
        external__axios__default.a.post(api["a" /* API_URL */] + api["b" /* CUSTOMERS */] + 'authenticate', {
          customer: customer
        }, _this.config).then(function (response) {
          console.log(response);

          if (response.data.success) {
            _this.props.saveUser(response.data.customer);

            _this.props.saveToken(response.data.token);

            _this.setState({
              redirect: true
            });

            console.log(response);
          } else {
            console.log('wrong user data');
          }
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState(_defineProperty({}, e.target.id, e.target.value));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "validateForm", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.state.username.length > 2 && _this.state.password.length > 2;
      }
    });
    _this.state = {
      username: '',
      password: '',
      redirect: false
    };
    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      if (this.state.redirect) {
        router__default.a.push('/product/catalog');
      }

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, external__react__default.a.createElement(external__react_bootstrap_["FormGroup"], {
        controlId: "username",
        bsSize: "large"
      }, external__react__default.a.createElement(external__react_bootstrap_["ControlLabel"], null, "Username"), external__react__default.a.createElement(external__react_bootstrap_["FormControl"], {
        type: "text",
        value: this.state.username,
        onChange: this.handleChange
      })), external__react__default.a.createElement(external__react_bootstrap_["FormGroup"], {
        controlId: "password",
        bsSize: "large"
      }, external__react__default.a.createElement(external__react_bootstrap_["ControlLabel"], null, "Password"), external__react__default.a.createElement(external__react_bootstrap_["FormControl"], {
        type: "password",
        value: this.state.password,
        onChange: this.handleChange
      })), external__react__default.a.createElement(external__react_bootstrap_["Button"], {
        disabled: !this.validateForm(),
        className: "btn btn-success",
        type: "submit"
      }, "Login")));
    }
  }]);

  return Login;
}(external__react__default.a.Component);

var login_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveUser: function saveUser(user) {
      return dispatch(user_saveUser(user));
    },
    saveToken: function saveToken(token) {
      return dispatch(user_saveToken(token));
    }
  };
};

/* harmony default export */ var login = (Object(external__react_redux_["connect"])(null, login_mapDispatchToProps)(login_Login));
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/user/login.js




var user_login_Login = function Login() {
  return external__react__default.a.createElement(layout["a" /* default */], null, external__react__default.a.createElement("h2", {
    align: "center"
  }, "Login"), external__react__default.a.createElement(login, null));
};

/* harmony default export */ var user_login = __webpack_exports__["default"] = (user_login_Login);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ })
/******/ ]);