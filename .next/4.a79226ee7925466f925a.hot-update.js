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
      textAlign: center
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1283235877"
  }, "Catalog"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1283235877"
  }, props.products.map(function (product) {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      key: product._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      className: "jsx-1283235877" + " " + "productWrapper"
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
      src: product.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      className: "jsx-1283235877" + " " + "productImage"
    }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h6", {
      align: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      className: "jsx-1283235877"
    }, product.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h6", {
      align: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      className: "jsx-1283235877"
    }, product.price, "$"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
      as: "/product/view/".concat(product.title),
      href: "/product/view?id=".concat(product._id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: "jsx-1283235877"
    }, "Forward")));
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "1283235877",
    css: ".productWrapper.jsx-1283235877{vertical-align:top;border:1px solid #cacaca;background:#f8f1ff;margin:20px 10px 20px 10px;padding:10px;position:static;display:inline-block;border-radius:15px;width:20%;min-height:200px;min-width:200px;}.productImage.jsx-1283235877{background-repeat:no-repeat;width:100%;height:auto;max-width:200px;height:200px;}.btnForward.jsx-1283235877{width:30px;height:30px;background:transparent;border:none;cursor:pointer;background-size:100%;background-size:30px auto;background-repeat:no-repeat;margin-left:65%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9kdWN0XFxjYXRhbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCb0IsQUFHb0MsQUFhUyxBQU9qQixXQUNDLFFBcEJhLElBcUJGLEtBUlosV0FDQyxLQWJPLEVBcUJQLEtBUEksT0FRRCxLQXJCWSxJQWNkLE1BUVEsT0FQekIsVUFkaUIsSUFzQmEsU0FyQlYsZ0JBQ0ssQ0FxQk8sb0JBcEJULFFBcUJILFdBcEJOLEtBcUJkLEtBcEJxQixpQkFDRCxnQkFDcEIiLCJmaWxlIjoicGFnZXNcXHByb2R1Y3RcXGNhdGFsb2cuanMiLCJzb3VyY2VSb290IjoiRTpcXFByb2plY3RzXFxzZXJoaWlcXG5leHRqcy1wcm9qZWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0FQSV9VUkwsIFBST0RVQ1RTfSBmcm9tIFwiLi4vLi4vYXNzZXRzL2NvbmZpZy9hcGlcIjtcclxuXHJcbmNvbnN0IENhdGFsb2cgPSAocHJvcHMpID0+IChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgzIHN0eWxlPXt7dGV4dEFsaWduOiBjZW50ZXJ9fT5DYXRhbG9nPC9oMz5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFdyYXBwZXJcIiBrZXk9e3Byb2R1Y3QuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2R1Y3RJbWFnZVwiIHNyYz17cHJvZHVjdC5pbWFnZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBhbGlnbj1cImNlbnRlclwiPntwcm9kdWN0LnRpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGFsaWduPVwiY2VudGVyXCI+e3Byb2R1Y3QucHJpY2V9JDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2AvcHJvZHVjdC92aWV3LyR7cHJvZHVjdC50aXRsZX1gfSBocmVmPXtgL3Byb2R1Y3Qvdmlldz9pZD0ke3Byb2R1Y3QuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5Gb3J3YXJkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5wcm9kdWN0V3JhcHBlcntcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjFmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAxMHB4IDIwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RJbWFnZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuRm9yd2FyZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDY1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5DYXRhbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSV9VUkwgKyBQUk9EVUNUUyArICdnZXRBbGwnLCB7bWV0aG9kOiAnR0VUJ30pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBpZiAoZGF0YS5zdWNjZXNzKVxyXG4gICAgICAgIHJldHVybiB7cHJvZHVjdHM6IGRhdGEucHJvZHVjdHN9O1xyXG4gICAgcmV0dXJuIHtwcm9kdWN0czoge319XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRhbG9nOyJdfQ== */\n/*@ sourceURL=pages\\product\\catalog.js */"
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
//# sourceMappingURL=4.a79226ee7925466f925a.hot-update.js.map