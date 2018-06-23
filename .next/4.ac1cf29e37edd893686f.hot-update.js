webpackHotUpdate(4,{

/***/ "./pages/product/view.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_config_api__ = __webpack_require__("./assets/config/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_actions_order__ = __webpack_require__("./redux/actions/order.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_link__);

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
                return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_4__assets_config_api__["a" /* API_URL */] + __WEBPACK_IMPORTED_MODULE_4__assets_config_api__["b" /* PRODUCTS */] + 'getById', {
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
        var count = _this.state.localCount + 1;

        _this.setState({
          localCount: count
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "decreaseCount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var count = _this.state.localCount;

        if (count > 0) {
          count--;
        }

        _this.setState({
          localCount: count
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "orderProduct", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log('order');

        _this.props.order(_this.state.localCount);
      }
    });
    _this.state = {
      localCount: props.initialCount
    };
    return _this;
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h3", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-3238426496"
      }, "Product View"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3238426496"
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-3238426496"
      }, this.props.product.title), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-3238426496"
      }, "Specification"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-3238426496"
      }, this.props.product.specification.map(function (element) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", {
          key: element.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          className: "jsx-3238426496"
        }, element.name, ":", element.value);
      })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-3238426496"
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-3238426496"
      }, "Order"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", {
        onClick: this.decreaseCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-3238426496" + " " + "btn btn-primary btn-sm"
      }, "-"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-3238426496"
      }, this.state.localCount), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", {
        onClick: this.increaseCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-3238426496" + " " + "btn btn-primary btn-sm"
      }, "+"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-3238426496"
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
        onClick: this.orderProduct,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-3238426496"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_link___default.a, {
        href: "/product/order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-3238426496" + " " + "btn btn-success"
      }, "Order"))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3238426496",
        css: ".btn.jsx-3238426496{margin:10px;border-radius:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9kdWN0XFx2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFNEIsQUFHcUMsWUFDTyxtQkFDdkIiLCJmaWxlIjoicGFnZXNcXHByb2R1Y3RcXHZpZXcuanMiLCJzb3VyY2VSb290IjoiRTpcXFByb2plY3RzXFxzZXJoaWlcXG5leHRqcy1wcm9qZWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQge0FQSV9VUkwsIFBST0RVQ1RTfSBmcm9tIFwiLi4vLi4vYXNzZXRzL2NvbmZpZy9hcGlcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtzZXRDb3VudH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9vcmRlcic7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSV9VUkwgKyBQUk9EVUNUUyArICdnZXRCeUlkJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2lkOiBjb250ZXh0LnF1ZXJ5LmlkfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiB7cHJvZHVjdDogZGF0YS5wcm9kdWN0fTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG9jYWxDb3VudDogcHJvcHMuaW5pdGlhbENvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluY3JlYXNlQ291bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLnN0YXRlLmxvY2FsQ291bnQgKyAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2NhbENvdW50OiBjb3VudFxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZGVjcmVhc2VDb3VudCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgY291bnQgPSB0aGlzLnN0YXRlLmxvY2FsQ291bnQ7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbG9jYWxDb3VudDogY291bnRcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIG9yZGVyUHJvZHVjdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb3JkZXInKTtcclxuICAgICAgICB0aGlzLnByb3BzLm9yZGVyKHRoaXMuc3RhdGUubG9jYWxDb3VudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlByb2R1Y3QgVmlldzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGg1Pnt0aGlzLnByb3BzLnByb2R1Y3QudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgIDxoNj5TcGVjaWZpY2F0aW9uPC9oNj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wcm9kdWN0LnNwZWNpZmljYXRpb24ubWFwKChlbGVtZW50KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2VsZW1lbnQubmFtZX0+e2VsZW1lbnQubmFtZX06e2VsZW1lbnQudmFsdWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGg0Pk9yZGVyPC9oND5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9e3RoaXMuZGVjcmVhc2VDb3VudH0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMuc3RhdGUubG9jYWxDb3VudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiBvbkNsaWNrPXt0aGlzLmluY3JlYXNlQ291bnR9Pis8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLm9yZGVyUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0L29yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+T3JkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb3JkZXI6IHByb2R1Y3RDb3VudCA9PiBkaXNwYXRjaChzZXRDb3VudChwcm9kdWN0Q291bnQpKVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gICAgcmV0dXJuIHtpbml0aWFsQ291bnQ6IHN0YXRlLnByb2R1Y3QucHJvZHVjdENvdW50fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7Il19 */\n/*@ sourceURL=pages\\product\\view.js */"
      }));
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
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    order: function order(productCount) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__redux_actions_order__["a" /* setCount */])(productCount));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    initialCount: state.product.productCount
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(View);

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
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "E:\\Projects\\serhii\\nextjs-project\\pages\\product\\view.js");
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
//# sourceMappingURL=4.ac1cf29e37edd893686f.hot-update.js.map