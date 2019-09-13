webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ModalForm.js":
/*!*********************************!*\
  !*** ./components/ModalForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/home/greg/sites/jobTracking/components/ModalForm.js";

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n  height: 25px;\n  width: 90%;\n  text-align: center;\n  margin: 0 auto 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n  margin-bottom: 10px;\n  font-family: 'Red Hat Text', sans-serif;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 30px;\n  height: 30px;\n  float: right;\n  text-align: center;\n  cursor: pointer;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 10px 0;\n  text-align: right;\n  font-size: 1.5em;\n  height: 30px;\n  width: 100%;\n  float: right;\n  line-height: 30px;\n  font-weight: 700;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 300px;\n  height: 200px;\n  position: absolute;\n  background: #fff;\n  top: calc(50% - 160px);\n  left: calc(50% - 150px);\n  border-radius: 5px;\n  padding: 1em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: rgba(51, 41, 41, 0.65);\n  position: fixed;\n  min-height: 100vh;\n  min-width: 100vw;\n  z-index: 10;\n  top: 0;\n  left: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var Close = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var Pointer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var Label = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label(_templateObject5());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input(_templateObject6());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject7());

var ModalForm = function ModalForm(_ref) {
  var modalTrigger = _ref.modalTrigger,
      isModalOpen = _ref.isModalOpen;
  var node = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    if (isModalOpen && node.current && !node.current.contains(e.target)) {
      modalTrigger(null);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('click', handleClick);
    return function () {
      window.removeEventListener('click', handleClick);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Overlay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    ref: node,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Close, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Pointer, {
    onClick: function onClick() {
      return modalTrigger(null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\u2613")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Add Job"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    htmlFor: "company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Company"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: "company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Label, {
    htmlFor: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Position"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    name: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Save")));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalForm);

/***/ })

})
//# sourceMappingURL=index.js.4415d5476fd7f020682c.hot-update.js.map