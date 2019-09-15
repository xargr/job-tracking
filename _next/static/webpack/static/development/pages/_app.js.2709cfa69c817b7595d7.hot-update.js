webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Button/Import.js":
/*!*************************************!*\
  !*** ./components/Button/Import.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styled_HeaderButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styled/HeaderButton */ "./components/Styled/HeaderButton.js");
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/JobContext */ "./components/context/JobContext.js");
var _jsxFileName = "/home/greg/sites/jobTracking/components/Button/Import.js";




var Import = function Import() {
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_2__["JobContext"]),
      deleteAll = _useContext.deleteAll;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    inputRef.current.click();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    ref: inputRef,
    accept: ".json",
    type: "file",
    style: {
      display: none
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styled_HeaderButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: function onClick(e) {
      return handleClick(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Import JSON"));
};

/* harmony default export */ __webpack_exports__["default"] = (Import);

/***/ })

})
//# sourceMappingURL=_app.js.2709cfa69c817b7595d7.hot-update.js.map