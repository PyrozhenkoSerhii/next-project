webpackHotUpdate(7,{

/***/ "./components/user/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_actions_user__ = __webpack_require__("./redux/actions/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_config_api__ = __webpack_require__("./assets/config/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "E:\\Projects\\serhii\\nextjs-project\\components\\user\\login.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var Login =
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
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_4__assets_config_api__["a" /* API_URL */] + __WEBPACK_IMPORTED_MODULE_4__assets_config_api__["c" /* USERS */] + 'authenticate', {
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
      if (this.state.redirect) {//todo redirect
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["d" /* FormGroup */], {
        controlId: "username",
        bsSize: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* ControlLabel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Username"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["c" /* FormControl */], {
        type: "text",
        value: this.state.username,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["d" /* FormGroup */], {
        controlId: "password",
        bsSize: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["b" /* ControlLabel */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["c" /* FormControl */], {
        type: "password",
        value: this.state.password,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_bootstrap__["a" /* Button */], {
        disabled: !this.validateForm(),
        className: "btn btn-success",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Login")));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveUser: function saveUser(user) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__redux_actions_user__["b" /* saveUser */])(user));
    },
    saveToken: function saveToken(token) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__redux_actions_user__["a" /* saveToken */])(token));
    }
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null, mapDispatchToProps)(Login);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Login, "Login", "E:\\Projects\\serhii\\nextjs-project\\components\\user\\login.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "E:\\Projects\\serhii\\nextjs-project\\components\\user\\login.js");
  reactHotLoader.register(_default, "default", "E:\\Projects\\serhii\\nextjs-project\\components\\user\\login.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.92cf360260e72c9b058a.hot-update.js.map