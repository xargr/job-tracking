webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Button/DeleteAll.js":
/*!****************************************!*\
  !*** ./components/Button/DeleteAll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styled_HeaderButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styled/HeaderButton */ "./components/Styled/HeaderButton.js");
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/JobContext */ "./components/context/JobContext.js");
var _jsxFileName = "/home/greg/sites/jobTracking/components/Button/DeleteAll.js";




var DeleteAll = function DeleteAll() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_2__["JobContext"]),
      deleteAll = _useContext.deleteAll;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styled_HeaderButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: function onClick() {
      return deleteAll();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Delete All");
};

/* harmony default export */ __webpack_exports__["default"] = (DeleteAll);

/***/ }),

/***/ "./components/Button/Export.js":
/*!*************************************!*\
  !*** ./components/Button/Export.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styled_HeaderButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styled/HeaderButton */ "./components/Styled/HeaderButton.js");
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/JobContext */ "./components/context/JobContext.js");
/* harmony import */ var _lib_toJson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/toJson */ "./lib/toJson.js");
var _jsxFileName = "/home/greg/sites/jobTracking/components/Button/Export.js";





var Export = function Export() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_2__["JobContext"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styled_HeaderButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: function onClick() {
      return Object(_lib_toJson__WEBPACK_IMPORTED_MODULE_3__["default"])(context);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Export JSON");
};

/* harmony default export */ __webpack_exports__["default"] = (Export);

/***/ }),

/***/ "./components/DeleteAll.js":
false,

/***/ "./components/Export.js":
false,

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Button_Export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button/Export */ "./components/Button/Export.js");
/* harmony import */ var _Button_DeleteAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button/DeleteAll */ "./components/Button/DeleteAll.js");
var _jsxFileName = "/home/greg/sites/jobTracking/components/Header.js";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__Container",
  componentId: "sc-4rw5b7-0"
})(["grid-row:header;padding:2em;"]);
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Header__H1",
  componentId: "sc-4rw5b7-1"
})(["font-size:2.3em;font-weight:700;margin-bottom:0.25em;font-family:'Red Hat Text',sans-serif;"]);
var Span = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Header__Span",
  componentId: "sc-4rw5b7-2"
})(["font-style:italic;"]);
var LeftSide = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__LeftSide",
  componentId: "sc-4rw5b7-3"
})(["width:50%;float:left;"]);
var RightSide = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__RightSide",
  componentId: "sc-4rw5b7-4"
})(["width:50%;float:right;text-align:right;margin-top:30px;"]);

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LeftSide, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Job Tracking"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Stay organized by tracking the companies and jobs you are applying to.", ' ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RightSide, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_DeleteAll__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Export__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.80d723d23292853550cc.hot-update.js.map