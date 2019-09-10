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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/data */ "./lib/data.js");




var _jsxFileName = "/home/greg/sites/jobTracking/components/context/JobContext.js";


var JobContext = react__WEBPACK_IMPORTED_MODULE_4___default.a.createContext();

var JobContextProvider = function JobContextProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    columns: [],
    jobs: []
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var initialState = JSON.parse(localStorage.getItem('data')) || _lib_data__WEBPACK_IMPORTED_MODULE_5__["default"];
    setState(initialState);
    react__WEBPACK_IMPORTED_MODULE_4__["useRef"];
  }); //   useEffect(() => {
  //     localStorage.setItem('data', JSON.stringify(state));
  //   }, [state]);

  var onDragEnd = function onDragEnd(result) {
    var _objectSpread3;

    var destination = result.destination,
        source = result.source,
        draggableId = result.draggableId;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    var start = state.columns[source.droppableId];
    var finish = state.columns[destination.droppableId];

    if (start === finish) {
      var newJobIds = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(start.jobs);

      newJobIds.splice(source.index, 1);
      newJobIds.splice(destination.index, 0, draggableId);

      var newColumn = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, start, {
        jobs: newJobIds
      });

      var _newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        columns: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.columns, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, newColumn.id, newColumn))
      });

      setState(_newState);
      return;
    }

    var startJobIds = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(start.jobs);

    startJobIds.splice(source.index, 1);

    var newStart = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, start, {
      jobs: startJobIds
    });

    var finishJobIds = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(finish.jobs);

    finishJobIds.splice(destination.index, 0, draggableId);

    var newFinish = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, finish, {
      jobs: finishJobIds
    });

    var newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      columns: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.columns, (_objectSpread3 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, newStart.id, newStart), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, newFinish.id, newFinish), _objectSpread3))
    });

    setState(newState);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(JobContext.Provider, {
    value: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      onDragEnd: onDragEnd
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (JobContextProvider);


/***/ })

})
//# sourceMappingURL=index.js.129fc053d19268a367ad.hot-update.js.map