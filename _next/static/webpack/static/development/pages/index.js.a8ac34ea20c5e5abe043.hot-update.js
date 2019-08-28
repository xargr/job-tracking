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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _Job__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Job */ "./components/Jobs/Job.js");






var _jsxFileName = "/home/greg/sites/jobTracking/components/Jobs/Column.js";




var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Column__Container",
  componentId: "vqkxbn-0"
})(["border:1px solid lightgrey;border-radius:2px;padding:1em;"]);
var H3 = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].h3.withConfig({
  displayName: "Column__H3",
  componentId: "vqkxbn-1"
})(["padding:8px;font-size:1.35em;font-weight:700;text-align:center;font-family:'Red Hat Text',sans-serif;span{background:#dde3f0;padding:0px 7px;margin-right:5px;border-radius:50%;height:10px;width:10px;line-height:10px;text-align:center;font-size:0.8em;font-weight:400;}"]);
var JobList = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Column__JobList",
  componentId: "vqkxbn-2"
})(["padding:8px;background-color:", ";"], function (props) {
  return props.isDraggingOver ? 'skyblue' : 'white';
});
var Button = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].button.withConfig({
  displayName: "Column__Button",
  componentId: "vqkxbn-3"
})([""]);

var Column =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Column, _React$PureComponent);

  function Column() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Column);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Column).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Column, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(H3, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, this.props.jobs.length), this.props.column.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Add job"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_8__["Droppable"], {
        droppableId: this.props.column.id,
        key: this.props.column.id,
        index: this.props.index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, function (provided, snapshot) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(JobList, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, provided.draggableProps, provided.dragHandleProps, {
          ref: provided.innerRef,
          isDraggingOver: snapshot.isDraggingOver,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }), _this.props.jobs.map(function (job, index) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Job__WEBPACK_IMPORTED_MODULE_9__["default"], {
            key: index,
            job: job,
            index: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          });
        }), provided.placeholder);
      }));
    }
  }]);

  return Column;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Column);

/***/ })

})
//# sourceMappingURL=index.js.a8ac34ea20c5e5abe043.hot-update.js.map