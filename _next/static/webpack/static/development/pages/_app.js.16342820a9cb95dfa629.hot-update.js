webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/JobContext */ "./components/context/JobContext.js");
/* harmony import */ var _Button_Export__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button/Export */ "./components/Button/Export.js");
/* harmony import */ var _Button_DeleteAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button/DeleteAll */ "./components/Button/DeleteAll.js");
/* harmony import */ var _Button_Import__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button/Import */ "./components/Button/Import.js");

var _jsxFileName = "/home/greg/sites/jobTracking/components/Header.js";






var Header = function Header() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_2__["JobContext"]),
      jobs = _useContext.jobs;

  var jobsCount = jobs && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(jobs).length;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeftSide, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Job Tracking"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Stay organized by tracking the companies and jobs you are applying to.", ' ')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RightSide, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Import__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), jobsCount > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_DeleteAll__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button_Export__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.16342820a9cb95dfa629.hot-update.js.map