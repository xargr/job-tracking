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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");


var _jsxFileName = "/home/greg/sites/jobTracking/components/Jobs/Job.js";



var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Job__Container",
  componentId: "avkz8q-0"
})(["border:1px solid lightgrey;border-radius:2px;margin-bottom:8px;padding:8px;background-color:", ";"], function (props) {
  return props.isDragging ? 'lightgreen' : 'white';
});

var Job = function Job(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__["Draggable"], {
    draggableId: job.id,
    key: job.id,
    index: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, function (provided, snapshot) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: provided.innerRef
    }, provided.draggableProps, provided.dragHandleProps, {
      isDragging: snapshot.isDragging,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), job.company);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Job);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ })

})
//# sourceMappingURL=index.js.d87b6b936aec500289fd.hot-update.js.map