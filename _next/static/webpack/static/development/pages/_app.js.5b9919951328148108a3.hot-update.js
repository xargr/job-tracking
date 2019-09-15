webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Button/Import.js":
/*!*************************************!*\
  !*** ./components/Button/Import.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styled_HeaderButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styled/HeaderButton */ "./components/Styled/HeaderButton.js");
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/JobContext */ "./components/context/JobContext.js");

var _jsxFileName = "/home/greg/sites/jobTracking/components/Button/Import.js";




var Import = function Import() {
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_3__["JobContext"]),
      deleteAll = _useContext.deleteAll;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    inputRef.current.click();
  };

  var handleOnChange = function handleOnChange(e) {
    var file = e.target.files[0];
    var fileRead = new FileReader();
    fileRead.readAsText(file, 'UTF-8');

    fileRead.onload = function (e) {
      var uploadedData = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(e.target.result);

      var parsedData = JSON.parse(uploadedData);
      uploadData(parsedData);
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    ref: inputRef,
    accept: ".json",
    type: "file",
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      return handleOnChange(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Styled_HeaderButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick(e) {
      return handleClick(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Import JSON"));
};

/* harmony default export */ __webpack_exports__["default"] = (Import);

/***/ })

})
//# sourceMappingURL=_app.js.5b9919951328148108a3.hot-update.js.map