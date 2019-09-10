webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Jobs/Column.js":
/*!***********************************!*\
  !*** ./components/Jobs/Column.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _Job__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Job */ "./components/Jobs/Job.js");

var _jsxFileName = "/home/greg/sites/jobTracking/components/Jobs/Column.js";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Column__Container",
  componentId: "vqkxbn-0"
})(["border:1px solid lightgrey;border-radius:2px;padding:1em;"]);
var H3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "Column__H3",
  componentId: "vqkxbn-1"
})(["padding:8px;font-size:1.15em;font-weight:700;text-align:center;font-family:'Red Hat Text',sans-serif;span{background:#dde3f0;padding:0px 7px;margin-right:5px;border-radius:50%;height:10px;width:10px;line-height:10px;text-align:center;font-size:0.8em;font-weight:400;}"]);
var JobList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Column__JobList",
  componentId: "vqkxbn-2"
})(["padding:8px;background-color:", ";"], function (props) {
  return props.isDraggingOver ? 'skyblue' : 'white';
});
var Center = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Column__Center",
  componentId: "vqkxbn-3"
})(["text-align:center;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "Column__Button",
  componentId: "vqkxbn-4"
})(["color:", ";border:1px dashed #2696f3;background-color:transparent;margin:1em;padding:0.75em 1.5em;font-family:'Red Hat Text',sans-serif;font-weight:400;cursor:pointer;font-size:1em;&:hover{background-color:", ";color:#fff;}&:focus{outline:none;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.blue;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.blue;
});

var Column = function Column(_ref3) {
  var jobs = _ref3.jobs,
      column = _ref3.column,
      index = _ref3.index;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, jobs.length), column.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Center, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    onClick: function onClick() {
      return modalTrigger();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "+ Add job")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Droppable"], {
    droppableId: column.id,
    key: column.id,
    index: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, function (provided, snapshot) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(JobList, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.draggableProps, provided.dragHandleProps, {
      ref: provided.innerRef,
      isDraggingOver: snapshot.isDraggingOver,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), jobs && jobs.map(function (job, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Job__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: index,
        job: job,
        index: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      });
    }), provided.placeholder);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Column);

/***/ })

})
//# sourceMappingURL=index.js.d27fd683ae576946ee95.hot-update.js.map