webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/context/JobContext.js":
/*!******************************************!*\
  !*** ./components/context/JobContext.js ***!
  \******************************************/
/*! exports provided: default, JobContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobContext", function() { return JobContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/data */ "./lib/data.js");
/* harmony import */ var _lib_dragAndDrop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/dragAndDrop */ "./lib/dragAndDrop.js");








var _jsxFileName = "/home/greg/sites/jobTracking/components/context/JobContext.js";




var JobContext = react__WEBPACK_IMPORTED_MODULE_8___default.a.createContext();

var JobContextProvider = function JobContextProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      var initialState = JSON.parse(localStorage.getItem('data')) || _lib_data__WEBPACK_IMPORTED_MODULE_10__["default"];
      setState(initialState);
    } else {
      localStorage.setItem('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(state));
    }
  });

  var onDragEnd = function onDragEnd(result) {
    return Object(_lib_dragAndDrop__WEBPACK_IMPORTED_MODULE_11__["default"])(result, state, setState);
  };

  var modalTrigger = function modalTrigger(data) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state, {
      isModalOpen: !state.isModalOpen,
      modalData: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state.modalData, data)
    }));
  };

  var editModal = function editModal(data) {
    console.log(data);
  };

  var modalSubmit = function modalSubmit(objValues) {
    var company = objValues.company,
        position = objValues.position;
    var uniqId = uuid_v4__WEBPACK_IMPORTED_MODULE_9___default()();
    var newJob = {
      id: uniqId,
      company: company,
      position: position,
      date: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_3___default()()
    };

    var newJobs = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.jobs);

    newJobs[uniqId] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, newJob);
    var colId = state.modalData.columnId;

    var newColumns = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, state.columns);

    var oldColumn = newColumns[colId];
    newColumns = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_4__["default"])("newColumns"), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state.columns, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, colId, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, oldColumn, {
      jobs: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(oldColumn.jobs), [uniqId])
    }))));

    var newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state, {
      columns: newColumns,
      jobs: newJobs,
      isModalOpen: !state.isModalOpen,
      modalData: {
        columnId: null,
        company: '',
        position: ''
      }
    });

    setState(newState);
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(JobContext.Provider, {
    value: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, state, {
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
//# sourceMappingURL=_app.js.efa09b10ef624f829cc1.hot-update.js.map