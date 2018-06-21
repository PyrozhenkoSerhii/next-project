webpackHotUpdate(4,{

/***/ "./pages/product/catalog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_config_api__ = __webpack_require__("./assets/config/api.js");

var _jsxFileName = "E:\\Projects\\serhii\\nextjs-project\\pages\\product\\catalog.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






var Catalog = function Catalog(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3726591664"
  }, "Catalog"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3726591664"
  }, props.products.map(function (product) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      key: product._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      className: "jsx-3726591664" + " " + "productWrapper"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: product.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      className: "jsx-3726591664" + " " + "productImage"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h6", {
      align: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      className: "jsx-3726591664"
    }, product.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h6", {
      align: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      className: "jsx-3726591664"
    }, product.price, "$"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      className: "jsx-3726591664" + " " + "forward"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
      as: "/product/view/".concat(product.title),
      href: "/product/view?id=".concat(product._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      className: "jsx-3726591664" + " " + "forwardPar"
    }, "Forward"))));
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "3726591664",
    css: ".forward.jsx-3726591664{text-align:center;}.forwardPar.jsx-3726591664{color:green;font-size:20px;}.productWrapper.jsx-3726591664{vertical-align:top;border:1px solid #cacaca;background:#f8f1ff;margin:20px 10px 20px 10px;padding:10px;position:static;display:inline-block;border-radius:15px;width:20%;min-height:200px;min-width:200px;}.productImage.jsx-3726591664{background-repeat:no-repeat;width:100%;height:auto;max-width:200px;height:200px;}.btnForward.jsx-3726591664{width:30px;height:30px;background:transparent;border:none;cursor:pointer;background-size:100%;background-size:30px auto;background-repeat:no-repeat;margin-left:65%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9kdWN0XFxjYXRhbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCb0IsQUFHbUMsQUFHTixBQUlPLEFBYVMsQUFPakIsV0FDQyxDQXhCRyxNQUhuQixDQU82QixJQXFCRixJQXhCM0IsQ0FnQmUsV0FDQyxLQWJPLEVBcUJQLEtBUEksT0FRRCxLQXJCWSxJQWNkLE1BUVEsT0FQekIsVUFkaUIsSUFzQmEsU0FyQlYsZ0JBQ0ssQ0FxQk8sb0JBcEJULFFBcUJILFdBcEJOLEtBcUJkLEtBcEJxQixpQkFDRCxnQkFDcEIiLCJmaWxlIjoicGFnZXNcXHByb2R1Y3RcXGNhdGFsb2cuanMiLCJzb3VyY2VSb290IjoiRTpcXFByb2plY3RzXFxzZXJoaWlcXG5leHRqcy1wcm9qZWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0FQSV9VUkwsIFBST0RVQ1RTfSBmcm9tIFwiLi4vLi4vYXNzZXRzL2NvbmZpZy9hcGlcIjtcclxuXHJcbmNvbnN0IENhdGFsb2cgPSAocHJvcHMpID0+IChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgzIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PkNhdGFsb2c8L2gzPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3Byb3BzLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0V3JhcHBlclwiIGtleT17cHJvZHVjdC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZHVjdEltYWdlXCIgc3JjPXtwcm9kdWN0LmltYWdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGFsaWduPVwiY2VudGVyXCI+e3Byb2R1Y3QudGl0bGV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgYWxpZ249XCJjZW50ZXJcIj57cHJvZHVjdC5wcmljZX0kPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3J3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL3Byb2R1Y3Qvdmlldy8ke3Byb2R1Y3QudGl0bGV9YH0gaHJlZj17YC9wcm9kdWN0L3ZpZXc/aWQ9JHtwcm9kdWN0Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcndhcmRQYXJcIj5Gb3J3YXJkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmZvcndhcmQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3J3YXJkUGFyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdFdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGYxZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMTBweCAyMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0SW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bkZvcndhcmQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuQ2F0YWxvZy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChBUElfVVJMICsgUFJPRFVDVFMgKyAnZ2V0QWxsJywge21ldGhvZDogJ0dFVCd9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgaWYgKGRhdGEuc3VjY2VzcylcclxuICAgICAgICByZXR1cm4ge3Byb2R1Y3RzOiBkYXRhLnByb2R1Y3RzfTtcclxuICAgIHJldHVybiB7cHJvZHVjdHM6IHt9fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0YWxvZzsiXX0= */\n/*@ sourceURL=pages\\product\\catalog.js */"
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
          return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_6__assets_config_api__["a" /* API_URL */] + __WEBPACK_IMPORTED_MODULE_6__assets_config_api__["b" /* PRODUCTS */] + 'getAll', {
            method: 'GET'
          });

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;

          if (!data.success) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", {
            products: data.products
          });

        case 8:
          return _context.abrupt("return", {
            products: {}
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
var _default = Catalog;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Catalog, "Catalog", "E:\\Projects\\serhii\\nextjs-project\\pages\\product\\catalog.js");
  reactHotLoader.register(_default, "default", "E:\\Projects\\serhii\\nextjs-project\\pages\\product\\catalog.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/product\\catalog")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.1878cf2a9e42d0b75d04.hot-update.js.map