self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/speech.js":
/*!******************************!*\
  !*** ./components/speech.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-speech-recognition */ "../node_modules/react-speech-recognition/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Farm\xE1cias App\\project\\strapi\\v4\\frontend\\components\\speech.js",
    _this = undefined,
    _s2 = $RefreshSig$();




var Speech = function Speech() {
  _s2();

  var _s = $RefreshSig$();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    transcript: '',
    listening: '',
    resetTranscript: ''
  }),
      value = _useState[0],
      setValue = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_s(function () {
    _s();

    var _useSpeechRecognition = (0,react_speech_recognition__WEBPACK_IMPORTED_MODULE_2__.useSpeechRecognition)(),
        transcript = _useSpeechRecognition.transcript,
        listening = _useSpeechRecognition.listening,
        resetTranscript = _useSpeechRecognition.resetTranscript,
        browserSupportsSpeechRecognition = _useSpeechRecognition.browserSupportsSpeechRecognition;

    setValue({
      transcript: transcript,
      listening: listening
    });

    if (!browserSupportsSpeechRecognition) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Browser doesn't support speech recognition."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }, _this);
    }
  }, "A9a6ydurrmkYOkBcA2V81f3zG/s=", false, function () {
    return [react_speech_recognition__WEBPACK_IMPORTED_MODULE_2__.useSpeechRecognition];
  }), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Microphone: ", value.listening ? 'on' : 'off']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: react_speech_recognition__WEBPACK_IMPORTED_MODULE_2__.default.startListening,
      children: "Start"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: react_speech_recognition__WEBPACK_IMPORTED_MODULE_2__.default.stopListening,
      children: "Stop"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: value.resetTranscript,
      children: "Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: value.transcript
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s2(Speech, "1EF4e0Fv80fQxzWY3drUr8F3MRM=");

_c = Speech;
/* harmony default export */ __webpack_exports__["default"] = (Speech);

var _c;

$RefreshReg$(_c, "Speech");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcGVlY2guanMiXSwibmFtZXMiOlsiU3BlZWNoIiwidXNlU3RhdGUiLCJ0cmFuc2NyaXB0IiwibGlzdGVuaW5nIiwicmVzZXRUcmFuc2NyaXB0IiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZUVmZmVjdCIsInVzZVNwZWVjaFJlY29nbml0aW9uIiwiYnJvd3NlclN1cHBvcnRzU3BlZWNoUmVjb2duaXRpb24iLCJTcGVlY2hSZWNvZ25pdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUVNQywrQ0FBUSxDQUFDO0FBQUNDLGNBQVUsRUFBRSxFQUFiO0FBQWlCQyxhQUFTLEVBQUUsRUFBNUI7QUFBZ0NDLG1CQUFlLEVBQUU7QUFBakQsR0FBRCxDQUZkO0FBQUEsTUFFYkMsS0FGYTtBQUFBLE1BRU5DLFFBRk07O0FBR3BCQyxrREFBUyxJQUFDLFlBQUk7QUFBQTs7QUFBQSxnQ0FNTEMsOEVBQW9CLEVBTmY7QUFBQSxRQUVQTixVQUZPLHlCQUVQQSxVQUZPO0FBQUEsUUFHUEMsU0FITyx5QkFHUEEsU0FITztBQUFBLFFBSVBDLGVBSk8seUJBSVBBLGVBSk87QUFBQSxRQUtQSyxnQ0FMTyx5QkFLUEEsZ0NBTE87O0FBUVRILFlBQVEsQ0FBQztBQUFDSixnQkFBVSxFQUFFQSxVQUFiO0FBQXlCQyxlQUFTLEVBQUVBO0FBQXBDLEtBQUQsQ0FBUjs7QUFDQSxRQUFJLENBQUNNLGdDQUFMLEVBQXVDO0FBQ3JDLDBCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRDtBQUNMLEdBWlE7QUFBQSxZQU1BRCwwRUFOQTtBQUFBLE1BWVAsRUFaTyxDQUFUO0FBZUMsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLGlDQUFnQkgsS0FBSyxDQUFDRixTQUFOLEdBQWtCLElBQWxCLEdBQXlCLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBUSxhQUFPLEVBQUVPLDRFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBUSxhQUFPLEVBQUVBLDJFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUU7QUFBUSxhQUFPLEVBQUVMLEtBQUssQ0FBQ0QsZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQUtFO0FBQUEsZ0JBQUlDLEtBQUssQ0FBQ0g7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQTNCRDs7SUFBTUYsTTs7S0FBQUEsTTtBQTRCTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MDJjNTdmMTdkNjM5MGM1YWUxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTcGVlY2hSZWNvZ25pdGlvbiwgeyB1c2VTcGVlY2hSZWNvZ25pdGlvbiB9IGZyb20gJ3JlYWN0LXNwZWVjaC1yZWNvZ25pdGlvbic7XHJcblxyXG5jb25zdCBTcGVlY2ggPSAoKSA9PiB7XHJcbiAgICBcclxuIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe3RyYW5zY3JpcHQ6ICcnLCBsaXN0ZW5pbmc6ICcnLCByZXNldFRyYW5zY3JpcHQ6ICcnfSlcclxuIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHRyYW5zY3JpcHQsXHJcbiAgICAgICAgbGlzdGVuaW5nLFxyXG4gICAgICAgIHJlc2V0VHJhbnNjcmlwdCxcclxuICAgICAgICBicm93c2VyU3VwcG9ydHNTcGVlY2hSZWNvZ25pdGlvblxyXG4gICAgICB9ID0gdXNlU3BlZWNoUmVjb2duaXRpb24oKTtcclxuICAgIFxyXG4gICAgICBzZXRWYWx1ZSh7dHJhbnNjcmlwdDogdHJhbnNjcmlwdCwgbGlzdGVuaW5nOiBsaXN0ZW5pbmd9KVxyXG4gICAgICBpZiAoIWJyb3dzZXJTdXBwb3J0c1NwZWVjaFJlY29nbml0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIDxzcGFuPkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHNwZWVjaCByZWNvZ25pdGlvbi48L3NwYW4+O1xyXG4gICAgICB9XHJcbiB9LFtdKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPk1pY3JvcGhvbmU6IHt2YWx1ZS5saXN0ZW5pbmcgPyAnb24nIDogJ29mZid9PC9wPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e1NwZWVjaFJlY29nbml0aW9uLnN0YXJ0TGlzdGVuaW5nfT5TdGFydDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e1NwZWVjaFJlY29nbml0aW9uLnN0b3BMaXN0ZW5pbmd9PlN0b3A8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt2YWx1ZS5yZXNldFRyYW5zY3JpcHR9PlJlc2V0PC9idXR0b24+XHJcbiAgICAgIDxwPnt2YWx1ZS50cmFuc2NyaXB0fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNwZWVjaDsiXSwic291cmNlUm9vdCI6IiJ9