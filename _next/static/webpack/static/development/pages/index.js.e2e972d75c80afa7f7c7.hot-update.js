webpackHotUpdate("static/development/pages/index.js",{

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

  var editModal = function editModal(job, columnId) {};

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(JobContext.Provider, {
    value: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
      onDragEnd: onDragEnd,
      modalTrigger: modalTrigger,
      modalSubmit: modalSubmit,
      editModal: editModal
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (JobContextProvider);


/***/ })

})
//# sourceMappingURL=index.js.e2e972d75c80afa7f7c7.hot-update.js.map