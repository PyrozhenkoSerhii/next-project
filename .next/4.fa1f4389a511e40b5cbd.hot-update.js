webpackHotUpdate(4,{

/***/ "./pages/product/view.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_config_api__ = __webpack_require__("./assets/config/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_actions_order__ = __webpack_require__("./redux/actions/order.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);

var _jsxFileName = "E:\\Projects\\serhii\\nextjs-project\\pages\\product\\view.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var View =
/*#__PURE__*/
function (_React$Component) {
  _inherits(View, _React$Component);

  _createClass(View, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
        var res, data;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_3__assets_config_api__["a" /* API_URL */] + __WEBPACK_IMPORTED_MODULE_3__assets_config_api__["b" /* PRODUCTS */] + 'getById', {
                  method: 'POST',
                  body: JSON.stringify({
                    id: context.query.id
                  }),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                return _context.abrupt("return", {
                  product: data.product
                });

              case 7:
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

  function View(props) {
    var _this;

    _classCallCheck(this, View);

    _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "increaseCount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log('increase');
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "decreaseCount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log('decrease');
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "orderProduct", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log('order');
      }
    });
    _this.state = {
      localCount: 0
    };
    return _this;
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h3", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Product View"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.props.product.title), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Specification"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, this.props.product.specification.map(function (element) {
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("li", {
          key: element.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, element.name, ":", element.value);
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Order"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("button", {
        onClick: this.decreaseCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Decrease")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, this.state.count)), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("button", {
        onClick: this.increaseCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Increase"))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a, {
        href: "/product/order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("button", {
        onClick: this.orderProduct,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Order")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return View;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    order: function order(productCount) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__redux_actions_order__["a" /* setCount */])(productCount));
    }
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(null, mapDispatchToProps)(View);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(View, "View", "E:\\Projects\\serhii\\nextjs-project\\pages\\product\\view.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "E:\\Projects\\serhii\\nextjs-project\\pages\\product\\view.js");
  reactHotLoader.register(_default, "default", "E:\\Projects\\serhii\\nextjs-project\\pages\\product\\view.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/product\\view")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.fa1f4389a511e40b5cbd.hot-update.js.map