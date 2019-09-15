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



var Input = styled;

var Import = function Import() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_2__["JobContext"]),
      deleteAll = _useContext.deleteAll;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styled_HeaderButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: function onClick() {
      return deleteAll();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Import JSON"));
};

/* harmony default export */ __webpack_exports__["default"] = (Import);

/***/ })

})
//# sourceMappingURL=_app.js.c3af00dc4ea9372d92b9.hot-update.js.map