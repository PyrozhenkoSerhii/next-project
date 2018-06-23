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
        className: "jsx-3894111680"
      }, "Product View"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3894111680"
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-3894111680"
      }, this.props.product.title), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-3894111680"
      }, "Specification"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-3894111680"
      }, this.props.product.specification.map(function (element) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", {
          key: element.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          className: "jsx-3894111680"
        }, element.name, ":", element.value);
      })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-3894111680"
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-3894111680"
      }, "Order"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", {
        onClick: this.decreaseCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-3894111680" + " " + "btn btn-primary btn-sm"
      }, "-"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-3894111680"
      }, this.state.localCount), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", {
        onClick: this.increaseCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-3894111680" + " " + "btn btn-primary btn-sm"
      }, "+"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
        onClick: this.orderProduct,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-3894111680"
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_link___default.a, {
        href: "/product/order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-3894111680" + " " + "btn btn-success"
      }, "Order"))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3894111680",
        css: ".btn.jsx-3894111680{margin:10px;border-;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9kdWN0XFx2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFNEIsQUFHcUMsWUFFakIsUUFBQyIsImZpbGUiOiJwYWdlc1xccHJvZHVjdFxcdmlldy5qcyIsInNvdXJjZVJvb3QiOiJFOlxcUHJvamVjdHNcXHNlcmhpaVxcbmV4dGpzLXByb2plY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7QVBJX1VSTCwgUFJPRFVDVFN9IGZyb20gXCIuLi8uLi9hc3NldHMvY29uZmlnL2FwaVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3NldENvdW50fSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL29yZGVyJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQVBJX1VSTCArIFBST0RVQ1RTICsgJ2dldEJ5SWQnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7aWQ6IGNvbnRleHQucXVlcnkuaWR9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHtwcm9kdWN0OiBkYXRhLnByb2R1Y3R9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2NhbENvdW50OiBwcm9wcy5pbml0aWFsQ291bnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVhc2VDb3VudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuc3RhdGUubG9jYWxDb3VudCArIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvY2FsQ291bnQ6IGNvdW50XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBkZWNyZWFzZUNvdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMuc3RhdGUubG9jYWxDb3VudDtcclxuICAgICAgICBpZiAoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2NhbENvdW50OiBjb3VudFxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgb3JkZXJQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvcmRlcicpO1xyXG4gICAgICAgIHRoaXMucHJvcHMub3JkZXIodGhpcy5zdGF0ZS5sb2NhbENvdW50KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+UHJvZHVjdCBWaWV3PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8aDU+e3RoaXMucHJvcHMucHJvZHVjdC50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgPGg2PlNwZWNpZmljYXRpb248L2g2PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnByb2R1Y3Quc3BlY2lmaWNhdGlvbi5tYXAoKGVsZW1lbnQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZWxlbWVudC5uYW1lfT57ZWxlbWVudC5uYW1lfTp7ZWxlbWVudC52YWx1ZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8aDQ+T3JkZXI8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgb25DbGljaz17dGhpcy5kZWNyZWFzZUNvdW50fT4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5zdGF0ZS5sb2NhbENvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9e3RoaXMuaW5jcmVhc2VDb3VudH0+KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5vcmRlclByb2R1Y3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9vcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPk9yZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5idG57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb3JkZXI6IHByb2R1Y3RDb3VudCA9PiBkaXNwYXRjaChzZXRDb3VudChwcm9kdWN0Q291bnQpKVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gICAgcmV0dXJuIHtpbml0aWFsQ291bnQ6IHN0YXRlLnByb2R1Y3QucHJvZHVjdENvdW50fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlldyk7Il19 */\n/*@ sourceURL=pages\\product\\view.js */"
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
//# sourceMappingURL=4.2b4f6408d6d2d94c96d9.hot-update.js.map