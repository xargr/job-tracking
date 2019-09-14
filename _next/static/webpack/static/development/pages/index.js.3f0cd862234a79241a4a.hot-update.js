webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ModalForm.js":
/*!*********************************!*\
  !*** ./components/ModalForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_isModalValid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/isModalValid */ "./lib/isModalValid.js");
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context/JobContext */ "./components/context/JobContext.js");



var _jsxFileName = "/home/greg/sites/jobTracking/components/ModalForm.js";




var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ModalForm__Overlay",
  componentId: "sc-1vszn36-0"
})(["background-color:rgba(51,41,41,0.65);position:fixed;min-height:100vh;min-width:100vw;z-index:10;top:0;left:0;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ModalForm__Container",
  componentId: "sc-1vszn36-1"
})(["width:360px;height:auto;position:absolute;background:#fff;top:calc(50% - 160px);left:calc(50% - 180px);border-radius:5px;padding:1em;"]);
var Close = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ModalForm__Close",
  componentId: "sc-1vszn36-2"
})(["margin:10px 0;text-align:right;font-size:1.5em;height:30px;width:100%;float:right;line-height:30px;font-weight:700;"]);
var Pointer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ModalForm__Pointer",
  componentId: "sc-1vszn36-3"
})(["width:30px;height:30px;float:right;text-align:center;cursor:pointer;"]);
var H4 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h4.withConfig({
  displayName: "ModalForm__H4",
  componentId: "sc-1vszn36-4"
})(["font-weight:700;font-size:1.2em;font-family:sans-serif;margin:0px 0px 20px 20px;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].label.withConfig({
  displayName: "ModalForm__Label",
  componentId: "sc-1vszn36-5"
})(["display:block;margin-bottom:10px;font-family:'Red Hat Text',sans-serif;color:rgb(152,161,179);margin:0px 0px 10px 15px;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input.withConfig({
  displayName: "ModalForm__Input",
  componentId: "sc-1vszn36-6"
})(["display:block;height:30px;width:90%;margin:0 auto 10px;border:none;background-color:rgb(242,245,250);border-radius:0px;&:focus{outline:none;border-bottom:2px solid rgb(33,150,243);}"]);
var ButtonSave = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "ModalForm__ButtonSave",
  componentId: "sc-1vszn36-7"
})(["margin:20px;float:right;width:75px;height:35px;cursor:pointer;background-color:rgb(22,138,230);outline:none;border:1px solid rgb(22,138,230);border-radius:2px;color:#fff;font-weight:700;font-size:1em;"]);
var ButtonDelete = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "ModalForm__ButtonDelete",
  componentId: "sc-1vszn36-8"
})(["margin:20px;float:right;width:75px;height:35px;cursor:pointer;background-color:rgb(22,138,230);outline:none;border:1px solid rgb(22,138,230);border-radius:2px;color:#fff;font-weight:700;font-size:1em;"]);

var ModalForm = function ModalForm() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_6__["JobContext"]),
      modalData = _useContext.modalData,
      modalTrigger = _useContext.modalTrigger,
      modalSubmit = _useContext.modalSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, modalData)),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      isValid = _useState4[0],
      setIsValid = _useState4[1];

  var node = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    if (node.current && !node.current.contains(e.target)) {
      modalTrigger(null);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('click', handleClick);
    return function () {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  var handleForm = function handleForm(e) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
    Object(_lib_isModalValid__WEBPACK_IMPORTED_MODULE_5__["default"])(state, setIsValid);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    modalSubmit(state);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Overlay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, {
    ref: node,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Close, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Pointer, {
    onClick: function onClick() {
      return modalTrigger(null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "\u2613")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(H4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Add Job"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Label, {
    htmlFor: "company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Company"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Input, {
    name: "company",
    value: state.company,
    autoComplete: "off",
    onChange: function onChange(e) {
      return handleForm(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Label, {
    htmlFor: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Position"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Input, {
    name: "position",
    value: state.position,
    autoComplete: "off",
    onChange: function onChange(e) {
      return handleForm(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), state.jobId && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ButtonDelete, {
    onClick: function onClick(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Delete"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ButtonSave, {
    disabled: !isValid,
    onClick: function onClick(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Save")));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalForm);

/***/ })

})
//# sourceMappingURL=index.js.3f0cd862234a79241a4a.hot-update.js.map