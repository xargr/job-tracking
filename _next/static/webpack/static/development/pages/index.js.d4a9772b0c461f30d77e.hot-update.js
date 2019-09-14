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

    console.log(newColumns);
  };

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(JobContext.Provider, {
    value: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
      onDragEnd: onDragEnd,
      modalTrigger: modalTrigger,
      modalSubmit: modalSubmit
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (JobContextProvider);


/***/ }),

/***/ "./lib/data.js":
/*!*********************!*\
  !*** ./lib/data.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = {
  jobs: {
    'job-1': {
      id: 'job-1',
      company: 'Google',
      position: 'Senior Front-end',
      date: 1566681661474
    },
    'job-2': {
      id: 'job-2',
      company: 'Aple',
      position: 'Medium Front-end',
      date: 1566681661474
    },
    'job-3': {
      id: 'job-3',
      company: 'Samsung',
      position: 'Lead Front-end',
      date: 1566681661474
    },
    'job-4': {
      id: 'job-4',
      company: 'Twitter',
      position: 'Lead Front-end',
      date: 1566681661474
    },
    'job-5': {
      id: 'job-5',
      company: 'UBS',
      position: 'Lead Front-end',
      date: 1566681661474
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Wishlist',
      jobs: ['job-1', 'job-3', 'job-5']
    },
    'column-2': {
      id: 'column-2',
      title: 'Applied',
      jobs: ['job-2', 'job-4']
    },
    'column-3': {
      id: 'column-3',
      title: 'Interview',
      jobs: []
    },
    'column-4': {
      id: 'column-4',
      title: 'Offer',
      jobs: []
    },
    'column-5': {
      id: 'column-5',
      title: 'Rejected',
      jobs: []
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
  isModalOpen: false,
  modalData: {
    columnId: null,
    company: '',
    position: ''
  }
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./lib/dragAndDrop.js":
/*!****************************!*\
  !*** ./lib/dragAndDrop.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (result, state, setState) {
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
});

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ })

})
//# sourceMappingURL=index.js.d4a9772b0c461f30d77e.hot-update.js.map