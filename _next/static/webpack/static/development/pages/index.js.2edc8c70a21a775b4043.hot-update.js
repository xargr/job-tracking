webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Jobs/JobsContainer.js":
/*!******************************************!*\
  !*** ./components/Jobs/JobsContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Column */ "./components/Jobs/Column.js");
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/JobContext */ "./components/context/JobContext.js");
/* harmony import */ var _ModalForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ModalForm */ "./components/ModalForm.js");
/* harmony import */ var _Styled_StyleJobContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Styled/StyleJobContainer */ "./components/Styled/StyleJobContainer.js");
var _jsxFileName = "/home/greg/sites/jobTracking/components/Jobs/JobsContainer.js";







var JobsContainer = function JobsContainer() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_3__["JobContext"]),
      columnOrder = _useContext.columnOrder,
      columns = _useContext.columns,
      jobs = _useContext.jobs,
      onDragEnd = _useContext.onDragEnd,
      modalTrigger = _useContext.modalTrigger,
      isModalOpen = _useContext.isModalOpen;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styled_StyleJobContainer__WEBPACK_IMPORTED_MODULE_5__["ContainerJobContain"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["DragDropContext"], {
    onDragEnd: onDragEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, columnOrder && columnOrder.map(function (columnId, index) {
    var column = columns[columnId];
    var jobsList = column.jobs.map(function (jobId) {
      return jobs[jobId];
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Column__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: column.id,
      column: column,
      jobs: jobsList,
      index: index,
      modalTrigger: modalTrigger,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  })), isModalOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (JobsContainer);

/***/ }),

/***/ "./components/Styled/StyleJobContainer.js":
/*!************************************************!*\
  !*** ./components/Styled/StyleJobContainer.js ***!
  \************************************************/
/*! exports provided: ContainerJobContain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerJobContain", function() { return ContainerJobContain; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ContainerJobContain = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "StyleJobContainer__ContainerJobContain",
  componentId: "sc-4b946y-0"
})(["grid-row:content;display:grid;grid-template-columns:repeat(5,1fr);grid-column-gap:1em;background-color:#f2f5fa;padding:2em 0;"]);

/***/ })

})
//# sourceMappingURL=index.js.2edc8c70a21a775b4043.hot-update.js.map