webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/JobsPanel/FeatureList.js":
/*!*********************************************!*\
  !*** ./components/JobsPanel/FeatureList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _JobList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobList */ "./components/JobsPanel/JobList.js");
var _jsxFileName = "/home/greg/sites/jobTracking/components/JobsPanel/FeatureList.js";



var FeatureList = function FeatureList(_ref) {
  var column = _ref.column,
      clickAddJob = _ref.clickAddJob,
      data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: column + ' aux',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "counter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, data && data.length || 0), " ", column), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return clickAddJob(title);
    },
    className: "add_new",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "+ Add job"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_JobList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FeatureList);

/***/ })

})
//# sourceMappingURL=index.js.0c2e83f699191041d7a9.hot-update.js.map