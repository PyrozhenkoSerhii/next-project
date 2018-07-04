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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/config/api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CUSTOMERS; });
var API_URL = 'https://obscure-stream-46512.herokuapp.com/';
var PRODUCTS = 'products/';
var CUSTOMERS = 'customers/';

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar__ = __webpack_require__("./components/navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_store__ = __webpack_require__("./redux/store.js");
var _jsxFileName = "E:\\Projects\\serhii\\nextjs-redux-project\\components\\layout.js";






var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Next project"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/cerulean/bootstrap.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_4__redux_store__["a" /* default */], null, null)(Layout));
;

/***/ }),

/***/ "./components/navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
var _jsxFileName = "E:\\Projects\\serhii\\nextjs-redux-project\\components\\navbar.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "logout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        localStorage.clear();
      }
    }), _temp));
  }

  _createClass(Navbar, [{
    key: "render",
    // loggedIn = () => {
    //     return token = localStorage.getItem(token) !== undefined;
    // };
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "navbar navbar-expand-lg fixed-top navbar-dark bg-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Next.js Project")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarResponsive",
        "aria-controls": "navbarResponsive",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "navbar-toggler-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarResponsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, !this.props.authenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        prefetch: true,
        href: "/product/catalog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Catalog"))), !this.props.authenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/product/order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Order"))), !this.props.authenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/user/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Login"))), !this.props.authenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/user/register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Register"))), !this.props.authenticated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "nav-link",
        onClick: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Register")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref2) {
      var req = _ref2.req;
      var isServer = !!req;
      var token = true;

      if (!isServer) {
        token = localStorage.getItem('token') !== undefined;
      }

      return {
        authenticated: true
      };
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userData: state.user
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./pages/product/catalog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_config_api__ = __webpack_require__("./assets/config/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_actions_product__ = __webpack_require__("./redux/actions/product.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);

var _jsxFileName = "E:\\Projects\\serhii\\nextjs-redux-project\\pages\\product\\catalog.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Catalog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Catalog, _React$Component);

  _createClass(Catalog, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var store, req, query, products, state, res, data;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store, req = _ref.req, query = _ref.query;
                state = store.getState();

                if (!(state.product.products.length > 0)) {
                  _context.next = 5;
                  break;
                }

                console.info('Products from redux storage');
                return _context.abrupt("return", {
                  products: state.product.products
                });

              case 5:
                if (!req) {
                  _context.next = 10;
                  break;
                }

                products = query.serverData.products;
                console.info('Products from server\'s API request');
                _context.next = 18;
                break;

              case 10:
                _context.next = 12;
                return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_5__assets_config_api__["a" /* API_URL */] + __WEBPACK_IMPORTED_MODULE_5__assets_config_api__["c" /* PRODUCTS */] + 'getAll', {
                  method: 'GET'
                });

              case 12:
                res = _context.sent;
                _context.next = 15;
                return res.json();

              case 15:
                data = _context.sent;
                products = data.products;
                console.info('Products from client\'s API request');

              case 18:
                return _context.abrupt("return", {
                  products: products
                });

              case 19:
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

  function Catalog(props) {
    var _this;

    _classCallCheck(this, Catalog);

    _this = _possibleConstructorReturn(this, (Catalog.__proto__ || Object.getPrototypeOf(Catalog)).call(this));

    if (props.uploadedProducts.length === 0) {
      props.uploadProducts(props.products);
    }

    return _this;
  }

  _createClass(Catalog, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("h3", {
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-2922181211"
      }, "Catalog"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-2922181211"
      }, this.props.products.map(function (product) {
        return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("div", {
          key: product._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          className: "jsx-2922181211" + " " + "productWrapper"
        }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("img", {
          src: product.image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          className: "jsx-2922181211" + " " + "productImage"
        }), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("h6", {
          align: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          className: "jsx-2922181211"
        }, product.title), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("h6", {
          align: "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          className: "jsx-2922181211"
        }, product.price, "$"), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
          href: "/product/view?id=".concat(product._id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          className: "jsx-2922181211" + " " + "forwardP"
        }, "Forward")));
      })), __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "2922181211",
        css: ".forwardP.jsx-2922181211{color:green;font-size:20px;text-align:center;cursor:pointer;}.productWrapper.jsx-2922181211{vertical-align:top;border:1px solid #cacaca;background:#f8f1ff;margin:20px 10px 20px 10px;padding:10px;position:static;display:inline-block;border-radius:15px;width:20%;min-height:200px;min-width:200px;}.productImage.jsx-2922181211{background-repeat:no-repeat;width:100%;height:auto;max-width:200px;height:200px;}.btnForward.jsx-2922181211{width:30px;height:30px;background:transparent;border:none;cursor:pointer;background-size:100%;background-size:30px auto;background-repeat:no-repeat;margin-left:65%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9kdWN0XFxjYXRhbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNENEIsQUFHcUMsQUFNTyxBQWFTLEFBT2pCLFdBQ0MsQ0ExQkcsT0FNVSxJQXFCRixJQTFCTCxDQWtCUCxXQUNDLEtBYk8sQ0FMSixDQTBCSCxLQVBJLE9BUUQsRUExQm5CLEdBSytCLElBY2QsTUFRUSxPQVB6QixVQWRpQixJQXNCYSxTQXJCVixnQkFDSyxDQXFCTyxvQkFwQlQsUUFxQkgsV0FwQk4sS0FxQmQsS0FwQnFCLGlCQUNELGdCQUNwQiIsImZpbGUiOiJwYWdlc1xccHJvZHVjdFxcY2F0YWxvZy5qcyIsInNvdXJjZVJvb3QiOiJFOlxcUHJvamVjdHNcXHNlcmhpaVxcbmV4dGpzLXJlZHV4LXByb2plY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEFQSV9VUkwsIFBST0RVQ1RTIH0gZnJvbSBcIi4uLy4uL2Fzc2V0cy9jb25maWcvYXBpXCI7XHJcbmltcG9ydCB7IHVwbG9hZFByb2R1Y3RzIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIENhdGFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHN0b3JlLCByZXEsIHF1ZXJ5IH0pIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcclxuICAgICAgICBpZiAoc3RhdGUucHJvZHVjdC5wcm9kdWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnUHJvZHVjdHMgZnJvbSByZWR1eCBzdG9yYWdlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0LnByb2R1Y3RzIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXEpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMgPSBxdWVyeS5zZXJ2ZXJEYXRhLnByb2R1Y3RzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ1Byb2R1Y3RzIGZyb20gc2VydmVyXFwncyBBUEkgcmVxdWVzdCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQVBJX1VSTCArIFBST0RVQ1RTICsgJ2dldEFsbCcsIHsgbWV0aG9kOiAnR0VUJyB9KTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzID0gZGF0YS5wcm9kdWN0cztcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdQcm9kdWN0cyBmcm9tIGNsaWVudFxcJ3MgQVBJIHJlcXVlc3QnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHByb2R1Y3RzOiBwcm9kdWN0cyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBpZiAocHJvcHMudXBsb2FkZWRQcm9kdWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcHJvcHMudXBsb2FkUHJvZHVjdHMocHJvcHMucHJvZHVjdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMyBhbGlnbj1cImNlbnRlclwiPkNhdGFsb2c8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RXcmFwcGVyXCIga2V5PXtwcm9kdWN0Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2R1Y3RJbWFnZVwiIHNyYz17cHJvZHVjdC5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBhbGlnbj1cImNlbnRlclwiPntwcm9kdWN0LnRpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgYWxpZ249XCJjZW50ZXJcIj57cHJvZHVjdC5wcmljZX0kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC92aWV3P2lkPSR7cHJvZHVjdC5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9yd2FyZFBcIj5Gb3J3YXJkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvcndhcmRQIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdFdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGYxZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAxMHB4IDIwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RJbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5idG5Gb3J3YXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cGxvYWRlZFByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0LnByb2R1Y3RzXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwbG9hZFByb2R1Y3RzOiBwcm9kdWN0cyA9PiBkaXNwYXRjaCh1cGxvYWRQcm9kdWN0cyhwcm9kdWN0cykpXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXRhbG9nKTsiXX0= */\n/*@ sourceURL=pages\\product\\catalog.js */"
      }));
    }
  }]);

  return Catalog;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    uploadedProducts: state.product.products
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    uploadProducts: function uploadProducts(products) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__redux_actions_product__["a" /* uploadProducts */])(products));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Catalog));

/***/ }),

/***/ "./redux/actions/product.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export orderProduct */
/* unused harmony export updateOrder */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uploadProducts; });
/* unused harmony export remove */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__ = __webpack_require__("./redux/costants/actionTypes.js");

var orderProduct = function orderProduct(product) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["b" /* ORDER_PRODUCT */],
    payload: product
  };
};
var updateOrder = function updateOrder(product) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["e" /* UPDATE_ORDER */],
    payload: product
  };
};
var uploadProducts = function uploadProducts(products) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["f" /* UPLOAD_PRODUCTS */],
    payload: products
  };
};
var remove = function remove(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["a" /* DELETE_FROM_ORDER */],
    payload: id
  };
};

/***/ }),

/***/ "./redux/costants/actionTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ORDER_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UPLOAD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_FROM_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SAVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SAVE_TOKEN; });
/* unused harmony export LOGOUT */
/* unused harmony export DATA_LOAD_SUCCESS */
/* unused harmony export SAVE_MY_DATA */
var ORDER_PRODUCT = 'ORDER_PRODUCT';
var UPDATE_ORDER = 'UPDATE_ORDER';
var UPLOAD_PRODUCTS = 'UPLOAD_PRODUCTS';
var DELETE_FROM_ORDER = 'DELETE_FROM_ORDER';
var SAVE_USER = 'SAVE_USER';
var SAVE_TOKEN = 'SAVE_TOKEN';
var LOGOUT = 'LOGOUT';
var DATA_LOAD_SUCCESS = 'DATA_LOAD_SUCCESS';
var SAVE_MY_DATA = 'SAVE_MY_DATA';

/***/ }),

/***/ "./redux/middleware/logger.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logger; });
var logger = function logger(store) {
  return function (next) {
    return function (action) {
      //console.log('dispatching', action.type);
      var result = next(action); //console.log('new state', store.getState());

      return result;
    };
  };
};

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
    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["b" /* ORDER_PRODUCT */]:
      return _objectSpread({}, state, {
        productState: _toConsumableArray(state.productState).concat([action.payload])
      });

    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["e" /* UPDATE_ORDER */]:
      var newState = state.productState.filter(function (el) {
        return el.id !== action.payload.id;
      });
      return _objectSpread({}, state, {
        productState: _toConsumableArray(newState).concat([action.payload])
      });

    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["f" /* UPLOAD_PRODUCTS */]:
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
  token: ''
};
function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["d" /* SAVE_USER */]:
      return _objectSpread({}, state, {
        user: action.payload
      });

    case __WEBPACK_IMPORTED_MODULE_0__costants_actionTypes__["c" /* SAVE_TOKEN */]:
      return _objectSpread({}, state, {
        token: action.payload
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




/* harmony default export */ __webpack_exports__["a"] = (function () {
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
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers_root__["a" /* default */], initialState, composeEnhancers(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_3__middleware_logger__["a" /* logger */], __WEBPACK_IMPORTED_MODULE_0_redux_thunk___default.a)));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/product/catalog.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

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

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=catalog.js.map