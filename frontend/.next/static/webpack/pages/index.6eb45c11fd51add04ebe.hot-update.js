self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/articles */ "./components/articles.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/seo */ "./components/seo.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Farm\xE1cias App\\project\\strapi\\v4\\frontend\\pages\\index.js",
    _this = undefined;






var Home = function Home(_ref) {
  var articles = _ref.articles,
      categories = _ref.categories,
      homepage = _ref.homepage;
  // const {
  //   transcript,
  //   listening,
  //   resetTranscript,
  //   browserSupportsSpeechRecognition
  // } = useSpeechRecognition();
  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {
    categories: categories,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_4__.default, {
      seo: homepage.attributes.seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-container uk-container-large",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: homepage.attributes.hero.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_articles__WEBPACK_IMPORTED_MODULE_2__.default, {
          articles: articles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFydGljbGVzIiwiY2F0ZWdvcmllcyIsImhvbWVwYWdlIiwiYXR0cmlidXRlcyIsInNlbyIsImhlcm8iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUF3QztBQUFBLE1BQXJDQyxRQUFxQyxRQUFyQ0EsUUFBcUM7QUFBQSxNQUEzQkMsVUFBMkIsUUFBM0JBLFVBQTJCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsY0FBVSxFQUFFRCxVQUFwQjtBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQUssU0FBRyxFQUFFQyxRQUFRLENBQUNDLFVBQVQsQ0FBb0JDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUNBQWY7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLRixRQUFRLENBQUNDLFVBQVQsQ0FBb0JFLElBQXBCLENBQXlCQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBU0UsOERBQUMseURBQUQ7QUFBVSxrQkFBUSxFQUFFTjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQTdCRDs7S0FBTUQsSTs7QUFzRE4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmViNDVjMTFmZDUxYWRkMDRlYmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9hcnRpY2xlc1wiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL3Nlb1wiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi9saWIvYXBpXCJcblxuXG5jb25zdCBIb21lID0gKHsgYXJ0aWNsZXMsIGNhdGVnb3JpZXMsIGhvbWVwYWdlIH0pID0+IHtcbiAgLy8gY29uc3Qge1xuICAvLyAgIHRyYW5zY3JpcHQsXG4gIC8vICAgbGlzdGVuaW5nLFxuICAvLyAgIHJlc2V0VHJhbnNjcmlwdCxcbiAgLy8gICBicm93c2VyU3VwcG9ydHNTcGVlY2hSZWNvZ25pdGlvblxuICAvLyB9ID0gdXNlU3BlZWNoUmVjb2duaXRpb24oKTtcblxuICAvLyBpZiAoIWJyb3dzZXJTdXBwb3J0c1NwZWVjaFJlY29nbml0aW9uKSB7XG4gIC8vICAgcmV0dXJuIDxzcGFuPkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHNwZWVjaCByZWNvZ25pdGlvbi48L3NwYW4+O1xuICAvLyB9XG4gIHJldHVybiAoXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfT5cbiAgICAgIDxTZW8gc2VvPXtob21lcGFnZS5hdHRyaWJ1dGVzLnNlb30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lciB1ay1jb250YWluZXItbGFyZ2VcIj5cbiAgICAgICAgICA8aDE+e2hvbWVwYWdlLmF0dHJpYnV0ZXMuaGVyby50aXRsZX08L2gxPlxuICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgPHA+TWljcm9waG9uZToge2xpc3RlbmluZyA/ICdvbicgOiAnb2ZmJ308L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e1NwZWVjaFJlY29nbml0aW9uLnN0YXJ0TGlzdGVuaW5nfT5TdGFydDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtTcGVlY2hSZWNvZ25pdGlvbi5zdG9wTGlzdGVuaW5nfT5TdG9wPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0VHJhbnNjcmlwdH0+UmVzZXQ8L2J1dHRvbj5cbiAgICAgIDxwPnt0cmFuc2NyaXB0fTwvcD5cbiAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPEFydGljbGVzIGFydGljbGVzPXthcnRpY2xlc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgW2FydGljbGVzUmVzLCBjYXRlZ29yaWVzUmVzLCBob21lcGFnZVJlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICBmZXRjaEFQSShcIi9ob21lcGFnZVwiLCB7XG4gICAgICBwb3B1bGF0ZToge1xuICAgICAgICBoZXJvOiBcIipcIixcbiAgICAgICAgc2VvOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhcnRpY2xlczogYXJ0aWNsZXNSZXMuZGF0YSxcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNSZXMuZGF0YSxcbiAgICAgIGhvbWVwYWdlOiBob21lcGFnZVJlcy5kYXRhLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9