webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Jobs/Job.js":
/*!********************************!*\
  !*** ./components/Jobs/Job.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");


var _this = undefined,
    _jsxFileName = "/home/greg/sites/jobTracking/components/Jobs/Job.js";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Job__Container",
  componentId: "avkz8q-0"
})(["border:1px solid lightgrey;border-radius:2px;margin-bottom:8px;padding:8px;background-color:", ";"], function (props) {
  return props.isDragging ? 'lightgreen' : 'white';
});

var Job = function Job() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Draggable"], {
    draggableId: job.id,
    key: _this.props.job.id,
    index: _this.props.index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, function (provided, snapshot) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps, {
      isDragging: snapshot.isDragging,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), _this.props.job.company);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Job);

/***/ })

})
//# sourceMappingURL=index.js.d34ba4618e55a349ff92.hot-update.js.map