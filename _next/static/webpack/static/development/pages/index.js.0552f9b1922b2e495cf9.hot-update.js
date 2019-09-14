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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Column */ "./components/Jobs/Column.js");
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/JobContext */ "./components/context/JobContext.js");
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
      isModalOpen = _useContext.isModalOpen;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__["DragDropContext"], {
    onDragEnd: onDragEnd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
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
        lineNumber: 36
      },
      __self: this
    });
  })), isModalOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ModalForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (JobsContainer);

/***/ }),

/***/ "./components/ModalForm.js":
/*!*********************************!*\
  !*** ./components/ModalForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_isModalValid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/isModalValid */ "./lib/isModalValid.js");
/* harmony import */ var _context_JobContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context/JobContext */ "./components/context/JobContext.js");



var _jsxFileName = "/home/greg/sites/jobTracking/components/ModalForm.js";




var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ModalForm__Overlay",
  componentId: "sc-1vszn36-0"
})(["background-color:rgba(51,41,41,0.65);position:fixed;min-height:100vh;min-width:100vw;z-index:10;top:0;left:0;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ModalForm__Container",
  componentId: "sc-1vszn36-1"
})(["width:360px;height:auto;position:absolute;background:#fff;top:calc(50% - 160px);left:calc(50% - 180px);border-radius:5px;padding:1em;"]);
var Close = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ModalForm__Close",
  componentId: "sc-1vszn36-2"
})(["margin:10px 0;text-align:right;font-size:1.5em;height:30px;width:100%;float:right;line-height:30px;font-weight:700;"]);
var Pointer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ModalForm__Pointer",
  componentId: "sc-1vszn36-3"
})(["width:30px;height:30px;float:right;text-align:center;cursor:pointer;"]);
var H4 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h4.withConfig({
  displayName: "ModalForm__H4",
  componentId: "sc-1vszn36-4"
})(["font-weight:700;font-size:1.2em;font-family:sans-serif;margin:0px 0px 20px 20px;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].label.withConfig({
  displayName: "ModalForm__Label",
  componentId: "sc-1vszn36-5"
})(["display:block;margin-bottom:10px;font-family:'Red Hat Text',sans-serif;color:rgb(152,161,179);margin:0px 0px 10px 15px;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input.withConfig({
  displayName: "ModalForm__Input",
  componentId: "sc-1vszn36-6"
})(["display:block;height:30px;width:90%;margin:0 auto 10px;border:none;background-color:rgb(242,245,250);border-radius:0px;&:focus{outline:none;border-bottom:2px solid rgb(33,150,243);}"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "ModalForm__Button",
  componentId: "sc-1vszn36-7"
})(["margin:20px;float:right;width:75px;height:35px;cursor:pointer;background-color:rgb(22,138,230);outline:none;border:1px solid rgb(22,138,230);border-radius:2px;color:#fff;font-weight:700;font-size:1em;"]);

var ModalForm = function ModalForm() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_JobContext__WEBPACK_IMPORTED_MODULE_6__["JobContext"]),
      _useContext$modalData = _useContext.modalData,
      company = _useContext$modalData.company,
      position = _useContext$modalData.position,
      modalTrigger = _useContext.modalTrigger,
      modalSubmit = _useContext.modalSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    company: company,
    position: position
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      isValid = _useState4[0],
      setIsValid = _useState4[1];

  var node = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    if (node.current && !node.current.contains(e.target)) {
      modalTrigger(null);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('click', handleClick);
    return function () {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  var handleForm = function handleForm(e) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
    Object(_lib_isModalValid__WEBPACK_IMPORTED_MODULE_5__["default"])(state, setIsValid);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    modalSubmit(state);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Overlay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, {
    ref: node,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Close, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Pointer, {
    onClick: function onClick() {
      return modalTrigger(null);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "\u2613")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(H4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Add Job"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Label, {
    htmlFor: "company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Company"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Input, {
    name: "company",
    value: state.company,
    autoComplete: "off",
    onChange: function onChange(e) {
      return handleForm(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Label, {
    htmlFor: "position",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Position"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Input, {
    name: "position",
    value: state.position,
    autoComplete: "off",
    onChange: function onChange(e) {
      return handleForm(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    disabled: !isValid,
    onClick: function onClick(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Save")));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalForm);

/***/ }),

/***/ "./components/context/JobContext.js":
/*!******************************************!*\
  !*** ./components/context/JobContext.js ***!
  \******************************************/
/*! exports provided: default, JobContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobContext", function() { return JobContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/data */ "./lib/data.js");
/* harmony import */ var _lib_dragAndDrop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/dragAndDrop */ "./lib/dragAndDrop.js");






var _jsxFileName = "/home/greg/sites/jobTracking/components/context/JobContext.js";




var JobContext = react__WEBPACK_IMPORTED_MODULE_6___default.a.createContext();

var JobContextProvider = function JobContextProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      var initialState = JSON.parse(localStorage.getItem('data')) || _lib_data__WEBPACK_IMPORTED_MODULE_8__["default"];
      setState(initialState);
    } else {
      localStorage.setItem('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(state));
    }
  });

  var onDragEnd = function onDragEnd(result) {
    return Object(_lib_dragAndDrop__WEBPACK_IMPORTED_MODULE_9__["default"])(result, state, setState);
  };

  var modalTrigger = function modalTrigger(data) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
      isModalOpen: !state.isModalOpen,
      modalData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state.modalData, {
        columnId: data
      })
    }));
  };

  var modalSubmit = function modalSubmit(modalValues) {
    var company = modalValues.company,
        position = modalValues.position;
    var uniqId = uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()();
    var newJob = {
      id: uniqId,
      company: company,
      position: position,
      date: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()()
    };

    var newJobs = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state.jobs, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, uniqId, newJob));

    var selectedColumnId = state.modalData.columnId;
    var selectedColumn = state.columns[selectedColumnId];

    var newColumns = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state.columns, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, selectedColumnId, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, selectedColumn, {
      jobs: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedColumn.jobs), [uniqId])
    })));

    var newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
      jobs: newJobs,
      columns: newColumns,
      isModalOpen: !state.isModalOpen,
      modalData: {
        columnId: null,
        company: '',
        position: ''
      }
    });

    setState(newState);
  };

  var editModal = function editModal(job, columnId) {
    var company = job.company,
        position = job.position;

    var newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
      isModalOpen: !state.isModalOpen,
      modalData: {
        columnId: columnId,
        company: company,
        position: position
      }
    });

    setState(newState);
  };

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(JobContext.Provider, {
    value: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
      onDragEnd: onDragEnd,
      modalTrigger: modalTrigger,
      modalSubmit: modalSubmit,
      editModal: editModal
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (JobContextProvider);


/***/ })

})
//# sourceMappingURL=index.js.0552f9b1922b2e495cf9.hot-update.js.map