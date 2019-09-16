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
var _jsxFileName = "/home/greg/sites/jobTracking/components/Jobs/JobsContainer.js";






var JobsContainer = function JobsContainer() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_3__["JobContext"]),
      columnOrder = _useContext.columnOrder,
      columns = _useContext.columns,
      jobs = _useContext.jobs,
      onDragEnd = _useContext.onDragEnd,
      modalTrigger = _useContext.modalTrigger,
      isModalOpen = _useContext.isModalOpen;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerJobContain, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["DragDropContext"], {
    onDragEnd: onDragEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
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
        lineNumber: 28
      },
      __self: this
    });
  })), isModalOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (JobsContainer);

/***/ })

})
//# sourceMappingURL=index.js.bcc06a5299d57ed16970.hot-update.js.map