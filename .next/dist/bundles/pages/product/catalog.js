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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_config_api__ = __webpack_require__(9);




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






var Catalog = function Catalog(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_layout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-385362788"
  }, "Catalog"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    className: "jsx-385362788"
  }, props.products.map(function (product) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      key: product._id,
      className: "jsx-385362788" + " " + "productWrapper"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: product.image,
      className: "jsx-385362788" + " " + "productImage"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h6", {
      align: "center",
      className: "jsx-385362788"
    }, product.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h6", {
      align: "center",
      className: "jsx-385362788"
    }, product.price, "$"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
      href: "/product/view?id=".concat(product._id)
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      className: "jsx-385362788" + " " + "forwardP"
    }, "Forward")));
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "385362788",
    css: [".forwardP.jsx-385362788{color:green;font-size:20px;text-align:center;cursor:pointer;}", ".productWrapper.jsx-385362788{vertical-align:top;border:1px solid #cacaca;background:#f8f1ff;margin:20px 10px 20px 10px;padding:10px;position:static;display:inline-block;border-radius:15px;width:20%;min-height:200px;min-width:200px;}", ".productImage.jsx-385362788{background-repeat:no-repeat;width:100%;height:auto;max-width:200px;height:200px;}", ".btnForward.jsx-385362788{width:30px;height:30px;background:transparent;border:none;cursor:pointer;background-size:100%;background-size:30px auto;background-repeat:no-repeat;margin-left:65%;}"]
  }));
};

Catalog.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var res, data;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_6__assets_config_api__["a" /* API_URL */] + __WEBPACK_IMPORTED_MODULE_6__assets_config_api__["c" /* PRODUCTS */] + 'getAll', {
            method: 'GET'
          });

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            products: data.products
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Catalog);

/***/ })
/******/ ]);