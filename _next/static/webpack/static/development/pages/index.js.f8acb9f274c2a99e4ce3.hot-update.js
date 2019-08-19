webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/JobsPanel/JobList.js":
/*!*****************************************!*\
  !*** ./components/JobsPanel/JobList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/greg/sites/jobTracking/components/JobsPanel/JobList.js";



var JobList = function JobList(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data && data.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jobList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, data.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "jobItem",
      onDoubleClick: modalData(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, item.company), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job__position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, item.position), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "job__time__ago",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_1___default()(item.date).fromNow()));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (JobList);

/***/ })

})
//# sourceMappingURL=index.js.f8acb9f274c2a99e4ce3.hot-update.js.map