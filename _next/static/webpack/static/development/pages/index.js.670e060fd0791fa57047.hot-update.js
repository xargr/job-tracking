webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/JobsPanel/JobsPanel.js":
/*!*******************************************!*\
  !*** ./components/JobsPanel/JobsPanel.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _FeatureList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FeatureList */ "./components/JobsPanel/FeatureList.js");
/* harmony import */ var _ModalForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ModalForm */ "./components/ModalForm.js");
/* harmony import */ var _EditModalForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../EditModalForm */ "./components/EditModalForm.js");











var _jsxFileName = "/home/greg/sites/jobTracking/components/JobsPanel/JobsPanel.js";





var JobsPanel =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(JobsPanel, _React$PureComponent);

  function JobsPanel(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, JobsPanel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(JobsPanel).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "loadLocalStorage", function () {
      var localData = JSON.parse(localStorage.getItem('data'));

      if (localData) {
        _this.setState({
          data: localData
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "clickAddJob", function (column) {
      _this.setState({
        isOpen: !_this.state.isOpen,
        column: column
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleModalData", function (data) {
      _this.setState({
        isOpen: !_this.state.isOpen
      }, function () {
        _this.saveDataToLocalStorage(data);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "saveDataToLocalStorage", function (data) {
      if (window) {
        var column = _this.state.column;
        var oldStorage = JSON.parse(localStorage.getItem('data'));

        if (oldStorage && oldStorage[column]) {
          var obj = oldStorage;
          obj[column] = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(oldStorage[column]), [data]);
          localStorage.setItem('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(obj));

          _this.loadLocalStorage();
        } else if (oldStorage && !oldStorage[column]) {
          var _obj = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(oldStorage, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({}, column, [data]));

          localStorage.setItem('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_obj));

          _this.loadLocalStorage();
        } else {
          var _obj2 = {};
          _obj2[column] = [data];
          localStorage.setItem('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_obj2));

          _this.loadLocalStorage();
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "updateItem", function (column, item, index) {
      _this.setState({
        isOpen: !_this.state.isOpen,
        updateColumn: column,
        updateIndex: index,
        updateItem: item
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleEditModalData", function (d) {
      console.log(d);
    });

    _this.state = {
      isOpen: false,
      column: 'wishlist',
      data: {},
      updateData: {},
      updateIndex: null,
      updateColumn: ''
    };
    _this.columns = ['wishlist', 'applied', 'interview', 'offer', 'rejected'];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(JobsPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.loadLocalStorage();
      window.addEventListener('click', function (event) {
        if (_this2.state.isOpen) {
          // create dom element
          var elem = document.createElement('div');
          var div = elem.setAttribute('class', 'overlay'); // compare created dom element and element that clicked on

          var isOuterClick = elem.isEqualNode(event.target); // if is equal set state to close modal

          if (isOuterClick) {
            _this2.setState({
              isOpen: !_this2.state.isOpen,
              updateData: {},
              updateIndex: null,
              updateColumn: ''
            });
          }
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('click', function () {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          data = _this$state.data,
          updateIndex = _this$state.updateIndex;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, this.columns.map(function (comp) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_FeatureList__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: comp,
          data: data[comp],
          column: comp,
          clickAddJob: _this3.clickAddJob,
          updateItem: _this3.updateItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        });
      }), isOpen && !updateIndex && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ModalForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
        handleData: this.handleModalData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), isOpen && updateIndex && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_EditModalForm__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        handleData: this.handleEditModalData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      })));
    }
  }]);

  return JobsPanel;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (JobsPanel);

/***/ })

})
//# sourceMappingURL=index.js.670e060fd0791fa57047.hot-update.js.map