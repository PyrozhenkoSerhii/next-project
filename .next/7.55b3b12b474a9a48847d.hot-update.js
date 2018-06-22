webpackHotUpdate(7,{

/***/ "./pages/product/view.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_config_api__ = __webpack_require__("./assets/config/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
var _jsxFileName = "E:\\Projects\\serhii\\nextjs-project\\pages\\product\\view.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var View =
/*#__PURE__*/
function (_React$Component) {
  _inherits(View, _React$Component);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h3", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Product View"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, this.props.product.title), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Specification"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, this.props.product.specification.map(function (element) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
          key: element.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, element.name, ":", element.value);
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref, context) {
      var req = _ref.req;
      console.log("context: " + context);
      console.log("req: " + req.query.id);
      __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default()(__WEBPACK_IMPORTED_MODULE_2__assets_config_api__["a" /* API_URL */] + __WEBPACK_IMPORTED_MODULE_2__assets_config_api__["b" /* PRODUCTS */] + 'getById', {
        method: 'POST',
        body: JSON.stringify({
          id: req.query.id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data.product);
        return {
          product: data.product
        };
      });
    }
  }]);

  return View;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(View, "View", "E:\\Projects\\serhii\\nextjs-project\\pages\\product\\view.js");
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
//# sourceMappingURL=7.55b3b12b474a9a48847d.hot-update.js.map