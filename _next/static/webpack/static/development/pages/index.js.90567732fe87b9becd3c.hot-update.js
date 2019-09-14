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
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/JobContext */ "./components/context/JobContext.js");
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_context_JobContext__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/greg/sites/jobTracking/components/Jobs/Job.js";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Job__Container",
  componentId: "avkz8q-0"
})(["border:1px solid lightgrey;border-radius:2px;margin-bottom:8px;padding:8px;background-color:", ";"], function (props) {
  return props.isDragging ? 'lightgreen' : 'white';
});

var Job = function Job(_ref) {
  var job = _ref.job,
      index = _ref.index,
      columnId = _ref.columnId;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_4__["JobContext"]),
      editModal = _useContext.editModal;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Draggable"], {
    draggableId: job.id,
    key: job.id,
    index: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, function (provided, snapshot) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      onDoubleClick: function onDoubleClick() {
        return editModal(job);
      },
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps, {
      isDragging: snapshot.isDragging,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), job.company);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Job);

/***/ }),

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Column */ "./components/Jobs/Column.js");
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/JobContext */ "./components/context/JobContext.js");
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_context_JobContext__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ModalForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ModalForm */ "./components/ModalForm.js");
var _jsxFileName = "/home/greg/sites/jobTracking/components/Jobs/JobsContainer.js";






var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "JobsContainer__Container",
  componentId: "sc-1sf0djg-0"
})(["grid-row:content;display:grid;grid-template-columns:repeat(5,1fr);grid-column-gap:1em;background-color:#f2f5fa;padding:2em 0;"]);

var JobsContainer = function JobsContainer() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_4__["JobContext"]),
      columnOrder = _useContext.columnOrder,
      columns = _useContext.columns,
      jobs = _useContext.jobs,
      onDragEnd = _useContext.onDragEnd,
      modalTrigger = _useContext.modalTrigger,
      isModalOpen = _useContext.isModalOpen,
      modalSubmit = _useContext.modalSubmit;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["DragDropContext"], {
    onDragEnd: onDragEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, columnOrder && columnOrder.map(function (columnId, index) {
    var column = columns[columnId];
    var jobsList = column.jobs.map(function (jobId) {
      return jobs[jobId];
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Column__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: column.id,
      column: column,
      jobs: jobsList,
      index: index,
      modalTrigger: modalTrigger,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    });
  })), isModalOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    modalTrigger: modalTrigger,
    modalSubmit: modalSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (JobsContainer);

/***/ }),

/***/ "./components/context/JobContext.js":
/*!******************************************!*\
  !*** ./components/context/JobContext.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/data.js":
false,

/***/ "./lib/dragAndDrop.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
false,

/***/ "./node_modules/uuid/lib/rng-browser.js":
false,

/***/ "./node_modules/uuid/v4.js":
false

})
//# sourceMappingURL=index.js.90567732fe87b9becd3c.hot-update.js.map