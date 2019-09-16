webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/toJson.js":
/*!***********************!*\
  !*** ./lib/toJson.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (jsonData) {
  var dataStr = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(jsonData);

  var dataUri = "data:application/json;charset=utf-8 ,".concat(encodeURIComponent(dataStr));
  var exportFileDefaultName = 'jobTracking.json'; // eslint-disable-next-line no-undef

  var linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
});

/***/ })

})
//# sourceMappingURL=_app.js.22aefe60cafc9317bd3c.hot-update.js.map