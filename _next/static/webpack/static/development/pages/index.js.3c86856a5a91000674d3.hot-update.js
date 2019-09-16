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
/* harmony import */ var _lib_isModalValid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/isModalValid */ "./lib/isModalValid.js");
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/JobContext */ "./components/context/JobContext.js");
/* harmony import */ var _Styled_StyleModalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Styled/StyleModalForm */ "./components/Styled/StyleModalForm.js");



var _jsxFileName = "/home/greg/sites/jobTracking/components/ModalForm.js";





var ModalForm = function ModalForm() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_5__["JobContext"]),
      modalData = _useContext.modalData,
      modalTrigger = _useContext.modalTrigger,
      modalSubmit = _useContext.modalSubmit,
      deleteSubmit = _useContext.deleteSubmit;

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
    Object(_lib_isModalValid__WEBPACK_IMPORTED_MODULE_4__["default"])(state, setIsValid);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    modalSubmit(state);
  };

  var handleDelete = function handleDelete(e, jobId, columnId) {
    e.preventDefault();
    deleteSubmit(jobId, columnId);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Styled_StyleModalForm__WEBPACK_IMPORTED_MODULE_6__["Overlay"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Styled_StyleModalForm__WEBPACK_IMPORTED_MODULE_6__["ContainerModalForm"], {
    ref: node,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Styled_StyleModalForm__WEBPACK_IMPORTED_MODULE_6__["Close"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Pointer, {
    onClick: function onClick() {
      return modalTrigger(null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "\u2613")), state.jobId ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(H4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Update Job") : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(H4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Add Job"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Label, {
    htmlFor: "company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
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
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Label, {
    htmlFor: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
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
      lineNumber: 75
    },
    __self: this
  }), state.jobId ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ButtonSave, {
    disabled: !isValid,
    onClick: function onClick(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Update") : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ButtonSave, {
    disabled: !isValid,
    onClick: function onClick(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Save"), state.jobId && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ButtonDelete, {
    onClick: function onClick(e) {
      return handleDelete(e, state.jobId, state.columnId);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Delete")));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalForm);

/***/ })

})
//# sourceMappingURL=index.js.3c86856a5a91000674d3.hot-update.js.map